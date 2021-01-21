import React from 'react';
import ReactDOM from 'react-dom';

// get our fontawesome imports
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Metronome from './App';





/***
 * 
 * INPUTS
 * 
 */


function Button(props) {
  const playElement = <FontAwesomeIcon icon={faPlay} />;
  const stopElement = <FontAwesomeIcon icon={faStop} />;
  return (
    <button 
      className="button-play" 
      onClick={props.onClick}
      name="play-button"
    >
      {props.value === "Start" ? playElement : stopElement}
    </button>
  );
}

function Slider(props) {
  return (
    <input 
      type="range" 
      id="tempo" 
      min="30" 
      max="300" 
      step="1"
      value={props.tempo}
      onChange={props.onChange}/>
  )
}







/***
 * 
 * CANVAS
 * 
 */

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.canvasRef = React.createRef();

    this.resetCanvas = this.resetCanvas.bind(this);

    window.onorientationchange = this.resetCanvas;
    window.onresize = this.resetCanvas;
  }
  
  componentDidMount() {
    this.drawCanvas();
    this.resetCanvas();
  }
  
  componentDidUpdate() {
    this.drawCanvas();
  }

  resetCanvas() {
    this.canvasRef.current.width = window.innerWidth;
    this.canvasRef.current.height = window.innerHeight;
    window.scrollTo(0,0); 
  }
  
  drawCanvas() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    let color = "#333";
    ctx.fillStyle = color;
    ctx.globalAlpha = 1;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!this.props.isplaying) return;

    let percentage = ((60/this.props.tempo) - (this.props.nextnotetime - this.props.currenttime)) / (60/this.props.tempo);
    if (percentage < 0) percentage = 0;

    color = "#dd77dd";
    if (this.props.tick === true) {
      color = "#eee";
    }
    ctx.strokeStyle = color;
    ctx.globalAlpha = 1-percentage; //this.props.alpha;
    ctx.beginPath();
    ctx.lineWidth = 100-percentage*100;
    ctx.arc(canvas.width/2, canvas.height/3, percentage * 200, 0, 2 * Math.PI);
    
    ctx.stroke(); 
    ctx.fillStyle = "#ffaaff";
    ctx.fill();    
  }
  
  render() {
    return (
      <canvas ref={this.canvasRef} id="canvas" height="100" width="100"/>  
    );
  }
}

class Animation extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tick: false,
      lastNoteDrawn: null,
      alpha: 0,
      percentToNextNote: 0,
      nextNoteTime: 0
    }
    
    this.updateAnimation = this.updateAnimation.bind(this);
  }
  
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimation);
  }
  
  updateAnimation() {
    if (this.props.isplaying) {

      let currentTime = this.props.audiocontext.currentTime;
      let notesInQueue = this.props.queue;
      let currentNote = this.state.lastNoteDrawn;

  
      while (notesInQueue.length && notesInQueue[0].time < currentTime) {
          currentNote = notesInQueue[0];
          notesInQueue.splice(0,1);
      }

      if (currentNote !== this.state.lastNoteDrawn) {
        this.setState((state, props) => ({
          tick: true,
          alpha: 1,
          percentToNextNote: 0,
          nextNoteTime: currentNote.time + (60 / props.tempo)

        }));
      } else {

        

        this.setState((state, props) => ({
          tick: false,
          alpha: state.alpha - .1 < 0 ? 0 : state.alpha-.1,
        }));
      }
    } else {
        this.setState(state => ({
          tick: false,
          alpha: state.alpha - .1 < 0 ? 0 : state.alpha-.1
        }));
    }
    
    this.rAF = requestAnimationFrame(this.updateAnimation);
  }
  
  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }
  
  render () {
    return (
      <Canvas tick={this.state.tick} tempo={this.props.tempo} nextnotetime={this.state.nextNoteTime} alpha={this.state.alpha} currenttime={this.props.audiocontext.currentTime} isplaying={this.props.isplaying}/>
    )
  }
}







class TempoInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tempo-inputs">
        <div className="tempo-input-row">
          <button className="button-tempo large" name="decrement-tempo" onClick={this.props.onClick}>-</button>
          <div className="tempo-label">
            <span className="large">{this.props.tempo}</span> BPM
          </div>
          <button className="button-tempo large" name="increment-tempo" onClick={this.props.onClick}>+</button>
        </div>
        <Slider onChange={this.props.onChange} tempo={this.props.tempo}/>
      </div>
    )
  }
}

function RadioButton(props) {
  var radioElement = <input 
                        className="checkbox"
                        type="radio" 
                        id={props.id + "-" + props.value}
                        name={props.id}
                        value={props.value}
                      />
  if (props.default===props.id) {
    radioElement = <input 
                      className="checkbox"
                      type="radio" 
                      id={props.id + "-" + props.value}
                      name={props.id}
                      value={props.value}
                      defaultChecked
                    />
  }
  return (
    <span>
      {radioElement}
      <label htmlFor={props.id + "-" + props.value}>{props.value}</label>
    </span>
  )
}

class RadioInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let label = this.props.label;
    if (this.props.value > 1) {
      if (this.props.id === "beats") {
        label = " beats per bar";
      } else {
        label = " clicks per beat";
      }
    }

    return (
      <div className="radio-input-section">
        <div className="label"><b>{this.props.value}</b>{label}</div>
        <div className="radio-scrollable"  onChange={this.props.onChange}>
          <RadioButton value="1" id={this.props.id} default="clicks" />
          <RadioButton value="2" id={this.props.id}/>
          <RadioButton value="3" id={this.props.id}/>
          <RadioButton value="4" id={this.props.id} default="beats" />
          <RadioButton value="5" id={this.props.id}/>
          <RadioButton value="6" id={this.props.id}/>
          <RadioButton value="7" id={this.props.id}/>
          <RadioButton value="8" id={this.props.id}/>
          <RadioButton value="9" id={this.props.id}/>
          <RadioButton value="10" id={this.props.id}/>
          <RadioButton value="11" id={this.props.id}/>
          <RadioButton value="12" id={this.props.id}/>
        </div>
      </div>
    )
  }

}




