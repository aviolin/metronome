import React from 'react';
import Button from './Button';
  
function Slider(props) {
  return (
    <div className="slider-row">
      <input 
        type="range" 
        id="tempo" 
        min={props.minTempo} 
        max={props.maxTempo} 
        step="1"
        value={props.tempo}
        onChange={props.onChange}/>
    </div>
  )
}

export default class TempoInputs extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <>
          <div className="tempo-input-row">
            <Button increment={false} id="tempo" onClick={this.props.onClick} />
            <div className="tempo-label">
              <span id="tempo-label">{this.props.tempo}</span><span className="bpm-label">&nbsp;bpm</span>
            </div>
            <Button increment={true} id="tempo" onClick={this.props.onClick} />
          </div>
          <Slider onChange={this.props.onChange} tempo={this.props.tempo} maxTempo={this.props.maxTempo} minTempo={this.props.minTempo}/>
        </>
      )
    }
  }