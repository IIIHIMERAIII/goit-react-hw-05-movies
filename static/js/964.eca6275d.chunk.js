"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[964],{5:function(n,e,t){t.d(e,{e:function(){return w}});var r,a,i,o,c,s=t(689),u=t(845),p=t(168),l=t(934),f=l.Z.img(r||(r=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),h=l.Z.p(a||(a=(0,p.Z)(["\ncolor: white;\nfont-size: 25px;\n"]))),d=t(184),g=function(n){var e=n.film,t=e.title,r=e.poster_path;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{src:r?u.lh+r:"https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg",alt:t}),(0,d.jsx)(h,{children:t})]})},x=t(87),v=l.Z.ul(i||(i=(0,p.Z)(["\ngap: 30px;\npadding: 30px;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\n"]))),m=l.Z.li(o||(o=(0,p.Z)(["\n  box-shadow: 1px 7px 63px 0px rgba(0,0,0,0.75);\n"]))),b=(0,l.Z)(x.rU)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(48,29,145,0.55);\n  border-radius: 7px;\n  box-shadow: 1px 7px 63px 0px rgba(0,0,0,0.75);\n"]))),w=function(n){var e=n.movies,t=(0,s.TH)();return(0,d.jsx)(d.Fragment,{children:(null===e||void 0===e?void 0:e.length)>0&&(0,d.jsx)(v,{children:e.map((function(n){return(0,d.jsx)(m,{children:(0,d.jsx)(b,{to:"/movie/".concat(n.id),state:{from:t},children:(0,d.jsx)(g,{film:n})})},n.id)}))})})}},845:function(n,e,t){t.d(e,{EW:function(){return h},Zx:function(){return g},kh:function(){return b},lh:function(){return u},ur:function(){return l},z6:function(){return v}});var r=t(861),a=t(687),i=t.n(a),o=t(388),c="915249618afd956764505d155ff11f97",s="uk",u="https://image.tmdb.org/t/p/w500",p=o.Z.create({baseURL:"https://api.themoviedb.org/3"});function l(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(i().mark((function n(){var e,t,r=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.prev=1,n.next=4,p.get("/trending/movie/week?api_key=".concat(c,"&page=").concat(e,"&language=").concat(s));case 4:if(200!==(t=n.sent).status){n.next=7;break}return n.abrupt("return",t);case 7:throw new Error(t.statusText);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),f.apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(i().mark((function n(e){var t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,p.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t,"&language=").concat(s));case 4:if(200!==(r=n.sent).status){n.next=7;break}return n.abrupt("return",r);case 7:throw new Error(r.statusText);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),d.apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"?api_key=").concat(c,"&language=").concat(s));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function b(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t);case 6:throw new Error(t.statusText);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}},964:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,o,c,s=t(885),u=t(791),p=t(168),l=t(934),f=l.Z.main(r||(r=(0,p.Z)(["\nbackground-image: linear-gradient(225deg, rgb(105, 113, 211) 0%, rgb(120, 75, 160) 50%, rgb(42, 120, 171) 100%);\nwidth: 100%;\nmin-height: 100vh;\nflex-direction: column;\ndisplay: flex;\nalign-items: center;\n"]))),h=(l.Z.ul(a||(a=(0,p.Z)(["\ngap: 30px;\npadding: 30px;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\n"]))),t(413)),d=t(861),g=t(687),x=t.n(g),v=t(87),m=t(887),b=t(845),w=l.Z.form(i||(i=(0,p.Z)(["\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\nmax-width: 600px;\nbackground-color: #fff;\nborder-radius: 3px;\noverflow: hidden;\nheight: 50px;\nmargin-top:50px;\nmargin-right: auto;\nmargin-left: auto;\n"]))),k=l.Z.button(o||(o=(0,p.Z)(["\ndisplay: inline-block;\nwidth: 48px;\nheight: 48px;\nborder: 0;\nbackground-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png');\nbackground-size: 40%;\nbackground-repeat: no-repeat;\nbackground-position: center;\nopacity: 0.6;\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\noutline: none;\n"]))),y=l.Z.input(c||(c=(0,p.Z)(["  \ndisplay: inline-block;\nwidth: 100%;\nfont: inherit;\nfont-size: 20px;\nborder: none;\noutline: none;\npadding-left: 4px;\npadding-right: 4px;\n"]))),Z=t(184),j=function(n){var e=n.setMovies,t=(0,v.lr)(),r=(0,s.Z)(t,2),a=r[0],i=r[1],o=(0,u.useState)((function(){var n;return null!==(n=a.get("query"))&&void 0!==n?n:""})),c=(0,s.Z)(o,2),p=c[0],l=c[1],f=(0,m.cI)({defaultValues:{search:""}}),g=f.register,j=f.handleSubmit,_=f.reset;return(0,u.useEffect)((function(){function n(){return n=(0,d.Z)(x().mark((function n(t){var r,a;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.EW)(t);case 3:r=n.sent,a=r.data,console.log(a.results),0===a.results.length&&alert("Sorry, not movie ".concat(t," in database...")),e(a.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),n.apply(this,arguments)}p&&function(e){n.apply(this,arguments)}(p)}),[p,e]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(w,{onSubmit:j((function(n){var e=n.search;l(e),i({query:e}),_()})),autoComplete:"off",children:[(0,Z.jsx)(k,{type:"submit"}),(0,Z.jsx)(y,(0,h.Z)((0,h.Z)({},g("search",{required:"This field is required"})),{},{placeholder:"Search movie",autoFocus:!0}))]})})},_=t(5),E=function(){var n=(0,u.useState)(null),e=(0,s.Z)(n,2),t=e[0],r=e[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(f,{children:[(0,Z.jsx)(j,{setMovies:r}),t&&(0,Z.jsx)(_.e,{movies:t})]})})}}}]);
//# sourceMappingURL=964.eca6275d.chunk.js.map