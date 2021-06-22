(this.webpackJsonpmetronome=this.webpackJsonpmetronome||[]).push([[0],{14:function(e,t,a){var n=a(28),i=[];e.exports=function(){var e=new Worker(a.p+"7c5f42a9d79e132aa533.worker.js",{name:"[hash].worker.js"});return n(e,i),e}},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(3),s=a(4),c=a(7),r=a(6),o=a(5),l=a(2),h=a.n(l),u=a(13),d=a.n(u),m=(a(21),a(22),a(8)),p=a(15),j=a(14),b=a.n(j),v=a(9),k=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).canvasRef=h.a.createRef(),n.resetCanvas=n.resetCanvas.bind(Object(c.a)(n)),window.onorientationchange=n.resetCanvas,window.onresize=n.resetCanvas,n.curNote=null,n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.resetCanvas()}},{key:"componentDidUpdate",value:function(){this.drawCanvas()}},{key:"resetCanvas",value:function(){this.canvasRef.current.width=window.innerWidth,window.scrollTo(0,0),this.drawCanvas()}},{key:"drawCanvas",value:function(){var e=this.canvasRef.current,t=e.getContext("2d");t.fillStyle=this.props.theme.background,t.fillRect(0,0,e.width,e.height);for(var a=Math.min(e.width/this.props.beatsPerBar/5,36),n=0;n<this.props.beatsPerBar;n++){var i,s;t.fillStyle=this.props.theme.light,t.shadowBlur=0,(null===(i=this.props.curNote)||void 0===i?void 0:i.beat)===n&&0===this.props.curNote.click&&(this.curNote=this.props.curNote),(null===(s=this.curNote)||void 0===s?void 0:s.beat)===n&&(this.props.isplaying?(t.fillStyle="red",t.shadowColor="red",t.shadowBlur=a):this.curNote=null),t.beginPath(),t.arc(n*(e.width/this.props.beatsPerBar)+e.width/this.props.beatsPerBar/2,e.height/2,a,0,2*Math.PI),t.fill()}}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"visualizer",children:Object(n.jsx)("canvas",{ref:this.canvasRef,id:"canvas",height:"100",width:"100"})})}}]),a}(h.a.Component),x=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={lastNoteDrawn:null,curNote:null},n.updateAnimation=n.updateAnimation.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimation)}},{key:"updateAnimation",value:function(){if(this.props.isplaying){for(var e=this.props.audiocontext.currentTime,t=this.props.queue,a=this.state.lastNoteDrawn;t.length&&t[0].time<e;)a=t[0],t.splice(0,1);this.setState((function(){return{curNote:a}}))}this.rAF=requestAnimationFrame(this.updateAnimation)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"render",value:function(){return Object(n.jsx)(k,{isplaying:this.props.isplaying,beatsPerBar:this.props.beatsPerBar,curNote:this.state.curNote,theme:this.props.theme})}}]),a}(h.a.Component),O=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"tempo-input-row",children:[Object(n.jsx)("button",{name:"decrement-tempo",onClick:this.props.onClick,className:"btn-circle",children:"\u2013"}),Object(n.jsxs)("div",{className:"tempo-label",children:[Object(n.jsx)("span",{id:"tempo-label",children:this.props.tempo}),Object(n.jsx)("span",{className:"bpm-label",children:"\xa0bpm"})]}),Object(n.jsx)("button",{name:"increment-tempo",onClick:this.props.onClick,className:"btn-circle",children:"+"})]}),Object(n.jsx)("div",{className:"slider-row",children:Object(n.jsx)("input",{type:"range",id:"tempo",min:this.props.minTempo,max:this.props.maxTempo,step:"1",value:this.props.tempo,onChange:this.props.onChange})})]})}}]),a}(h.a.Component),g=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(i.a)(this,e),this.time=t,this.beat=a,this.click=n};function f(e){var t=Object(n.jsx)(m.a,{icon:v.c}),a=Object(n.jsx)(m.a,{icon:v.d});return Object(n.jsx)("div",{className:"play-row",children:Object(n.jsx)("button",{className:"btn-circle large",onClick:e.onClick,name:"play-button",children:"Start"===e.value?t:a})})}function C(e){return Object(n.jsxs)("div",{className:"settings-row",children:[Object(n.jsx)("div",{className:"select-wrapper",children:Object(n.jsxs)("select",{value:e.beatsPerBar,onChange:e.handleChange,name:"beat-select",children:[Object(n.jsx)("option",{value:"2",children:"2/4"}),Object(n.jsx)("option",{value:"3",children:"3/4"}),Object(n.jsx)("option",{value:"4",children:"4/4"}),Object(n.jsx)("option",{value:"5",children:"5/4"}),Object(n.jsx)("option",{value:"6",children:"6/4"}),Object(n.jsx)("option",{value:"7",children:"7/4"})]})}),Object(n.jsx)("div",{className:"select-wrapper",children:Object(n.jsxs)("select",{value:e.clicksPerBeat,onChange:e.handleChange,name:"click-select",children:[Object(n.jsx)("option",{value:"1",children:"1 click"}),Object(n.jsx)("option",{value:"2",children:"2 clicks"}),Object(n.jsx)("option",{value:"3",children:"3 clicks"}),Object(n.jsx)("option",{value:"4",children:"4 clicks"}),Object(n.jsx)("option",{value:"5",children:"5 clicks"}),Object(n.jsx)("option",{value:"6",children:"6 clicks"}),Object(n.jsx)("option",{value:"7",children:"7 clicks"})]})})]})}var w=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).state={noteLength:.05,lookahead:25,scheduleAheadTime:.1,tempo:120,maxTempo:240,minTempo:30,nextBeat:0,nextBeatTime:0,nextClick:0,nextClickTime:0,isPlaying:!1,audioUnlocked:!1,noteQueue:[],beatsPerBar:4,clicksPerBeat:1},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleClick=n.handleClick.bind(Object(c.a)(n)),n.handleTick=n.handleTick.bind(Object(c.a)(n));var s=window.AudioContext||window.webkitAudioContext||!1;return n.audioContext=new s({sampleRate:44100}),n.unlockAudio(),n.timerWorker=b()(),n.timerWorker.onmessage=function(e){"tick"===e.data&&n.handleTick()},n.timerWorker.postMessage({interval:n.state.lookahead}),n}return Object(s.a)(a,[{key:"scheduleNote",value:function(e){var t=this.audioContext.createOscillator(),a=this.audioContext.createGain();t.connect(a),a.connect(this.audioContext.destination),0!==e.beat?t.frequency.value=440:t.frequency.value=880,0!==e.click&&(t.frequency.value=330),t.start(this.state.nextClickTime),a.gain.setTargetAtTime(0,this.state.nextClickTime+this.state.noteLength,.015),t.stop(this.state.nextClickTime+2*this.state.noteLength)}},{key:"handleTick",value:function(){var e=this;if(this.state.isPlaying)for(var t=function(){var t=e.state.nextBeat,a=e.state.nextClick,n=60/e.state.tempo,i=e.state.nextBeatTime,s=new g(e.state.nextClickTime,t,a);0===s.click&&(i=s.time+n),e.scheduleNote(s),e.state.clicksPerBeat>1?++a>=e.state.clicksPerBeat&&(a=0,++t>=e.state.beatsPerBar&&(t=0)):(t++,a=0,t>=e.state.beatsPerBar&&(t=0)),e.setState((function(c){return{noteQueue:c.noteQueue.concat(s),nextClickTime:c.nextClickTime+1/e.state.clicksPerBeat*n,nextBeatTime:i,nextBeat:t,nextClick:a}}))};this.state.nextClickTime<this.audioContext.currentTime+this.state.scheduleAheadTime;)t()}},{key:"unlockAudio",value:function(){var e=this.audioContext.createBuffer(1,1,22050),t=this.audioContext.createBufferSource();t.buffer=e,t.start(this.audioContext.currentTime)}},{key:"handleClick",value:function(e){var t=0;switch(e.target.name){case"increment-tempo":return t=parseInt(this.state.tempo)+1,void this.setState((function(e){return{tempo:t>e.maxTempo?e.tempo:t}}));case"decrement-tempo":return t=parseInt(this.state.tempo)-1,void this.setState((function(e){return{tempo:t<e.minTempo?e.tempo:t}}))}if(this.timerWorker.postMessage(this.state.isPlaying?"stop":"start"),this.state.isPlaying)this.audioContext.close(),this.setState((function(e){return{isPlaying:!e.isPlaying,audioUnlocked:!1,noteQueue:[],nextClickTime:0,nextBeat:0,nextClick:0}}));else{var a=window.AudioContext||window.webkitAudioContext||!1;this.audioContext=new a({sampleRate:44100}),this.state.audioUnlocked||this.unlockAudio(),this.setState((function(e){return{isPlaying:!e.isPlaying,audioUnlocked:!0}}))}}},{key:"handleChange",value:function(e){"beat-select"!==e.target.name?"click-select"!==e.target.name?this.setState({tempo:e.target.value}):this.setState({clicksPerBeat:e.target.value}):this.setState({beatsPerBar:e.target.value})}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{onChange:this.handleChange,onClick:this.handleClick,tempo:this.state.tempo,maxTempo:this.state.maxTempo,minTempo:this.state.minTempo}),Object(n.jsx)(x,{tempo:this.state.tempo,nbt:this.state.nextBeatTime,isplaying:this.state.isPlaying,queue:this.state.noteQueue,audiocontext:this.audioContext,beatsPerBar:this.state.beatsPerBar,theme:this.props.theme}),Object(n.jsx)(f,{value:this.state.isPlaying?"Stop":"Start",onClick:this.handleClick}),Object(n.jsx)(C,{beatsPerBar:this.state.beatsPerBar,clicksPerBeat:this.state.clicksPerBeat,handleChange:this.handleChange})]})}}]),a}(h.a.Component),T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("header",{className:"navbar",children:[Object(n.jsxs)("div",{className:"logo",children:[Object(n.jsx)(m.a,{icon:v.b}),"\xa0\xa0Metronome"]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:this.props.toggleTheme,children:"dark"===this.props.theme?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{icon:v.e}),"\xa0\xa0Too dark?"]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{icon:v.a}),"\xa0\xa0Too bright?"]})})})]})}}]),a}(h.a.Component),y=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={lightTheme:{background:"#f0f0f0",light:"#ccc"},darkTheme:{background:"#424242",light:"#595959"},theme:"dark"},n.toggleTheme=n.toggleTheme.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"toggleTheme",value:function(){this.setState((function(e){return{theme:"dark"===e.theme?"light":"dark"}}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"dark"===this.state.theme?"theme-dark":"theme-light",children:Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(T,{onClick:null,toggleTheme:this.toggleTheme,theme:this.state.theme}),Object(n.jsx)(w,{theme:"dark"===this.state.theme?this.state.darkTheme:this.state.lightTheme})]}),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("a",{href:"https://github.com/aviolin/metronome/",target:"_blank",rel:"noreferrer",children:[Object(n.jsx)(m.a,{icon:p.a}),"\xa0\xa0View the source on Github"]}),Object(n.jsx)("p",{children:"\xa9 2021, Arlo Adams"})]})]})})}}]),a}(h.a.Component);d.a.render(Object(n.jsx)(h.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ba799bc1.chunk.js.map