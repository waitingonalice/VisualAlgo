(this.webpackJsonpvisual=this.webpackJsonpvisual||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},14:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var r=e(2),o=e.n(r),u=e(7),c=e.n(u),a=(e(12),e(13),e(1)),s=(e(14),e(3));function i(t){var n=[];if(t.length<=1)return t;var e=Object(s.a)(t);return l(t,0,t.length-1,e,n),n}function l(t,n,e,r,o){if(n!==e){var u=Math.floor((n+e)/2);l(r,n,u,t,o),l(r,u+1,e,t,o),function(t,n,e,r,o,u){var c=n,a=n,s=e+1;for(;a<=e&&s<=r;)u.push([a,s]),u.push([a,s]),o[a]<=o[s]?(u.push([c,o[a]]),t[c++]=o[a++]):(u.push([c,o[s]]),t[c++]=o[s++]);for(;a<=e;)u.push([a,a]),u.push([a,a]),u.push([c,o[a]]),t[c++]=o[a++];for(;s<=r;)u.push([s,s]),u.push([s,s]),u.push([c,o[s]]),t[c++]=o[s++]}(t,n,u,e,r,o)}}var h=function t(n,e,r,o){if(n<e){var u=f(n,e,r,o);t(n,u-1,r,o),t(u+1,e,r,o)}},f=function(t,n,e,r){for(var o=t,u=e[n],c=t;c<e[n-1];c++)if(e[c]<u){r.push([o,e[c]]),r.push([o,e[c]]),r.push([c,e[o]]),r.push([c,e[o]]);var a=e[o];e[o]=e[c],e[c]=a,o++}r.push([o,e[n]]),r.push([o,e[n]]),r.push([n,e[o]]),r.push([n,e[o]]);var s=e[o];return e[o]=e[n],e[n]=s,o},b=e(0),v=15,j="orange",p="turquoise";function d(){var t=Object(r.useState)(g()),n=Object(a.a)(t,2),e=n[0],o=n[1];Object(r.useEffect)((function(){return console.log("mounted")}),[]);var u=function(){for(var t=function(t){var n=[];return t.length<=1?t:(function(t,n,e){for(var r=t,o=n.length-1,u=!1,c=0;!u;){u=!0;for(var a=r;a<o-c;a++)if(e.push([a,a+1,!0]),e.push([a,a+1,!0]),n[a]>n[a+1]){e.push([a,n[a+1]]),e.push([a+1,n[a]]);var s=n[a];n[a]=n[a+1],n[a+1]=s,u=!1}c++}}(0,Object(s.a)(t),n),n)}(e),n=function(n){var e=document.getElementsByClassName("array-bar");if(t[n][2]){var r=Object(a.a)(t[n],2),o=r[0],u=r[1],c=e[o].style,s=e[u].style,i=n%2===0?j:p;setTimeout((function(){c.backgroundColor=i,s.backgroundColor=i}),n*v)}else setTimeout((function(){var r=Object(a.a)(t[n],2),o=r[0],u=r[1];e[o].style.height="".concat(u,"px")}),n*v)},r=0;r<t.length;r++)n(r)},c=function(){for(var t=function(t){var n=[];return t.length<=1?t:(function(t,n){for(var e=1;e<t.length;e++){var r=t[e],o=e;for(n.push([o,o-1,!0]),n.push([o,o-1,!0]);o>0&&t[o-1]>r;)n.push([o,o-1,!0]),n.push([o,o-1,!0]),n.push([o,t[o-1]]),n.push([o,t[o-1]]),t[o]=t[o-1],o--;n.push([o,r]),n.push([o,r]),t[o]=r}}(Object(s.a)(t),n),n)}(e),n=function(n){var e=document.getElementsByClassName("array-bar");if(t[n][2]){var r=Object(a.a)(t[n],2),o=r[0],u=r[1],c=e[o].style,s=e[u].style,i=n%2===0?j:p;setTimeout((function(){c.backgroundColor=i,s.backgroundColor=i}),n*v)}else setTimeout((function(){var r=Object(a.a)(t[n],2),o=r[0],u=r[1];e[o].style.height="".concat(u,"px")}),n*v)},r=0;r<t.length;r++)n(r)},l=function(){for(var t=function(t){var n=[];if(t.length<=1)return t;var e=Object(s.a)(t);return h(0,t.length-1,e,n),n}(e),n=function(n){var e=document.getElementsByClassName("array-bar");if(t[n][2]){var r=Object(a.a)(t[n],2),o=r[0],u=r[1],c=e[o].style,s=e[u].style,i=n%3===0?j:p;setTimeout((function(){c.backgroundColor=i,s.backgroundColor=i}),n*v)}else setTimeout((function(){var r=Object(a.a)(t[n],2),o=r[0],u=r[1];e[o].style.height="".concat(u,"px")}),n*v)},r=0;r<t.length;r++)n(r)};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"array-container",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return console.log("reset"),void o(g())},children:"Generate new Array"}),Object(b.jsx)("button",{onClick:function(){window.location.reload(!0)},children:"Reset array"}),Object(b.jsx)("button",{onClick:function(){return function(){for(var t=i(e),n=function(n){var e=document.getElementsByClassName("array-bar");if(n%3!==2){var r=Object(a.a)(t[n],2),o=r[0],u=r[1],c=e[o].style,s=e[u].style,i=n%3===0?j:p;setTimeout((function(){c.backgroundColor=i,s.backgroundColor=i}),n*v)}else setTimeout((function(){var r=Object(a.a)(t[n],2),o=r[0],u=r[1];e[o].style.height="".concat(u,"px")}),n*v)},r=0;r<t.length;r++)n(r)}()},children:"Merge Sort"}),Object(b.jsx)("button",{onClick:function(){return l()},children:"Quick Sort"}),Object(b.jsx)("button",{onClick:function(){return c()},children:"Insertion Sort"}),Object(b.jsx)("button",{onClick:function(){return u()},children:"Bubble Sort"})]}),e.map((function(t,n){return Object(b.jsx)("div",{className:"array-bar",style:{backgroundColor:j,height:"".concat(t,"px")}},n)}))]})})}var g=function(){for(var t,n,e=[],r=0;r<(window.innerWidth-300)/30;r++)e.push((t=5,n=600,Math.floor(Math.random()*(n-t+1)+t)));return e};function O(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d,{})})}var m=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})};c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8d2a407c.chunk.js.map