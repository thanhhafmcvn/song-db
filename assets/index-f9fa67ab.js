(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lg={exports:{}},ol={},ug={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),Ow=Symbol.for("react.portal"),$w=Symbol.for("react.fragment"),Lw=Symbol.for("react.strict_mode"),Mw=Symbol.for("react.profiler"),Fw=Symbol.for("react.provider"),Uw=Symbol.for("react.context"),Vw=Symbol.for("react.forward_ref"),zw=Symbol.for("react.suspense"),jw=Symbol.for("react.memo"),bw=Symbol.for("react.lazy"),xf=Symbol.iterator;function Bw(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,dg={};function wi(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||cg}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fg(){}fg.prototype=wi.prototype;function Nh(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||cg}var Ah=Nh.prototype=new fg;Ah.constructor=Nh;hg(Ah,wi.prototype);Ah.isPureReactComponent=!0;var Pf=Array.isArray,pg=Object.prototype.hasOwnProperty,Rh={current:null},mg={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pg.call(e,r)&&!mg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:js,type:t,key:s,ref:o,props:i,_owner:Rh.current}}function Hw(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function Kw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Of=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kw(""+t.key):e.toString(36)}function Ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case js:case Ow:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ou(o,0):r,Pf(i)?(n="",t!=null&&(n=t.replace(Of,"$&/")+"/"),Ko(i,e,n,"",function(u){return u})):i!=null&&(Dh(i)&&(i=Hw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Of,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ou(s,a);o+=Ko(s,e,n,l,i)}else if(l=Bw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ou(s,a++),o+=Ko(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yo(t,e,n){if(t==null)return t;var r=[],i=0;return Ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ww(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ge={current:null},Wo={transition:null},qw={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Rh};B.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=wi;B.Fragment=$w;B.Profiler=Mw;B.PureComponent=Nh;B.StrictMode=Lw;B.Suspense=zw;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pg.call(e,l)&&!mg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:js,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:Uw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fw,_context:t},t.Consumer=t};B.createElement=gg;B.createFactory=function(t){var e=gg.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Vw,render:t}};B.isValidElement=Dh;B.lazy=function(t){return{$$typeof:bw,_payload:{_status:-1,_result:t},_init:Ww}};B.memo=function(t,e){return{$$typeof:jw,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return Ge.current.useCallback(t,e)};B.useContext=function(t){return Ge.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Ge.current.useDeferredValue(t)};B.useEffect=function(t,e){return Ge.current.useEffect(t,e)};B.useId=function(){return Ge.current.useId()};B.useImperativeHandle=function(t,e,n){return Ge.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Ge.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Ge.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Ge.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Ge.current.useReducer(t,e,n)};B.useRef=function(t){return Ge.current.useRef(t)};B.useState=function(t){return Ge.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Ge.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Ge.current.useTransition()};B.version="18.2.0";ug.exports=B;var Ln=ug.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw=Ln,Qw=Symbol.for("react.element"),Xw=Symbol.for("react.fragment"),Yw=Object.prototype.hasOwnProperty,Jw=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zw={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Yw.call(e,r)&&!Zw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Qw,type:t,key:s,ref:o,props:i,_owner:Jw.current}}ol.Fragment=Xw;ol.jsx=yg;ol.jsxs=yg;lg.exports=ol;var te=lg.exports,ec={},vg={exports:{}},ut={},wg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,V){var z=A.length;A.push(V);e:for(;0<z;){var he=z-1>>>1,Ee=A[he];if(0<i(Ee,V))A[he]=V,A[z]=Ee,z=he;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],z=A.pop();if(z!==V){A[0]=z;e:for(var he=0,Ee=A.length,mo=Ee>>>1;he<mo;){var qn=2*(he+1)-1,su=A[qn],Gn=qn+1,go=A[Gn];if(0>i(su,z))Gn<Ee&&0>i(go,su)?(A[he]=go,A[Gn]=z,he=Gn):(A[he]=su,A[qn]=z,he=qn);else if(Gn<Ee&&0>i(go,z))A[he]=go,A[Gn]=z,he=Gn;else break e}}return V}function i(A,V){var z=A.sortIndex-V.sortIndex;return z!==0?z:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=A)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(A){if(y=!1,m(A),!v)if(n(l)!==null)v=!0,ru(I);else{var V=n(u);V!==null&&iu(w,V.startTime-A)}}function I(A,V){v=!1,y&&(y=!1,p(x),x=-1),g=!0;var z=d;try{for(m(V),f=n(l);f!==null&&(!(f.expirationTime>V)||A&&!wt());){var he=f.callback;if(typeof he=="function"){f.callback=null,d=f.priorityLevel;var Ee=he(f.expirationTime<=V);V=t.unstable_now(),typeof Ee=="function"?f.callback=Ee:f===n(l)&&r(l),m(V)}else r(l);f=n(l)}if(f!==null)var mo=!0;else{var qn=n(u);qn!==null&&iu(w,qn.startTime-V),mo=!1}return mo}finally{f=null,d=z,g=!1}}var N=!1,R=null,x=-1,Y=5,j=-1;function wt(){return!(t.unstable_now()-j<Y)}function Ai(){if(R!==null){var A=t.unstable_now();j=A;var V=!0;try{V=R(!0,A)}finally{V?Ri():(N=!1,R=null)}}else N=!1}var Ri;if(typeof h=="function")Ri=function(){h(Ai)};else if(typeof MessageChannel<"u"){var Df=new MessageChannel,xw=Df.port2;Df.port1.onmessage=Ai,Ri=function(){xw.postMessage(null)}}else Ri=function(){E(Ai,0)};function ru(A){R=A,N||(N=!0,Ri())}function iu(A,V){x=E(function(){A(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ru(I))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var z=d;d=V;try{return A()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=d;d=A;try{return V()}finally{d=z}},t.unstable_scheduleCallback=function(A,V,z){var he=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?he+z:he):z=he,A){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=z+Ee,A={id:c++,callback:V,priorityLevel:A,startTime:z,expirationTime:Ee,sortIndex:-1},z>he?(A.sortIndex=z,e(u,A),n(l)===null&&A===n(u)&&(y?(p(x),x=-1):y=!0,iu(w,z-he))):(A.sortIndex=Ee,e(l,A),v||g||(v=!0,ru(I))),A},t.unstable_shouldYield=wt,t.unstable_wrapCallback=function(A){var V=d;return function(){var z=d;d=V;try{return A.apply(this,arguments)}finally{d=z}}}})(Eg);wg.exports=Eg;var eE=wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=Ln,at=eE;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,us={};function Er(t,e){ti(t,e),ti(t+"Capture",e)}function ti(t,e){for(us[t]=e,t=0;t<e.length;t++)_g.add(e[t])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,tE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f={},Lf={};function nE(t){return tc.call(Lf,t)?!0:tc.call($f,t)?!1:tE.test(t)?Lf[t]=!0:($f[t]=!0,!1)}function rE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iE(t,e,n,r){if(e===null||typeof e>"u"||rE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,Ph);xe[e]=new Qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,Ph);xe[e]=new Qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,Ph);xe[e]=new Qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Qe(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oh(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iE(e,n,i,r)&&(n=null),r||i===null?nE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),kg=Symbol.for("react.offscreen"),Mf=Symbol.iterator;function Di(t){return t===null||typeof t!="object"?null:(t=Mf&&t[Mf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,au;function zi(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var lu=!1;function uu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function sE(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=uu(t.type,!1),t;case 11:return t=uu(t.type.render,!1),t;case 1:return t=uu(t.type,!0),t;default:return""}}function sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dr:return"Fragment";case Rr:return"Portal";case nc:return"Profiler";case $h:return"StrictMode";case rc:return"Suspense";case ic:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ig:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:sc(t.type)||"Memo";case hn:e=t._payload,t=t._init;try{return sc(t(e))}catch{}}return null}function oE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===$h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aE(t){var e=Cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wo(t){t._valueTracker||(t._valueTracker=aE(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Cg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ha(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ff(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ag(t,e){e=e.checked,e!=null&&Oh(t,"checked",e,!1)}function ac(t,e){Ag(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&lc(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lc(t,e,n){(e!=="number"||ha(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function Br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(ji(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function Rg(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eo,xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lE=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){lE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gi[e]=Gi[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+e).trim():e+"px"}function Og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uE=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hc(t,e){if(e){if(uE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function Fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pc=null,Hr=null,Kr=null;function jf(t){if(t=Hs(t)){if(typeof pc!="function")throw Error(_(280));var e=t.stateNode;e&&(e=hl(e),pc(t.stateNode,t.type,e))}}function $g(t){Hr?Kr?Kr.push(t):Kr=[t]:Hr=t}function Lg(){if(Hr){var t=Hr,e=Kr;if(Kr=Hr=null,jf(t),e)for(t=0;t<e.length;t++)jf(e[t])}}function Mg(t,e){return t(e)}function Fg(){}var cu=!1;function Ug(t,e,n){if(cu)return t(e,n);cu=!0;try{return Mg(t,e,n)}finally{cu=!1,(Hr!==null||Kr!==null)&&(Fg(),Lg())}}function hs(t,e){var n=t.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var mc=!1;if(Xt)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){mc=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{mc=!1}function cE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qi=!1,da=null,fa=!1,gc=null,hE={onError:function(t){Qi=!0,da=t}};function dE(t,e,n,r,i,s,o,a,l){Qi=!1,da=null,cE.apply(hE,arguments)}function fE(t,e,n,r,i,s,o,a,l){if(dE.apply(this,arguments),Qi){if(Qi){var u=da;Qi=!1,da=null}else throw Error(_(198));fa||(fa=!0,gc=u)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bf(t){if(Sr(t)!==t)throw Error(_(188))}function pE(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bf(i),t;if(s===r)return bf(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function zg(t){return t=pE(t),t!==null?jg(t):null}function jg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jg(t);if(e!==null)return e;t=t.sibling}return null}var bg=at.unstable_scheduleCallback,Bf=at.unstable_cancelCallback,mE=at.unstable_shouldYield,gE=at.unstable_requestPaint,de=at.unstable_now,yE=at.unstable_getCurrentPriorityLevel,Uh=at.unstable_ImmediatePriority,Bg=at.unstable_UserBlockingPriority,pa=at.unstable_NormalPriority,vE=at.unstable_LowPriority,Hg=at.unstable_IdlePriority,al=null,$t=null;function wE(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:_E,EE=Math.log,SE=Math.LN2;function _E(t){return t>>>=0,t===0?32:31-(EE(t)/SE|0)|0}var So=64,_o=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ma(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bi(a):(s&=o,s!==0&&(r=bi(s)))}else o=n&~i,o!==0?r=bi(o):s!==0&&(r=bi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-It(e),i=1<<n,r|=t[n],e&=~i;return r}function TE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-It(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kg(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function kE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-It(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-It(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qg,zh,Gg,Qg,Xg,vc=!1,To=[],_n=null,Tn=null,In=null,ds=new Map,fs=new Map,fn=[],CE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(e.pointerId)}}function Pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hs(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NE(t,e,n,r,i){switch(e){case"focusin":return _n=Pi(_n,t,e,n,r,i),!0;case"dragenter":return Tn=Pi(Tn,t,e,n,r,i),!0;case"mouseover":return In=Pi(In,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ds.set(s,Pi(ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fs.set(s,Pi(fs.get(s)||null,t,e,n,r,i)),!0}return!1}function Yg(t){var e=Jn(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=Vg(n),e!==null){t.blockedOn=e,Xg(t.priority,function(){Gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fc=r,n.target.dispatchEvent(r),fc=null}else return e=Hs(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Kf(t,e,n){qo(t)&&n.delete(e)}function AE(){vc=!1,_n!==null&&qo(_n)&&(_n=null),Tn!==null&&qo(Tn)&&(Tn=null),In!==null&&qo(In)&&(In=null),ds.forEach(Kf),fs.forEach(Kf)}function Oi(t,e){t.blockedOn===e&&(t.blockedOn=null,vc||(vc=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,AE)))}function ps(t){function e(i){return Oi(i,t)}if(0<To.length){Oi(To[0],t);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_n!==null&&Oi(_n,t),Tn!==null&&Oi(Tn,t),In!==null&&Oi(In,t),ds.forEach(e),fs.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&fn.shift()}var Wr=an.ReactCurrentBatchConfig,ga=!0;function RE(t,e,n,r){var i=G,s=Wr.transition;Wr.transition=null;try{G=1,jh(t,e,n,r)}finally{G=i,Wr.transition=s}}function DE(t,e,n,r){var i=G,s=Wr.transition;Wr.transition=null;try{G=4,jh(t,e,n,r)}finally{G=i,Wr.transition=s}}function jh(t,e,n,r){if(ga){var i=wc(t,e,n,r);if(i===null)Su(t,e,r,ya,n),Hf(t,r);else if(NE(i,t,e,n,r))r.stopPropagation();else if(Hf(t,r),e&4&&-1<CE.indexOf(t)){for(;i!==null;){var s=Hs(i);if(s!==null&&qg(s),s=wc(t,e,n,r),s===null&&Su(t,e,r,ya,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Su(t,e,r,null,n)}}var ya=null;function wc(t,e,n,r){if(ya=null,t=Fh(r),t=Jn(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ya=t,null}function Jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yE()){case Uh:return 1;case Bg:return 4;case pa:case vE:return 16;case Hg:return 536870912;default:return 16}default:return 16}}var wn=null,bh=null,Go=null;function Zg(){if(Go)return Go;var t,e=bh,n=e.length,r,i="value"in wn?wn.value:wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Go=i.slice(t,1<r?1-r:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function Wf(){return!1}function ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:Wf,this.isPropagationStopped=Wf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=ct(Ei),Bs=ae({},Ei,{view:0,detail:0}),xE=ct(Bs),du,fu,$i,ll=ae({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(du=t.screenX-$i.screenX,fu=t.screenY-$i.screenY):fu=du=0,$i=t),du)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),qf=ct(ll),PE=ae({},ll,{dataTransfer:0}),OE=ct(PE),$E=ae({},Bs,{relatedTarget:0}),pu=ct($E),LE=ae({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),ME=ct(LE),FE=ae({},Ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UE=ct(FE),VE=ae({},Ei,{data:0}),Gf=ct(VE),zE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bE[t])?!!e[t]:!1}function Hh(){return BE}var HE=ae({},Bs,{key:function(t){if(t.key){var e=zE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KE=ct(HE),WE=ae({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=ct(WE),qE=ae({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),GE=ct(qE),QE=ae({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),XE=ct(QE),YE=ae({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JE=ct(YE),ZE=[9,13,27,32],Kh=Xt&&"CompositionEvent"in window,Xi=null;Xt&&"documentMode"in document&&(Xi=document.documentMode);var eS=Xt&&"TextEvent"in window&&!Xi,ey=Xt&&(!Kh||Xi&&8<Xi&&11>=Xi),Xf=String.fromCharCode(32),Yf=!1;function ty(t,e){switch(t){case"keyup":return ZE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function tS(t,e){switch(t){case"compositionend":return ny(e);case"keypress":return e.which!==32?null:(Yf=!0,Xf);case"textInput":return t=e.data,t===Xf&&Yf?null:t;default:return null}}function nS(t,e){if(xr)return t==="compositionend"||!Kh&&ty(t,e)?(t=Zg(),Go=bh=wn=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ey&&e.locale!=="ko"?null:e.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rS[t.type]:e==="textarea"}function ry(t,e,n,r){$g(r),e=va(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,ms=null;function iS(t){py(t,0)}function ul(t){var e=$r(t);if(Ng(e))return t}function sS(t,e){if(t==="change")return e}var iy=!1;if(Xt){var mu;if(Xt){var gu="oninput"in document;if(!gu){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),gu=typeof Zf.oninput=="function"}mu=gu}else mu=!1;iy=mu&&(!document.documentMode||9<document.documentMode)}function ep(){Yi&&(Yi.detachEvent("onpropertychange",sy),ms=Yi=null)}function sy(t){if(t.propertyName==="value"&&ul(ms)){var e=[];ry(e,ms,t,Fh(t)),Ug(iS,e)}}function oS(t,e,n){t==="focusin"?(ep(),Yi=e,ms=n,Yi.attachEvent("onpropertychange",sy)):t==="focusout"&&ep()}function aS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(ms)}function lS(t,e){if(t==="click")return ul(e)}function uS(t,e){if(t==="input"||t==="change")return ul(e)}function cS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:cS;function gs(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tc.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,e){var n=tp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function oy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?oy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ay(){for(var t=window,e=ha();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ha(t.document)}return e}function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hS(t){var e=ay(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&oy(n.ownerDocument.documentElement,n)){if(r!==null&&Wh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=np(n,s);var o=np(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dS=Xt&&"documentMode"in document&&11>=document.documentMode,Pr=null,Ec=null,Ji=null,Sc=!1;function rp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||Pr==null||Pr!==ha(r)||(r=Pr,"selectionStart"in r&&Wh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ji&&gs(Ji,r)||(Ji=r,r=va(Ec,"onSelect"),0<r.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pr)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Or={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},yu={},ly={};Xt&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function cl(t){if(yu[t])return yu[t];if(!Or[t])return t;var e=Or[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ly)return yu[t]=e[n];return t}var uy=cl("animationend"),cy=cl("animationiteration"),hy=cl("animationstart"),dy=cl("transitionend"),fy=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(t,e){fy.set(t,e),Er(e,[t])}for(var vu=0;vu<ip.length;vu++){var wu=ip[vu],fS=wu.toLowerCase(),pS=wu[0].toUpperCase()+wu.slice(1);jn(fS,"on"+pS)}jn(uy,"onAnimationEnd");jn(cy,"onAnimationIteration");jn(hy,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(dy,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function sp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fE(r,e,void 0,t),t.currentTarget=null}function py(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sp(i,a,u),s=l}}}if(fa)throw t=gc,fa=!1,gc=null,t}function J(t,e){var n=e[Cc];n===void 0&&(n=e[Cc]=new Set);var r=t+"__bubble";n.has(r)||(my(e,t,2,!1),n.add(r))}function Eu(t,e,n){var r=0;e&&(r|=4),my(n,t,r,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[Co]){t[Co]=!0,_g.forEach(function(n){n!=="selectionchange"&&(mS.has(n)||Eu(n,!1,t),Eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,Eu("selectionchange",!1,e))}}function my(t,e,n,r){switch(Jg(e)){case 1:var i=RE;break;case 4:i=DE;break;default:i=jh}n=i.bind(null,e,n,t),i=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Su(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ug(function(){var u=s,c=Fh(n),f=[];e:{var d=fy.get(t);if(d!==void 0){var g=Bh,v=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":g=KE;break;case"focusin":v="focus",g=pu;break;case"focusout":v="blur",g=pu;break;case"beforeblur":case"afterblur":g=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=OE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=GE;break;case uy:case cy:case hy:g=ME;break;case dy:g=XE;break;case"scroll":g=xE;break;case"wheel":g=JE;break;case"copy":case"cut":case"paste":g=UE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qf}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=hs(h,p),w!=null&&y.push(vs(h,w,m)))),E)break;h=h.return}0<y.length&&(d=new g(d,v,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==fc&&(v=n.relatedTarget||n.fromElement)&&(Jn(v)||v[Yt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Jn(v):null,v!==null&&(E=Sr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=qf,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=Qf,w="onPointerLeave",p="onPointerEnter",h="pointer"),E=g==null?d:$r(g),m=v==null?d:$r(v),d=new y(w,h+"leave",g,n,c),d.target=E,d.relatedTarget=m,w=null,Jn(c)===u&&(y=new y(p,h+"enter",v,n,c),y.target=m,y.relatedTarget=E,w=y),E=w,g&&v)t:{for(y=g,p=v,h=0,m=y;m;m=kr(m))h++;for(m=0,w=p;w;w=kr(w))m++;for(;0<h-m;)y=kr(y),h--;for(;0<m-h;)p=kr(p),m--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=kr(y),p=kr(p)}y=null}else y=null;g!==null&&op(f,d,g,y,!1),v!==null&&E!==null&&op(f,E,v,y,!0)}}e:{if(d=u?$r(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=sS;else if(Jf(d))if(iy)I=uS;else{I=aS;var N=oS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=lS);if(I&&(I=I(t,u))){ry(f,I,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&lc(d,"number",d.value)}switch(N=u?$r(u):window,t){case"focusin":(Jf(N)||N.contentEditable==="true")&&(Pr=N,Ec=u,Ji=null);break;case"focusout":Ji=Ec=Pr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,rp(f,n,c);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":rp(f,n,c)}var R;if(Kh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else xr?ty(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ey&&n.locale!=="ko"&&(xr||x!=="onCompositionStart"?x==="onCompositionEnd"&&xr&&(R=Zg()):(wn=c,bh="value"in wn?wn.value:wn.textContent,xr=!0)),N=va(u,x),0<N.length&&(x=new Gf(x,t,null,n,c),f.push({event:x,listeners:N}),R?x.data=R:(R=ny(n),R!==null&&(x.data=R)))),(R=eS?tS(t,n):nS(t,n))&&(u=va(u,"onBeforeInput"),0<u.length&&(c=new Gf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}py(f,e)})}function vs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function va(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hs(t,n),s!=null&&r.unshift(vs(t,s,i)),s=hs(t,e),s!=null&&r.push(vs(t,s,i))),t=t.return}return r}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=hs(n,s),l!=null&&o.unshift(vs(n,l,a))):i||(l=hs(n,s),l!=null&&o.push(vs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(gS,`
`).replace(yS,"")}function No(t,e,n){if(e=ap(e),ap(t)!==e&&n)throw Error(_(425))}function wa(){}var _c=null,Tc=null;function Ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(t){return lp.resolve(null).then(t).catch(ES)}:kc;function ES(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ps(e)}function kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Si=Math.random().toString(36).slice(2),xt="__reactFiber$"+Si,ws="__reactProps$"+Si,Yt="__reactContainer$"+Si,Cc="__reactEvents$"+Si,SS="__reactListeners$"+Si,_S="__reactHandles$"+Si;function Jn(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yt]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=up(t);t!==null;){if(n=t[xt])return n;t=up(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){return t=t[xt]||t[Yt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function hl(t){return t[ws]||null}var Nc=[],Lr=-1;function bn(t){return{current:t}}function Z(t){0>Lr||(t.current=Nc[Lr],Nc[Lr]=null,Lr--)}function X(t,e){Lr++,Nc[Lr]=t.current,t.current=e}var Fn={},be=bn(Fn),Ze=bn(!1),lr=Fn;function ni(t,e){var n=t.type.contextTypes;if(!n)return Fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function Ea(){Z(Ze),Z(be)}function cp(t,e,n){if(be.current!==Fn)throw Error(_(168));X(be,e),X(Ze,n)}function gy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,oE(t)||"Unknown",i));return ae({},n,r)}function Sa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,lr=be.current,X(be,t),X(Ze,Ze.current),!0}function hp(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=gy(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,Z(Ze),Z(be),X(be,t)):Z(Ze),X(Ze,n)}var bt=null,dl=!1,Tu=!1;function yy(t){bt===null?bt=[t]:bt.push(t)}function TS(t){dl=!0,yy(t)}function Bn(){if(!Tu&&bt!==null){Tu=!0;var t=0,e=G;try{var n=bt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bt=null,dl=!1}catch(i){throw bt!==null&&(bt=bt.slice(t+1)),bg(Uh,Bn),i}finally{G=e,Tu=!1}}return null}var Mr=[],Fr=0,_a=null,Ta=0,ht=[],dt=0,ur=null,Bt=1,Ht="";function Qn(t,e){Mr[Fr++]=Ta,Mr[Fr++]=_a,_a=t,Ta=e}function vy(t,e,n){ht[dt++]=Bt,ht[dt++]=Ht,ht[dt++]=ur,ur=t;var r=Bt;t=Ht;var i=32-It(r)-1;r&=~(1<<i),n+=1;var s=32-It(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bt=1<<32-It(e)+i|n<<i|r,Ht=s+t}else Bt=1<<s|n<<i|r,Ht=t}function qh(t){t.return!==null&&(Qn(t,1),vy(t,1,0))}function Gh(t){for(;t===_a;)_a=Mr[--Fr],Mr[Fr]=null,Ta=Mr[--Fr],Mr[Fr]=null;for(;t===ur;)ur=ht[--dt],ht[dt]=null,Ht=ht[--dt],ht[dt]=null,Bt=ht[--dt],ht[dt]=null}var ot=null,it=null,ne=!1,Tt=null;function wy(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,it=kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ur!==null?{id:Bt,overflow:Ht}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,it=null,!0):!1;default:return!1}}function Ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rc(t){if(ne){var e=it;if(e){var n=e;if(!dp(t,e)){if(Ac(t))throw Error(_(418));e=kn(n.nextSibling);var r=ot;e&&dp(t,e)?wy(r,n):(t.flags=t.flags&-4097|2,ne=!1,ot=t)}}else{if(Ac(t))throw Error(_(418));t.flags=t.flags&-4097|2,ne=!1,ot=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function Ao(t){if(t!==ot)return!1;if(!ne)return fp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ic(t.type,t.memoizedProps)),e&&(e=it)){if(Ac(t))throw Ey(),Error(_(418));for(;e;)wy(t,e),e=kn(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){it=kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}it=null}}else it=ot?kn(t.stateNode.nextSibling):null;return!0}function Ey(){for(var t=it;t;)t=kn(t.nextSibling)}function ri(){it=ot=null,ne=!1}function Qh(t){Tt===null?Tt=[t]:Tt.push(t)}var IS=an.ReactCurrentBatchConfig;function St(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ia=bn(null),ka=null,Ur=null,Xh=null;function Yh(){Xh=Ur=ka=null}function Jh(t){var e=Ia.current;Z(Ia),t._currentValue=e}function Dc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qr(t,e){ka=t,Xh=Ur=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function yt(t){var e=t._currentValue;if(Xh!==t)if(t={context:t,memoizedValue:e,next:null},Ur===null){if(ka===null)throw Error(_(308));Ur=t,ka.dependencies={lanes:0,firstContext:t}}else Ur=Ur.next=t;return e}var Zn=null;function Zh(t){Zn===null?Zn=[t]:Zn.push(t)}function Sy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _y(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,Zh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}function pp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ca(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(g,f,d):v,d==null)break e;f=ae({},f,d);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=f}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Ty=new Sg.Component().refs;function xc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fl={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=An(t),s=Qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(kt(e,t,i,r),Xo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=An(t),s=Qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(kt(e,t,i,r),Xo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=An(t),i=Qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(kt(e,t,r,n),Xo(e,t,r))}};function gp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!gs(n,r)||!gs(i,s):!0}function Iy(t,e,n){var r=!1,i=Fn,s=e.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=et(e)?lr:be.current,r=e.contextTypes,s=(r=r!=null)?ni(t,i):Fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fl.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ty,ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=et(e)?lr:be.current,i.context=ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fl.enqueueReplaceState(i,i.state,null),Ca(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Ty&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function Ro(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function ky(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Rn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,w){return h===null||h.tag!==6?(h=Du(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,w){var I=m.type;return I===Dr?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===hn&&vp(I)===h.type)?(w=i(h,m.props),w.ref=Li(p,h,m),w.return=p,w):(w=na(m.type,m.key,m.props,null,p.mode,w),w.ref=Li(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=xu(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,I){return h===null||h.tag!==7?(h=sr(m,p.mode,w,I),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Du(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vo:return m=na(h.type,h.key,h.props,null,p.mode,m),m.ref=Li(p,null,h),m.return=p,m;case Rr:return h=xu(h,p.mode,m),h.return=p,h;case hn:var w=h._init;return f(p,w(h._payload),m)}if(ji(h)||Di(h))return h=sr(h,p.mode,m,null),h.return=p,h;Ro(p,h)}return null}function d(p,h,m,w){var I=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:return m.key===I?l(p,h,m,w):null;case Rr:return m.key===I?u(p,h,m,w):null;case hn:return I=m._init,d(p,h,I(m._payload),w)}if(ji(m)||Di(m))return I!==null?null:c(p,h,m,w,null);Ro(p,m)}return null}function g(p,h,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(h,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vo:return p=p.get(w.key===null?m:w.key)||null,l(h,p,w,I);case Rr:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,I);case hn:var N=w._init;return g(p,h,m,N(w._payload),I)}if(ji(w)||Di(w))return p=p.get(m)||null,c(h,p,w,I,null);Ro(h,w)}return null}function v(p,h,m,w){for(var I=null,N=null,R=h,x=h=0,Y=null;R!==null&&x<m.length;x++){R.index>x?(Y=R,R=null):Y=R.sibling;var j=d(p,R,m[x],w);if(j===null){R===null&&(R=Y);break}t&&R&&j.alternate===null&&e(p,R),h=s(j,h,x),N===null?I=j:N.sibling=j,N=j,R=Y}if(x===m.length)return n(p,R),ne&&Qn(p,x),I;if(R===null){for(;x<m.length;x++)R=f(p,m[x],w),R!==null&&(h=s(R,h,x),N===null?I=R:N.sibling=R,N=R);return ne&&Qn(p,x),I}for(R=r(p,R);x<m.length;x++)Y=g(R,p,x,m[x],w),Y!==null&&(t&&Y.alternate!==null&&R.delete(Y.key===null?x:Y.key),h=s(Y,h,x),N===null?I=Y:N.sibling=Y,N=Y);return t&&R.forEach(function(wt){return e(p,wt)}),ne&&Qn(p,x),I}function y(p,h,m,w){var I=Di(m);if(typeof I!="function")throw Error(_(150));if(m=I.call(m),m==null)throw Error(_(151));for(var N=I=null,R=h,x=h=0,Y=null,j=m.next();R!==null&&!j.done;x++,j=m.next()){R.index>x?(Y=R,R=null):Y=R.sibling;var wt=d(p,R,j.value,w);if(wt===null){R===null&&(R=Y);break}t&&R&&wt.alternate===null&&e(p,R),h=s(wt,h,x),N===null?I=wt:N.sibling=wt,N=wt,R=Y}if(j.done)return n(p,R),ne&&Qn(p,x),I;if(R===null){for(;!j.done;x++,j=m.next())j=f(p,j.value,w),j!==null&&(h=s(j,h,x),N===null?I=j:N.sibling=j,N=j);return ne&&Qn(p,x),I}for(R=r(p,R);!j.done;x++,j=m.next())j=g(R,p,x,j.value,w),j!==null&&(t&&j.alternate!==null&&R.delete(j.key===null?x:j.key),h=s(j,h,x),N===null?I=j:N.sibling=j,N=j);return t&&R.forEach(function(Ai){return e(p,Ai)}),ne&&Qn(p,x),I}function E(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Dr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:e:{for(var I=m.key,N=h;N!==null;){if(N.key===I){if(I=m.type,I===Dr){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===hn&&vp(I)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=Li(p,N,m),h.return=p,p=h;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Dr?(h=sr(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=na(m.type,m.key,m.props,null,p.mode,w),w.ref=Li(p,h,m),w.return=p,p=w)}return o(p);case Rr:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=xu(m,p.mode,w),h.return=p,p=h}return o(p);case hn:return N=m._init,E(p,h,N(m._payload),w)}if(ji(m))return v(p,h,m,w);if(Di(m))return y(p,h,m,w);Ro(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Du(m,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return E}var ii=ky(!0),Cy=ky(!1),Ks={},Lt=bn(Ks),Es=bn(Ks),Ss=bn(Ks);function er(t){if(t===Ks)throw Error(_(174));return t}function td(t,e){switch(X(Ss,e),X(Es,t),X(Lt,Ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cc(e,t)}Z(Lt),X(Lt,e)}function si(){Z(Lt),Z(Es),Z(Ss)}function Ny(t){er(Ss.current);var e=er(Lt.current),n=cc(e,t.type);e!==n&&(X(Es,t),X(Lt,n))}function nd(t){Es.current===t&&(Z(Lt),Z(Es))}var se=bn(0);function Na(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function rd(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Yo=an.ReactCurrentDispatcher,ku=an.ReactCurrentBatchConfig,cr=0,oe=null,ge=null,_e=null,Aa=!1,Zi=!1,_s=0,kS=0;function Pe(){throw Error(_(321))}function id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function sd(t,e,n,r,i,s){if(cr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?RS:DS,t=n(r,i),Zi){s=0;do{if(Zi=!1,_s=0,25<=s)throw Error(_(301));s+=1,_e=ge=null,e.updateQueue=null,Yo.current=xS,t=n(r,i)}while(Zi)}if(Yo.current=Ra,e=ge!==null&&ge.next!==null,cr=0,_e=ge=oe=null,Aa=!1,e)throw Error(_(300));return t}function od(){var t=_s!==0;return _s=0,t}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?oe.memoizedState=_e=t:_e=_e.next=t,_e}function vt(){if(ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=_e===null?oe.memoizedState:_e.next;if(e!==null)_e=e,ge=t;else{if(t===null)throw Error(_(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},_e===null?oe.memoizedState=_e=t:_e=_e.next=t}return _e}function Ts(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=vt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((cr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,oe.lanes|=c,hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(Je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nu(t){var e=vt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||(Je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ay(){}function Ry(t,e){var n=oe,r=vt(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,ad(Py.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Is(9,xy.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(_(349));cr&30||Dy(n,e,i)}return i}function Dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,Oy(e)&&$y(t)}function Py(t,e,n){return n(function(){Oy(e)&&$y(t)})}function Oy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function $y(t){var e=Jt(t,1);e!==null&&kt(e,t,1,-1)}function wp(t){var e=Dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},e.queue=t,t=t.dispatch=AS.bind(null,oe,t),[e.memoizedState,t]}function Is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ly(){return vt().memoizedState}function Jo(t,e,n,r){var i=Dt();oe.flags|=t,i.memoizedState=Is(1|e,n,void 0,r===void 0?null:r)}function pl(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&id(r,o.deps)){i.memoizedState=Is(e,n,s,r);return}}oe.flags|=t,i.memoizedState=Is(1|e,n,s,r)}function Ep(t,e){return Jo(8390656,8,t,e)}function ad(t,e){return pl(2048,8,t,e)}function My(t,e){return pl(4,2,t,e)}function Fy(t,e){return pl(4,4,t,e)}function Uy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vy(t,e,n){return n=n!=null?n.concat([t]):null,pl(4,4,Uy.bind(null,e,t),n)}function ld(){}function zy(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jy(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function by(t,e,n){return cr&21?(Nt(n,e)||(n=Kg(),oe.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=n)}function CS(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=ku.transition;ku.transition={};try{t(!1),e()}finally{G=n,ku.transition=r}}function By(){return vt().memoizedState}function NS(t,e,n){var r=An(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hy(t))Ky(e,n);else if(n=Sy(t,e,n,r),n!==null){var i=qe();kt(n,t,r,i),Wy(n,e,r)}}function AS(t,e,n){var r=An(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hy(t))Ky(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o)){var l=e.interleaved;l===null?(i.next=i,Zh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Sy(t,e,i,r),n!==null&&(i=qe(),kt(n,t,r,i),Wy(n,e,r))}}function Hy(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Ky(t,e){Zi=Aa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}var Ra={readContext:yt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},RS={readContext:yt,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:yt,useEffect:Ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,Uy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=Dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NS.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:ld,useDeferredValue:function(t){return Dt().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=CS.bind(null,t[1]),Dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Dt();if(ne){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),Te===null)throw Error(_(349));cr&30||Dy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ep(Py.bind(null,r,s,t),[t]),r.flags|=2048,Is(9,xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dt(),e=Te.identifierPrefix;if(ne){var n=Ht,r=Bt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DS={readContext:yt,useCallback:zy,useContext:yt,useEffect:ad,useImperativeHandle:Vy,useInsertionEffect:My,useLayoutEffect:Fy,useMemo:jy,useReducer:Cu,useRef:Ly,useState:function(){return Cu(Ts)},useDebugValue:ld,useDeferredValue:function(t){var e=vt();return by(e,ge.memoizedState,t)},useTransition:function(){var t=Cu(Ts)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:By,unstable_isNewReconciler:!1},xS={readContext:yt,useCallback:zy,useContext:yt,useEffect:ad,useImperativeHandle:Vy,useInsertionEffect:My,useLayoutEffect:Fy,useMemo:jy,useReducer:Nu,useRef:Ly,useState:function(){return Nu(Ts)},useDebugValue:ld,useDeferredValue:function(t){var e=vt();return ge===null?e.memoizedState=t:by(e,ge.memoizedState,t)},useTransition:function(){var t=Nu(Ts)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:By,unstable_isNewReconciler:!1};function oi(t,e){try{var n="",r=e;do n+=sE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PS=typeof WeakMap=="function"?WeakMap:Map;function qy(t,e,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xa||(xa=!0,Bc=r),Oc(t,e)},n}function Gy(t,e,n){n=Qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oc(t,e),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WS.bind(null,t,e,n),e.then(t,t))}function _p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var OS=an.ReactCurrentOwner,Je=!1;function Ke(t,e,n,r){e.child=t===null?Cy(e,null,n,r):ii(e,t.child,n,r)}function Ip(t,e,n,r,i){n=n.render;var s=e.ref;return qr(e,i),r=sd(t,e,n,r,s,i),n=od(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ne&&n&&qh(e),e.flags|=1,Ke(t,e,r,i),e.child)}function kp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qy(t,e,s,r,i)):(t=na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gs,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Qy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(gs(s,r)&&t.ref===e.ref)if(Je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return $c(t,e,n,r,i)}function Xy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(zr,rt),rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(zr,rt),rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(zr,rt),rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(zr,rt),rt|=r;return Ke(t,e,i,n),e.child}function Yy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $c(t,e,n,r,i){var s=et(n)?lr:be.current;return s=ni(e,s),qr(e,i),n=sd(t,e,n,r,s,i),r=od(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ne&&r&&qh(e),e.flags|=1,Ke(t,e,n,i),e.child)}function Cp(t,e,n,r,i){if(et(n)){var s=!0;Sa(e)}else s=!1;if(qr(e,i),e.stateNode===null)Zo(t,e),Iy(e,n,r),Pc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=et(n)?lr:be.current,u=ni(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yp(e,o,r,u),dn=!1;var d=e.memoizedState;o.state=d,Ca(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ze.current||dn?(typeof c=="function"&&(xc(e,n,c,r),l=e.memoizedState),(a=dn||gp(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_y(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:St(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=et(n)?lr:be.current,l=ni(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&yp(e,o,r,l),dn=!1,d=e.memoizedState,o.state=d,Ca(e,r,o,i);var v=e.memoizedState;a!==f||d!==v||Ze.current||dn?(typeof g=="function"&&(xc(e,n,g,r),v=e.memoizedState),(u=dn||gp(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Lc(t,e,n,r,s,i)}function Lc(t,e,n,r,i,s){Yy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hp(e,n,!1),Zt(t,e,s);r=e.stateNode,OS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ii(e,t.child,null,s),e.child=ii(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&hp(e,n,!0),e.child}function Jy(t){var e=t.stateNode;e.pendingContext?cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cp(t,e.context,!1),td(t,e.containerInfo)}function Np(t,e,n,r,i){return ri(),Qh(i),e.flags|=256,Ke(t,e,n,r),e.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zy(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(se,i&1),t===null)return Rc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,r,0,null),t=sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fc(n),e.memoizedState=Mc,t):ud(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $S(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Rn(a,s):(s=sr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mc,r}return s=t.child,t=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ud(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Do(t,e,n,r){return r!==null&&Qh(r),ii(e,t.child,null,n),t=ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $S(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Au(Error(_(422))),Do(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yl({mode:"visible",children:r.children},i,0,null),s=sr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ii(e,t.child,null,o),e.child.memoizedState=Fc(o),e.memoizedState=Mc,s);if(!(e.mode&1))return Do(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=Au(s,r,void 0),Do(t,e,o,r)}if(a=(o&t.childLanes)!==0,Je||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),kt(r,t,i,-1))}return md(),r=Au(Error(_(421))),Do(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,it=kn(i.nextSibling),ot=e,ne=!0,Tt=null,t!==null&&(ht[dt++]=Bt,ht[dt++]=Ht,ht[dt++]=ur,Bt=t.id,Ht=t.overflow,ur=e),e=ud(e,r.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dc(t.return,e,n)}function Ru(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ev(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Na(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ru(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Na(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LS(t,e,n){switch(e.tag){case 3:Jy(e),ri();break;case 5:Ny(e);break;case 1:et(e.type)&&Sa(e);break;case 4:td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Ia,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Zy(t,e,n):(X(se,se.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);X(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ev(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Xy(t,e,n)}return Zt(t,e,n)}var tv,Uc,nv,rv;tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uc=function(){};nv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,er(Lt.current);var s=null;switch(n){case"input":i=oc(t,i),r=oc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=uc(t,i),r=uc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wa)}hc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(us.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MS(t,e,n){var r=e.pendingProps;switch(Gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return et(e.type)&&Ea(),Oe(e),null;case 3:return r=e.stateNode,si(),Z(Ze),Z(be),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(Wc(Tt),Tt=null))),Uc(t,e),Oe(e),null;case 5:nd(e);var i=er(Ss.current);if(n=e.type,t!==null&&e.stateNode!=null)nv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return Oe(e),null}if(t=er(Lt.current),Ao(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[ws]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Bi.length;i++)J(Bi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Ff(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Vf(r,s),J("invalid",r)}hc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&No(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&No(r.textContent,a,t),i=["children",""+a]):us.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":wo(r),Uf(r,s,!0);break;case"textarea":wo(r),zf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xt]=e,t[ws]=r,tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=dc(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bi.length;i++)J(Bi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Ff(t,r),i=oc(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),J("invalid",t);break;case"textarea":Vf(t,r),i=uc(t,r),J("invalid",t);break;default:i=r}hc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&cs(t,l):typeof l=="number"&&cs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(us.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Oh(t,s,l,o))}switch(n){case"input":wo(t),Uf(t,r,!1);break;case"textarea":wo(t),zf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Br(t,!!r.multiple,s,!1):r.defaultValue!=null&&Br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=er(Ss.current),er(Lt.current),Ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:No(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return Oe(e),null;case 13:if(Z(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&it!==null&&e.mode&1&&!(e.flags&128))Ey(),ri(),e.flags|=98560,s=!1;else if(s=Ao(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[xt]=e}else ri(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else Tt!==null&&(Wc(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ve===0&&(ve=3):md())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return si(),Uc(t,e),t===null&&ys(e.stateNode.containerInfo),Oe(e),null;case 10:return Jh(e.type._context),Oe(e),null;case 17:return et(e.type)&&Ea(),Oe(e),null;case 19:if(Z(se),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Mi(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Na(t),o!==null){for(e.flags|=128,Mi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>ai&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Na(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Oe(e),null}else 2*de()-s.renderingStartTime>ai&&n!==1073741824&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,X(se,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rt&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function FS(t,e){switch(Gh(e),e.tag){case 1:return et(e.type)&&Ea(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return si(),Z(Ze),Z(be),rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nd(e),null;case 13:if(Z(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));ri()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(se),null;case 4:return si(),null;case 10:return Jh(e.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var xo=!1,Me=!1,US=typeof WeakSet=="function"?WeakSet:Set,C=null;function Vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Vc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Rp=!1;function VS(t,e){if(_c=ga,t=ay(),Wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:t,selectionRange:n},ga=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:St(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return v=Rp,Rp=!1,v}function es(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vc(e,n,s)}i=i.next}while(i!==r)}}function ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[ws],delete e[Cc],delete e[SS],delete e[_S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sv(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wa));else if(r!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}function bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bc(t,e,n),t=t.sibling;t!==null;)bc(t,e,n),t=t.sibling}var Ce=null,_t=!1;function un(t,e,n){for(n=n.child;n!==null;)ov(t,e,n),n=n.sibling}function ov(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Me||Vr(n,e);case 6:var r=Ce,i=_t;Ce=null,un(t,e,n),Ce=r,_t=i,Ce!==null&&(_t?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(_t?(t=Ce,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),ps(t)):_u(Ce,n.stateNode));break;case 4:r=Ce,i=_t,Ce=n.stateNode.containerInfo,_t=!0,un(t,e,n),Ce=r,_t=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vc(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Me&&(Vr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,un(t,e,n),Me=r):un(t,e,n);break;default:un(t,e,n)}}function xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new US),e.forEach(function(r){var i=GS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,_t=!1;break e;case 3:Ce=a.stateNode.containerInfo,_t=!0;break e;case 4:Ce=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Ce===null)throw Error(_(160));ov(s,o,i),Ce=null,_t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)av(e,t),e=e.sibling}function av(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Et(e,t),Rt(t),r&4){try{es(3,t,t.return),ml(3,t)}catch(y){ue(t,t.return,y)}try{es(5,t,t.return)}catch(y){ue(t,t.return,y)}}break;case 1:Et(e,t),Rt(t),r&512&&n!==null&&Vr(n,n.return);break;case 5:if(Et(e,t),Rt(t),r&512&&n!==null&&Vr(n,n.return),t.flags&32){var i=t.stateNode;try{cs(i,"")}catch(y){ue(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ag(i,s),dc(a,o);var u=dc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Og(i,f):c==="dangerouslySetInnerHTML"?xg(i,f):c==="children"?cs(i,f):Oh(i,c,f,u)}switch(a){case"input":ac(i,s);break;case"textarea":Rg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Br(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Br(i,!!s.multiple,s.defaultValue,!0):Br(i,!!s.multiple,s.multiple?[]:"",!1))}i[ws]=s}catch(y){ue(t,t.return,y)}}break;case 6:if(Et(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ue(t,t.return,y)}}break;case 3:if(Et(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(e.containerInfo)}catch(y){ue(t,t.return,y)}break;case 4:Et(e,t),Rt(t);break;case 13:Et(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dd=de())),r&4&&xp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Me=(u=Me)||c,Et(e,t),Me=u):Et(e,t),Rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(C=t,c=t.child;c!==null;){for(f=C=c;C!==null;){switch(d=C,g=d.child,d.tag){case 0:case 11:case 14:case 15:es(4,d,d.return);break;case 1:Vr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:Vr(d,d.return);break;case 22:if(d.memoizedState!==null){Op(f);continue}}g!==null?(g.return=d,C=g):Op(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pg("display",o))}catch(y){ue(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ue(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Et(e,t),Rt(t),r&4&&xp(t);break;case 21:break;default:Et(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cs(i,""),r.flags&=-33);var s=Dp(t);bc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dp(t);jc(t,a,o);break;default:throw Error(_(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zS(t,e,n){C=t,lv(t)}function lv(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Me;a=xo;var u=Me;if(xo=o,(Me=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?$p(i):l!==null?(l.return=o,C=l):$p(i);for(;s!==null;)C=s,lv(s),s=s.sibling;C=i,xo=a,Me=u}Pp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):Pp(t)}}function Pp(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Me||ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ps(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Me||e.flags&512&&zc(e)}catch(d){ue(e,e.return,d)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Op(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function $p(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ml(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{zc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{zc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var jS=Math.ceil,Da=an.ReactCurrentDispatcher,cd=an.ReactCurrentOwner,mt=an.ReactCurrentBatchConfig,K=0,Te=null,me=null,Re=0,rt=0,zr=bn(0),ve=0,ks=null,hr=0,gl=0,hd=0,ts=null,Xe=null,dd=0,ai=1/0,jt=null,xa=!1,Bc=null,Nn=null,Po=!1,En=null,Pa=0,ns=0,Hc=null,ea=-1,ta=0;function qe(){return K&6?de():ea!==-1?ea:ea=de()}function An(t){return t.mode&1?K&2&&Re!==0?Re&-Re:IS.transition!==null?(ta===0&&(ta=Kg()),ta):(t=G,t!==0||(t=window.event,t=t===void 0?16:Jg(t.type)),t):1}function kt(t,e,n,r){if(50<ns)throw ns=0,Hc=null,Error(_(185));bs(t,n,r),(!(K&2)||t!==Te)&&(t===Te&&(!(K&2)&&(gl|=n),ve===4&&pn(t,Re)),tt(t,r),n===1&&K===0&&!(e.mode&1)&&(ai=de()+500,dl&&Bn()))}function tt(t,e){var n=t.callbackNode;IE(t,e);var r=ma(t,t===Te?Re:0);if(r===0)n!==null&&Bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bf(n),e===1)t.tag===0?TS(Lp.bind(null,t)):yy(Lp.bind(null,t)),wS(function(){!(K&6)&&Bn()}),n=null;else{switch(Wg(r)){case 1:n=Uh;break;case 4:n=Bg;break;case 16:n=pa;break;case 536870912:n=Hg;break;default:n=pa}n=gv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(ea=-1,ta=0,K&6)throw Error(_(327));var n=t.callbackNode;if(Gr()&&t.callbackNode!==n)return null;var r=ma(t,t===Te?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oa(t,r);else{e=r;var i=K;K|=2;var s=hv();(Te!==t||Re!==e)&&(jt=null,ai=de()+500,ir(t,e));do try{HS();break}catch(a){cv(t,a)}while(1);Yh(),Da.current=s,K=i,me!==null?e=0:(Te=null,Re=0,e=ve)}if(e!==0){if(e===2&&(i=yc(t),i!==0&&(r=i,e=Kc(t,i))),e===1)throw n=ks,ir(t,0),pn(t,r),tt(t,de()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!bS(i)&&(e=Oa(t,r),e===2&&(s=yc(t),s!==0&&(r=s,e=Kc(t,s))),e===1))throw n=ks,ir(t,0),pn(t,r),tt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:Xn(t,Xe,jt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=dd+500-de(),10<e)){if(ma(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kc(Xn.bind(null,t,Xe,jt),e);break}Xn(t,Xe,jt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-It(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jS(r/1960))-r,10<r){t.timeoutHandle=kc(Xn.bind(null,t,Xe,jt),r);break}Xn(t,Xe,jt);break;case 5:Xn(t,Xe,jt);break;default:throw Error(_(329))}}}return tt(t,de()),t.callbackNode===n?uv.bind(null,t):null}function Kc(t,e){var n=ts;return t.current.memoizedState.isDehydrated&&(ir(t,e).flags|=256),t=Oa(t,e),t!==2&&(e=Xe,Xe=n,e!==null&&Wc(e)),t}function Wc(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function bS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~hd,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),r=1<<n;t[n]=-1,e&=~r}}function Lp(t){if(K&6)throw Error(_(327));Gr();var e=ma(t,0);if(!(e&1))return tt(t,de()),null;var n=Oa(t,e);if(t.tag!==0&&n===2){var r=yc(t);r!==0&&(e=r,n=Kc(t,r))}if(n===1)throw n=ks,ir(t,0),pn(t,e),tt(t,de()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xn(t,Xe,jt),tt(t,de()),null}function fd(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(ai=de()+500,dl&&Bn())}}function dr(t){En!==null&&En.tag===0&&!(K&6)&&Gr();var e=K;K|=1;var n=mt.transition,r=G;try{if(mt.transition=null,G=1,t)return t()}finally{G=r,mt.transition=n,K=e,!(K&6)&&Bn()}}function pd(){rt=zr.current,Z(zr)}function ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vS(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Gh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ea();break;case 3:si(),Z(Ze),Z(be),rd();break;case 5:nd(r);break;case 4:si();break;case 13:Z(se);break;case 19:Z(se);break;case 10:Jh(r.type._context);break;case 22:case 23:pd()}n=n.return}if(Te=t,me=t=Rn(t.current,null),Re=rt=e,ve=0,ks=null,hd=gl=hr=0,Xe=ts=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zn=null}return t}function cv(t,e){do{var n=me;try{if(Yh(),Yo.current=Ra,Aa){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Aa=!1}if(cr=0,_e=ge=oe=null,Zi=!1,_s=0,cd.current=null,n===null||n.return===null){ve=1,ks=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=_p(o);if(g!==null){g.flags&=-257,Tp(g,o,a,s,e),g.mode&1&&Sp(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Sp(s,u,e),md();break e}l=Error(_(426))}}else if(ne&&a.mode&1){var E=_p(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Tp(E,o,a,s,e),Qh(oi(l,a));break e}}s=l=oi(l,a),ve!==4&&(ve=2),ts===null?ts=[s]:ts.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=qy(s,l,e);pp(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Nn===null||!Nn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Gy(s,a,e);pp(s,w);break e}}s=s.return}while(s!==null)}fv(n)}catch(I){e=I,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function hv(){var t=Da.current;return Da.current=Ra,t===null?Ra:t}function md(){(ve===0||ve===3||ve===2)&&(ve=4),Te===null||!(hr&268435455)&&!(gl&268435455)||pn(Te,Re)}function Oa(t,e){var n=K;K|=2;var r=hv();(Te!==t||Re!==e)&&(jt=null,ir(t,e));do try{BS();break}catch(i){cv(t,i)}while(1);if(Yh(),K=n,Da.current=r,me!==null)throw Error(_(261));return Te=null,Re=0,ve}function BS(){for(;me!==null;)dv(me)}function HS(){for(;me!==null&&!mE();)dv(me)}function dv(t){var e=mv(t.alternate,t,rt);t.memoizedProps=t.pendingProps,e===null?fv(t):me=e,cd.current=null}function fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,me=null;return}}else if(n=MS(n,e,rt),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ve===0&&(ve=5)}function Xn(t,e,n){var r=G,i=mt.transition;try{mt.transition=null,G=1,KS(t,e,n,r)}finally{mt.transition=i,G=r}return null}function KS(t,e,n,r){do Gr();while(En!==null);if(K&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kE(t,s),t===Te&&(me=Te=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,gv(pa,function(){return Gr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mt.transition,mt.transition=null;var o=G;G=1;var a=K;K|=4,cd.current=null,VS(t,n),av(n,t),hS(Tc),ga=!!_c,Tc=_c=null,t.current=n,zS(n),gE(),K=a,G=o,mt.transition=s}else t.current=n;if(Po&&(Po=!1,En=t,Pa=i),s=t.pendingLanes,s===0&&(Nn=null),wE(n.stateNode),tt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xa)throw xa=!1,t=Bc,Bc=null,t;return Pa&1&&t.tag!==0&&Gr(),s=t.pendingLanes,s&1?t===Hc?ns++:(ns=0,Hc=t):ns=0,Bn(),null}function Gr(){if(En!==null){var t=Wg(Pa),e=mt.transition,n=G;try{if(mt.transition=null,G=16>t?16:t,En===null)var r=!1;else{if(t=En,En=null,Pa=0,K&6)throw Error(_(331));var i=K;for(K|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:es(8,c,s)}var f=c.child;if(f!==null)f.return=c,C=f;else for(;C!==null;){c=C;var d=c.sibling,g=c.return;if(iv(c),c===u){C=null;break}if(d!==null){d.return=g,C=d;break}C=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:es(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var h=t.current;for(C=h;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=h;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(I){ue(a,a.return,I)}if(a===o){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(K=i,Bn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(al,t)}catch{}r=!0}return r}finally{G=n,mt.transition=e}}return!1}function Mp(t,e,n){e=oi(n,e),e=qy(t,e,1),t=Cn(t,e,1),e=qe(),t!==null&&(bs(t,1,e),tt(t,e))}function ue(t,e,n){if(t.tag===3)Mp(t,t,n);else for(;e!==null;){if(e.tag===3){Mp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){t=oi(n,t),t=Gy(e,t,1),e=Cn(e,t,1),t=qe(),e!==null&&(bs(e,1,t),tt(e,t));break}}e=e.return}}function WS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Re&n)===n&&(ve===4||ve===3&&(Re&130023424)===Re&&500>de()-dd?ir(t,0):hd|=n),tt(t,e)}function pv(t,e){e===0&&(t.mode&1?(e=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):e=1);var n=qe();t=Jt(t,e),t!==null&&(bs(t,e,n),tt(t,n))}function qS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pv(t,n)}function GS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),pv(t,n)}var mv;mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Je=!1,LS(t,e,n);Je=!!(t.flags&131072)}else Je=!1,ne&&e.flags&1048576&&vy(e,Ta,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zo(t,e),t=e.pendingProps;var i=ni(e,be.current);qr(e,n),i=sd(null,e,r,t,i,n);var s=od();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,Sa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ed(e),i.updater=fl,e.stateNode=i,i._reactInternals=e,Pc(e,r,t,n),e=Lc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&qh(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XS(r),t=St(r,t),i){case 0:e=$c(null,e,r,t,n);break e;case 1:e=Cp(null,e,r,t,n);break e;case 11:e=Ip(null,e,r,t,n);break e;case 14:e=kp(null,e,r,St(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),$c(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Cp(t,e,r,i,n);case 3:e:{if(Jy(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_y(t,e),Ca(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oi(Error(_(423)),e),e=Np(t,e,r,n,i);break e}else if(r!==i){i=oi(Error(_(424)),e),e=Np(t,e,r,n,i);break e}else for(it=kn(e.stateNode.containerInfo.firstChild),ot=e,ne=!0,Tt=null,n=Cy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ri(),r===i){e=Zt(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return Ny(e),t===null&&Rc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ic(r,i)?o=null:s!==null&&Ic(r,s)&&(e.flags|=32),Yy(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Rc(e),null;case 13:return Zy(t,e,n);case 4:return td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ii(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Ip(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Ia,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!Ze.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qr(e,n),i=yt(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=St(r,e.pendingProps),i=St(r.type,i),kp(t,e,r,i,n);case 15:return Qy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Zo(t,e),e.tag=1,et(r)?(t=!0,Sa(e)):t=!1,qr(e,n),Iy(e,r,i),Pc(e,r,i,n),Lc(null,e,r,!0,t,n);case 19:return ev(t,e,n);case 22:return Xy(t,e,n)}throw Error(_(156,e.tag))};function gv(t,e){return bg(t,e)}function QS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new QS(t,e,n,r)}function gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XS(t){if(typeof t=="function")return gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Mh)return 14}return 2}function Rn(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Dr:return sr(n.children,i,s,e);case $h:o=8,i|=8;break;case nc:return t=pt(12,n,e,i|2),t.elementType=nc,t.lanes=s,t;case rc:return t=pt(13,n,e,i),t.elementType=rc,t.lanes=s,t;case ic:return t=pt(19,n,e,i),t.elementType=ic,t.lanes=s,t;case kg:return yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:o=10;break e;case Ig:o=9;break e;case Lh:o=11;break e;case Mh:o=14;break e;case hn:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function sr(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function yl(t,e,n,r){return t=pt(22,t,r,e),t.elementType=kg,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function xu(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yd(t,e,n,r,i,s,o,a,l){return t=new YS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(s),t}function JS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yv(t){if(!t)return Fn;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(et(n))return gy(t,n,e)}return e}function vv(t,e,n,r,i,s,o,a,l){return t=yd(n,r,!0,t,i,s,o,a,l),t.context=yv(null),n=t.current,r=qe(),i=An(n),s=Qt(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,bs(t,i,r),tt(t,r),t}function vl(t,e,n,r){var i=e.current,s=qe(),o=An(i);return n=yv(n),e.context===null?e.context=n:e.pendingContext=n,e=Qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(kt(t,i,o,s),Xo(t,i,o)),o}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vd(t,e){Fp(t,e),(t=t.alternate)&&Fp(t,e)}function ZS(){return null}var wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function wd(t){this._internalRoot=t}wl.prototype.render=wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));vl(t,e,null,null)};wl.prototype.unmount=wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){vl(null,t,null,null)}),e[Yt]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&Yg(t)}};function Ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function e_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$a(o);s.call(u)}}var o=vv(e,r,t,0,null,!1,!1,"",Up);return t._reactRootContainer=o,t[Yt]=o.current,ys(t.nodeType===8?t.parentNode:t),dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$a(l);a.call(u)}}var l=yd(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=l,t[Yt]=l.current,ys(t.nodeType===8?t.parentNode:t),dr(function(){vl(e,l,n,r)}),l}function Sl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$a(o);a.call(l)}}vl(e,o,t,i)}else o=e_(n,e,t,i,r);return $a(o)}qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bi(e.pendingLanes);n!==0&&(Vh(e,n|1),tt(e,de()),!(K&6)&&(ai=de()+500,Bn()))}break;case 13:dr(function(){var r=Jt(t,1);if(r!==null){var i=qe();kt(r,t,1,i)}}),vd(t,1)}};zh=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=qe();kt(e,t,134217728,n)}vd(t,134217728)}};Gg=function(t){if(t.tag===13){var e=An(t),n=Jt(t,e);if(n!==null){var r=qe();kt(n,t,e,r)}vd(t,e)}};Qg=function(){return G};Xg=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};pc=function(t,e,n){switch(e){case"input":if(ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hl(r);if(!i)throw Error(_(90));Ng(r),ac(r,i)}}}break;case"textarea":Rg(t,n);break;case"select":e=n.value,e!=null&&Br(t,!!n.multiple,e,!1)}};Mg=fd;Fg=dr;var t_={usingClientEntryPoint:!1,Events:[Hs,$r,hl,$g,Lg,fd]},Fi={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},n_={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||ZS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{al=Oo.inject(n_),$t=Oo}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t_;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(e))throw Error(_(200));return JS(t,e,null,n)};ut.createRoot=function(t,e){if(!Ed(t))throw Error(_(299));var n=!1,r="",i=wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yd(t,1,!1,null,null,n,!1,r,i),t[Yt]=e.current,ys(t.nodeType===8?t.parentNode:t),new wd(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return dr(t)};ut.hydrate=function(t,e,n){if(!El(e))throw Error(_(200));return Sl(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!Ed(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vv(e,null,t,1,n??null,i,!1,s,o),t[Yt]=e.current,ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wl(e)};ut.render=function(t,e,n){if(!El(e))throw Error(_(200));return Sl(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!El(t))throw Error(_(40));return t._reactRootContainer?(dr(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[Yt]=null})}),!0):!1};ut.unstable_batchedUpdates=fd;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!El(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return Sl(t,e,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";function Ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ev)}catch(t){console.error(t)}}Ev(),vg.exports=ut;var r_=vg.exports,Vp=r_;ec.createRoot=Vp.createRoot,ec.hydrateRoot=Vp.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},i_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new s_;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o_=function(t){const e=Sv(t);return _v.encodeByteArray(e,!0)},La=function(t){return o_(t).replace(/\./g,"")},Tv=function(t){try{return _v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=()=>a_().__FIREBASE_DEFAULTS__,u_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tv(t[1]);return e&&JSON.parse(e)},Sd=()=>{try{return l_()||u_()||c_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iv=t=>{var e,n;return(n=(e=Sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},h_=t=>{const e=Iv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},d_=()=>{var t;return(t=Sd())===null||t===void 0?void 0:t.config},kv=t=>{var e;return(e=Sd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[La(JSON.stringify(n)),La(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function g_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v_(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w_(){try{return typeof indexedDB=="object"}catch{return!1}}function E_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=S_,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?__(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function __(t,e){return t.replace(T_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const T_=/\{\$([^}]+)}/g;function I_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ma(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zp(s)&&zp(o)){if(!Ma(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k_(t,e){const n=new C_(t,e);return n.subscribe.bind(n)}class C_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");N_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new f_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(D_(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R_(t){return t===Yn?void 0:t}function D_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const P_={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},O_=W.INFO,$_={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},L_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=O_,this._logHandler=L_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const M_=(t,e)=>e.some(n=>t instanceof n);let jp,bp;function F_(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U_(){return bp||(bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cv=new WeakMap,qc=new WeakMap,Nv=new WeakMap,Ou=new WeakMap,Td=new WeakMap;function V_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cv.set(n,t)}).catch(()=>{}),Td.set(e,t),e}function z_(t){if(qc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let Gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j_(t){Gc=t(Gc)}function b_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($u(this),e,...n);return Nv.set(r,e.sort?e.sort():[e]),Dn(r)}:U_().includes(t)?function(...e){return t.apply($u(this),e),Dn(Cv.get(this))}:function(...e){return Dn(t.apply($u(this),e))}}function B_(t){return typeof t=="function"?b_(t):(t instanceof IDBTransaction&&z_(t),M_(t,F_())?new Proxy(t,Gc):t)}function Dn(t){if(t instanceof IDBRequest)return V_(t);if(Ou.has(t))return Ou.get(t);const e=B_(t);return e!==t&&(Ou.set(t,e),Td.set(e,t)),e}const $u=t=>Td.get(t);function H_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Dn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Dn(o.result),l.oldVersion,l.newVersion,Dn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const K_=["get","getKey","getAll","getAllKeys","count"],W_=["put","add","delete","clear"],Lu=new Map;function Bp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lu.get(e))return Lu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=W_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||K_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Lu.set(e,s),s}j_(t=>({...t,get:(e,n,r)=>Bp(e,n)||t.get(e,n,r),has:(e,n)=>!!Bp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",Hp="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new _d("@firebase/app"),Q_="@firebase/app-compat",X_="@firebase/analytics-compat",Y_="@firebase/analytics",J_="@firebase/app-check-compat",Z_="@firebase/app-check",eT="@firebase/auth",tT="@firebase/auth-compat",nT="@firebase/database",rT="@firebase/database-compat",iT="@firebase/functions",sT="@firebase/functions-compat",oT="@firebase/installations",aT="@firebase/installations-compat",lT="@firebase/messaging",uT="@firebase/messaging-compat",cT="@firebase/performance",hT="@firebase/performance-compat",dT="@firebase/remote-config",fT="@firebase/remote-config-compat",pT="@firebase/storage",mT="@firebase/storage-compat",gT="@firebase/firestore",yT="@firebase/firestore-compat",vT="firebase",wT="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="[DEFAULT]",ET={[Qc]:"fire-core",[Q_]:"fire-core-compat",[Y_]:"fire-analytics",[X_]:"fire-analytics-compat",[Z_]:"fire-app-check",[J_]:"fire-app-check-compat",[eT]:"fire-auth",[tT]:"fire-auth-compat",[nT]:"fire-rtdb",[rT]:"fire-rtdb-compat",[iT]:"fire-fn",[sT]:"fire-fn-compat",[oT]:"fire-iid",[aT]:"fire-iid-compat",[lT]:"fire-fcm",[uT]:"fire-fcm-compat",[cT]:"fire-perf",[hT]:"fire-perf-compat",[dT]:"fire-rc",[fT]:"fire-rc-compat",[pT]:"fire-gcs",[mT]:"fire-gcs-compat",[gT]:"fire-fst",[yT]:"fire-fst-compat","fire-js":"fire-js",[vT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map,Yc=new Map;function ST(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function li(t){const e=t.name;if(Yc.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;Yc.set(e,t);for(const n of Fa.values())ST(n,t);return!0}function Id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xn=new Ws("app","Firebase",_T);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=wT;function Av(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(n||(n=d_()),!n)throw xn.create("no-options");const s=Fa.get(i);if(s){if(Ma(n,s.options)&&Ma(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new x_(i);for(const l of Yc.values())o.addComponent(l);const a=new TT(n,r,o);return Fa.set(i,a),a}function Rv(t=Xc){const e=Fa.get(t);if(!e&&t===Xc)return Av();if(!e)throw xn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=ET[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}li(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="firebase-heartbeat-database",kT=1,Cs="firebase-heartbeat-store";let Mu=null;function Dv(){return Mu||(Mu=H_(IT,kT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),Mu}async function CT(t){try{return(await Dv()).transaction(Cs).objectStore(Cs).get(xv(t))}catch(e){if(e instanceof ln)pr.warn(e.message);else{const n=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Kp(t,e){try{const r=(await Dv()).transaction(Cs,"readwrite");return await r.objectStore(Cs).put(e,xv(t)),r.done}catch(n){if(n instanceof ln)pr.warn(n.message);else{const r=xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function xv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=1024,AT=30*24*60*60*1e3;class RT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=AT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wp(),{heartbeatsToSend:n,unsentEntries:r}=DT(this._heartbeatsCache.heartbeats),i=La(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wp(){return new Date().toISOString().substring(0,10)}function DT(t,e=NT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w_()?E_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qp(t){return La(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){li(new fr("platform-logger",e=>new q_(e),"PRIVATE")),li(new fr("heartbeat",e=>new RT(e),"PRIVATE")),Pn(Qc,Hp,t),Pn(Qc,Hp,"esm2017"),Pn("fire-js","")}PT("");var OT="firebase",$T="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(OT,$T,"app");function kd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Pv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LT=Pv,Ov=new Ws("auth","Firebase",Pv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new _d("@firebase/auth");function MT(t,...e){Ua.logLevel<=W.WARN&&Ua.warn(`Auth (${_i}): ${t}`,...e)}function ra(t,...e){Ua.logLevel<=W.ERROR&&Ua.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw Cd(t,...e)}function Mt(t,...e){return Cd(t,...e)}function FT(t,e,n){const r=Object.assign(Object.assign({},LT()),{[e]:n});return new Ws("auth","Firebase",r).create(e,{appName:t.name})}function Cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ov.create(t,...e)}function L(t,e,...n){if(!t)throw Cd(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function tn(t,e){t||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UT(){return Gp()==="http:"||Gp()==="https:"}function Gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UT()||g_()||"connection"in navigator)?navigator.onLine:!0}function zT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=m_()||y_()}get(){return VT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new Gs(3e4,6e4);function Lv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qs(t,e,n,r,i={}){return Mv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$v.fetch()(Fv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Mv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jT),e);try{const i=new HT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $o(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $o(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw FT(t,c,u);en(t,c)}}catch(i){if(i instanceof ln)throw i;en(t,"network-request-failed",{message:String(i)})}}async function BT(t,e,n,r,i={}){const s=await Qs(t,e,n,r,i);return"mfaPendingCredential"in s&&en(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Fv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nd(t.config,i):`${t.config.apiScheme}://${i}`}class HT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),bT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t,e){return Qs(t,"POST","/v1/accounts:delete",e)}async function WT(t,e){return Qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qT(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=Ad(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:rs(Fu(i.auth_time)),issuedAtTime:rs(Fu(i.iat)),expirationTime:rs(Fu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fu(t){return Number(t)*1e3}function Ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tv(n);return i?JSON.parse(i):(ra("Failed to decode base64 JWT payload"),null)}catch(i){return ra("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function GT(t){const e=Ad(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&QT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ns(t,WT(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZT(s.providerUserInfo):[],a=JT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function YT(t){const e=nt(t);await Va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZT(t){return t.map(e=>{var{providerId:n}=e,r=kd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e){const n=await Mv(t,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Fv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$v.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new As;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class or{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qT(this,e)}reload(){return YT(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ns(this,KT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:N,stsTokenManager:R}=n;L(m&&R,e,"internal-error");const x=As.fromJSON(this.name,R);L(typeof m=="string",e,"internal-error"),cn(f,e.name),cn(d,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof I=="boolean",e,"internal-error"),cn(g,e.name),cn(v,e.name),cn(y,e.name),cn(E,e.name),cn(p,e.name),cn(h,e.name);const Y=new or({uid:m,auth:e,email:d,emailVerified:w,displayName:f,isAnonymous:I,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:x,createdAt:p,lastLoginAt:h});return N&&Array.isArray(N)&&(Y.providerData=N.map(j=>Object.assign({},j))),E&&(Y._redirectEventId=E),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const s=new or({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Va(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new Map;function Wt(t){tn(t instanceof Function,"Expected a class definition");let e=Qp.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vv.type="NONE";const Xp=Vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ia(this.userKey,i.apiKey,s),this.fullPersistenceKey=ia("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(Wt(Xp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt(Xp);const o=ia(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=or._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(Kv(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||jv(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zv(t=Be()){return/firefox\//i.test(t)}function Rd(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jv(t=Be()){return/crios\//i.test(t)}function bv(t=Be()){return/iemobile/i.test(t)}function Bv(t=Be()){return/android/i.test(t)}function Hv(t=Be()){return/blackberry/i.test(t)}function Kv(t=Be()){return/webos/i.test(t)}function _l(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tI(t=Be()){var e;return _l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nI(){return v_()&&document.documentMode===10}function Wv(t=Be()){return _l(t)||Bv(t)||Kv(t)||Hv(t)||/windows phone/i.test(t)||bv(t)}function rI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t,e=[]){let n;switch(t){case"Browser":n=Yp(Be());break;case"Worker":n=`${Yp(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}async function Gv(t,e){return Qs(t,"GET","/v2/recaptchaConfig",Lv(t,e))}function Jp(t){return t!==void 0&&t.enterprise!==void 0}class Qv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iI().appendChild(r)})}function sI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oI="https://www.google.com/recaptcha/enterprise.js?render=",aI="recaptcha-enterprise",lI="NO_RECAPTCHA";class uI{constructor(e){this.type=aI,this.auth=Tl(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Gv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Qv(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Jp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(lI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Jp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xv(oI+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.beforeStateQueue=new cI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ov,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}async initializeRecaptchaConfig(){const e=await Gv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Qv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new uI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tl(t){return nt(t)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=k_(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e){const n=Id(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ma(s,e??{}))return i;en(i,"already-initialized")}return n.initialize({options:e})}function fI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pI(t,e,n){const r=Tl(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Yv(e),{host:o,port:a}=mI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gI()}function Yv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mI(t){const e=Yv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:em(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:em(o)}}}function em(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){return BT(t,"POST","/v1/accounts:signInWithIdp",Lv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="http://localhost";class mr extends Jv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:yI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Zv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Xs{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Xs{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Xs{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await or._fromIdTokenResponse(e,r,i),o=tm(r);return new ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tm(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,za.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new za(e,n,r,i)}}function e0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?za._fromErrorAndOperation(t,s,e,r):s})}async function vI(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ns(t,e0(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Ad(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&en(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e,n=!1){const r="signIn",i=await e0(t,r,e),s=await ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function SI(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function _I(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}const ja="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(){const t=Be();return Rd(t)||_l(t)}const II=1e3,kI=10;class n0 extends t0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TI()&&rI(),this.fallbackToPolling=Wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n0.type="LOCAL";const CI=n0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0 extends t0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r0.type="SESSION";const i0=r0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await NI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Dd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function RI(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function DI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PI(){return s0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebaseLocalStorageDb",OI=1,ba="firebaseLocalStorage",a0="fbase_key";class Ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function $I(){const t=indexedDB.deleteDatabase(o0);return new Ys(t).toPromise()}function Zc(){const t=indexedDB.open(o0,OI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ba,{keyPath:a0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await $I(),e(await Zc()))})})}async function nm(t,e,n){const r=kl(t,!0).put({[a0]:e,value:n});return new Ys(r).toPromise()}async function LI(t,e){const n=kl(t,!1).get(e),r=await new Ys(n).toPromise();return r===void 0?null:r.value}function rm(t,e){const n=kl(t,!0).delete(e);return new Ys(n).toPromise()}const MI=800,FI=3;class l0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(PI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DI(),!this.activeServiceWorker)return;this.sender=new AI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zc();return await nm(e,ja,"1"),await rm(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kl(i,!1).getAll();return new Ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l0.type="LOCAL";const UI=l0;new Gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t,e){return e?Wt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends Jv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zI(t){return EI(t.auth,new xd(t),t.bypassAuthState)}function jI(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),wI(n,new xd(t),t.bypassAuthState)}async function bI(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),vI(n,new xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zI;case"linkViaPopup":case"linkViaRedirect":return bI;case"reauthViaPopup":case"reauthViaRedirect":return jI;default:en(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Gs(2e3,1e4);class jr extends u0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="pendingRedirect",sa=new Map;class KI extends u0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sa.get(this.auth._key());if(!e){try{const r=await WI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sa.set(this.auth._key(),e)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WI(t,e){const n=QI(e),r=GI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qI(t,e){sa.set(t._key(),e)}function GI(t){return Wt(t._redirectPersistence)}function QI(t){return ia(HI,t.config.apiKey,t.name)}async function XI(t,e,n=!1){const r=Tl(t),i=VI(r,e),o=await new KI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=10*60*1e3;class JI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!c0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YI&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function c0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e={}){return Qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nk=/^https?/;async function rk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ek(t);for(const n of e)try{if(ik(n))return}catch{}en(t,"unauthorized-domain")}function ik(t){const e=Jc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nk.test(n))return!1;if(tk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Gs(3e4,6e4);function sm(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ok(t){return new Promise((e,n)=>{var r,i,s;function o(){sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sm(),n(Mt(t,"network-request-failed"))},timeout:sk.get()})}if(!((i=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)o();else{const a=sI("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},Xv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oa=null,e})}let oa=null;function ak(t){return oa=oa||ok(t),oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new Gs(5e3,15e3),uk="__/auth/iframe",ck="emulator/auth/iframe",hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fk(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nd(e,ck):`https://${t.config.authDomain}/${uk}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=dk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qs(r).slice(1)}`}async function pk(t){const e=await ak(t),n=Ft().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:fk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},lk.get());function l(){Ft().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gk=500,yk=600,vk="_blank",wk="http://localhost";class om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(t,e,n,r=gk,i=yk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=jv(u)?vk:n),zv(u)&&(e=e||wk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(tI(u)&&a!=="_self")return Sk(e||"",a),new om(null);const f=window.open(e||"",a,c);L(f,t,"popup-blocked");try{f.focus()}catch{}return new om(f)}function Sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="__/auth/handler",Tk="emulator/auth/handler",Ik=encodeURIComponent("fac");async function am(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof Zv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",I_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Xs){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Ik}=${encodeURIComponent(l)}`:"";return`${kk(t)}?${qs(a).slice(1)}${u}`}function kk({config:t}){return t.emulator?Nd(t,Tk):`https://${t.authDomain}/${_k}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="webStorageSupport";class Ck{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i0,this._completeRedirectFn=XI,this._overrideRedirectResult=qI}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await am(e,n,r,Jc(),i);return Ek(e,o,Dd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await am(e,n,r,Jc(),i);return RI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pk(e),r=new JI(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uu,{type:Uu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uu];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wv()||Rd()||_l()}}const Nk=Ck;var lm="@firebase/auth",um="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dk(t){li(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),L(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qv(t)},u=new hI(r,i,s,l);return fI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),li(new fr("auth-internal",e=>{const n=Tl(e.getProvider("auth").getImmediate());return(r=>new Ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(lm,um,Rk(t)),Pn(lm,um,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=5*60,Pk=kv("authIdTokenMaxAge")||xk;let cm=null;const Ok=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pk)return;const i=n==null?void 0:n.token;cm!==i&&(cm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $k(t=Rv()){const e=Id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dI(t,{popupRedirectResolver:Nk,persistence:[UI,CI,i0]}),r=kv("authTokenSyncURL");if(r){const s=Ok(r);_I(n,s,()=>s(n.currentUser)),SI(n,o=>s(o))}const i=Iv("auth");return i&&pI(n,`http://${i}`),n}Dk("Browser");var Lk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Pd=Pd||{},M=Lk||self;function Ba(){}function Cl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Js(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Mk(t){return Object.prototype.hasOwnProperty.call(t,Vu)&&t[Vu]||(t[Vu]=++Fk)}var Vu="closure_uid_"+(1e9*Math.random()>>>0),Fk=0;function Uk(t,e,n){return t.call.apply(t.bind,arguments)}function Vk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=Uk:Ve=Vk,Ve.apply(null,arguments)}function Lo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Hn(){this.s=this.s,this.o=this.o}var zk=0;Hn.prototype.s=!1;Hn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),zk!=0)&&Mk(this)};Hn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const h0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Od(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Cl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var jk=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",Ba,e),M.removeEventListener("test",Ba,e)}catch{}return t}();function Ha(t){return/^[\s\xa0]*$/.test(t)}var dm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function zu(t,e){return t<e?-1:t>e?1:0}function Nl(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function Pt(t){return Nl().indexOf(t)!=-1}function $d(t){return $d[" "](t),t}$d[" "]=Ba;function d0(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var bk=Pt("Opera"),ci=Pt("Trident")||Pt("MSIE"),f0=Pt("Edge"),eh=f0||ci,p0=Pt("Gecko")&&!(Nl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),Bk=Nl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function m0(){var t=M.document;return t?t.documentMode:void 0}var Ka;e:{var ju="",bu=function(){var t=Nl();if(p0)return/rv:([^\);]+)(\)|;)/.exec(t);if(f0)return/Edge\/([\d\.]+)/.exec(t);if(ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Bk)return/WebKit\/(\S+)/.exec(t);if(bk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bu&&(ju=bu?bu[1]:""),ci){var Bu=m0();if(Bu!=null&&Bu>parseFloat(ju)){Ka=String(Bu);break e}}Ka=ju}var Hk={};function Kk(){return d0(Hk,9,function(){let t=0;const e=dm(String(Ka)).split("."),n=dm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=zu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||zu(i[2].length==0,s[2].length==0)||zu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var th;if(M.document&&ci){var fm=m0();th=fm||parseInt(Ka,10)||void 0}else th=void 0;var Wk=th;function Rs(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(p0){e:{try{$d(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rs.$.h.call(this)}}ke(Rs,ze);var qk={2:"touch",3:"pen",4:"mouse"};Rs.prototype.h=function(){Rs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zs="closure_listenable_"+(1e6*Math.random()|0),Gk=0;function Qk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Gk,this.fa=this.ia=!1}function Al(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ld(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function g0(t){const e={};for(const n in t)e[n]=t[n];return e}const pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<pm.length;s++)n=pm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rl(t){this.src=t,this.g={},this.h=0}Rl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=rh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Qk(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function nh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=h0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Al(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Md="closure_lm_"+(1e6*Math.random()|0),Hu={};function v0(t,e,n,r,i){if(r&&r.once)return E0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)v0(t,e[s],n,r,i);return null}return n=Vd(n),t&&t[Zs]?t.O(e,n,Js(r)?!!r.capture:!!r,i):w0(t,e,n,!1,r,i)}function w0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Js(i)?!!i.capture:!!i,a=Ud(t);if(a||(t[Md]=a=new Rl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Xk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)jk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Xk(){function t(n){return e.call(t.src,t.listener,n)}const e=Yk;return t}function E0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)E0(t,e[s],n,r,i);return null}return n=Vd(n),t&&t[Zs]?t.P(e,n,Js(r)?!!r.capture:!!r,i):w0(t,e,n,!0,r,i)}function S0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)S0(t,e[s],n,r,i);else r=Js(r)?!!r.capture:!!r,n=Vd(n),t&&t[Zs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=rh(s,n,r,i),-1<n&&(Al(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ud(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rh(e,n,r,i)),(n=-1<t?e[t]:null)&&Fd(n))}function Fd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Zs])nh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ud(e))?(nh(n,t),n.h==0&&(n.src=null,e[Md]=null)):Al(t)}}}function _0(t){return t in Hu?Hu[t]:Hu[t]="on"+t}function Yk(t,e){if(t.fa)t=!0;else{e=new Rs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Fd(t),t=n.call(r,e)}return t}function Ud(t){return t=t[Md],t instanceof Rl?t:null}var Ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vd(t){return typeof t=="function"?t:(t[Ku]||(t[Ku]=function(e){return t.handleEvent(e)}),t[Ku])}function Ie(){Hn.call(this),this.i=new Rl(this),this.S=this,this.J=null}ke(Ie,Hn);Ie.prototype[Zs]=!0;Ie.prototype.removeEventListener=function(t,e,n,r){S0(this,t,e,n,r)};function De(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),y0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Mo(o,r,!0,e)&&i}if(o=e.g=t,i=Mo(o,r,!0,e)&&i,i=Mo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Mo(o,r,!1,e)&&i}Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Al(n[r]);delete t.g[e],t.h--}}this.J=null};Ie.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ie.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Mo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&nh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var zd=M.JSON.stringify;function Jk(){var t=k0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Zk{constructor(){this.h=this.g=null}add(e,n){const r=T0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var T0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new eC,t=>t.reset());class eC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tC(t){M.setTimeout(()=>{throw t},0)}function I0(t,e){ih||nC(),sh||(ih(),sh=!0),k0.add(t,e)}var ih;function nC(){var t=M.Promise.resolve(void 0);ih=function(){t.then(rC)}}var sh=!1,k0=new Zk;function rC(){for(var t;t=Jk();){try{t.h.call(t.g)}catch(n){tC(n)}var e=T0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sh=!1}function Dl(t,e){Ie.call(this),this.h=t||1,this.g=e||M,this.j=Ve(this.qb,this),this.l=Date.now()}ke(Dl,Ie);k=Dl.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),De(this,"tick"),this.ga&&(jd(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Dl.$.N.call(this),jd(this),delete this.g};function bd(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function C0(t){t.g=bd(()=>{t.g=null,t.i&&(t.i=!1,C0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iC extends Hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:C0(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){Hn.call(this),this.h=t,this.g={}}ke(Ds,Hn);var mm=[];function N0(t,e,n,r){Array.isArray(n)||(n&&(mm[0]=n.toString()),n=mm);for(var i=0;i<n.length;i++){var s=v0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function A0(t){Ld(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fd(e)},t),t.g={}}Ds.prototype.N=function(){Ds.$.N.call(this),A0(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xl(){this.g=!0}xl.prototype.Ea=function(){this.g=!1};function sC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function oC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lC(t,n)+(r?" "+r:"")})}function aC(t,e){t.info(function(){return"TIMEOUT: "+e})}xl.prototype.info=function(){};function lC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zd(n)}catch{return e}}var _r={},gm=null;function Pl(){return gm=gm||new Ie}_r.Ta="serverreachability";function R0(t){ze.call(this,_r.Ta,t)}ke(R0,ze);function xs(t){const e=Pl();De(e,new R0(e))}_r.STAT_EVENT="statevent";function D0(t,e){ze.call(this,_r.STAT_EVENT,t),this.stat=e}ke(D0,ze);function We(t){const e=Pl();De(e,new D0(e,t))}_r.Ua="timingevent";function x0(t,e){ze.call(this,_r.Ua,t),this.size=e}ke(x0,ze);function eo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Ol={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},P0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bd(){}Bd.prototype.h=null;function ym(t){return t.h||(t.h=t.i())}function O0(){}var to={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hd(){ze.call(this,"d")}ke(Hd,ze);function Kd(){ze.call(this,"c")}ke(Kd,ze);var oh;function $l(){}ke($l,Bd);$l.prototype.g=function(){return new XMLHttpRequest};$l.prototype.i=function(){return{}};oh=new $l;function no(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ds(this),this.P=uC,t=eh?125:void 0,this.V=new Dl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new $0}function $0(){this.i=null,this.g="",this.h=!1}var uC=45e3,ah={},Wa={};k=no.prototype;k.setTimeout=function(t){this.P=t};function lh(t,e,n){t.L=1,t.v=Ml(nn(e)),t.s=n,t.S=!0,L0(t,null)}function L0(t,e){t.G=Date.now(),ro(t),t.A=nn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),B0(n.i,"t",r),t.C=0,n=t.l.I,t.h=new $0,t.g=c1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new iC(Ve(t.Pa,t,t.g),t.O)),N0(t.U,t.g,"readystatechange",t.nb),e=t.I?g0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xs(),sC(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&qt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=qt(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||eh||this.g&&(this.h.h||this.g.ja()||Sm(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?xs(3):xs(2)),Ll(this);var n=this.g.da();this.aa=n;t:if(M0(this)){var r=Sm(this.g);t="";var i=r.length,s=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),is(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,oC(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var u=a;break t}}u=null}if(n=u)br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uh(this,n);else{this.i=!1,this.o=3,We(12),tr(this),is(this);break e}}this.S?(F0(this,c,o),eh&&this.i&&c==3&&(N0(this.U,this.V,"tick",this.mb),this.V.start())):(br(this.j,this.m,o,null),uh(this,o)),c==4&&tr(this),this.i&&!this.J&&(c==4?o1(this.l,this):(this.i=!1,ro(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),tr(this),is(this)}}}catch{}finally{}};function M0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function F0(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=cC(t,n),i==Wa){e==4&&(t.o=4,We(14),r=!1),br(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ah){t.o=4,We(15),br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else br(t.j,t.m,i,null),uh(t,i);M0(t)&&i!=Wa&&i!=ah&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jd(e),e.L=!0,We(11))):(br(t.j,t.m,n,"[Invalid Chunked Response]"),tr(t),is(t))}k.mb=function(){if(this.g){var t=qt(this.g),e=this.g.ja();this.C<e.length&&(Ll(this),F0(this,t,e),this.i&&t!=4&&ro(this))}};function cC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wa:(n=Number(e.substring(n,r)),isNaN(n)?ah:(r+=1,r+n>e.length?Wa:(e=e.substr(r,n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,tr(this)};function ro(t){t.Y=Date.now()+t.P,U0(t,t.P)}function U0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=eo(Ve(t.lb,t),e)}function Ll(t){t.B&&(M.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(aC(this.j,this.A),this.L!=2&&(xs(),We(17)),tr(this),this.o=2,is(this)):U0(this,this.Y-t)};function is(t){t.l.H==0||t.J||o1(t.l,t)}function tr(t){Ll(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,jd(t.V),A0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function uh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ch(n.h,t))){if(!t.K&&ch(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Qa(n),Vl(n);else break e;Yd(n),We(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=eo(Ve(n.ib,n),6e3));if(1>=W0(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else nr(n,11)}else if((t.K||n.g==t)&&Qa(n),!Ha(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const f=u[4];f!=null&&(n.Ga=f,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wd(s,s.h),s.h=null))}if(r.F){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,re(r.G,r.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=u1(r,r.I?r.oa:null,r.Y),o.K){q0(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Ll(a),ro(a)),r.g=o}else i1(r);0<n.i.length&&zl(n)}else u[0]!="stop"&&u[0]!="close"||nr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nr(n,7):Xd(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}xs(4)}catch{}}function hC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Cl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function dC(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Cl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function V0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Cl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=dC(t),r=hC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var z0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ar(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ar){this.h=e!==void 0?e:t.h,qa(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l,e=t.i;var n=new Ps;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vm(this,n),this.o=t.o}else t&&(n=String(t).match(z0))?(this.h=!!e,qa(this,n[1]||"",!0),this.s=Hi(n[2]||""),this.g=Hi(n[3]||"",!0),Ga(this,n[4]),this.l=Hi(n[5]||"",!0),vm(this,n[6]||"",!0),this.o=Hi(n[7]||"")):(this.h=!!e,this.i=new Ps(null,this.h))}ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ki(e,wm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ki(e,wm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ki(n,n.charAt(0)=="/"?gC:mC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ki(n,vC)),t.join("")};function nn(t){return new ar(t)}function qa(t,e,n){t.j=n?Hi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vm(t,e,n){e instanceof Ps?(t.i=e,wC(t.i,t.h)):(n||(e=Ki(e,yC)),t.i=new Ps(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Ml(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ki(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wm=/[#\/\?@]/g,mC=/[#\?:]/g,gC=/[#\?]/g,yC=/[#\?@]/g,vC=/#/g;function Ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&fC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Ps.prototype;k.add=function(t,e){Kn(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function j0(t,e){Kn(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function b0(t,e){return Kn(t),e=Ti(t,e),t.g.has(e)}k.forEach=function(t,e){Kn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.sa=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){Kn(this);let e=[];if(typeof t=="string")b0(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return Kn(this),this.i=null,t=Ti(this,t),b0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function B0(t,e,n){j0(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),Od(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wC(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(j0(this,r),B0(this,i,n))},t)),t.j=e}var EC=class{constructor(t,e){this.h=t,this.g=e}};function H0(t){this.l=t||SC,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SC=10;function K0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function W0(t){return t.h?1:t.g?t.g.size:0}function ch(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wd(t,e){t.g?t.g.add(e):t.h=e}function q0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}H0.prototype.cancel=function(){if(this.i=G0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function G0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Od(t.i)}function qd(){}qd.prototype.stringify=function(t){return M.JSON.stringify(t,void 0)};qd.prototype.parse=function(t){return M.JSON.parse(t,void 0)};function _C(){this.g=new qd}function TC(t,e,n){const r=n||"";try{V0(t,function(i,s){let o=i;Js(i)&&(o=zd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function IC(t,e){const n=new xl;if(M.Image){const r=new Image;r.onload=Lo(Fo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Lo(Fo,n,r,"TestLoadImage: error",!1,e),r.onabort=Lo(Fo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Lo(Fo,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function io(t){this.l=t.fc||null,this.j=t.ob||!1}ke(io,Bd);io.prototype.g=function(){return new Fl(this.l,this.j)};io.prototype.i=function(t){return function(){return t}}({});function Fl(t,e){Ie.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(Fl,Ie);var Gd=0;k=Fl.prototype;k.open=function(t,e){if(this.readyState!=Gd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Os(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,so(this)),this.readyState=Gd};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Q0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Q0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?so(this):Os(this),this.readyState==3&&Q0(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,so(this))};k.Ya=function(t){this.g&&(this.response=t,so(this))};k.ka=function(){this.g&&so(this)};function so(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Os(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kC=M.JSON.parse;function ce(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=X0,this.L=this.M=!1}ke(ce,Ie);var X0="",CC=/^https?$/i,NC=["POST","PUT"];k=ce.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():oh.g(),this.C=this.u?ym(this.u):ym(oh),this.g.onreadystatechange=Ve(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Em(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=h0(NC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Z0(this),0<this.B&&((this.L=AC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.ua,this)):this.A=bd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Em(this,s)}};function AC(t){return ci&&Kk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof Pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Em(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Y0(t),Ul(t)}function Y0(t){t.F||(t.F=!0,De(t,"complete"),De(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Ul(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ul(this,!0)),ce.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?J0(this):this.kb())};k.kb=function(){J0(this)};function J0(t){if(t.h&&typeof Pd<"u"&&(!t.C[1]||qt(t)!=4||t.da()!=2)){if(t.v&&qt(t)==4)bd(t.La,0,t);else if(De(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(z0)[1]||null;if(!i&&M.self&&M.self.location){var s=M.self.location.protocol;i=s.substr(0,s.length-1)}r=!CC.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Y0(t)}}finally{Ul(t)}}}}function Ul(t,e){if(t.g){Z0(t);const n=t.g,r=t.C[0]?Ba:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function Z0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kC(e)}};function Sm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case X0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function e1(t){let e="";return Ld(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=e1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Ui(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function t1(t){this.Ga=0,this.i=[],this.j=new xl,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ui("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ui("baseRetryDelayMs",5e3,t),this.hb=Ui("retryDelaySeedMs",1e4,t),this.eb=Ui("forwardChannelMaxRetries",2,t),this.xa=Ui("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new H0(t&&t.concurrentRequestLimit),this.Ja=new _C,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}k=t1.prototype;k.qa=8;k.H=1;function Xd(t){if(n1(t),t.H==3){var e=t.W++,n=nn(t.G);re(n,"SID",t.J),re(n,"RID",e),re(n,"TYPE","terminate"),oo(t,n),e=new no(t,t.j,e,void 0),e.L=2,e.v=Ml(nn(n)),n=!1,M.navigator&&M.navigator.sendBeacon&&(n=M.navigator.sendBeacon(e.v.toString(),"")),!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=c1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ro(e)}l1(t)}function Vl(t){t.g&&(Jd(t),t.g.cancel(),t.g=null)}function n1(t){Vl(t),t.u&&(M.clearTimeout(t.u),t.u=null),Qa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function zl(t){K0(t.h)||t.m||(t.m=!0,I0(t.Na,t),t.C=0)}function RC(t,e){return W0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=eo(Ve(t.Na,t,e),a1(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new no(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=g0(s),y0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=r1(this,i,e),n=nn(this.G),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),oo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(e1(s)))+"&"+e:this.o&&Qd(n,this.o,s)),Wd(this.h,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.ba=!0,lh(i,n,null)):lh(i,n,e),this.H=2}}else this.H==3&&(t?_m(this,t):this.i.length==0||K0(this.h)||_m(this))};function _m(t,e){var n;e?n=e.m:n=t.W++;const r=nn(t.G);re(r,"SID",t.J),re(r,"RID",n),re(r,"AID",t.V),oo(t,r),t.o&&t.s&&Qd(r,t.o,t.s),n=new no(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=r1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wd(t.h,n),lh(n,r,e)}function oo(t,e){t.ma&&Ld(t.ma,function(n,r){re(e,r,n)}),t.l&&V0({},function(n,r){re(e,r,n)})}function r1(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ve(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{TC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function i1(t){t.g||t.u||(t.ba=1,I0(t.Ma,t),t.A=0)}function Yd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=eo(Ve(t.Ma,t),a1(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,s1(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=eo(Ve(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,We(10),Vl(this),s1(this))};function Jd(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function s1(t){t.g=new no(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nn(t.wa);re(e,"RID","rpc"),re(e,"SID",t.J),re(e,"CI",t.M?"0":"1"),re(e,"AID",t.V),re(e,"TYPE","xmlhttp"),oo(t,e),t.o&&t.s&&Qd(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ml(nn(e)),n.s=null,n.S=!0,L0(n,t)}k.ib=function(){this.v!=null&&(this.v=null,Vl(this),Yd(this),We(19))};function Qa(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function o1(t,e){var n=null;if(t.g==e){Qa(t),Jd(t),t.g=null;var r=2}else if(ch(t.h,e))n=e.F,q0(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Pl(),De(r,new x0(r,n)),zl(t)}else i1(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&RC(t,e)||r==2&&Yd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}}function a1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function nr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ve(t.pb,t);n||(n=new ar("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||qa(n,"https"),Ml(n)),IC(n.toString(),r)}else We(2);t.H=0,t.l&&t.l.za(e),l1(t),n1(t)}k.pb=function(t){t?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function l1(t){if(t.H=0,t.pa=[],t.l){const e=G0(t.h);(e.length!=0||t.i.length!=0)&&(hm(t.pa,e),hm(t.pa,t.i),t.h.i.length=0,Od(t.i),t.i.length=0),t.l.ya()}}function u1(t,e,n){var r=n instanceof ar?nn(n):new ar(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ga(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ar(null,void 0);r&&qa(s,r),e&&(s.g=e),i&&Ga(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.qa),oo(t,r),r}function c1(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ce(new io({ob:!0})):new ce(t.va),e.Oa(t.I),e}function h1(){}k=h1.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.Va=function(){};function Xa(){if(ci&&!(10<=Number(Wk)))throw Error("Environmental error: no available transport.")}Xa.prototype.g=function(t,e){return new lt(t,e)};function lt(t,e){Ie.call(this),this.g=new t1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}ke(lt,Ie);lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=u1(t,null,t.Y),zl(t)};lt.prototype.close=function(){Xd(this.g)};lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zd(t),t=n);e.i.push(new EC(e.fb++,t)),e.H==3&&zl(e)};lt.prototype.N=function(){this.g.l=null,delete this.j,Xd(this.g),delete this.g,lt.$.N.call(this)};function d1(t){Hd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(d1,Hd);function f1(){Kd.call(this),this.status=1}ke(f1,Kd);function Ii(t){this.g=t}ke(Ii,h1);Ii.prototype.Ba=function(){De(this.g,"a")};Ii.prototype.Aa=function(t){De(this.g,new d1(t))};Ii.prototype.za=function(t){De(this.g,new f1)};Ii.prototype.ya=function(){De(this.g,"b")};function DC(){this.blockSize=-1}function At(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ke(At,DC);At.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}At.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Wu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Wu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Wu(this,r),i=0;break}}this.h=i,this.i+=e};At.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Q(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var xC={};function Zd(t){return-128<=t&&128>t?d0(xC,t,function(e){return new Q([e|0],0>e?-1:0)}):new Q([t|0],0>t?-1:0)}function Ot(t){if(isNaN(t)||!isFinite(t))return Yr;if(0>t)return Ae(Ot(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=hh;return new Q(e,0)}function p1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ae(p1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ot(Math.pow(e,8)),r=Yr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ot(Math.pow(e,s)),r=r.R(s).add(Ot(o))):(r=r.R(n),r=r.add(Ot(o)))}return r}var hh=4294967296,Yr=Zd(0),dh=Zd(1),Tm=Zd(16777216);k=Q.prototype;k.ea=function(){if(ft(this))return-Ae(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:hh+r)*e,e*=hh}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Gt(this))return"0";if(ft(this))return"-"+Ae(this).toString(t);for(var e=Ot(Math.pow(t,6)),n=this,r="";;){var i=Ja(n,e).g;n=Ya(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Gt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Gt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ft(t){return t.h==-1}k.X=function(t){return t=Ya(this,t),ft(t)?-1:Gt(t)?0:1};function Ae(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Q(n,~t.h).add(dh)}k.abs=function(){return ft(this)?Ae(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Q(n,n[n.length-1]&-2147483648?-1:0)};function Ya(t,e){return t.add(Ae(e))}k.R=function(t){if(Gt(this)||Gt(t))return Yr;if(ft(this))return ft(t)?Ae(this).R(Ae(t)):Ae(Ae(this).R(t));if(ft(t))return Ae(this.R(Ae(t)));if(0>this.X(Tm)&&0>t.X(Tm))return Ot(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Uo(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Uo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Uo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Uo(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Q(n,0)};function Uo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Vi(t,e){this.g=t,this.h=e}function Ja(t,e){if(Gt(e))throw Error("division by zero");if(Gt(t))return new Vi(Yr,Yr);if(ft(t))return e=Ja(Ae(t),e),new Vi(Ae(e.g),Ae(e.h));if(ft(e))return e=Ja(t,Ae(e)),new Vi(Ae(e.g),e.h);if(30<t.g.length){if(ft(t)||ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=dh,r=e;0>=r.X(t);)n=Im(n),r=Im(r);var i=Cr(n,1),s=Cr(r,1);for(r=Cr(r,2),n=Cr(n,2);!Gt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Cr(r,1),n=Cr(n,1)}return e=Ya(t,i.R(e)),new Vi(i,e)}for(i=Yr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ot(n),o=s.R(e);ft(o)||0<o.X(t);)n-=r,s=Ot(n),o=s.R(e);Gt(s)&&(s=dh),i=i.add(s),t=Ya(t,o)}return new Vi(i,t)}k.gb=function(t){return Ja(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Q(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Q(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Q(n,this.h^t.h)};function Im(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Q(n,t.h)}function Cr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Q(i,t.h)}Xa.prototype.createWebChannel=Xa.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;Ol.NO_ERROR=0;Ol.TIMEOUT=8;Ol.HTTP_ERROR=6;P0.COMPLETE="complete";O0.EventType=to;to.OPEN="a";to.CLOSE="b";to.ERROR="c";to.MESSAGE="d";Ie.prototype.listen=Ie.prototype.O;ce.prototype.listenOnce=ce.prototype.P;ce.prototype.getLastError=ce.prototype.Sa;ce.prototype.getLastErrorCode=ce.prototype.Ia;ce.prototype.getStatus=ce.prototype.da;ce.prototype.getResponseJson=ce.prototype.Wa;ce.prototype.getResponseText=ce.prototype.ja;ce.prototype.send=ce.prototype.ha;ce.prototype.setWithCredentials=ce.prototype.Oa;At.prototype.digest=At.prototype.l;At.prototype.reset=At.prototype.reset;At.prototype.update=At.prototype.j;Q.prototype.add=Q.prototype.add;Q.prototype.multiply=Q.prototype.R;Q.prototype.modulo=Q.prototype.gb;Q.prototype.compare=Q.prototype.X;Q.prototype.toNumber=Q.prototype.ea;Q.prototype.toString=Q.prototype.toString;Q.prototype.getBits=Q.prototype.D;Q.fromNumber=Ot;Q.fromString=p1;var PC=function(){return new Xa},OC=function(){return Pl()},qu=Ol,$C=P0,LC=_r,km={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},MC=io,Vo=O0,FC=ce,UC=At,Jr=Q;const Cm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new _d("@firebase/firestore");function Nm(){return gr.logLevel}function D(t,...e){if(gr.logLevel<=W.DEBUG){const n=e.map(ef);gr.debug(`Firestore (${ki}): ${t}`,...n)}}function rn(t,...e){if(gr.logLevel<=W.ERROR){const n=e.map(ef);gr.error(`Firestore (${ki}): ${t}`,...n)}}function hi(t,...e){if(gr.logLevel<=W.WARN){const n=e.map(ef);gr.warn(`Firestore (${ki}): ${t}`,...n)}}function ef(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${ki}) INTERNAL ASSERTION FAILED: `+t;throw rn(e),new Error(e)}function ee(t,e){t||$()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class zC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jC{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new m1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new Le(e)}}class bC{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class BC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new bC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KC{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.T=n.token,new HC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function di(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new we(0,0))}static max(){return new F(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $s?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends $s{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const qC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends $s{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return qC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ie.fromString(e))}static fromName(e){return new P(ie.fromString(e).popFirst(5))}static empty(){return new P(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ie(e.slice()))}}function GC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Un(i,P.empty(),e)}function QC(t){return new Un(t.readTime,t.key,-1)}class Un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(F.min(),P.empty(),-1)}static max(){return new Un(F.max(),P.empty(),-1)}}function XC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==YC)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function lo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}tf.ct=-1;function jl(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function ZC(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function y1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rm(this.data.getIterator())}getIteratorFrom(e){return new Rm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Rm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new st([])}unionWith(e){let n=new je(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new st(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new v1("Invalid base64 string: "+i):i}}(e);return new He(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const e2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(ee(!!t),typeof t=="string"){let e=0;const n=e2.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rf(t){const e=t.mapValue.fields.__previous_value__;return nf(e)?rf(e):e}function Ls(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ms{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nf(t)?4:n2(t)?9007199254740991:10:$()}function Vt(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ls(t).isEqual(Ls(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Vn(r.timestampValue),o=Vn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return yr(r.bytesValue).isEqual(yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?Za(s)===Za(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Am(s)!==Am(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Vt(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Fs(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Dm(t.timestampValue,e.timestampValue);case 4:return Dm(Ls(t),Ls(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=yr(i),a=yr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=q(o[l],a[l]);if(u!==0)return u}return q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=q(pe(i.latitude),pe(s.latitude));return o!==0?o:q(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fi(o[l],a[l]);if(u)return u}return q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===jo.mapValue&&s===jo.mapValue)return 0;if(i===jo.mapValue)return 1;if(s===jo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const f=q(a[c],u[c]);if(f!==0)return f;const d=fi(o[a[c]],l[u[c]]);if(d!==0)return d}return q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Dm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=Vn(t),r=Vn(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function pi(t){return fh(t)}function fh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Vn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=fh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${fh(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function ph(t){return!!t&&"integerValue"in t}function sf(t){return!!t&&"arrayValue"in t}function xm(t){return!!t&&"nullValue"in t}function Pm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function aa(t){return!!t&&"mapValue"in t}function ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ss(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ss(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];aa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Tr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ye(ss(this.value))}}function w1(t){const e=[];return Tr(t.fields,(n,r)=>{const i=new Ue([n]);if(aa(r)){const s=w1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,F.min(),F.min(),F.min(),Ye.empty(),0)}static newFoundDocument(e,n,r,i){return new Fe(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Fe(e,2,n,F.min(),F.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,F.min(),F.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.position=e,this.inclusive=n}}function Om(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $m(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n="asc"){this.field=e,this.dir=n}}function r2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{}class ye extends E1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new s2(e,n,r):n==="array-contains"?new l2(e,r):n==="in"?new u2(e,r):n==="not-in"?new c2(e,r):n==="array-contains-any"?new h2(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o2(e,r):new a2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fi(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zt extends E1{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new zt(e,n)}matches(e){return S1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function S1(t){return t.op==="and"}function _1(t){return i2(t)&&S1(t)}function i2(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function mh(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(_1(t))return t.filters.map(e=>mh(e)).join(",");{const e=t.filters.map(n=>mh(n)).join(",");return`${t.op}(${e})`}}function T1(t,e){return t instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&Vt(n.value,r.value)}(t,e):t instanceof zt?function(n,r){return r instanceof zt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&T1(s,r.filters[o]),!0):!1}(t,e):void $()}function I1(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${pi(e.value)}`}(t):t instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(I1).join(" ,")+"}"}(t):"Filter"}class s2 extends ye{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class o2 extends ye{constructor(e,n){super(e,"in",n),this.keys=k1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a2 extends ye{constructor(e,n){super(e,"not-in",n),this.keys=k1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function k1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class l2 extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sf(n)&&Fs(n.arrayValue,this.value)}}class u2 extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fs(this.value.arrayValue,n)}}class c2 extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fs(this.value.arrayValue,n)}}class h2 extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Lm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new d2(t,e,n,r,i,s,o)}function of(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.ft=n}return e.ft}function af(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$m(t.startAt,e.startAt)&&$m(t.endAt,e.endAt)}function gh(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function f2(t,e,n,r,i,s,o,a){return new bl(t,e,n,r,i,s,o,a)}function C1(t){return new bl(t)}function Mm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function m2(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function g2(t){return t.collectionGroup!==null}function Zr(t){const e=U(t);if(e.dt===null){e.dt=[];const n=m2(e),r=p2(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new os(n)),e.dt.push(new os(Ue.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new os(Ue.keyField(),s))}}}return e.dt}function sn(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=Lm(e.path,e.collectionGroup,Zr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Zr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new os(s.field,o))}const r=e.endAt?new el(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new el(e.startAt.position,e.startAt.inclusive):null;e._t=Lm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function yh(t,e,n){return new bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bl(t,e){return af(sn(t),sn(e))&&t.limitType===e.limitType}function N1(t){return`${of(sn(t))}|lt:${t.limitType}`}function vh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>I1(r)).join(", ")}]`),jl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),`Target(${n})`}(sn(t))}; limitType=${t.limitType})`}function Hl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Zr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Om(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Zr(n),r)||n.endAt&&!function(i,s,o){const a=Om(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Zr(n),r))}(t,e)}function y2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A1(t){return(e,n)=>{let r=!1;for(const i of Zr(t)){const s=v2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function v2(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fi(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return y1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=new le(P.comparator);function on(){return w2}const R1=new le(P.comparator);function Wi(...t){let e=R1;for(const n of t)e=e.insert(n.key,n);return e}function D1(t){let e=R1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return as()}function x1(){return as()}function as(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const E2=new le(P.comparator),S2=new je(P.comparator);function b(...t){let e=S2;for(const n of t)e=e.add(n);return e}const _2=new je(q);function T2(){return _2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function O1(t){return{integerValue:""+t}}function I2(t,e){return ZC(e)?O1(e):P1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this._=void 0}}function k2(t,e,n){return t instanceof tl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&nf(i)&&(i=rf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Us?L1(t,e):t instanceof Vs?M1(t,e):function(r,i){const s=$1(r,i),o=Fm(s)+Fm(r.wt);return ph(s)&&ph(r.wt)?O1(o):P1(r.serializer,o)}(t,e)}function C2(t,e,n){return t instanceof Us?L1(t,e):t instanceof Vs?M1(t,e):n}function $1(t,e){return t instanceof nl?ph(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class tl extends Kl{}class Us extends Kl{constructor(e){super(),this.elements=e}}function L1(t,e){const n=F1(e);for(const r of t.elements)n.some(i=>Vt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vs extends Kl{constructor(e){super(),this.elements=e}}function M1(t,e){let n=F1(e);for(const r of t.elements)n=n.filter(i=>!Vt(i,r));return{arrayValue:{values:n}}}class nl extends Kl{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Fm(t){return pe(t.integerValue||t.doubleValue)}function F1(t){return sf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function N2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Us&&r instanceof Us||n instanceof Vs&&r instanceof Vs?di(n.elements,r.elements,Vt):n instanceof nl&&r instanceof nl?Vt(n.wt,r.wt):n instanceof tl&&r instanceof tl}(t.transform,e.transform)}class A2{constructor(e,n){this.version=e,this.transformResults=n}}class Ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function la(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wl{}function U1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lf(t.key,Ct.none()):new uo(t.key,t.data,Ct.none());{const n=t.data,r=Ye.empty();let i=new je(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wn(t.key,r,new st(i.toArray()),Ct.none())}}function R2(t,e,n){t instanceof uo?function(r,i,s){const o=r.value.clone(),a=Vm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Wn?function(r,i,s){if(!la(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Vm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(V1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ls(t,e,n,r){return t instanceof uo?function(i,s,o,a){if(!la(i.precondition,s))return o;const l=i.value.clone(),u=zm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wn?function(i,s,o,a){if(!la(i.precondition,s))return o;const l=zm(i.fieldTransforms,a,s),u=s.data;return u.setAll(V1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return la(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function D2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=$1(r.transform,i||null);s!=null&&(n===null&&(n=Ye.empty()),n.set(r.field,s))}return n||null}function Um(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&di(n,r,(i,s)=>N2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends Wl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wn extends Wl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function V1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vm(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,C2(o,a,n[i]))}return r}function zm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,k2(s,o,e))}return r}class lf extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x2 extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&R2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ls(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ls(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=x1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=U1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),b())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>Um(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>Um(n,r))}}class uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=E2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new uf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,H;function L2(t){switch(t){default:return $();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function z1(t){if(t===void 0)return rn("GRPC error has no .code"),S.UNKNOWN;switch(t){case fe.OK:return S.OK;case fe.CANCELLED:return S.CANCELLED;case fe.UNKNOWN:return S.UNKNOWN;case fe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case fe.INTERNAL:return S.INTERNAL;case fe.UNAVAILABLE:return S.UNAVAILABLE;case fe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case fe.NOT_FOUND:return S.NOT_FOUND;case fe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case fe.ABORTED:return S.ABORTED;case fe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case fe.DATA_LOSS:return S.DATA_LOSS;default:return $()}}(H=fe||(fe={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return bo}static getOrCreateInstance(){return bo===null&&(bo=new cf),bo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let bo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new Jr([4294967295,4294967295],0);function jm(t){const e=M2().encode(t),n=new UC;return n.update(e),new Uint8Array(n.digest())}function bm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qi(`Invalid padding: ${n}`);if(r<0)throw new qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qi(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Jr.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Jr.fromNumber(r)));return i.compare(F2)===1&&(i=new Jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=jm(e),[r,i]=bm(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=jm(e),[r,i]=bm(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ql(F.min(),i,new le(q),on(),b())}}class co{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class j1{constructor(e,n){this.targetId=e,this.bt=n}}class b1{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Bm{constructor(){this.Vt=0,this.St=Km(),this.Dt=He.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=b(),n=b(),r=b();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new co(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=Km()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class U2{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=on(),this.jt=Hm(),this.zt=new le(q)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(gh(o))if(i===0){const a=new P(o.path);this.Jt(r,a,Fe.newNoDocument(a,F.min()))}else ee(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=cf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,f){var d,g,v,y,E,p;const h={localCacheCount:c,existenceFilterCount:f.count},m=f.unchangedNames;return m&&(h.bloomFilter={applied:u===0,hashCount:(d=m==null?void 0:m.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(v=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&y!==void 0?y:0,padding:(p=(E=m==null?void 0:m.bits)===null||E===void 0?void 0:E.padding)!==null&&p!==void 0?p:0}),h}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=yr(s).toUint8Array()}catch(c){if(c instanceof v1)return hi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new hf(l,o,a)}catch(c){return hi(c instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&gh(a.target)){const l=new P(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,Fe.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=b();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new ql(e,n,this.zt,this.Qt,r);return this.Qt=on(),this.jt=Hm(),this.zt=new le(q),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Bm,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new je(q),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Bm),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Hm(){return new le(P.comparator)}function Km(){return new le(P.comparator)}const V2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),z2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),j2=(()=>({and:"AND",or:"OR"}))();class b2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wh(t,e){return t.useProto3Json||jl(e)?e:{value:e}}function rl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function B1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function B2(t,e){return rl(t,e.toTimestamp())}function Ut(t){return ee(!!t),F.fromTimestamp(function(e){const n=Vn(e);return new we(n.seconds,n.nanos)}(t))}function df(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function H1(t){const e=ie.fromString(t);return ee(G1(e)),e}function Eh(t,e){return df(t.databaseId,e.path)}function Gu(t,e){const n=H1(e);if(n.get(1)!==t.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(K1(n))}function Sh(t,e){return df(t.databaseId,e)}function H2(t){const e=H1(t);return e.length===4?ie.emptyPath():K1(e)}function _h(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K1(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wm(t,e,n){return{name:Eh(t,e),fields:n.value.mapValue.fields}}function K2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ee(u===void 0||typeof u=="string"),He.fromBase64String(u||"")):(ee(u===void 0||u instanceof Uint8Array),He.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:z1(l.code);return new O(u,l.message||"")}(o);n=new b1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gu(t,r.document.name),s=Ut(r.document.updateTime),o=r.document.createTime?Ut(r.document.createTime):F.min(),a=new Ye({mapValue:{fields:r.document.fields}}),l=Fe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ua(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gu(t,r.document),s=r.readTime?Ut(r.readTime):F.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ua([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gu(t,r.document),s=r.removedTargetIds||[];n=new ua([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $2(i,s),a=r.targetId;n=new j1(a,o)}}return n}function W2(t,e){let n;if(e instanceof uo)n={update:Wm(t,e.key,e.value)};else if(e instanceof lf)n={delete:Eh(t,e.key)};else if(e instanceof Wn)n={update:Wm(t,e.key,e.data),updateMask:tN(e.fieldMask)};else{if(!(e instanceof x2))return $();n={verify:Eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof tl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Us)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof nl)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:B2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function q2(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ut(r.updateTime):Ut(i);return s.isEqual(F.min())&&(s=Ut(i)),new A2(s,r.transformResults||[])}(n,e))):[]}function G2(t,e){return{documents:[Sh(t,e.path)]}}function Q2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return q1(zt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Nr(c.field),direction:J2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=wh(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function X2(t){let e=H2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const f=W1(c);return f instanceof zt&&_1(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new os(Ar(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,jl(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,d=c.values||[];return new el(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,d=c.values||[];return new el(d,f)}(n.endAt)),f2(e,i,o,s,a,"F",l,u)}function Y2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function W1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ar(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ar(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ar(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(Ar(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(n=>W1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function J2(t){return V2[t]}function Z2(t){return z2[t]}function eN(t){return j2[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function Ar(t){return Ue.fromServerFormat(t.fieldPath)}function q1(t){return t instanceof ye?function(e){if(e.op==="=="){if(Pm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NAN"}};if(xm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NAN"}};if(xm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(e.field),op:Z2(e.op),value:e.value}}}(t):t instanceof zt?function(e){const n=e.getFilters().map(r=>q1(r));return n.length===1?n[0]:{compositeFilter:{op:eN(e.op),filters:n}}}(t):$()}function tN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function G1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,r,i,s=F.min(),o=F.min(),a=He.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.le=e}}function rN(t){const e=X2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.sn=new sN}addToCollectionParentIndex(e,n){return this.sn.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Un.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class sN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new mi(0)}static kn(){return new mi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ls(r.mutation,i,st.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,b()).next(()=>r))}getLocalViewOfDocuments(e,n,r=b()){const i=rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Wi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,b()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=on();const o=as(),a=as();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Wn)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ls(c.mutation,u,c.mutation.getFieldMask(),we.now())):o.set(u.key,st.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new aN(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=as();let i=new le((o,a)=>o-a),s=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||st.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||b()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=x1();c.forEach(d=>{if(!s.has(d)){const g=U1(n.get(d),r.get(d));g!==null&&f.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):g2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(rr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,b())).next(c=>({batchId:a,changes:D1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=Wi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Wi();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new bl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Fe.newInvalidDocument(u)))});let o=Wi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ls(u.mutation,l,st.empty(),we.now()),Hl(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return T.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Ut(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:rN(r.bundledQuery),readTime:Ut(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.overlays=new le(P.comparator),this.hs=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=rr(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new le((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=rr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=rr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new O2(n,r));let s=this.hs.get(n);s===void 0&&(s=b(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.ls=new je(Se.fs),this.ds=new je(Se._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Se(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Se(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new P(new ie([])),r=new Se(n,e),i=new Se(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new P(new ie([])),r=new Se(n,e),i=new Se(n,e+1);let s=b();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Se(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return P.comparator(e.key,n.key)||q(e.Es,n.Es)}static _s(e,n){return q(e.Es,n.Es)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new je(Se.fs)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new P2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Se(n,0),i=new Se(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(q);return n.forEach(i=>{const s=new Se(i,0),o=new Se(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),T.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new Se(new P(s),0);let a=new je(q);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),T.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return T.forEach(n.mutations,i=>{const s=new Se(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Se(n,0),i=this.Rs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.Ss=e,this.docs=new le(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=on();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=on();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||XC(QC(c),r)<=0||(i.has(c.key)||Hl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Ds(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fN(this)}getSize(e){return T.resolve(this.size)}}class fN extends oN{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.persistence=e,this.Cs=new Ci(n=>of(n),af),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.xs=0,this.Ns=new ff,this.targetCount=0,this.ks=mi.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),T.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.$n(n),T.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n){this.Ms={},this.overlays={},this.Os=new tf(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new pN(this),this.indexManager=new iN,this.remoteDocumentCache=function(r){return new dN(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new nN(n),this.Ls=new uN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new hN(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new gN(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return T.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class gN extends JC{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Gs=new ff,this.Qs=null}static js(e){return new pf(e)}get zs(){if(this.Qs)return this.Qs;throw $()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),T.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.zs,r=>{const i=P.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return T.or([()=>T.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=b(),i=b();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Mm(n))return T.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yh(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=b(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,yh(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return Mm(n)||i.isEqual(F.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Nm()<=W.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vh(n)),this.zi(e,o,n,GC(i,-1)))})}Qi(e,n){let r=new je(A1(e));return n.forEach((i,s)=>{Hl(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Nm()<=W.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",vh(n)),this.qi.getDocumentsMatchingQuery(e,n,Un.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new le(q),this.Ji=new Ci(s=>of(s),af),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lN(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function wN(t,e,n,r){return new vN(t,e,n,r)}async function Q1(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=b();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function EN(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,f=c.keys();let d=T.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const y=l.docVersions.get(g);ee(y!==null),v.version.compareTo(y)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=b();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function X1(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function SN(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,f)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(He.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(f,g),function(v,y,E){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,c)&&a.push(n.Fs.updateTargetData(s,g))});let l=on(),u=b();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(_N(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(F.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(f=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function _N(t,e,n){let r=b(),i=b();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=on();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function TN(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IN(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Sn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Th(t,e,n){const r=U(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!lo(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function qm(t,e,n){const r=U(t);let i=F.min(),s=b();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),f=c.Ji.get(u);return f!==void 0?T.resolve(c.Hi.get(f)):c.Fs.getTargetData(l,u)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:b())).next(a=>(kN(r,y2(e),a),{documents:a,sr:s})))}function kN(t,e,n){let r=t.Yi.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class Gm{constructor(){this.activeTargetIds=T2()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CN{constructor(){this.Wr=new Gm,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Gm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo=null;function Qu(){return Bo===null?Bo=268435456+Math.round(2147483648*Math.random()):Bo++,"0x"+Bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class DN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=Qu(),a=this.Io(e,n);D("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(D("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw hi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ki,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=AN[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=Qu();return new Promise((o,a)=>{const l=new FC;l.setWithCredentials(!0),l.listenOnce($C.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qu.NO_ERROR:const c=l.getResponseJson();D($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case qu.TIMEOUT:D($e,`RPC '${e}' ${s} timed out`),a(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case qu.HTTP_ERROR:const f=l.getStatus();if(D($e,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(E)>=0?E:S.UNKNOWN}(g.status);a(new O(v,g.message))}else a(new O(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(S.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{D($e,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);D($e,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Qu(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PC(),a=OC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new MC({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");D($e,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let f=!1,d=!1;const g=new RN({io:y=>{d?D($e,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(f||(D($e,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),D($e,`RPC '${e}' stream ${i} sending:`,y),c.send(y))},ro:()=>c.close()}),v=(y,E,p)=>{y.listen(E,h=>{try{p(h)}catch(m){setTimeout(()=>{throw m},0)}})};return v(c,Vo.EventType.OPEN,()=>{d||D($e,`RPC '${e}' stream ${i} transport opened.`)}),v(c,Vo.EventType.CLOSE,()=>{d||(d=!0,D($e,`RPC '${e}' stream ${i} transport closed`),g.fo())}),v(c,Vo.EventType.ERROR,y=>{d||(d=!0,hi($e,`RPC '${e}' stream ${i} transport errored:`,y),g.fo(new O(S.UNAVAILABLE,"The operation could not be completed")))}),v(c,Vo.EventType.MESSAGE,y=>{var E;if(!d){const p=y.data[0];ee(!!p);const h=p,m=h.error||((E=h[0])===null||E===void 0?void 0:E.error);if(m){D($e,`RPC '${e}' stream ${i} received error:`,m);const w=m.status;let I=function(R){const x=fe[R];if(x!==void 0)return z1(x)}(w),N=m.message;I===void 0&&(I=S.INTERNAL,N="Unknown error status: "+w+" with message "+m.message),d=!0,g.fo(new O(I,N)),c.close()}else D($e,`RPC '${e}' stream ${i} received:`,p),g._o(p)}}),v(a,LC.STAT_EVENT,y=>{y.stat===km.PROXY?D($e,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===km.NOPROXY&&D($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Xu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new b2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Y1(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xN extends J1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=K2(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Ut(s.readTime):F.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=_h(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=gh(a)?{documents:G2(i,a)}:{query:Q2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=B1(i,s.resumeToken);const l=wh(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(F.min())>0){o.readTime=rl(i,s.snapshotVersion.toTimestamp());const l=wh(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=Y2(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=_h(this.serializer),n.removeTarget=e,this.zo(n)}}class PN extends J1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=q2(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.uu(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=_h(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>W2(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(S.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(S.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class $N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(rn(n),this.wu=!1):D("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Ir(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.Au.add(4),await ho(l),l.Pu.set("Unknown"),l.Au.delete(4),await Ql(l)}(this))})}),this.Pu=new $N(r,i)}}async function Ql(t){if(Ir(t))for(const e of t.Ru)await e(!0)}async function ho(t){for(const e of t.Ru)await e(!1)}function Z1(t,e){const n=U(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),vf(n)?yf(n):Ni(n).Uo()&&gf(n,e))}function ew(t,e){const n=U(t),r=Ni(n);n.Eu.delete(e),r.Uo()&&tw(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Ir(n)&&n.Pu.set("Unknown"))}function gf(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ni(t).nu(e)}function tw(t,e){t.bu.Lt(e),Ni(t).su(e)}function yf(t){t.bu=new U2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Ni(t).start(),t.Pu.mu()}function vf(t){return Ir(t)&&!Ni(t).qo()&&t.Eu.size>0}function Ir(t){return U(t).Au.size===0}function nw(t){t.bu=void 0}async function MN(t){t.Eu.forEach((e,n)=>{gf(t,e)})}async function FN(t,e){nw(t),vf(t)?(t.Pu.pu(e),yf(t)):t.Pu.set("Unknown")}async function UN(t,e,n){if(t.Pu.set("Online"),e instanceof b1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await il(t,r)}else if(e instanceof ua?t.bu.Wt(e):e instanceof j1?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(F.min()))try{const r=await X1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(He.EMPTY_BYTE_STRING,u.snapshotVersion)),tw(i,a);const c=new Sn(u.target,a,l,u.sequenceNumber);gf(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await il(t,r)}}async function il(t,e,n){if(!lo(e))throw e;t.Au.add(1),await ho(t),t.Pu.set("Offline"),n||(n=()=>X1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Ql(t)})}function rw(t,e){return e().catch(n=>il(t,n,e))}async function Xl(t){const e=U(t),n=zn(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;VN(e);)try{const i=await TN(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,zN(e,i)}catch(i){await il(e,i)}iw(e)&&sw(e)}function VN(t){return Ir(t)&&t.Tu.length<10}function zN(t,e){t.Tu.push(e);const n=zn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function iw(t){return Ir(t)&&!zn(t).qo()&&t.Tu.length>0}function sw(t){zn(t).start()}async function jN(t){zn(t).au()}async function bN(t){const e=zn(t);for(const n of t.Tu)e.ou(n.mutations)}async function BN(t,e,n){const r=t.Tu.shift(),i=uf.from(r,e,n);await rw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xl(t)}async function HN(t,e){e&&zn(t).ru&&await async function(n,r){if(i=r.code,L2(i)&&i!==S.ABORTED){const s=n.Tu.shift();zn(n).Go(),await rw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xl(n)}var i}(t,e),iw(t)&&sw(t)}async function Xm(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Ir(n);n.Au.add(3),await ho(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Ql(n)}async function KN(t,e){const n=U(t);e?(n.Au.delete(2),await Ql(n)):e||(n.Au.add(2),await ho(n),n.Pu.set("Unknown"))}function Ni(t){return t.Vu||(t.Vu=function(e,n,r){const i=U(e);return i.lu(),new xN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:MN.bind(null,t),co:FN.bind(null,t),eu:UN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),vf(t)?yf(t):t.Pu.set("Unknown")):(await t.Vu.stop(),nw(t))})),t.Vu}function zn(t){return t.Su||(t.Su=function(e,n,r){const i=U(e);return i.lu(),new PN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:jN.bind(null,t),co:HN.bind(null,t),cu:bN.bind(null,t),uu:BN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Xl(t)):(await t.Su.stop(),t.Tu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new wf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ef(t,e){if(rn("AsyncQueue",`${e}: ${t}`),lo(t))return new O(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=Wi(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.Du=new le(P.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):$():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gi(e,n,ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.xu=void 0,this.listeners=[]}}class qN{constructor(){this.queries=new Ci(e=>N1(e),Bl),this.onlineState="Unknown",this.Nu=new Set}}async function GN(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new WN),i)try{s.xu=await n.onListen(r)}catch(o){const a=Ef(o,`Initialization of query '${vh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Sf(n)}async function QN(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function XN(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Sf(n)}function YN(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Sf(t){t.Nu.forEach(e=>{e.next()})}class JN{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.key=e}}class aw{constructor(e){this.key=e}}class ZN{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=b(),this.mutatedKeys=b(),this.Zu=A1(e),this.tc=new ei(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Ym,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const d=i.get(c),g=Hl(this.query,f)?f:null,v=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?v!==y&&(r.track({type:3,doc:g}),E=!0):this.ic(d,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.Zu(g,l)>0||u&&this.Zu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(f,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(f)-g(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new gi(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Ym,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=b(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new aw(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new ow(r))}),n}ac(e){this.Ju=e.sr,this.Xu=b();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return gi.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class eA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tA{constructor(e){this.key=e,this.lc=!1}}class nA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Ci(a=>N1(a),Bl),this._c=new Map,this.wc=new Set,this.mc=new le(P.comparator),this.gc=new Map,this.yc=new ff,this.Ic={},this.Tc=new Map,this.Ec=mi.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function rA(t,e){const n=fA(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await IN(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await iA(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Z1(n.remoteStore,o)}return i}async function iA(t,e,n,r,i){t.Rc=(f,d,g)=>async function(v,y,E,p){let h=y.view.nc(E);h.ji&&(h=await qm(v.localStore,y.query,!1).then(({documents:I})=>y.view.nc(I,h)));const m=p&&p.targetChanges.get(y.targetId),w=y.view.applyChanges(h,v.isPrimaryClient,m);return Zm(v,y.targetId,w.uc),w.snapshot}(t,f,d,g);const s=await qm(t.localStore,e,!0),o=new ZN(e,s.sr),a=o.nc(s.documents),l=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Zm(t,n,u.uc);const c=new eA(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function sA(t,e){const n=U(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Bl(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Th(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ew(n.remoteStore,r.targetId),Ih(n,r.targetId)}).catch(ao)):(Ih(n,r.targetId),await Th(n.localStore,r.targetId,!0))}async function oA(t,e,n){const r=pA(t);try{const i=await function(s,o){const a=U(s),l=we.now(),u=o.reduce((d,g)=>d.add(g.key),b());let c,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=on(),v=b();return a.Xi.getEntries(d,u).next(y=>{g=y,g.forEach((E,p)=>{p.isValidDocument()||(v=v.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{c=y;const E=[];for(const p of o){const h=D2(p,c.get(p.key).overlayedDocument);h!=null&&E.push(new Wn(p.key,h,w1(h.value.mapValue),Ct.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(y=>{f=y;const E=y.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,y.batchId,E)})}).then(()=>({batchId:f.batchId,changes:D1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new le(q)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await fo(r,i.changes),await Xl(r.remoteStore)}catch(i){const s=Ef(i,"Failed to persist write");n.reject(s)}}async function lw(t,e){const n=U(t);try{const r=await SN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?ee(o.lc):i.removedDocuments.size>0&&(ee(o.lc),o.lc=!1))}),await fo(n,r,e)}catch(r){await ao(r)}}function Jm(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const f of c.listeners)f.ku(o)&&(l=!0)}),l&&Sf(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aA(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new le(P.comparator);o=o.insert(s,Fe.newNoDocument(s,F.min()));const a=b().add(s),l=new ql(F.min(),new Map,new le(q),o,a);await lw(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),_f(r)}else await Th(r.localStore,e,!1).then(()=>Ih(r,e,n)).catch(ao)}async function lA(t,e){const n=U(t),r=e.batch.batchId;try{const i=await EN(n.localStore,e);cw(n,r,null),uw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fo(n,i)}catch(i){await ao(i)}}async function uA(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ee(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);cw(r,e,n),uw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fo(r,i)}catch(i){await ao(i)}}function uw(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function cw(t,e,n){const r=U(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||hw(t,r)})}function hw(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(ew(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),_f(t))}function Zm(t,e,n){for(const r of n)r instanceof ow?(t.yc.addReference(r.key,e),cA(t,r)):r instanceof aw?(D("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||hw(t,r.key)):$()}function cA(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(D("SyncEngine","New document in limbo: "+n),t.wc.add(r),_f(t))}function _f(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new P(ie.fromString(e)),r=t.Ec.next();t.gc.set(r,new tA(n)),t.mc=t.mc.insert(n,r),Z1(t.remoteStore,new Sn(sn(C1(n.path)),r,"TargetPurposeLimboResolution",tf.ct))}}async function fo(t,e,n){const r=U(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=mf.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,f=>T.forEach(f.$i,d=>u.persistence.referenceDelegate.addReference(c,f.targetId,d)).next(()=>T.forEach(f.Fi,d=>u.persistence.referenceDelegate.removeReference(c,f.targetId,d)))))}catch(c){if(!lo(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const d=u.Hi.get(f),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Hi=u.Hi.insert(f,v)}}}(r.localStore,s))}async function hA(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await Q1(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new O(S.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fo(n,r.tr)}}function dA(t,e){const n=U(t),r=n.gc.get(e);if(r&&r.lc)return b().add(r.key);{let i=b();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function fA(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aA.bind(null,e),e.fc.eu=XN.bind(null,e.eventManager),e.fc.vc=YN.bind(null,e.eventManager),e}function pA(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uA.bind(null,e),e}class eg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return wN(this.persistence,new yN,e.initialUser,this.serializer)}createPersistence(e){return new mN(pf.js,this.serializer)}createSharedClientState(e){return new CN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hA.bind(null,this.syncEngine),await KN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qN}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new DN(i));var i;return function(s,o,a,l){return new ON(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Jm(this.syncEngine,a,0),o=Qm.D()?new Qm:new NN,new LN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new nA(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);D("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await ho(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=g1.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ef(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yu(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Q1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wA(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Xm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Xm(e.remoteStore,s)),t._onlineComponents=e}function vA(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vA(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await Yu(t,new eg)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Yu(t,new eg);return t._offlineComponents}async function dw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await tg(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await tg(t,new mA))),t._onlineComponents}function EA(t){return dw(t).then(e=>e.syncEngine)}async function SA(t){const e=await dw(t),n=e.eventManager;return n.onListen=rA.bind(null,e.syncEngine),n.onUnlisten=sA.bind(null,e.syncEngine),n}function _A(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new gA({next:f=>{s.enqueueAndForget(()=>QN(i,c)),f.fromCache&&a.source==="server"?l.reject(new O(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new JN(o,u,{includeMetadataChanges:!0,Uu:!0});return GN(i,c)}(await SA(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e,n){if(!n)throw new O(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TA(t,e,n,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rg(t){if(!P.isDocumentKey(t))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ig(t){if(P.isDocumentKey(t))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(t);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new VC;switch(n.type){case"firstParty":return new BC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ng.get(e);n&&(D("ComponentProvider","Removing Datastore"),ng.delete(e),n.terminate())}(this),Promise.resolve()}}function IA(t,e,n,r={}){var i;const s=(t=wr(t,Yl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&hi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Le.MOCK_USER;else{o=p_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(l)}t._authCredentials=new zC(new m1(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Jl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jl(this.firestore,e,this._query)}}class $n extends Jl{constructor(e,n,r){super(e,n,C1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new P(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function kA(t,e,...n){if(t=nt(t),fw("collection","path",e),t instanceof Yl){const r=ie.fromString(e,...n);return ig(r),new $n(t,null,r)}{if(!(t instanceof gt||t instanceof $n))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return ig(r),new $n(t.firestore,null,r)}}function kh(t,e,...n){if(t=nt(t),arguments.length===1&&(e=g1.A()),fw("doc","path",e),t instanceof Yl){const r=ie.fromString(e,...n);return rg(r),new gt(t,null,new P(r))}{if(!(t instanceof gt||t instanceof $n))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return rg(r),new gt(t.firestore,t instanceof $n?t.converter:null,new P(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Y1(this,"async_queue_retry"),this.Yc=()=>{const n=Xu();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Xu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new On;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!lo(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=wf.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&$()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class po extends Yl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new CA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mw(this),this._firestoreClient.terminate()}}function NA(t,e){const n=typeof t=="object"?t:Rv(),r=typeof t=="string"?t:e||"(default)",i=Id(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=h_("firestore");s&&IA(i,...s)}return i}function pw(t){return t._firestoreClient||mw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mw(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new t2(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new yA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yi(He.fromBase64String(e))}catch(n){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yi(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=/^__.*__$/;class RA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}class gw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Cf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return sl(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(yw(this.ua)&&AA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class DA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gl(e)}ga(e,n,r,i=!1){return new Cf({ua:e,methodName:n,ma:r,path:Ue.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vw(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new DA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xA(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);Nf("Data must be an object, but it was:",o,r);const a=ww(r,o);let l,u;if(s.merge)l=new st(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const d=Ch(e,f,n);if(!o.contains(d))throw new O(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Sw(c,d)||c.push(d)}l=new st(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new RA(new Ye(a),l,u)}class eu extends If{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eu}}function PA(t,e,n,r){const i=t.ga(1,e,n);Nf("Data must be an object, but it was:",i,r);const s=[],o=Ye.empty();Tr(r,(l,u)=>{const c=Af(e,l,n);u=nt(u);const f=i.fa(c);if(u instanceof eu)s.push(c);else{const d=tu(u,f);d!=null&&(s.push(c),o.set(c,d))}});const a=new st(s);return new gw(o,a,i.fieldTransforms)}function OA(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Ch(e,r,n)],l=[i];if(s.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ch(e,s[d])),l.push(s[d+1]);const u=[],c=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!Sw(u,a[d])){const g=a[d];let v=l[d];v=nt(v);const y=o.fa(g);if(v instanceof eu)u.push(g);else{const E=tu(v,y);E!=null&&(u.push(g),c.set(g,E))}}const f=new st(u);return new gw(c,f,o.fieldTransforms)}function tu(t,e){if(Ew(t=nt(t)))return Nf("Unsupported field value:",e,t),ww(t,e);if(t instanceof If)return function(n,r){if(!yw(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=tu(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return I2(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=we.fromDate(n);return{timestampValue:rl(r.serializer,i)}}if(n instanceof we){const i=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rl(r.serializer,i)}}if(n instanceof kf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yi)return{bytesValue:B1(r.serializer,n._byteString)};if(n instanceof gt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:df(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Tf(n)}`)}(t,e)}function ww(t,e){const n={};return y1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(t,(r,i)=>{const s=tu(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ew(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof kf||t instanceof yi||t instanceof gt||t instanceof If)}function Nf(t,e,n){if(!Ew(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Tf(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Ch(t,e,n){if((e=nt(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return Af(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const $A=new RegExp("[~\\*/\\[\\]]");function Af(t,e,n){if(e.search($A)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zl(...e.split("."))._internalPath}catch{throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(S.INVALID_ARGUMENT,a+t+l)}function Sw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LA extends _w{data(){return super.data()}}function Tw(t,e){return typeof e=="string"?Af(t,e):e instanceof Zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FA{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Tr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new kf(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ls(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);ee(G1(r));const i=new Ms(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VA extends _w{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ca extends VA{data(e={}){return super.data(e)}}class zA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ca(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ho(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ca(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ho(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:jA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class bA extends FA{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function BA(t){t=wr(t,Jl);const e=wr(t.firestore,po),n=pw(e),r=new bA(e);return MA(t._query),_A(n,t._query).then(i=>new zA(e,r,t,i))}function HA(t,e,n,...r){t=wr(t,gt);const i=wr(t.firestore,po),s=vw(i);let o;return o=typeof(e=nt(e))=="string"||e instanceof Zl?OA(s,"updateDoc",t._key,e,n,r):PA(s,"updateDoc",t._key,e),Rf(i,[o.toMutation(t._key,Ct.exists(!0))])}function KA(t){return Rf(wr(t.firestore,po),[new lf(t._key,Ct.none())])}function WA(t,e){const n=wr(t.firestore,po),r=kh(t),i=UA(t.converter,e);return Rf(n,[xA(vw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function Rf(t,e){return function(n,r){const i=new On;return n.asyncQueue.enqueueAndForget(async()=>oA(await EA(n),r,i)),i.promise}(pw(t),e)}(function(t,e=!0){(function(n){ki=n})(_i),li(new fr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new po(new jC(n.getProvider("auth-internal")),new KC(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pn(Cm,"3.11.0",t),Pn(Cm,"3.11.0","esm2017")})();const qA={apiKey:"AIzaSyBlNHF6WqcZAJVykZt4aO4LfChPXqydthE",authDomain:"nhjsi-248e5.firebaseapp.com",projectId:"nhjsi-248e5",storageBucket:"nhjsi-248e5.appspot.com",messagingSenderId:"719735440795",appId:"1:719735440795:web:223e690531e36938c7cd3e"},Iw=Av(qA);$k(Iw);const Ju=NA(Iw),og=t=>{let e;const n=new Set,r=(l,u)=>{const c=typeof l=="function"?l(e):l;if(!Object.is(c,e)){const f=e;e=u??typeof c!="object"?c:Object.assign({},e,c),n.forEach(d=>d(e,f))}},i=()=>e,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{({BASE_URL:"/song-db/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,i,a),a},GA=t=>t?og(t):og;var kw={exports:{}},Cw={},Nw={exports:{}},Aw={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vi=Ln;function QA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var XA=typeof Object.is=="function"?Object.is:QA,YA=vi.useState,JA=vi.useEffect,ZA=vi.useLayoutEffect,eR=vi.useDebugValue;function tR(t,e){var n=e(),r=YA({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return ZA(function(){i.value=n,i.getSnapshot=e,Zu(i)&&s({inst:i})},[t,n,e]),JA(function(){return Zu(i)&&s({inst:i}),t(function(){Zu(i)&&s({inst:i})})},[t]),eR(n),n}function Zu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!XA(t,n)}catch{return!0}}function nR(t,e){return e()}var rR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?nR:tR;Aw.useSyncExternalStore=vi.useSyncExternalStore!==void 0?vi.useSyncExternalStore:rR;Nw.exports=Aw;var iR=Nw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu=Ln,sR=iR;function oR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var aR=typeof Object.is=="function"?Object.is:oR,lR=sR.useSyncExternalStore,uR=nu.useRef,cR=nu.useEffect,hR=nu.useMemo,dR=nu.useDebugValue;Cw.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=uR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=hR(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return f=v}return f=g}if(v=f,aR(c,g))return v;var y=r(g);return i!==void 0&&i(v,y)?v:(c=g,f=y)}var u=!1,c,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=lR(t,s[0],s[1]);return cR(function(){o.hasValue=!0,o.value=a},[a]),dR(a),a};kw.exports=Cw;var fR=kw.exports;const pR=Pw(fR),{useSyncExternalStoreWithSelector:mR}=pR;function gR(t,e=t.getState,n){const r=mR(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return Ln.useDebugValue(r),r}const ag=t=>{({BASE_URL:"/song-db/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?GA(t):t,n=(r,i)=>gR(e,r,i);return Object.assign(n,e),n},yR=t=>t?ag(t):ag;function Rw(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const zs=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return zs(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return zs(r)(n)}}}},vR=(t,e)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:E=>E,version:0,merge:(E,p)=>({...p,...E}),...e},o=!1;const a=new Set,l=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return t((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...E)},r,i);const c=zs(s.serialize),f=()=>{const E=s.partialize({...r()});let p;const h=c({state:E,version:s.version}).then(m=>u.setItem(s.name,m)).catch(m=>{p=m});if(p)throw p;return h},d=i.setState;i.setState=(E,p)=>{d(E,p),f()};const g=t((...E)=>{n(...E),f()},r,i);let v;const y=()=>{var E;if(!u)return;o=!1,a.forEach(h=>h(r()));const p=((E=s.onRehydrateStorage)==null?void 0:E.call(s,r()))||void 0;return zs(u.getItem.bind(u))(s.name).then(h=>{if(h)return s.deserialize(h)}).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==s.version){if(s.migrate)return s.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var m;return v=s.merge(h,(m=r())!=null?m:g),n(v,!0),f()}).then(()=>{p==null||p(v,void 0),o=!0,l.forEach(h=>h(v))}).catch(h=>{p==null||p(void 0,h)})};return i.persist={setOptions:E=>{s={...s,...E},E.getStorage&&(u=E.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:E=>(a.add(E),()=>{a.delete(E)}),onFinishHydration:E=>(l.add(E),()=>{l.delete(E)})},y(),v||g},wR=(t,e)=>(n,r,i)=>{let s={storage:Rw(()=>localStorage),partialize:y=>y,version:0,merge:(y,E)=>({...E,...y}),...e},o=!1;const a=new Set,l=new Set;let u=s.storage;if(!u)return t((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...y)},r,i);const c=()=>{const y=s.partialize({...r()});return u.setItem(s.name,{state:y,version:s.version})},f=i.setState;i.setState=(y,E)=>{f(y,E),c()};const d=t((...y)=>{n(...y),c()},r,i);let g;const v=()=>{var y,E;if(!u)return;o=!1,a.forEach(h=>{var m;return h((m=r())!=null?m:d)});const p=((E=s.onRehydrateStorage)==null?void 0:E.call(s,(y=r())!=null?y:d))||void 0;return zs(u.getItem.bind(u))(s.name).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==s.version){if(s.migrate)return s.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var m;return g=s.merge(h,(m=r())!=null?m:d),n(g,!0),c()}).then(()=>{p==null||p(g,void 0),g=r(),o=!0,l.forEach(h=>h(g))}).catch(h=>{p==null||p(void 0,h)})};return i.persist={setOptions:y=>{s={...s,...y},y.storage&&(u=y.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>o,onHydrate:y=>(a.add(y),()=>{a.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},s.skipHydration||v(),g||d},ER=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?(({BASE_URL:"/song-db/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),vR(t,e)):wR(t,e),SR=ER,Dw=yR(SR(t=>({selectedItem:{},dataStorage:[],setSelectedItem:e=>t({selectedItem:e}),setDataStorage:e=>t({dataStorage:e})}),{name:"firebaseStorage",storage:Rw(()=>localStorage)})),_R=t=>{const{addSong:e,updateSong:n,deleteSong:r}=t,[i,s]=Ln.useState({name:"",album:"",singer:"",release:0}),{selectedItem:o,setSelectedItem:a}=Dw();return Ln.useEffect(()=>{o&&s(o)},[o]),te.jsxs("div",{className:"w-screen h-screen flex flex-1 justify-center items-center flex-col",children:[te.jsx("label",{children:"Song name"}),te.jsx("input",{type:"text",className:"border-black border-2",value:i.name||"",onChange:l=>s({...i,name:l.target.value})}),te.jsx("label",{children:"Album"}),te.jsx("input",{type:"text",className:"border-black border-2",value:i.album||"",onChange:l=>s({...i,album:l.target.value})}),te.jsx("label",{children:"Singer"}),te.jsx("input",{type:"text",className:"border-black border-2",value:i.singer||"",onChange:l=>s({...i,singer:l.target.value})}),te.jsx("label",{children:"Release"}),te.jsx("input",{type:"number",min:"1900",max:"2099",step:"1",className:"border-black border-2",value:i.release||"",onChange:l=>s({...i,release:l.target.value})}),te.jsxs("div",{className:"w-[400px] h-[200px] flex flex-1 justify-around my-[20px]",children:[te.jsx("button",{onClick:()=>{a({})},children:"Cancel editing"}),te.jsx("button",{onClick:()=>{Object.keys(o)!=0?(console.log("updated song"),n(o.id,i)):(console.log("added song"),e(i)),a({})},children:Object.keys(o)!=0?"Update song":"Add new song"}),te.jsx("button",{onClick:()=>{r(o.id)},children:"Delete song"})]})]})};function TR(){const{dataStorage:t,setDataStorage:e,setSelectedItem:n}=Dw(),r=kA(Ju,"song"),i=async()=>{const u=(await BA(r)).docs.map(c=>({...c.data(),id:c.id}));e(u)};Ln.useEffect(()=>{i()},[]);const s=async l=>{await WA(r,l),i()},o=async(l,u)=>{await HA(kh(Ju,"song",l),u),i()},a=async l=>{await KA(kh(Ju,"song",l)),i()};return te.jsxs("div",{className:"w-screen h-screen flex flex-1 justify-center items-center flex-col",children:[te.jsx(_R,{addSong:s,updateSong:o,deleteSong:a}),te.jsx("h1",{children:"Click at a song block to edit its information"}),t==null?void 0:t.map((l,u)=>te.jsxs("div",{className:"my-[30px] flex flex-1 justify-center items-center flex-col",onClick:()=>{n(l)},children:[te.jsxs("h1",{children:["Song: ",l.name]}),te.jsxs("h1",{children:["Album: ",l.album]}),te.jsxs("h1",{children:["Singer: ",l.singer]}),te.jsxs("h1",{children:["Release: ",l.release]})]},l.id))]})}ec.createRoot(document.getElementById("root")).render(te.jsx(te.Fragment,{children:te.jsx(TR,{})}));
