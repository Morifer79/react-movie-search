"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[789],{5102:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t=r(9142);function i(n,e,r){return(e=(0,t.Z)(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var c=r(4165),u=r(5861),s=r(9439),l=r(2791),p=r(7689),f=r(4390),d=r(5510),h=r(9126),m=r.p+"static/media/default_image.08ba4a3915c0ff049252.png",g=r(3640),x=r(184),v=function(){var n,e,r=(0,p.UO)().movieId,t=(0,l.useState)(null),i=(0,s.Z)(t,2),o=i[0],v=i[1],b=(0,l.useState)(!1),Z=(0,s.Z)(b,2),w=Z[0],j=Z[1],k=(0,l.useState)(null),y=(0,s.Z)(k,2),P=y[0],O=y[1],_=(0,p.TH)(),S=(0,l.useRef)(null!==(n=null===_||void 0===_||null===(e=_.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,l.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),O(null),e.next=5,(0,f.Ni)(r,{signal:n.signal});case 5:t=e.sent,v(t),O(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),O(e.t0.message);case 13:return e.prev=13,j(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[r]);var U=o||{},I=U.title,L=U.release_date,D=U.overview,B=U.vote_average,E=U.poster_path,Q=E?"https://image.tmdb.org/t/p/w500/"+E:m,C=Math.round(100*Number(B)/10);return(0,x.jsxs)(x.Fragment,{children:[w&&(0,x.jsx)(d.a,{}),P&&(0,x.jsx)("p",{children:P}),(0,x.jsxs)(g.FE,{children:[!w&&o&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(g.g9,{to:S.current,children:[(0,x.jsx)(h.aMQ,{}),"Go Back"]}),(0,x.jsxs)(g.Zb,{children:[(0,x.jsx)(g.bU,{children:(0,x.jsx)("img",{src:"".concat(Q),alt:I})}),(0,x.jsxs)(g.kI,{children:[(0,x.jsxs)(g.Dx,{children:[I," (",L.slice(0,4),")"]}),(0,x.jsxs)(g.Q4,{children:[(0,x.jsx)(g.ck,{children:(0,x.jsxs)("p",{children:["User Score: ",(0,x.jsxs)("span",{children:[C,"%"]})]})}),(0,x.jsxs)(g.ck,{children:[(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:D})]}),(0,x.jsxs)(g.ck,{children:[(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:o.genres.map((function(n){return n.name})).join(" ")})]})]})]})]}),(0,x.jsxs)(g.v,{children:[(0,x.jsx)(g.bB,{children:" Additional information"}),(0,x.jsxs)(g.tl,{children:[(0,x.jsxs)(g.LI,{to:"cast",state:a({},_.state),children:[(0,x.jsx)(g.XZ,{})," Cast"]}),(0,x.jsxs)(g.LI,{to:"reviews",state:a({},_.state),children:[(0,x.jsx)(g.eL,{})," Reviews"]})]})]}),(0,x.jsx)(g.Hr,{})]}),(0,x.jsx)(l.Suspense,{children:(0,x.jsx)(p.j3,{})})]})]})}},3640:function(n,e,r){r.d(e,{Dx:function(){return U},FE:function(){return y},Hr:function(){return G},IK:function(){return D},LI:function(){return C},Q4:function(){return I},XZ:function(){return F},Zb:function(){return O},bB:function(){return E},bU:function(){return _},ck:function(){return L},eL:function(){return A},g9:function(){return P},kI:function(){return S},tl:function(){return Q},v:function(){return B}});var t,i,o,a,c,u,s,l,p,f,d,h,m,g,x,v,b=r(168),Z=r(8547),w=r(1087),j=r(9126),k=r(203),y=Z.ZP.section(t||(t=(0,b.Z)(["\n  padding: ",";\n"])),(function(n){return n.theme.spacing(5)})),P=(0,Z.ZP)(w.OL)(i||(i=(0,b.Z)(["\n  padding: 7px 10px;\n  margin-left: ",";\n  margin-bottom: ",";\n\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n  color: ",";\n  border: transparent;\n  border-radius: ",";\n  font-weight: 600;\n  box-shadow: 0 0 13px 3px ",";\n  transition: color 300ms linear, box-shadow 300ms linear;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    box-shadow: 0 0 13px 7px ",";\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred})),O=Z.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: ",";\n  padding: ",";\n"])),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),_=Z.ZP.div(a||(a=(0,b.Z)(["\n  width: 270px;\n  overflow: hidden;\n\n  img {\n    border: 1px solid ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.radii.md})),S=Z.ZP.div(c||(c=(0,b.Z)(["\n  width: 500px;\n  text-align: justify;\n"]))),U=Z.ZP.h2(u||(u=(0,b.Z)(["\n  margin-bottom: ",";\n\n  font-family: 'Bad Script';\n  font-size: 28px;\n  --interval: 5000ms;\n  display: block;\n  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),\n    0 0 40px var(--color3), 0 0 80px var(--color4);\n  will-change: filter, color;\n  filter: saturate(60%);\n\n  animation: flicker steps(100) var(--interval) 1000ms infinite;\n  color: lightpink;\n  --color1: pink;\n  --color2: orangered;\n  --color3: red;\n  --color4: magenta;\n\n  @keyframes flicker {\n    50% {\n      color: ",";\n      filter: saturate(200%) hue-rotate(20deg);\n    }\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.colors.white})),I=Z.ZP.ul(s||(s=(0,b.Z)(["\n  h3 {\n    margin-bottom: ",";\n\n    font-family: 'Bad Script';\n    font-size: 22px;\n    --interval: 5000ms;\n    display: block;\n    text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),\n      0 0 40px var(--color3), 0 0 80px var(--color4);\n    will-change: filter, color;\n    filter: saturate(60%);\n\n    animation: flicker steps(100) var(--interval) 1s infinite;\n    color: lightpink;\n    --color1: pink;\n    --color2: orangered;\n    --color3: red;\n    --color4: magenta;\n\n    @keyframes flicker {\n      50% {\n        color: ",";\n        filter: saturate(200%) hue-rotate(20deg);\n      }\n    }\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.colors.white})),L=Z.ZP.li(l||(l=(0,b.Z)(["\n  p span {\n    padding-left: ",";\n    padding-right: ",";\n    margin-left: ",";\n\n    font-weight: 900;\n    vertical-align: middle;\n    color: ",";\n    width: 50px;\n    height: 20px;\n    border-radius: ",";\n    background-color: ",";\n    box-shadow: 0 0 20px 2px ",";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.spacing(2.5)}),(function(n){return n.theme.spacing(2.5)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.spacing(10)})),D=(0,Z.ZP)(j.Y22)(p||(p=(0,b.Z)(["\n  margin-right: ",";\n"])),(function(n){return n.theme.spacing(8)})),B=Z.ZP.div(f||(f=(0,b.Z)(["\n  padding-left: ",";\n"])),(function(n){return n.theme.spacing(10)})),E=Z.ZP.h3(d||(d=(0,b.Z)(["\n  padding-left: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),Q=Z.ZP.ul(h||(h=(0,b.Z)(["\n  display: flex;\n  gap: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(15)})),C=(0,Z.ZP)(w.rU)(m||(m=(0,b.Z)(["\n  padding: 8px 5px;\n\n  text-align: center;\n  border: solid 1px ",";\n  border-radius: ",";\n  width: 125px;\n  display: block;\n  transition: color 300ms linear, box-shadow 300ms linear;\n\n  &:hover {\n    color: ",";\n    box-shadow: 0 0 13px 3px ",";\n  }\n"])),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred})),F=(0,Z.ZP)(k.XGu)(g||(g=(0,b.Z)(["\n  vertical-align: sub;\n  height: 20px;\n  width: 20px;\n"]))),A=(0,Z.ZP)(k.eQQ)(x||(x=(0,b.Z)(["\n  vertical-align: sub;\n  height: 20px;\n  width: 20px;\n"]))),G=Z.ZP.div(v||(v=(0,b.Z)(["\n  border-top: 1px solid ",";\n  box-shadow: 0 0 13px 3px ",";\n"])),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred}))},4390:function(n,e,r){r.d(e,{Ai:function(){return u},Ni:function(){return s},T0:function(){return p},YJ:function(){return c},g_:function(){return l}});var t=r(4165),i=r(5861),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="c16c869f875a641f65f14ffc799280d5",c=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(){var e,r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day",{params:{api_key:a,language:"en-US"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{params:{api_key:a,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e),{params:{api_key:a,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits"),{params:{api_key:a,language:"en-US"}});case 2:return r=n.sent,i=r.data,n.abrupt("return",i.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:a,language:"en-US",page:1}});case 2:return r=n.sent,i=r.data,n.abrupt("return",i.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=789.3dfb327e.chunk.js.map