"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[458],{8647:function(n,t,e){e.d(t,{Z:function(){return v}});var r,u,a=e(7689),o=e(168),c=e(6444),i=e(1087),s=c.ZP.li(r||(r=(0,o.Z)(["\n  margin-bottom: 8px;\n  list-style-type: none;\n"]))),p=(0,c.ZP)(i.OL)(u||(u=(0,o.Z)(["\n  color: darkblue;\n  text-decoration: none;\n  :hover {\n    color: purple;\n    text-decoration: underline;\n  }\n"]))),f=e(9457),l=e(184),v=function(n){var t=n.movies,e=(0,a.TH)();return(0,l.jsx)(f.Z,{as:"ul",pl:"20px",children:t.length>0&&t.map((function(n){var t=n.id,r=n.title;return(0,l.jsx)(s,{children:(0,l.jsx)(p,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},7458:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,u,a,o=e(9439),c=e(1087),i=e(7689),s=e(2791),p=e(4390),f=e(168),l=e(6444),v=e(8494),h=l.ZP.input(r||(r=(0,f.Z)(["\n  padding: 8px 20px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),d=l.ZP.button(u||(u=(0,f.Z)(["\n  position: relative;\n  background-color: #fff;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),m=(0,l.ZP)(v.Yfv)(a||(a=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),x=e(9457),Z=e(184),b=function(n){var t=n.onSubmit;return(0,Z.jsxs)(x.Z,{as:"form",display:"flex",alignItems:"center",onSubmit:t,children:[(0,Z.jsx)(h,{name:"query",autoComplete:"off",placeholder:"Search movies"}),(0,Z.jsx)(d,{type:"submit",children:(0,Z.jsx)(m,{})})]})},y=e(8647),g=function(){var n=(0,s.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],u=(0,c.lr)(),a=(0,o.Z)(u,2),f=a[0],l=a[1],v=(0,i.TH)();(0,s.useEffect)((function(){var n=f.get("query");n&&(0,p.z1)(n).then(r)}),[f]);return(0,Z.jsxs)(x.Z,{as:"section",ml:"30px",children:[(0,Z.jsx)("h1",{children:"Movies"}),(0,Z.jsxs)(x.Z,{children:[(0,Z.jsx)(b,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value.trim().toLowerCase();l(""!==t?{query:t}:{})}}),e.length>0&&(0,Z.jsx)(y.Z,{movies:e,state:{from:v}})]})]})}},4390:function(n,t,e){e.d(t,{$E:function(){return i},Ny:function(){return f},Tg:function(){return p},r7:function(){return v},uV:function(){return l},z1:function(){return h}});var r=e(5861),u=e(7757),a=e.n(u),o=e(2388),c="413db9532d5787ee509e5f4a56809ea0",i="https://image.tmdb.org/t/p/w500";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:c}},p=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/trending/movie/day",s).then((function(n){return n.data.results}));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(t),s).then((function(n){return n.data}));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(t,"/credits"),s).then((function(n){return n.data}));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(t,"/reviews"),s).then((function(n){return n.data.results}));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:c,query:t}},n.prev=1,n.next=4,o.Z.get("/search/movie",e).then((function(n){return n.data.results}));case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=458.86935234.chunk.js.map