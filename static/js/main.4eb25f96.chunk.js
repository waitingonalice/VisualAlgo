(this.webpackJsonpvisual=this.webpackJsonpvisual||[]).push([[0],{104:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(37),s=n.n(i),o=n(17),a=n(13);n(104);function l(e){var t=[];if(e.length<=1)return e;var n=Object(o.a)(e);return h(e,0,e.length-1,n,t),t}function h(e,t,n,r,c){if(t!==n){var i=Math.floor((t+n)/2);h(r,t,i,e,c),h(r,i+1,n,e,c),function(e,t,n,r,c,i){var s=t,o=t,a=n+1;for(;o<=n&&a<=r;)i.push([o,a]),i.push([o,a]),c[o]<=c[a]?(i.push([s,c[o]]),e[s++]=c[o++]):(i.push([s,c[a]]),e[s++]=c[a++]);for(;o<=n;)i.push([o,o]),i.push([o,o]),i.push([s,c[o]]),e[s++]=c[o++];for(;a<=r;)i.push([a,a]),i.push([a,a]),i.push([s,c[a]]),e[s++]=c[a++]}(e,t,i,n,r,c)}}var j=function e(t,n,r,c){if(t<n){var i=u(t,n,r,c);e(t,i-1,r,c),e(i+1,n,r,c)}},u=function(e,t,n,r){for(var c=e,i=n[t],s=e;s<n[t-1];s++)if(n[s]<i){r.push([c,s,!0]),r.push([c,s,!0]),r.push([s,c,!0]),r.push([s,c,!0]),r.push([c,n[s]]),r.push([s,n[c]]);var o=n[c];n[c]=n[s],n[s]=o,c++}r.push([c,t,!0]),r.push([c,t,!0]),r.push([t,c,!0]),r.push([t,c,!0]),r.push([c,n[t]]),r.push([t,n[c]]);var a=n[c];return n[c]=n[t],n[t]=a,c},d=n(61),b=n(63),f=n(59),O=n(5);function g(e){var t="button ".concat(e.type);return Object(O.jsx)(f.a,{className:t,onClick:e.handleClick,colorScheme:"gray",size:"md",leftIcon:e.leftIcon,disabled:e.disabled,children:e.children})}var p=n(66);function x(e){return Object(O.jsxs)(b.a,{children:[Object(O.jsx)(b.b,{as:f.a,rightIcon:Object(O.jsx)(p.a,{}),colorScheme:"gray",children:"Sorting Algorithms"}),Object(O.jsx)(b.d,{children:e.children})]})}var m=n(62),v=n(8),C=n(65),y=n(39);function k(){var e=Object(v.c)(),t=e.isOpen,n=e.onOpen,r=e.onClose;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{leftIcon:Object(O.jsx)(C.a,{}),colorScheme:"gray",size:"sm",variant:"solid",onClick:n,children:"Help"}),Object(O.jsxs)(m.a,{isOpen:t,onClose:r,isCentered:!0,children:[Object(O.jsx)(m.g,{}),Object(O.jsxs)(m.d,{children:[Object(O.jsx)(m.c,{}),Object(O.jsxs)(m.b,{children:[Object(O.jsx)(d.a,{mt:"1rem",mb:"0.5rem",children:Object(O.jsx)(d.d,{fontWeight:"bold",fontSize:"20",children:"Visual Algo Introduction"})}),Object(O.jsx)(d.a,{mb:"1rem",children:"Visual Algo is an interactive web application that enables learners to interact with algorithms through visual animations instead of just reading about them."}),Object(O.jsx)(d.d,{fontWeight:"bold",fontSize:20,mb:"0.5rem",children:"Site Guide"}),Object(O.jsx)(d.d,{fontWeight:"bold",children:"Generate New Array"}),Object(O.jsx)(d.a,{mb:"1rem",children:"Randomly generates new dataset."}),Object(O.jsx)(d.d,{fontWeight:"bold",children:"Reload Page"}),Object(O.jsx)(d.a,{mb:"1rem",children:"Refreshes the page to stop the algorithm from running."}),Object(O.jsx)(d.d,{fontWeight:"bold",children:"Sorting Algorithms"}),Object(O.jsx)(d.a,{mb:"1rem",children:"Shows a list of sorting algorithms, pressing any algorithm in the list will trigger the algorithm to start running."}),Object(O.jsx)(d.d,{fontWeight:"bold",children:"Algorithm tips"}),Object(O.jsx)(d.a,{mb:"1rem",children:"Provides a brief description of how every algorithm functions and its uses."}),Object(O.jsx)(d.d,{fontWeight:"bold",children:"Test Your Knowledge"}),Object(O.jsx)(d.a,{mb:"1rem",children:"Redirects to quiz page."})]}),Object(O.jsx)(m.e,{justifyContent:"center",children:Object(O.jsx)(g,{myClass:"closeBtn",handleClick:r,children:"Close"})})]})]})]})}function w(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(v.c)(),s=i.isOpen,o=i.onOpen,l=i.onClose,h=[{title:"Merge Sort",description:"TBC"},{title:"Quick Sort",description:"TBC"},{title:"Bubble sort",description:"TBC"},{title:"Insertion sort",description:"TBC"}],j=n>0,u=n<h.length-1;var b=h[n];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{myClass:"algoHelp",handleClick:o,leftIcon:Object(O.jsx)(y.b,{}),children:" Algorithm tips "}),Object(O.jsxs)(m.a,{isOpen:s,onClose:l,isCentered:!0,children:[Object(O.jsx)(m.g,{}),Object(O.jsxs)(m.d,{children:[Object(O.jsx)(m.c,{}),Object(O.jsxs)(m.b,{children:[Object(O.jsx)(m.f,{children:b.title}),Object(O.jsxs)(d.c,{pb:3,fontSize:16,children:["Description ",n+1," of ",h.length]}),Object(O.jsx)(d.d,{children:b.description})]}),Object(O.jsx)(m.e,{children:Object(O.jsxs)(d.b,{spacing:"10px",children:[Object(O.jsx)(g,{myClass:"closeBtn",handleClick:l,children:"Close"}),Object(O.jsx)(g,{myClass:"prevBtn",handleClick:function(){j&&c(n-1)},disabled:!j,children:"Previous"}),Object(O.jsx)(g,{myClass:"nextBtn",handleClick:function(){u&&c(n+1)},disabled:!u,children:"Next"})]})})]})]})]})}var S="CornflowerBlue",B="Aquamarine";function T(){var e=Object(r.useState)(A()),t=Object(a.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){function e(){var e=n;window.innerWidth/25<=e.length-1?(e.pop(),c(Object(o.a)(e))):window.innerWidth/10>=e.length-1&&(e.push(M(10,window.innerHeight/2)),c(Object(o.a)(e)))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var i=function(){for(var e=function(e){var t=[];return e.length<=1?e:(function(e,t,n){for(var r=e,c=t.length-1,i=!1,s=0;!i;){i=!0;for(var o=r;o<c-s;o++)if(n.push([o,o+1,!0]),n.push([o,o+1,!0]),t[o]>t[o+1]){n.push([o,t[o+1]]),n.push([o+1,t[o]]);var a=t[o];t[o]=t[o+1],t[o+1]=a,i=!1}s++}}(0,Object(o.a)(e),t),t)}(n),t=function(t){var n=document.getElementsByClassName("array-bar");if(e[t][2]){var r=Object(a.a)(e[t],2),c=r[0],i=r[1],s=n[c].style,o=n[i].style,l=t%2===0?B:S;setTimeout((function(){s.backgroundColor=l,o.backgroundColor=l}),7*t)}else setTimeout((function(){var r=Object(a.a)(e[t],2),c=r[0],i=r[1];n[c].style.height="".concat(i,"px")}),7*t)},r=0;r<e.length;r++)t(r)},s=function(){for(var e=function(e){var t=[];return e.length<=1?e:(function(e,t){for(var n=1;n<e.length;n++){var r=e[n],c=n;for(t.push([c,c-1,!0]),t.push([c,c-1,!0]);c>0&&e[c-1]>r;)t.push([c,c-1,!0]),t.push([c,c-1,!0]),t.push([c,e[c-1]]),t.push([c,e[c-1]]),e[c]=e[c-1],c--;t.push([c,r]),t.push([c,r]),e[c]=r}}(Object(o.a)(e),t),t)}(n),t=function(t){var n=document.getElementsByClassName("array-bar");if(e[t][2]){var r=Object(a.a)(e[t],2),c=r[0],i=r[1],s=n[c].style,o=n[i].style,l=t%2===0?B:S;setTimeout((function(){s.backgroundColor=l,o.backgroundColor=l}),7*t)}else setTimeout((function(){var r=Object(a.a)(e[t],2),c=r[0],i=r[1];n[c].style.height="".concat(i,"px")}),7*t)},r=0;r<e.length;r++)t(r)},h=function(){for(var e=function(e){var t=[];if(e.length<=1)return e;var n=Object(o.a)(e);return j(0,e.length-1,n,t),t}(n),t=function(t){var n=document.getElementsByClassName("array-bar");if(e[t][2]){var r=Object(a.a)(e[t],2),c=r[0],i=r[1],s=n[c].style,o=n[i].style,l=t%3===0?S:B;setTimeout((function(){s.backgroundColor=l,o.backgroundColor=l}),7*t)}else setTimeout((function(){var r=Object(a.a)(e[t],2),c=r[0],i=r[1];n[c].style.height="".concat(i,"px")}),7*t)},r=0;r<e.length;r++)t(r)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.a,{pt:"10",children:Object(O.jsxs)(d.e,{children:[Object(O.jsxs)(d.b,{spacing:"30px",children:[Object(O.jsx)(g,{myClass:"resetArray",handleClick:function(){window.location.reload(!0)},children:"Reload Page"}),Object(O.jsx)(g,{myClass:"generateNewArray",handleClick:function(){return console.log("reset"),void c(A())},children:"Generate New Array"}),Object(O.jsxs)(x,{children:[Object(O.jsx)(b.c,{onClick:function(){return function(){for(var e=l(n),t=function(t){var n=document.getElementsByClassName("array-bar");if(t%3!==2){var r=Object(a.a)(e[t],2),c=r[0],i=r[1],s=n[c].style,o=n[i].style,l=t%3===0?B:S;setTimeout((function(){s.backgroundColor=l,o.backgroundColor=l}),7*t)}else setTimeout((function(){var r=Object(a.a)(e[t],2),c=r[0],i=r[1];n[c].style.height="".concat(i,"px")}),7*t)},r=0;r<e.length;r++)t(r)}()},children:" Merge Sort"}),Object(O.jsx)(b.c,{onClick:function(){return h()},children:"Quick Sort"}),Object(O.jsx)(b.c,{onClick:function(){return s()},children:"Insertion Sort"}),Object(O.jsx)(b.c,{onClick:function(){return i()},children:"Bubble Sort"})]}),Object(O.jsx)(w,{})]}),Object(O.jsx)(d.a,{pos:"absolute",top:"400",children:n.map((function(e,t){return Object(O.jsx)(d.a,{className:"array-bar",style:{backgroundColor:S,height:"".concat(e,"px")}},t)}))})]})})})}var A=function(){for(var e=[],t=0;t<(window.innerWidth-500)/16;t++)e.push(M(10,window.innerHeight/2));return e};function M(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var N=n(36);function W(){var e=Object(N.c)(),t=e.colorMode,n=e.toggleColorMode;function r(){return Object(O.jsx)(f.b,{icon:"light"===t?Object(O.jsx)(y.c,{}):Object(O.jsx)(y.a,{}),isRound:"true",size:"md",onClick:n,float:"right"})}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(d.a,{className:"topLayer",p:4,children:[Object(O.jsx)(k,{}),Object(O.jsx)(r,{})]}),Object(O.jsxs)(d.e,{p:4,children:[Object(O.jsx)(d.c,{children:"Visual Algo"}),Object(O.jsx)(T,{})]})]})}var z=n(19),I=Object(z.b)({config:{initialColorMode:"dark",useSystemColorMode:!1}});s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsxs)(z.a,{children:[Object(O.jsx)(N.b,{initialColorMode:I.config.initialColorMode}),Object(O.jsx)(W,{})]})}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.4eb25f96.chunk.js.map