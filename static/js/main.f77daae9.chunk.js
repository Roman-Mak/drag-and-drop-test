(this["webpackJsonpdrag-and-drop-test"]=this["webpackJsonpdrag-and-drop-test"]||[]).push([[0],{114:function(a,i,t){},117:function(a,i,t){"use strict";t.r(i);var r=t(0),x=t.n(r),e=t(13),n=t.n(e),s=(t(62),t(14)),o=t(17),k=t(26),c=t(25),p=t(41),m=t.n(p),l=(t(114),t(56)),d=t(57),h=t(1),y=["1","2","3","4","5","6","7","8","9","10"],f=["a","b","c","d","e","f","g","h","i","j"],u=function a(i,t,r,x){var e="".concat(t[Math.floor(Math.random()*t.length)]).concat(i[Math.floor(Math.random()*i.length)]);if(x.includes(e))return a(i,t,r,x);for(var n=0;n<r.length;n++)if(e===r[n])return a(i,t,r,x);return e};var b=function(){var a=Object(r.useState)([]),i=Object(o.a)(a,2),t=i[0],x=i[1],e=Object(r.useState)(function(a,i){var t=Math.floor(Math.random()*a.length),r=Math.floor(Math.random()*i.length),x=["".concat(i[r]).concat(a[t]),"".concat(i[r]).concat("1"===a[t]?a[t+1]:a[t-1]),"".concat("a"===i[r]?i[r+1]:i[r-1]).concat(a[t]),"".concat("a"===i[r]?i[r+1]:i[r-1]).concat("1"===a[t]?a[t+1]:a[t-1])].sort();return[].concat(Object(k.a)(x.slice(0,2).sort((function(a,i){return Number(a.slice(1))-Number(i.slice(1))}))),Object(k.a)(x.slice(2).sort((function(a,i){return Number(a.slice(1))-Number(i.slice(1))}))))}(y,f)),n=Object(o.a)(e,1)[0],p=Object(r.useState)(!0),b=Object(o.a)(p,2),g=b[0],E=b[1],B=Object(r.useState)(!1),D=Object(o.a)(B,2),A=D[0],V=D[1];Object(r.useEffect)((function(){for(var a=1;a<=4;a++)x((function(a){return[].concat(Object(k.a)(a),[u(y,f,a,n)])}))}),[n]);var G={loop:!0,autoplay:!0,animationData:l,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},F={loop:!0,autoplay:!1,animationData:d,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:t.length?"Collect all apples in the box":"Great job!"}),Object(h.jsx)(c.a,{onDragEnd:function(a){if(E(!0),V(!1),a.destination)return n.includes(a.destination.droppableId)?x(t.filter((function(i){return i!==a.source.droppableId}))):void x((function(i){return i.map((function(t,r){return r!==a.source.index||i.includes(a.destination.droppableId)||(t=a.destination.droppableId),t}))}))},onDragUpdate:function(a){E(!1),a.destination&&(n.includes(a.destination.droppableId)?V(!0):V(!1))},children:y.map((function(a){return Object(h.jsx)("div",{style:{display:"flex"},children:f.map((function(i){var r=t.find((function(t){return t==="".concat(i).concat(a)}));return Object(h.jsx)(c.c,{droppableId:"".concat(i).concat(a),isDropDisabled:!!r,children:function(x){return Object(h.jsxs)("div",Object(s.a)(Object(s.a)({},x.droppableProps),{},{ref:x.innerRef,style:{outline:n.includes("".concat(i).concat(a))?"none":"1px solid",width:"30px",height:"30px",position:"relative"},children:["".concat(i).concat(a)===n[0]&&Object(h.jsx)("div",{style:{position:"absolute",left:-60,top:-60},children:Object(h.jsx)(m.a,{width:180,height:180,options:F,isStopped:!A})}),r&&Object(h.jsx)(c.b,{disableInteractiveElementBlocking:!0,draggableId:"".concat(t.indexOf(r)),index:t.indexOf(r),children:function(a){return Object(h.jsx)("div",Object(s.a)(Object(s.a)(Object(s.a)({ref:a.innerRef},a.draggableProps),a.dragHandleProps),{},{children:Object(h.jsx)(m.a,{width:30,height:30,options:G,isStopped:!g})}))}}),x.placeholder]}))}},"".concat(i).concat(a))}))},a)}))})]})})},g=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,118)).then((function(i){var t=i.getCLS,r=i.getFID,x=i.getFCP,e=i.getLCP,n=i.getTTFB;t(a),r(a),x(a),e(a),n(a)}))};n.a.render(Object(h.jsx)(x.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),g()},56:function(a){a.exports=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":239,"w":255,"h":286,"nm":"Level Elma 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Level 1/Sequoia Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[137.484,145.881,0],"ix":2},"a":{"a":0,"k":[88,114.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":72,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":76,"s":[110,110,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":80,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":84,"s":[120,120,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":87,"s":[100,100,100]},{"t":150,"s":[100,100,100]}],"ix":6,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\', 0);"}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.703,-3.111],[0.144,-0.446],[0.873,-1.792],[0.056,3.254],[1.567,9.634],[14.87,0.979],[8.034,0.413],[0.373,3.056],[-14.268,-5.084],[-3.94,-6.778],[-0.471,-8.206],[0.222,-4.205]],"o":[[-0.105,0.465],[-0.61,1.892],[-5.133,0.024],[-0.164,-9.663],[-2.38,-14.632],[-8.067,-0.531],[-1.993,-0.103],[14.604,-2.779],[7.302,2.602],[4.174,7.181],[0.241,4.206],[-0.164,3.106]],"v":[[32.761,28.941],[32.389,30.309],[31.205,36.208],[26.324,29.046],[24.624,0.139],[-4.981,-29.633],[-29.111,-30.247],[-33.822,-32.825],[9.603,-31.148],[27.332,-17.162],[33.582,6.601],[33.541,19.231]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.880896235447,0.026900513967,0.026900513967,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[137.636,120.401],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,1.35],[-2.358,-4.386],[2.358,-13.315],[1.71,-4.089],[1.767,0.527],[-0.448,1.601],[-1.136,5.459],[9.114,12.278],[0.543,0.873]],"o":[[4.677,3.328],[6.629,12.33],[-0.771,4.348],[-0.551,1.319],[-2.006,-0.597],[1.507,-5.385],[3.117,-14.963],[-0.613,-0.825],[-0.126,-0.201]],"v":[[-8.287,-33.066],[1.765,-21.503],[5.99,17.242],[2.416,29.971],[-0.647,32.538],[-1.884,28.43],[2.661,12.29],[-6.522,-28.622],[-8.268,-31.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.656951365751,0.669771082261,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[150.958,132.093],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.812,-1.622],[1.739,2.347],[11.339,18.83],[-1.727,1.286],[-0.907,-1.254],[-1.168,-2.352],[-11.148,-18.142]],"o":[[-2.873,-1.646],[-13.146,-17.739],[-0.703,-1.168],[1.812,-1.351],[1.539,2.129],[9.475,19.072],[0.565,0.919]],"v":[[20.367,34.404],[14.861,27.339],[-19.045,-29.213],[-19.452,-33.053],[-15.44,-31.592],[-11.296,-24.867],[19.6,30.971]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.632383877623,0.799825630936,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[54.11,42.7],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.617,-3.771],[0.809,-0.311],[0.061,2.908],[-15.397,13.812],[-0.439,0.39],[-1.379,-1.74],[1.623,-1.313],[8.541,-16.108]],"o":[[-0.81,0.312],[-0.06,-2.909],[8.487,-18.908],[0.437,-0.393],[1.52,-1.35],[1.33,1.678],[-14.294,11.55],[-1.916,3.613]],"v":[[-18.993,29.415],[-21.422,30.35],[-21.604,21.625],[14.395,-27.329],[15.664,-28.551],[20.274,-28.61],[19.315,-24.067],[-14.099,18.123]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.480392815085,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[103.905,55.724],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.358,-13.314],[1.71,-4.089],[1.767,0.526],[-0.448,1.601],[-1.136,5.459],[9.114,12.277],[0.544,0.873],[0,1.35],[-2.358,-4.386]],"o":[[-0.771,4.349],[-0.551,1.319],[-2.006,-0.598],[1.507,-5.383],[3.118,-14.965],[-0.613,-0.825],[-0.126,-0.201],[4.677,3.329],[6.629,12.33]],"v":[[68.982,-3.363],[65.408,9.366],[62.345,11.934],[61.108,7.825],[65.653,-8.315],[56.47,-49.227],[54.724,-51.772],[54.705,-53.671],[64.757,-42.108]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.804,7.986],[1.326,3.03],[8.501,3.016],[14.605,-2.779],[7.646,-1.145],[0.809,-0.31],[0.865,0.215],[4.335,1.56],[0.948,0.216],[9.31,-23.175],[-9.692,-24.89],[-17.532,-6.925],[-9.418,3.958],[-5.945,-1.81],[-11.955,7.041],[-6.494,15.14],[-1.378,17.082]],"o":[[-0.739,-3.267],[-3.661,-8.367],[-14.269,-5.084],[-7.646,1.145],[-0.81,0.312],[-0.418,0.867],[-5.069,0.666],[-0.727,1.417],[-24.298,-5.524],[-10.233,25.475],[6.882,17.672],[9.27,3.662],[5.639,-2.37],[13.105,3.991],[14.093,-8.3],[6.78,-15.807],[0.643,-7.967]],"v":[[84.209,-41.188],[81.138,-50.667],[61.809,-67.817],[19.883,-70.994],[-3.054,-67.559],[-5.482,-66.625],[-7.471,-65.805],[-20.59,-70.139],[-23.185,-69.852],[-77.483,-41.147],[-75.219,34.15],[-38.65,70.81],[-10.775,71.418],[6.435,71.043],[44.337,66.954],[75.607,32.005],[87.073,-15.749]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.957729204963,0.098203285068,0.098203285068,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[87.966,152.698],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":6,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-16.175,-16.874],[-6.593,-6.431],[-2.284,-2.715],[4.335,1.56],[3.925,3.513],[5.888,15.707],[-0.902,11.073]],"o":[[2.114,23.065],[6.362,6.635],[2.539,2.476],[-5.068,0.666],[-4.032,-3.392],[-12.337,-11.04],[-3.984,-10.628],[0,0]],"v":[[-25.183,-43.655],[1.549,16.448],[20.591,36.409],[28.735,42.989],[15.617,38.655],[3.537,28.459],[-24.742,-10.983],[-27.833,-43.655]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.636221852022,0.803609990139,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[51.759,43.905],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.873,-1.646],[0.565,0.919],[9.475,19.072],[1.539,2.129],[1.812,-1.351],[-0.703,-1.168],[-13.146,-17.739]],"o":[[0.812,-1.622],[-11.148,-18.142],[-1.168,-2.352],[-0.907,-1.254],[-1.727,1.286],[11.339,18.83],[1.739,2.347]],"v":[[19.946,33.424],[19.179,29.991],[-11.717,-25.847],[-15.861,-32.572],[-19.873,-34.033],[-19.466,-30.193],[14.44,26.359]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-8.229,-13.207],[-1.417,-17.962],[-0.062,-2.908],[0.865,0.217],[2.539,2.477],[6.361,6.636],[2.114,23.065]],"o":[[15.511,4.87],[9.205,14.774],[0.061,2.908],[-0.42,0.867],[-2.284,-2.715],[-6.594,-6.431],[-16.176,-16.874],[0,0]],"v":[[-25.304,-43.429],[8.358,-14.033],[27.77,33.668],[27.955,42.393],[25.964,43.212],[17.821,36.632],[-1.221,16.671],[-27.955,-43.429]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.744631060432,0.846286010742,0.287721910664,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[54.531,43.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":6,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[51.516,222.119,0],"ix":2},"a":{"a":0,"k":[-717.317,361,0],"ix":1},"s":{"a":0,"k":[85.197,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[173.637,20.215],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.427451010311,0.694117647059,0.003921568627,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-715.182,358.107],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}')},57:function(a){a.exports=JSON.parse('{"v":"5.5.10","fr":29.9700012207031,"ip":0,"op":119.000004846969,"w":851,"h":851,"nm":"Comp 1","ddd":1,"assets":[{"id":"comp_0","layers":[{"ddd":1,"ind":1,"ty":4,"nm":"Shape Layer 10","parent":8,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":21,"s":[148]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":28,"s":[167]},{"t":32.0000013033867,"s":[148]}],"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":0,"k":[61.719,20.5,99.587],"ix":2},"a":{"a":0,"k":[107.135,-106.443,-1.455],"ix":1},"s":{"a":0,"k":[50,90,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[210.746,213.461],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.286274509804,0.286274509804,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.127,-107.77],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":2,"ty":4,"nm":"Shape Layer 7","parent":8,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":21,"s":[148]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":28,"s":[167]},{"t":32.0000013033867,"s":[148]}],"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":0,"k":[68.356,22.5,95.119],"ix":2},"a":{"a":0,"k":[107.135,-106.443,-1.455],"ix":1},"s":{"a":0,"k":[50,90,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[210.746,213.461],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.286274509804,0.286274509804,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.127,-107.77],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":27,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":3,"ty":4,"nm":"Shape Layer 9","parent":8,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":21,"s":[-148]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":28,"s":[-168]},{"t":32.0000013033867,"s":[-148]}],"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":0,"k":[-125.483,21.5,97.914],"ix":2},"a":{"a":0,"k":[107.135,-106.443,-1.455],"ix":1},"s":{"a":0,"k":[-50,-90,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[210.746,213.461],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.286274509804,0.286274509804,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.127,-107.77],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":4,"ty":4,"nm":"Shape Layer 6","parent":8,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":21,"s":[-148]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":28,"s":[-168]},{"t":32.0000013033867,"s":[-148]}],"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":0,"k":[-114.966,30.5,105.556],"ix":2},"a":{"a":0,"k":[107.135,-106.443,-1.455],"ix":1},"s":{"a":0,"k":[-50,-90,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[210.746,213.461],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.286274509804,0.286274509804,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.127,-107.77],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":27,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":5,"ty":4,"nm":"Shape Layer 4","parent":8,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":0,"k":-45,"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[270,0,315],"ix":7},"p":{"a":0,"k":[-124.986,117.984,194.454],"ix":2},"a":{"a":0,"k":[69.469,117.984,0],"ix":1},"s":{"a":0,"k":[100,-100,-100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[194.969,194.969],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.733605298809,0.031939327016,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-28.016,117.984],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":6,"ty":4,"nm":"Shape Layer 3","parent":8,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":0,"k":45,"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[270,0,315],"ix":7},"p":{"a":0,"k":[-124.986,117.984,194.454],"ix":2},"a":{"a":0,"k":[69.469,117.984,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[194.969,194.969],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866666666667,0.149019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-28.016,117.984],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":7,"ty":4,"nm":"Shape Layer 2","parent":8,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":0,"k":-45,"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[270,0,315],"ix":7},"p":{"a":0,"k":[69.469,117.984,0],"ix":2},"a":{"a":0,"k":[69.469,117.984,0],"ix":1},"s":{"a":0,"k":[-100,-100,-100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[194.969,194.969],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.733605298809,0.031939327016,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-28.016,117.984],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":8,"ty":4,"nm":"Shape Layer 1","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":0,"ix":8},"ry":{"a":0,"k":0,"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[270,0,0],"ix":7},"p":{"a":0,"k":[1.146,-216.444,96.815],"ix":2},"a":{"a":0,"k":[-28.016,117.984,0],"ix":1},"s":{"a":0,"k":[109.89,100,112.36],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[194.969,194.969],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866907276827,0.150704686782,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-28.016,117.984],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":1,"ind":9,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":90,"ix":8},"ry":{"a":0,"k":0,"ix":9},"rz":{"a":1,"k":[{"i":{"x":[0.46],"y":[1]},"o":{"x":[0.349],"y":[0]},"t":14,"s":[0]},{"t":29.0000011811942,"s":[-216]}],"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":1,"k":[{"i":{"x":0.449,"y":1},"o":{"x":0.514,"y":0},"t":0,"s":[422.951,521.406,96.72],"to":[0,-11.667,0],"ti":[0,0,0]},{"i":{"x":0.436,"y":1},"o":{"x":0.524,"y":0},"t":6,"s":[422.951,451.406,96.72],"to":[0,0,0],"ti":[0,5.833,0]},{"i":{"x":0.369,"y":1},"o":{"x":0.699,"y":0},"t":12,"s":[422.951,521.406,96.72],"to":[0,-5.833,0],"ti":[0,0,0]},{"i":{"x":0.271,"y":1},"o":{"x":0.409,"y":0},"t":19,"s":[422.951,416.406,96.72],"to":[0,0,0],"ti":[0,-17.5,0]},{"t":29.0000011811942,"s":[422.951,521.406,96.72]}],"ix":2},"a":{"a":0,"k":[-1.127,-107.77,0],"ix":1},"s":{"a":0,"k":[91,89,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[210.746,213.461],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.286274509804,0.286274509804,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.127,-107.77],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.615],"y":[0]},"t":34,"s":[0]},{"t":47.0000019143492,"s":[100]}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[336.642,257.039,0],"ix":2},"a":{"a":0,"k":[-231.449,-251.449,0],"ix":1},"s":{"a":0,"k":[43,43,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[48.102,48.102],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866666726505,0.149019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-231.449,-251.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":34.0000013848484,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 7","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.615],"y":[0]},"t":43,"s":[0]},{"t":56.0000022809268,"s":[100]}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[476.642,247.039,0],"ix":2},"a":{"a":0,"k":[-231.449,-251.449,0],"ix":1},"s":{"a":0,"k":[52,52,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[48.102,48.102],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866666726505,0.149019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-231.449,-251.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":43.0000017514259,"op":910.00003706506,"st":10.0000004073083,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.615],"y":[0]},"t":48,"s":[0]},{"t":68.0000027696968,"s":[100]}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[400.642,307.039,0],"ix":2},"a":{"a":0,"k":[-231.449,-251.449,0],"ix":1},"s":{"a":0,"k":[34,34,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[48.102,48.102],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866666726505,0.149019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-231.449,-251.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":48.0000019550801,"op":915.000037268714,"st":15.0000006109625,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.615],"y":[0]},"t":34,"s":[0]},{"t":50.0000020365418,"s":[100]}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[418.642,249.039,0],"ix":2},"a":{"a":0,"k":[-231.449,-251.449,0],"ix":1},"s":{"a":0,"k":[27,27,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[48.102,48.102],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866666726505,0.149019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-231.449,-251.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":34.0000013848484,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.615],"y":[0]},"t":29,"s":[0]},{"t":45.0000018328876,"s":[100]}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[433.642,284.039,0],"ix":2},"a":{"a":0,"k":[-231.449,-251.449,0],"ix":1},"s":{"a":0,"k":[27,27,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[24.051,-24.051],[24.051,24.051],[-24.051,24.051],[-24.051,-24.051]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866666726505,0.149019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-231.449,-251.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":29.0000011811942,"op":896.000036494828,"st":-4.00000016292334,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.615],"y":[0]},"t":26,"s":[0]},{"t":42.0000017106951,"s":[100]}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');"},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[383.642,264.039,0],"ix":2},"a":{"a":0,"k":[-231.449,-251.449,0],"ix":1},"s":{"a":0,"k":[59,59,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[48.102,48.102],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.866666726505,0.149019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-231.449,-251.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":26.0000010590017,"op":893.000036372636,"st":-7.00000028511585,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"Pre-comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[425,528,0],"ix":2},"a":{"a":0,"k":[425.5,524,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.575,0.575,0.575],"y":[1,0.726,1]},"o":{"x":[0.185,0.185,0.185],"y":[0,0,0]},"t":0,"s":[100,88,100]},{"i":{"x":[0.703,0.703,0.703],"y":[1,1,1]},"o":{"x":[0.341,0.341,0.341],"y":[0,2.638,0]},"t":5,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":13,"s":[100,79,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":19,"s":[100,111,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":28,"s":[100,80,100]},{"t":33.0000013441176,"s":[100,100,100]}],"ix":6}},"ao":0,"w":851,"h":851,"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[425,513.285,0],"ix":2},"a":{"a":0,"k":[2.449,93.785,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":6,"s":[87,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":12,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":17,"s":[83,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":28,"s":[130,313,100]},{"t":33.0000013441176,"s":[123,313,100]}],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":2.4,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[193.898,6.57],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.286274509804,0.286274509804,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[2.449,93.785],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0}],"markers":[]}')},62:function(a,i,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.f77daae9.chunk.js.map