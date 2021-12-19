(function(e){function t(t){for(var r,i,u=t[0],a=t[1],l=t[2],f=0,b=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/n-queens/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"484e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("9b19"),c=n.n(o),i={class:"main-container"},u=Object(r["e"])("h1",null,"N-Queens",-1),a=Object(r["e"])("h3",null,"Solved using the backtracking algorithm",-1),l={class:"sub-container"},s={key:0},f={key:0,src:c.a},b={class:"select"},p=Object(r["e"])("span",null,"Choose N: ",-1),d=["value"],O={key:0};function j(e,t,n,o,c,j){return Object(r["f"])(),Object(r["d"])("div",i,[u,a,Object(r["e"])("div",l,[(Object(r["f"])(!0),Object(r["d"])(r["a"],null,Object(r["g"])(c.n,(function(e,t){return Object(r["f"])(),Object(r["d"])("div",{key:e,class:"col"},[(Object(r["f"])(!0),Object(r["d"])(r["a"],null,Object(r["g"])(c.n,(function(e,n){return Object(r["f"])(),Object(r["d"])("div",{key:e,class:"square"},[c.isRun?(Object(r["f"])(),Object(r["d"])("div",s,[1===c.board[t][n]?(Object(r["f"])(),Object(r["d"])("img",f)):Object(r["c"])("",!0)])):Object(r["c"])("",!0)])})),128))])})),128))]),Object(r["e"])("div",b,[p,Object(r["j"])(Object(r["e"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.n=e}),onChange:t[1]||(t[1]=function(){return j.clear&&j.clear.apply(j,arguments)})},[(Object(r["f"])(!0),Object(r["d"])(r["a"],null,Object(r["g"])(j.options,(function(e){return Object(r["f"])(),Object(r["d"])("option",{key:e,value:e+3},Object(r["h"])(e+3),9,d)})),128))],544),[[r["i"],c.n]])]),Object(r["e"])("button",{onClick:t[2]||(t[2]=function(){return j.solveNQ&&j.solveNQ.apply(j,arguments)})},"Run"),Object(r["e"])("button",{onClick:t[3]||(t[3]=function(){return j.clear&&j.clear.apply(j,arguments)})},"Clear"),6===j.options?(Object(r["f"])(),Object(r["d"])("p",O,"Use a bigger screen for up to a 16x16 board.")):Object(r["c"])("",!0)])}var h={name:"App",data:function(){return{n:4,board:{},isRun:!1}},computed:{options:function(){return window.matchMedia("(max-width: 600px)").matches?6:13}},methods:{isSafe:function(e,t,n){var r,o;for(r=0;r<n;r++)if(1==e[t][r])return!1;for(r=t,o=n;r>=0&&o>=0;r--,o--)if(1==e[r][o])return!1;for(r=t,o=n;o>=0&&r<this.n;r++,o--)if(1==e[r][o])return!1;return!0},solveNQUtil:function(e,t){if(t>=this.n)return!0;for(var n=0;n<this.n;n++)if(this.isSafe(e,n,t)){if(e[n][t]=1,1==this.solveNQUtil(e,t+1))return!0;e[n][t]=0}return!1},solveNQ:function(){for(var e={},t=0;t<this.n;t++){e[t]={};for(var n=0;n<this.n;n++)e[t][n]=0}return 0==this.solveNQUtil(e,0)?(console.log("Solution does not exist"),!1):(this.board=e,this.isRun=!0,!0)},clear:function(){this.board={},this.isRun=!1}}},v=(n("cf8a"),n("6b0d")),y=n.n(v);const g=y()(h,[["render",j]]);var m=g;Object(r["b"])(m).mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.41a32375.svg"},cf8a:function(e,t,n){"use strict";n("484e")}});
//# sourceMappingURL=app.833b3cae.js.map