!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/metronome/",n(n.s=0)}([function(e,t){var n=null,r=100;self.onmessage=function(e){"start"==e.data?(console.log("starting"),n=setInterval((function(){postMessage("tick")}),r)):e.data.interval?(console.log("setting interval"),r=e.data.interval,console.log("interval="+r),n&&(clearInterval(n),n=setInterval((function(){postMessage("tick")}),r))):"stop"==e.data&&(console.log("stopping"),clearInterval(n),n=null)},addEventListener("message",(function(e){var t,n=e.data,r=n.type,o=n.method,a=n.id,s=n.params;"RPC"===r&&o&&((t=__webpack_exports__[o])?Promise.resolve().then((function(){return t.apply(__webpack_exports__,s)})):Promise.reject("No such method")).then((function(e){postMessage({type:"RPC",id:a,result:e})})).catch((function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:a,error:t})}))})),postMessage({type:"RPC",method:"ready"})}]);
//# sourceMappingURL=c737dd0979893d18313b.worker.js.map