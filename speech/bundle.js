!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=window.speechSynthesis,o=document.querySelector("form"),r=document.querySelector("#text-input"),c=document.querySelector("#voice-select"),a=document.querySelector("#rate-value"),u=document.querySelector("#pitch"),i=document.querySelector("#pitch-value");let l=[];const d=()=>{(l=n.getVoices()).forEach(e=>{const t=document.createElement("option");t.textContent=e.name+"("+e.lang+")",t.setAttribute("data-lang",e.lang),t.setAttribute("data-name",e.name),c.appendChild(t)})};d(),void 0!==n.onvoiceschanged&&(n.onvoiceschanged=d);const s=()=>{if(n.speaking)console.error("Already speaking...");else if(""!==r.value){const e=new SpeachSynthesisUtterance(r.value);e.onend=(e=>{console.log("done speaking....")}),e.onerror=(e=>{console.error("Something went wrong")});const t=c.selectedOptions[0].getAttribute("data-name");l.forEach(n=>{n.name===t&&(e.voice=n)}),e.rate=a.value,e.pitch=pitch.value,n.speak(e)}};o.addEventListener("submit",e=>{e.preventDefault(),s(),r.blur()}),a.addEventListener("change",e=>u.textContent=a.value),pitch.addEventListener("change",e=>i.textContent=pitch.value),c.addEventListener("change",e=>s())}]);