/**
 * Uses requestAnimationFrame to update the current
 * "note" when it is time, based on the
 * audiocontext.currentTime.
 * 
 * Also contains the canvas component.
 */

import React from 'react';
import Canvas from './Canvas.js';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lastNoteDrawn: null,
      /* nextNoteTime: 0, */
      /* percentage: 0, */
      curNote: null,
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

      /* let percentage = ((60/this.props.tempo) - (this.props.nbt - currentTime)) / (60/this.props.tempo);
      if (percentage < 0) percentage = 0;
      if (percentage > 1) percentage = 1;

      if (currentNote !== this.state.lastNoteDrawn) {

        this.setState((state, props) => ({
          percentage: percentage,
          nextNoteTime: currentNote.time + (60 / props.tempo),
        }));

      } else {
        this.setState((state, props) => ({
          percentage: percentage
        }));
      } */

      this.setState(() => ({
        curNote: currentNote
      }));
    }

    this.rAF = requestAnimationFrame(this.updateAnimation);
  }
  
  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }
  
  render () {
    return (
      <Canvas 
        /* percentage={this.state.percentage}  */
        isplaying={this.props.isplaying} 
        beatsPerBar={this.props.beatsPerBar}
        curNote={this.state.curNote}
        theme={this.props.theme}
      />
    );
  }
}