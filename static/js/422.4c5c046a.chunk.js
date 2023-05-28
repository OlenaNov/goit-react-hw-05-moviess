"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{5422:function(n,t,r){r.r(t),r.d(t,{default:function(){return q}});var e,a,o,i,s,p,c,x,l=r(3433),u=r(5861),b=r(9439),d=r(4687),g=r.n(d),f=r(2791),h=r(7961),m=r.n(h),v=r(5264),Z=r(9841),w=r(7689),k=r(168),j=r(6444),y=j.ZP.ul(e||(e=(0,k.Z)(["\n    list-style: none;\n    display: flex;\n    gap: 28px;\n    flex-wrap: wrap;\n"]))),P=r(6856),_=r(1087),C=j.ZP.li(a||(a=(0,k.Z)(["\n    width: 300px;\n    height: 360px;\n    background-color: rgba(0, 0, 0, 0.6);\n    border-radius: 5px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    transition: transform 0.3s ease;\n    overflow: hidden;\n    position: relative;\n\n    :hover, :focus {\n        tansform: scale(1.5);\n        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n        transform: scale(1.05);\n        cursor: pointer;\n    }\n"]))),E=j.ZP.img(o||(o=(0,k.Z)(["\n    width: 100%;\n    height: 100%;\n"]))),R=(0,j.ZP)(P.ZI8)(i||(i=(0,k.Z)(["\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    width: 28px;\n    height: 28px;\n    color: #cc0000;\n"]))),z=j.ZP.div(s||(s=(0,k.Z)(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    padding: 12px;\n    width: 100%;\n    height: 25%;\n    overflow-y: auto;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9));\n    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n    "]))),A=j.ZP.h2(p||(p=(0,k.Z)(["\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-bottom: 12px;\n    font-size: 24px;\n    color: rgb(255, 245, 238, 0.8);\n"]))),L=j.ZP.p(c||(c=(0,k.Z)(["\n    margin-block-start: 0;\n    margin-block-end: 0;\n    font-size: 24px;\n    color: rgb(255, 245, 238, 0.8);\n"]))),N=(0,j.ZP)(_.rU)(x||(x=(0,k.Z)(["\n    text-decoration: none;\n"]))),O=r(184),S=function(n){var t=n.location,r=n.item;return(0,O.jsx)(N,{to:"movies/".concat(r.id),state:{from:t},children:(0,O.jsxs)(C,{children:[(0,O.jsx)(E,{src:"https://image.tmdb.org/t/p/original/".concat(r.poster_path),alt:"Poster ".concat(r.title)}),r.adult&&(0,O.jsx)(R,{}),(0,O.jsxs)(z,{children:[(0,O.jsx)(A,{children:r.original_title}),(0,O.jsx)(L,{children:r.release_date.slice(0,4)})]})]})})},U=function(n){var t=n.items,r=(0,w.TH)();return(0,O.jsx)(y,{children:t.map((function(n){return(0,O.jsx)(S,{location:r,item:n},n.id)}))})},q=function(){var n=(0,f.useState)([]),t=(0,b.Z)(n,2),r=t[0],e=t[1],a=(0,f.useState)(!1),o=(0,b.Z)(a,2),i=o[0],s=o[1],p=function(){var n=(0,u.Z)(g().mark((function n(t){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,Z.Z)("/3/trending/movie/day",t);case 4:r=n.sent,e((0,l.Z)(r.results)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&v.Notify.failure("OOps! Error loading information. Please, try again!");case 12:return n.prev=12,s(!1),n.finish(12);case 15:case 16:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(t){return n.apply(this,arguments)}}();return(0,f.useEffect)((function(){var n=new AbortController;return p(n),function(){return n.abort()}}),[]),(0,O.jsxs)(O.Fragment,{children:[i&&(0,O.jsx)(m(),{color:"rgb(204, 0, 0, .7)"}),r.length?(0,O.jsx)(U,{items:r}):null]})}},9841:function(n,t,r){var e=r(5861),a=r(4687),o=r.n(a),i=r(4569),s=r.n(i);s().defaults.baseURL="https://api.themoviedb.org";var p=function(){var n=(0,e.Z)(o().mark((function n(t,r,e){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get(t,{params:{api_key:"84bdbe2f4baecea0c1be28902afc6a5b",query:e},signal:r.signal});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}();t.Z=p}}]);
//# sourceMappingURL=422.4c5c046a.chunk.js.map