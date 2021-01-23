(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{14:function(e,t,n){var a=n(21),i=[];e.exports=function(){var e=new Worker(n.p+"70cb1035e7398c59599d.worker.js",{name:"[hash].worker.js"});return a(e,i),e}},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(4),s=n(5),o=n(8),c=n(7),r=n(6),l=n(2),h=n.n(l),u=n(13),p=n.n(u),m=n(14),d=n.n(m),b=(n(22),n(3)),j=n(9);function v(e){var t=Object(a.jsx)(j.a,{icon:b.c}),n=Object(a.jsx)(j.a,{icon:b.d});return Object(a.jsx)("button",{className:"button-play",onClick:e.onClick,name:"play-button",children:"Start"===e.value?t:n})}function k(e){return Object(a.jsx)("input",{type:"range",id:"tempo",min:e.minTempo,max:e.maxTempo,step:"1",value:e.tempo,onChange:e.onChange})}var x=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a.canvasRef=h.a.createRef(),a.resetCanvas=a.resetCanvas.bind(Object(o.a)(a)),window.onorientationchange=a.resetCanvas,window.onresize=a.resetCanvas,a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.drawCanvas(),this.resetCanvas()}},{key:"componentDidUpdate",value:function(){this.drawCanvas()}},{key:"resetCanvas",value:function(){this.canvasRef.current.width=window.innerWidth,this.canvasRef.current.height=window.innerHeight,window.scrollTo(0,0)}},{key:"drawCanvas",value:function(){var e=this.canvasRef.current,t=e.getContext("2d"),n="#333";if(t.fillStyle=n,t.globalAlpha=1,t.fillRect(0,0,e.width,e.height),this.props.isplaying){var a=(60/this.props.tempo-(this.props.nbt-this.props.currenttime))/(60/this.props.tempo);a<0&&(a=0),n=this.props.color,this.props.tick,console.log(this.props.curBeat),t.strokeStyle=n,t.globalAlpha=1-a,t.beginPath(),t.lineWidth=100-100*a,t.arc(e.width/2,e.height/4,100*a,0,2*Math.PI),t.stroke()}}},{key:"render",value:function(){return Object(a.jsx)("canvas",{ref:this.canvasRef,id:"canvas",height:"100",width:"100"})}}]),n}(h.a.Component),O=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={tick:!1,lastNoteDrawn:null,alpha:0,percentToNextNote:0,nextNoteTime:0},a.updateAnimation=a.updateAnimation.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimation)}},{key:"updateAnimation",value:function(){if(this.props.isplaying){for(var e=this.props.audiocontext.currentTime,t=this.props.queue,n=this.state.lastNoteDrawn;t.length&&t[0].time<e;)n=t[0],t.splice(0,1);n!==this.state.lastNoteDrawn?this.setState((function(e,t){return{tick:!0,alpha:1,percentToNextNote:0,nextNoteTime:n.time+60/t.tempo}})):this.setState((function(e,t){return{tick:!1,alpha:e.alpha-.1<0?0:e.alpha-.1}}))}else this.setState((function(e){return{tick:!1,alpha:e.alpha-.1<0?0:e.alpha-.1}}));this.rAF=requestAnimationFrame(this.updateAnimation)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"render",value:function(){return Object(a.jsx)(x,{tick:this.state.tick,color:this.props.color,nbt:this.props.nbt,curBeat:this.props.curBeat,bpb:this.props.bpb,queue:this.props.queue,tempo:this.props.tempo,nextnotetime:this.state.nextNoteTime,alpha:this.state.alpha,currenttime:this.props.audiocontext.currentTime,isplaying:this.props.isplaying})}}]),n}(h.a.Component),f=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"input-row",children:[Object(a.jsxs)("div",{className:"tempo-input-row",children:[Object(a.jsx)("button",{className:"button-tempo",name:"decrement-tempo",onClick:this.props.onClick,children:"\u2013"}),Object(a.jsxs)("div",{className:"tempo-label",children:[Object(a.jsx)("span",{className:"large",id:"tempo-label",children:this.props.tempo})," BPM"]}),Object(a.jsx)("button",{className:"button-tempo",name:"increment-tempo",onClick:this.props.onClick,children:"+"})]}),Object(a.jsx)(k,{onChange:this.props.onChange,tempo:this.props.tempo,maxTempo:this.props.maxTempo,minTempo:this.props.minTempo})]})}}]),n}(h.a.Component);function C(e){var t=Object(a.jsx)("input",{className:"checkbox",type:"radio",id:e.id+"-"+e.value,name:e.id,value:e.value});return e.default===e.id&&(t=Object(a.jsx)("input",{className:"checkbox",type:"radio",id:e.id+"-"+e.value,name:e.id,value:e.value,defaultChecked:!0})),Object(a.jsxs)("span",{children:[t,Object(a.jsx)("label",{htmlFor:e.id+"-"+e.value,children:e.value})]})}h.a.Component;var g=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("label",{children:this.props.label}),Object(a.jsxs)("div",{className:"spinner",children:[Object(a.jsx)("button",{className:"button-medium",name:"decrement-"+this.props.id,onClick:this.props.onClick,children:"\u2013"}),Object(a.jsx)("span",{className:"spinner-value",id:this.props.id,children:this.props.value}),Object(a.jsx)("button",{className:"button-medium",name:"increment-"+this.props.id,onClick:this.props.onClick,children:"+"})]})]})}}]),n}(h.a.Component),y=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).state={tempo:120,maxTempo:240,minTempo:30,beatsPerBar:4,maxBeats:12,minBeats:1,clicksPerBeat:1,maxClicks:12,minClicks:1,nextBeat:0,nextBeatTime:0,nextClick:0,isPlaying:!1,lookahead:25,scheduleAheadTime:.1,nextNoteTime:0,noteLength:.1,audioUnlocked:!1,noteQueue:[],isMenuOpen:!1},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleClick=a.handleClick.bind(Object(o.a)(a)),a.handleTick=a.handleTick.bind(Object(o.a)(a));var s=window.AudioContext||window.webkitAudioContext||!1;return a.audioContext=new s,a.timerWorker=d()(),a.timerWorker.onmessage=function(e){"tick"===e.data?a.handleTick():console.log("message: "+e.data)},a.timerWorker.postMessage({interval:a.state.lookahead}),a}return Object(s.a)(n,[{key:"scheduleNote",value:function(e){var t=this.audioContext.createOscillator(),n=this.audioContext.createGain();t.connect(n),n.connect(this.audioContext.destination),0!==e.beat?t.frequency.value=440:t.frequency.value=880,0!==e.click&&(t.frequency.value=330),t.start(this.state.nextNoteTime),n.gain.setTargetAtTime(0,this.state.nextNoteTime+this.state.noteLength,.015),t.stop(this.state.nextNoteTime+2*this.state.noteLength)}},{key:"handleTick",value:function(){for(var e=this,t=function(){var t=e.state.nextBeat,n=e.state.nextClick,a=new T(e.state.nextNoteTime,t,n),i=60/e.state.tempo,s=e.state.nextBeatTime;0===a.click&&(s=a.time+i),e.scheduleNote(a),e.state.clicksPerBeat>1?++n>=e.state.clicksPerBeat&&(n=0,++t>=e.state.beatsPerBar&&(t=0)):(t++,n=0,t>=e.state.beatsPerBar&&(t=0)),e.setState((function(e){return{noteQueue:e.noteQueue.concat(a),nextNoteTime:e.nextNoteTime+1/e.clicksPerBeat*i,nextBeatTime:s,nextBeat:t,nextClick:n}}))};this.state.nextNoteTime<this.audioContext.currentTime+this.state.scheduleAheadTime;)t()}},{key:"fadeAnimation",value:function(e){document.getElementById(e).classList.remove("animation-fade"),document.getElementById(e).offsetWidth,document.getElementById(e).classList.add("animation-fade")}},{key:"handleClick",value:function(e){if("increment-tempo"!==e.target.name)if("decrement-tempo"!==e.target.name)if("increment-beats"!==e.target.name)if("decrement-beats"!==e.target.name)if("increment-clicks"!==e.target.name)if("decrement-clicks"!==e.target.name){console.log("First: "+this.audioContext.state);var t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t,console.log(this.audioContext.state)}else{this.fadeAnimation("clicks");var n=parseInt(this.state.clicksPerBeat)-1;this.setState((function(e){return{clicksPerBeat:n<e.minClicks?e.clicksPerBeat:n}}))}else{this.fadeAnimation("clicks");var a=parseInt(this.state.clicksPerBeat)+1;this.setState((function(e){return{clicksPerBeat:a>e.maxClicks?e.clicksPerBeat:a}}))}else{this.fadeAnimation("beats");var i=parseInt(this.state.beatsPerBar)-1;this.setState((function(e){return{beatsPerBar:i<e.minBeats?e.beatsPerBar:i}}))}else{this.fadeAnimation("beats");var s=parseInt(this.state.beatsPerBar)+1;this.setState((function(e){return{beatsPerBar:s>e.maxBeats?e.beatsPerBar:s}}))}else{this.fadeAnimation("tempo-label");var o=parseInt(this.state.tempo)-1;this.setState((function(e){return{tempo:o<e.minTempo?e.tempo:o}}))}else{this.fadeAnimation("tempo-label");var c=parseInt(this.state.tempo)+1;this.setState((function(e){return{tempo:c>e.maxTempo?e.tempo:c}}))}}},{key:"handleChange",value:function(e){"beats"===e.target.name?this.setState({beatsPerBar:e.target.value}):"clicks"===e.target.name?this.setState({clicksPerBeat:e.target.value}):(this.fadeAnimation("tempo-label"),console.log(e.target.value),this.setState({tempo:e.target.value}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"metronome",children:[Object(a.jsx)(O,{tempo:this.state.tempo,color:this.props.color,nbt:this.state.nextBeatTime,curBeat:this.state.nextBeat,bpb:this.state.beatsPerBar,isplaying:this.state.isPlaying,queue:this.state.noteQueue,audiocontext:this.audioContext}),Object(a.jsxs)("div",{className:"inputs",children:[Object(a.jsx)(v,{value:this.state.isPlaying?"Stop":"Start",onClick:this.handleClick}),Object(a.jsx)(f,{onChange:this.handleChange,tempo:this.state.tempo,onClick:this.handleClick,maxTempo:this.state.maxTempo,minTempo:this.state.minTempo}),Object(a.jsx)("div",{className:"input-row",children:Object(a.jsxs)("div",{className:"spinner-inputs",children:[Object(a.jsx)(g,{label:"Beats per bar",id:"beats",onClick:this.handleClick,value:this.state.beatsPerBar}),Object(a.jsx)(g,{label:"Clicks per beat",id:"clicks",onClick:this.handleClick,value:this.state.clicksPerBeat})]})})]})]})}}]),n}(h.a.Component),N=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=Object(a.jsx)(j.a,{icon:b.b});return this.props.isMenuOpen&&(e=Object(a.jsx)(j.a,{icon:b.e})),Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"logo",children:"Zen Metronome"}),Object(a.jsx)("button",{className:"button-theme-toggle",name:"menu-toggle",onClick:this.props.onClick,children:e})]})}}]),n}(h.a.Component),B=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e="mobile-menu";return this.props.isMenuOpen&&(e+=" mobile-menu-open"),Object(a.jsxs)("div",{className:e,children:[Object(a.jsxs)("div",{className:"menu-row",children:[Object(a.jsx)("button",{className:"color color-purple",value:"#d7d",onClick:this.props.onClick,children:"#d7d"===this.props.color?Object(a.jsx)(j.a,{icon:b.a,size:"xs"}):null}),Object(a.jsx)("button",{className:"color color-blue",value:"#77d",onClick:this.props.onClick,children:"#77d"===this.props.color?Object(a.jsx)(j.a,{icon:b.a,size:"xs"}):null}),Object(a.jsx)("button",{className:"color color-green",value:"#7d7",onClick:this.props.onClick,children:"#7d7"===this.props.color?Object(a.jsx)(j.a,{icon:b.a,size:"xs"}):null}),Object(a.jsx)("button",{className:"color color-grey",value:"#777",onClick:this.props.onClick,children:"#777"===this.props.color?Object(a.jsx)(j.a,{icon:b.a,size:"xs"}):null})]}),Object(a.jsx)("div",{className:"menu-row",children:Object(a.jsx)("a",{href:"https://aviolin.github.io/metronome",target:"_blank",children:"View the source on Github"})})]})}}]),n}(h.a.Component),w=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={color:"#d7d",colorHighlight:"#f7f",isMenuOpen:!1},a.handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"handleClick",value:function(e){"menu-toggle"!==e.target.name?this.updateColors(e.target.value,e.target.value):this.setState((function(e){return{isMenuOpen:!e.isMenuOpen}}))}},{key:"updateColors",value:function(e,t){console.log("HERE");var n=document.documentElement;n.style.setProperty("--accentcolor",e),n.style.setProperty("--accentcolorhighlight",t),this.setState((function(n){return{color:e,colorHighlight:t,isMenuOpen:!n.isMenuOpen}}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{onClick:this.handleClick,isMenuOpen:this.state.isMenuOpen}),Object(a.jsx)(B,{isMenuOpen:this.state.isMenuOpen,onClick:this.handleClick,color:this.state.color}),Object(a.jsx)(y,{color:this.state.color,colorHighlight:this.state.colorHighlight})]})}}]),n}(h.a.Component),T=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(i.a)(this,e),this.time=t,this.beat=n,this.click=a};p.a.render(Object(a.jsx)(h.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))},22:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.e10bbb67.chunk.js.map