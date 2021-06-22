/**
 * Contains the core metronome functionality and
 * acts as a wrapper for the metronome interface
 * components.
 * 
 * Also contains the Note class and PlayButton and
 * Settings components.
 * 
 * Metronome functionality based on the example here:
 * https://github.com/cwilso/metronome
 */

import React from 'react';
import worker from 'workerize-loader!./worker' // eslint-disable-line import/no-webpack-loader-syntax

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Animation from './Animation';
import TempoInputs from './TempoInputs';

class Note {
  constructor(time = 0, beat = 0, click = 0) {
    this.time = time;
    this.beat = beat;
    this.click = click;
  }
}

function PlayButton(props) {
  const playElement = <FontAwesomeIcon icon={faPlay} />;
  const stopElement = <FontAwesomeIcon icon={faStop} />;
  return (
    <div className="play-row">
      <button className="btn-circle large" onClick={props.onClick} name="play-button">
        {props.value === "Start" ? playElement : stopElement}
      </button>
    </div>
  );
}

function Settings(props) {
  return (
    <div className="settings-row">
      <div className="select-wrapper">
        <select 
          value={props.beatsPerBar} 
          onChange={props.handleChange}
          name="beat-select"
        >
          <option value="2">2/4</option>
          <option value="3">3/4</option>
          <option value="4">4/4</option>
          <option value="5">5/4</option>
          <option value="6">6/4</option>
          <option value="7">7/4</option>
        </select>
      </div>

      <div className="select-wrapper">
        <select 
          value={props.clicksPerBeat} 
          onChange={props.handleChange}
          name="click-select"
        >
          <option value="1">1 click</option>
          <option value="2">2 clicks</option>
          <option value="3">3 clicks</option>
          <option value="4">4 clicks</option>
          <option value="5">5 clicks</option>
          <option value="6">6 clicks</option>
          <option value="7">7 clicks</option>
        </select>
      </div>
    </div>
  );
}

/***
 * 
 * MAIN METRONOME COMPONENT
 * 
 ***/

