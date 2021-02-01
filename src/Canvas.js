import React from 'react';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    
    this.canvasRef = React.createRef();
    this.resetCanvas = this.resetCanvas.bind(this);

    window.onorientationchange = this.resetCanvas;
    window.onresize = this.resetCanvas;
  }
  
  componentDidMount() {
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
    
    let percentage = this.props.percentage;
    1-percentage > .9 ? ctx.globalAlpha = 1-percentage*9 : ctx.globalAlpha = 0;

    color = this.props.color;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 75, 0, Math.PI * 2);
    ctx.fill(); 
  }
  
  render() {
    return (
      <canvas ref={this.canvasRef} id="canvas" height="100" width="100"/>  
    );
  }
}