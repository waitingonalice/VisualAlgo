(this.webpackJsonpvisual=this.webpackJsonpvisual||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),o=n(3),i=n.n(o),a=(n(12),n(13),n(4)),u=n(5),s=n(7),l=n(6),b=(n(14),n(0)),j=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={array:[]},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var t,e,n=[],r=0;r<320;r++)n.push((t=5,e=730,Math.floor(Math.random()*(e-t+1)+t)));this.setState({array:n})}},{key:"mergeSort",value:function(){}},{key:"quickSort",value:function(){}},{key:"heapSort",value:function(){}},{key:"bubbleSort",value:function(){}},{key:"render",value:function(){var t=this,e=this.state.array;return Object(b.jsxs)("div",{className:"array-container",children:[Object(b.jsxs)("div",{id:"button",children:[Object(b.jsx)("button",{onClick:function(){return t.resetArray()},children:"Generate new Array"}),Object(b.jsx)("button",{onClick:function(){return t.mergeSort()},children:"Merge Sort"}),Object(b.jsx)("button",{onClick:function(){return t.quickSort()},children:"Quick Sort"}),Object(b.jsx)("button",{onClick:function(){return t.heapSort()},children:"Heap sort"}),Object(b.jsx)("button",{onClick:function(){return t.bubbleSort()},children:"Bubble Sort"})]}),e.map((function(t,e){return Object(b.jsx)("div",{className:"array-bar",style:{height:"".concat(t,"px")}},e)}))]})}}]),n}(c.a.Component);var h=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),o(t),i(t)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.063d30a3.chunk.js.map