export default class Metronome extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      noteLength: .05,
      lookahead: 25,
      scheduleAheadTime: .1,

      tempo: 120,
      maxTempo: 240,
      minTempo: 30,

      nextBeat: 0,
      nextBeatTime: 0,

      nextClick: 0,
      nextClickTime: 0,

      isPlaying: false,
      audioUnlocked: false,
      noteQueue: [],      

      beatsPerBar: 4,
      clicksPerBeat: 1,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTick = this.handleTick.bind(this);

    var AudioContext = window.AudioContext
      || window.webkitAudioContext
      || false; 
    this.audioContext = new AudioContext({ sampleRate: 44100 });
    
    this.unlockAudio();

    this.timerWorker = worker();
    this.timerWorker.onmessage = (e) => {
      if (e.data === "tick") {
        this.handleTick();
      }
      /* else
        console.log("Worker: " + e.data); */
    };
    this.timerWorker.postMessage({ "interval":this.state.lookahead });
  }

  scheduleNote(note) {
    var osc = this.audioContext.createOscillator();
    var gainNode = this.audioContext.createGain();
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    if (note.beat !== 0) {
      osc.frequency.value = 440.0;
    } else {
      osc.frequency.value = 880.0;
    }
    if (note.click !== 0) {
      osc.frequency.value = 330.0;
    }

    osc.start(this.state.nextClickTime);
    gainNode.gain.setTargetAtTime(0, this.state.nextClickTime + this.state.noteLength, 0.015);
    osc.stop(this.state.nextClickTime + this.state.noteLength*2);
  }

  handleTick() {
    if (!this.state.isPlaying) return;

    while (this.state.nextClickTime < this.audioContext.currentTime + this.state.scheduleAheadTime) {  
      let nextBeat = this.state.nextBeat;
      let nextClick = this.state.nextClick;
      let secondsPerBeat = 60.0 / this.state.tempo;
      let nextBeatTime = this.state.nextBeatTime;
    
      let nextNote = new Note(this.state.nextClickTime, nextBeat, nextClick);  
      if (nextNote.click === 0) {
        nextBeatTime = nextNote.time + secondsPerBeat;
      }
      this.scheduleNote(nextNote);

      if (this.state.clicksPerBeat > 1) {
        nextClick++;
        if (nextClick >= this.state.clicksPerBeat) {
          nextClick = 0;
          nextBeat++;
          if (nextBeat >= this.state.beatsPerBar) {
            nextBeat = 0;
          }
        }
      } else {
        nextBeat++;
        nextClick = 0;
        if (nextBeat >= this.state.beatsPerBar) {
          nextBeat = 0;
        }
      }

      this.setState((state) => {
        const queue = state.noteQueue.concat(nextNote);
        return {
          noteQueue: queue,
          nextClickTime: state.nextClickTime + 1/this.state.clicksPerBeat * secondsPerBeat,
          nextBeatTime: nextBeatTime,
          nextBeat: nextBeat,
          nextClick: nextClick
        };
      });
    }
  }

  unlockAudio() {
    var buffer = this.audioContext.createBuffer(1, 1, 22050);
    var node = this.audioContext.createBufferSource();
    node.buffer = buffer;
    node.start(this.audioContext.currentTime);
  }
  
  handleClick(e) {
    let nextTempo = 0;
    switch (e.target.name) {
      case "increment-tempo":
        nextTempo = parseInt(this.state.tempo)+1;
        this.setState(state => ({ tempo: nextTempo > state.maxTempo ? state.tempo : nextTempo }));
        return;
      case "decrement-tempo":
        nextTempo = parseInt(this.state.tempo)-1;
        this.setState(state => ({ tempo: nextTempo < state.minTempo ? state.tempo : nextTempo }));
        return;
      default:
        break;
    }

    this.timerWorker.postMessage(this.state.isPlaying ? "stop" : "start");

    if (this.state.isPlaying) {
      this.audioContext.close();

      this.setState(state => ({
        isPlaying: !state.isPlaying,
        audioUnlocked: false,
        noteQueue: [],
        nextClickTime: 0,
        nextBeat: 0,
        nextClick: 0
      }));
    }
    else {
      let AudioContext = window.AudioContext
        || window.webkitAudioContext
        || false; 
      this.audioContext = new AudioContext({ sampleRate: 44100 });
                      
      if (!this.state.audioUnlocked) {
        this.unlockAudio();
      }

      this.setState(state => ({
        isPlaying: !state.isPlaying,
        audioUnlocked: true
      }));
    }
  }
  
  handleChange(e) {
    if (e.target.name === "beat-select") {
      this.setState({ beatsPerBar: e.target.value });
      return;
    }
    if (e.target.name === "click-select") {
      this.setState({ clicksPerBeat: e.target.value });
      return;
    }

    this.setState({ tempo: e.target.value });
  }

  render() {
    return (
      <>
        <TempoInputs 
          onChange={this.handleChange} 
          onClick={this.handleClick} 
          tempo={this.state.tempo} 
          maxTempo={this.state.maxTempo} 
          minTempo={this.state.minTempo} 
        />
        <Animation 
          tempo={this.state.tempo} 
          nbt={this.state.nextBeatTime} 
          isplaying={this.state.isPlaying} 
          queue={this.state.noteQueue} 
          audiocontext={this.audioContext} 
          beatsPerBar={this.state.beatsPerBar} 
          theme={this.props.theme}
        />
        <PlayButton 
          value={this.state.isPlaying ? "Stop" : "Start"} 
          onClick={this.handleClick} 
        />
        <Settings 
          beatsPerBar={this.state.beatsPerBar} 
          clicksPerBeat={this.state.clicksPerBeat} 
          handleChange={this.handleChange}
        />
      </>
    );
  }
}