/***
 * 
 * MAIN METRONOME COMPONENT
 * 
 */

class Metronome extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tempo: 120,
      maxTempo: 300,
      minTempo: 30,
      beatsPerBar: 4,
      clicksPerBeat: 1,
      nextBeat: 0,
      nextClick: 0,
      isPlaying: false,
      lookahead: 25,
      scheduleAheadTime: .1,
      nextNoteTime: 0,
      noteLength: .1,
      audioUnlocked: false,
      noteQueue: [],      
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTick = this.handleTick.bind(this);

    this.audioContext = new AudioContext();

    this.timerWorker = new Worker("/worker.js");

    this.timerWorker.onmessage = (e) => {
        if (e.data === "tick") {
            this.handleTick();
        }
        else
            console.log("message: " + e.data);
    };


    this.timerWorker.postMessage({"interval":this.state.lookahead});
    
  }

  scheduleNote(note) {
    console.log("Scheduling note to be played at: " + this.state.nextNoteTime);
    var osc = this.audioContext.createOscillator();
    var gainNode = this.audioContext.createGain();
    osc.connect(gainNode);
    //osc.connect( this.audioContext.destination );
    gainNode.connect(this.audioContext.destination);
    if (note.beat != 0) {
      osc.frequency.value = 440.0;
    } else {
      osc.frequency.value = 880.0;
    }
    if (note.click != 0) {
      osc.frequency.value = 330.0;
    }

    osc.start( this.state.nextNoteTime);
    gainNode.gain.setTargetAtTime(0, this.state.nextNoteTime + this.state.noteLength, 0.015);
    osc.stop( this.state.nextNoteTime + this.state.noteLength*2);

  }

  handleTick() {
    while (this.state.nextNoteTime < this.audioContext.currentTime + this.state.scheduleAheadTime) {

      let nextBeat = this.state.nextBeat;
      let nextClick = this.state.nextClick;
    
      let nextNote = new Note(this.state.nextNoteTime, nextBeat, nextClick);
      this.scheduleNote(nextNote);

      if (this.state.clicksPerBeat > 1) {
        nextClick++;
        if (nextClick >= this.state.clicksPerBeat) {
          nextClick = 0;
          nextBeat++;
          if (nextBeat >= this.state.beatsPerBar) nextBeat = 0;
        }
      } else {
        nextBeat++;
        if (nextBeat >= this.state.beatsPerBar) nextBeat = 0;
      }

      

      this.setState(state => {
        const queue = state.noteQueue.concat(nextNote);
        let secondsPerBeat = 60.0 / state.tempo;
        return {
          noteQueue: queue,
          nextNoteTime: state.nextNoteTime + 1/state.clicksPerBeat * secondsPerBeat,
          nextBeat: nextBeat,
          nextClick: nextClick
        };
      });
    }
  }
  
  handleClick(e) {

    if (e.target.name === "increment-tempo") {
      this.setState(state => ({tempo: state.tempo+1 > state.maxTempo ? state.tempo : state.tempo+1}));
      return;
    } else if (e.target.name === "decrement-tempo") {
      this.setState(state => ({tempo: state.tempo-1 < state.minTempo ? state.tempo : state.tempo-1}));
      return;
    }

    this.audioContext = new AudioContext();


    this.timerWorker.postMessage(this.state.isPlaying ? "stop" : "start");

    if (!this.state.audioUnlocked) {
      var buffer = this.audioContext.createBuffer(1, 1, 22050);
      var node = this.audioContext.createBufferSource();
      node.buffer = buffer;
      node.start(this.audioContext.currentTime);
    }

    this.setState(state => ({
      isPlaying: !state.isPlaying,
      audioUnlocked: true,
      noteQueue: [],
      nextNoteTime: 0,
      nextBeat: 0,
      nextClick: 0
    }));
  }
  
  handleChange(e) {
    if (e.target.name === "beats") {
      this.setState({beatsPerBar: e.target.value});
    } else if (e.target.name==="clicks") {
      this.setState({clicksPerBeat: e.target.value});
    } else {
      this.setState({tempo: e.target.value});
    }

  }
  
  render() {
    return (
      <div className="metronome">
        <Animation tempo={this.state.tempo} isplaying={this.state.isPlaying} queue={this.state.noteQueue} audiocontext={this.audioContext} />
        <div className="inputs">
          <Button 
            value={this.state.isPlaying ? "Stop" : "Start"}
            onClick={this.handleClick} />
          <TempoInputs onChange={this.handleChange} tempo={this.state.tempo} onClick={this.handleClick}/>
          <RadioInputs label=" beat per bar" id="beats" onChange={this.handleChange} value={this.state.beatsPerBar} />
          <RadioInputs label=" click per beat" id="clicks" onChange={this.handleChange} value={this.state.clicksPerBeat} />
        </div>
      </div>
    );
  }
}




class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="navbar">
        <div className="logo">
          Zen Metronome
        </div>
        <button className="button-theme-toggle">
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>

    ) 
  }
}












class Note {
  constructor(time = 0, beat = 0, click = 0) {
    this.time = time;
    this.beat = beat;
    this.click = click;
  }
}


// ========================================


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Metronome />
  </React.StrictMode>,
  document.getElementById('root')
);