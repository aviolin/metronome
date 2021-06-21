import React from 'react';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    
    this.canvasRef = React.createRef();
    this.resetCanvas = this.resetCanvas.bind(this);

    window.onorientationchange = this.resetCanvas;
    window.onresize = this.resetCanvas;

    this.curNote = null;
  }
  
  componentDidMount() {
    this.resetCanvas();
  }
  
  componentDidUpdate() {
    this.drawCanvas();
  }

  resetCanvas() {
    this.canvasRef.current.width = window.innerWidth;
    //this.canvasRef.current.height = window.innerHeight;
    window.scrollTo(0,0); 
    this.drawCanvas();

  }
  
  drawCanvas() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    let backgroundColor = "#424242";

    ctx.fillStyle = backgroundColor;
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let circleRadius = canvas.width / this.props.beatsPerBar / 5;

    for (let i = 0; i < this.props.beatsPerBar; i++) {
      ctx.fillStyle= "#696969";
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (this.props.curNote) {
        if (this.props.curNote.beat === i && this.props.curNote.click === 0) {
          this.curNote = this.props.curNote;
        }
      }
        
      if (this.curNote?.beat === i) {
        /* let percentage = this.props.percentage;
        1-percentage > .9 ? ctx.globalAlpha = 1-percentage*9 : ctx.globalAlpha = 0;*/
        ctx.fillStyle="red";
        ctx.shadowColor='red';
        ctx.shadowBlur= 20;
      }

      ctx.beginPath();
      ctx.arc(i * (canvas.width/this.props.beatsPerBar) + (canvas.width/this.props.beatsPerBar/2), canvas.height/2, circleRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  render() {
    return (
      <div className="visualizer">
        <canvas ref={this.canvasRef} id="canvas" height="100" width="100"/>  
      </div>
    );
  }
}