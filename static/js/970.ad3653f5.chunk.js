"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{6535:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t,a,u,i,c,s=r(4165),o=r(5861),p=r(9439),f=r(2791),l=r(7689),d=r(4390),h=r(168),g=r(8547),m=g.ZP.div(t||(t=(0,h.Z)(["\n  padding: 15px 10px;\n"]))),v=g.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n"])),(function(e){return e.theme.spacing(10)})),Z=g.ZP.a(u||(u=(0,h.Z)(["\n  //\u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043d\u0430 \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u044e \u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0430\n"]))),x=g.ZP.li(i||(i=(0,h.Z)(["\n  width: 200px;\n  overflow: hidden;\n\n  p:not(:last-child) {\n    margin-top: ",";\n    margin-bottom: ",";\n  }\n\n  &:hover img {\n    filter: grayscale(1);\n    transition: 300ms ease-in-out;\n  }\n"])),(function(e){return e.theme.spacing(2.5)}),(function(e){return e.theme.spacing(2.5)})),w=g.ZP.img(c||(c=(0,h.Z)(["\n  height: 300px;\n  border: 3px dotted ",";\n  border-top-left-radius: ",";\n  border-bottom-right-radius: ",";\n  filter: grayscale(0);\n"])),(function(e){return e.theme.colors.bernred}),(function(e){return e.theme.radii.lg}),(function(e){return e.theme.radii.lg})),b=r(5510),k=r(5667),y=r.p+"static/media/default_person.880afe0b458fcd338541.jpg",_=r(184),j=function(){var e=(0,l.UO)().movieId,n=(0,f.useState)([]),r=(0,p.Z)(n,2),t=r[0],a=r[1],u=(0,f.useState)(!1),i=(0,p.Z)(u,2),c=i[0],h=i[1],g=(0,f.useState)(null),j=(0,p.Z)(g,2),S=j[0],U=j[1],C=(0,f.useRef)();return(0,f.useEffect)((function(){var n=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){var r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return C.current&&C.current.abort(),C.current=new AbortController,n.prev=2,h(!0),U(null),n.next=7,(0,d.g_)(e,C.current.signal);case 7:r=n.sent,a(r),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code&&U(n.t0.message);case 14:return n.prev=14,h(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[2,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),t&&k.NY.scrollMore(620),(0,_.jsxs)(_.Fragment,{children:[c&&(0,_.jsx)(b.a,{}),S&&(0,_.jsx)("p",{children:"There is no information yet."}),(0,_.jsx)(m,{children:(0,_.jsx)(v,{children:t.map((function(e){var n=e.id,r=e.profile_path,t=e.name,a=e.character;return(0,_.jsx)(x,{children:(0,_.jsxs)(Z,{href:"https://ru.wikipedia.org/wiki/".concat(t),target:"_blank",rel:"noopener noreferrer",children:[(0,_.jsx)(w,{src:r?"https://image.tmdb.org/t/p/w500"+r:y,alt:t,width:200,height:300}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Name: "}),t]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Character: "}),a]})]})},n)}))})})]})}},4390:function(e,n,r){r.d(n,{Ai:function(){return s},Ni:function(){return o},T0:function(){return f},YJ:function(){return c},g_:function(){return p}});var t=r(4165),a=r(5861),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="c16c869f875a641f65f14ffc799280d5",c=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day",{signal:n,params:{api_key:i,language:"en-US"}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie",{signal:r,params:{api_key:i,language:"en-US",query:n,include_adult:!1,page:1}});case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){var a,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n),{signal:r,params:{api_key:i,language:"en-US"}});case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){var a,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits"),{signal:r,params:{api_key:i,language:"en-US"}});case 2:return a=e.sent,c=a.data,e.abrupt("return",c.cast);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,r){var a,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews"),{signal:r,params:{api_key:i,language:"en-US",page:1}});case 2:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=970.ad3653f5.chunk.js.map