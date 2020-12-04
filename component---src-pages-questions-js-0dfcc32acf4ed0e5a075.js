/*! For license information please see component---src-pages-questions-js-0dfcc32acf4ed0e5a075.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/kvg":function(e,t,n){e.exports={line:"Line-module--line--3P1CF"}},"4dGU":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("/kvg"),o=n.n(c);t.a=function(){return a.a.createElement("div",{className:"d-flex justify-content-end"},a.a.createElement("div",{className:o.a.line}))}},"7uyv":function(e,t,n){e.exports={title:"BigTitle-module--title--2xmy4"}},"8XRh":function(e,t,n){"use strict";var r=n("rePB"),a=n("VTBJ"),c=n("ODXe"),o=n("U8pU"),i=n("q1tI"),l=n("m+aA"),s=n("c+Xe"),u=n("TSYQ"),f=n.n(u),d=n("MNnm");function v(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit".concat(e)]="webkit".concat(t),n["Moz".concat(e)]="moz".concat(t),n["ms".concat(e)]="MS".concat(t),n["O".concat(e)]="o".concat(t.toLowerCase()),n}var p,m,y,b=(p=Object(d.a)(),m="undefined"!=typeof window?window:{},y={animationend:v("Animation","AnimationEnd"),transitionend:v("Transition","TransitionEnd")},p&&("AnimationEvent"in m||delete y.animationend.animation,"TransitionEvent"in m||delete y.transitionend.transition),y),A={};if(Object(d.a)()){var O=document.createElement("div");A=O.style}var h={};function E(e){if(h[e])return h[e];var t=b[e];if(t)for(var n=Object.keys(t),r=n.length,a=0;a<r;a+=1){var c=n[a];if(Object.prototype.hasOwnProperty.call(t,c)&&c in A)return h[e]=t[c],h[e]}return""}var j=E("animationend"),g=E("transitionend"),C=!(!j||!g),w=j||"animationend",k=g||"transitionend";function N(e,t){return e?"object"===Object(o.a)(e)?e[t.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))]:"".concat(e,"-").concat(t):null}function x(e){var t=Object(i.useRef)(!1),n=Object(i.useState)(e),r=Object(c.a)(n,2),a=r[0],o=r[1];return Object(i.useEffect)((function(){return function(){t.current=!0}}),[]),[a,function(e){t.current||o(e)}]}var S=Object(d.a)()?i.useLayoutEffect:i.useEffect,P=n("wgJM"),R=["prepare","start","active","end"];function L(e){return"active"===e||"end"===e}var I=function(e,t){var n=i.useState("none"),r=Object(c.a)(n,2),a=r[0],o=r[1],l=function(){var e=i.useRef(null);function t(){P.a.cancel(e.current)}return i.useEffect((function(){return function(){t()}}),[]),[function n(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t();var c=Object(P.a)((function(){a<=1?r({isCanceled:function(){return c!==e.current}}):n(r,a-1)}));e.current=c},t]}(),s=Object(c.a)(l,2),u=s[0],f=s[1];return S((function(){if("none"!==a&&"end"!==a){var e=R.indexOf(a),n=R[e+1],r=t(a);!1===r?o(n):u((function(e){function t(){e.isCanceled()||o(n)}!0===r?t():Promise.resolve(r).then(t)}))}}),[e,a]),i.useEffect((function(){return function(){f()}}),[]),[function(){o("prepare")},a]};function K(e,t,n,o){var l=o.motionEnter,s=void 0===l||l,u=o.motionAppear,f=void 0===u||u,d=o.motionLeave,v=void 0===d||d,p=o.motionDeadline,m=o.motionLeaveImmediately,y=o.onAppearPrepare,b=o.onEnterPrepare,A=o.onLeavePrepare,O=o.onAppearStart,h=o.onEnterStart,E=o.onLeaveStart,j=o.onAppearActive,g=o.onEnterActive,C=o.onLeaveActive,N=o.onAppearEnd,P=o.onEnterEnd,R=o.onLeaveEnd,K=o.onVisibleChanged,M=x(),U=Object(c.a)(M,2),G=U[0],D=U[1],B=x("none"),Q=Object(c.a)(B,2),q=Q[0],X=Q[1],V=x(null),Z=Object(c.a)(V,2),H=Z[0],J=Z[1],F=Object(i.useRef)(!1),W=Object(i.useRef)(null),T=Object(i.useRef)(!1),z=Object(i.useRef)(null);function Y(){return n()||z.current}var $=Object(i.useRef)(!1);function _(e){var t,n=Y();e&&!e.deadline&&e.target!==n||("appear"===q&&$.current?t=null==N?void 0:N(n,e):"enter"===q&&$.current?t=null==P?void 0:P(n,e):"leave"===q&&$.current&&(t=null==R?void 0:R(n,e)),!1===t||T.current||(X("none"),J(null)))}var ee=function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(e);n.current=e;var r=i.useCallback((function(e){n.current(e)}),[]);function a(e){e&&(e.removeEventListener(k,r),e.removeEventListener(w,r))}return i.useEffect((function(){return function(){a(t.current)}}),[]),[function(e){t.current&&t.current!==e&&a(t.current),e&&e!==t.current&&(e.addEventListener(k,r),e.addEventListener(w,r),t.current=e)},a]}(_),te=Object(c.a)(ee,1)[0],ne=i.useMemo((function(){var e,t,n;switch(q){case"appear":return e={},Object(r.a)(e,"prepare",y),Object(r.a)(e,"start",O),Object(r.a)(e,"active",j),e;case"enter":return t={},Object(r.a)(t,"prepare",b),Object(r.a)(t,"start",h),Object(r.a)(t,"active",g),t;case"leave":return n={},Object(r.a)(n,"prepare",A),Object(r.a)(n,"start",E),Object(r.a)(n,"active",C),n;default:return{}}}),[q]),re=I(q,(function(e){if("prepare"===e){var t=ne.prepare;return!!t&&t(Y())}var n;oe in ne&&J((null===(n=ne[oe])||void 0===n?void 0:n.call(ne,Y(),null))||null);return"active"===oe&&(te(Y()),p>0&&(clearTimeout(W.current),W.current=setTimeout((function(){_({deadline:!0})}),p))),!0})),ae=Object(c.a)(re,2),ce=ae[0],oe=ae[1],ie=L(oe);$.current=ie,S((function(){if(D(t),e){var n,r=F.current;F.current=!0,!r&&t&&f&&(n="appear"),r&&t&&s&&(n="enter"),(r&&!t&&v||!r&&m&&!t&&v)&&(n="leave"),n&&(X(n),ce())}}),[t]),Object(i.useEffect)((function(){("appear"===q&&!f||"enter"===q&&!s||"leave"===q&&!v)&&X("none")}),[f,s,v]),Object(i.useEffect)((function(){return function(){clearTimeout(W.current),T.current=!0}}),[]),Object(i.useEffect)((function(){void 0!==G&&"none"===q&&(null==K||K(G))}),[G,q]);var le=H;return ne.prepare&&"start"===oe&&(le=Object(a.a)({transition:"none"},le)),[q,oe,le,null!=G?G:t]}var M=n("1OyB"),U=n("vuIU"),G=n("Ji7U"),D=n("LK+K"),B=function(e){Object(G.a)(n,e);var t=Object(D.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){return this.props.children}}]),n}(i.Component);var Q=function(e){var t=e;function n(e){return!(!e.motionName||!t)}"object"===Object(o.a)(e)&&(t=e.transitionSupport);var u=i.forwardRef((function(e,t){var o=e.visible,u=void 0===o||o,d=e.removeOnLeave,v=void 0===d||d,p=e.forceRender,m=e.children,y=e.motionName,b=e.leavedClassName,A=e.eventProps,O=n(e),h=Object(i.useRef)(),E=Object(i.useRef)();var j=K(O,u,(function(){try{return Object(l.a)(h.current||E.current)}catch(e){return null}}),e),g=Object(c.a)(j,4),C=g[0],w=g[1],k=g[2],x=g[3],S=Object(i.useRef)(t);S.current=t;var P,R=i.useCallback((function(e){h.current=e,Object(s.a)(S.current,e)}),[]),I=Object(a.a)(Object(a.a)({},A),{},{visible:u});if(m)if("none"!==C&&n(e)){var M,U;"prepare"===w?U="prepare":L(w)?U="active":"start"===w&&(U="start"),P=m(Object(a.a)(Object(a.a)({},I),{},{className:f()(N(y,C),(M={},Object(r.a)(M,N(y,"".concat(C,"-").concat(U)),U),Object(r.a)(M,y,"string"==typeof y),M)),style:k}),R)}else P=x?m(Object(a.a)({},I),R):v?p?m(Object(a.a)(Object(a.a)({},I),{},{style:{display:"none"}}),R):null:m(Object(a.a)(Object(a.a)({},I),{},{className:b}),R);else P=null;return i.createElement(B,{ref:E},P)}));return u.displayName="CSSMotion",u}(C),q=n("Ff2n");function X(e){var t;return t=e&&"object"===Object(o.a)(e)&&"key"in e?e:{key:e},Object(a.a)(Object(a.a)({},t),{},{key:String(t.key)})}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(X)}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],r=0,c=t.length,o=V(e),i=V(t);o.forEach((function(e){for(var t=!1,o=r;o<c;o+=1){var l=i[o];if(l.key===e.key){r<o&&(n=n.concat(i.slice(r,o).map((function(e){return Object(a.a)(Object(a.a)({},e),{},{status:"add"})}))),r=o),n.push(Object(a.a)(Object(a.a)({},l),{},{status:"keep"})),r+=1,t=!0;break}}t||n.push(Object(a.a)(Object(a.a)({},e),{},{status:"remove"}))})),r<c&&(n=n.concat(i.slice(r).map((function(e){return Object(a.a)(Object(a.a)({},e),{},{status:"add"})}))));var l={};n.forEach((function(e){var t=e.key;l[t]=(l[t]||0)+1}));var s=Object.keys(l).filter((function(e){return l[e]>1}));return s.forEach((function(e){(n=n.filter((function(t){var n=t.key,r=t.status;return n!==e||"remove"!==r}))).forEach((function(t){t.key===e&&(t.status="keep")}))})),n}var H=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q,n=function(e){Object(G.a)(r,e);var n=Object(D.a)(r);function r(){var e;return Object(M.a)(this,r),(e=n.apply(this,arguments)).state={keyEntities:[]},e.removeKey=function(t){e.setState((function(e){return{keyEntities:e.keyEntities.map((function(e){return e.key!==t?e:Object(a.a)(Object(a.a)({},e),{},{status:"removed"})}))}}))},e}return Object(U.a)(r,[{key:"render",value:function(){var e=this,n=this.state.keyEntities,r=this.props,a=r.component,c=r.children,o=r.onVisibleChanged,l=Object(q.a)(r,["component","children","onVisibleChanged"]),s=a||i.Fragment,u={};return H.forEach((function(e){u[e]=l[e],delete l[e]})),delete l.keys,i.createElement(s,Object.assign({},l),n.map((function(n){var r=n.status,a=Object(q.a)(n,["status"]),l="add"===r||"keep"===r;return i.createElement(t,Object.assign({},u,{key:a.key,visible:l,eventProps:a,onVisibleChanged:function(t){null==o||o(t,{key:a.key}),t||e.removeKey(a.key)}}),c)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.keys,r=t.keyEntities,a=V(n);return{keyEntities:Z(r,a).filter((function(e){var t=r.find((function(t){var n=t.key;return e.key===n}));return!t||"removed"!==t.status||"remove"!==e.status}))}}}]),r}(i.Component);n.defaultProps={component:"div"}})(C),t.a=Q},"9Odx":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("q1tI")),o=r(n("FhTr")),i=r(n("KQxl")),l=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:o.default}))};l.displayName="RightOutlined";var s=c.forwardRef(l);t.default=s},FhTr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var c=Object.keys(e),o=Object.keys(t);if(c.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),l=0;l<c.length;l++){var s=c[l];if(!i(s))return!1;var u=e[s],f=t[s];if(!1===(a=n?n.call(r,u,f,s):void 0)||void 0===a&&u!==f)return!1}return!0}},Kwbf:function(e,t,n){"use strict";var r={};function a(e,t){0}function c(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}t.a=function(e,t){c(a,e,t)}},"LK+K":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("foSv");var a=n("md7G");function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(r.a)(e);if(t){var o=Object(r.a)(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return Object(a.a)(this,n)}}},MdXN:function(e,t){e.exports="data:image/png;base64,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"},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},Ucwn:function(e,t,n){e.exports=n.p+"static/free-45588031174475dbacae9c19de63f132.png"},VTBJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("rePB");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},Zm9Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r),c=n("TOwV");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return a.a.Children.forEach(e,(function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(o(e)):Object(c.isFragment)(e)&&e.props?n=n.concat(o(e.props.children,t)):n.push(e))})),n}},"c+Xe":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("TOwV");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){"function"==typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}},fEPi:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n("9Odx"))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},fyry:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("MdXN"),o=n.n(c),i=n("gnC9"),l=n.n(i),s=n("Ucwn"),u=n.n(s),f=n("jLgH"),d=n.n(f);t.a=function(){return a.a.createElement("div",{className:"d-flex align-items-center justify-content-center mr-3 ml-3"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-12"},a.a.createElement("div",{className:d.a.each},a.a.createElement("div",null,a.a.createElement("img",{alt:"check",src:o.a,className:"img-fluid"})),a.a.createElement("h5",{className:"mt-3 text-center w-100",dir:"rtl"},"%۱۰۰"," ضمانت اصل بودن کالا"))),a.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-12"},a.a.createElement("div",{className:d.a.each},a.a.createElement("div",null,a.a.createElement("img",{alt:"check",src:u.a,className:"img-fluid"})),a.a.createElement("h5",{className:"mt-3 text-center w-100",dir:"rtl"},"ارسال کاملا رایگان"))),a.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-12"},a.a.createElement("div",{className:d.a.each},a.a.createElement("div",null,a.a.createElement("img",{alt:"check",src:l.a,className:"img-fluid"})),a.a.createElement("h5",{className:"mt-3 text-center w-100",dir:"rtl"},"مشاوره رایگان بگیرید")))))}},gnC9:function(e,t){e.exports="data:image/png;base64,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"},jLgH:function(e,t,n){e.exports={each:"More-module--each--1O5lo"}},kb49:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("7uyv"),o=n.n(c),i=n("4dGU");t.a=function(e){var t=e.children;return a.a.createElement("h3",{className:o.a.title},a.a.createElement(i.a,null),t)}},"m+aA":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("i8i4"),a=n.n(r);function c(e){return e instanceof HTMLElement?e:a.a.findDOMNode(e)}},qT12:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,v=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,A=r?Symbol.for("react.block"):60121,O=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case d:case o:case l:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case v:case b:case y:case s:return e;default:return t}}case c:return t}}}function g(e){return j(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=a,t.ForwardRef=v,t.Fragment=o,t.Lazy=b,t.Memo=y,t.Portal=c,t.Profiler=l,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return g(e)||j(e)===f},t.isConcurrentMode=g,t.isContextConsumer=function(e){return j(e)===u},t.isContextProvider=function(e){return j(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return j(e)===v},t.isFragment=function(e){return j(e)===o},t.isLazy=function(e){return j(e)===b},t.isMemo=function(e){return j(e)===y},t.isPortal=function(e){return j(e)===c},t.isProfiler=function(e){return j(e)===l},t.isStrictMode=function(e){return j(e)===i},t.isSuspense=function(e){return j(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===l||e===i||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===v||e.$$typeof===O||e.$$typeof===h||e.$$typeof===E||e.$$typeof===A)},t.typeOf=j},yNj3:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return Y}));var r=n("q1tI"),a=n.n(r),c=n("yBb5"),o=n("pVnL"),i=n.n(o),l=n("lSNA"),s=n.n(l),u=n("rePB"),f=n("KQm4"),d=n("1OyB"),v=n("vuIU"),p=n("Ji7U"),m=n("LK+K"),y=n("TSYQ"),b=n.n(y),A=n("Gytx"),O=n.n(A),h=n("Zm9Q"),E=n("8XRh"),j=n("ODXe"),g=r.forwardRef((function(e,t){var n,a=e.prefixCls,c=e.forceRender,o=e.className,i=e.style,l=e.children,s=e.isActive,f=e.role,d=r.useState(s||c),v=Object(j.a)(d,2),p=v[0],m=v[1];return r.useEffect((function(){(c||s)&&m(!0)}),[c,s]),p?r.createElement("div",{ref:t,className:b()("".concat(a,"-content"),(n={},Object(u.a)(n,"".concat(a,"-content-active"),s),Object(u.a)(n,"".concat(a,"-content-inactive"),!s),n),o),style:i,role:f},r.createElement("div",{className:"".concat(a,"-content-box")},l)):null}));g.displayName="PanelContent";var C=g,w=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.apply(this,arguments)).handleItemClick=function(){var t=e.props,n=t.onItemClick,r=t.panelKey;"function"==typeof n&&n(r)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return Object(v.a)(n,[{key:"shouldComponentUpdate",value:function(e){return!O()(this.props,e)}},{key:"render",value:function(){var e,t,n=this,a=this.props,c=a.className,o=a.id,i=a.style,l=a.prefixCls,s=a.header,f=a.headerClass,d=a.children,v=a.isActive,p=a.showArrow,m=a.destroyInactivePanel,y=a.accordion,A=a.forceRender,O=a.openMotion,h=a.expandIcon,j=a.extra,g=a.collapsible,w="disabled"===g,k=b()("".concat(l,"-header"),(e={},Object(u.a)(e,f,f),Object(u.a)(e,"".concat(l,"-header-collapsible-only"),"header"===g),e)),N=b()((t={},Object(u.a)(t,"".concat(l,"-item"),!0),Object(u.a)(t,"".concat(l,"-item-active"),v),Object(u.a)(t,"".concat(l,"-item-disabled"),w),t),c),x=r.createElement("i",{className:"arrow"});return p&&"function"==typeof h&&(x=h(this.props)),r.createElement("div",{className:N,style:i,id:o},r.createElement("div",{className:k,onClick:function(){return"header"!==g&&n.handleItemClick()},role:y?"tab":"button",tabIndex:w?-1:0,"aria-expanded":v,onKeyPress:this.handleKeyPress},p&&x,"header"===g?r.createElement("span",{onClick:this.handleItemClick,className:"".concat(l,"-header-text")},s):s,j&&r.createElement("div",{className:"".concat(l,"-extra")},j)),r.createElement(E.a,Object.assign({visible:v,leavedClassName:"".concat(l,"-content-hidden")},O,{forceRender:A,removeOnLeave:m}),(function(e,t){var n=e.className,a=e.style;return r.createElement(C,{ref:t,prefixCls:l,className:n,style:a,isActive:v,forceRender:A,role:y?"tabpanel":null},d)})))}}]),n}(r.Component);w.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var k=w;function N(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t.map((function(e){return String(e)}))}var x=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=Object(f.a)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,c=a.props,o=c.prefixCls,i=c.openMotion,l=c.accordion,s=c.destroyInactivePanel,u=c.expandIcon,f=c.collapsible,d=e.key||String(t),v=e.props,p=v.header,m=v.headerClass,y=v.destroyInactivePanel,b=v.collapsible,A=null!=b?b:f,O={key:d,panelKey:d,header:p,headerClass:m,isActive:l?n[0]===d:n.indexOf(d)>-1,prefixCls:o,destroyInactivePanel:null!=y?y:s,openMotion:i,accordion:l,children:e.props.children,onItemClick:"disabled"===A?null:a.onClickItem,expandIcon:u,collapsible:A};return"string"==typeof e.type?e:r.cloneElement(e,O)},a.getItems=function(){var e=a.props.children;return Object(h.a)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var c=e.activeKey,o=e.defaultActiveKey;return"activeKey"in e&&(o=c),a.state={activeKey:N(o)},a}return Object(v.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!O()(this.props,e)||!O()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,c=t.style,o=t.accordion,i=b()((e={},Object(u.a)(e,n,!0),Object(u.a)(e,a,!!a),e));return r.createElement("div",{className:i,style:c,role:o?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=N(e.activeKey)),t}}]),n}(r.Component);x.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},x.Panel=k;var S=x,P=(x.Panel,n("fEPi")),R=n.n(P),L=n("BGR+"),I=n("H84U"),K=n("Kwbf"),M=function(e){var t,n,a;t=!("disabled"in e),n="Collapse.Panel",a='`disabled` is deprecated. Please use `collapsible="disabled"` instead.',Object(K.a)(t,"[antd: ".concat(n,"] ").concat(a));var c=r.useContext(I.b).getPrefixCls,o=e.prefixCls,l=e.className,u=void 0===l?"":l,f=e.showArrow,d=void 0===f||f,v=c("collapse",o),p=b()(s()({},"".concat(v,"-no-arrow"),!d),u);return r.createElement(S.Panel,i()({},e,{prefixCls:v,className:p}))},U=function(){return{height:0,opacity:0}},G=function(e){return{height:e.scrollHeight,opacity:1}},D=function(e,t){return"height"===t.propertyName},B={motionName:"ant-motion-collapse",onAppearStart:U,onEnterStart:U,onAppearActive:G,onEnterActive:G,onLeaveStart:function(e){return{height:e.offsetHeight}},onLeaveActive:U,onAppearEnd:D,onEnterEnd:D,onLeaveEnd:D,motionDeadline:500},Q=r.isValidElement;function q(e,t){return function(e,t,n){return Q(e)?r.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t}(e,e,t)}var X=function(e){var t,n,a,c=r.useContext(I.b),o=c.getPrefixCls,l=c.direction,u=e.prefixCls,f=e.className,d=void 0===f?"":f,v=e.bordered,p=void 0===v||v,m=e.ghost,y=o("collapse",u),A=void 0!==(n=e.expandIconPosition)?n:"rtl"===l?"right":"left",O=b()((t={},s()(t,"".concat(y,"-borderless"),!p),s()(t,"".concat(y,"-icon-position-").concat(A),!0),s()(t,"".concat(y,"-rtl"),"rtl"===l),s()(t,"".concat(y,"-ghost"),!!m),t),d),E=i()(i()({},B),{motionAppear:!1,leavedClassName:"".concat(y,"-content-hidden")});return r.createElement(S,i()({openMotion:E},e,{bordered:p,expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):r.createElement(R.a,{rotate:t.isActive?90:void 0});return q(a,(function(){return{className:b()(a.props.className,"".concat(y,"-arrow"))}}))},prefixCls:y,className:O}),(a=e.children,Object(h.a)(a).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),a=e.props,c=a.disabled,o=a.collapsible;return q(e,i()(i()({},Object(L.a)(e.props,"disabled")),{key:r,collapsible:null!=o?o:c?"disabled":void 0}))}return e}))))};X.Panel=M;var V=X,Z=V.Panel;var H=function(){return a.a.createElement(V,{style:{width:"90%"},defaultActiveKey:["1"]},a.a.createElement(Z,{style:{textAlign:"right",direction:"rtl"},header:"نحوه خرید سم چگونه است؟",key:"1"},a.a.createElement("p",null,"جهت خرید سم وجه آن را به شماره کارت‌ و یا شماره حساب های درج شده در سایت واریز نمایید. جهت پرداخت به صورت کارت به کارت، می‌توانید از دستگاه های خودپرداز (عابر بانک) و یا کارت به کارت اینترنتی استفاده نمایید. چنانچه قیمت محصول را نمی دانید با ما تماس بگیرید. پس از واریز وجه حتماً با شماره های درج شده در سایت تماس بگیرید و واریزی را اطلاع دهید. لطفاً قبل و بعد از واریز وجه حتماً جهت هماهنگی با واحد فروش ۰۹۰۴۶۵۵۸۲۸۳ تماس حاصل نمایید.")),a.a.createElement(Z,{style:{textAlign:"right",direction:"rtl"},header:"نحوه ارسال سم و هزینه ارسال پس از خرید سم چگونه است؟",key:"2"},a.a.createElement("p",null,"نظر به اینکه ارسال سموم و مایعات جزو ممنوعات پستی اداره پست مرکزی ایران می باشد، از این رو کلیه ارسال ها بوسیله سیستم تیپاکس (و یا پایانه ترمینال) دقیقاً به آدرس شما انجام خواهد شد. هزینه ارسال کالا بر عهده فروشگاه ما و کاملاً رایگان خواهد بود جهت آموزش راهنمای استفاده از سم با شماره های درج شده در سایت تماس بگیرید و یا در واتس آپ – تلگرام از طریق شماره ۰۹۰۴۶۵۵۸۲۸۳ با ما در ارتباط باشید.")),a.a.createElement(Z,{style:{textAlign:"right",direction:"rtl"},header:"شرح تضمین کیفیت کالا و گارانتی محصولات چگونه است؟",key:"3"},a.a.createElement("p",null,"فروشگاه ایران کشت نوین اولین و تنها وارد کننده مستقیم سموم از شمال غرب کشور می باشد. کلیه سموم بصورت کاملاً وارداتی و بدون واسطه به دست مشتری خواهد رسید. برچسب سموم دارای هلوگرام + نشان برجسته شرکت سازنده + تاریخ برجسته تولید و انقضاء و بارکد اختصاصی می باشند، از این رو میتوانید با جستجوی بسیار ساده در اینترنت به اصالت کالا پی ببرید.")),a.a.createElement(Z,{style:{textAlign:"right",direction:"rtl"},header:"مدت زمان ارسال و تحویل کالا به مشتری چقدر است؟",key:"4"},a.a.createElement("p",null,"اطلاعات سفارشات مشتریان در همان روز سفارش (حتی روز های تعطیل) بر روی بسته ها درج می شود. سپس توسط سیستم کالارسانی شرکت تیپاکس به سرتاسر ایران ارسال می شوند. مدت زمان ارسال پس از خرید سم به تهران: کمتر از ۲۴ ساعت مدت زمان ارسال پس از خرید سم به شهرستان: حداکثر ۳۰ ساعت بعد از ثبت کالا در سیستم تیپاکس، کد پیگیری به شماره موبایل مشتری ارسال می شود. بنابراین در هر لحظه میتوانید با مراجعه به سایت تیپاکس (قسمت رهگیری مرسولات) از وضعیت سفارش خود مطلع شوید. چنانچه منطقه و شهر مورد سکونت شما فاقد شعبه های فعال تیپاکس باشند، بسته ها با سیستم باربری اتوبوسرانی در اسرع وقت، به ترمینال مرکزی شهر محل زندگیتان ارسال خواهد شد.")))},J=n("9eSz"),F=n.n(J),W=n("kb49");var T=function(e){var t=e.img;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-12"},a.a.createElement(F.a,{fluid:t,alt:"question",style:{width:"250px"}})),a.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-12"},a.a.createElement("div",{className:"d-flex justify-content-center"},a.a.createElement(W.a,null,"سوالات متداول مشتریان عزیز"))))},z=n("fyry"),Y="1671359105";t.default=function(e){var t=e.data;return a.a.createElement(c.a,{title:"سوالات متداول"},a.a.createElement("div",{className:"container"},a.a.createElement(T,{img:t.file.childImageSharp.fluid}),a.a.createElement("div",{className:"d-flex justify-content-center mt-4",dir:"rtl"},a.a.createElement(H,null)),a.a.createElement("div",{className:"d-flex justify-content-center mt-5 mb-5"},a.a.createElement(z.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-questions-js-0dfcc32acf4ed0e5a075.js.map