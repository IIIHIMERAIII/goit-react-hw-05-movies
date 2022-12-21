"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[292],{845:function(n,e,t){t.d(e,{EW:function(){return x},Zx:function(){return h},kh:function(){return w},lh:function(){return u},ur:function(){return l},z6:function(){return b}});var r=t(861),a=t(687),o=t.n(a),i=t(388),c="915249618afd956764505d155ff11f97",s="uk",u="https://image.tmdb.org/t/p/w500",p=i.Z.create({baseURL:"https://api.themoviedb.org/3"});function l(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(o().mark((function n(){var e,t,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.prev=1,n.next=4,p.get("/trending/movie/week?api_key=".concat(c,"&page=").concat(e,"&language=").concat(s));case 4:if(200!==(t=n.sent).status){n.next=7;break}return n.abrupt("return",t);case 7:throw new Error(t.statusText);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),d.apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,p.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t,"&language=").concat(s));case 4:if(200!==(r=n.sent).status){n.next=7;break}return n.abrupt("return",r);case 7:throw new Error(r.statusText);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),f.apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"?api_key=").concat(c,"&language=").concat(s));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function b(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function w(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}},292:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,o,i,c,s,u,p,l,d,x,f=t(861),h=t(885),g=t(687),b=t.n(g),v=t(791),w=t(845),m=t(739),k=t(168),Z=t(934),j=t(87),y=Z.Z.div(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-image: linear-gradient(225deg, rgb(105, 113, 211) 0%, rgb(120, 75, 160) 50%, rgb(42, 120, 171) 100%);\n  width: 100%;\n  min-height: 100vh;\n"]))),_=Z.Z.div(a||(a=(0,k.Z)(["\n  padding-top: 25px;\n  padding-right: 25px;\n  padding-bottom: 25px;\n  display: flex;\n  align-items: flex-end;\n  background-image: linear-gradient(225deg, rgb(105, 113, 211) 0%, rgb(120, 75, 160) 50%, rgb(42, 120, 171) 100%);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px);\n  border: 1px solid white;\n"]))),E=Z.Z.div(o||(o=(0,k.Z)(["\n  margin-top: 20px;\n  display: flex;\n  align-items: flex-end;\n"]))),T=Z.Z.div(i||(i=(0,k.Z)(["\n  /* padding-top: 25px; */\n  padding-right: 25px;\n  /* padding-bottom: 25px; */\n  display: flex;\n  align-items: flex-end;\n  background: rgba(176, 130, 171, 0.15);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px);\n  border: 1px solid white;\n"]))),z=Z.Z.img(c||(c=(0,k.Z)(["\n  height: 540px;\n  margin-left: 20px;\n"]))),L=Z.Z.div(s||(s=(0,k.Z)(["\n  margin-left: 20px;\n  color: white;\n  font-weight: 500;\n  margin-bottom: auto;\n"]))),R=Z.Z.span(u||(u=(0,k.Z)(["\n  color: orange;\n"]))),C=Z.Z.h1(p||(p=(0,k.Z)(["\n  color: orange;\n"]))),O=(0,Z.Z)(j.OL)(l||(l=(0,k.Z)(["\n  transform: scale(1);\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  background: rgba(248, 246, 248, 0.25);\n  font-size: 30px;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  border: 1px solid white;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  margin: 10px 10px 10px 0;\n  text-decoration: none;\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),M=Z.Z.button(d||(d=(0,k.Z)(["\n  transform: scale(1);\n  cursor: pointer;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  background-color: #5e475c;\n  border: none;\n  border: 1px solid white;\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  :hover {\n    /* transform: scale(1.05); */\n    color: #f2f2f2;\n    /* background-color: #91778e; */\n    background-color: #91778e;\n  }\n"]))),S=(0,Z.Z)(j.OL)(x||(x=(0,k.Z)(["\n  cursor: default;\n  &.active {\n    color: #f1962e;\n    button {\n      color: white;\n      background-color: #8978a3;\n    }\n  }\n"]))),U=t(184),Y=function(){var n,e,t=null!==(n=null===(e=(0,m.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",r=(0,v.useState)(""),a=(0,h.Z)(r,2),o=a[0],i=a[1],c=(0,m.UO)().id;(0,v.useEffect)((function(){function n(){return n=(0,f.Z)(b().mark((function n(e){var t,r;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,w.Zx)(e);case 3:t=n.sent,r=t.data,i(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(c)}),[c]);var s=o.title,u=o.overview,p=o.genres,l=o.release_date,d=o.vote_average,x=o.poster_path;return(0,U.jsxs)(y,{children:[(0,U.jsx)(O,{to:t,children:" \u21d0"}),o&&(0,U.jsxs)("section",{children:[(0,U.jsxs)(_,{children:[(0,U.jsx)(z,{src:x?w.lh+x:"https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg",alt:s}),(0,U.jsxs)(L,{children:[(0,U.jsx)(C,{children:s}),(0,U.jsx)("p",{children:u}),(0,U.jsxs)("p",{children:[(0,U.jsx)(R,{children:"Genres: "}),p.map((function(n){return n.name})).join(", ")]}),(0,U.jsxs)("p",{children:[(0,U.jsx)(R,{children:"Release Date:"})," ",l]}),(0,U.jsxs)("p",{children:[(0,U.jsx)(R,{children:"Rating:"})," ",d.toFixed(1)]})]})]}),(0,U.jsxs)(E,{children:[(0,U.jsx)(S,{to:"cast",state:{from:t},children:(0,U.jsx)(M,{children:"Cast"})}),(0,U.jsx)(S,{to:"reviews",state:{from:t},children:(0,U.jsx)(M,{children:"Reviews"})})]}),(0,U.jsx)(T,{children:(0,U.jsx)(v.Suspense,{fallback:null,children:(0,U.jsx)(m.j3,{})})})]})]})}}}]);
//# sourceMappingURL=292.48eca1dc.chunk.js.map