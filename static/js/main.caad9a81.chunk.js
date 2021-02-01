(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{14:function(e,t,n){var i=n(20),a=[];e.exports=function(){var e=new Worker(n.p+"5229467faaf4ec1feba7.worker.js",{name:"[hash].worker.js"});return i(e,a),e}},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(7),a=n(3),s=n(4),o=n(6),c=n(5),r=n(0),l=n(2),u=n.n(l),h=n(13),p=n.n(h),d=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).canvasRef=u.a.createRef(),s.resetCanvas=s.resetCanvas.bind(Object(i.a)(s)),window.onorientationchange=s.resetCanvas,window.onresize=s.resetCanvas,s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.resetCanvas()}},{key:"componentDidUpdate",value:function(){this.drawCanvas()}},{key:"resetCanvas",value:function(){this.canvasRef.current.width=window.innerWidth,this.canvasRef.current.height=window.innerHeight,window.scrollTo(0,0)}},{key:"drawCanvas",value:function(){var e=this.canvasRef.current,t=e.getContext("2d"),n="#333";if(t.fillStyle=n,t.globalAlpha=1,t.fillRect(0,0,e.width,e.height),this.props.isplaying){var i=this.props.percentage;t.globalAlpha=1-i>.9?1-9*i:0,n=this.props.color,t.fillStyle=n,t.beginPath(),t.arc(e.width/2,e.height/2,75,0,2*Math.PI),t.fill()}}},{key:"render",value:function(){return Object(r.jsx)("canvas",{ref:this.canvasRef,id:"canvas",height:"100",width:"100"})}}]),n}(u.a.Component),m=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={lastNoteDrawn:null,nextNoteTime:0,percentage:0,dirRight:!0},s.updateAnimation=s.updateAnimation.bind(Object(i.a)(s)),s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimation)}},{key:"updateAnimation",value:function(){if(this.props.isplaying){for(var e=this.props.audiocontext.currentTime,t=this.props.queue,n=this.state.lastNoteDrawn;t.length&&t[0].time<e;)n=t[0],t.splice(0,1);var i=(60/this.props.tempo-(this.props.nbt-e))/(60/this.props.tempo);i>1&&(i=1),i<0&&(i=1+i),n!==this.state.lastNoteDrawn?this.setState((function(e,t){return{percentage:i,nextNoteTime:n.time+60/t.tempo,dirRight:!e.dirRight}})):this.setState((function(e,t){return{percentage:i}}))}this.rAF=requestAnimationFrame(this.updateAnimation)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"render",value:function(){return Object(r.jsx)(d,{color:this.props.color,percentage:this.state.percentage,isplaying:this.props.isplaying,dir:this.state.dirRight})}}]),n}(u.a.Component),b=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return!0===this.props.increment?Object(r.jsx)("button",{name:"increment-"+this.props.id,onClick:this.props.onClick,children:"+"}):Object(r.jsx)("button",{name:"decrement-"+this.props.id,onClick:this.props.onClick,children:"\u2013"})}}]),n}(u.a.Component);function j(e){return Object(r.jsx)("input",{type:"range",id:"tempo",min:e.minTempo,max:e.maxTempo,step:"1",value:e.tempo,onChange:e.onChange})}var k=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"input-row",children:[Object(r.jsxs)("div",{className:"tempo-input-row",children:[Object(r.jsx)(b,{increment:!1,id:"tempo",onClick:this.props.onClick}),Object(r.jsxs)("div",{className:"tempo-label",children:[Object(r.jsx)("span",{className:"large",id:"tempo-label",children:this.props.tempo})," BPM"]}),Object(r.jsx)(b,{increment:!0,id:"tempo",onClick:this.props.onClick})]}),Object(r.jsx)(j,{onChange:this.props.onChange,tempo:this.props.tempo,maxTempo:this.props.maxTempo,minTempo:this.props.minTempo})]})}}]),n}(u.a.Component),f=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("fieldset",{children:[Object(r.jsx)("label",{children:this.props.label}),Object(r.jsxs)("div",{className:"spinner",children:[Object(r.jsx)(b,{increment:!1,id:this.props.id,onClick:this.props.onClick}),Object(r.jsx)("span",{className:"spinner-value",id:this.props.id,children:this.props.value}),Object(r.jsx)(b,{increment:!0,id:this.props.id,onClick:this.props.onClick})]})]})}}]),n}(u.a.Component),v=n(14),x=n.n(v),O=n(8),C=n(9),g=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(a.a)(this,e),this.time=t,this.beat=n,this.click=i};function y(e){var t=Object(r.jsx)(C.a,{icon:O.b}),n=Object(r.jsx)(C.a,{icon:O.c});return Object(r.jsx)("div",{className:"play-container",children:Object(r.jsx)("button",{className:"button-play",onClick:e.onClick,name:"play-button",children:"Start"===e.value?t:n})})}var B=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var s;Object(a.a)(this,n),(s=t.call(this,e)).state={noteLength:.05,lookahead:25,scheduleAheadTime:.1,tempo:120,maxTempo:240,minTempo:30,nextBeat:0,nextBeatTime:0,nextClick:0,nextClickTime:0,isPlaying:!1,audioUnlocked:!1,noteQueue:[]},s.handleChange=s.handleChange.bind(Object(i.a)(s)),s.handleClick=s.handleClick.bind(Object(i.a)(s)),s.handleTick=s.handleTick.bind(Object(i.a)(s));var o=window.AudioContext||window.webkitAudioContext||!1;s.audioContext=new o({latencyHint:.1});var c=s.audioContext.createBuffer(1,1,22050),r=s.audioContext.createBufferSource();return r.buffer=c,r.start(s.audioContext.currentTime),s.timerWorker=x()(),s.timerWorker.onmessage=function(e){"tick"===e.data?s.handleTick():console.log("Worker: "+e.data)},s.timerWorker.postMessage({interval:s.state.lookahead}),s}return Object(s.a)(n,[{key:"scheduleNote",value:function(e){var t=this.audioContext.createOscillator(),n=this.audioContext.createGain();t.connect(n),n.connect(this.audioContext.destination),0!==e.beat?t.frequency.value=440:t.frequency.value=880,0!==e.click&&(t.frequency.value=330),t.start(this.state.nextClickTime),n.gain.setTargetAtTime(0,this.state.nextClickTime+this.state.noteLength,.015),t.stop(this.state.nextClickTime+2*this.state.noteLength)}},{key:"handleTick",value:function(){for(var e=this,t=function(){var t=e.state.nextBeat,n=e.state.nextClick,i=60/e.state.tempo,a=e.state.nextBeatTime,s=new g(e.state.nextClickTime,t,n);0===s.click&&(a=s.time+i),e.scheduleNote(s),e.props.clicksPerBeat>1?++n>=e.props.clicksPerBeat&&(n=0,++t>=e.props.beatsPerBar&&(t=0)):(t++,n=0,t>=e.props.beatsPerBar&&(t=0)),e.setState((function(e,o){return{noteQueue:e.noteQueue.concat(s),nextClickTime:e.nextClickTime+1/o.clicksPerBeat*i,nextBeatTime:a,nextBeat:t,nextClick:n}}))};this.state.nextClickTime<this.audioContext.currentTime+this.state.scheduleAheadTime;)t()}},{key:"fadeAnimation",value:function(e){document.getElementById(e).classList.remove("animation-fade"),document.getElementById(e).offsetWidth,document.getElementById(e).classList.add("animation-fade")}},{key:"handleClick",value:function(e){var t;switch(e.target.name){case"increment-tempo":return this.fadeAnimation("tempo-label"),t=parseInt(this.state.tempo)+1,void this.setState((function(e){return{tempo:t>e.maxTempo?e.tempo:t}}));case"decrement-tempo":return this.fadeAnimation("tempo-label"),t=parseInt(this.state.tempo)-1,void this.setState((function(e){return{tempo:t<e.minTempo?e.tempo:t}}))}if(this.timerWorker.postMessage(this.state.isPlaying?"stop":"start"),this.state.isPlaying)this.audioContext.close(),this.setState((function(e){return{isPlaying:!e.isPlaying,audioUnlocked:!1,noteQueue:[],nextClickTime:0,nextBeat:0,nextClick:0}}));else{var n=window.AudioContext||window.webkitAudioContext||!1;if(this.audioContext=new n({latencyHint:.1}),!this.state.audioUnlocked){var i=this.audioContext.createBuffer(1,1,22050),a=this.audioContext.createBufferSource();a.buffer=i,a.start(this.audioContext.currentTime)}this.setState((function(e){return{isPlaying:!e.isPlaying,audioUnlocked:!0}}))}}},{key:"handleChange",value:function(e){this.fadeAnimation("tempo-label"),this.setState({tempo:e.target.value})}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"metronome",children:[Object(r.jsx)(m,{tempo:this.state.tempo,color:this.props.color,nbt:this.state.nextBeatTime,isplaying:this.state.isPlaying,queue:this.state.noteQueue,audiocontext:this.audioContext}),Object(r.jsxs)("div",{className:"inputs",children:[Object(r.jsx)(y,{value:this.state.isPlaying?"Stop":"Start",onClick:this.handleClick}),Object(r.jsx)(k,{onChange:this.handleChange,onClick:this.handleClick,tempo:this.state.tempo,maxTempo:this.state.maxTempo,minTempo:this.state.minTempo})]})]})}}]),n}(u.a.Component);n(26);function w(e){var t="button-theme-toggle hamburger";return e.isMenuOpen&&(t="button-theme-toggle hamburger open"),Object(r.jsxs)("button",{className:t,name:"menu-toggle",onClick:e.onClick,children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})}var P=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("div",{className:"logo",children:"Zen Metronome"}),Object(r.jsx)(w,{onClick:this.props.onClick,isMenuOpen:this.props.isMenuOpen})]})}}]),n}(u.a.Component),T=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e="mobile-menu";return this.props.isMenuOpen&&(e+=" mobile-menu-open"),Object(r.jsxs)("div",{className:e,children:[Object(r.jsxs)("div",{className:"spinner-inputs",children:[Object(r.jsx)(f,{label:"Beats per bar",id:"beats",onClick:this.props.onClick,value:this.props.beatsPerBar}),Object(r.jsx)(f,{label:"Clicks per beat",id:"clicks",onClick:this.props.onClick,value:this.props.clicksPerBeat})]}),Object(r.jsxs)("div",{className:"menu-row",children:[Object(r.jsx)("button",{className:"color color-purple",id:"col1",value:"#d7d|#f7f",onClick:this.props.onClick,children:"#d7d"===this.props.color?Object(r.jsx)(C.a,{icon:O.a,size:"xs"}):null}),Object(r.jsx)("button",{className:"color color-blue",id:"col2",value:"#77d|#77f",onClick:this.props.onClick,children:"#77d"===this.props.color?Object(r.jsx)(C.a,{icon:O.a,size:"xs"}):null}),Object(r.jsx)("button",{className:"color color-green",id:"col3",value:"#7d7|#7f7",onClick:this.props.onClick,children:"#7d7"===this.props.color?Object(r.jsx)(C.a,{icon:O.a,size:"xs"}):null}),Object(r.jsx)("button",{className:"color color-grey",id:"col4",value:"#777|#999",onClick:this.props.onClick,children:"#777"===this.props.color?Object(r.jsx)(C.a,{icon:O.a,size:"xs"}):null})]}),Object(r.jsx)("div",{className:"menu-row",children:Object(r.jsx)("a",{href:"https://github.com/aviolin/metronome",target:"_blank",children:"View the source on Github"})})]})}}]),n}(u.a.Component),A=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={color:"#d7d",colorHighlight:"#f7f",isMenuOpen:!1,beatsPerBar:1,maxBeats:12,minBeats:1,clicksPerBeat:1,maxClicks:12,minClicks:1},s.handleClick=s.handleClick.bind(Object(i.a)(s)),s}return Object(s.a)(n,[{key:"fadeAnimation",value:function(e){document.getElementById(e).classList.remove("animation-fade"),document.getElementById(e).offsetWidth,document.getElementById(e).classList.add("animation-fade")}},{key:"handleClick",value:function(e){var t,n=0;switch(e.target.name){case"menu-toggle":return void this.setState((function(e){return{isMenuOpen:!e.isMenuOpen}}));case"increment-beats":return this.fadeAnimation("beats"),t=parseInt(this.state.beatsPerBar)+1,void this.setState((function(e){return{beatsPerBar:t>e.maxBeats?e.beatsPerBar:t}}));case"decrement-beats":return this.fadeAnimation("beats"),t=parseInt(this.state.beatsPerBar)-1,void this.setState((function(e){return{beatsPerBar:t<e.minBeats?e.beatsPerBar:t}}));case"increment-clicks":return this.fadeAnimation("clicks"),n=parseInt(this.state.clicksPerBeat)+1,void this.setState((function(e){return{clicksPerBeat:n>e.maxClicks?e.clicksPerBeat:n}}));case"decrement-clicks":return this.fadeAnimation("clicks"),n=parseInt(this.state.clicksPerBeat)-1,void this.setState((function(e){return{clicksPerBeat:n<e.minClicks?e.clicksPerBeat:n}}))}this.updateColors(e.target.value),this.fadeAnimation(e.target.id)}},{key:"updateColors",value:function(e){var t=e.split("|"),n=document.documentElement;n.style.setProperty("--accentcolor",t[0]),n.style.setProperty("--accentcolorhighlight",t[1]),this.setState((function(e){return{color:t[0],colorHighlight:t[1]}}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(P,{onClick:this.handleClick,isMenuOpen:this.state.isMenuOpen}),Object(r.jsx)(T,{isMenuOpen:this.state.isMenuOpen,onClick:this.handleClick,color:this.state.color,beatsPerBar:this.state.beatsPerBar,clicksPerBeat:this.state.clicksPerBeat}),Object(r.jsx)(B,{color:this.state.color,colorHighlight:this.state.colorHighlight,beatsPerBar:this.state.beatsPerBar,clicksPerBeat:this.state.clicksPerBeat})]})}}]),n}(u.a.Component);p.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.caad9a81.chunk.js.map