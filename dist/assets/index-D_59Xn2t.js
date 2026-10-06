var Hx=Object.defineProperty;var Vx=(t,e,n)=>e in t?Hx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Je=(t,e,n)=>Vx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Gx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z1={exports:{}},Ru={},J1={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),jx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),$x=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),qx=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Zx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),Qp=Symbol.iterator;function e3(t){return t===null||typeof t!="object"?null:(t=Qp&&t[Qp]||t["@@iterator"],typeof t=="function"?t:null)}var Q1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ev=Object.assign,tv={};function Do(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Q1}Do.prototype.isReactComponent={};Do.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Do.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nv(){}nv.prototype=Do.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Q1}var Lh=bh.prototype=new nv;Lh.constructor=bh;ev(Lh,Do.prototype);Lh.isPureReactComponent=!0;var em=Array.isArray,iv=Object.prototype.hasOwnProperty,Dh={current:null},rv={key:!0,ref:!0,__self:!0,__source:!0};function sv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iv.call(e,i)&&!rv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qa,type:t,key:s,ref:o,props:r,_owner:Dh.current}}function t3(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function n3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tm=/\/+/g;function rf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n3(""+t.key):e.toString(36)}function pc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qa:case Wx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+rf(o,0):i,em(r)?(n="",t!=null&&(n=t.replace(tm,"$&/")+"/"),pc(r,e,n,"",function(c){return c})):r!=null&&(Ih(r)&&(r=t3(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",em(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+rf(s,a);o+=pc(s,e,n,l,r)}else if(l=e3(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+rf(s,a++),o+=pc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var i=[],r=0;return pc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},mc={transition:null},r3={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:mc,ReactCurrentOwner:Dh};function ov(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!Ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Do;Xe.Fragment=jx;Xe.Profiler=$x;Xe.PureComponent=bh;Xe.StrictMode=Xx;Xe.Suspense=Zx;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r3;Xe.act=ov;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ev({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)iv.call(e,l)&&!rv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qa,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yx,_context:t},t.Consumer=t};Xe.createElement=sv;Xe.createFactory=function(t){var e=sv.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Kx,render:t}};Xe.isValidElement=Ih;Xe.lazy=function(t){return{$$typeof:Qx,_payload:{_status:-1,_result:t},_init:i3}};Xe.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=mc.transition;mc.transition={};try{t()}finally{mc.transition=e}};Xe.unstable_act=ov;Xe.useCallback=function(t,e){return un.current.useCallback(t,e)};Xe.useContext=function(t){return un.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return un.current.useEffect(t,e)};Xe.useId=function(){return un.current.useId()};Xe.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return un.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Xe.useRef=function(t){return un.current.useRef(t)};Xe.useState=function(t){return un.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return un.current.useTransition()};Xe.version="18.3.1";J1.exports=Xe;var He=J1.exports;const s3=Gx(He);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o3=He,a3=Symbol.for("react.element"),l3=Symbol.for("react.fragment"),c3=Object.prototype.hasOwnProperty,u3=o3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f3={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)c3.call(e,i)&&!f3.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:a3,type:t,key:s,ref:o,props:r,_owner:u3.current}}Ru.Fragment=l3;Ru.jsx=av;Ru.jsxs=av;Z1.exports=Ru;var D=Z1.exports,x0={},lv={exports:{}},Pn={},cv={exports:{}},uv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,K){var $=L.length;L.push(K);e:for(;0<$;){var ne=$-1>>>1,ye=L[ne];if(0<r(ye,K))L[ne]=K,L[$]=ye,$=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var K=L[0],$=L.pop();if($!==K){L[0]=$;e:for(var ne=0,ye=L.length,Ie=ye>>>1;ne<Ie;){var Y=2*(ne+1)-1,ee=L[Y],ce=Y+1,fe=L[ce];if(0>r(ee,$))ce<ye&&0>r(fe,ee)?(L[ne]=fe,L[ce]=$,ne=ce):(L[ne]=ee,L[Y]=$,ne=Y);else if(ce<ye&&0>r(fe,$))L[ne]=fe,L[ce]=$,ne=ce;else break e}}return K}function r(L,K){var $=L.sortIndex-K.sortIndex;return $!==0?$:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,m=!1,g=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=L)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(L){if(x=!1,v(L),!g)if(n(l)!==null)g=!0,U(C);else{var K=n(c);K!==null&&q(S,K.startTime-L)}}function C(L,K){g=!1,x&&(x=!1,d(P),P=-1),m=!0;var $=h;try{for(v(K),f=n(l);f!==null&&(!(f.expirationTime>K)||L&&!M());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ye=ne(f.expirationTime<=K);K=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&i(l),v(K)}else i(l);f=n(l)}if(f!==null)var Ie=!0;else{var Y=n(c);Y!==null&&q(S,Y.startTime-K),Ie=!1}return Ie}finally{f=null,h=$,m=!1}}var A=!1,w=null,P=-1,k=5,y=-1;function M(){return!(t.unstable_now()-y<k)}function j(){if(w!==null){var L=t.unstable_now();y=L;var K=!0;try{K=w(!0,L)}finally{K?B():(A=!1,w=null)}}else A=!1}var B;if(typeof _=="function")B=function(){_(j)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,I=V.port2;V.port1.onmessage=j,B=function(){I.postMessage(null)}}else B=function(){p(j,0)};function U(L){w=L,A||(A=!0,B())}function q(L,K){P=p(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,U(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var $=h;h=K;try{return L()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=h;h=L;try{return K()}finally{h=$}},t.unstable_scheduleCallback=function(L,K,$){var ne=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,L={id:u++,callback:K,priorityLevel:L,startTime:$,expirationTime:ye,sortIndex:-1},$>ne?(L.sortIndex=$,e(c,L),n(l)===null&&L===n(c)&&(x?(d(P),P=-1):x=!0,q(S,$-ne))):(L.sortIndex=ye,e(l,L),g||m||(g=!0,U(C))),L},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(L){var K=h;return function(){var $=h;h=K;try{return L.apply(this,arguments)}finally{h=$}}}})(uv);cv.exports=uv;var d3=cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h3=He,Rn=d3;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fv=new Set,Ca={};function hs(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(Ca[t]=e,t=0;t<e.length;t++)fv.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y0=Object.prototype.hasOwnProperty,p3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nm={},im={};function m3(t){return y0.call(im,t)?!0:y0.call(nm,t)?!1:p3.test(t)?im[t]=!0:(nm[t]=!0,!1)}function g3(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v3(t,e,n,i){if(e===null||typeof e>"u"||g3(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function Nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,Nh);jt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,Nh);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,Nh);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v3(e,n,r,i)&&(n=null),i||r===null?m3(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=h3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),S0=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),M0=Symbol.for("react.suspense"),E0=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),pv=Symbol.for("react.offscreen"),rm=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,sf;function ia(t){if(sf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sf=e&&e[1]||""}return`
`+sf+t}var of=!1;function af(t,e){if(!t||of)return"";of=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{of=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function _3(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=af(t.type,!1),t;case 11:return t=af(t.type.render,!1),t;case 1:return t=af(t.type,!0),t;default:return""}}function T0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bs:return"Fragment";case ks:return"Portal";case S0:return"Profiler";case Oh:return"StrictMode";case M0:return"Suspense";case E0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hv:return(t.displayName||"Context")+".Consumer";case dv:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kh:return e=t.displayName||null,e!==null?e:T0(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return T0(t(e))}catch{}}return null}function x3(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return T0(e);case 8:return e===Oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y3(t){var e=mv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=y3(t))}function gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function w0(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vv(t,e){e=e.checked,e!=null&&Fh(t,"checked",e,!1)}function A0(t,e){vv(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?C0(t,e.type,n):e.hasOwnProperty("defaultValue")&&C0(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function C0(t,e,n){(e!=="number"||Oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function R0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ra(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function _v(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function P0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pl,yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S3=["Webkit","ms","Moz","O"];Object.keys(pa).forEach(function(t){S3.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pa[e]=pa[t]})});function Sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pa.hasOwnProperty(t)&&pa[t]?(""+e).trim():e+"px"}function Mv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M3=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function b0(t,e){if(e){if(M3[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function L0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D0=null;function Bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var I0=null,io=null,ro=null;function cm(t){if(t=nl(t)){if(typeof I0!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Iu(e),I0(t.stateNode,t.type,e))}}function Ev(t){io?ro?ro.push(t):ro=[t]:io=t}function Tv(){if(io){var t=io,e=ro;if(ro=io=null,cm(t),e)for(t=0;t<e.length;t++)cm(e[t])}}function wv(t,e){return t(e)}function Av(){}var lf=!1;function Cv(t,e,n){if(lf)return t(e,n);lf=!0;try{return wv(t,e,n)}finally{lf=!1,(io!==null||ro!==null)&&(Av(),Tv())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var U0=!1;if(Vi)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){U0=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{U0=!1}function E3(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ma=!1,zc=null,kc=!1,N0=null,T3={onError:function(t){ma=!0,zc=t}};function w3(t,e,n,i,r,s,o,a,l){ma=!1,zc=null,E3.apply(T3,arguments)}function A3(t,e,n,i,r,s,o,a,l){if(w3.apply(this,arguments),ma){if(ma){var c=zc;ma=!1,zc=null}else throw Error(re(198));kc||(kc=!0,N0=c)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function um(t){if(ps(t)!==t)throw Error(re(188))}function C3(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return um(r),t;if(s===i)return um(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Pv(t){return t=C3(t),t!==null?bv(t):null}function bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bv(t);if(e!==null)return e;t=t.sibling}return null}var Lv=Rn.unstable_scheduleCallback,fm=Rn.unstable_cancelCallback,R3=Rn.unstable_shouldYield,P3=Rn.unstable_requestPaint,Ct=Rn.unstable_now,b3=Rn.unstable_getCurrentPriorityLevel,Hh=Rn.unstable_ImmediatePriority,Dv=Rn.unstable_UserBlockingPriority,Bc=Rn.unstable_NormalPriority,L3=Rn.unstable_LowPriority,Iv=Rn.unstable_IdlePriority,Pu=null,Si=null;function D3(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(Pu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:N3,I3=Math.log,U3=Math.LN2;function N3(t){return t>>>=0,t===0?32:31-(I3(t)/U3|0)|0}var ml=64,gl=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=sa(a):(s&=o,s!==0&&(i=sa(s)))}else o=n&~r,o!==0?i=sa(o):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function F3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O3(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=F3(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function F0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uv(){var t=ml;return ml<<=1,!(ml&4194240)&&(ml=64),t}function cf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function el(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function z3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Nv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fv,Gh,Ov,zv,kv,O0=!1,vl=[],pr=null,mr=null,gr=null,ba=new Map,La=new Map,ar=[],k3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dm(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function Bo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&Gh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function B3(t,e,n,i,r){switch(e){case"focusin":return pr=Bo(pr,t,e,n,i,r),!0;case"dragenter":return mr=Bo(mr,t,e,n,i,r),!0;case"mouseover":return gr=Bo(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,Bo(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,La.set(s,Bo(La.get(s)||null,t,e,n,i,r)),!0}return!1}function Bv(t){var e=Yr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=Rv(n),e!==null){t.blockedOn=e,kv(t.priority,function(){Ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=z0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);D0=i,n.target.dispatchEvent(i),D0=null}else return e=nl(n),e!==null&&Gh(e),t.blockedOn=n,!1;e.shift()}return!0}function hm(t,e,n){gc(t)&&n.delete(e)}function H3(){O0=!1,pr!==null&&gc(pr)&&(pr=null),mr!==null&&gc(mr)&&(mr=null),gr!==null&&gc(gr)&&(gr=null),ba.forEach(hm),La.forEach(hm)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,O0||(O0=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,H3)))}function Da(t){function e(r){return Ho(r,t)}if(0<vl.length){Ho(vl[0],t);for(var n=1;n<vl.length;n++){var i=vl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&Ho(pr,t),mr!==null&&Ho(mr,t),gr!==null&&Ho(gr,t),ba.forEach(e),La.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Bv(n),n.blockedOn===null&&ar.shift()}var so=qi.ReactCurrentBatchConfig,Vc=!0;function V3(t,e,n,i){var r=lt,s=so.transition;so.transition=null;try{lt=1,Wh(t,e,n,i)}finally{lt=r,so.transition=s}}function G3(t,e,n,i){var r=lt,s=so.transition;so.transition=null;try{lt=4,Wh(t,e,n,i)}finally{lt=r,so.transition=s}}function Wh(t,e,n,i){if(Vc){var r=z0(t,e,n,i);if(r===null)xf(t,e,i,Gc,n),dm(t,i);else if(B3(r,t,e,n,i))i.stopPropagation();else if(dm(t,i),e&4&&-1<k3.indexOf(t)){for(;r!==null;){var s=nl(r);if(s!==null&&Fv(s),s=z0(t,e,n,i),s===null&&xf(t,e,i,Gc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xf(t,e,i,null,n)}}var Gc=null;function z0(t,e,n,i){if(Gc=null,t=Bh(i),t=Yr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gc=t,null}function Hv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b3()){case Hh:return 1;case Dv:return 4;case Bc:case L3:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var ur=null,jh=null,vc=null;function Vv(){if(vc)return vc;var t,e=jh,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return vc=r.slice(t,1<i?1-i:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function pm(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:pm,this.isPropagationStopped=pm,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=bn(Io),tl=Mt({},Io,{view:0,detail:0}),W3=bn(tl),uf,ff,Vo,bu=Mt({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$h,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(uf=t.screenX-Vo.screenX,ff=t.screenY-Vo.screenY):ff=uf=0,Vo=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),mm=bn(bu),j3=Mt({},bu,{dataTransfer:0}),X3=bn(j3),$3=Mt({},tl,{relatedTarget:0}),df=bn($3),Y3=Mt({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),q3=bn(Y3),K3=Mt({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z3=bn(K3),J3=Mt({},Io,{data:0}),gm=bn(J3),Q3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ty[t])?!!e[t]:!1}function $h(){return ny}var iy=Mt({},tl,{key:function(t){if(t.key){var e=Q3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$h,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ry=bn(iy),sy=Mt({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=bn(sy),oy=Mt({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$h}),ay=bn(oy),ly=Mt({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=bn(ly),uy=Mt({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=bn(uy),dy=[9,13,27,32],Yh=Vi&&"CompositionEvent"in window,ga=null;Vi&&"documentMode"in document&&(ga=document.documentMode);var hy=Vi&&"TextEvent"in window&&!ga,Gv=Vi&&(!Yh||ga&&8<ga&&11>=ga),_m=" ",xm=!1;function Wv(t,e){switch(t){case"keyup":return dy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function py(t,e){switch(t){case"compositionend":return jv(e);case"keypress":return e.which!==32?null:(xm=!0,_m);case"textInput":return t=e.data,t===_m&&xm?null:t;default:return null}}function my(t,e){if(Hs)return t==="compositionend"||!Yh&&Wv(t,e)?(t=Vv(),vc=jh=ur=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gv&&e.locale!=="ko"?null:e.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gy[t.type]:e==="textarea"}function Xv(t,e,n,i){Ev(i),e=Wc(e,"onChange"),0<e.length&&(n=new Xh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var va=null,Ia=null;function vy(t){i_(t,0)}function Lu(t){var e=Ws(t);if(gv(e))return t}function _y(t,e){if(t==="change")return e}var $v=!1;if(Vi){var hf;if(Vi){var pf="oninput"in document;if(!pf){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),pf=typeof Sm.oninput=="function"}hf=pf}else hf=!1;$v=hf&&(!document.documentMode||9<document.documentMode)}function Mm(){va&&(va.detachEvent("onpropertychange",Yv),Ia=va=null)}function Yv(t){if(t.propertyName==="value"&&Lu(Ia)){var e=[];Xv(e,Ia,t,Bh(t)),Cv(vy,e)}}function xy(t,e,n){t==="focusin"?(Mm(),va=e,Ia=n,va.attachEvent("onpropertychange",Yv)):t==="focusout"&&Mm()}function yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lu(Ia)}function Sy(t,e){if(t==="click")return Lu(e)}function My(t,e){if(t==="input"||t==="change")return Lu(e)}function Ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:Ey;function Ua(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!y0.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,e){var n=Em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Em(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kv(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ty(t){var e=Kv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(i!==null&&qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Tm(n,s);var o=Tm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wy=Vi&&"documentMode"in document&&11>=document.documentMode,Vs=null,k0=null,_a=null,B0=!1;function wm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;B0||Vs==null||Vs!==Oc(i)||(i=Vs,"selectionStart"in i&&qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Ua(_a,i)||(_a=i,i=Wc(k0,"onSelect"),0<i.length&&(e=new Xh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vs)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gs={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},mf={},Zv={};Vi&&(Zv=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Du(t){if(mf[t])return mf[t];if(!Gs[t])return t;var e=Gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zv)return mf[t]=e[n];return t}var Jv=Du("animationend"),Qv=Du("animationiteration"),e_=Du("animationstart"),t_=Du("transitionend"),n_=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){n_.set(t,e),hs(e,[t])}for(var gf=0;gf<Am.length;gf++){var vf=Am[gf],Ay=vf.toLowerCase(),Cy=vf[0].toUpperCase()+vf.slice(1);Pr(Ay,"on"+Cy)}Pr(Jv,"onAnimationEnd");Pr(Qv,"onAnimationIteration");Pr(e_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(t_,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Cm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A3(i,e,void 0,t),t.currentTarget=null}function i_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Cm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Cm(r,a,c),s=l}}}if(kc)throw t=N0,kc=!1,N0=null,t}function pt(t,e){var n=e[j0];n===void 0&&(n=e[j0]=new Set);var i=t+"__bubble";n.has(i)||(r_(e,t,2,!1),n.add(i))}function _f(t,e,n){var i=0;e&&(i|=4),r_(n,t,i,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[yl]){t[yl]=!0,fv.forEach(function(n){n!=="selectionchange"&&(Ry.has(n)||_f(n,!1,t),_f(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,_f("selectionchange",!1,e))}}function r_(t,e,n,i){switch(Hv(e)){case 1:var r=V3;break;case 4:r=G3;break;default:r=Wh}n=r.bind(null,e,n,t),r=void 0,!U0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Cv(function(){var c=s,u=Bh(n),f=[];e:{var h=n_.get(t);if(h!==void 0){var m=Xh,g=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":m=ry;break;case"focusin":g="focus",m=df;break;case"focusout":g="blur",m=df;break;case"beforeblur":case"afterblur":m=df;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=X3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ay;break;case Jv:case Qv:case e_:m=q3;break;case t_:m=cy;break;case"scroll":m=W3;break;case"wheel":m=fy;break;case"copy":case"cut":case"paste":m=Z3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vm}var x=(e&4)!==0,p=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=Pa(_,d),S!=null&&x.push(Fa(_,S,v)))),p)break;_=_.return}0<x.length&&(h=new m(h,g,null,n,u),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==D0&&(g=n.relatedTarget||n.fromElement)&&(Yr(g)||g[Gi]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Yr(g):null,g!==null&&(p=ps(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(x=mm,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=vm,S="onPointerLeave",d="onPointerEnter",_="pointer"),p=m==null?h:Ws(m),v=g==null?h:Ws(g),h=new x(S,_+"leave",m,n,u),h.target=p,h.relatedTarget=v,S=null,Yr(u)===c&&(x=new x(d,_+"enter",g,n,u),x.target=v,x.relatedTarget=p,S=x),p=S,m&&g)t:{for(x=m,d=g,_=0,v=x;v;v=vs(v))_++;for(v=0,S=d;S;S=vs(S))v++;for(;0<_-v;)x=vs(x),_--;for(;0<v-_;)d=vs(d),v--;for(;_--;){if(x===d||d!==null&&x===d.alternate)break t;x=vs(x),d=vs(d)}x=null}else x=null;m!==null&&Rm(f,h,m,x,!1),g!==null&&p!==null&&Rm(f,p,g,x,!0)}}e:{if(h=c?Ws(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=_y;else if(ym(h))if($v)C=My;else{C=yy;var A=xy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Sy);if(C&&(C=C(t,c))){Xv(f,C,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&C0(h,"number",h.value)}switch(A=c?Ws(c):window,t){case"focusin":(ym(A)||A.contentEditable==="true")&&(Vs=A,k0=c,_a=null);break;case"focusout":_a=k0=Vs=null;break;case"mousedown":B0=!0;break;case"contextmenu":case"mouseup":case"dragend":B0=!1,wm(f,n,u);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":wm(f,n,u)}var w;if(Yh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Hs?Wv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gv&&n.locale!=="ko"&&(Hs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Hs&&(w=Vv()):(ur=u,jh="value"in ur?ur.value:ur.textContent,Hs=!0)),A=Wc(c,P),0<A.length&&(P=new gm(P,t,null,n,u),f.push({event:P,listeners:A}),w?P.data=w:(w=jv(n),w!==null&&(P.data=w)))),(w=hy?py(t,n):my(t,n))&&(c=Wc(c,"onBeforeInput"),0<c.length&&(u=new gm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}i_(f,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=Pa(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Pa(n,s),l!=null&&o.unshift(Fa(n,l,a))):r||(l=Pa(n,s),l!=null&&o.push(Fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Py=/\r\n?/g,by=/\u0000|\uFFFD/g;function Pm(t){return(typeof t=="string"?t:""+t).replace(Py,`
`).replace(by,"")}function Sl(t,e,n){if(e=Pm(e),Pm(t)!==e&&n)throw Error(re(425))}function jc(){}var H0=null,V0=null;function G0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var W0=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(t){return bm.resolve(null).then(t).catch(Iy)}:W0;function Iy(t){setTimeout(function(){throw t})}function yf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Da(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),vi="__reactFiber$"+Uo,Oa="__reactProps$"+Uo,Gi="__reactContainer$"+Uo,j0="__reactEvents$"+Uo,Uy="__reactListeners$"+Uo,Ny="__reactHandles$"+Uo;function Yr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lm(t);t!==null;){if(n=t[vi])return n;t=Lm(t)}return e}t=n,n=t.parentNode}return null}function nl(t){return t=t[vi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Iu(t){return t[Oa]||null}var X0=[],js=-1;function br(t){return{current:t}}function gt(t){0>js||(t.current=X0[js],X0[js]=null,js--)}function dt(t,e){js++,X0[js]=t.current,t.current=e}var Ar={},en=br(Ar),gn=br(!1),ns=Ar;function po(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Xc(){gt(gn),gt(en)}function Dm(t,e,n){if(en.current!==Ar)throw Error(re(168));dt(en,e),dt(gn,n)}function s_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,x3(t)||"Unknown",r));return Mt({},n,i)}function $c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,ns=en.current,dt(en,t),dt(gn,gn.current),!0}function Im(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=s_(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,gt(gn),gt(en),dt(en,t)):gt(gn),dt(gn,n)}var Ii=null,Uu=!1,Sf=!1;function o_(t){Ii===null?Ii=[t]:Ii.push(t)}function Fy(t){Uu=!0,o_(t)}function Lr(){if(!Sf&&Ii!==null){Sf=!0;var t=0,e=lt;try{var n=Ii;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Uu=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),Lv(Hh,Lr),r}finally{lt=e,Sf=!1}}return null}var Xs=[],$s=0,Yc=null,qc=0,Nn=[],Fn=0,is=null,Ni=1,Fi="";function Hr(t,e){Xs[$s++]=qc,Xs[$s++]=Yc,Yc=t,qc=e}function a_(t,e,n){Nn[Fn++]=Ni,Nn[Fn++]=Fi,Nn[Fn++]=is,is=t;var i=Ni;t=Fi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-li(e)+r|n<<r|i,Fi=s+t}else Ni=1<<s|n<<r|i,Fi=t}function Kh(t){t.return!==null&&(Hr(t,1),a_(t,1,0))}function Zh(t){for(;t===Yc;)Yc=Xs[--$s],Xs[$s]=null,qc=Xs[--$s],Xs[$s]=null;for(;t===is;)is=Nn[--Fn],Nn[Fn]=null,Fi=Nn[--Fn],Nn[Fn]=null,Ni=Nn[--Fn],Nn[Fn]=null}var Cn=null,Tn=null,_t=!1,ii=null;function l_(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,Tn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:Ni,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,Tn=null,!0):!1;default:return!1}}function $0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Y0(t){if(_t){var e=Tn;if(e){var n=e;if(!Um(t,e)){if($0(t))throw Error(re(418));e=vr(n.nextSibling);var i=Cn;e&&Um(t,e)?l_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Cn=t)}}else{if($0(t))throw Error(re(418));t.flags=t.flags&-4097|2,_t=!1,Cn=t}}}function Nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Ml(t){if(t!==Cn)return!1;if(!_t)return Nm(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!G0(t.type,t.memoizedProps)),e&&(e=Tn)){if($0(t))throw c_(),Error(re(418));for(;e;)l_(t,e),e=vr(e.nextSibling)}if(Nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=Cn?vr(t.stateNode.nextSibling):null;return!0}function c_(){for(var t=Tn;t;)t=vr(t.nextSibling)}function mo(){Tn=Cn=null,_t=!1}function Jh(t){ii===null?ii=[t]:ii.push(t)}var Oy=qi.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fm(t){var e=t._init;return e(t._payload)}function u_(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Sr(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,S){return _===null||_.tag!==6?(_=Rf(v,d.mode,S),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,S){var C=v.type;return C===Bs?u(d,_,v.props.children,S,v.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sr&&Fm(C)===_.type)?(S=r(_,v.props),S.ref=Go(d,_,v),S.return=d,S):(S=wc(v.type,v.key,v.props,null,d.mode,S),S.ref=Go(d,_,v),S.return=d,S)}function c(d,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Pf(v,d.mode,S),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function u(d,_,v,S,C){return _===null||_.tag!==7?(_=ts(v,d.mode,S,C),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Rf(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case dl:return v=wc(_.type,_.key,_.props,null,d.mode,v),v.ref=Go(d,null,_),v.return=d,v;case ks:return _=Pf(_,d.mode,v),_.return=d,_;case sr:var S=_._init;return f(d,S(_._payload),v)}if(ra(_)||zo(_))return _=ts(_,d.mode,v,null),_.return=d,_;El(d,_)}return null}function h(d,_,v,S){var C=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return v.key===C?l(d,_,v,S):null;case ks:return v.key===C?c(d,_,v,S):null;case sr:return C=v._init,h(d,_,C(v._payload),S)}if(ra(v)||zo(v))return C!==null?null:u(d,_,v,S,null);El(d,v)}return null}function m(d,_,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,a(_,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case dl:return d=d.get(S.key===null?v:S.key)||null,l(_,d,S,C);case ks:return d=d.get(S.key===null?v:S.key)||null,c(_,d,S,C);case sr:var A=S._init;return m(d,_,v,A(S._payload),C)}if(ra(S)||zo(S))return d=d.get(v)||null,u(_,d,S,C,null);El(_,S)}return null}function g(d,_,v,S){for(var C=null,A=null,w=_,P=_=0,k=null;w!==null&&P<v.length;P++){w.index>P?(k=w,w=null):k=w.sibling;var y=h(d,w,v[P],S);if(y===null){w===null&&(w=k);break}t&&w&&y.alternate===null&&e(d,w),_=s(y,_,P),A===null?C=y:A.sibling=y,A=y,w=k}if(P===v.length)return n(d,w),_t&&Hr(d,P),C;if(w===null){for(;P<v.length;P++)w=f(d,v[P],S),w!==null&&(_=s(w,_,P),A===null?C=w:A.sibling=w,A=w);return _t&&Hr(d,P),C}for(w=i(d,w);P<v.length;P++)k=m(w,d,P,v[P],S),k!==null&&(t&&k.alternate!==null&&w.delete(k.key===null?P:k.key),_=s(k,_,P),A===null?C=k:A.sibling=k,A=k);return t&&w.forEach(function(M){return e(d,M)}),_t&&Hr(d,P),C}function x(d,_,v,S){var C=zo(v);if(typeof C!="function")throw Error(re(150));if(v=C.call(v),v==null)throw Error(re(151));for(var A=C=null,w=_,P=_=0,k=null,y=v.next();w!==null&&!y.done;P++,y=v.next()){w.index>P?(k=w,w=null):k=w.sibling;var M=h(d,w,y.value,S);if(M===null){w===null&&(w=k);break}t&&w&&M.alternate===null&&e(d,w),_=s(M,_,P),A===null?C=M:A.sibling=M,A=M,w=k}if(y.done)return n(d,w),_t&&Hr(d,P),C;if(w===null){for(;!y.done;P++,y=v.next())y=f(d,y.value,S),y!==null&&(_=s(y,_,P),A===null?C=y:A.sibling=y,A=y);return _t&&Hr(d,P),C}for(w=i(d,w);!y.done;P++,y=v.next())y=m(w,d,P,y.value,S),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?P:y.key),_=s(y,_,P),A===null?C=y:A.sibling=y,A=y);return t&&w.forEach(function(j){return e(d,j)}),_t&&Hr(d,P),C}function p(d,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Bs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:e:{for(var C=v.key,A=_;A!==null;){if(A.key===C){if(C=v.type,C===Bs){if(A.tag===7){n(d,A.sibling),_=r(A,v.props.children),_.return=d,d=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sr&&Fm(C)===A.type){n(d,A.sibling),_=r(A,v.props),_.ref=Go(d,A,v),_.return=d,d=_;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===Bs?(_=ts(v.props.children,d.mode,S,v.key),_.return=d,d=_):(S=wc(v.type,v.key,v.props,null,d.mode,S),S.ref=Go(d,_,v),S.return=d,d=S)}return o(d);case ks:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Pf(v,d.mode,S),_.return=d,d=_}return o(d);case sr:return A=v._init,p(d,_,A(v._payload),S)}if(ra(v))return g(d,_,v,S);if(zo(v))return x(d,_,v,S);El(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=Rf(v,d.mode,S),_.return=d,d=_),o(d)):n(d,_)}return p}var go=u_(!0),f_=u_(!1),Kc=br(null),Zc=null,Ys=null,Qh=null;function ep(){Qh=Ys=Zc=null}function tp(t){var e=Kc.current;gt(Kc),t._currentValue=e}function q0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Zc=t,Qh=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Qh!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Zc===null)throw Error(re(308));Ys=t,Zc.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var qr=null;function np(t){qr===null?qr=[t]:qr.push(t)}function d_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,np(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function ip(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,np(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}function Om(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,m=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(m,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,f,h):g,h==null)break e;f=Mt({},f,h);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=f}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var il={},Mi=br(il),za=br(il),ka=br(il);function Kr(t){if(t===il)throw Error(re(174));return t}function rp(t,e){switch(dt(ka,e),dt(za,t),dt(Mi,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:P0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=P0(e,t)}gt(Mi),dt(Mi,e)}function vo(){gt(Mi),gt(za),gt(ka)}function p_(t){Kr(ka.current);var e=Kr(Mi.current),n=P0(e,t.type);e!==n&&(dt(za,t),dt(Mi,n))}function sp(t){za.current===t&&(gt(Mi),gt(za))}var yt=br(0);function Qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mf=[];function op(){for(var t=0;t<Mf.length;t++)Mf[t]._workInProgressVersionPrimary=null;Mf.length=0}var yc=qi.ReactCurrentDispatcher,Ef=qi.ReactCurrentBatchConfig,rs=0,St=null,It=null,zt=null,eu=!1,xa=!1,Ba=0,zy=0;function Xt(){throw Error(re(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function lp(t,e,n,i,r,s){if(rs=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yc.current=t===null||t.memoizedState===null?Vy:Gy,t=n(i,r),xa){s=0;do{if(xa=!1,Ba=0,25<=s)throw Error(re(301));s+=1,zt=It=null,e.updateQueue=null,yc.current=Wy,t=n(i,r)}while(xa)}if(yc.current=tu,e=It!==null&&It.next!==null,rs=0,zt=It=St=null,eu=!1,e)throw Error(re(300));return t}function cp(){var t=Ba!==0;return Ba=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?St.memoizedState=zt=t:zt=zt.next=t,zt}function $n(){if(It===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?St.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(re(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?St.memoizedState=zt=t:zt=zt.next=t}return zt}function Ha(t,e){return typeof e=="function"?e(t):e}function Tf(t){var e=$n(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((rs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,St.lanes|=u,ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wf(t){var e=$n(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function m_(){}function g_(t,e){var n=St,i=$n(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,up(x_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Va(9,__.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(re(349));rs&30||v_(n,e,r)}return r}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function __(t,e,n,i){e.value=n,e.getSnapshot=i,y_(e)&&S_(t)}function x_(t,e,n){return n(function(){y_(e)&&S_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function S_(t){var e=Wi(t,1);e!==null&&ci(e,t,1,-1)}function km(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=Hy.bind(null,St,t),[e.memoizedState,t]}function Va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function M_(){return $n().memoizedState}function Sc(t,e,n,i){var r=pi();St.flags|=t,r.memoizedState=Va(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&ap(i,o.deps)){r.memoizedState=Va(e,n,s,i);return}}St.flags|=t,r.memoizedState=Va(1|e,n,s,i)}function Bm(t,e){return Sc(8390656,8,t,e)}function up(t,e){return Nu(2048,8,t,e)}function E_(t,e){return Nu(4,2,t,e)}function T_(t,e){return Nu(4,4,t,e)}function w_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A_(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,w_.bind(null,e,t),n)}function fp(){}function C_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ap(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function R_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ap(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function P_(t,e,n){return rs&21?(ui(n,e)||(n=Uv(),St.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function ky(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Ef.transition;Ef.transition={};try{t(!1),e()}finally{lt=n,Ef.transition=i}}function b_(){return $n().memoizedState}function By(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},L_(t))D_(e,n);else if(n=d_(t,e,n,i),n!==null){var r=an();ci(n,t,i,r),I_(n,e,i)}}function Hy(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(L_(t))D_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,np(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=d_(t,e,r,i),n!==null&&(r=an(),ci(n,t,i,r),I_(n,e,i))}}function L_(t){var e=t.alternate;return t===St||e!==null&&e===St}function D_(t,e){xa=eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}var tu={readContext:Xn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Vy={readContext:Xn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,w_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=By.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:km,useDebugValue:fp,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=km(!1),e=t[0];return t=ky.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=pi();if(_t){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Bt===null)throw Error(re(349));rs&30||v_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bm(x_.bind(null,i,s,t),[t]),i.flags|=2048,Va(9,__.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Bt.identifierPrefix;if(_t){var n=Fi,i=Ni;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gy={readContext:Xn,useCallback:C_,useContext:Xn,useEffect:up,useImperativeHandle:A_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:R_,useReducer:Tf,useRef:M_,useState:function(){return Tf(Ha)},useDebugValue:fp,useDeferredValue:function(t){var e=$n();return P_(e,It.memoizedState,t)},useTransition:function(){var t=Tf(Ha)[0],e=$n().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:b_,unstable_isNewReconciler:!1},Wy={readContext:Xn,useCallback:C_,useContext:Xn,useEffect:up,useImperativeHandle:A_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:R_,useReducer:wf,useRef:M_,useState:function(){return wf(Ha)},useDebugValue:fp,useDeferredValue:function(t){var e=$n();return It===null?e.memoizedState=t:P_(e,It.memoizedState,t)},useTransition:function(){var t=wf(Ha)[0],e=$n().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:b_,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function K0(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=yr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ci(e,t,r,i),xc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=yr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ci(e,t,r,i),xc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=yr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(ci(e,t,i,n),xc(e,t,i))}};function Hm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function U_(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=vn(e)?ns:en.current,i=e.contextTypes,s=(i=i!=null)?po(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function Z0(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ip(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=vn(e)?ns:en.current,r.context=po(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(K0(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fu.enqueueReplaceState(r,r.state,null),Jc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",i=e;do n+=_3(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Af(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function J0(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jy=typeof WeakMap=="function"?WeakMap:Map;function N_(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){iu||(iu=!0,ld=i),J0(t,e)},n}function F_(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){J0(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){J0(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sS.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var Xy=qi.ReactCurrentOwner,mn=!1;function rn(t,e,n,i){e.child=t===null?f_(e,null,n,i):go(e,t.child,n,i)}function Xm(t,e,n,i,r){n=n.render;var s=e.ref;return oo(e,r),i=lp(t,e,n,i,s,r),n=cp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(_t&&n&&Kh(e),e.flags|=1,rn(t,e,i,r),e.child)}function $m(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O_(t,e,s,i,r)):(t=wc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function O_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,ji(t,e,r)}return Q0(t,e,n,i,r)}function z_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Ks,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Ks,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Ks,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Ks,En),En|=i;return rn(t,e,r,n),e.child}function k_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Q0(t,e,n,i,r){var s=vn(n)?ns:en.current;return s=po(e,s),oo(e,r),n=lp(t,e,n,i,s,r),i=cp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(_t&&i&&Kh(e),e.flags|=1,rn(t,e,n,r),e.child)}function Ym(t,e,n,i,r){if(vn(n)){var s=!0;$c(e)}else s=!1;if(oo(e,r),e.stateNode===null)Mc(t,e),U_(e,n,i),Z0(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=vn(n)?ns:en.current,c=po(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Vm(e,o,i,c),or=!1;var h=e.memoizedState;o.state=h,Jc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||or?(typeof u=="function"&&(K0(e,n,u,i),l=e.memoizedState),(a=or||Hm(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,h_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=vn(n)?ns:en.current,l=po(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Vm(e,o,i,l),or=!1,h=e.memoizedState,o.state=h,Jc(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||gn.current||or?(typeof m=="function"&&(K0(e,n,m,i),g=e.memoizedState),(c=or||Hm(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ed(t,e,n,i,s,r)}function ed(t,e,n,i,r,s){k_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Im(e,n,!1),ji(t,e,s);i=e.stateNode,Xy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=go(e,t.child,null,s),e.child=go(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&Im(e,n,!0),e.child}function B_(t){var e=t.stateNode;e.pendingContext?Dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dm(t,e.context,!1),rp(t,e.containerInfo)}function qm(t,e,n,i,r){return mo(),Jh(r),e.flags|=256,rn(t,e,n,i),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return Y0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ku(o,i,0,null),t=ts(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):dp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $y(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=ts(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=td,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dp(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&Jh(i),go(e,t.child,null,n),t=dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $y(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Af(Error(re(422))),Tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&go(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,s);if(!(e.mode&1))return Tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Af(s,i,void 0),Tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),ci(i,t,r,-1))}return _p(),i=Af(Error(re(421))),Tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=vr(r.nextSibling),Cn=e,_t=!0,ii=null,t!==null&&(Nn[Fn++]=Ni,Nn[Fn++]=Fi,Nn[Fn++]=is,Ni=t.id,Fi=t.overflow,is=e),e=dp(e,i.children),e.flags|=4096,e)}function Km(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),q0(t.return,e,n)}function Cf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function V_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,n,e);else if(t.tag===19)Km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Qc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Qc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cf(e,!0,n,null,s);break;case"together":Cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yy(t,e,n){switch(e.tag){case 3:B_(e),mo();break;case 5:p_(e);break;case 1:vn(e.type)&&$c(e);break;case 4:rp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(dt(yt,yt.current&1),t=ji(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return V_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,z_(t,e,n)}return ji(t,e,n)}var G_,id,W_,j_;G_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};W_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(Mi.current);var s=null;switch(n){case"input":r=w0(t,r),i=w0(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=R0(t,r),i=R0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=jc)}b0(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};j_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Wo(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qy(t,e,n){var i=e.pendingProps;switch(Zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return vn(e.type)&&Xc(),$t(e),null;case 3:return i=e.stateNode,vo(),gt(gn),gt(en),op(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(fd(ii),ii=null))),id(t,e),$t(e),null;case 5:sp(e);var r=Kr(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)W_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return $t(e),null}if(t=Kr(Mi.current),Ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)pt(oa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":sm(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":am(i,s),pt("invalid",i)}b0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":hl(i),om(i,s,!0);break;case"textarea":hl(i),lm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[Oa]=i,G_(t,e,!1,!1),e.stateNode=t;e:{switch(o=L0(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)pt(oa[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":sm(t,i),r=w0(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":am(t,i),r=R0(t,i),pt("invalid",t);break;default:r=i}b0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(t,l):typeof l=="number"&&Ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Fh(t,s,l,o))}switch(n){case"input":hl(t),om(t,i,!1);break;case"textarea":hl(t),lm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?no(t,!!i.multiple,s,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Kr(ka.current),Kr(Mi.current),Ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return $t(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Tn!==null&&e.mode&1&&!(e.flags&128))c_(),mo(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[vi]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else ii!==null&&(fd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ut===0&&(Ut=3):_p())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return vo(),id(t,e),t===null&&Na(e.stateNode.containerInfo),$t(e),null;case 10:return tp(e.type._context),$t(e),null;case 17:return vn(e.type)&&Xc(),$t(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Wo(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qc(t),o!==null){for(e.flags|=128,Wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>xo&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Qc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return $t(e),null}else 2*Ct()-s.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return vp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ky(t,e){switch(Zh(e),e.tag){case 1:return vn(e.type)&&Xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vo(),gt(gn),gt(en),op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sp(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return vo(),null;case 10:return tp(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var wl=!1,Zt=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function rd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Zm=!1;function Jy(t,e){if(H0=Vc,t=Kv(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(V0={focusedElem:t,selectionRange:n},Vc=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,p=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:ti(e.type,x),p);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=Zm,Zm=!1,g}function ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rd(e,n,s)}r=r.next}while(r!==i)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function X_(t){var e=t.alternate;e!==null&&(t.alternate=null,X_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[Oa],delete e[j0],delete e[Uy],delete e[Ny])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $_(t){return t.tag===5||t.tag===3||t.tag===4}function Jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jc));else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Vt=null,ni=!1;function Zi(t,e,n){for(n=n.child;n!==null;)Y_(t,e,n),n=n.sibling}function Y_(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(Pu,n)}catch{}switch(n.tag){case 5:Zt||qs(n,e);case 6:var i=Vt,r=ni;Vt=null,Zi(t,e,n),Vt=i,ni=r,Vt!==null&&(ni?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ni?(t=Vt,n=n.stateNode,t.nodeType===8?yf(t.parentNode,n):t.nodeType===1&&yf(t,n),Da(t)):yf(Vt,n.stateNode));break;case 4:i=Vt,r=ni,Vt=n.stateNode.containerInfo,ni=!0,Zi(t,e,n),Vt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!Zt&&(qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Zi(t,e,n),Zt=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function Qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zy),e.forEach(function(i){var r=aS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ni=!1;break e;case 3:Vt=a.stateNode.containerInfo,ni=!0;break e;case 4:Vt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Vt===null)throw Error(re(160));Y_(s,o,r),Vt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,t),e=e.sibling}function q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),di(t),i&4){try{ya(3,t,t.return),Ou(3,t)}catch(x){Tt(t,t.return,x)}try{ya(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Kn(e,t),di(t),i&512&&n!==null&&qs(n,n.return);break;case 5:if(Kn(e,t),di(t),i&512&&n!==null&&qs(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vv(r,s),L0(a,o);var c=L0(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Mv(r,f):u==="dangerouslySetInnerHTML"?yv(r,f):u==="children"?Ra(r,f):Fh(r,u,f,c)}switch(a){case"input":A0(r,s);break;case"textarea":_v(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?no(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?no(r,!!s.multiple,s.defaultValue,!0):no(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oa]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Kn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Kn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Kn(e,t),di(t);break;case 13:Kn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mp=Ct())),i&4&&Qm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||u,Kn(e,t),Zt=c):Kn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(f=_e=u;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:ya(4,h,h.return);break;case 1:qs(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:qs(h,h.return);break;case 22:if(h.memoizedState!==null){tg(f);continue}}m!==null?(m.return=h,_e=m):tg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sv("display",o))}catch(x){Tt(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kn(e,t),di(t),i&4&&Qm(t);break;case 21:break;default:Kn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=Jm(t);ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jm(t);od(t,a,o);break;default:throw Error(re(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qy(t,e,n){_e=t,K_(t)}function K_(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=wl;var c=Zt;if(wl=o,(Zt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?ng(r):l!==null?(l.return=o,_e=l):ng(r);for(;s!==null;)_e=s,K_(s),s=s.sibling;_e=r,wl=a,Zt=c}eg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):eg(t)}}function eg(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Zt||e.flags&512&&sd(e)}catch(h){Tt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function tg(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function ng(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{sd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{sd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var eS=Math.ceil,nu=qi.ReactCurrentDispatcher,hp=qi.ReactCurrentOwner,Wn=qi.ReactCurrentBatchConfig,et=0,Bt=null,Dt=null,Wt=0,En=0,Ks=br(0),Ut=0,Ga=null,ss=0,zu=0,pp=0,Sa=null,pn=null,mp=0,xo=1/0,Di=null,iu=!1,ld=null,xr=null,Al=!1,fr=null,ru=0,Ma=0,cd=null,Ec=-1,Tc=0;function an(){return et&6?Ct():Ec!==-1?Ec:Ec=Ct()}function yr(t){return t.mode&1?et&2&&Wt!==0?Wt&-Wt:Oy.transition!==null?(Tc===0&&(Tc=Uv()),Tc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Hv(t.type)),t):1}function ci(t,e,n,i){if(50<Ma)throw Ma=0,cd=null,Error(re(185));el(t,n,i),(!(et&2)||t!==Bt)&&(t===Bt&&(!(et&2)&&(zu|=n),Ut===4&&lr(t,Wt)),_n(t,i),n===1&&et===0&&!(e.mode&1)&&(xo=Ct()+500,Uu&&Lr()))}function _n(t,e){var n=t.callbackNode;O3(t,e);var i=Hc(t,t===Bt?Wt:0);if(i===0)n!==null&&fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fm(n),e===1)t.tag===0?Fy(ig.bind(null,t)):o_(ig.bind(null,t)),Dy(function(){!(et&6)&&Lr()}),n=null;else{switch(Nv(i)){case 1:n=Hh;break;case 4:n=Dv;break;case 16:n=Bc;break;case 536870912:n=Iv;break;default:n=Bc}n=r2(n,Z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z_(t,e){if(Ec=-1,Tc=0,et&6)throw Error(re(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=Hc(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=su(t,i);else{e=i;var r=et;et|=2;var s=Q_();(Bt!==t||Wt!==e)&&(Di=null,xo=Ct()+500,es(t,e));do try{iS();break}catch(a){J_(t,a)}while(!0);ep(),nu.current=s,et=r,Dt!==null?e=0:(Bt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=F0(t),r!==0&&(i=r,e=ud(t,r))),e===1)throw n=Ga,es(t,0),lr(t,i),_n(t,Ct()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!tS(r)&&(e=su(t,i),e===2&&(s=F0(t),s!==0&&(i=s,e=ud(t,s))),e===1))throw n=Ga,es(t,0),lr(t,i),_n(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Vr(t,pn,Di);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=mp+500-Ct(),10<e)){if(Hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=W0(Vr.bind(null,t,pn,Di),e);break}Vr(t,pn,Di);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eS(i/1960))-i,10<i){t.timeoutHandle=W0(Vr.bind(null,t,pn,Di),i);break}Vr(t,pn,Di);break;case 5:Vr(t,pn,Di);break;default:throw Error(re(329))}}}return _n(t,Ct()),t.callbackNode===n?Z_.bind(null,t):null}function ud(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(es(t,e).flags|=256),t=su(t,e),t!==2&&(e=pn,pn=n,e!==null&&fd(e)),t}function fd(t){pn===null?pn=t:pn.push.apply(pn,t)}function tS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~pp,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function ig(t){if(et&6)throw Error(re(327));ao();var e=Hc(t,0);if(!(e&1))return _n(t,Ct()),null;var n=su(t,e);if(t.tag!==0&&n===2){var i=F0(t);i!==0&&(e=i,n=ud(t,i))}if(n===1)throw n=Ga,es(t,0),lr(t,e),_n(t,Ct()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,pn,Di),_n(t,Ct()),null}function gp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(xo=Ct()+500,Uu&&Lr())}}function os(t){fr!==null&&fr.tag===0&&!(et&6)&&ao();var e=et;et|=1;var n=Wn.transition,i=lt;try{if(Wn.transition=null,lt=1,t)return t()}finally{lt=i,Wn.transition=n,et=e,!(et&6)&&Lr()}}function vp(){En=Ks.current,gt(Ks)}function es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ly(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xc();break;case 3:vo(),gt(gn),gt(en),op();break;case 5:sp(i);break;case 4:vo();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:tp(i.type._context);break;case 22:case 23:vp()}n=n.return}if(Bt=t,Dt=t=Sr(t.current,null),Wt=En=e,Ut=0,Ga=null,pp=zu=ss=0,pn=Sa=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qr=null}return t}function J_(t,e){do{var n=Dt;try{if(ep(),yc.current=tu,eu){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}eu=!1}if(rs=0,zt=It=St=null,xa=!1,Ba=0,hp.current=null,n===null||n.return===null){Ut=1,Ga=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Wm(o);if(m!==null){m.flags&=-257,jm(m,o,a,s,e),m.mode&1&&Gm(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Gm(s,c,e),_p();break e}l=Error(re(426))}}else if(_t&&a.mode&1){var p=Wm(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),jm(p,o,a,s,e),Jh(_o(l,a));break e}}s=l=_o(l,a),Ut!==4&&(Ut=2),Sa===null?Sa=[s]:Sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=N_(s,l,e);Om(s,d);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(xr===null||!xr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=F_(s,a,e);Om(s,S);break e}}s=s.return}while(s!==null)}t2(n)}catch(C){e=C,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Q_(){var t=nu.current;return nu.current=tu,t===null?tu:t}function _p(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||!(ss&268435455)&&!(zu&268435455)||lr(Bt,Wt)}function su(t,e){var n=et;et|=2;var i=Q_();(Bt!==t||Wt!==e)&&(Di=null,es(t,e));do try{nS();break}catch(r){J_(t,r)}while(!0);if(ep(),et=n,nu.current=i,Dt!==null)throw Error(re(261));return Bt=null,Wt=0,Ut}function nS(){for(;Dt!==null;)e2(Dt)}function iS(){for(;Dt!==null&&!R3();)e2(Dt)}function e2(t){var e=i2(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?t2(t):Dt=e,hp.current=null}function t2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ky(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=qy(n,e,En),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Vr(t,e,n){var i=lt,r=Wn.transition;try{Wn.transition=null,lt=1,rS(t,e,n,i)}finally{Wn.transition=r,lt=i}return null}function rS(t,e,n,i){do ao();while(fr!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z3(t,s),t===Bt&&(Dt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,r2(Bc,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=lt;lt=1;var a=et;et|=4,hp.current=null,Jy(t,n),q_(n,t),Ty(V0),Vc=!!H0,V0=H0=null,t.current=n,Qy(n),P3(),et=a,lt=o,Wn.transition=s}else t.current=n;if(Al&&(Al=!1,fr=t,ru=r),s=t.pendingLanes,s===0&&(xr=null),D3(n.stateNode),_n(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(iu)throw iu=!1,t=ld,ld=null,t;return ru&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===cd?Ma++:(Ma=0,cd=t):Ma=0,Lr(),null}function ao(){if(fr!==null){var t=Nv(ru),e=Wn.transition,n=lt;try{if(Wn.transition=null,lt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,ru=0,et&6)throw Error(re(331));var r=et;for(et|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:ya(8,u,s)}var f=u.child;if(f!==null)f.return=u,_e=f;else for(;_e!==null;){u=_e;var h=u.sibling,m=u.return;if(X_(u),u===c){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(et=r,Lr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(Pu,t)}catch{}i=!0}return i}finally{lt=n,Wn.transition=e}}return!1}function rg(t,e,n){e=_o(n,e),e=N_(t,e,1),t=_r(t,e,1),e=an(),t!==null&&(el(t,1,e),_n(t,e))}function Tt(t,e,n){if(t.tag===3)rg(t,t,n);else for(;e!==null;){if(e.tag===3){rg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=_o(n,t),t=F_(e,t,1),e=_r(e,t,1),t=an(),e!==null&&(el(e,1,t),_n(e,t));break}}e=e.return}}function sS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Ct()-mp?es(t,0):pp|=n),_n(t,e)}function n2(t,e){e===0&&(t.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var n=an();t=Wi(t,e),t!==null&&(el(t,e,n),_n(t,n))}function oS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n2(t,n)}function aS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),n2(t,n)}var i2;i2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,Yy(t,e,n);mn=!!(t.flags&131072)}else mn=!1,_t&&e.flags&1048576&&a_(e,qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Mc(t,e),t=e.pendingProps;var r=po(e,en.current);oo(e,n),r=lp(null,e,i,t,r,n);var s=cp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,$c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ip(e),r.updater=Fu,e.stateNode=r,r._reactInternals=e,Z0(e,i,t,n),e=ed(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Kh(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cS(i),t=ti(i,t),r){case 0:e=Q0(null,e,i,t,n);break e;case 1:e=Ym(null,e,i,t,n);break e;case 11:e=Xm(null,e,i,t,n);break e;case 14:e=$m(null,e,i,ti(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Q0(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ym(t,e,i,r,n);case 3:e:{if(B_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,h_(t,e),Jc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_o(Error(re(423)),e),e=qm(t,e,i,n,r);break e}else if(i!==r){r=_o(Error(re(424)),e),e=qm(t,e,i,n,r);break e}else for(Tn=vr(e.stateNode.containerInfo.firstChild),Cn=e,_t=!0,ii=null,n=f_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),i===r){e=ji(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return p_(e),t===null&&Y0(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,G0(i,r)?o=null:s!==null&&G0(i,s)&&(e.flags|=32),k_(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&Y0(e),null;case 13:return H_(t,e,n);case 4:return rp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=go(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Xm(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Kc,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!gn.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),q0(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),q0(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,oo(e,n),r=Xn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),$m(t,e,i,r,n);case 15:return O_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Mc(t,e),e.tag=1,vn(i)?(t=!0,$c(e)):t=!1,oo(e,n),U_(e,i,r),Z0(e,i,r,n),ed(null,e,i,!0,t,n);case 19:return V_(t,e,n);case 22:return z_(t,e,n)}throw Error(re(156,e.tag))};function r2(t,e){return Lv(t,e)}function lS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new lS(t,e,n,i)}function xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cS(t){if(typeof t=="function")return xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===kh)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bs:return ts(n.children,r,s,e);case Oh:o=8,r|=8;break;case S0:return t=Bn(12,n,e,r|2),t.elementType=S0,t.lanes=s,t;case M0:return t=Bn(13,n,e,r),t.elementType=M0,t.lanes=s,t;case E0:return t=Bn(19,n,e,r),t.elementType=E0,t.lanes=s,t;case pv:return ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dv:o=10;break e;case hv:o=9;break e;case zh:o=11;break e;case kh:o=14;break e;case sr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ts(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=pv,t.lanes=n,t.stateNode={isHidden:!1},t}function Rf(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Pf(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cf(0),this.expirationTimes=cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yp(t,e,n,i,r,s,o,a,l){return t=new uS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ip(s),t}function fS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function s2(t){if(!t)return Ar;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(vn(n))return s_(t,n,e)}return e}function o2(t,e,n,i,r,s,o,a,l){return t=yp(n,i,!0,t,r,s,o,a,l),t.context=s2(null),n=t.current,i=an(),r=yr(n),s=Bi(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,el(t,r,i),_n(t,i),t}function Bu(t,e,n,i){var r=e.current,s=an(),o=yr(r);return n=s2(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(ci(t,r,o,s),xc(t,r,o)),o}function ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sp(t,e){sg(t,e),(t=t.alternate)&&sg(t,e)}function dS(){return null}var a2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mp(t){this._internalRoot=t}Hu.prototype.render=Mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Bu(t,e,null,null)};Hu.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Bu(null,t,null,null)}),e[Gi]=null}};function Hu(t){this._internalRoot=t}Hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=zv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&Bv(t)}};function Ep(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function og(){}function hS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ou(o);s.call(c)}}var o=o2(e,i,t,0,null,!1,!1,"",og);return t._reactRootContainer=o,t[Gi]=o.current,Na(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ou(l);a.call(c)}}var l=yp(t,0,!1,null,null,!1,!1,"",og);return t._reactRootContainer=l,t[Gi]=l.current,Na(t.nodeType===8?t.parentNode:t),os(function(){Bu(e,l,n,i)}),l}function Gu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ou(o);a.call(l)}}Bu(e,o,t,r)}else o=hS(n,e,t,r,i);return ou(o)}Fv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(Vh(e,n|1),_n(e,Ct()),!(et&6)&&(xo=Ct()+500,Lr()))}break;case 13:os(function(){var i=Wi(t,1);if(i!==null){var r=an();ci(i,t,1,r)}}),Sp(t,1)}};Gh=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=an();ci(e,t,134217728,n)}Sp(t,134217728)}};Ov=function(t){if(t.tag===13){var e=yr(t),n=Wi(t,e);if(n!==null){var i=an();ci(n,t,e,i)}Sp(t,e)}};zv=function(){return lt};kv=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};I0=function(t,e,n){switch(e){case"input":if(A0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Iu(i);if(!r)throw Error(re(90));gv(i),A0(i,r)}}}break;case"textarea":_v(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};wv=gp;Av=os;var pS={usingClientEntryPoint:!1,Events:[nl,Ws,Iu,Ev,Tv,gp]},jo={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pv(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||dS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Pu=Cl.inject(mS),Si=Cl}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(e))throw Error(re(200));return fS(t,e,null,n)};Pn.createRoot=function(t,e){if(!Ep(t))throw Error(re(299));var n=!1,i="",r=a2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yp(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,Na(t.nodeType===8?t.parentNode:t),new Mp(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Pv(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return os(t)};Pn.hydrate=function(t,e,n){if(!Vu(e))throw Error(re(200));return Gu(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Ep(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=a2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o2(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,Na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hu(e)};Pn.render=function(t,e,n){if(!Vu(e))throw Error(re(200));return Gu(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Vu(t))throw Error(re(40));return t._reactRootContainer?(os(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Pn.unstable_batchedUpdates=gp;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Gu(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function l2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l2)}catch(t){console.error(t)}}l2(),lv.exports=Pn;var gS=lv.exports,ag=gS;x0.createRoot=ag.createRoot,x0.hydrateRoot=ag.hydrateRoot;/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const c2=173.1446326846693,u2=14959787069098932e-8,kt=.017453292519943295,yo=57.29577951308232,vS=365.24217,lg=new Date("2000-01-01T12:00:00Z"),Pi=2*Math.PI,Ji=3600*(180/Math.PI),Zs=484813681109536e-20,f2=180*60*60,_S=2*f2,xS=f2/Math.PI,yS=-.17-5*Math.log10(xS),SS=6378.1366,MS=SS/u2,d2=81.30056,Tp=.0002959122082855911,dd=2825345909524226e-22,hd=8459715185680659e-23,pd=1292024916781969e-23,md=1524358900784276e-23;function jn(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function _s(t){return t-Math.floor(t)}function ES(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:yo*Math.acos(r)}var we;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(we||(we={}));const TS=[we.Star1,we.Star2,we.Star3,we.Star4,we.Star5,we.Star6,we.Star7,we.Star8],wS=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function AS(t){const e=TS.indexOf(t);return e>=0?wS[e]:null}function wp(t){const e=AS(t);return e&&e.dist>0?e:null}var fi;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(fi||(fi={}));const Oi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function CS(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/vS;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let RS=CS;function cg(t){return t+RS(t)/86400}class Mr{constructor(e){if(e instanceof Mr){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-lg.getTime())/n,this.tt=cg(this.ut);return}if(Number.isFinite(e)){this.date=new Date(lg.getTime()+e*n),this.ut=e,this.tt=cg(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new Mr(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Mr(this.ut+e)}}function Ln(t){return t instanceof Mr?t:new Mr(t)}function PS(t){function e(h){return h%_S*Zs}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,u=(92052331+9086*n)*l+15377*a,f=2*(r-s+o);return a=Math.sin(f),l=Math.cos(f),c+=(-13170906-1675*n)*a-13696*l,u+=(5730336-3015*n)*l-4587*a,f=2*(r+o),a=Math.sin(f),l=Math.cos(f),c+=(-2276413-234*n)*a+2796*l,u+=(978459-485*n)*l+1374*a,f=2*o,a=Math.sin(f),l=Math.cos(f),c+=(2074554+207*n)*a-698*l,u+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,u+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function h2(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var Rl;function Ap(t){if(!Rl||Math.abs(Rl.tt-t.tt)>1e-6){const e=PS(t),n=h2(t),i=n+e.deps/3600;Rl={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*kt)/15,mobl:n,tobl:i}}return Rl}function bS(t,e){const n=t*kt,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function LS(t,e){return bS(h2(t),e)}function DS(t){const e=t.tt/36525;function n(me,b){const ae=[];let le;for(le=0;le<=b-me;++le)ae.push(0);return{min:me,array:ae}}function i(me,b,ae,le){const Ce=[];for(let Te=0;Te<=b-me;++Te)Ce.push(n(ae,le));return{min:me,array:Ce}}function r(me,b,ae){const le=me.array[b-me.min];return le.array[ae-le.min]}function s(me,b,ae,le){const Ce=me.array[b-me.min];Ce.array[ae-Ce.min]=le}let o,a,l,c,u,f,h,m,g,x,p,d,_,v,S,C,A,w,P,k,y,M,j,B=i(-6,6,1,4),V=i(-6,6,1,4);function I(me,b){return r(B,me,b)}function U(me,b){return r(V,me,b)}function q(me,b,ae){return s(B,me,b,ae)}function L(me,b,ae){return s(V,me,b,ae)}function K(me,b,ae,le,Ce){Ce(me*ae-b*le,b*ae+me*le)}function $(me){return Math.sin(Pi*me)}h=e*e,g=0,j=0,p=0,d=3422.7;var ne=$(.19833+.05611*e),ye=$(.27869+.04508*e),Ie=$(.16827-.36903*e),Y=$(.34734-5.37261*e),ee=$(.10498-5.37899*e),ce=$(.42681-.41855*e),fe=$(.14943-5.37511*e);for(w=.84*ne+.31*ye+14.27*Ie+7.26*Y+.28*ee+.24*ce,P=2.94*ne+.31*ye+14.27*Ie+9.34*Y+1.12*ee+.83*ce,k=-6.4*ne-1.89*ce,y=.21*ne+.31*ye+14.27*Ie-88.7*Y-15.3*ee+.24*ce-1.86*fe,M=w-k,m=-3332e-9*$(.59734-5.37261*e)-539e-9*$(.35498-5.37899*e)-64e-9*$(.39943-5.37511*e),_=Pi*_s(.60643382+1336.85522467*e-313e-8*h)+w/Ji,v=Pi*_s(.37489701+1325.55240982*e+2565e-8*h)+P/Ji,S=Pi*_s(.99312619+99.99735956*e-44e-8*h)+k/Ji,C=Pi*_s(.25909118+1342.2278298*e-892e-8*h)+y/Ji,A=Pi*_s(.82736186+1236.85308708*e-397e-8*h)+M/Ji,u=1;u<=4;++u){switch(u){case 1:l=v,a=4,c=1.000002208;break;case 2:l=S,a=3,c=.997504612-.002495388*e;break;case 3:l=C,a=4,c=1.000002708+139.978*m;break;case 4:l=A,a=6,c=1;break;default:throw`Internal error: I = ${u}`}for(q(0,u,1),q(1,u,Math.cos(l)*c),L(0,u,0),L(1,u,Math.sin(l)*c),f=2;f<=a;++f)K(I(f-1,u),U(f-1,u),I(1,u),U(1,u),(me,b)=>(q(f,u,me),L(f,u,b)));for(f=1;f<=a;++f)q(-f,u,I(f,u)),L(-f,u,-U(f,u))}function Ne(me,b,ae,le){for(var Ce={x:1,y:0},Te=[0,me,b,ae,le],We=1;We<=4;++We)Te[We]!==0&&K(Ce.x,Ce.y,I(Te[We],We),U(Te[We],We),(De,R)=>(Ce.x=De,Ce.y=R));return Ce}function H(me,b,ae,le,Ce,Te,We,De){var R=Ne(Ce,Te,We,De);g+=me*R.y,j+=b*R.y,p+=ae*R.x,d+=le*R.x}H(13.902,14.06,-.001,.2607,0,0,0,4),H(.403,-4.01,.394,.0023,0,0,0,3),H(2369.912,2373.36,.601,28.2333,0,0,0,2),H(-125.154,-112.79,-.725,-.9781,0,0,0,1),H(1.979,6.98,-.445,.0433,1,0,0,4),H(191.953,192.72,.029,3.0861,1,0,0,2),H(-8.466,-13.51,.455,-.1093,1,0,0,1),H(22639.5,22609.07,.079,186.5398,1,0,0,0),H(18.609,3.59,-.094,.0118,1,0,0,-1),H(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),H(3.215,5.44,.192,-.0386,1,0,0,-3),H(-38.428,-38.64,.001,.6008,1,0,0,-4),H(-.393,-1.43,-.092,.0086,1,0,0,-6),H(-.289,-1.59,.123,-.0053,0,1,0,4),H(-24.42,-25.1,.04,-.3,0,1,0,2),H(18.023,17.93,.007,.1494,0,1,0,1),H(-668.146,-126.98,-1.302,-.3997,0,1,0,0),H(.56,.32,-.001,-.0037,0,1,0,-1),H(-165.145,-165.06,.054,1.9178,0,1,0,-2),H(-1.877,-6.46,-.416,.0339,0,1,0,-4),H(.213,1.02,-.074,.0054,2,0,0,4),H(14.387,14.78,-.017,.2833,2,0,0,2),H(-.586,-1.2,.054,-.01,2,0,0,1),H(769.016,767.96,.107,10.1657,2,0,0,0),H(1.75,2.01,-.018,.0155,2,0,0,-1),H(-211.656,-152.53,5.679,-.3039,2,0,0,-2),H(1.225,.91,-.03,-.0088,2,0,0,-3),H(-30.773,-34.07,-.308,.3722,2,0,0,-4),H(-.57,-1.4,-.074,.0109,2,0,0,-6),H(-2.921,-11.75,.787,-.0484,1,1,0,2),H(1.267,1.52,-.022,.0164,1,1,0,1),H(-109.673,-115.18,.461,-.949,1,1,0,0),H(-205.962,-182.36,2.056,1.4437,1,1,0,-2),H(.233,.36,.012,-.0025,1,1,0,-3),H(-4.391,-9.66,-.471,.0673,1,1,0,-4),H(.283,1.53,-.111,.006,1,-1,0,4),H(14.577,31.7,-1.54,.2302,1,-1,0,2),H(147.687,138.76,.679,1.1528,1,-1,0,0),H(-1.089,.55,.021,0,1,-1,0,-1),H(28.475,23.59,-.443,-.2257,1,-1,0,-2),H(-.276,-.38,-.006,-.0036,1,-1,0,-3),H(.636,2.27,.146,-.0102,1,-1,0,-4),H(-.189,-1.68,.131,-.0028,0,2,0,2),H(-7.486,-.66,-.037,-.0086,0,2,0,0),H(-8.096,-16.35,-.74,.0918,0,2,0,-2),H(-5.741,-.04,0,-9e-4,0,0,2,2),H(.255,0,0,0,0,0,2,1),H(-411.608,-.2,0,-.0124,0,0,2,0),H(.584,.84,0,.0071,0,0,2,-1),H(-55.173,-52.14,0,-.1052,0,0,2,-2),H(.254,.25,0,-.0017,0,0,2,-3),H(.025,-1.67,0,.0031,0,0,2,-4),H(1.06,2.96,-.166,.0243,3,0,0,2),H(36.124,50.64,-1.3,.6215,3,0,0,0),H(-13.193,-16.4,.258,-.1187,3,0,0,-2),H(-1.187,-.74,.042,.0074,3,0,0,-4),H(-.293,-.31,-.002,.0046,3,0,0,-6),H(-.29,-1.45,.116,-.0051,2,1,0,2),H(-7.649,-10.56,.259,-.1038,2,1,0,0),H(-8.627,-7.59,.078,-.0192,2,1,0,-2),H(-2.74,-2.54,.022,.0324,2,1,0,-4),H(1.181,3.32,-.212,.0213,2,-1,0,2),H(9.703,11.67,-.151,.1268,2,-1,0,0),H(-.352,-.37,.001,-.0028,2,-1,0,-1),H(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),H(.36,.2,-.012,-.0043,2,-1,0,-4),H(-1.167,-1.25,.008,-.0106,1,2,0,0),H(-7.412,-6.12,.117,.0484,1,2,0,-2),H(-.311,-.65,-.032,.0044,1,2,0,-4),H(.757,1.82,-.105,.0112,1,-2,0,2),H(2.58,2.32,.027,.0196,1,-2,0,0),H(2.533,2.4,-.014,-.0212,1,-2,0,-2),H(-.344,-.57,-.025,.0036,0,3,0,-2),H(-.992,-.02,0,0,1,0,2,2),H(-45.099,-.02,0,-.001,1,0,2,0),H(-.179,-9.52,0,-.0833,1,0,2,-2),H(-.301,-.33,0,.0014,1,0,2,-4),H(-6.382,-3.37,0,-.0481,1,0,-2,2),H(39.528,85.13,0,-.7136,1,0,-2,0),H(9.366,.71,0,-.0112,1,0,-2,-2),H(.202,.02,0,0,1,0,-2,-4),H(.415,.1,0,.0013,0,1,2,0),H(-2.152,-2.26,0,-.0066,0,1,2,-2),H(-1.44,-1.3,0,.0014,0,1,-2,2),H(.384,-.04,0,0,0,1,-2,-2),H(1.938,3.6,-.145,.0401,4,0,0,0),H(-.952,-1.58,.052,-.013,4,0,0,-2),H(-.551,-.94,.032,-.0097,3,1,0,0),H(-.482,-.57,.005,-.0045,3,1,0,-2),H(.681,.96,-.026,.0115,3,-1,0,0),H(-.297,-.27,.002,-9e-4,2,2,0,-2),H(.254,.21,-.003,0,2,-2,0,-2),H(-.25,-.22,.004,.0014,1,3,0,-2),H(-3.996,0,0,4e-4,2,0,2,0),H(.557,-.75,0,-.009,2,0,2,-2),H(-.459,-.38,0,-.0053,2,0,-2,2),H(-1.298,.74,0,4e-4,2,0,-2,0),H(.538,1.14,0,-.0141,2,0,-2,-2),H(.263,.02,0,0,1,1,2,0),H(.426,.07,0,-6e-4,1,1,-2,-2),H(-.304,.03,0,3e-4,1,-1,2,0),H(-.372,-.19,0,-.0027,1,-1,-2,2),H(.418,0,0,0,0,0,4,0),H(-.33,-.04,0,0,3,0,2,0);function Ue(me,b,ae,le,Ce){return me*Ne(b,ae,le,Ce).y}x=0,x+=Ue(-526.069,0,0,1,-2),x+=Ue(-3.352,0,0,1,-4),x+=Ue(44.297,1,0,1,-2),x+=Ue(-6,1,0,1,-4),x+=Ue(20.599,-1,0,1,0),x+=Ue(-30.598,-1,0,1,-2),x+=Ue(-24.649,-2,0,1,0),x+=Ue(-2,-2,0,1,-2),x+=Ue(-22.571,0,1,1,-2),x+=Ue(10.985,0,-1,1,-2),g+=.82*$(.7736-62.5512*e)+.31*$(.0466-125.1025*e)+.35*$(.5785-25.1042*e)+.66*$(.4591+1335.8075*e)+.64*$(.313-91.568*e)+1.14*$(.148+1331.2898*e)+.21*$(.5918+1056.5859*e)+.44*$(.5784+1322.8595*e)+.24*$(.2275-5.7374*e)+.28*$(.2965+2.6929*e)+.33*$(.3132+6.3368*e),o=C+j/Ji;let Ke=(1.000002708+139.978*m)*(18518.511+1.189+p)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:Pi*_s((_+g/Ji)/Pi),geo_eclip_lat:Math.PI/(180*3600)*Ke,distance_au:Ji*MS/(.999953253*d)}}function p2(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function m2(t,e,n){const i=g2(e,n);return p2(i,t)}function g2(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=Zs,r*=Zs,s*=Zs,o*=Zs;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),u=Math.cos(-r),f=Math.sin(-s),h=Math.cos(-s),m=Math.sin(o),g=Math.cos(o),x=g*u-c*m*h,p=g*c*l+m*h*u*l-a*m*f,d=g*c*a+m*h*u*a+l*m*f,_=-m*u-c*g*h,v=-m*c*l+g*h*u*l-a*g*f,S=-m*c*a+g*h*u*a+l*g*f,C=c*f,A=-f*u*l-a*h,w=-f*u*a+h*l;if(e===fi.Into2000)return new Cr([[x,p,d],[_,v,S],[C,A,w]]);if(e===fi.From2000)return new Cr([[x,_,C],[p,v,A],[d,S,w]]);throw"Invalid precess direction"}function IS(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let Pl;function v2(t){if(!Pl||Pl.tt!==t.tt){const e=t.tt/36525;let n=15*Ap(t).ee;const i=IS(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),Pl={tt:t.tt,st:s}}return Pl.st}function US(t){const e=Ln(t);return v2(e)}function NS(t,e,n){const i=_2(e,n);return p2(i,t)}function _2(t,e){const n=Ap(t),i=n.mobl*kt,r=n.tobl*kt,s=n.dpsi*Zs,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s),h=u,m=-f*o,g=-f*a,x=f*l,p=u*o*l+a*c,d=u*a*l-o*c,_=f*c,v=u*o*c-a*l,S=u*a*c+o*l;if(e===fi.From2000)return new Cr([[h,x,_],[m,p,v],[g,d,S]]);if(e===fi.Into2000)return new Cr([[h,m,g],[x,p,d],[_,v,S]]);throw"Invalid precess direction"}class wt{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class dr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class Ea{constructor(e,n,i){this.lat=jn(e),this.lon=jn(n),this.dist=jn(i)}}class FS{constructor(e,n,i,r){this.ra=jn(e),this.dec=jn(n),this.dist=jn(i),this.vec=r}}class Cr{constructor(e){this.rot=e}}class OS{constructor(e,n,i){this.vec=e,this.elat=jn(n),this.elon=jn(i)}}function bf(t,e){const n=t*kt,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function zS(t){if(!(t instanceof x2))throw`Not an instance of the Observer class: ${t}`;if(jn(t.latitude),jn(t.longitude),jn(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class x2{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,zS(this)}}function kS(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=yo*Math.atan2(r,i),a<0&&(a+=360));let l=yo*Math.atan2(s,o),c=new wt(i,r,s,t.t);return new OS(c,l,a)}function BS(t){const e=Ap(t.t),n=[t.x,t.y,t.z],i=m2(n,t.t,fi.From2000),[r,s,o]=NS(i,t.t,fi.From2000),a=new wt(r,s,o,t.t),l=e.tobl*kt;return kS(a,Math.cos(l),Math.sin(l))}function So(t){const e=Ln(t),n=DS(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=LS(e,r),o=m2(s,e,fi.Into2000);return new wt(o[0],o[1],o[2],e)}function y2(t){const e=Ln(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=So(i),o=So(r);return new dr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function HS(t){const e=Ln(t),n=y2(e),i=1+d2;return new dr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function lo(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,u]of s)o+=l*Math.cos(c+e*u);let a=i*o;n&&(a%=Pi),r+=a,i*=e}return r}function Lf(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,u,f]of o){let h=u+e*f;a+=c*f*Math.sin(h),s>0&&(l+=c*Math.cos(h))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const aa=365250,gd=0,vd=1,_d=2;function xd(t){return new Kt(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function S2(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function Ta(t,e){const n=e.tt/aa,i=lo(t[gd],n,!0),r=lo(t[vd],n,!1),s=lo(t[_d],n,!1),o=S2(i,r,s);return xd(o).ToAstroVector(e)}function yd(t,e){const n=e/aa,i=lo(t[gd],n,!0),r=lo(t[vd],n,!1),s=lo(t[_d],n,!1),o=Lf(t[gd],n),a=Lf(t[vd],n),l=Lf(t[_d],n),c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),h=Math.sin(r),m=+(l*f*c)-s*h*c*a-s*f*u*o,g=+(l*f*u)-s*h*u*a+s*f*c*o,x=+(l*h)+s*f*a,p=S2(i,r,s),d=[m/aa,g/aa,x/aa],_=xd(p),v=xd(d);return new as(e,_,v)}function bl(t,e,n,i){const r=i/(i+Tp),s=Ta(Oi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function VS(t){const e=new wt(0,0,0,t);return bl(e,t,we.Jupiter,dd),bl(e,t,we.Saturn,hd),bl(e,t,we.Uranus,pd),bl(e,t,we.Neptune,md),e}const Sd=51,GS=29200,Js=146,bi=201,Zr=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Kt{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new Kt(this.x,this.y,this.z)}ToAstroVector(e){return new wt(this.x,this.y,this.z,e)}static zero(){return new Kt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Kt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Kt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Kt(e*this.x,e*this.y,e*this.z)}div(e){return new Kt(this.x/e,this.y/e,this.z/e)}mean(e){return new Kt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Kt(-this.x,-this.y,-this.z)}}class as{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new as(this.tt,this.r,this.v)}sub(e){return new as(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function WS(t){let[e,[n,i,r],[s,o,a]]=t;return new as(e,new Kt(n,i,r),new Kt(s,o,a))}function Ll(t,e,n,i){const r=i/(i+Tp),s=yd(Oi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function Xo(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class Wu{constructor(e){let n=new as(e,new Kt(0,0,0),new Kt(0,0,0));this.Jupiter=Ll(n,e,we.Jupiter,dd),this.Saturn=Ll(n,e,we.Saturn,hd),this.Uranus=Ll(n,e,we.Uranus,pd),this.Neptune=Ll(n,e,we.Neptune,md),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new as(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=Xo(e,Tp,this.Sun.r);return n.incr(Xo(e,dd,this.Jupiter.r)),n.incr(Xo(e,hd,this.Saturn.r)),n.incr(Xo(e,pd,this.Uranus.r)),n.incr(Xo(e,md,this.Neptune.r)),n}}class ju{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new ju(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class M2{constructor(e,n){this.bary=e,this.grav=n}}function au(t,e,n,i){return new Kt(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function ug(t,e,n){return new Kt(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Md(t,e){const n=t-e.tt,i=new Wu(t),r=au(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=au(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new ju(t,o,a,l);return new M2(i,c)}const jS=[];function E2(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function Ed(t){const e=WS(t),n=new Wu(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new ju(e.tt,i,r,s);return new M2(n,o)}function XS(t,e){const n=Zr[0][0];if(e<n||e>Zr[Sd-1][0])return null;const i=E2((e-n)/GS,Sd-1);if(!t[i]){const s=t[i]=[];s[0]=Ed(Zr[i]).grav,s[bi-1]=Ed(Zr[i+1]).grav;let o,a=s[0].tt;for(o=1;o<bi-1;++o)s[o]=Md(a+=Js,s[o-1]).grav;a=s[bi-1].tt;var r=[];for(r[bi-1]=s[bi-1],o=bi-2;o>0;--o)r[o]=Md(a-=Js,r[o+1]).grav;for(o=bi-2;o>0;--o){const l=o/(bi-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function fg(t,e,n){let i=Ed(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Md(s+1===r?e:i.grav.tt+n,i.grav);return i}function T2(t,e){let n,i,r;const s=XS(jS,t.tt);if(s){const o=E2((t.tt-s[0].tt)/Js,bi-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),u=au(t.tt-a.tt,a.r,a.v,c),f=ug(t.tt-a.tt,a.v,c),h=au(t.tt-l.tt,l.r,l.v,c),m=ug(t.tt-l.tt,l.v,c),g=(t.tt-a.tt)/Js;n=u.mul(1-g).add(h.mul(g)),i=f.mul(1-g).add(m.mul(g))}else{let o;t.tt<Zr[0][0]?o=fg(Zr[0],t.tt,-Js):o=fg(Zr[Sd-1],t.tt,+Js),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new Wu(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new dr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function Wa(t,e){var n=Ln(e);if(t in Oi)return Ta(Oi[t],n);if(t===we.Pluto){const o=T2(n);return new wt(o.x,o.y,o.z,n)}if(t===we.Sun)return new wt(0,0,0,n);if(t===we.Moon){var i=Ta(Oi.Earth,n),r=So(n);return new wt(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===we.EMB){const o=Ta(Oi.Earth,n),a=So(n),l=1+d2;return new wt(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===we.SSB)return VS(n);const s=wp(t);if(s){const o=new Ea(s.dec,15*s.ra,s.dist);return Ac(o,n)}throw`HelioVector: Unknown body "${t}"`}function $S(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/c2;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class YS{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=Wa(this.observerBody,e));const n=Wa(this.targetBody,e);return new wt(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function qS(t,e,n,i){const r=Ln(t);if(wp(n)){const a=Wa(n,r);{const l=JS(e,r),c=new wt(a.x-l.x,a.y-l.y,a.z-l.z,r),u=c2/c.Length();return new wt(c.x+l.vx/u,c.y+l.vy/u,c.z+l.vz/u,r)}}let s;s=new wt(0,0,0,r);const o=new YS(e,n,i,s);return $S(a=>o.Position(a),r)}function KS(t,e,n){const i=Ln(e);switch(t){case we.Earth:return new wt(0,0,0,i);case we.Moon:return So(i);default:const r=qS(i,we.Earth,t,n);return r.t=i,r}}function ZS(t,e){return new dr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function JS(t,e){const n=Ln(e);switch(t){case we.Sun:return new dr(0,0,0,0,0,0,n);case we.SSB:const i=new Wu(n.tt);return new dr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case we.Mercury:case we.Venus:case we.Earth:case we.Mars:case we.Jupiter:case we.Saturn:case we.Uranus:case we.Neptune:const r=yd(Oi[t],n.tt);return ZS(r,n);case we.Pluto:return T2(n);case we.Moon:case we.EMB:const s=yd(Oi.Earth,n.tt),o=t==we.Moon?y2(n):HS(n);return new dr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(wp(t)){const a=Wa(t,n);return new dr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function QS(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case we.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case we.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case we.Mars:r=-1.52,s=1.6;break;case we.Jupiter:r=-9.4,s=.5;break;case we.Uranus:r=-7.19,s=.25;break;case we.Neptune:r=-6.87;break;case we.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function eM(t,e,n,i,r){const s=BS(i),o=kt*28.06,a=kt*(169.51+382e-7*r.tt),l=kt*s.elat,c=kt*s.elon,u=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),f=Math.sin(Math.abs(u));let h=-9+.044*t;return h+=f*(-2.6+1.2*f),h+=5*Math.log10(e*n),{mag:h,ring_tilt:yo*u}}function tM(t,e,n){let i=t*kt,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/u2;let l=n/a;return o+=5*Math.log10(e*l),o}class nM{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(kt*i))/2}}function iM(t,e){if(t===we.Earth)throw"The illumination of the Earth is not defined.";const n=Ln(e),i=Ta(Oi.Earth,n);let r,s,o,a;t===we.Sun?(o=new wt(-i.x,-i.y,-i.z,n),s=new wt(0,0,0,n),r=0):(t===we.Moon?(o=So(n),s=new wt(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=Wa(t,e),o=new wt(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=ES(o,s));let l=o.Length(),c=s.Length(),u;if(t===we.Sun)a=yS+5*Math.log10(l);else if(t===we.Moon)a=tM(r,c,l);else if(t===we.Saturn){const f=eM(r,c,l,o,n);a=f.mag,u=f.ring_tilt}else a=QS(t,r,c,l);return new nM(n,a,r,c,l,o,s,u)}var dg;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(dg||(dg={}));function w2(t){return new Cr([[t.rot[0][0],t.rot[1][0],t.rot[2][0]],[t.rot[0][1],t.rot[1][1],t.rot[2][1]],[t.rot[0][2],t.rot[1][2],t.rot[2][2]]])}function A2(t,e){return new Cr([[e.rot[0][0]*t.rot[0][0]+e.rot[1][0]*t.rot[0][1]+e.rot[2][0]*t.rot[0][2],e.rot[0][1]*t.rot[0][0]+e.rot[1][1]*t.rot[0][1]+e.rot[2][1]*t.rot[0][2],e.rot[0][2]*t.rot[0][0]+e.rot[1][2]*t.rot[0][1]+e.rot[2][2]*t.rot[0][2]],[e.rot[0][0]*t.rot[1][0]+e.rot[1][0]*t.rot[1][1]+e.rot[2][0]*t.rot[1][2],e.rot[0][1]*t.rot[1][0]+e.rot[1][1]*t.rot[1][1]+e.rot[2][1]*t.rot[1][2],e.rot[0][2]*t.rot[1][0]+e.rot[1][2]*t.rot[1][1]+e.rot[2][2]*t.rot[1][2]],[e.rot[0][0]*t.rot[2][0]+e.rot[1][0]*t.rot[2][1]+e.rot[2][0]*t.rot[2][2],e.rot[0][1]*t.rot[2][0]+e.rot[1][1]*t.rot[2][1]+e.rot[2][1]*t.rot[2][2],e.rot[0][2]*t.rot[2][0]+e.rot[1][2]*t.rot[2][1]+e.rot[2][2]*t.rot[2][2]]])}function Ac(t,e){e=Ln(e);const n=t.lat*kt,i=t.lon*kt,r=t.dist*Math.cos(n);return new wt(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function rM(t){const e=C2(t);return new FS(e.lon/15,e.lat,e.dist,t)}function C2(t){const e=t.x*t.x+t.y*t.y,n=Math.sqrt(e+t.z*t.z);let i,r;if(e===0){if(t.z===0)throw"Zero-length vector not allowed.";r=0,i=t.z<0?-90:90}else r=yo*Math.atan2(t.y,t.x),r<0&&(r+=360),i=yo*Math.atan2(t.z,Math.sqrt(e));return new Ea(i,r,n)}function sM(t){return t=360-t,t>=360?t-=360:t<0&&(t+=360),t}function oM(t,e){const n=C2(t);return n.lon=sM(n.lon),n.lat+=aM(e,n.lat),n}function aM(t,e){let n;return jn(e),e<-90||e>90?0:(n=0,n)}function $o(t,e){return new wt(t.rot[0][0]*e.x+t.rot[1][0]*e.y+t.rot[2][0]*e.z,t.rot[0][1]*e.x+t.rot[1][1]*e.y+t.rot[2][1]*e.z,t.rot[0][2]*e.x+t.rot[1][2]*e.y+t.rot[2][2]*e.z,e.t)}function lM(t){t=Ln(t);const e=_2(t,fi.Into2000),n=g2(t,fi.Into2000);return A2(e,n)}function cM(t,e){t=Ln(t);const n=Math.sin(e.latitude*kt),i=Math.cos(e.latitude*kt),r=Math.sin(e.longitude*kt),s=Math.cos(e.longitude*kt),o=[i*s,i*r,n],a=[-n*s,-n*r,i],l=[r,-s,0],c=-15*v2(t),u=bf(c,o),f=bf(c,a),h=bf(c,l);return new Cr([[f[0],h[0],u[0]],[f[1],h[1],u[1]],[f[2],h[2],u[2]]])}function uM(t,e){const n=cM(t,e);return w2(n)}function fM(t,e){t=Ln(t);const n=uM(t,e),i=lM(t);return A2(n,i)}function dM(t,e){const n=fM(t,e);return w2(n)}var hg;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(hg||(hg={}));var pg;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(pg||(pg={}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="169",hM=0,mg=1,pM=2,R2=1,mM=2,Li=3,Rr=0,ln=1,_i=2,Er=0,co=1,gg=2,vg=3,_g=4,gM=5,Xr=100,vM=101,_M=102,xM=103,yM=104,SM=200,MM=201,EM=202,TM=203,Td=204,wd=205,wM=206,AM=207,CM=208,RM=209,PM=210,bM=211,LM=212,DM=213,IM=214,Ad=0,Cd=1,Rd=2,Mo=3,Pd=4,bd=5,Ld=6,Dd=7,P2=0,UM=1,NM=2,Tr=0,FM=1,OM=2,zM=3,kM=4,BM=5,HM=6,VM=7,b2=300,Eo=301,To=302,Id=303,Ud=304,Xu=306,Nd=1e3,Jr=1001,Fd=1002,Hn=1003,GM=1004,Dl=1005,ri=1006,Df=1007,Qr=1008,Xi=1009,L2=1010,D2=1011,ja=1012,Rp=1013,ls=1014,zi=1015,rl=1016,Pp=1017,bp=1018,wo=1020,I2=35902,U2=1021,N2=1022,oi=1023,F2=1024,O2=1025,uo=1026,Ao=1027,z2=1028,Lp=1029,k2=1030,Dp=1031,Ip=1033,Cc=33776,Rc=33777,Pc=33778,bc=33779,Od=35840,zd=35841,kd=35842,Bd=35843,Hd=36196,Vd=37492,Gd=37496,Wd=37808,jd=37809,Xd=37810,$d=37811,Yd=37812,qd=37813,Kd=37814,Zd=37815,Jd=37816,Qd=37817,eh=37818,th=37819,nh=37820,ih=37821,Lc=36492,rh=36494,sh=36495,B2=36283,oh=36284,ah=36285,lh=36286,WM=3200,jM=3201,XM=0,$M=1,cr="",mi="srgb",Dr="srgb-linear",Up="display-p3",$u="display-p3-linear",lu="linear",mt="srgb",cu="rec709",uu="p3",xs=7680,xg=519,YM=512,qM=513,KM=514,H2=515,ZM=516,JM=517,QM=518,eE=519,ch=35044,yg="300 es",ki=2e3,fu=2001;class No{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sg=1234567;const wa=Math.PI/180,Xa=180/Math.PI;function Hi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function Np(t,e){return(t%e+e)%e}function tE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function nE(t,e,n){return t!==e?(n-t)/(e-t):0}function Aa(t,e,n){return(1-n)*t+n*e}function iE(t,e,n,i){return Aa(t,e,1-Math.exp(-n*i))}function rE(t,e=1){return e-Math.abs(Np(t,e*2)-e)}function sE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function oE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function aE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function lE(t,e){return t+Math.random()*(e-t)}function cE(t){return t*(.5-Math.random())}function uE(t){t!==void 0&&(Sg=t);let e=Sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fE(t){return t*wa}function dE(t){return t*Xa}function hE(t){return(t&t-1)===0&&t!==0}function pE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function mE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function gE(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*m,a*c);break;case"YXY":t.set(l*m,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mg={DEG2RAD:wa,RAD2DEG:Xa,generateUUID:Hi,clamp:sn,euclideanModulo:Np,mapLinear:tE,inverseLerp:nE,lerp:Aa,damp:iE,pingpong:rE,smoothstep:sE,smootherstep:oE,randInt:aE,randFloat:lE,randFloatSpread:cE,seededRandom:uE,degToRad:fE,radToDeg:dE,isPowerOfTwo:hE,ceilPowerOfTwo:pE,floorPowerOfTwo:mE,setQuaternionFromProperEuler:gE,normalize:at,denormalize:si};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],x=r[0],p=r[3],d=r[6],_=r[1],v=r[4],S=r[7],C=r[2],A=r[5],w=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*p+a*v+l*A,s[6]=o*d+a*S+l*w,s[1]=c*x+u*_+f*C,s[4]=c*p+u*v+f*A,s[7]=c*d+u*S+f*w,s[2]=h*x+m*_+g*C,s[5]=h*p+m*v+g*A,s[8]=h*d+m*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=n*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(If.makeScale(e,n)),this}rotate(e){return this.premultiply(If.makeRotation(-e)),this}translate(e,n){return this.premultiply(If.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const If=new Ge;function V2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vE(){const t=du("canvas");return t.style.display="block",t}const Eg={};function Dc(t){t in Eg||(Eg[t]=!0,console.warn(t))}function _E(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function xE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tg=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wg=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yo={[Dr]:{transfer:lu,primaries:cu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[mi]:{transfer:mt,primaries:cu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$u]:{transfer:lu,primaries:uu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(wg),fromReference:t=>t.applyMatrix3(Tg)},[Up]:{transfer:mt,primaries:uu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(wg),fromReference:t=>t.applyMatrix3(Tg).convertLinearToSRGB()}},SE=new Set([Dr,$u]),st={enabled:!0,_workingColorSpace:Dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!SE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Yo[e].toReference,r=Yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Yo[t].primaries},getTransfer:function(t){return t===cr?lu:Yo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Yo[e].luminanceCoefficients)}};function fo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ys;class ME{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=du("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=du("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fo(n[i]/255)*255):n[i]=fo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EE=0;class G2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nf(r[o].image)):s.push(Nf(r[o]))}else s=Nf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ME.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TE=0;class cn extends No{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Jr,r=Jr,s=ri,o=Qr,a=oi,l=Xi,c=cn.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Hi(),this.name="",this.source=new G2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=b2;cn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,C=(d+1)/2,A=(u+h)/4,w=(f+x)/4,P=(g+p)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=w/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wE extends No{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new G2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends wE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class W2 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AE extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==h||c!==m||u!==g){let p=1-a;const d=l*h+c*m+u*g+f*x,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,d*_);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const S=a*_;if(l=l*p+h*S,c=c*p+m*S,u=u*p+g*S,f=f*p+x*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*m-c*h,e[n+1]=l*g+u*h+c*f-a*m,e[n+2]=c*g+u*m+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ag.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ag.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ff=new O,Ag=new us;class sl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Il.copy(i.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Ul.subVectors(this.max,qo),Ss.subVectors(e.a,qo),Ms.subVectors(e.b,qo),Es.subVectors(e.c,qo),Qi.subVectors(Ms,Ss),er.subVectors(Es,Ms),Nr.subVectors(Ss,Es);let n=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Nr.z,Nr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Nr.z,0,-Nr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Nr.y,Nr.x,0];return!Of(n,Ss,Ms,Es,Ul)||(n=[1,0,0,0,1,0,0,0,1],!Of(n,Ss,Ms,Es,Ul))?!1:(Nl.crossVectors(Qi,er),n=[Nl.x,Nl.y,Nl.z],Of(n,Ss,Ms,Es,Ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new O,new O,new O,new O,new O,new O,new O,new O],Zn=new O,Il=new sl,Ss=new O,Ms=new O,Es=new O,Qi=new O,er=new O,Nr=new O,qo=new O,Ul=new O,Nl=new O,Fr=new O;function Of(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const CE=new sl,Ko=new O,zf=new O;class ol{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(zf)),this.expandByPoint(Ko.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new O,kf=new O,Fl=new O,tr=new O,Bf=new O,Ol=new O,Hf=new O;class Yu{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kf.copy(e).add(n).multiplyScalar(.5),Fl.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(kf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fl),a=tr.dot(this.direction),l=-tr.dot(Fl),c=tr.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(kf).addScaledVector(Fl,h),m}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){Bf.subVectors(n,e),Ol.subVectors(i,e),Hf.crossVectors(Bf,Ol);let o=this.direction.dot(Hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(tr,Ol));if(l<0)return null;const c=a*this.direction.dot(Bf.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(Hf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,m,g,x,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,m,g,x,p)}set(e,n,i,r,s,o,a,l,c,u,f,h,m,g,x,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,x=c*f;n[0]=h+x*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-m,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=g*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+g,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=m*f-g,n[2]=g*f-m,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,PE)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),nr.crossVectors(i,Sn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),nr.crossVectors(i,Sn)),nr.normalize(),zl.crossVectors(Sn,nr),r[0]=nr.x,r[4]=zl.x,r[8]=Sn.x,r[1]=nr.y,r[5]=zl.y,r[9]=Sn.y,r[2]=nr.z,r[6]=zl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],x=i[6],p=i[10],d=i[14],_=i[3],v=i[7],S=i[11],C=i[15],A=r[0],w=r[4],P=r[8],k=r[12],y=r[1],M=r[5],j=r[9],B=r[13],V=r[2],I=r[6],U=r[10],q=r[14],L=r[3],K=r[7],$=r[11],ne=r[15];return s[0]=o*A+a*y+l*V+c*L,s[4]=o*w+a*M+l*I+c*K,s[8]=o*P+a*j+l*U+c*$,s[12]=o*k+a*B+l*q+c*ne,s[1]=u*A+f*y+h*V+m*L,s[5]=u*w+f*M+h*I+m*K,s[9]=u*P+f*j+h*U+m*$,s[13]=u*k+f*B+h*q+m*ne,s[2]=g*A+x*y+p*V+d*L,s[6]=g*w+x*M+p*I+d*K,s[10]=g*P+x*j+p*U+d*$,s[14]=g*k+x*B+p*q+d*ne,s[3]=_*A+v*y+S*V+C*L,s[7]=_*w+v*M+S*I+C*K,s[11]=_*P+v*j+S*U+C*$,s[15]=_*k+v*B+S*q+C*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],x=e[13],p=e[14],d=e[15],_=f*p*c-x*h*c+x*l*m-a*p*m-f*l*d+a*h*d,v=g*h*c-u*p*c-g*l*m+o*p*m+u*l*d-o*h*d,S=u*x*c-g*f*c+g*a*m-o*x*m-u*a*d+o*f*d,C=g*f*l-u*x*l-g*a*h+o*x*h+u*a*p-o*f*p,A=n*_+i*v+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(x*h*s-f*p*s-x*r*m+i*p*m+f*r*d-i*h*d)*w,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*w,e[4]=v*w,e[5]=(u*p*s-g*h*s+g*r*m-n*p*m-u*r*d+n*h*d)*w,e[6]=(g*l*s-o*p*s-g*r*c+n*p*c+o*r*d-n*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*m+n*l*m)*w,e[8]=S*w,e[9]=(g*f*s-u*x*s-g*i*m+n*x*m+u*i*d-n*f*d)*w,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*w,e[12]=C*w,e[13]=(u*x*r-g*f*r+g*i*h-n*x*h-u*i*p+n*f*p)*w,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*p-n*a*p)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,x=o*u,p=o*f,d=a*f,_=l*c,v=l*u,S=l*f,C=i.x,A=i.y,w=i.z;return r[0]=(1-(x+d))*C,r[1]=(m+S)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(h+d))*A,r[6]=(p+_)*A,r[7]=0,r[8]=(g+v)*w,r[9]=(p-_)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ts.set(r[0],r[1],r[2]).length();const o=Ts.set(r[4],r[5],r[6]).length(),a=Ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,u=1/o,f=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ki){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(a===ki)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fu)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ki){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*u;let g,x;if(a===ki)g=(o+s)*f,x=-2*f;else if(a===fu)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ts=new O,Jn=new xt,RE=new O(0,0,0),PE=new O(1,1,1),nr=new O,zl=new O,Sn=new O,Cg=new xt,Rg=new us;class $i{constructor(e=0,n=0,i=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const Pg=new O,ws=new us,Ai=new xt,kl=new O,Zo=new O,LE=new O,DE=new us,bg=new O(1,0,0),Lg=new O(0,1,0),Dg=new O(0,0,1),Ig={type:"added"},IE={type:"removed"},As={type:"childadded",child:null},Vf={type:"childremoved",child:null};class Jt extends No{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new O,n=new $i,i=new us,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ge}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(bg,e)}rotateY(e){return this.rotateOnAxis(Lg,e)}rotateZ(e){return this.rotateOnAxis(Dg,e)}translateOnAxis(e,n){return Pg.copy(e).applyQuaternion(this.quaternion),this.position.add(Pg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bg,e)}translateY(e){return this.translateOnAxis(Lg,e)}translateZ(e){return this.translateOnAxis(Dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?kl.copy(e):kl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Zo,kl,this.up):Ai.lookAt(kl,Zo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ws.setFromRotationMatrix(Ai),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ig),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IE),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ig),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,LE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,DE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new O(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new O,Ci=new O,Gf=new O,Ri=new O,Cs=new O,Rs=new O,Ug=new O,Wf=new O,jf=new O,Xf=new O,$f=new Rt,Yf=new Rt,qf=new Rt;class zn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Ci.subVectors(i,n),Gf.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Ci),l=Qn.dot(Gf),c=Ci.dot(Ci),u=Ci.dot(Gf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return $f.setScalar(0),Yf.setScalar(0),qf.setScalar(0),$f.fromBufferAttribute(e,n),Yf.fromBufferAttribute(e,i),qf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($f,s.x),o.addScaledVector(Yf,s.y),o.addScaledVector(qf,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Ci.subVectors(e,n),Qn.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Qn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cs.subVectors(r,i),Rs.subVectors(s,i),Wf.subVectors(e,i);const l=Cs.dot(Wf),c=Rs.dot(Wf);if(l<=0&&c<=0)return n.copy(i);jf.subVectors(e,r);const u=Cs.dot(jf),f=Rs.dot(jf);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Cs,o);Xf.subVectors(e,s);const m=Cs.dot(Xf),g=Rs.dot(Xf);if(g>=0&&m<=g)return n.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Rs,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Ug.subVectors(s,r),a=(f-u)/(f-u+(m-g)),n.copy(r).addScaledVector(Ug,a);const d=1/(p+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Kf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Np(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Kf(o,s,e+1/3),this.g=Kf(o,s,e),this.b=Kf(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=mi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const i=j2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=Uf(e.r),this.g=Uf(e.g),this.b=Uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(sn(qt.r*255,0,255))*65536+Math.round(sn(qt.g*255,0,255))*256+Math.round(sn(qt.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=mi){st.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(Bl);const i=Aa(ir.h,Bl.h,n),r=Aa(ir.s,Bl.s,n),s=Aa(ir.l,Bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new je;je.NAMES=j2;let UE=0;class ms extends No{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=co,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=wd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==wd&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hu extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=P2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new O,Hl=new $e;class on{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ch,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hl.fromBufferAttribute(this,n),Hl.applyMatrix3(e),this.setXY(n,Hl.x,Hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=si(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=si(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=si(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=si(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}}class X2 extends on{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $2 extends on{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qt extends on{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NE=0;const In=new xt,Zf=new Jt,Ps=new O,Mn=new sl,Jo=new sl,Ot=new O;class Lt extends No{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V2(e)?$2:X2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Mn.min,Jo.min),Mn.expandByPoint(Ot),Ot.addVectors(Mn.max,Jo.max),Mn.expandByPoint(Ot)):(Mn.expandByPoint(Jo.min),Mn.expandByPoint(Jo.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Ot.add(Ps)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,f=new O,h=new $e,m=new $e,g=new $e,x=new O,p=new O;function d(P,k,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,k),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,k),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(M),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(M),a[P].add(x),a[k].add(x),a[y].add(x),l[P].add(p),l[k].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,k=_.length;P<k;++P){const y=_[P],M=y.start,j=y.count;for(let B=M,V=M+j;B<V;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new O,S=new O,C=new O,A=new O;function w(P){C.fromBufferAttribute(r,P),A.copy(C);const k=a[P];v.copy(k),v.sub(C.multiplyScalar(C.dot(k))).normalize(),S.crossVectors(A,k);const M=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,M)}for(let P=0,k=_.length;P<k;++P){const y=_[P],M=y.start,j=y.count;for(let B=M,V=M+j;B<V;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new on(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Lt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ng=new xt,Or=new Yu,Vl=new ol,Fg=new O,Gl=new O,Wl=new O,jl=new O,Jf=new O,Xl=new O,Og=new O,$l=new O;class ai extends Jt{constructor(e=new Lt,n=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Jf.fromBufferAttribute(f,e),o?Xl.addScaledVector(Jf,u):Xl.addScaledVector(Jf.sub(n),u))}n.add(Xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Vl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Vl,Fg)===null||Or.origin.distanceToSquared(Fg)>(e.far-e.near)**2))&&(Ng.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Ng),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],d=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,C=v;S<C;S+=3){const A=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=Yl(this,d,e,i,c,u,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const _=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=Yl(this,o,e,i,c,u,f,_,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],d=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,C=v;S<C;S+=3){const A=S,w=S+1,P=S+2;r=Yl(this,d,e,i,c,u,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const _=p,v=p+1,S=p+2;r=Yl(this,o,e,i,c,u,f,_,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function FE(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;$l.copy(a),$l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($l);return c<n.near||c>n.far?null:{distance:c,point:$l.clone(),object:t}}function Yl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Gl),t.getVertexPosition(l,Wl),t.getVertexPosition(c,jl);const u=FE(t,e,n,i,Gl,Wl,jl,Og);if(u){const f=new O;zn.getBarycoord(Og,Gl,Wl,jl,f),r&&(u.uv=zn.getInterpolatedAttribute(r,a,l,c,f,new $e)),s&&(u.uv1=zn.getInterpolatedAttribute(s,a,l,c,f,new $e)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};zn.getNormal(Gl,Wl,jl,h.normal),u.face=h,u.barycoord=f}return u}class al extends Lt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(x,p,d,_,v,S,C,A,w,P,k){const y=S/w,M=C/P,j=S/2,B=C/2,V=A/2,I=w+1,U=P+1;let q=0,L=0;const K=new O;for(let $=0;$<U;$++){const ne=$*M-B;for(let ye=0;ye<I;ye++){const Ie=ye*y-j;K[x]=Ie*_,K[p]=ne*v,K[d]=V,c.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[d]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(ye/w),f.push(1-$/P),q+=1}}for(let $=0;$<P;$++)for(let ne=0;ne<w;ne++){const ye=h+ne+I*$,Ie=h+ne+I*($+1),Y=h+(ne+1)+I*($+1),ee=h+(ne+1)+I*$;l.push(ye,Ie,ee),l.push(Ie,Y,ee),L+=6}a.addGroup(m,L,k),m+=L,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Co(t[n]);for(const r in i)e[r]=i[r]}return e}function OE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Y2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const zE={clone:Co,merge:nn};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class q2 extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new O,zg=new $e,kg=new $e;class On extends q2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,zg,kg),n.subVectors(kg,zg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ls=1;class HE extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(bs,Ls,e,n);r.layers=this.layers,this.add(r);const s=new On(bs,Ls,e,n);s.layers=this.layers,this.add(s);const o=new On(bs,Ls,e,n);o.layers=this.layers,this.add(o);const a=new On(bs,Ls,e,n);a.layers=this.layers,this.add(a);const l=new On(bs,Ls,e,n);l.layers=this.layers,this.add(l);const c=new On(bs,Ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class K2 extends cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Eo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VE extends cs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new K2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new al(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Er});s.uniforms.tEquirect.value=n;const o=new ai(r,s),a=n.minFilter;return n.minFilter===Qr&&(n.minFilter=ri),new HE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Qf=new O,GE=new O,WE=new Ge;class Gr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qf.subVectors(i,n).cross(GE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WE.getNormalMatrix(e),r=this.coplanarPoint(Qf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new ol,ql=new O;class Z2{constructor(e=new Gr,n=new Gr,i=new Gr,r=new Gr,s=new Gr,o=new Gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],x=r[10],p=r[11],d=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-m,S-d).normalize(),i[1].setComponents(l+s,h+c,p+m,S+d).normalize(),i[2].setComponents(l+o,h+u,p+g,S+_).normalize(),i[3].setComponents(l-o,h-u,p-g,S-_).normalize(),i[4].setComponents(l-a,h-f,p-x,S-v).normalize(),n===ki)i[5].setComponents(l+a,h+f,p+x,S+v).normalize();else if(n===fu)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ql.x=r.normal.x>0?e.max.x:e.min.x,ql.y=r.normal.y>0?e.max.y:e.min.y,ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const x=f[m];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class qu extends Lt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,m=[],g=[],x=[],p=[];for(let d=0;d<u;d++){const _=d*h-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+c*d,S=_+c*(d+1),C=_+1+c*(d+1),A=_+1+c*d;m.push(v,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.widthSegments,e.heightSegments)}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$E=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e4=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r4=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m4=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g4=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v4=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M4="gl_FragColor = linearToOutputTexel( gl_FragColor );",E4=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A4=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I4=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F4=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O4=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z4=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B4=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V4=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G4=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W4=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j4=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X4=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ET=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ew=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ew=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:XE,alphahash_pars_fragment:$E,alphamap_fragment:YE,alphamap_pars_fragment:qE,alphatest_fragment:KE,alphatest_pars_fragment:ZE,aomap_fragment:JE,aomap_pars_fragment:QE,batching_pars_vertex:e4,batching_vertex:t4,begin_vertex:n4,beginnormal_vertex:i4,bsdfs:r4,iridescence_fragment:s4,bumpmap_pars_fragment:o4,clipping_planes_fragment:a4,clipping_planes_pars_fragment:l4,clipping_planes_pars_vertex:c4,clipping_planes_vertex:u4,color_fragment:f4,color_pars_fragment:d4,color_pars_vertex:h4,color_vertex:p4,common:m4,cube_uv_reflection_fragment:g4,defaultnormal_vertex:v4,displacementmap_pars_vertex:_4,displacementmap_vertex:x4,emissivemap_fragment:y4,emissivemap_pars_fragment:S4,colorspace_fragment:M4,colorspace_pars_fragment:E4,envmap_fragment:T4,envmap_common_pars_fragment:w4,envmap_pars_fragment:A4,envmap_pars_vertex:C4,envmap_physical_pars_fragment:z4,envmap_vertex:R4,fog_vertex:P4,fog_pars_vertex:b4,fog_fragment:L4,fog_pars_fragment:D4,gradientmap_pars_fragment:I4,lightmap_pars_fragment:U4,lights_lambert_fragment:N4,lights_lambert_pars_fragment:F4,lights_pars_begin:O4,lights_toon_fragment:k4,lights_toon_pars_fragment:B4,lights_phong_fragment:H4,lights_phong_pars_fragment:V4,lights_physical_fragment:G4,lights_physical_pars_fragment:W4,lights_fragment_begin:j4,lights_fragment_maps:X4,lights_fragment_end:$4,logdepthbuf_fragment:Y4,logdepthbuf_pars_fragment:q4,logdepthbuf_pars_vertex:K4,logdepthbuf_vertex:Z4,map_fragment:J4,map_pars_fragment:Q4,map_particle_fragment:eT,map_particle_pars_fragment:tT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:aT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:fT,normal_pars_vertex:dT,normal_vertex:hT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:vT,iridescence_pars_fragment:_T,opaque_fragment:xT,packing:yT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:ET,dithering_pars_fragment:TT,roughnessmap_fragment:wT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:RT,shadowmap_vertex:PT,shadowmask_pars_fragment:bT,skinbase_vertex:LT,skinning_pars_vertex:DT,skinning_vertex:IT,skinnormal_vertex:UT,specularmap_fragment:NT,specularmap_pars_fragment:FT,tonemapping_fragment:OT,tonemapping_pars_fragment:zT,transmission_fragment:kT,transmission_pars_fragment:BT,uv_pars_fragment:HT,uv_pars_vertex:VT,uv_vertex:GT,worldpos_vertex:WT,background_vert:jT,background_frag:XT,backgroundCube_vert:$T,backgroundCube_frag:YT,cube_vert:qT,cube_frag:KT,depth_vert:ZT,depth_frag:JT,distanceRGBA_vert:QT,distanceRGBA_frag:ew,equirect_vert:tw,equirect_frag:nw,linedashed_vert:iw,linedashed_frag:rw,meshbasic_vert:sw,meshbasic_frag:ow,meshlambert_vert:aw,meshlambert_frag:lw,meshmatcap_vert:cw,meshmatcap_frag:uw,meshnormal_vert:fw,meshnormal_frag:dw,meshphong_vert:hw,meshphong_frag:pw,meshphysical_vert:mw,meshphysical_frag:gw,meshtoon_vert:vw,meshtoon_frag:_w,points_vert:xw,points_frag:yw,shadow_vert:Sw,shadow_frag:Mw,sprite_vert:Ew,sprite_frag:Tw},ue={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},gi={basic:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:nn([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:nn([ue.lights,ue.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};gi.physical={uniforms:nn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Kl={r:0,b:0,g:0},kr=new $i,ww=new xt;function Aw(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=g(_);S===null?d(a,l):S&&S.isColor&&(d(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Xu)?(u===void 0&&(u=new ai(new al(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Co(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(v.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ww.makeRotationFromEuler(kr)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,(f!==S||h!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ai(new qu(2,2),new Yi({name:"BackgroundMaterial",uniforms:Co(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(Kl,Y2(t)),i.buffers.color.setClear(Kl.r,Kl.g,Kl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:p}}function Cw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,M,j,B,V){let I=!1;const U=f(B,j,M);s!==U&&(s=U,c(s.object)),I=m(y,B,j,V),I&&g(y,B,j,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,S(y,M,j,B),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,M,j){const B=j.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let I=V[M.id];I===void 0&&(I={},V[M.id]=I);let U=I[B];return U===void 0&&(U=h(l()),I[B]=U),U}function h(y){const M=[],j=[],B=[];for(let V=0;V<n;V++)M[V]=0,j[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:j,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,M,j,B){const V=s.attributes,I=M.attributes;let U=0;const q=j.getAttributes();for(const L in q)if(q[L].location>=0){const $=V[L];let ne=I[L];if(ne===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;U++}return s.attributesNum!==U||s.index!==B}function g(y,M,j,B){const V={},I=M.attributes;let U=0;const q=j.getAttributes();for(const L in q)if(q[L].location>=0){let $=I[L];$===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),V[L]=ne,U++}s.attributes=V,s.attributesNum=U,s.index=B}function x(){const y=s.newAttributes;for(let M=0,j=y.length;M<j;M++)y[M]=0}function p(y){d(y,0)}function d(y,M){const j=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;j[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),V[y]!==M&&(t.vertexAttribDivisor(y,M),V[y]=M)}function _(){const y=s.newAttributes,M=s.enabledAttributes;for(let j=0,B=M.length;j<B;j++)M[j]!==y[j]&&(t.disableVertexAttribArray(j),M[j]=0)}function v(y,M,j,B,V,I,U){U===!0?t.vertexAttribIPointer(y,M,j,V,I):t.vertexAttribPointer(y,M,j,B,V,I)}function S(y,M,j,B){x();const V=B.attributes,I=j.getAttributes(),U=M.defaultAttributeValues;for(const q in I){const L=I[q];if(L.location>=0){let K=V[q];if(K===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const $=K.normalized,ne=K.itemSize,ye=e.get(K);if(ye===void 0)continue;const Ie=ye.buffer,Y=ye.type,ee=ye.bytesPerElement,ce=Y===t.INT||Y===t.UNSIGNED_INT||K.gpuType===Rp;if(K.isInterleavedBufferAttribute){const fe=K.data,Ne=fe.stride,H=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<L.locationSize;Ue++)d(L.location+Ue,fe.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<L.locationSize;Ue++)p(L.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let Ue=0;Ue<L.locationSize;Ue++)v(L.location+Ue,ne/L.locationSize,Y,$,Ne*ee,(H+ne/L.locationSize*Ue)*ee,ce)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<L.locationSize;fe++)d(L.location+fe,K.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<L.locationSize;fe++)p(L.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let fe=0;fe<L.locationSize;fe++)v(L.location+fe,ne/L.locationSize,Y,$,ne*ee,ne/L.locationSize*fe*ee,ce)}}else if(U!==void 0){const $=U[q];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(L.location,$);break;case 3:t.vertexAttrib3fv(L.location,$);break;case 4:t.vertexAttrib4fv(L.location,$);break;default:t.vertexAttrib1fv(L.location,$)}}}}_()}function C(){P();for(const y in i){const M=i[y];for(const j in M){const B=M[j];for(const V in B)u(B[V].object),delete B[V];delete M[j]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const j in M){const B=M[j];for(const V in B)u(B[V].object),delete B[V];delete M[j]}delete i[y.id]}function w(y){for(const M in i){const j=i[M];if(j[y.id]===void 0)continue;const B=j[y.id];for(const V in B)u(B[V].object),delete B[V];delete j[y.id]}}function P(){k(),o=!0,s!==r&&(s=r,c(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Rw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];n.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];for(let x=0;x<h.length;x++)n.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==oi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Xi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zi&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function bw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const _=s?0:i,v=_*4;let S=d.clippingState||null;l.value=S,S=u(g,h,v,m);for(let C=0;C!==v;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const d=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,S=m;v!==x;++v,S+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Lw(t){let e=new WeakMap;function n(o,a){return a===Id?o.mapping=Eo:a===Ud&&(o.mapping=To),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Id||a===Ud)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new VE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dw extends q2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qs=4,Bg=[.125,.215,.35,.446,.526,.582],$r=20,e0=new Dw,Hg=new je;let t0=null,n0=0,i0=0,r0=!1;const Wr=(1+Math.sqrt(5))/2,Ds=1/Wr,Vg=[new O(-Wr,Ds,0),new O(Wr,Ds,0),new O(-Ds,0,Wr),new O(Ds,0,Wr),new O(0,Wr,-Ds),new O(0,Wr,Ds),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){t0=this._renderer.getRenderTarget(),n0=this._renderer.getActiveCubeFace(),i0=this._renderer.getActiveMipmapLevel(),r0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(t0,n0,i0),this._renderer.xr.enabled=r0,e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Eo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),t0=this._renderer.getRenderTarget(),n0=this._renderer.getActiveCubeFace(),i0=this._renderer.getActiveMipmapLevel(),r0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:rl,format:oi,colorSpace:Dr,depthBuffer:!1},r=Wg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iw(s)),this._blurMaterial=Uw(s,e,n)}return r}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,e0)}_sceneToCubeUV(e,n,i,r){const a=new On(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Hg),u.toneMapping=Tr,u.autoClear=!1;const m=new hu({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new ai(new al,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Hg),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Zl(r,_*v,d>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Eo||e.mapping===To;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,e0)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vg[(r-s-1)%Vg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ai(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$r-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):$r;p>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$r}`);const d=[];let _=0;for(let w=0;w<$r;++w){const P=w/x,k=Math.exp(-P*P/2);d.push(k),w===0?_+=k:w<p&&(_+=2*k)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Qs?r-v+Qs:0),A=4*(this._cubeSize-S);Zl(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(f,e0)}}function Iw(t){const e=[],n=[],i=[];let r=t;const s=t-Qs+1+Bg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Qs?l=Bg[o-t+Qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,x=3,p=2,d=1,_=new Float32Array(x*g*m),v=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,P=A>2?0:-1,k=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(k,x*g*A),v.set(h,p*g*A);const y=[A,A,A,A,A,A];S.set(y,d*g*A)}const C=new Lt;C.setAttribute("position",new on(_,x)),C.setAttribute("uv",new on(v,p)),C.setAttribute("faceIndex",new on(S,d)),e.push(C),r>Qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wg(t,e,n){const i=new cs(t,e,n);return i.texture.mapping=Xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Uw(t,e,n){const i=new Float32Array($r),r=new O(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function jg(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Xg(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Id||l===Ud,u=l===Eo||l===To;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Gg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Gg(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Fw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Dc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ow(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const x=m[g];for(let p=0,d=x.length;p<d;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let v=0,S=_.length;v<S;v+=3){const C=_[v+0],A=_[v+1],w=_[v+2];h.push(C,A,A,w,w,C)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const C=v+0,A=v+1,w=v+2;h.push(C,A,A,w,w,C)}}else return;const p=new(V2(h)?$2:X2)(h,1);p.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function zw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,h*o,g),n.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];n.update(p,i,1)}function f(h,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,g);let d=0;for(let _=0;_<g;_++)d+=m[_];for(let _=0;_<x.length;_++)n.update(d,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function kw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Bw(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*f),P=new W2(w,C,A,f);P.type=zi,P.needsUpdate=!0;const k=S*4;for(let M=0;M<f;M++){const j=d[M],B=_[M],V=v[M],I=C*A*4*M;for(let U=0;U<j.count;U++){const q=U*k;g===!0&&(r.fromBufferAttribute(j,U),w[I+q+0]=r.x,w[I+q+1]=r.y,w[I+q+2]=r.z,w[I+q+3]=0),x===!0&&(r.fromBufferAttribute(B,U),w[I+q+4]=r.x,w[I+q+5]=r.y,w[I+q+6]=r.z,w[I+q+7]=0),p===!0&&(r.fromBufferAttribute(V,U),w[I+q+8]=r.x,w[I+q+9]=r.y,w[I+q+10]=r.z,w[I+q+11]=V.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new $e(C,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Hw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Q2 extends cn{constructor(e,n,i,r,s,o,a,l,c,u=uo){if(u!==uo&&u!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===uo&&(i=ls),i===void 0&&u===Ao&&(i=wo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ex=new cn,$g=new Q2(1,1),tx=new W2,nx=new AE,ix=new K2,Yg=[],qg=[],Kg=new Float32Array(16),Zg=new Float32Array(9),Jg=new Float32Array(4);function Fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Yg[r];if(s===void 0&&(s=new Float32Array(r),Yg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ku(t,e){let n=qg[e];n===void 0&&(n=new Int32Array(e),qg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Nt(n,i))return;Jg.set(i),t.uniformMatrix2fv(this.addr,!1,Jg),Ft(n,i)}}function $w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Nt(n,i))return;Zg.set(i),t.uniformMatrix3fv(this.addr,!1,Zg),Ft(n,i)}}function Yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Nt(n,i))return;Kg.set(i),t.uniformMatrix4fv(this.addr,!1,Kg),Ft(n,i)}}function qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function Qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function e6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function t6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function n6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function i6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($g.compareFunction=H2,s=$g):s=ex,n.setTexture2D(e||s,r)}function r6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nx,r)}function s6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ix,r)}function o6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tx,r)}function a6(t){switch(t){case 5126:return Vw;case 35664:return Gw;case 35665:return Ww;case 35666:return jw;case 35674:return Xw;case 35675:return $w;case 35676:return Yw;case 5124:case 35670:return qw;case 35667:case 35671:return Kw;case 35668:case 35672:return Zw;case 35669:case 35673:return Jw;case 5125:return Qw;case 36294:return e6;case 36295:return t6;case 36296:return n6;case 35678:case 36198:case 36298:case 36306:case 35682:return i6;case 35679:case 36299:case 36307:return r6;case 35680:case 36300:case 36308:case 36293:return s6;case 36289:case 36303:case 36311:case 36292:return o6}}function l6(t,e){t.uniform1fv(this.addr,e)}function c6(t,e){const n=Fo(e,this.size,2);t.uniform2fv(this.addr,n)}function u6(t,e){const n=Fo(e,this.size,3);t.uniform3fv(this.addr,n)}function f6(t,e){const n=Fo(e,this.size,4);t.uniform4fv(this.addr,n)}function d6(t,e){const n=Fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function h6(t,e){const n=Fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function p6(t,e){const n=Fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function m6(t,e){t.uniform1iv(this.addr,e)}function g6(t,e){t.uniform2iv(this.addr,e)}function v6(t,e){t.uniform3iv(this.addr,e)}function _6(t,e){t.uniform4iv(this.addr,e)}function x6(t,e){t.uniform1uiv(this.addr,e)}function y6(t,e){t.uniform2uiv(this.addr,e)}function S6(t,e){t.uniform3uiv(this.addr,e)}function M6(t,e){t.uniform4uiv(this.addr,e)}function E6(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ex,s[o])}function T6(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||nx,s[o])}function w6(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ix,s[o])}function A6(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||tx,s[o])}function C6(t){switch(t){case 5126:return l6;case 35664:return c6;case 35665:return u6;case 35666:return f6;case 35674:return d6;case 35675:return h6;case 35676:return p6;case 5124:case 35670:return m6;case 35667:case 35671:return g6;case 35668:case 35672:return v6;case 35669:case 35673:return _6;case 5125:return x6;case 36294:return y6;case 36295:return S6;case 36296:return M6;case 35678:case 36198:case 36298:case 36306:case 35682:return E6;case 35679:case 36299:case 36307:return T6;case 35680:case 36300:case 36308:case 36293:return w6;case 36289:case 36303:case 36311:case 36292:return A6}}class R6{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=a6(n.type)}}class P6{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=C6(n.type)}}class b6{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const s0=/(\w+)(\])?(\[|\.)?/g;function Qg(t,e){t.seq.push(e),t.map[e.id]=e}function L6(t,e,n){const i=t.name,r=i.length;for(s0.lastIndex=0;;){const s=s0.exec(i),o=s0.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qg(n,c===void 0?new R6(a,t,e):new P6(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new b6(a),Qg(n,f)),n=f}}}class Ic{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);L6(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function e1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const D6=37297;let I6=0;function U6(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function N6(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===uu&&n===cu?i="LinearDisplayP3ToLinearSRGB":e===cu&&n===uu&&(i="LinearSRGBToLinearDisplayP3"),t){case Dr:case $u:return[i,"LinearTransferOETF"];case mi:case Up:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function t1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+U6(t.getShaderSource(e),o)}else return r}function F6(t,e){const n=N6(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function O6(t,e){let n;switch(e){case FM:n="Linear";break;case OM:n="Reinhard";break;case zM:n="Cineon";break;case kM:n="ACESFilmic";break;case HM:n="AgX";break;case VM:n="Neutral";break;case BM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jl=new O;function z6(){st.getLuminanceCoefficients(Jl);const t=Jl.x.toFixed(4),e=Jl.y.toFixed(4),n=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k6(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function B6(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function H6(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function la(t){return t!==""}function n1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V6=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(t){return t.replace(V6,W6)}const G6=new Map;function W6(t,e){let n=Ve[e];if(n===void 0){const i=G6.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(n)}const j6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r1(t){return t.replace(j6,X6)}function X6(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function s1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $6(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===R2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Y6(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Eo:case To:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q6(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function K6(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case P2:e="ENVMAP_BLENDING_MULTIPLY";break;case UM:e="ENVMAP_BLENDING_MIX";break;case NM:e="ENVMAP_BLENDING_ADD";break}return e}function Z6(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function J6(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$6(n),c=Y6(n),u=q6(n),f=K6(n),h=Z6(n),m=k6(n),g=B6(s),x=r.createProgram();let p,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),d.length>0&&(d+=`
`)):(p=[s1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),d=[s1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Tr?"#define TONE_MAPPING":"",n.toneMapping!==Tr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Tr?O6("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,F6("linearToOutputTexel",n.outputColorSpace),z6(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),o=uh(o),o=n1(o,n),o=i1(o,n),a=uh(a),a=n1(a,n),a=i1(a,n),o=r1(o),a=r1(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+p+o,S=_+d+a,C=e1(r,r.VERTEX_SHADER,v),A=e1(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(M){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(A).trim();let I=!0,U=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,A);else{const q=t1(r,C,"vertex"),L=t1(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+j+`
`+q+`
`+L)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(B===""||V==="")&&(U=!1);U&&(M.diagnostics={runnable:I,programLog:j,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:d}})}r.deleteShader(C),r.deleteShader(A),P=new Ic(r,x),k=H6(r,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let k;this.getAttributes=function(){return k===void 0&&w(this),k};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,D6)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I6++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let Q6=0;class e5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new t5(e),n.set(e,i)),i}}class t5{constructor(e){this.id=Q6++,this.code=e,this.usedTimes=0}}function n5(t,e,n,i,r,s,o){const a=new Fp,l=new e5,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,M,j,B,V){const I=B.fog,U=V.geometry,q=y.isMeshStandardMaterial?B.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),K=L&&L.mapping===Xu?L.image.height:null,$=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ne=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ye=ne!==void 0?ne.length:0;let Ie=0;U.morphAttributes.position!==void 0&&(Ie=1),U.morphAttributes.normal!==void 0&&(Ie=2),U.morphAttributes.color!==void 0&&(Ie=3);let Y,ee,ce,fe;if($){const hn=gi[$];Y=hn.vertexShader,ee=hn.fragmentShader}else Y=y.vertexShader,ee=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);const Ne=t.getRenderTarget(),H=V.isInstancedMesh===!0,Ue=V.isBatchedMesh===!0,Ke=!!y.map,me=!!y.matcap,b=!!L,ae=!!y.aoMap,le=!!y.lightMap,Ce=!!y.bumpMap,Te=!!y.normalMap,We=!!y.displacementMap,De=!!y.emissiveMap,R=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,Q=y.clearcoat>0,ie=y.dispersion>0,J=y.iridescence>0,Pe=y.sheen>0,de=y.transmission>0,Se=G&&!!y.anisotropyMap,tt=Q&&!!y.clearcoatMap,se=Q&&!!y.clearcoatNormalMap,Me=Q&&!!y.clearcoatRoughnessMap,ze=J&&!!y.iridescenceMap,ke=J&&!!y.iridescenceThicknessMap,Ee=Pe&&!!y.sheenColorMap,Ye=Pe&&!!y.sheenRoughnessMap,Be=!!y.specularMap,ut=!!y.specularColorMap,N=!!y.specularIntensityMap,ge=de&&!!y.transmissionMap,Z=de&&!!y.thicknessMap,te=!!y.gradientMap,he=!!y.alphaMap,ve=y.alphaTest>0,Ze=!!y.alphaHash,Pt=!!y.extensions;let dn=Tr;y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(dn=t.toneMapping);const nt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:ee,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ue,batchingColor:Ue&&V._colorsTexture!==null,instancing:H,instancingColor:H&&V.instanceColor!==null,instancingMorph:H&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Dr,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:me,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:K,aoMap:ae,lightMap:le,bumpMap:Ce,normalMap:Te,displacementMap:m&&We,emissiveMap:De,normalMapObjectSpace:Te&&y.normalMapType===$M,normalMapTangentSpace:Te&&y.normalMapType===XM,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:Se,clearcoat:Q,clearcoatMap:tt,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:ie,iridescence:J,iridescenceMap:ze,iridescenceThicknessMap:ke,sheen:Pe,sheenColorMap:Ee,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:ut,specularIntensityMap:N,transmission:de,transmissionMap:ge,thicknessMap:Z,gradientMap:te,opaque:y.transparent===!1&&y.blending===co&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:ve,alphaHash:Ze,combine:y.combine,mapUv:Ke&&p(y.map.channel),aoMapUv:ae&&p(y.aoMap.channel),lightMapUv:le&&p(y.lightMap.channel),bumpMapUv:Ce&&p(y.bumpMap.channel),normalMapUv:Te&&p(y.normalMap.channel),displacementMapUv:We&&p(y.displacementMap.channel),emissiveMapUv:De&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:E&&p(y.roughnessMap.channel),anisotropyMapUv:Se&&p(y.anisotropyMap.channel),clearcoatMapUv:tt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(y.sheenRoughnessMap.channel),specularMapUv:Be&&p(y.specularMap.channel),specularColorMapUv:ut&&p(y.specularColorMap.channel),specularIntensityMapUv:N&&p(y.specularIntensityMap.channel),transmissionMapUv:ge&&p(y.transmissionMap.channel),thicknessMapUv:Z&&p(y.thicknessMap.channel),alphaMapUv:he&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Te||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!U.attributes.uv&&(Ke||he),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:dn,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_i,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)M.push(j),M.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const M=x[y.type];let j;if(M){const B=gi[M];j=zE.clone(B.uniforms)}else j=y.uniforms;return j}function A(y,M){let j;for(let B=0,V=u.length;B<V;B++){const I=u[B];if(I.cacheKey===M){j=I,++j.usedTimes;break}}return j===void 0&&(j=new J6(t,M,y,s),u.push(j)),j}function w(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function k(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:C,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:k}}function i5(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function r5(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function o1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function a1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,g,x,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,m,g,x,p){const d=o(f,h,m,g,x,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,h,m,g,x,p){const d=o(f,h,m,g,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||r5),i.length>1&&i.sort(h||o1),r.length>1&&r.sort(h||o1)}function u(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function s5(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new a1,t.set(i,[o])):r>=s.length?(o=new a1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function o5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new je};break;case"SpotLight":n={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function a5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let l5=0;function c5(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function u5(t){const e=new o5,n=a5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new xt,o=new xt;function a(c){let u=0,f=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,g=0,x=0,p=0,d=0,_=0,v=0,S=0,C=0,A=0,w=0;c.sort(c5);for(let k=0,y=c.length;k<y;k++){const M=c[k],j=M.color,B=M.intensity,V=M.distance,I=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=j.r*B,f+=j.g*B,h+=j.b*B;else if(M.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(M.sh.coefficients[U],B);w++}else if(M.isDirectionalLight){const U=e.get(M);if(U.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const q=M.shadow,L=n.get(M);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=M.shadow.matrix,_++}i.directional[m]=U,m++}else if(M.isSpotLight){const U=e.get(M);U.position.setFromMatrixPosition(M.matrixWorld),U.color.copy(j).multiplyScalar(B),U.distance=V,U.coneCos=Math.cos(M.angle),U.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),U.decay=M.decay,i.spot[x]=U;const q=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,q.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=q.matrix,M.castShadow){const L=n.get(M);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=I,S++}x++}else if(M.isRectAreaLight){const U=e.get(M);U.color.copy(j).multiplyScalar(B),U.halfWidth.set(M.width*.5,0,0),U.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=U,p++}else if(M.isPointLight){const U=e.get(M);if(U.color.copy(M.color).multiplyScalar(M.intensity),U.distance=M.distance,U.decay=M.decay,M.castShadow){const q=M.shadow,L=n.get(M);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,L.shadowCameraNear=q.camera.near,L.shadowCameraFar=q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=U,g++}else if(M.isHemisphereLight){const U=e.get(M);U.skyColor.copy(M.color).multiplyScalar(B),U.groundColor.copy(M.groundColor).multiplyScalar(B),i.hemi[d]=U,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=m,P.pointLength=g,P.spotLength=x,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=w,i.version=l5++)}function l(c,u){let f=0,h=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const v=c[d];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function l1(t){const e=new u5(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function f5(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new l1(t),e.set(r,[a])):s>=o.length?(a=new l1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class d5 extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h5 extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g5(t,e,n){let i=new Z2;const r=new $e,s=new $e,o=new Rt,a=new d5({depthPacking:jM}),l=new h5,c={},u=n.maxTextureSize,f={[Rr]:ln,[ln]:Rr,[_i]:_i},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:p5,fragmentShader:m5}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ai(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R2;let d=this.type;this.render=function(A,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const k=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Er),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const B=d!==Li&&this.type===Li,V=d===Li&&this.type!==Li;for(let I=0,U=A.length;I<U;I++){const q=A[I],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const K=L.getFrameExtents();if(r.multiply(K),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,L.mapSize.y=s.y)),L.map===null||B===!0||V===!0){const ne=this.type!==Li?{minFilter:Hn,magFilter:Hn}:{};L.map!==null&&L.map.dispose(),L.map=new cs(r.x,r.y,ne),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const $=L.getViewportCount();for(let ne=0;ne<$;ne++){const ye=L.getViewport(ne);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),j.viewport(o),L.updateMatrices(q,ne),i=L.getFrustum(),S(w,P,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===Li&&_(L,P),L.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(k,y,M)};function _(A,w){const P=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cs(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,m,x,null)}function v(A,w,P,k){let y=null;const M=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=y.uuid,B=w.uuid;let V=c[j];V===void 0&&(V={},c[j]=V);let I=V[B];I===void 0&&(I=y.clone(),V[B]=I,w.addEventListener("dispose",C)),y=I}if(y.visible=w.visible,y.wireframe=w.wireframe,k===Li?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=t.properties.get(y);j.light=P}return y}function S(A,w,P,k,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Li)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=e.update(A),V=A.material;if(Array.isArray(V)){const I=B.groups;for(let U=0,q=I.length;U<q;U++){const L=I[U],K=V[L.materialIndex];if(K&&K.visible){const $=v(A,K,k,y);A.onBeforeShadow(t,A,w,P,B,$,L),t.renderBufferDirect(P,null,B,$,A,L),A.onAfterShadow(t,A,w,P,B,$,L)}}}else if(V.visible){const I=v(A,V,k,y);A.onBeforeShadow(t,A,w,P,B,I,null),t.renderBufferDirect(P,null,B,I,A,null),A.onAfterShadow(t,A,w,P,B,I,null)}}const j=A.children;for(let B=0,V=j.length;B<V;B++)S(j[B],w,P,k,y)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const k=c[P],y=A.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}const v5={[Ad]:Cd,[Rd]:Ld,[Pd]:Dd,[Mo]:bd,[Cd]:Ad,[Ld]:Rd,[Dd]:Pd,[bd]:Mo};function _5(t){function e(){let N=!1;const ge=new Rt;let Z=null;const te=new Rt(0,0,0,0);return{setMask:function(he){Z!==he&&!N&&(t.colorMask(he,he,he,he),Z=he)},setLocked:function(he){N=he},setClear:function(he,ve,Ze,Pt,dn){dn===!0&&(he*=Pt,ve*=Pt,Ze*=Pt),ge.set(he,ve,Ze,Pt),te.equals(ge)===!1&&(t.clearColor(he,ve,Ze,Pt),te.copy(ge))},reset:function(){N=!1,Z=null,te.set(-1,0,0,0)}}}function n(){let N=!1,ge=!1,Z=null,te=null,he=null;return{setReversed:function(ve){ge=ve},setTest:function(ve){ve?ce(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(ve){Z!==ve&&!N&&(t.depthMask(ve),Z=ve)},setFunc:function(ve){if(ge&&(ve=v5[ve]),te!==ve){switch(ve){case Ad:t.depthFunc(t.NEVER);break;case Cd:t.depthFunc(t.ALWAYS);break;case Rd:t.depthFunc(t.LESS);break;case Mo:t.depthFunc(t.LEQUAL);break;case Pd:t.depthFunc(t.EQUAL);break;case bd:t.depthFunc(t.GEQUAL);break;case Ld:t.depthFunc(t.GREATER);break;case Dd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){N=ve},setClear:function(ve){he!==ve&&(t.clearDepth(ve),he=ve)},reset:function(){N=!1,Z=null,te=null,he=null}}}function i(){let N=!1,ge=null,Z=null,te=null,he=null,ve=null,Ze=null,Pt=null,dn=null;return{setTest:function(nt){N||(nt?ce(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!N&&(t.stencilMask(nt),ge=nt)},setFunc:function(nt,hn,Ei){(Z!==nt||te!==hn||he!==Ei)&&(t.stencilFunc(nt,hn,Ei),Z=nt,te=hn,he=Ei)},setOp:function(nt,hn,Ei){(ve!==nt||Ze!==hn||Pt!==Ei)&&(t.stencilOp(nt,hn,Ei),ve=nt,Ze=hn,Pt=Ei)},setLocked:function(nt){N=nt},setClear:function(nt){dn!==nt&&(t.clearStencil(nt),dn=nt)},reset:function(){N=!1,ge=null,Z=null,te=null,he=null,ve=null,Ze=null,Pt=null,dn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,g=!1,x=null,p=null,d=null,_=null,v=null,S=null,C=null,A=new je(0,0,0),w=0,P=!1,k=null,y=null,M=null,j=null,B=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,U=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=U>=2);let L=null,K={};const $=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ye=new Rt().fromArray($),Ie=new Rt().fromArray(ne);function Y(N,ge,Z,te){const he=new Uint8Array(4),ve=t.createTexture();t.bindTexture(N,ve),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<Z;Ze++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ge+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ve}const ee={};ee[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Mo),le(!1),Ce(mg),ce(t.CULL_FACE),b(Er);function ce(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function fe(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ne(N,ge){return u[N]!==ge?(t.bindFramebuffer(N,ge),u[N]=ge,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ge),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function H(N,ge){let Z=h,te=!1;if(N){Z=f.get(ge),Z===void 0&&(Z=[],f.set(ge,Z));const he=N.textures;if(Z.length!==he.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ze=he.length;ve<Ze;ve++)Z[ve]=t.COLOR_ATTACHMENT0+ve;Z.length=he.length,te=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,te=!0);te&&t.drawBuffers(Z)}function Ue(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const Ke={[Xr]:t.FUNC_ADD,[vM]:t.FUNC_SUBTRACT,[_M]:t.FUNC_REVERSE_SUBTRACT};Ke[xM]=t.MIN,Ke[yM]=t.MAX;const me={[SM]:t.ZERO,[MM]:t.ONE,[EM]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[PM]:t.SRC_ALPHA_SATURATE,[CM]:t.DST_COLOR,[wM]:t.DST_ALPHA,[TM]:t.ONE_MINUS_SRC_COLOR,[wd]:t.ONE_MINUS_SRC_ALPHA,[RM]:t.ONE_MINUS_DST_COLOR,[AM]:t.ONE_MINUS_DST_ALPHA,[bM]:t.CONSTANT_COLOR,[LM]:t.ONE_MINUS_CONSTANT_COLOR,[DM]:t.CONSTANT_ALPHA,[IM]:t.ONE_MINUS_CONSTANT_ALPHA};function b(N,ge,Z,te,he,ve,Ze,Pt,dn,nt){if(N===Er){g===!0&&(fe(t.BLEND),g=!1);return}if(g===!1&&(ce(t.BLEND),g=!0),N!==gM){if(N!==x||nt!==P){if((p!==Xr||v!==Xr)&&(t.blendEquation(t.FUNC_ADD),p=Xr,v=Xr),nt)switch(N){case co:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gg:t.blendFunc(t.ONE,t.ONE);break;case vg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _g:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case co:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _g:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}d=null,_=null,S=null,C=null,A.set(0,0,0),w=0,x=N,P=nt}return}he=he||ge,ve=ve||Z,Ze=Ze||te,(ge!==p||he!==v)&&(t.blendEquationSeparate(Ke[ge],Ke[he]),p=ge,v=he),(Z!==d||te!==_||ve!==S||Ze!==C)&&(t.blendFuncSeparate(me[Z],me[te],me[ve],me[Ze]),d=Z,_=te,S=ve,C=Ze),(Pt.equals(A)===!1||dn!==w)&&(t.blendColor(Pt.r,Pt.g,Pt.b,dn),A.copy(Pt),w=dn),x=N,P=!1}function ae(N,ge){N.side===_i?fe(t.CULL_FACE):ce(t.CULL_FACE);let Z=N.side===ln;ge&&(Z=!Z),le(Z),N.blending===co&&N.transparent===!1?b(Er):b(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const te=N.stencilWrite;o.setTest(te),te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),We(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function le(N){k!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),k=N)}function Ce(N){N!==hM?(ce(t.CULL_FACE),N!==y&&(N===mg?t.cullFace(t.BACK):N===pM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),y=N}function Te(N){N!==M&&(I&&t.lineWidth(N),M=N)}function We(N,ge,Z){N?(ce(t.POLYGON_OFFSET_FILL),(j!==ge||B!==Z)&&(t.polygonOffset(ge,Z),j=ge,B=Z)):fe(t.POLYGON_OFFSET_FILL)}function De(N){N?ce(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+V-1),L!==N&&(t.activeTexture(N),L=N)}function E(N,ge,Z){Z===void 0&&(L===null?Z=t.TEXTURE0+V-1:Z=L);let te=K[Z];te===void 0&&(te={type:void 0,texture:void 0},K[Z]=te),(te.type!==N||te.texture!==ge)&&(L!==Z&&(t.activeTexture(Z),L=Z),t.bindTexture(N,ge||ee[N]),te.type=N,te.texture=ge)}function G(){const N=K[L];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){ye.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function Ee(N){Ie.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ie.copy(N))}function Ye(N,ge){let Z=l.get(ge);Z===void 0&&(Z=new WeakMap,l.set(ge,Z));let te=Z.get(N);te===void 0&&(te=t.getUniformBlockIndex(ge,N.name),Z.set(N,te))}function Be(N,ge){const te=l.get(ge).get(N);a.get(ge)!==te&&(t.uniformBlockBinding(ge,te,N.__bindingPointIndex),a.set(ge,te))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,K={},u={},f=new WeakMap,h=[],m=null,g=!1,x=null,p=null,d=null,_=null,v=null,S=null,C=null,A=new je(0,0,0),w=0,P=!1,k=null,y=null,M=null,j=null,B=null,ye.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:fe,bindFramebuffer:Ne,drawBuffers:H,useProgram:Ue,setBlending:b,setMaterial:ae,setFlipSided:le,setCullFace:Ce,setLineWidth:Te,setPolygonOffset:We,setScissorTest:De,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:Me,texImage3D:ze,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:tt,texStorage3D:se,texSubImage2D:J,texSubImage3D:Pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:ke,viewport:Ee,reset:ut}}function c1(t,e,n,i){const r=x5(i);switch(n){case U2:return t*e;case F2:return t*e;case O2:return t*e*2;case z2:return t*e/r.components*r.byteLength;case Lp:return t*e/r.components*r.byteLength;case k2:return t*e*2/r.components*r.byteLength;case Dp:return t*e*2/r.components*r.byteLength;case N2:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Ip:return t*e*4/r.components*r.byteLength;case Cc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pc:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Bd:return Math.max(t,16)*Math.max(e,8)/4;case Od:case kd:return Math.max(t,8)*Math.max(e,8)/2;case Hd:case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lc:case rh:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case B2:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ah:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x5(t){switch(t){case Xi:case L2:return{byteLength:1,components:1};case ja:case D2:case rl:return{byteLength:2,components:1};case Pp:case bp:return{byteLength:2,components:4};case ls:case Rp:case zi:return{byteLength:4,components:1};case I2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function y5(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):du("canvas")}function x(R,E,G){let Q=1;const ie=De(R);if((ie.width>G||ie.height>G)&&(Q=G/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*ie.width),Pe=Math.floor(Q*ie.height);f===void 0&&(f=g(J,Pe));const de=E?g(J,Pe):f;return de.width=J,de.height=Pe,de.getContext("2d").drawImage(R,0,0,J,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Pe+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Hn&&R.minFilter!==ri}function d(R){t.generateMipmap(R)}function _(R,E,G,Q,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===t.RED&&(G===t.FLOAT&&(J=t.R32F),G===t.HALF_FLOAT&&(J=t.R16F),G===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.R8UI),G===t.UNSIGNED_SHORT&&(J=t.R16UI),G===t.UNSIGNED_INT&&(J=t.R32UI),G===t.BYTE&&(J=t.R8I),G===t.SHORT&&(J=t.R16I),G===t.INT&&(J=t.R32I)),E===t.RG&&(G===t.FLOAT&&(J=t.RG32F),G===t.HALF_FLOAT&&(J=t.RG16F),G===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RG8UI),G===t.UNSIGNED_SHORT&&(J=t.RG16UI),G===t.UNSIGNED_INT&&(J=t.RG32UI),G===t.BYTE&&(J=t.RG8I),G===t.SHORT&&(J=t.RG16I),G===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGB8UI),G===t.UNSIGNED_SHORT&&(J=t.RGB16UI),G===t.UNSIGNED_INT&&(J=t.RGB32UI),G===t.BYTE&&(J=t.RGB8I),G===t.SHORT&&(J=t.RGB16I),G===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),G===t.UNSIGNED_INT&&(J=t.RGBA32UI),G===t.BYTE&&(J=t.RGBA8I),G===t.SHORT&&(J=t.RGBA16I),G===t.INT&&(J=t.RGBA32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const Pe=ie?lu:st.getTransfer(Q);G===t.FLOAT&&(J=t.RGBA32F),G===t.HALF_FLOAT&&(J=t.RGBA16F),G===t.UNSIGNED_BYTE&&(J=Pe===mt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,E){let G;return R?E===null||E===ls||E===wo?G=t.DEPTH24_STENCIL8:E===zi?G=t.DEPTH32F_STENCIL8:E===ja&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ls||E===wo?G=t.DEPTH_COMPONENT24:E===zi?G=t.DEPTH_COMPONENT32F:E===ja&&(G=t.DEPTH_COMPONENT16),G}function S(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Hn&&R.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),w(E),E.isVideoTexture&&u.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),k(E)}function w(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,Q=h.get(G);if(Q){const ie=Q[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(R),Object.keys(Q).length===0&&h.delete(G)}i.remove(R)}function P(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const G=R.source,Q=h.get(G);delete Q[E.__cacheKey],o.memory.textures--}function k(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ie=0;ie<E.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let Q=0,ie=G.length;Q<ie;Q++){const J=i.get(G[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(R)}let y=0;function M(){y=0}function j(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function B(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function V(R,E){const G=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(G,R,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function I(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ie(G,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function U(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ie(G,R,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function q(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const L={[Nd]:t.REPEAT,[Jr]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},K={[Hn]:t.NEAREST,[GM]:t.NEAREST_MIPMAP_NEAREST,[Dl]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Df]:t.LINEAR_MIPMAP_NEAREST,[Qr]:t.LINEAR_MIPMAP_LINEAR},$={[YM]:t.NEVER,[eE]:t.ALWAYS,[qM]:t.LESS,[H2]:t.LEQUAL,[KM]:t.EQUAL,[QM]:t.GEQUAL,[ZM]:t.GREATER,[JM]:t.NOTEQUAL};function ne(R,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===Df||E.magFilter===Dl||E.magFilter===Qr||E.minFilter===ri||E.minFilter===Df||E.minFilter===Dl||E.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==Dl&&E.minFilter!==Qr||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const Q=E.source;let ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));const J=B(E);if(J!==R.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[J].usedTimes++;const Pe=ie[R.__cacheKey];Pe!==void 0&&(ie[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&P(E)),R.__cacheKey=J,R.__webglTexture=ie[J].texture}return G}function Ie(R,E,G){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=ye(R,E),J=E.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+G);const Pe=i.get(J);if(J.version!==Pe.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const de=st.getPrimaries(st.workingColorSpace),Se=E.colorSpace===cr?null:st.getPrimaries(E.colorSpace),tt=E.colorSpace===cr||de===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let se=x(E.image,!1,r.maxTextureSize);se=We(E,se);const Me=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let ke=_(E.internalFormat,Me,ze,E.colorSpace,E.isVideoTexture);ne(Q,E);let Ee;const Ye=E.mipmaps,Be=E.isVideoTexture!==!0,ut=Pe.__version===void 0||ie===!0,N=J.dataReady,ge=S(E,se);if(E.isDepthTexture)ke=v(E.format===Ao,E.type),ut&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ke,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,ke,se.width,se.height,0,Me,ze,null));else if(E.isDataTexture)if(Ye.length>0){Be&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,Ye[0].width,Ye[0].height);for(let Z=0,te=Ye.length;Z<te;Z++)Ee=Ye[Z],Be?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,ze,Ee.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Me,ze,Ee.data);E.generateMipmaps=!1}else Be?(ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,se.width,se.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Me,ze,se.data)):n.texImage2D(t.TEXTURE_2D,0,ke,se.width,se.height,0,Me,ze,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,Ye[0].width,Ye[0].height,se.depth);for(let Z=0,te=Ye.length;Z<te;Z++)if(Ee=Ye[Z],E.format!==oi)if(Me!==null)if(Be){if(N)if(E.layerUpdates.size>0){const he=c1(Ee.width,Ee.height,E.format,E.type);for(const ve of E.layerUpdates){const Ze=Ee.data.subarray(ve*he/Ee.data.BYTES_PER_ELEMENT,(ve+1)*he/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,ve,Ee.width,Ee.height,1,Me,Ze,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,se.depth,Me,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Ee.width,Ee.height,se.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,se.depth,Me,ze,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Ee.width,Ee.height,se.depth,0,Me,ze,Ee.data)}else{Be&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,Ye[0].width,Ye[0].height);for(let Z=0,te=Ye.length;Z<te;Z++)Ee=Ye[Z],E.format!==oi?Me!==null?Be?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,ze,Ee.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Me,ze,Ee.data)}else if(E.isDataArrayTexture)if(Be){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,se.width,se.height,se.depth),N)if(E.layerUpdates.size>0){const Z=c1(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const he=se.data.subarray(te*Z/se.data.BYTES_PER_ELEMENT,(te+1)*Z/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,Me,ze,he)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,ze,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,Me,ze,se.data);else if(E.isData3DTexture)Be?(ut&&n.texStorage3D(t.TEXTURE_3D,ge,ke,se.width,se.height,se.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,ze,se.data)):n.texImage3D(t.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,Me,ze,se.data);else if(E.isFramebufferTexture){if(ut)if(Be)n.texStorage2D(t.TEXTURE_2D,ge,ke,se.width,se.height);else{let Z=se.width,te=se.height;for(let he=0;he<ge;he++)n.texImage2D(t.TEXTURE_2D,he,ke,Z,te,0,Me,ze,null),Z>>=1,te>>=1}}else if(Ye.length>0){if(Be&&ut){const Z=De(Ye[0]);n.texStorage2D(t.TEXTURE_2D,ge,ke,Z.width,Z.height)}for(let Z=0,te=Ye.length;Z<te;Z++)Ee=Ye[Z],Be?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me,ze,Ee):n.texImage2D(t.TEXTURE_2D,Z,ke,Me,ze,Ee);E.generateMipmaps=!1}else if(Be){if(ut){const Z=De(se);n.texStorage2D(t.TEXTURE_2D,ge,ke,Z.width,Z.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,ze,se)}else n.texImage2D(t.TEXTURE_2D,0,ke,Me,ze,se);p(E)&&d(Q),Pe.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Y(R,E,G){if(E.image.length!==6)return;const Q=ye(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const J=i.get(ie);if(ie.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const Pe=st.getPrimaries(st.workingColorSpace),de=E.colorSpace===cr?null:st.getPrimaries(E.colorSpace),Se=E.colorSpace===cr||Pe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!tt&&!se?Me[te]=x(E.image[te],!0,r.maxCubemapSize):Me[te]=se?E.image[te].image:E.image[te],Me[te]=We(E,Me[te]);const ze=Me[0],ke=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),Ye=_(E.internalFormat,ke,Ee,E.colorSpace),Be=E.isVideoTexture!==!0,ut=J.__version===void 0||Q===!0,N=ie.dataReady;let ge=S(E,ze);ne(t.TEXTURE_CUBE_MAP,E);let Z;if(tt){Be&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,ze.width,ze.height);for(let te=0;te<6;te++){Z=Me[te].mipmaps;for(let he=0;he<Z.length;he++){const ve=Z[he];E.format!==oi?ke!==null?Be?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ve.width,ve.height,ke,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ve.width,ve.height,ke,Ee,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ye,ve.width,ve.height,0,ke,Ee,ve.data)}}}else{if(Z=E.mipmaps,Be&&ut){Z.length>0&&ge++;const te=De(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(se){Be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,ke,Ee,Me[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Me[te].width,Me[te].height,0,ke,Ee,Me[te].data);for(let he=0;he<Z.length;he++){const Ze=Z[he].image[te].image;Be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Ze.width,Ze.height,ke,Ee,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ye,Ze.width,Ze.height,0,ke,Ee,Ze.data)}}else{Be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,Ee,Me[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,ke,Ee,Me[te]);for(let he=0;he<Z.length;he++){const ve=Z[he];Be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,ke,Ee,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ye,ke,Ee,ve.image[te])}}}p(E)&&d(t.TEXTURE_CUBE_MAP),J.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ee(R,E,G,Q,ie,J){const Pe=s.convert(G.format,G.colorSpace),de=s.convert(G.type),Se=_(G.internalFormat,Pe,de,G.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>J),Me=Math.max(1,E.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,Se,se,Me,E.depth,0,Pe,de,null):n.texImage2D(ie,J,Se,se,Me,0,Pe,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ce(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,i.get(G).__webglTexture,0,le(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,i.get(G).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=v(E.stencilBuffer,ie),Pe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=le(E);Ce(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,J,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,R)}else{const Q=E.textures;for(let ie=0;ie<Q.length;ie++){const J=Q[ie],Pe=s.convert(J.format,J.colorSpace),de=s.convert(J.type),Se=_(J.internalFormat,Pe,de,J.colorSpace),tt=le(E);G&&Ce(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,Se,E.width,E.height):Ce(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,tt,Se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Se,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,ie=le(E);if(E.depthTexture.format===uo)Ce(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Ao)Ce(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");fe(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),ce(E.__webglDepthbuffer[Q],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ce(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(R,E,G){const Q=i.get(R);E!==void 0&&ee(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ne(R)}function Ue(R){const E=R.texture,G=i.get(R),Q=i.get(E);R.addEventListener("dispose",A);const ie=R.textures,J=R.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let Se=0;Se<E.mipmaps.length;Se++)G.__webglFramebuffer[de][Se]=t.createFramebuffer()}else G.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)G.__webglFramebuffer[de]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let de=0,Se=ie.length;de<Se;de++){const tt=i.get(ie[de]);tt.__webglTexture===void 0&&(tt.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ce(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const Se=ie[de];G.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const tt=s.convert(Se.format,Se.colorSpace),se=s.convert(Se.type),Me=_(Se.internalFormat,tt,se,Se.colorSpace,R.isXRRenderTarget===!0),ze=le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,G.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(G.__webglFramebuffer[de][Se],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else ee(G.__webglFramebuffer[de],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let de=0,Se=ie.length;de<Se;de++){const tt=ie[de],se=i.get(tt);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ne(t.TEXTURE_2D,tt),ee(G.__webglFramebuffer,R,tt,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),p(tt)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Q.__webglTexture),ne(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(G.__webglFramebuffer[Se],R,E,t.COLOR_ATTACHMENT0,de,Se);else ee(G.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,de,0);p(E)&&d(de),n.unbindTexture()}R.depthBuffer&&Ne(R)}function Ke(R){const E=R.textures;for(let G=0,Q=E.length;G<Q;G++){const ie=E[G];if(p(ie)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Pe=i.get(ie).__webglTexture;n.bindTexture(J,Pe),d(J),n.unbindTexture()}}}const me=[],b=[];function ae(R){if(R.samples>0){if(Ce(R)===!1){const E=R.textures,G=R.width,Q=R.height;let ie=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(R),de=E.length>1;if(de)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);const tt=i.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,tt,0)}t.blitFramebuffer(0,0,G,Q,0,0,G,Q,ie,t.NEAREST),l===!0&&(me.length=0,b.length=0,me.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(me.push(J),b.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,me))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);const tt=i.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,tt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function le(R){return Math.min(r.maxSamples,R.samples)}function Ce(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function We(R,E){const G=R.colorSpace,Q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Dr&&G!==cr&&(st.getTransfer(G)===mt?(Q!==oi||ie!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=M,this.setTexture2D=V,this.setTexture2DArray=I,this.setTexture3D=U,this.setTextureCube=q,this.rebindTextures=H,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ce}function S5(t,e){function n(i,r=cr){let s;const o=st.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===Pp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===I2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===L2)return t.BYTE;if(i===D2)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===Rp)return t.INT;if(i===ls)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===rl)return t.HALF_FLOAT;if(i===U2)return t.ALPHA;if(i===N2)return t.RGB;if(i===oi)return t.RGBA;if(i===F2)return t.LUMINANCE;if(i===O2)return t.LUMINANCE_ALPHA;if(i===uo)return t.DEPTH_COMPONENT;if(i===Ao)return t.DEPTH_STENCIL;if(i===z2)return t.RED;if(i===Lp)return t.RED_INTEGER;if(i===k2)return t.RG;if(i===Dp)return t.RG_INTEGER;if(i===Ip)return t.RGBA_INTEGER;if(i===Cc||i===Rc||i===Pc||i===bc)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Od||i===zd||i===kd||i===Bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hd||i===Vd||i===Gd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hd||i===Vd)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wd||i===jd||i===Xd||i===$d||i===Yd||i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$d)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===th)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ih)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===rh||i===sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lc)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===B2||i===oh||i===ah||i===lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ah)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class M5 extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E5={type:"move"};class o0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E5)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const T5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:T5,fragmentShader:w5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new qu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C5 extends No{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const x=new A5,p=n.getContextAttributes();let d=null,_=null;const v=[],S=[],C=new $e;let A=null;const w=new On;w.layers.enable(1),w.viewport=new Rt;const P=new On;P.layers.enable(2),P.viewport=new Rt;const k=[w,P],y=new M5;y.layers.enable(1),y.layers.enable(2);let M=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=v[Y];return ee===void 0&&(ee=new o0,v[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=v[Y];return ee===void 0&&(ee=new o0,v[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=v[Y];return ee===void 0&&(ee=new o0,v[Y]=ee),ee.getHandSpace()};function B(Y){const ee=S.indexOf(Y.inputSource);if(ee===-1)return;const ce=v[ee];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",I);for(let Y=0;Y<v.length;Y++){const ee=S[Y];ee!==null&&(S[Y]=null,v[Y].disconnect(ee))}M=null,j=null,x.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,_=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new cs(m.framebufferWidth,m.framebufferHeight,{format:oi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ce=null,fe=null;p.depth&&(fe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=p.stencil?Ao:uo,ce=p.stencil?wo:ls);const Ne={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new cs(h.textureWidth,h.textureHeight,{format:oi,type:Xi,depthTexture:new Q2(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(Y){for(let ee=0;ee<Y.removed.length;ee++){const ce=Y.removed[ee],fe=S.indexOf(ce);fe>=0&&(S[fe]=null,v[fe].disconnect(ce))}for(let ee=0;ee<Y.added.length;ee++){const ce=Y.added[ee];let fe=S.indexOf(ce);if(fe===-1){for(let H=0;H<v.length;H++)if(H>=S.length){S.push(ce),fe=H;break}else if(S[H]===null){S[H]=ce,fe=H;break}if(fe===-1)break}const Ne=v[fe];Ne&&Ne.connect(ce)}}const U=new O,q=new O;function L(Y,ee,ce){U.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const fe=U.distanceTo(q),Ne=ee.projectionMatrix.elements,H=ce.projectionMatrix.elements,Ue=Ne[14]/(Ne[10]-1),Ke=Ne[14]/(Ne[10]+1),me=(Ne[9]+1)/Ne[5],b=(Ne[9]-1)/Ne[5],ae=(Ne[8]-1)/Ne[0],le=(H[8]+1)/H[0],Ce=Ue*ae,Te=Ue*le,We=fe/(-ae+le),De=We*-ae;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ne[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const R=Ue+We,E=Ke+We,G=Ce-De,Q=Te+(fe-De),ie=me*Ke/E*R,J=b*Ke/E*R;Y.projectionMatrix.makePerspective(G,Q,ie,J,R,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,ce=Y.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),y.near=P.near=w.near=ee,y.far=P.far=w.far=ce,(M!==y.near||j!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,j=y.far);const fe=Y.parent,Ne=y.cameras;K(y,fe);for(let H=0;H<Ne.length;H++)K(Ne[H],fe);Ne.length===2?L(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),$(Y,y,fe)};function $(Y,ee,ce){ce===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ne=null;function ye(Y,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let fe=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let H=0;H<ce.length;H++){const Ue=ce[H];let Ke=null;if(m!==null)Ke=m.getViewport(Ue);else{const b=f.getViewSubImage(h,Ue);Ke=b.viewport,H===0&&(e.setRenderTargetTextures(_,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let me=k[H];me===void 0&&(me=new On,me.layers.enable(H),me.viewport=new Rt,k[H]=me),me.matrix.fromArray(Ue.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Ue.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),H===0&&(y.matrix.copy(me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(me)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const H=f.getDepthInformation(ce[0]);H&&H.isValid&&H.texture&&x.init(e,H,r.renderState)}}for(let ce=0;ce<v.length;ce++){const fe=S[ce],Ne=v[ce];fe!==null&&Ne!==void 0&&Ne.update(fe,ee,c||o)}ne&&ne(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ie=new J2;Ie.setAnimationLoop(ye),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const Br=new $i,R5=new xt;function P5(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Y2(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,_,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,_,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ln&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ln&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,S=_.envMapRotation;v&&(p.envMap.value=v,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),p.envMapRotation.value.setFromMatrix4(R5.makeRotationFromEuler(Br)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,_,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=v*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const _=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b5(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(g(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",p));const C=v.program;i.updateUBOMapping(_,C);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function u(_){const v=f();_.__bindingPointIndex=v;const S=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let k=0,y=P.length;k<y;k++){const M=P[k];if(m(M,A,k,C)===!0){const j=M.__offset,B=Array.isArray(M.value)?M.value:[M.value];let V=0;for(let I=0;I<B.length;I++){const U=B[I],q=x(U);typeof U=="number"||typeof U=="boolean"?(M.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,j+V,M.__data)):U.isMatrix3?(M.__data[0]=U.elements[0],M.__data[1]=U.elements[1],M.__data[2]=U.elements[2],M.__data[3]=0,M.__data[4]=U.elements[3],M.__data[5]=U.elements[4],M.__data[6]=U.elements[5],M.__data[7]=0,M.__data[8]=U.elements[6],M.__data[9]=U.elements[7],M.__data[10]=U.elements[8],M.__data[11]=0):(U.toArray(M.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,S,C){const A=_.value,w=v+"_"+S;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const P=C[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const v=_.uniforms;let S=0;const C=16;for(let w=0,P=v.length;w<P;w++){const k=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,M=k.length;y<M;y++){const j=k[y],B=Array.isArray(j.value)?j.value:[j.value];for(let V=0,I=B.length;V<I;V++){const U=B[V],q=x(U),L=S%C,K=L%q.boundary,$=L+K;S+=K,$!==0&&C-$<q.storage&&(S+=C-$),j.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=q.storage}}}const A=S%C;return A>0&&(S+=C-A),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class L5{constructor(e={}){const{canvas:n=vE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=Tr,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,w=null,P=-1,k=null;const y=new Rt,M=new Rt;let j=null;const B=new je(0);let V=0,I=n.width,U=n.height,q=1,L=null,K=null;const $=new Rt(0,0,I,U),ne=new Rt(0,0,I,U);let ye=!1;const Ie=new Z2;let Y=!1,ee=!1;const ce=new xt,fe=new xt,Ne=new O,H=new Rt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function me(){return w===null?q:1}let b=i;function ae(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",ve,!1),b===null){const F="webgl2";if(b=ae(F,T),b===null)throw ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let le,Ce,Te,We,De,R,E,G,Q,ie,J,Pe,de,Se,tt,se,Me,ze,ke,Ee,Ye,Be,ut,N;function ge(){le=new Fw(b),le.init(),Be=new S5(b,le),Ce=new Pw(b,le,e,Be),Te=new _5(b),Ce.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),We=new kw(b),De=new i5,R=new y5(b,le,Te,De,Ce,Be,We),E=new Lw(v),G=new Nw(v),Q=new jE(b),ut=new Cw(b,Q),ie=new Ow(b,Q,We,ut),J=new Hw(b,ie,Q,We),ke=new Bw(b,Ce,R),se=new bw(De),Pe=new n5(v,E,G,le,Ce,ut,se),de=new P5(v,De),Se=new s5,tt=new f5(le),ze=new Aw(v,E,G,Te,J,h,l),Me=new g5(v,J,Ce),N=new b5(b,We,Ce,Te),Ee=new Rw(b,le,We),Ye=new zw(b,le,We),We.programs=Pe.programs,v.capabilities=Ce,v.extensions=le,v.properties=De,v.renderLists=Se,v.shadowMap=Me,v.state=Te,v.info=We}ge();const Z=new C5(v,b);this.xr=Z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(I,U,!1))},this.getSize=function(T){return T.set(I,U)},this.setSize=function(T,F,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,U=F,n.width=Math.floor(T*q),n.height=Math.floor(F*q),W===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(I*q,U*q).floor()},this.setDrawingBufferSize=function(T,F,W){I=T,U=F,q=W,n.width=Math.floor(T*W),n.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,F,W,X){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,F,W,X),Te.viewport(y.copy($).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,F,W,X){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,F,W,X),Te.scissor(M.copy(ne).multiplyScalar(q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Te.setScissorTest(ye=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(T=!0,F=!0,W=!0){let X=0;if(T){let z=!1;if(w!==null){const oe=w.texture.format;z=oe===Ip||oe===Dp||oe===Lp}if(z){const oe=w.texture.type,pe=oe===Xi||oe===ls||oe===ja||oe===wo||oe===Pp||oe===bp,Ae=ze.getClearColor(),Re=ze.getClearAlpha(),Fe=Ae.r,Oe=Ae.g,be=Ae.b;pe?(m[0]=Fe,m[1]=Oe,m[2]=be,m[3]=Re,b.clearBufferuiv(b.COLOR,0,m)):(g[0]=Fe,g[1]=Oe,g[2]=be,g[3]=Re,b.clearBufferiv(b.COLOR,0,g))}else X|=b.COLOR_BUFFER_BIT}F&&(X|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),tt.dispose(),De.dispose(),E.dispose(),G.dispose(),J.dispose(),ut.dispose(),N.dispose(),Pe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",jp),Z.removeEventListener("sessionend",Xp),Ur.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=We.autoReset,F=Me.enabled,W=Me.autoUpdate,X=Me.needsUpdate,z=Me.type;ge(),We.autoReset=T,Me.enabled=F,Me.autoUpdate=W,Me.needsUpdate=X,Me.type=z}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){const F=T.target;F.removeEventListener("dispose",Ze),Pt(F)}function Pt(T){dn(T),De.remove(T)}function dn(T){const F=De.get(T).programs;F!==void 0&&(F.forEach(function(W){Pe.releaseProgram(W)}),T.isShaderMaterial&&Pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,X,z,oe){F===null&&(F=Ue);const pe=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Ox(T,F,W,X,z);Te.setMaterial(X,pe);let Re=W.index,Fe=1;if(X.wireframe===!0){if(Re=ie.getWireframeAttribute(W),Re===void 0)return;Fe=2}const Oe=W.drawRange,be=W.attributes.position;let ot=Oe.start*Fe,ht=(Oe.start+Oe.count)*Fe;oe!==null&&(ot=Math.max(ot,oe.start*Fe),ht=Math.min(ht,(oe.start+oe.count)*Fe)),Re!==null?(ot=Math.max(ot,0),ht=Math.min(ht,Re.count)):be!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,be.count));const Et=ht-ot;if(Et<0||Et===1/0)return;ut.setup(z,X,Ae,W,Re);let xn,it=Ee;if(Re!==null&&(xn=Q.get(Re),it=Ye,it.setIndex(xn)),z.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*me()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(z.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),Te.setLineWidth(Le*me()),z.isLineSegments?it.setMode(b.LINES):z.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else z.isPoints?it.setMode(b.POINTS):z.isSprite&&it.setMode(b.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)it.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Ht=z._multiDrawCounts,rt=z._multiDrawCount,qn=Re?Q.get(Re).bytesPerElement:1,gs=De.get(X).currentProgram.getUniforms();for(let yn=0;yn<rt;yn++)gs.setValue(b,"_gl_DrawID",yn),it.render(Le[yn]/qn,Ht[yn])}else if(z.isInstancedMesh)it.renderInstances(ot,Et,z.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ht=Math.min(W.instanceCount,Le);it.renderInstances(ot,Et,Ht)}else it.render(ot,Et)};function nt(T,F,W){T.transparent===!0&&T.side===_i&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,ul(T,F,W),T.side=Rr,T.needsUpdate=!0,ul(T,F,W),T.side=_i):ul(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),p=tt.get(W),p.init(F),_.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const oe=z.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const Ae=oe[pe];nt(Ae,W,z),X.add(Ae)}else nt(oe,W,z),X.add(oe)}),_.pop(),p=null,X},this.compileAsync=function(T,F,W=null){const X=this.compile(T,F,W);return new Promise(z=>{function oe(){if(X.forEach(function(pe){De.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){z(T);return}setTimeout(oe,10)}le.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let hn=null;function Ei(T){hn&&hn(T)}function jp(){Ur.stop()}function Xp(){Ur.start()}const Ur=new J2;Ur.setAnimationLoop(Ei),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(T){hn=T,Z.setAnimationLoop(T),T===null?Ur.stop():Ur.start()},Z.addEventListener("sessionstart",jp),Z.addEventListener("sessionend",Xp),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,w),p=tt.get(T,_.length),p.init(F),_.push(p),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,Y=se.init(this.clippingPlanes,ee),x=Se.get(T,d.length),x.init(),d.push(x),Z.enabled===!0&&Z.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&Qu(oe,F,-1/0,v.sortObjects)}Qu(T,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,K),Ke=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ke&&ze.addToRenderList(x,T),this.info.render.frame++,Y===!0&&se.beginShadows();const W=p.state.shadowsArray;Me.render(W,T,F),Y===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,z=x.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(z.length>0)for(let pe=0,Ae=oe.length;pe<Ae;pe++){const Re=oe[pe];Yp(X,z,T,Re)}Ke&&ze.render(T);for(let pe=0,Ae=oe.length;pe<Ae;pe++){const Re=oe[pe];$p(x,T,Re,Re.viewport)}}else z.length>0&&Yp(X,z,T,F),Ke&&ze.render(T),$p(x,T,F);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,F),ut.resetDefaultState(),P=-1,k=null,_.pop(),_.length>0?(p=_[_.length-1],Y===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Qu(T,F,W,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){X&&H.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const pe=J.update(T),Ae=T.material;Ae.visible&&x.push(T,pe,Ae,W,H.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const pe=J.update(T),Ae=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),H.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),H.copy(pe.boundingSphere.center)),H.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(Ae)){const Re=pe.groups;for(let Fe=0,Oe=Re.length;Fe<Oe;Fe++){const be=Re[Fe],ot=Ae[be.materialIndex];ot&&ot.visible&&x.push(T,pe,ot,W,H.z,be)}}else Ae.visible&&x.push(T,pe,Ae,W,H.z,null)}}const oe=T.children;for(let pe=0,Ae=oe.length;pe<Ae;pe++)Qu(oe[pe],F,W,X)}function $p(T,F,W,X){const z=T.opaque,oe=T.transmissive,pe=T.transparent;p.setupLightsView(W),Y===!0&&se.setGlobalState(v.clippingPlanes,W),X&&Te.viewport(y.copy(X)),z.length>0&&cl(z,F,W),oe.length>0&&cl(oe,F,W),pe.length>0&&cl(pe,F,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Yp(T,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new cs(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?rl:Xi,minFilter:Qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const oe=p.state.transmissionRenderTarget[X.id],pe=X.viewport||y;oe.setSize(pe.z,pe.w);const Ae=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(B),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&ze.render(W);const Re=v.toneMapping;v.toneMapping=Tr;const Fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Y===!0&&se.setGlobalState(v.clippingPlanes,X),cl(T,W,X),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),le.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let be=0,ot=F.length;be<ot;be++){const ht=F[be],Et=ht.object,xn=ht.geometry,it=ht.material,Le=ht.group;if(it.side===_i&&Et.layers.test(X.layers)){const Ht=it.side;it.side=ln,it.needsUpdate=!0,qp(Et,W,X,xn,it,Le),it.side=Ht,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}v.setRenderTarget(Ae),v.setClearColor(B,V),Fe!==void 0&&(X.viewport=Fe),v.toneMapping=Re}function cl(T,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,oe=T.length;z<oe;z++){const pe=T[z],Ae=pe.object,Re=pe.geometry,Fe=X===null?pe.material:X,Oe=pe.group;Ae.layers.test(W.layers)&&qp(Ae,F,W,Re,Fe,Oe)}}function qp(T,F,W,X,z,oe){T.onBeforeRender(v,F,W,X,z,oe),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,F,W,X,T,oe),z.transparent===!0&&z.side===_i&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,v.renderBufferDirect(W,F,X,z,T,oe),z.side=Rr,z.needsUpdate=!0,v.renderBufferDirect(W,F,X,z,T,oe),z.side=_i):v.renderBufferDirect(W,F,X,z,T,oe),T.onAfterRender(v,F,W,X,z,oe)}function ul(T,F,W){F.isScene!==!0&&(F=Ue);const X=De.get(T),z=p.state.lights,oe=p.state.shadowsArray,pe=z.state.version,Ae=Pe.getParameters(T,z.state,oe,F,W),Re=Pe.getProgramCacheKey(Ae);let Fe=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",Ze),Fe=new Map,X.programs=Fe);let Oe=Fe.get(Re);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===pe)return Zp(T,Ae),Oe}else Ae.uniforms=Pe.getUniforms(T),T.onBeforeCompile(Ae,v),Oe=Pe.acquireProgram(Ae,Re),Fe.set(Re,Oe),X.uniforms=Ae.uniforms;const be=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=se.uniform),Zp(T,Ae),X.needsLights=kx(T),X.lightsStateVersion=pe,X.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMap.value=z.state.directionalShadowMap,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotShadowMap.value=z.state.spotShadowMap,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMap.value=z.state.pointShadowMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function Kp(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Ic.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Zp(T,F){const W=De.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ox(T,F,W,X,z){F.isScene!==!0&&(F=Ue),R.resetTextureUnits();const oe=F.fog,pe=X.isMeshStandardMaterial?F.environment:null,Ae=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Dr,Re=(X.isMeshStandardMaterial?G:E).get(X.envMap||pe),Fe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color;let Et=Tr;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Et=v.toneMapping);const xn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=xn!==void 0?xn.length:0,Le=De.get(X),Ht=p.state.lights;if(Y===!0&&(ee===!0||T!==k)){const Dn=T===k&&X.id===P;se.setState(X,T,Dn)}let rt=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ht.state.version||Le.outputColorSpace!==Ae||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Re||X.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==Oe||Le.morphTargets!==be||Le.morphNormals!==ot||Le.morphColors!==ht||Le.toneMapping!==Et||Le.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Le.__version=X.version);let qn=Le.currentProgram;rt===!0&&(qn=ul(X,F,z));let gs=!1,yn=!1,ef=!1;const At=qn.getUniforms(),Ki=Le.uniforms;if(Te.useProgram(qn.program)&&(gs=!0,yn=!0,ef=!0),X.id!==P&&(P=X.id,yn=!0),gs||k!==T){Ce.reverseDepthBuffer?(ce.copy(T.projectionMatrix),xE(ce),yE(ce),At.setValue(b,"projectionMatrix",ce)):At.setValue(b,"projectionMatrix",T.projectionMatrix),At.setValue(b,"viewMatrix",T.matrixWorldInverse);const Dn=At.map.cameraPosition;Dn!==void 0&&Dn.setValue(b,Ne.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,yn=!0,ef=!0)}if(z.isSkinnedMesh){At.setOptional(b,z,"bindMatrix"),At.setOptional(b,z,"bindMatrixInverse");const Dn=z.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),At.setValue(b,"boneTexture",Dn.boneTexture,R))}z.isBatchedMesh&&(At.setOptional(b,z,"batchingTexture"),At.setValue(b,"batchingTexture",z._matricesTexture,R),At.setOptional(b,z,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",z._indirectTexture,R),At.setOptional(b,z,"batchingColorTexture"),z._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",z._colorsTexture,R));const tf=W.morphAttributes;if((tf.position!==void 0||tf.normal!==void 0||tf.color!==void 0)&&ke.update(z,W,qn),(yn||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,At.setValue(b,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ki.envMap.value=Re,Ki.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Ki.envMapIntensity.value=F.environmentIntensity),yn&&(At.setValue(b,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&zx(Ki,ef),oe&&X.fog===!0&&de.refreshFogUniforms(Ki,oe),de.refreshMaterialUniforms(Ki,X,q,U,p.state.transmissionRenderTarget[T.id]),Ic.upload(b,Kp(Le),Ki,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ic.upload(b,Kp(Le),Ki,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(b,"center",z.center),At.setValue(b,"modelViewMatrix",z.modelViewMatrix),At.setValue(b,"normalMatrix",z.normalMatrix),At.setValue(b,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Dn=X.uniformsGroups;for(let nf=0,Bx=Dn.length;nf<Bx;nf++){const Jp=Dn[nf];N.update(Jp,qn),N.bind(Jp,qn)}}return qn}function zx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function kx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,F,W){De.get(T.texture).__webglTexture=F,De.get(T.depthTexture).__webglTexture=W;const X=De.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const W=De.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){w=T,C=F,A=W;let X=!0,z=null,oe=!1,pe=!1;if(T){const Re=De.get(T);if(Re.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(b.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Re.__hasExternalTextures)R.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(Re.__boundDepthTexture!==be){if(be!==null&&De.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const Oe=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?z=Oe[F][W]:z=Oe[F],oe=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?z=De.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[W]:z=Oe,y.copy(T.viewport),M.copy(T.scissor),j=T.scissorTest}else y.copy($).multiplyScalar(q).floor(),M.copy(ne).multiplyScalar(q).floor(),j=ye;if(Te.bindFramebuffer(b.FRAMEBUFFER,z)&&X&&Te.drawBuffers(T,z),Te.viewport(y),Te.scissor(M),Te.setScissorTest(j),oe){const Re=De.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,W)}else if(pe){const Re=De.get(T.texture),Fe=F||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Re.__webglTexture,W||0,Fe)}P=-1},this.readRenderTargetPixels=function(T,F,W,X,z,oe,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){Te.bindFramebuffer(b.FRAMEBUFFER,Ae);try{const Re=T.texture,Fe=Re.format,Oe=Re.type;if(!Ce.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&W>=0&&W<=T.height-z&&b.readPixels(F,W,X,z,Be.convert(Fe),Be.convert(Oe),oe)}finally{const Re=w!==null?De.get(w).__webglFramebuffer:null;Te.bindFramebuffer(b.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,X,z,oe,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){const Re=T.texture,Fe=Re.format,Oe=Re.type;if(!Ce.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-X&&W>=0&&W<=T.height-z){Te.bindFramebuffer(b.FRAMEBUFFER,Ae);const be=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.bufferData(b.PIXEL_PACK_BUFFER,oe.byteLength,b.STREAM_READ),b.readPixels(F,W,X,z,Be.convert(Fe),Be.convert(Oe),0);const ot=w!==null?De.get(w).__webglFramebuffer:null;Te.bindFramebuffer(b.FRAMEBUFFER,ot);const ht=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await _E(b,ht,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,oe),b.deleteBuffer(be),b.deleteSync(ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,W=0){T.isTexture!==!0&&(Dc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(T.image.width*X),oe=Math.floor(T.image.height*X),pe=F!==null?F.x:0,Ae=F!==null?F.y:0;R.setTexture2D(T,0),b.copyTexSubImage2D(b.TEXTURE_2D,W,0,0,pe,Ae,z,oe),Te.unbindTexture()},this.copyTextureToTexture=function(T,F,W=null,X=null,z=0){T.isTexture!==!0&&(Dc("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],F=arguments[2],z=arguments[3]||0,W=null);let oe,pe,Ae,Re,Fe,Oe;W!==null?(oe=W.max.x-W.min.x,pe=W.max.y-W.min.y,Ae=W.min.x,Re=W.min.y):(oe=T.image.width,pe=T.image.height,Ae=0,Re=0),X!==null?(Fe=X.x,Oe=X.y):(Fe=0,Oe=0);const be=Be.convert(F.format),ot=Be.convert(F.type);R.setTexture2D(F,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const ht=b.getParameter(b.UNPACK_ROW_LENGTH),Et=b.getParameter(b.UNPACK_IMAGE_HEIGHT),xn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),Le=b.getParameter(b.UNPACK_SKIP_IMAGES),Ht=T.isCompressedTexture?T.mipmaps[z]:T.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,Re),T.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,z,Fe,Oe,oe,pe,be,ot,Ht.data):T.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,z,Fe,Oe,Ht.width,Ht.height,be,Ht.data):b.texSubImage2D(b.TEXTURE_2D,z,Fe,Oe,oe,pe,be,ot,Ht),b.pixelStorei(b.UNPACK_ROW_LENGTH,ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Et),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Le),z===0&&F.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W=null,X=null,z=0){T.isTexture!==!0&&(Dc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],F=arguments[3],z=arguments[4]||0);let oe,pe,Ae,Re,Fe,Oe,be,ot,ht;const Et=T.isCompressedTexture?T.mipmaps[z]:T.image;W!==null?(oe=W.max.x-W.min.x,pe=W.max.y-W.min.y,Ae=W.max.z-W.min.z,Re=W.min.x,Fe=W.min.y,Oe=W.min.z):(oe=Et.width,pe=Et.height,Ae=Et.depth,Re=0,Fe=0,Oe=0),X!==null?(be=X.x,ot=X.y,ht=X.z):(be=0,ot=0,ht=0);const xn=Be.convert(F.format),it=Be.convert(F.type);let Le;if(F.isData3DTexture)R.setTexture3D(F,0),Le=b.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),Le=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const Ht=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),qn=b.getParameter(b.UNPACK_SKIP_PIXELS),gs=b.getParameter(b.UNPACK_SKIP_ROWS),yn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Et.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Et.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Re),b.pixelStorei(b.UNPACK_SKIP_ROWS,Fe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Oe),T.isDataTexture||T.isData3DTexture?b.texSubImage3D(Le,z,be,ot,ht,oe,pe,Ae,xn,it,Et.data):F.isCompressedArrayTexture?b.compressedTexSubImage3D(Le,z,be,ot,ht,oe,pe,Ae,xn,Et.data):b.texSubImage3D(Le,z,be,ot,ht,oe,pe,Ae,xn,it,Et),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,qn),b.pixelStorei(b.UNPACK_SKIP_ROWS,gs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,yn),z===0&&F.generateMipmaps&&b.generateMipmap(Le),Te.unbindTexture()},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,Te.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Up?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===$u?"display-p3":"srgb"}}class D5 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class I5{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new O;class pu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=si(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=si(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=si(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=si(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new on(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rx extends ms{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Is;const Qo=new O,Us=new O,Ns=new O,Fs=new $e,ea=new $e,sx=new xt,Ql=new O,ta=new O,ec=new O,u1=new $e,a0=new $e,f1=new $e;class d1 extends Jt{constructor(e=new rx){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Lt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new I5(n,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new pu(i,3,0,!1)),Is.setAttribute("uv",new pu(i,2,3,!1))}this.geometry=Is,this.material=e,this.center=new $e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),sx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;tc(Ql.set(-.5,-.5,0),Ns,o,Us,r,s),tc(ta.set(.5,-.5,0),Ns,o,Us,r,s),tc(ec.set(.5,.5,0),Ns,o,Us,r,s),u1.set(0,0),a0.set(1,0),f1.set(1,1);let a=e.ray.intersectTriangle(Ql,ta,ec,!1,Qo);if(a===null&&(tc(ta.set(-.5,.5,0),Ns,o,Us,r,s),a0.set(0,1),a=e.ray.intersectTriangle(Ql,ec,ta,!1,Qo),a===null))return;const l=e.ray.origin.distanceTo(Qo);l<e.near||l>e.far||n.push({distance:l,point:Qo.clone(),uv:zn.getInterpolation(Qo,Ql,ta,ec,u1,a0,f1,new $e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function tc(t,e,n,i,r,s){Fs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ea.x=s*Fs.x-r*Fs.y,ea.y=r*Fs.x+s*Fs.y):ea.copy(Fs),t.copy(e),t.x+=ea.x,t.y+=ea.y,t.applyMatrix4(sx)}class jr extends ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new O,gu=new O,h1=new xt,na=new Yu,nc=new ol,l0=new O,p1=new O;class Uc extends Jt{constructor(e=new Lt,n=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)mu.fromBufferAttribute(n,r-1),gu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(r),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;h1.copy(r).invert(),na.copy(e.ray).applyMatrix4(h1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const d=u.getX(x),_=u.getX(x+1),v=ic(this,e,na,l,d,_);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(m),d=ic(this,e,na,l,x,p);d&&n.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const d=ic(this,e,na,l,x,x+1);d&&n.push(d)}if(this.isLineLoop){const x=ic(this,e,na,l,g-1,m);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ic(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(mu.fromBufferAttribute(o,r),gu.fromBufferAttribute(o,s),n.distanceSqToSegment(mu,gu,l0,p1)>i)return;l0.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(l0);if(!(l<e.near||l>e.far))return{distance:l,point:p1.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class c0 extends Uc{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class ox extends ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const m1=new xt,fh=new Yu,rc=new ol,sc=new O;class g1 extends Jt{constructor(e=new Lt,n=new ox){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(r),rc.radius+=s,e.ray.intersectsSphere(rc)===!1)return;m1.copy(r).invert(),fh.copy(e.ray).applyMatrix4(m1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,x=m;g<x;g++){const p=c.getX(g);sc.fromBufferAttribute(f,p),v1(sc,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,x=m;g<x;g++)sc.fromBufferAttribute(f,g),v1(sc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function v1(t,e,n,i,r,s,o){const a=fh.distanceSqToPoint(t);if(a<n){const l=new O;fh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class U5 extends cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zp extends Lt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,m=new O,g=new $e;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const d=s+p/i*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/n+1)/2,g.y=(m.y/n+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<r;x++){const p=x*(i+1);for(let d=0;d<i;d++){const _=d+p,v=_,S=_+i+1,C=_+i+2,A=_+1;a.push(v,S,A),a.push(S,C,A)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kp extends Lt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,h=new O,m=[],g=[],x=[],p=[];for(let d=0;d<=i;d++){const _=[],v=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const A=C/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),p.push(A+S,1-v),_.push(c++)}u.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const v=u[d][_+1],S=u[d][_],C=u[d+1][_],A=u[d+1][_+1];(d!==0||o>0)&&m.push(v,S,A),(d!==i-1||l<Math.PI)&&m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const _1=new xt;class N5{constructor(e,n,i=0,r=1/0){this.ray=new Yu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return _1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_1),this}intersectObject(e,n=!0,i=[]){return dh(e,this,i,n),i.sort(x1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)dh(e[r],this,i,n);return i.sort(x1),i}}function x1(t,e){return t.distance-e.distance}function dh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)dh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);const wn=Math.PI/180,$a=180/Math.PI;function Bp(t){return Math.max(-1,Math.min(1,t))}function hh(t,e,n,i){const r=(i-e)*wn;let s=((n-t+540)%360-180)*wn;const o=Math.sin(r/2),a=Math.sin(s/2),l=o*o+Math.cos(e*wn)*Math.cos(i*wn)*a*a;return 2*Math.asin(Bp(Math.sqrt(l)))*$a}function Hp(t,e,n,i){const r=i*wn,s=n*wn,o=e*wn,a=t*wn,l=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),c=Math.asin(Bp(l)),u=Math.sin(s)*Math.sin(r)*Math.cos(o),f=Math.cos(r)-Math.sin(o)*l;return[((a+Math.atan2(u,f))*$a%360+360)%360,c*$a]}function y1(t,e){const n=e*wn,i=t*wn;return[Math.cos(n)*Math.cos(i),Math.cos(n)*Math.sin(i),Math.sin(n)]}function F5(t,e,n){const i=Math.hypot(t,e,n)||1;return t/=i,e/=i,n/=i,[(Math.atan2(e,t)*$a%360+360)%360,Math.asin(Bp(n))*$a]}function O5(t,e,n,i=128){const r=[];for(let s=0;s<=i;s++)r.push(Hp(t,e,360*s/i,n));return r}function Zu(t){const n=(t%360+360)%360/15,i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${String(i).padStart(2,"0")}h${String(r).padStart(2,"0")}m${String(s%60).padStart(2,"0")}s`}function Ju(t){const e=t<0?"−":"+";let n=Math.abs(t);const i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${e}${String(i).padStart(2,"0")}°${String(r).padStart(2,"0")}′${String(s%60).padStart(2,"0")}″`}function ph(t){return["北","东北","东","东南","南","西南","西","西北"][Math.round((t%360+360)%360/45)%8]}const hi=1;function z5(t){return t.kind==="sun"?new je(16765565):t.kind==="moon"?new je(14673650):t.kind==="planet"?new je(10406911):new je(16777215)}function S1(t){return t==="sun"||t==="moon"?"diamond":t==="planet"?"square":"circle"}function k5(t){var h;const{sky:e,fov:n,horizonClip:i,showGraticule:r,annotations:s,selectedId:o,hoverId:a}=t,l=He.useRef(null),c=He.useRef(null),[u,f]=He.useState(null);return He.useEffect(()=>{if(l.current)try{const m=new B5(l.current,t);return c.current=m,()=>{m.dispose(),c.current=null}}catch{f("当前环境无法初始化 WebGL，三维球面视图不可用（右侧两种投影不受影响）。")}},[]),He.useEffect(()=>{var m;(m=c.current)==null||m.update(t)}),He.useEffect(()=>{var g;if(!t.focusToken)return;const m=e.targets.find(x=>x.id===t.focusToken.id);m&&((g=c.current)==null||g.flyTo(m.hx,m.hy,m.hz))},[(h=t.focusToken)==null?void 0:h.nonce]),D.jsxs("div",{className:"globe-wrap",children:[u?D.jsx("div",{className:"globe-mount globe-error",children:u}):D.jsx("div",{ref:l,className:"globe-mount"}),D.jsxs("div",{className:"globe-hint",children:["拖拽旋转 · 滚轮缩放 · 点击星点定位（与右侧两图联动）",D.jsx("br",{}),"地平坐标系：红圈=地平（N/E/S/W），绿圈=视场（角半径 ",n.radiusDeg.toFixed(1),"°），网格=J2000 赤道坐标",t.trajectory?" · 橙线=日期轨迹采样短弧（非连续星历）":"",i?" · 已开启地平线裁切":""]})]})}class B5{constructor(e,n){Je(this,"renderer");Je(this,"scene");Je(this,"camera");Je(this,"raf",0);Je(this,"mount");Je(this,"resizeObs");Je(this,"points");Je(this,"pointMaterial");Je(this,"fovLine");Je(this,"horizonLine");Je(this,"groundDisc");Je(this,"graticuleGroup",new hr);Je(this,"equatorLine",null);Je(this,"highlight");Je(this,"labelsGroup",new hr);Je(this,"annotationsGroup",new hr);Je(this,"trajectoryGroup",new hr);Je(this,"raycaster",new N5);Je(this,"pickSphere");Je(this,"drag",{active:!1,x:0,y:0,moved:0});Je(this,"camDir",new O(0,0,1));Je(this,"camTargetDir",new O(0,0,1));Je(this,"props");Je(this,"positionData",[]);Je(this,"disposed",!1);Je(this,"cleanupEvents",()=>{});Je(this,"everMoved",!1);Je(this,"animate",()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.camDir.lerp(this.camTargetDir,.12).normalize(),this.camera.lookAt(this.camDir.clone().multiplyScalar(hi)),this.camera.up.set(0,0,1),this.renderer.render(this.scene,this.camera))});this.mount=e,this.props=n,this.renderer=new L5({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.scene=new D5,this.scene.background=new je(461332),this.camera=new On(60,1,.01,10),this.camera.position.set(0,0,1e-4),this.camera.up.set(0,0,1),this.camera.lookAt(this.camDir),this.pickSphere=new ai(new kp(hi,48,32),new hu({visible:!1,side:ln})),this.scene.add(this.pickSphere),this.highlight=new ai(new zp(.022,.032,32),new hu({color:16766282,side:_i,transparent:!0,opacity:.95})),this.highlight.visible=!1,this.scene.add(this.highlight),this.scene.add(this.graticuleGroup),this.scene.add(this.labelsGroup),this.scene.add(this.annotationsGroup),this.scene.add(this.trajectoryGroup),this.initStars(),this.initStaticFrames(),this.resize(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.bindEvents(),this.update(n),this.animate()}initStars(){const n=new Lt,i=new Float32Array(256*3),r=new Float32Array(256),s=new Float32Array(256*3),o=new Float32Array(256);n.setAttribute("position",new on(i,3)),n.setAttribute("aSize",new on(r,1)),n.setAttribute("aColor",new on(s,3)),n.setAttribute("aShape",new on(o,1)),n.setDrawRange(0,0),this.pointMaterial=new Yi({transparent:!0,depthWrite:!1,uniforms:{uPxRatio:{value:this.renderer.getPixelRatio()}},vertexShader:`
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aShape;
        uniform float uPxRatio;
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vColor = aColor;
          vShape = aShape;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPxRatio * 220.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float alpha = 0.0;
          if (vShape < 0.5) {
            // 圆星点
            alpha = smoothstep(0.5, 0.18, d);
          } else if (vShape < 1.5) {
            // 方形（行星）
            vec2 q = abs(uv);
            alpha = (max(q.x, q.y) < 0.34) ? 1.0 : 0.0;
          } else {
            // 菱形（日月）
            float d2 = abs(uv.x) + abs(uv.y);
            alpha = smoothstep(0.5, 0.3, d2);
          }
          if (alpha <= 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }`}),this.points=new g1(n,this.pointMaterial),this.points.frustumCulled=!1,this.scene.add(this.points)}makeLine(e,n,i=1){const r=new Lt().setFromPoints(e),s=new jr({color:n,transparent:i<1,opacity:i});return new c0(r,s)}initStaticFrames(){const e=[];for(let r=0;r<128;r++){const s=2*Math.PI*r/128;e.push(new O(Math.cos(s),-Math.sin(s),0))}this.horizonLine=new c0(new Lt().setFromPoints(e),new jr({color:16735581})),this.scene.add(this.horizonLine);const n=[];for(let r=0;r<=128;r++){const s=2*Math.PI*r/128;n.push(new O(Math.cos(s)*hi,-Math.sin(s)*hi,-.002))}this.groundDisc=new Uc(new Lt().setFromPoints([...n,new O(0,0,-hi*.98),n[0]]),new jr({color:16735581,transparent:!0,opacity:.25})),this.scene.add(this.groundDisc);const i=[["N 北",1,0,0],["E 东",0,-1,0],["S 南",-1,0,0],["W 西",0,1,0]];for(const[r,s,o,a]of i)this.labelsGroup.add(this.makeTextSprite(r,new O(s,o,a),"#ff8a8a"));this.labelsGroup.add(this.makeTextSprite("天顶 Z",new O(0,0,1),"#9fd0ff")),this.labelsGroup.add(this.makeTextSprite("天底",new O(0,0,-1),"#8a6a6a"))}makeTextSprite(e,n,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.font="28px sans-serif",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(e,128,32);const o=new U5(r),a=new rx({map:o,transparent:!0,depthTest:!1,depthWrite:!1}),l=new d1(a);return l.position.copy(n.clone().multiplyScalar(hi*1.01)),l.scale.set(.09,.0225,1),l}bindEvents(){const e=this.renderer.domElement;e.style.cursor="grab";const n=o=>{this.drag={active:!0,x:o.clientX,y:o.clientY,moved:0},e.setPointerCapture(o.pointerId),e.style.cursor="grabbing"},i=o=>{const a=e.getBoundingClientRect();if(this.drag.active){const l=o.clientX-this.drag.x,c=o.clientY-this.drag.y;this.drag.moved+=Math.abs(l)+Math.abs(c),this.drag.x=o.clientX,this.drag.y=o.clientY,this.orbit(l,c)}else{const l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onHover(l),e.style.cursor=l?"pointer":"grab"}},r=o=>{if(this.drag.active&&this.drag.moved<5){const a=e.getBoundingClientRect(),l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onSelect(l)}this.drag.active=!1,e.style.cursor="grab"},s=o=>{o.preventDefault();const a=Mg.clamp(this.camera.fov+o.deltaY*.05,8,100);this.camera.fov=a,this.camera.updateProjectionMatrix()};e.addEventListener("pointerdown",n),e.addEventListener("pointermove",i),window.addEventListener("pointerup",r),e.addEventListener("wheel",s,{passive:!1}),this.cleanupEvents=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),e.removeEventListener("wheel",s)}}orbit(e,n){const r=this.camDir,s=new O(0,0,1),o=new O().crossVectors(s,r).normalize(),a=new us().setFromAxisAngle(s,-e*.25*Math.PI/180),l=new us().setFromAxisAngle(o,-n*.25*Math.PI/180);r.applyQuaternion(a).applyQuaternion(l).normalize(),Math.abs(r.z)>.999&&(r.z=Math.sign(r.z)*.999,r.normalize()),this.camTargetDir.copy(r),this.everMoved=!0}pick(e,n){const i=this.renderer.domElement.getBoundingClientRect(),r=new $e(e/i.width*2-1,-(n/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera),this.raycaster;let s=null;for(const o of this.positionData){const a=o.vec,l=a.dot(this.camDir);if(l<=0)continue;const c=a.clone().project(this.camera),u=(c.x+1)/2*i.width,f=(-c.y+1)/2*i.height,h=(r.x+1)/2*i.width,m=(-r.y+1)/2*i.height;Math.hypot(u-h,f-m)<10&&(!s||l>s.dot)&&(s={id:o.id,dot:l})}return(s==null?void 0:s.id)??null}flyTo(e,n,i){this.camTargetDir.set(e,n,i).normalize(),this.camera.fov=35,this.camera.updateProjectionMatrix()}updateStars(e,n){const i=e.targets.filter(u=>u.inFov&&u.passesMag&&(!n||u.aboveHorizon)),r=this.points.geometry.getAttribute("position").count,s=Math.min(i.length,r),o=this.points.geometry.getAttribute("position"),a=this.points.geometry.getAttribute("aSize"),l=this.points.geometry.getAttribute("aColor"),c=this.points.geometry.getAttribute("aShape");this.positionData=[];for(let u=0;u<s;u++){const f=i[u],h=new O(f.hx,f.hy,f.hz).multiplyScalar(hi);o.setXYZ(u,h.x,h.y,h.z);const m=f.id===this.props.selectedId||f.id===this.props.hoverId;let g=Mg.clamp(2.6-f.mag*.28,.5,3.4)*.012;f.kind!=="star"&&(g=Math.max(g,.04)),m&&(g*=1.6),a.setX(u,g);const x=z5(f);l.setXYZ(u,x.r,x.g,x.b),c.setX(u,S1(f.kind)==="circle"?0:S1(f.kind)==="square"?1:2),this.positionData.push({id:f.id,vec:new O(f.hx,f.hy,f.hz)})}this.points.geometry.setDrawRange(0,s),o.needsUpdate=!0,a.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0}update(e){this.props=e,this.updateStars(e.sky,e.horizonClip),this.rebuildFovCircle(e),this.graticuleGroup.visible=e.showGraticule,this.rebuildGraticuleContent(e),this.rebuildAnnotations(e),this.rebuildTrajectory(e);const n=e.selectedId?e.sky.targets.find(i=>i.id===e.selectedId):null;if(n?(this.highlight.visible=!0,this.highlight.position.set(n.hx,n.hy,n.hz),this.highlight.lookAt(0,0,0)):this.highlight.visible=!1,!this.everMoved){const i=this.centerVec(e);this.camDir.copy(i),this.camTargetDir.copy(i)}}centerVec(e){const n=e.sky.centerAz*wn,i=e.sky.centerAlt*wn;return new O(Math.cos(i)*Math.cos(n),-Math.cos(i)*Math.sin(n),Math.sin(i)).normalize()}rebuildFovCircle(e){this.fovLine&&(this.scene.remove(this.fovLine),this.fovLine.geometry.dispose());const n=this.centerVec(e),i=e.fov.radiusDeg*wn,r=Math.abs(n.z)<.9?new O(0,0,1):new O(1,0,0),s=new O().crossVectors(r,n).normalize(),o=new O().crossVectors(n,s).normalize(),a=[];for(let l=0;l<128;l++){const c=2*Math.PI*l/128,u=n.clone().multiplyScalar(Math.cos(i)).add(s.clone().multiplyScalar(Math.sin(i)*Math.cos(c))).add(o.clone().multiplyScalar(Math.sin(i)*Math.sin(c))).normalize().multiplyScalar(hi*1.002);a.push(u)}this.fovLine=new c0(new Lt().setFromPoints(a),new jr({color:5759881})),this.scene.add(this.fovLine)}rebuildGraticuleContent(e){if([...this.graticuleGroup.children].forEach(i=>{var s,o;(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.graticuleGroup.clear(),!e.showGraticule){this.equatorLine&&(this.scene.remove(this.equatorLine),this.equatorLine=null);return}const n=e.graticuleHorizontal;if(n)for(const i of[...n.parallels,...n.meridians]){const r=i.map(([o,a,l])=>new O(o,a,l)),s=new Uc(new Lt().setFromPoints(r),new jr({color:3820139,transparent:!0,opacity:.7}));this.graticuleGroup.add(s)}}rebuildAnnotations(e){[...this.annotationsGroup.children].forEach(n=>{var r,s,o;const i=n;(r=i.material.map)==null||r.dispose(),(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.annotationsGroup.clear();for(const n of e.annotations){const i=e.sky.targets.find(s=>Math.abs(s.ra-n.ra)<1e-9&&Math.abs(s.dec-n.dec)<1e-9);if(!i)continue;const r=this.makeTextSprite(`📝 ${n.text}`,new O(i.hx,i.hy,i.hz),n.color);this.annotationsGroup.add(r)}}rebuildTrajectory(e){[...this.trajectoryGroup.children].forEach(l=>{var f,h,m,g;l instanceof d1&&((f=l.material.map)==null||f.dispose());const c=l;(m=(h=c.geometry)==null?void 0:h.dispose)==null||m.call(h);const u=c.material;Array.isArray(u)?u.forEach(x=>x.dispose()):(g=u==null?void 0:u.dispose)==null||g.call(u)}),this.trajectoryGroup.clear();const n=e.trajectory;if(!n)return;for(const l of n.globeArcs){const c=l.map(([f,h,m])=>new O(f,h,m).multiplyScalar(hi*1.004)),u=new Uc(new Lt().setFromPoints(c),new jr({color:16752451,transparent:!0,opacity:.95}));this.trajectoryGroup.add(u)}const i=[],r=[],s=n.samples.filter(l=>l.showDateLabel);for(const l of n.samples){const c=new O(l.globeHx,l.globeHy,l.globeHz).multiplyScalar(hi*1.008);i.push(c.x,c.y,c.z);const u=new je(l.inFov?16765786:16752451);r.push(u.r,u.g,u.b)}const o=new Lt;o.setAttribute("position",new Qt(i,3)),o.setAttribute("color",new Qt(r,3));const a=new g1(o,new ox({size:7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.95,depthTest:!1}));this.trajectoryGroup.add(a);for(const l of s){if(!l.showDateLabel)continue;const c=this.makeTextSprite(l.dateLabel,new O(l.globeHx,l.globeHy,l.globeHz).multiplyScalar(1.03),"#ffc37a");this.trajectoryGroup.add(c)}}resize(){const e=this.mount.clientWidth||1,n=this.mount.clientHeight||1;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.cleanupEvents(),this.resizeObs.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}}class fs{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=n[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(n[i++]=a),e=o}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,s,o=0;if(n>0){for(o=e[--n];n>0&&(i=o,r=e[--n],o=i+r,s=r-(o-i),!s););n>0&&(s<0&&e[n-1]<0||s>0&&e[n-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}function*H5(t){for(const e of t)yield*e}function ax(t){return Array.from(H5(t))}function eo(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,s=new Array(r);++i<r;)s[i]=t+i*n;return s}var qe=1e-6,Qe=Math.PI,Vn=Qe/2,M1=Qe/4,Yn=Qe*2,ei=180/Qe,Gt=Qe/180,vt=Math.abs,lx=Math.atan,Ro=Math.atan2,ft=Math.cos,oc=Math.ceil,ct=Math.sin,V5=Math.sign||function(t){return t>0?1:t<0?-1:0},Ir=Math.sqrt;function cx(t){return t>1?0:t<-1?Qe:Math.acos(t)}function Po(t){return t>1?Vn:t<-1?-Vn:Math.asin(t)}function Gn(){}function vu(t,e){t&&T1.hasOwnProperty(t.type)&&T1[t.type](t,e)}var E1={Feature:function(t,e){vu(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)vu(n[i].geometry,e)}},T1={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){mh(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)mh(n[i],e,0)},Polygon:function(t,e){w1(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)w1(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)vu(n[i],e)}};function mh(t,e,n){var i=-1,r=t.length-n,s;for(e.lineStart();++i<r;)s=t[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function w1(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)mh(t[n],e,1);e.polygonEnd()}function zs(t,e){t&&E1.hasOwnProperty(t.type)?E1[t.type](t,e):vu(t,e)}function gh(t){return[Ro(t[1],t[0]),Po(t[2])]}function bo(t){var e=t[0],n=t[1],i=ft(n);return[i*ft(e),i*ct(e),ct(n)]}function ac(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function _u(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function u0(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function lc(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function vh(t){var e=Ir(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function Os(t){return function(){return t}}function _h(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function xh(t,e){return vt(t)>Qe&&(t-=Math.round(t/Yn)*Yn),[t,e]}xh.invert=xh;function ux(t,e,n){return(t%=Yn)?e||n?_h(C1(t),R1(e,n)):C1(t):e||n?R1(e,n):xh}function A1(t){return function(e,n){return e+=t,vt(e)>Qe&&(e-=Math.round(e/Yn)*Yn),[e,n]}}function C1(t){var e=A1(t);return e.invert=A1(-t),e}function R1(t,e){var n=ft(t),i=ct(t),r=ft(e),s=ct(e);function o(a,l){var c=ft(l),u=ft(a)*c,f=ct(a)*c,h=ct(l),m=h*n+u*i;return[Ro(f*r-m*s,u*n-h*i),Po(m*r+f*s)]}return o.invert=function(a,l){var c=ft(l),u=ft(a)*c,f=ct(a)*c,h=ct(l),m=h*r-f*s;return[Ro(f*r+h*s,u*n+m*i),Po(m*n-u*i)]},o}function fx(t,e,n,i,r,s){if(n){var o=ft(e),a=ct(e),l=i*n;r==null?(r=e+i*Yn,s=e-l/2):(r=P1(o,r),s=P1(o,s),(i>0?r<s:r>s)&&(r+=i*Yn));for(var c,u=r;i>0?u>s:u<s;u-=l)c=gh([o,-a*ft(u),-a*ct(u)]),t.point(c[0],c[1])}}function P1(t,e){e=bo(e),e[0]-=t,vh(e);var n=cx(-e[1]);return((-e[2]<0?-n:n)+Yn-qe)%Yn}function Vp(){var t=Os([0,0]),e=Os(90),n=Os(2),i,r,s={point:o};function o(l,c){i.push(l=r(l,c)),l[0]*=ei,l[1]*=ei}function a(){var l=t.apply(this,arguments),c=e.apply(this,arguments)*Gt,u=n.apply(this,arguments)*Gt;return i=[],r=ux(-l[0]*Gt,-l[1]*Gt,0).invert,fx(s,c,u,1),l={type:"Polygon",coordinates:[i]},i=r=null,l}return a.center=function(l){return arguments.length?(t=typeof l=="function"?l:Os([+l[0],+l[1]]),a):t},a.radius=function(l){return arguments.length?(e=typeof l=="function"?l:Os(+l),a):e},a.precision=function(l){return arguments.length?(n=typeof l=="function"?l:Os(+l),a):n},a}function dx(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:Gn,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function Nc(t,e){return vt(t[0]-e[0])<qe&&vt(t[1]-e[1])<qe}function cc(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function hx(t,e,n,i,r){var s=[],o=[],a,l;if(t.forEach(function(g){if(!((x=g.length-1)<=0)){var x,p=g[0],d=g[x],_;if(Nc(p,d)){if(!p[2]&&!d[2]){for(r.lineStart(),a=0;a<x;++a)r.point((p=g[a])[0],p[1]);r.lineEnd();return}d[0]+=2*qe}s.push(_=new cc(p,g,null,!0)),o.push(_.o=new cc(p,null,_,!1)),s.push(_=new cc(d,g,null,!1)),o.push(_.o=new cc(d,null,_,!0))}}),!!s.length){for(o.sort(e),b1(s),b1(o),a=0,l=o.length;a<l;++a)o[a].e=n=!n;for(var c=s[0],u,f;;){for(var h=c,m=!0;h.v;)if((h=h.n)===c)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(m)for(a=0,l=u.length;a<l;++a)r.point((f=u[a])[0],f[1]);else i(h.x,h.n.x,1,r);h=h.n}else{if(m)for(u=h.p.z,a=u.length-1;a>=0;--a)r.point((f=u[a])[0],f[1]);else i(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,m=!m}while(!h.v);r.lineEnd()}}}function b1(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function f0(t){return vt(t[0])<=Qe?t[0]:V5(t[0])*((vt(t[0])+Qe)%Yn-Qe)}function G5(t,e){var n=f0(e),i=e[1],r=ct(i),s=[ct(n),-ft(n),0],o=0,a=0,l=new fs;r===1?i=Vn+qe:r===-1&&(i=-Vn-qe);for(var c=0,u=t.length;c<u;++c)if(h=(f=t[c]).length)for(var f,h,m=f[h-1],g=f0(m),x=m[1]/2+M1,p=ct(x),d=ft(x),_=0;_<h;++_,g=S,p=A,d=w,m=v){var v=f[_],S=f0(v),C=v[1]/2+M1,A=ct(C),w=ft(C),P=S-g,k=P>=0?1:-1,y=k*P,M=y>Qe,j=p*A;if(l.add(Ro(j*k*ct(y),d*w+j*ft(y))),o+=M?P+k*Yn:P,M^g>=n^S>=n){var B=_u(bo(m),bo(v));vh(B);var V=_u(s,B);vh(V);var I=(M^P>=0?-1:1)*Po(V[2]);(i>I||i===I&&(B[0]||B[1]))&&(a+=M^P>=0?1:-1)}}return(o<-qe||o<qe&&l<-1e-12)^a&1}function px(t,e,n,i){return function(r){var s=e(r),o=dx(),a=e(o),l=!1,c,u,f,h={point:m,lineStart:x,lineEnd:p,polygonStart:function(){h.point=d,h.lineStart=_,h.lineEnd=v,u=[],c=[]},polygonEnd:function(){h.point=m,h.lineStart=x,h.lineEnd=p,u=ax(u);var S=G5(c,i);u.length?(l||(r.polygonStart(),l=!0),hx(u,j5,S,n,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function m(S,C){t(S,C)&&r.point(S,C)}function g(S,C){s.point(S,C)}function x(){h.point=g,s.lineStart()}function p(){h.point=m,s.lineEnd()}function d(S,C){f.push([S,C]),a.point(S,C)}function _(){a.lineStart(),f=[]}function v(){d(f[0][0],f[0][1]),a.lineEnd();var S=a.clean(),C=o.result(),A,w=C.length,P,k,y;if(f.pop(),c.push(f),f=null,!!w){if(S&1){if(k=C[0],(P=k.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),A=0;A<P;++A)r.point((y=k[A])[0],y[1]);r.lineEnd()}return}w>1&&S&2&&C.push(C.pop().concat(C.shift())),u.push(C.filter(W5))}}return h}}function W5(t){return t.length>1}function j5(t,e){return((t=t.x)[0]<0?t[1]-Vn-qe:Vn-t[1])-((e=e.x)[0]<0?e[1]-Vn-qe:Vn-e[1])}const L1=px(function(){return!0},X5,Y5,[-Qe,-Vn]);function X5(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(s,o){var a=s>0?Qe:-Qe,l=vt(s-e);vt(l-Qe)<qe?(t.point(e,n=(n+o)/2>0?Vn:-Vn),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(s,n),r=0):i!==a&&l>=Qe&&(vt(e-i)<qe&&(e-=i*qe),vt(s-a)<qe&&(s-=a*qe),n=$5(e,n,s,o),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=s,n=o),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function $5(t,e,n,i){var r,s,o=ct(t-n);return vt(o)>qe?lx((ct(e)*(s=ft(i))*ct(n)-ct(i)*(r=ft(e))*ct(t))/(r*s*o)):(e+i)/2}function Y5(t,e,n,i){var r;if(t==null)r=n*Vn,i.point(-Qe,r),i.point(0,r),i.point(Qe,r),i.point(Qe,0),i.point(Qe,-r),i.point(0,-r),i.point(-Qe,-r),i.point(-Qe,0),i.point(-Qe,r);else if(vt(t[0]-e[0])>qe){var s=t[0]<e[0]?Qe:-Qe;r=n*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function q5(t){var e=ft(t),n=2*Gt,i=e>0,r=vt(e)>qe;function s(u,f,h,m){fx(m,t,n,h,u,f)}function o(u,f){return ft(u)*ft(f)>e}function a(u){var f,h,m,g,x;return{lineStart:function(){g=m=!1,x=1},point:function(p,d){var _=[p,d],v,S=o(p,d),C=i?S?0:c(p,d):S?c(p+(p<0?Qe:-Qe),d):0;if(!f&&(g=m=S)&&u.lineStart(),S!==m&&(v=l(f,_),(!v||Nc(f,v)||Nc(_,v))&&(_[2]=1)),S!==m)x=0,S?(u.lineStart(),v=l(_,f),u.point(v[0],v[1])):(v=l(f,_),u.point(v[0],v[1],2),u.lineEnd()),f=v;else if(r&&f&&i^S){var A;!(C&h)&&(A=l(_,f,!0))&&(x=0,i?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}S&&(!f||!Nc(f,_))&&u.point(_[0],_[1]),f=_,m=S,h=C},lineEnd:function(){m&&u.lineEnd(),f=null},clean:function(){return x|(g&&m)<<1}}}function l(u,f,h){var m=bo(u),g=bo(f),x=[1,0,0],p=_u(m,g),d=ac(p,p),_=p[0],v=d-_*_;if(!v)return!h&&u;var S=e*d/v,C=-e*_/v,A=_u(x,p),w=lc(x,S),P=lc(p,C);u0(w,P);var k=A,y=ac(w,k),M=ac(k,k),j=y*y-M*(ac(w,w)-1);if(!(j<0)){var B=Ir(j),V=lc(k,(-y-B)/M);if(u0(V,w),V=gh(V),!h)return V;var I=u[0],U=f[0],q=u[1],L=f[1],K;U<I&&(K=I,I=U,U=K);var $=U-I,ne=vt($-Qe)<qe,ye=ne||$<qe;if(!ne&&L<q&&(K=q,q=L,L=K),ye?ne?q+L>0^V[1]<(vt(V[0]-I)<qe?q:L):q<=V[1]&&V[1]<=L:$>Qe^(I<=V[0]&&V[0]<=U)){var Ie=lc(k,(-y+B)/M);return u0(Ie,w),[V,gh(Ie)]}}}function c(u,f){var h=i?t:Qe-t,m=0;return u<-h?m|=1:u>h&&(m|=2),f<-h?m|=4:f>h&&(m|=8),m}return px(o,a,s,i?[0,-t]:[-Qe,t-Qe])}function K5(t,e,n,i,r,s){var o=t[0],a=t[1],l=e[0],c=e[1],u=0,f=1,h=l-o,m=c-a,g;if(g=n-o,!(!h&&g>0)){if(g/=h,h<0){if(g<u)return;g<f&&(f=g)}else if(h>0){if(g>f)return;g>u&&(u=g)}if(g=r-o,!(!h&&g<0)){if(g/=h,h<0){if(g>f)return;g>u&&(u=g)}else if(h>0){if(g<u)return;g<f&&(f=g)}if(g=i-a,!(!m&&g>0)){if(g/=m,m<0){if(g<u)return;g<f&&(f=g)}else if(m>0){if(g>f)return;g>u&&(u=g)}if(g=s-a,!(!m&&g<0)){if(g/=m,m<0){if(g>f)return;g>u&&(u=g)}else if(m>0){if(g<u)return;g<f&&(f=g)}return u>0&&(t[0]=o+u*h,t[1]=a+u*m),f<1&&(e[0]=o+f*h,e[1]=a+f*m),!0}}}}}var ca=1e9,uc=-ca;function Z5(t,e,n,i){function r(c,u){return t<=c&&c<=n&&e<=u&&u<=i}function s(c,u,f,h){var m=0,g=0;if(c==null||(m=o(c,f))!==(g=o(u,f))||l(c,u)<0^f>0)do h.point(m===0||m===3?t:n,m>1?i:e);while((m=(m+f+4)%4)!==g);else h.point(u[0],u[1])}function o(c,u){return vt(c[0]-t)<qe?u>0?0:3:vt(c[0]-n)<qe?u>0?2:1:vt(c[1]-e)<qe?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var f=o(c,1),h=o(u,1);return f!==h?f-h:f===0?u[1]-c[1]:f===1?c[0]-u[0]:f===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,f=dx(),h,m,g,x,p,d,_,v,S,C,A,w={point:P,lineStart:j,lineEnd:B,polygonStart:y,polygonEnd:M};function P(I,U){r(I,U)&&u.point(I,U)}function k(){for(var I=0,U=0,q=m.length;U<q;++U)for(var L=m[U],K=1,$=L.length,ne=L[0],ye,Ie,Y=ne[0],ee=ne[1];K<$;++K)ye=Y,Ie=ee,ne=L[K],Y=ne[0],ee=ne[1],Ie<=i?ee>i&&(Y-ye)*(i-Ie)>(ee-Ie)*(t-ye)&&++I:ee<=i&&(Y-ye)*(i-Ie)<(ee-Ie)*(t-ye)&&--I;return I}function y(){u=f,h=[],m=[],A=!0}function M(){var I=k(),U=A&&I,q=(h=ax(h)).length;(U||q)&&(c.polygonStart(),U&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),q&&hx(h,a,I,s,c),c.polygonEnd()),u=c,h=m=g=null}function j(){w.point=V,m&&m.push(g=[]),C=!0,S=!1,_=v=NaN}function B(){h&&(V(x,p),d&&S&&f.rejoin(),h.push(f.result())),w.point=P,S&&u.lineEnd()}function V(I,U){var q=r(I,U);if(m&&g.push([I,U]),C)x=I,p=U,d=q,C=!1,q&&(u.lineStart(),u.point(I,U));else if(q&&S)u.point(I,U);else{var L=[_=Math.max(uc,Math.min(ca,_)),v=Math.max(uc,Math.min(ca,v))],K=[I=Math.max(uc,Math.min(ca,I)),U=Math.max(uc,Math.min(ca,U))];K5(L,K,t,e,n,i)?(S||(u.lineStart(),u.point(L[0],L[1])),u.point(K[0],K[1]),q||u.lineEnd(),A=!1):q&&(u.lineStart(),u.point(I,U),A=!1)}_=I,v=U,S=q}return w}}function D1(t,e,n){var i=eo(t,e-qe,n).concat(e);return function(r){return i.map(function(s){return[r,s]})}}function I1(t,e,n){var i=eo(t,e-qe,n).concat(e);return function(r){return i.map(function(s){return[s,r]})}}function J5(){var t,e,n,i,r,s,o,a,l=10,c=l,u=90,f=360,h,m,g,x,p=2.5;function d(){return{type:"MultiLineString",coordinates:_()}}function _(){return eo(oc(i/u)*u,n,u).map(g).concat(eo(oc(a/f)*f,o,f).map(x)).concat(eo(oc(e/l)*l,t,l).filter(function(v){return vt(v%u)>qe}).map(h)).concat(eo(oc(s/c)*c,r,c).filter(function(v){return vt(v%f)>qe}).map(m))}return d.lines=function(){return _().map(function(v){return{type:"LineString",coordinates:v}})},d.outline=function(){return{type:"Polygon",coordinates:[g(i).concat(x(o).slice(1),g(n).reverse().slice(1),x(a).reverse().slice(1))]}},d.extent=function(v){return arguments.length?d.extentMajor(v).extentMinor(v):d.extentMinor()},d.extentMajor=function(v){return arguments.length?(i=+v[0][0],n=+v[1][0],a=+v[0][1],o=+v[1][1],i>n&&(v=i,i=n,n=v),a>o&&(v=a,a=o,o=v),d.precision(p)):[[i,a],[n,o]]},d.extentMinor=function(v){return arguments.length?(e=+v[0][0],t=+v[1][0],s=+v[0][1],r=+v[1][1],e>t&&(v=e,e=t,t=v),s>r&&(v=s,s=r,r=v),d.precision(p)):[[e,s],[t,r]]},d.step=function(v){return arguments.length?d.stepMajor(v).stepMinor(v):d.stepMinor()},d.stepMajor=function(v){return arguments.length?(u=+v[0],f=+v[1],d):[u,f]},d.stepMinor=function(v){return arguments.length?(l=+v[0],c=+v[1],d):[l,c]},d.precision=function(v){return arguments.length?(p=+v,h=D1(s,r,90),m=I1(e,t,p),g=D1(a,o,90),x=I1(i,n,p),d):p},d.extentMajor([[-180,-90+qe],[180,90-qe]]).extentMinor([[-180,-80-qe],[180,80+qe]])}function Q5(){return J5()()}const yh=t=>t;var d0=new fs,Sh=new fs,mx,gx,Mh,Eh,Ui={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){Ui.lineStart=eA,Ui.lineEnd=nA},polygonEnd:function(){Ui.lineStart=Ui.lineEnd=Ui.point=Gn,d0.add(vt(Sh)),Sh=new fs},result:function(){var t=d0/2;return d0=new fs,t}};function eA(){Ui.point=tA}function tA(t,e){Ui.point=vx,mx=Mh=t,gx=Eh=e}function vx(t,e){Sh.add(Eh*t-Mh*e),Mh=t,Eh=e}function nA(){vx(mx,gx)}var Lo=1/0,xu=Lo,Ya=-Lo,yu=Ya,Su={point:iA,lineStart:Gn,lineEnd:Gn,polygonStart:Gn,polygonEnd:Gn,result:function(){var t=[[Lo,xu],[Ya,yu]];return Ya=yu=-(xu=Lo=1/0),t}};function iA(t,e){t<Lo&&(Lo=t),t>Ya&&(Ya=t),e<xu&&(xu=e),e>yu&&(yu=e)}var Th=0,wh=0,ua=0,Mu=0,Eu=0,to=0,Ah=0,Ch=0,fa=0,_x,xx,xi,yi,kn={point:ds,lineStart:U1,lineEnd:N1,polygonStart:function(){kn.lineStart=oA,kn.lineEnd=aA},polygonEnd:function(){kn.point=ds,kn.lineStart=U1,kn.lineEnd=N1},result:function(){var t=fa?[Ah/fa,Ch/fa]:to?[Mu/to,Eu/to]:ua?[Th/ua,wh/ua]:[NaN,NaN];return Th=wh=ua=Mu=Eu=to=Ah=Ch=fa=0,t}};function ds(t,e){Th+=t,wh+=e,++ua}function U1(){kn.point=rA}function rA(t,e){kn.point=sA,ds(xi=t,yi=e)}function sA(t,e){var n=t-xi,i=e-yi,r=Ir(n*n+i*i);Mu+=r*(xi+t)/2,Eu+=r*(yi+e)/2,to+=r,ds(xi=t,yi=e)}function N1(){kn.point=ds}function oA(){kn.point=lA}function aA(){yx(_x,xx)}function lA(t,e){kn.point=yx,ds(_x=xi=t,xx=yi=e)}function yx(t,e){var n=t-xi,i=e-yi,r=Ir(n*n+i*i);Mu+=r*(xi+t)/2,Eu+=r*(yi+e)/2,to+=r,r=yi*t-xi*e,Ah+=r*(xi+t),Ch+=r*(yi+e),fa+=r*3,ds(xi=t,yi=e)}function Sx(t){this._context=t}Sx.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Yn);break}}},result:Gn};var Rh=new fs,h0,Mx,Ex,da,ha,qa={point:Gn,lineStart:function(){qa.point=cA},lineEnd:function(){h0&&Tx(Mx,Ex),qa.point=Gn},polygonStart:function(){h0=!0},polygonEnd:function(){h0=null},result:function(){var t=+Rh;return Rh=new fs,t}};function cA(t,e){qa.point=Tx,Mx=da=t,Ex=ha=e}function Tx(t,e){da-=t,ha-=e,Rh.add(Ir(da*da+ha*ha)),da=t,ha=e}let F1,Tu,O1,z1;class k1{constructor(e){this._append=e==null?wx:uA(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==O1||this._append!==Tu){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,O1=i,Tu=this._append,z1=this._,this._=r}this._+=z1;break}}}result(){const e=this._;return this._="",e.length?e:null}}function wx(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function uA(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return wx;if(e!==F1){const n=10**e;F1=e,Tu=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}return Tu}function fA(t,e){let n=3,i=4.5,r,s;function o(a){return a&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),zs(a,r(s))),s.result()}return o.area=function(a){return zs(a,r(Ui)),Ui.result()},o.measure=function(a){return zs(a,r(qa)),qa.result()},o.bounds=function(a){return zs(a,r(Su)),Su.result()},o.centroid=function(a){return zs(a,r(kn)),kn.result()},o.projection=function(a){return arguments.length?(r=a==null?(t=null,yh):(t=a).stream,o):t},o.context=function(a){return arguments.length?(s=a==null?(e=null,new k1(n)):new Sx(e=a),typeof i!="function"&&s.pointRadius(i),o):e},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(s.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(s=new k1(n)),o},o.projection(t).digits(n).context(e)}function Gp(t){return function(e){var n=new Ph;for(var i in t)n[i]=t[i];return n.stream=e,n}}function Ph(){}Ph.prototype={constructor:Ph,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Wp(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),zs(n,t.stream(Su)),e(Su.result()),i!=null&&t.clipExtent(i),t}function Ax(t,e,n){return Wp(t,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([a,l])},n)}function dA(t,e,n){return Ax(t,[[0,0],e],n)}function hA(t,e,n){return Wp(t,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];t.scale(150*s).translate([o,a])},n)}function pA(t,e,n){return Wp(t,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([o,a])},n)}var B1=16,mA=ft(30*Gt);function H1(t,e){return+e?vA(t,e):gA(t)}function gA(t){return Gp({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function vA(t,e){function n(i,r,s,o,a,l,c,u,f,h,m,g,x,p){var d=c-i,_=u-r,v=d*d+_*_;if(v>4*e&&x--){var S=o+h,C=a+m,A=l+g,w=Ir(S*S+C*C+A*A),P=Po(A/=w),k=vt(vt(A)-1)<qe||vt(s-f)<qe?(s+f)/2:Ro(C,S),y=t(k,P),M=y[0],j=y[1],B=M-i,V=j-r,I=_*B-d*V;(I*I/v>e||vt((d*B+_*V)/v-.5)>.3||o*h+a*m+l*g<mA)&&(n(i,r,s,o,a,l,M,j,k,S/=w,C/=w,A,x,p),p.point(M,j),n(M,j,k,S,C,A,c,u,f,h,m,g,x,p))}}return function(i){var r,s,o,a,l,c,u,f,h,m,g,x,p={point:d,lineStart:_,lineEnd:S,polygonStart:function(){i.polygonStart(),p.lineStart=C},polygonEnd:function(){i.polygonEnd(),p.lineStart=_}};function d(P,k){P=t(P,k),i.point(P[0],P[1])}function _(){f=NaN,p.point=v,i.lineStart()}function v(P,k){var y=bo([P,k]),M=t(P,k);n(f,h,u,m,g,x,f=M[0],h=M[1],u=P,m=y[0],g=y[1],x=y[2],B1,i),i.point(f,h)}function S(){p.point=d,i.lineEnd()}function C(){_(),p.point=A,p.lineEnd=w}function A(P,k){v(r=P,k),s=f,o=h,a=m,l=g,c=x,p.point=v}function w(){n(f,h,u,m,g,x,s,o,r,a,l,c,B1,i),p.lineEnd=S,S()}return p}}var _A=Gp({point:function(t,e){this.stream.point(t*Gt,e*Gt)}});function xA(t){return Gp({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function yA(t,e,n,i,r){function s(o,a){return o*=i,a*=r,[e+t*o,n-t*a]}return s.invert=function(o,a){return[(o-e)/t*i,(n-a)/t*r]},s}function V1(t,e,n,i,r,s){if(!s)return yA(t,e,n,i,r);var o=ft(s),a=ct(s),l=o*t,c=a*t,u=o/t,f=a/t,h=(a*n-o*e)/t,m=(a*e+o*n)/t;function g(x,p){return x*=i,p*=r,[l*x-c*p+e,n-c*x-l*p]}return g.invert=function(x,p){return[i*(u*x-f*p+h),r*(m-f*x-u*p)]},g}function Cx(t){return SA(function(){return t})()}function SA(t){var e,n=150,i=480,r=250,s=0,o=0,a=0,l=0,c=0,u,f=0,h=1,m=1,g=null,x=L1,p=null,d,_,v,S=yh,C=.5,A,w,P,k,y;function M(I){return P(I[0]*Gt,I[1]*Gt)}function j(I){return I=P.invert(I[0],I[1]),I&&[I[0]*ei,I[1]*ei]}M.stream=function(I){return k&&y===I?k:k=_A(xA(u)(x(A(S(y=I)))))},M.preclip=function(I){return arguments.length?(x=I,g=void 0,V()):x},M.postclip=function(I){return arguments.length?(S=I,p=d=_=v=null,V()):S},M.clipAngle=function(I){return arguments.length?(x=+I?q5(g=I*Gt):(g=null,L1),V()):g*ei},M.clipExtent=function(I){return arguments.length?(S=I==null?(p=d=_=v=null,yh):Z5(p=+I[0][0],d=+I[0][1],_=+I[1][0],v=+I[1][1]),V()):p==null?null:[[p,d],[_,v]]},M.scale=function(I){return arguments.length?(n=+I,B()):n},M.translate=function(I){return arguments.length?(i=+I[0],r=+I[1],B()):[i,r]},M.center=function(I){return arguments.length?(s=I[0]%360*Gt,o=I[1]%360*Gt,B()):[s*ei,o*ei]},M.rotate=function(I){return arguments.length?(a=I[0]%360*Gt,l=I[1]%360*Gt,c=I.length>2?I[2]%360*Gt:0,B()):[a*ei,l*ei,c*ei]},M.angle=function(I){return arguments.length?(f=I%360*Gt,B()):f*ei},M.reflectX=function(I){return arguments.length?(h=I?-1:1,B()):h<0},M.reflectY=function(I){return arguments.length?(m=I?-1:1,B()):m<0},M.precision=function(I){return arguments.length?(A=H1(w,C=I*I),V()):Ir(C)},M.fitExtent=function(I,U){return Ax(M,I,U)},M.fitSize=function(I,U){return dA(M,I,U)},M.fitWidth=function(I,U){return hA(M,I,U)},M.fitHeight=function(I,U){return pA(M,I,U)};function B(){var I=V1(n,0,0,h,m,f).apply(null,e(s,o)),U=V1(n,i-I[0],r-I[1],h,m,f);return u=ux(a,l,c),w=_h(e,U),P=_h(u,w),A=H1(w,C),V()}function V(){return k=y=null,M}return function(){return e=t.apply(this,arguments),M.invert=e.invert&&j,B()}}function MA(t){return function(e,n){var i=ft(e),r=ft(n),s=t(i*r);return s===1/0?[2,0]:[s*r*ct(e),s*ct(n)]}}function Rx(t){return function(e,n){var i=Ir(e*e+n*n),r=t(i),s=ct(r),o=ft(r);return[Ro(e*s,i*o),Po(i&&n*s/i)]}}var Px=MA(function(t){return(t=cx(t))&&t/ct(t)});Px.invert=Rx(function(t){return t});function EA(){return Cx(Px).scale(79.4188).clipAngle(180-.001)}function bx(t,e){var n=ft(e),i=1+ft(t)*n;return[n*ct(t)/i,ct(e)/i]}bx.invert=Rx(function(t){return 2*lx(t)});function TA(){return Cx(bx).scale(250).clipAngle(142)}const Ka=210,An=560;function wA(t,e,n,i){const[r,s]=Hp(e,n,90,i);let o=10,a=1e5;for(let l=0;l<44;l++){const c=(o+a)/2;t.scale(c);const u=t([r,s]),f=t([e,n]);if(!u||!f){o=c;continue}Math.hypot(u[0]-f[0],u[1]-f[1])<Ka?o=c:a=c}return(o+a)/2}function Lx(t,e,n,i){const r=t==="stereographic"?TA():EA();r.rotate([-e,-n]).clipAngle(i+.02).precision(.1);const s=wA(r,e,n,i);r.scale(s).translate([An/2,An/2]);const o=fA(r),a=u=>o(u)??"",l=u=>{const[f,h]=Hp(e,n,90,u),m=r([f,h]),g=r([e,n]);return!m||!g?0:Math.hypot(m[0]-g[0],m[1]-g[1])},c=l(1);return{projection:r,path:a,label:t==="stereographic"?"立体投影（Stereographic）":"等距方位投影（Azimuthal Equidistant）",radialPixels:l,pxPerDegreeAtCenter:c,scaleRatioAt:u=>l(u)/u/(c||1)}}function Dx(){return Q5()}function wu(t,e,n,i=128){return Vp().center([t,e]).radius(n).precision(.1)()}function Ix(t,e){return Vp().center([t,e]).radius(90-1e-4).precision(.1)()}function Ux(t,e){return Vp().center([t,e]).radius(90).precision(.05)()}function fc(t,e,n){const i=t([e,n]);return i?[i[0],i[1]]:null}const Un=An/2;function G1(t){const{kind:e,sky:n,fov:i,horizonClip:r,showHorizon:s}=t,o=He.useMemo(()=>Lx(e,i.centerRa,i.centerDec,i.radiusDeg),[e,i.centerRa,i.centerDec,i.radiusDeg]),a=He.useMemo(()=>{const x=o.path(Dx()),p=i.radiusDeg<=20?5:i.radiusDeg<=45?10:20,d=[];for(let C=p;C<i.radiusDeg;C+=p)d.push({d:o.path(wu(i.centerRa,i.centerDec,C)),rDeg:C});const _=o.path(wu(i.centerRa,i.centerDec,i.radiusDeg)),v=o.path(Ux(n.horizon.nadirRa,n.horizon.nadirDec)),S=o.path(Ix(n.horizon.nadirRa,n.horizon.nadirDec));return{grat:x,rings:d,fovPath:_,horizon:v,below:S}},[o,i,n.horizon.nadirRa,n.horizon.nadirDec]),l=He.useMemo(()=>{const x=[];for(const p of n.targets){if(!p.inFov||!p.passesMag||r&&!p.aboveHorizon)continue;const d=fc(o.projection,p.ra,p.dec);if(!d)continue;const _=Math.max(1.6,Math.min(7,6.2-p.mag*.9)),v=p.kind==="star"?_:Math.max(_,5);x.push({t:p,x:d[0],y:d[1],r:v})}return x},[o,n.targets,r]),c=He.useMemo(()=>{if(!t.trajectory)return null;const{model:x,samples:p}=t.trajectory,d={type:"MultiLineString",coordinates:x.samples.slice(0,-1).map((v,S)=>{const C=x.samples[S+1];return[[v.ra,v.dec],[C.ra,C.dec]]})},_=p.map(v=>{const S=fc(o.projection,v.ra,v.dec);return S?{s:v,x:S[0],y:S[1]}:null}).filter(v=>v!==null);return{arcPath:o.path(d),points:_,labels:_.filter(({s:v})=>v.showDateLabel)}},[o,t.trajectory]),u=He.useMemo(()=>l.filter(x=>x.t.id===t.selectedId||x.t.id===t.hoverId||x.t.kind!=="star"||x.t.mag<=1.6),[l,t.selectedId,t.hoverId]),f=He.useMemo(()=>{const x=d=>d.trim().split(/\s+/).pop()??d,p=[];for(const d of n.horizon.cardinalPoints){const _=fc(o.projection,d.ra,d.dec);_&&p.push({x:_[0],y:_[1],label:x(d.label)})}return p},[o,n.horizon.cardinalPoints]),h=He.useMemo(()=>t.annotations.map(x=>{const p=fc(o.projection,x.ra,x.dec);return p?{a:x,x:p[0],y:p[1]}:null}).filter(x=>x!==null),[o,t.annotations]),m=t.selectedId?n.targets.find(x=>x.id===t.selectedId):null,g=o.scaleRatioAt(i.radiusDeg);return D.jsxs("div",{className:"proj-view",children:[D.jsxs("div",{className:"proj-title",children:[D.jsx("strong",{children:o.label}),D.jsxs("span",{className:"proj-sub",children:["中心 ",Zu(i.centerRa)," / ",Ju(i.centerDec)," · 视场角半径 ",i.radiusDeg.toFixed(1),"°"]})]}),D.jsxs("svg",{width:An,height:An,viewBox:`0 0 ${An} ${An}`,className:"proj-svg",onMouseLeave:()=>t.onHover(null),children:[D.jsx("defs",{children:D.jsx("clipPath",{id:`disc-${e}`,children:D.jsx("circle",{cx:Un,cy:Un,r:Ka})})}),D.jsx("circle",{cx:Un,cy:Un,r:Ka,fill:"#0b1020",stroke:"#3b4a6b",strokeWidth:1.5}),D.jsxs("g",{clipPath:`url(#disc-${e})`,children:[D.jsx("path",{d:a.grat,fill:"none",stroke:"#27406a",strokeWidth:.6,opacity:.9}),a.rings.map(x=>D.jsx("path",{d:x.d,fill:"none",stroke:"#3d6ea5",strokeWidth:.7,strokeDasharray:"2 3"},x.rDeg)),s&&D.jsxs(D.Fragment,{children:[D.jsx("path",{d:a.below,fill:"#5a1f24",opacity:.35}),D.jsx("path",{d:a.horizon,fill:"none",stroke:"#ff5d5d",strokeWidth:1.6})]}),D.jsx("path",{d:a.fovPath,fill:"none",stroke:"#57e389",strokeWidth:1.4,opacity:.9}),s&&f.map((x,p)=>D.jsx("text",{x:x.x,y:x.y-5,fill:"#ff9a9a",fontSize:11,textAnchor:"middle",children:x.label},p)),l.map(({t:x,x:p,y:d,r:_})=>{const v=x.id===t.selectedId,S=x.id===t.hoverId,C=!x.aboveHorizon,A=x.kind==="sun"?"#ffd27d":x.kind==="moon"?"#dfe6f2":x.kind==="planet"?"#9ecbff":"#ffffff";return D.jsxs("g",{transform:`translate(${p},${d})`,className:"star-marker",onMouseEnter:()=>t.onHover(x.id),onClick:w=>{w.stopPropagation(),t.onSelect(x.id)},children:[v&&D.jsx("circle",{r:_+6,fill:"none",stroke:"#ffd54a",strokeWidth:2}),S&&!v&&D.jsx("circle",{r:_+4,fill:"none",stroke:"#9fd0ff",strokeWidth:1.2}),x.kind==="star"?D.jsx("circle",{r:_,fill:A,opacity:C&&!r?.35:1}):x.kind==="planet"?D.jsx("rect",{x:-_,y:-_,width:_*2,height:_*2,fill:A}):D.jsx("polygon",{points:`0,${-_} ${_},0 0,${_} ${-_},0`,fill:A})]},x.id)}),u.map(({t:x,x:p,y:d})=>D.jsx("text",{x:p+7,y:d+3,fill:"#cfe0ff",fontSize:10.5,className:"proj-label",children:x.name},`l-${x.id}`)),c&&D.jsxs("g",{className:"trajectory-layer",children:[D.jsx("path",{d:c.arcPath,fill:"none",stroke:"#ff9f43",strokeWidth:2,strokeLinecap:"round",opacity:.95}),c.points.map(({s:x,x:p,y:d})=>D.jsx("circle",{cx:p,cy:d,r:3.4,fill:"#ff9f43",stroke:"#fff1d6",strokeWidth:.8,children:D.jsx("title",{children:`${x.dateLabel} UTC · h=${x.altAtSample.toFixed(1)}° · ${x.inFov?"视场内":"视场外"}`})},`tr-${x.timeUtcIso}`)),c.labels.map(({s:x,x:p,y:d})=>D.jsx("text",{x:p+6,y:d-6,fill:"#ffc37a",fontSize:9.5,className:"proj-label trajectory-date-label",children:x.dateLabel},`trl-${x.timeUtcIso}`))]}),h.map(({a:x,x:p,y:d})=>D.jsxs("g",{transform:`translate(${p},${d})`,children:[D.jsx("circle",{r:5,fill:"none",stroke:x.color,strokeWidth:1.6}),D.jsx("text",{x:8,y:4,fill:x.color,fontSize:11,children:x.text})]},x.uuid)),D.jsxs("g",{stroke:"#8aa0c8",strokeWidth:1,children:[D.jsx("line",{x1:Un-7,y1:Un,x2:Un+7,y2:Un}),D.jsx("line",{x1:Un,y1:Un-7,x2:Un,y2:Un+7})]})]})]}),D.jsxs("div",{className:"proj-foot",children:[D.jsxs("span",{children:["中心比例尺 ≈ ",o.pxPerDegreeAtCenter.toFixed(1)," px/°",e==="stereographic"?`（立体投影边缘径向外放 ×${g.toFixed(2)}，图上距离≠角距）`:"（等距方位：径向 r 与角距成正比，同心圆为等角距参考环）"]}),m&&D.jsxs("span",{className:"proj-foot-sel",children:[m.name,"：距视场中心 ",m.sepFromCenter.toFixed(2),"°（球面角距）· 高度 ",m.alt.toFixed(1),"°"]})]})]})}const Au=[{id:"beijing",name:"北京（古观象台附近）",latitude:39.9042,longitude:116.4074,height:50},{id:"shanghai",name:"上海（佘山天文台）",latitude:31.0989,longitude:121.1958,height:100},{id:"lhasa",name:"拉萨",latitude:29.652,longitude:91.1721,height:3650},{id:"sanya",name:"三亚",latitude:18.2528,longitude:109.512,height:10},{id:"mohe",name:"漠河",latitude:53.4722,longitude:122.3464,height:400},{id:"london",name:"伦敦（格林威治）",latitude:51.4769,longitude:-5e-4,height:50},{id:"sidingspring",name:"赛丁泉天文台（澳大利亚）",latitude:-31.2733,longitude:149.0644,height:1165},{id:"custom",name:"自定义位置",latitude:0,longitude:0,height:0}],Fc=[{id:"polar",label:"极区天区",description:"以北天极为中心的视场，检查极区在球面与两种方位投影下的表现；含北极星、小熊座、仙后座。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:0,centerDecDeg:90,fovRadiusDeg:35,magLimit:5,horizonClip:!1,suggestSelectId:"polaris"},{id:"zero",label:"赤经跨零点",description:"视场中心 RA 358°，边界跨过 0h 线（飞马座四边形 / 仙女座 / 仙后座），不应出现横贯整图的连线。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:358,centerDecDeg:30,fovRadiusDeg:30,magLimit:5,horizonClip:!1,suggestSelectId:"alpheratz"},{id:"horizon",label:"地平线附近目标",description:"北京 2026-09-30 21:00（UTC+8），大角星位于正西偏北、地平高度约 0.1°；开启地平线裁切可见取舍。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:213.9,centerDecDeg:19.2,fovRadiusDeg:30,magLimit:4.5,horizonClip:!1,suggestSelectId:"arcturus"}],Cu=[{body:we.Sun,name:"太阳"},{body:we.Moon,name:"月球"},{body:we.Mercury,name:"水星"},{body:we.Venus,name:"金星"},{body:we.Mars,name:"火星"},{body:we.Jupiter,name:"木星"},{body:we.Saturn,name:"土星"}];function Nx(t){return Cu.some(e=>e.body===t)}function AA(t){const e=t.rot;return new Cr([[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]])}class ll{constructor(e,n){Je(this,"time");Je(this,"observer");Je(this,"rEqjToHor");Je(this,"rHorToEqj");this.time=new Mr(e),this.observer=new x2(n.latitude,n.longitude,n.height),this.rEqjToHor=dM(this.time,this.observer),this.rHorToEqj=AA(this.rEqjToHor)}static geocentricBodyJ2000(e,n){if(!Nx(e))throw new Error(`不支持的日期轨迹目标：${e}`);const i=KS(e,new Mr(n),!0),r=rM(i);return{ra:(r.ra*15%360+360)%360,dec:r.dec}}julianDay(){return 2451545+this.time.tt}gmstHours(){return US(this.time)}equatorialToHorizontal(e,n){const i=Ac(new Ea(n,e,1),this.time),r=$o(this.rEqjToHor,i),s=oM(r,null);return{azDeg:(s.lon%360+360)%360,altDeg:s.lat,hx:r.x,hy:r.y,hz:r.z}}centerHorizontalVec(e,n){const i=Ac(new Ea(n,e,1),this.time),r=$o(this.rEqjToHor,i),s=Math.hypot(r.x,r.y,r.z)||1;return[r.x/s,r.y/s,r.z/s]}graticuleHorizontal(){const e=[],n=[],r=(s,o)=>{const a=$o(this.rEqjToHor,Ac(new Ea(o,s,1),this.time)),l=Math.hypot(a.x,a.y,a.z)||1;return[a.x/l,a.y/l,a.z/l]};for(const s of[-60,-30,0,30,60]){const o=[],a=[];for(let l=0;l<=96;l++)a.push(r(360*l/96,s));o.push(a),e.push(...o)}for(let s=0;s<360;s+=30){const o=[];for(let a=0;a<=96;a++)o.push(r(s,-90+180*a/96));n.push(o)}return{parallels:e,meridians:n}}nadirEquatorial(){const e=$o(this.rHorToEqj,new wt(0,0,-1,this.time)),n=(Math.atan2(e.y,e.x)*180/Math.PI%360+360)%360,i=Math.asin(Math.max(-1,Math.min(1,e.z)))*180/Math.PI;return{ra:n,dec:i}}horizonPointEquatorial(e){const n=e*Math.PI/180,i=new wt(Math.cos(n),-Math.sin(n),0,this.time),r=$o(this.rHorToEqj,i),s=Math.hypot(r.x,r.y,r.z)||1,o=(Math.atan2(r.y/s,r.x/s)*180/Math.PI%360+360)%360,a=Math.asin(Math.max(-1,Math.min(1,r.z/s)))*180/Math.PI;return{ra:o,dec:a}}solarSystemBodies(){return Cu.map(({body:e,name:n})=>{const i=ll.geocentricBodyJ2000(e,this.time.date),r=iM(e,this.time);return{body:e,name:n,ra:i.ra,dec:i.dec,mag:r.mag,phaseFraction:e===we.Moon?r.phase_fraction:void 0}})}}const Fx=[1,3,6,12,24],CA=31*24*60*60*1e3,W1=121,j1=16;function X1(t,e){const n=new Date(t);if(Number.isNaN(n.getTime()))throw new Error(`${e}不是有效的 UTC 日期时间。`);return n}function dc(t){return String(t).padStart(2,"0")}function RA(t){return`${dc(t.getUTCMonth()+1)}-${dc(t.getUTCDate())} ${dc(t.getUTCHours())}:${dc(t.getUTCMinutes())}`}function PA(t){if(!Nx(t.body))throw new Error(`不支持的日期轨迹目标：${t.targetName||t.body}。目前仅支持太阳、月球和水星至土星。`);const e=X1(t.startUtcIso,"开始日期"),n=X1(t.endUtcIso,"结束日期");if(n.getTime()<e.getTime())throw new Error("日期轨迹的结束 UTC 不能早于开始 UTC。");const i=n.getTime()-e.getTime();if(i>CA+1)throw new Error("日期轨迹范围过大：最多支持 31 天。请缩短区间后再生成。");if(!Fx.includes(t.stepHours))throw new Error(`不支持的 UTC 步长：${t.stepHours} 小时。请选择 1、3、6、12 或 24 小时。`);const r=t.stepHours*60*60*1e3,s=Math.round(i/r);if(Math.abs(s*r-i)>1e3)throw new Error("结束 UTC 必须是开始 UTC 之后的固定步长整数倍，避免区间末尾出现未定义的不足步长。");const o=s+1;if(o>W1)throw new Error(`采样点过多：${o} 个，上限 ${W1} 个。请增大 UTC 步长或缩短日期范围。`);const a=[];for(let l=0;l<o;l++){const c=new Date(e.getTime()+l*r),u=ll.geocentricBodyJ2000(t.body,c),f=c.getUTCHours()===0&&c.getUTCMinutes()===0&&c.getUTCSeconds()===0;a.push({index:l,timeUtcIso:c.toISOString(),dateLabel:RA(c),showDateLabel:l===0||l===o-1||f,ra:u.ra,dec:u.dec})}return{body:t.body,targetName:t.targetName,startUtcIso:t.startUtcIso,endUtcIso:t.endUtcIso,stepHours:t.stepHours,samples:a}}function bA(t,e,n){const i=y1(t.ra,t.dec),r=y1(e.ra,e.dec),s=Math.acos(Math.max(-1,Math.min(1,i[0]*r[0]+i[1]*r[1]+i[2]*r[2])));if(s<1e-12)return[t.ra,t.dec];const o=Math.sin(s),a=Math.sin((1-n)*s)/o,l=Math.sin(n*s)/o,c=a*i[0]+l*r[0],u=a*i[1]+l*r[1],f=a*i[2]+l*r[2],h=Math.hypot(c,u,f)||1;return F5(c/h,u/h,f/h)}function LA(t,e,n,i){const r=t.samples.map(o=>{const l=new ll(new Date(o.timeUtcIso),e).equatorialToHorizontal(o.ra,o.dec),c=i.equatorialToHorizontal(o.ra,o.dec),u=hh(n.centerRa,n.centerDec,o.ra,o.dec);return{...o,azAtSample:l.azDeg,altAtSample:l.altDeg,aboveHorizonAtSample:l.altDeg>=0,globeHx:c.hx,globeHy:c.hy,globeHz:c.hz,sepFromCenter:u,inFov:u<=n.radiusDeg}}),s=[];for(let o=0;o<t.samples.length-1;o++){const a=t.samples[o],l=t.samples[o+1],c=[];for(let u=0;u<=j1;u++){const[f,h]=bA(a,l,u/j1),m=i.equatorialToHorizontal(f,h);c.push([m.hx,m.hy,m.hz])}s.push(c)}return{model:t,site:{...e},fov:{...n},samples:r,globeArcs:s}}function DA(t){var g,x;const[e,n]=He.useState(""),[i,r]=He.useState(""),[s,o]=He.useState("#ffd54a"),a=p=>t.onChangeFov({...t.fov,centerRa:(p%360+360)%360}),l=p=>t.onChangeFov({...t.fov,centerDec:Math.max(-90,Math.min(90,p))}),c=p=>t.onChangeFov({...t.fov,radiusDeg:Math.max(1,Math.min(90,p))}),u=t.trajectoryDraft,f=p=>t.onChangeTrajectoryDraft({...u,...p}),h=p=>p.slice(0,16),m=p=>p?`${p}:00Z`:"";return D.jsxs("div",{className:"controls",children:[D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"演示场景"}),D.jsx("div",{className:"btn-row",children:Fc.map(p=>D.jsx("button",{className:"btn scenario",onClick:()=>t.onApplyScenario(p.id),title:p.description,children:p.label},p.id))}),D.jsx("p",{className:"hint",title:(g=Fc.find(p=>p.id==="horizon"))==null?void 0:g.description,children:(x=Fc.find(p=>p.id==="horizon"))==null?void 0:x.description})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"观测位置与时间"}),D.jsxs("label",{children:["位置",D.jsx("select",{value:t.site.id,onChange:p=>{const d=Au.find(_=>_.id===p.target.value);t.onChangeSite({...d})},children:Au.map(p=>D.jsx("option",{value:p.id,children:p.name},p.id))})]}),t.site.id==="custom"&&D.jsxs("div",{className:"num-row",children:[D.jsxs("label",{children:["纬度°",D.jsx("input",{type:"number",value:t.site.latitude,step:1e-4,onChange:p=>t.onChangeSite({...t.site,latitude:Number(p.target.value)})})]}),D.jsxs("label",{children:["经度°",D.jsx("input",{type:"number",value:t.site.longitude,step:1e-4,onChange:p=>t.onChangeSite({...t.site,longitude:Number(p.target.value)})})]})]}),D.jsxs("label",{children:["时间（UTC，非本地时区）",D.jsx("input",{type:"datetime-local",step:1,value:t.timeUtcIso.slice(0,19),onChange:p=>t.onChangeTime(p.target.value+"Z")})]}),D.jsx("p",{className:"hint",children:"北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。"})]}),D.jsxs("section",{className:"ctl-block trajectory-block",children:[D.jsx("h3",{children:"单目标日期轨迹（离散采样）"}),D.jsxs("label",{children:["目标",D.jsx("select",{value:u.body,onChange:p=>{const d=Cu.find(_=>_.body===p.target.value);d&&f({body:d.body,targetName:d.name})},children:Cu.map(p=>D.jsx("option",{value:p.body,children:p.name},p.body))})]}),D.jsxs("div",{className:"num-row two-col",children:[D.jsxs("label",{children:["开始 UTC",D.jsx("input",{type:"datetime-local",value:h(u.startUtcIso),onChange:p=>f({startUtcIso:m(p.target.value)})})]}),D.jsxs("label",{children:["结束 UTC",D.jsx("input",{type:"datetime-local",value:h(u.endUtcIso),onChange:p=>f({endUtcIso:m(p.target.value)})})]})]}),D.jsxs("label",{children:["固定 UTC 步长",D.jsx("select",{value:u.stepHours,onChange:p=>f({stepHours:Number(p.target.value)}),children:Fx.map(p=>D.jsxs("option",{value:p,children:[p," 小时"]},p))})]}),D.jsxs("div",{className:"btn-row",children:[D.jsx("button",{className:"btn",onClick:t.onGenerateTrajectory,children:"生成轨迹"}),t.hasTrajectory&&D.jsx("button",{className:"btn btn-ghost",onClick:t.onClearTrajectory,children:"清除"})]}),t.trajectoryError&&D.jsx("p",{className:"form-error",children:t.trajectoryError}),D.jsx("p",{className:"hint",children:"最多 31 天、121 个采样点；结束时间须为步长整数倍。短线只连接相邻离散采样点，不把线段间路径或可见性当作精密星历。"})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"视场（J2000 赤道坐标）"}),D.jsxs("div",{className:"num-row",children:[D.jsxs("label",{children:["中心赤经°",D.jsx("input",{type:"number",value:p0(t.fov.centerRa),min:0,max:360,step:.1,onChange:p=>a(Number(p.target.value))})]}),D.jsxs("label",{children:["中心赤纬°",D.jsx("input",{type:"number",value:p0(t.fov.centerDec),min:-90,max:90,step:.1,onChange:p=>l(Number(p.target.value))})]}),D.jsxs("label",{children:["角半径°",D.jsx("input",{type:"number",value:p0(t.fov.radiusDeg),min:1,max:90,step:.5,onChange:p=>c(Number(p.target.value))})]})]}),D.jsx("p",{className:"hint",children:"视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。"}),D.jsxs("div",{className:"save-row",children:[D.jsx("input",{placeholder:"命名当前视场…",value:e,onChange:p=>n(p.target.value)}),D.jsx("button",{className:"btn",disabled:!e.trim(),onClick:()=>{t.onSaveFov(e.trim()),n("")},children:"存视场"})]}),t.savedFovs.length>0&&D.jsx("ul",{className:"store-list",children:t.savedFovs.slice(0,6).map(p=>D.jsxs("li",{children:[D.jsx("button",{className:"link-btn",title:`RA ${p.fov.centerRa.toFixed(1)}° Dec ${p.fov.centerDec.toFixed(1)}° r ${p.fov.radiusDeg}°`,onClick:()=>t.onLoadFov(p),children:p.name}),D.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteFov(p.uuid),children:"×"})]},p.uuid))})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"筛选（两条相互独立）"}),D.jsxs("label",{className:"range-label",children:["星等上限（仅恒星）：≤ ",t.magLimit.toFixed(1),D.jsx("input",{type:"range",min:-2,max:6,step:.1,value:t.magLimit,onChange:p=>t.onChangeMag(Number(p.target.value))})]}),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"checkbox",checked:t.horizonClip,onChange:p=>t.onToggleHorizonClip(p.target.checked)}),"地平线裁切：仅显示地平以上目标"]}),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"checkbox",checked:t.showHorizon,onChange:p=>t.onToggleShowHorizon(p.target.checked)}),"显示地平圈与地平以下区域"]}),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"checkbox",checked:t.showGraticule,onChange:p=>t.onToggleGraticule(p.target.checked)}),"显示 J2000 经纬网"]})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"批注（绑定天球坐标，存 IndexedDB）"}),D.jsxs("div",{className:"save-row",children:[D.jsx("input",{type:"color",value:s,onChange:p=>o(p.target.value)}),D.jsx("input",{placeholder:"批注文字（锚定当前选中目标）",value:i,onChange:p=>r(p.target.value)}),D.jsx("button",{className:"btn",disabled:!i.trim(),onClick:()=>{t.onAddAnnotation(i.trim(),s),r("")},children:"添加"})]}),t.annotations.length>0&&D.jsx("ul",{className:"store-list",children:t.annotations.map(p=>D.jsxs("li",{children:[D.jsx("span",{className:"dot",style:{background:p.color}}),D.jsx("button",{className:"link-btn",onClick:()=>t.onChangeFov({centerRa:p.ra,centerDec:p.dec,radiusDeg:Math.max(10,t.fov.radiusDeg)}),title:"把视场中心移到批注位置",children:p.text}),D.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteAnnotation(p.uuid),children:"×"})]},p.uuid))})]})]})}function p0(t){return Math.round(t*1e3)/1e3}const IA={star:"恒星（星表 J2000.0）",sun:"太阳（动态视位置）",moon:"月球（动态视位置）",planet:"行星（动态视位置）"};function UA({target:t,centerAlt:e,centerAz:n,gmstHours:i,julianDay:r}){return D.jsxs("div",{className:"info-panel",children:[t?D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"info-head",children:[D.jsx("span",{className:"info-name",children:t.name}),D.jsx("span",{className:"info-desig",children:t.designation}),D.jsx("span",{className:"info-kind",children:IA[t.kind]})]}),D.jsxs("div",{className:"info-grid",children:[D.jsxs("div",{children:[D.jsx("label",{children:"赤经 RA (J2000)"}),D.jsx("strong",{children:Zu(t.ra)}),D.jsxs("span",{className:"sub",children:[t.ra.toFixed(4),"°"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"赤纬 Dec (J2000)"}),D.jsx("strong",{children:Ju(t.dec)}),D.jsxs("span",{className:"sub",children:[t.dec.toFixed(4),"°"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"方位角 A（北=0 顺时针）"}),D.jsxs("strong",{children:[t.az.toFixed(2),"°"]}),D.jsxs("span",{className:"sub",children:[ph(t.az),"方"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"地平高度 h"}),D.jsxs("strong",{className:t.alt>=0?"up":"down",children:[t.alt.toFixed(2),"°"]}),D.jsx("span",{className:"sub",children:t.alt>=0?"地平以上":"地平以下"})]}),D.jsxs("div",{children:[D.jsx("label",{children:"视星等"}),D.jsx("strong",{children:t.mag.toFixed(2)}),t.kind==="moon"&&t.phaseFraction!==void 0&&D.jsxs("span",{className:"sub",children:["月相照亮 ",(t.phaseFraction*100).toFixed(0),"%"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"距视场中心（球面角距）"}),D.jsxs("strong",{children:[t.sepFromCenter.toFixed(3),"°"]}),D.jsx("span",{className:"sub",children:"haversine 计算，非图上像素距离"})]})]})]}):D.jsxs("div",{className:"info-empty",children:["点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。",D.jsxs("ul",{children:[D.jsx("li",{children:"圆形＝恒星，方形＝行星，菱形＝太阳/月球"}),D.jsx("li",{children:"绿色圆＝视场边界，红色线＝地平圈，蓝色虚线＝等角距参考环"})]})]}),D.jsxs("div",{className:"info-meta",children:["视场中心：高度 ",e.toFixed(2),"°，方位 ",n.toFixed(2),"°（",ph(n),"）· GMST ",i.toFixed(4)," h · JD(TT) ",r.toFixed(4)]})]})}function m0(t){return t.replace(".000Z","Z").replace("T"," ")}function NA({view:t,onCenterStart:e}){const n=t.samples.filter(r=>r.inFov).length,i=t.samples.filter(r=>r.aboveHorizonAtSample).length;return D.jsxs("section",{className:"trajectory-panel",children:[D.jsxs("div",{className:"trajectory-head",children:[D.jsxs("div",{children:[D.jsxs("h2",{className:"view-label",children:[t.model.targetName,"日期轨迹 · ",t.model.stepHours," h 固定 UTC 步长 · ",t.samples.length," 个离散采样点"]}),D.jsxs("p",{className:"trajectory-summary",children:[m0(t.model.startUtcIso)," 至 ",m0(t.model.endUtcIso)," UTC · 当前视场内 ",n," 点 · 采样时刻地平以上 ",i," 点"]})]}),D.jsx("button",{className:"btn",onClick:e,children:"定位到首个采样点"})]}),D.jsx("p",{className:"trajectory-note",children:"橙色短弧仅连接相邻采样点，帮助展示几天内相对恒星背景的移动；不是连续精密星历。 各点的地平高度按该点自己的 UTC 和当前台站计算，切换台站只会改变地平状态，不改变同一 UTC 的 J2000 天球位置。"}),D.jsx("div",{className:"trajectory-table-wrap",children:D.jsxs("table",{className:"trajectory-table",children:[D.jsx("thead",{children:D.jsxs("tr",{children:[D.jsx("th",{children:"#"}),D.jsx("th",{children:"采样 UTC"}),D.jsx("th",{children:"RA J2000"}),D.jsx("th",{children:"Dec J2000"}),D.jsx("th",{children:"高度（采样时刻）"}),D.jsx("th",{children:"方位"}),D.jsx("th",{children:"视场"})]})}),D.jsx("tbody",{children:t.samples.map(r=>D.jsxs("tr",{className:r.inFov?"in-fov":"",children:[D.jsx("td",{children:r.index+1}),D.jsx("td",{className:"utc-cell",children:m0(r.timeUtcIso)}),D.jsx("td",{title:`${r.ra.toFixed(4)}°`,children:Zu(r.ra)}),D.jsx("td",{title:`${r.dec.toFixed(4)}°`,children:Ju(r.dec)}),D.jsxs("td",{className:r.aboveHorizonAtSample?"up":"down",children:[r.altAtSample.toFixed(1),"°（",r.aboveHorizonAtSample?"地平上":"地平下","）"]}),D.jsxs("td",{children:[r.azAtSample.toFixed(1),"° ",ph(r.azAtSample)]}),D.jsx("td",{children:r.inFov?D.jsxs("span",{className:"badge badge-in",children:["视场内 · ",r.sepFromCenter.toFixed(1),"°"]}):D.jsxs("span",{className:"badge badge-out",children:["视场外 · ",r.sepFromCenter.toFixed(1),"°"]})})]},r.timeUtcIso))})]})})]})}const xe=t=>t*15,FA=[{id:"polaris",name:"勾陈一（北极星）",designation:"α UMi",ra:xe(2+31/60+49.1/3600),dec:89.2641,mag:1.98,tags:["polar","bright"]},{id:"kochab",name:"帝（北极二）",designation:"β UMi",ra:xe(14+50/60+42.3/3600),dec:74.1555,mag:2.07,tags:["polar"]},{id:"pherkad",name:"太子（北极一）",designation:"γ UMi",ra:xe(15+20/60+43.7/3600),dec:71.8344,mag:3.04,tags:["polar"]},{id:"zeta-umi",name:"开阳增一",designation:"ζ UMi",ra:xe(16+0/60),dec:77.8,mag:4.32,tags:["polar"]},{id:"yildun",name:"勾陈二",designation:"δ UMi",ra:xe(17+32/60+13/3600),dec:86.5851,mag:4.36,tags:["polar"]},{id:"epsilon-umi",name:"勾陈四",designation:"ε UMi",ra:xe(16+45/60+58/3600),dec:82.0411,mag:4.21,tags:["polar"]},{id:"cassiopeia-alpha",name:"王良一",designation:"α Cas",ra:xe(0+40/60+30.4/3600),dec:56.5373,mag:2.24,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-beta",name:"王良四",designation:"β Cas",ra:xe(0+9/60+10.7/3600),dec:59.1498,mag:2.27,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-gamma",name:"策",designation:"γ Cas",ra:xe(0+56/60+42.5/3600),dec:60.7167,mag:2.47,tags:["polar","zero-cross"]},{id:"cassiopeia-delta",name:"阁道三",designation:"δ Cas",ra:xe(1+25/60+49/3600),dec:60.2353,mag:2.68,tags:["polar"]},{id:"cephei-alpha",name:"天钩五",designation:"α Cep",ra:xe(21+18/60+34.6/3600),dec:62.5856,mag:2.51,tags:["polar","bright"]},{id:"cephei-gamma",name:"少卫增八",designation:"γ Cep",ra:xe(23+39/60+20.9/3600),dec:77.6322,mag:3.21,tags:["polar","zero-cross"]},{id:"draco-thuban",name:"右枢（古北极星）",designation:"α Dra",ra:xe(14+4/60+23.4/3600),dec:64.3758,mag:3.65,tags:["polar"]},{id:"ursa-minor-eta",name:"勾陈增九",designation:"η UMi",ra:xe(16+17/60+30.5/3600),dec:75.7553,mag:4.95,tags:["polar"]},{id:"alpheratz",name:"壁宿二",designation:"α And",ra:xe(0+8/60+23.3/3600),dec:29.0904,mag:2.06,tags:["zero-cross","bright"]},{id:"algenib",name:"壁宿一",designation:"γ Peg",ra:xe(0+13/60+14.2/3600),dec:15.1836,mag:2.83,tags:["zero-cross","bright"]},{id:"markab",name:"室宿一",designation:"α Peg",ra:xe(23+4/60+46.5/3600),dec:15.2053,mag:2.49,tags:["zero-cross","bright"]},{id:"scheat",name:"室宿二",designation:"β Peg",ra:xe(23+3/60+46.5/3600),dec:28.083,mag:2.42,tags:["zero-cross","bright"]},{id:"alrescha",name:"外屏七",designation:"α Psc",ra:xe(2+2/60+2.8/3600),dec:2.7486,mag:3.82,tags:["zero-cross"]},{id:"eta-and",name:"奎宿四（仙女座η）",designation:"η And",ra:xe(0+57/60+12.4/3600),dec:23.4236,mag:4.4,tags:["zero-cross"]},{id:"delta-psc",name:"外屏一",designation:"δ Psc",ra:xe(0+48/60+40.9/3600),dec:7.5786,mag:4.43,tags:["zero-cross"]},{id:"epsilon-psc",name:"外屏二",designation:"ε Psc",ra:xe(1+2/60+56.6/3600),dec:7.8883,mag:4.27,tags:["zero-cross"]},{id:"mirach",name:"奎宿九",designation:"β And",ra:xe(1+9/60+43.9/3600),dec:35.6206,mag:2.05,tags:["zero-cross","bright"]},{id:"mu-and",name:"天大将军一",designation:"μ And",ra:xe(0+56/60+45.2/3600),dec:38.4995,mag:3.86,tags:["zero-cross"]},{id:"51-and",name:"车府增廿一",designation:"51 And",ra:xe(1+37/60+59.6/3600),dec:48.6333,mag:3.57,tags:[]},{id:"phoenicis-alpha",name:"火鸟六",designation:"α Phe",ra:xe(0+26/60+17/3600),dec:-42.306,mag:2.39,tags:["zero-cross","bright"]},{id:"arcturus",name:"大角星",designation:"α Boo",ra:xe(14+15/60+39.7/3600),dec:19.1825,mag:-.05,tags:["bright"]},{id:"vega",name:"织女一（织女星）",designation:"α Lyr",ra:xe(18+36/60+56.3/3600),dec:38.7837,mag:.03,tags:["bright"]},{id:"capella",name:"五车二",designation:"α Aur",ra:xe(5+16/60+41.4/3600),dec:45.998,mag:.08,tags:["bright"]},{id:"rigel",name:"参宿七",designation:"β Ori",ra:xe(5+14/60+32.3/3600),dec:-8.2017,mag:.13,tags:["bright"]},{id:"procyon",name:"南河三",designation:"α CMi",ra:xe(7+39/60+18.1/3600),dec:5.225,mag:.34,tags:["bright"]},{id:"betelgeuse",name:"参宿四",designation:"α Ori",ra:xe(5+55/60+10.3/3600),dec:7.4071,mag:.45,tags:["bright"]},{id:"altair",name:"河鼓二（牛郎星）",designation:"α Aql",ra:xe(19+50/60+47/3600),dec:8.8683,mag:.77,tags:["bright"]},{id:"aldebaran",name:"毕宿五",designation:"α Tau",ra:xe(4+35/60+55.2/3600),dec:16.5093,mag:.85,tags:["bright"]},{id:"antares",name:"心宿二（火星之敌）",designation:"α Sco",ra:xe(16+29/60+24.5/3600),dec:-26.432,mag:1.06,tags:["bright"]},{id:"spica",name:"角宿一",designation:"α Vir",ra:xe(13+25/60+11.6/3600),dec:-11.1614,mag:.98,tags:["bright"]},{id:"pollux",name:"北河三",designation:"β Gem",ra:xe(7+45/60+18.9/3600),dec:28.0262,mag:1.14,tags:["bright"]},{id:"deneb",name:"天津四",designation:"α Cyg",ra:xe(20+41/60+25.9/3600),dec:45.2803,mag:1.25,tags:["bright"]},{id:"regulus",name:"轩辕十四",designation:"α Leo",ra:xe(10+8/60+22.3/3600),dec:11.9672,mag:1.35,tags:["bright"]},{id:"castor",name:"北河二",designation:"α Gem",ra:xe(7+34/60+35.9/3600),dec:31.8884,mag:1.58,tags:["bright"]},{id:"bellatrix",name:"参宿五",designation:"γ Ori",ra:xe(5+25/60+7.9/3600),dec:6.3497,mag:1.64,tags:["bright"]},{id:"eltanin",name:"天棓四",designation:"γ Dra",ra:xe(17+56/60+36.4/3600),dec:51.4889,mag:2.24,tags:["bright"]},{id:"dubhe",name:"天枢",designation:"α UMa",ra:xe(11+3/60+43.7/3600),dec:61.751,mag:1.79,tags:["bright","polar"]},{id:"merak",name:"天璇",designation:"β UMa",ra:xe(11+1/60+50.5/3600),dec:56.3824,mag:2.37,tags:["bright","polar"]},{id:"alioth",name:"玉衡",designation:"ε UMa",ra:xe(12+54/60+1.7/3600),dec:55.9598,mag:1.77,tags:["bright","polar"]},{id:"mizar",name:"开阳",designation:"ζ UMa",ra:xe(13+23/60+55.5/3600),dec:54.9254,mag:2.27,tags:["bright","polar"]},{id:"fomalhaut",name:"北落师门",designation:"α PsA",ra:xe(22+57/60+39/3600),dec:-29.6222,mag:1.16,tags:["bright","zero-cross"]},{id:"achernar",name:"水委一",designation:"α Eri",ra:xe(1+37/60+42.8/3600),dec:-57.2367,mag:.46,tags:["bright"]},{id:"canopus",name:"老人星",designation:"α Car",ra:xe(6+23/60+57.1/3600),dec:-52.6957,mag:-.74,tags:["bright"]},{id:"sirius",name:"天狼星",designation:"α CMa",ra:xe(6+45/60+9/3600),dec:-16.7161,mag:-1.46,tags:["bright"]},{id:"hadar",name:"马腹一",designation:"β Cen",ra:xe(14+3/60+49.4/3600),dec:-60.373,mag:.61,tags:["bright"]},{id:"rigil-kent",name:"南门二",designation:"α Cen",ra:xe(14+39/60+36.5/3600),dec:-60.8334,mag:-.27,tags:["bright"]},{id:"acrux",name:"十字架二",designation:"α Cru",ra:xe(12+26/60+35.9/3600),dec:-63.0991,mag:.77,tags:["bright"]},{id:"mimosa",name:"十字架三",designation:"β Cru",ra:xe(12+47/60+43.3/3600),dec:-59.6887,mag:1.25,tags:["bright"]},{id:"avior",name:"海石一",designation:"ε Car",ra:xe(8+22/60+30.8/3600),dec:-59.5095,mag:1.86,tags:["bright"]},{id:"suhail",name:"天记",designation:"γ Vel",ra:xe(8+9/60+32/3600),dec:-47.3428,mag:1.78,tags:["bright"]},{id:"peacock",name:"孔雀十一",designation:"α Pav",ra:xe(20+25/60+38.9/3600),dec:-56.7351,mag:1.94,tags:["bright"]},{id:"ankaa",name:"火鸟九",designation:"β Phe",ra:xe(23+26/60),dec:-46.95,mag:3.31,tags:["zero-cross"]},{id:"hamal",name:"娄宿三",designation:"α Ari",ra:xe(2+7/60+10.4/3600),dec:23.4624,mag:2,tags:["bright"]},{id:"denebola",name:"五帝座一",designation:"β Leo",ra:xe(11+49/60+3.6/3600),dec:14.572,mag:2.14,tags:["bright"]},{id:"alphecca",name:"贯索四",designation:"α CrB",ra:xe(15+34/60+41.3/3600),dec:26.7147,mag:2.23,tags:["bright"]},{id:"rasalhague",name:"侯（蛇夫座α）",designation:"α Oph",ra:xe(17+34/60+56.1/3600),dec:12.5601,mag:2.07,tags:["bright"]},{id:"enif",name:"危宿三",designation:"ε Peg",ra:xe(21+44/60+11.2/3600),dec:9.875,mag:2.39,tags:["bright"]},{id:"algol",name:"大陵五（魔星）",designation:"β Per",ra:xe(3+8/60+10.1/3600),dec:40.9556,mag:2.12,tags:["bright"]},{id:"mirfak",name:"天船三",designation:"α Per",ra:xe(3+24/60+19.4/3600),dec:49.8612,mag:1.79,tags:["bright","polar"]}];function OA(t){return t==="太阳"?"sun":t==="月球"?"moon":"planet"}function zA(t,e,n,i,r){const s=t.solarSystemBodies(),o=[];for(const m of FA){const g=t.equatorialToHorizontal(m.ra,m.dec),x=hh(e.centerRa,e.centerDec,m.ra,m.dec),p=x<=e.radiusDeg,d=g.altDeg>=0;o.push({id:m.id,name:m.name,designation:m.designation,kind:"star",ra:m.ra,dec:m.dec,mag:m.mag,az:g.azDeg,alt:g.altDeg,hx:g.hx,hy:g.hy,hz:g.hz,sepFromCenter:x,inFov:p,passesMag:m.mag<=n,aboveHorizon:d,tags:m.tags})}for(const m of s){const g=t.equatorialToHorizontal(m.ra,m.dec),x=hh(e.centerRa,e.centerDec,m.ra,m.dec),p=x<=e.radiusDeg,d=g.altDeg>=0;o.push({id:`body-${m.body}`,name:m.name,designation:m.name,kind:OA(m.name),ra:m.ra,dec:m.dec,mag:m.mag,az:g.azDeg,alt:g.altDeg,hx:g.hx,hy:g.hy,hz:g.hz,sepFromCenter:x,inFov:p,passesMag:!0,aboveHorizon:d,tags:[],phaseFraction:m.phaseFraction})}const a=[],l=[],c={0:"北点 N",90:"东点 E",180:"南点 S",270:"西点 W"},u=240;for(let m=0;m<u;m++){const g=360*m/u,x=t.horizonPointEquatorial(g);a.push([x.ra,x.dec]),g in c&&l.push({label:c[g],ra:x.ra,dec:x.dec})}a.push(a[0]);const f=t.nadirEquatorial(),h=t.equatorialToHorizontal(e.centerRa,e.centerDec);for(const m of o)m.inFov=m.sepFromCenter<=e.radiusDeg;return{targets:o,horizon:{ring:a,nadirRa:f.ra,nadirDec:f.dec,cardinalPoints:l},centerAlt:h.altDeg,centerAz:h.azDeg,gmstHours:t.gmstHours(),julianDay:t.julianDay(),fovBoundary:r}}function g0(t,e){return t.inFov&&t.passesMag&&(!e||t.aboveHorizon)}function kA(t){return t.replace(".000Z","Z").replace("T"," ")}function $1(t,e,n,i,r){const s=Lx(t,r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg),o=An/2,a=30,l=70,c=92,u=An+a*2,f=An+a*2+l+c,h=a,m=l,g=s.path(Dx()),x=r.fov.radiusDeg<=20?5:r.fov.radiusDeg<=45?10:20,p=[];for(let P=x;P<r.fov.radiusDeg;P+=x)p.push(s.path(wu(r.fov.centerRa,r.fov.centerDec,P)));const d=s.path(wu(r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg)),_=s.path(Ux(e.horizon.nadirRa,e.horizon.nadirDec)),v=s.path(Ix(e.horizon.nadirRa,e.horizon.nadirDec)),S=P=>P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),C=n.map(P=>{const k=s.projection([P.ra,P.dec]);if(!k)return"";const y=Math.max(1.6,Math.min(7,6.2-P.mag*.9));return P.kind==="star"?`<circle cx="${k[0].toFixed(1)}" cy="${k[1].toFixed(1)}" r="${y.toFixed(1)}" fill="#fff" opacity="${P.aboveHorizon?1:.35}"/>`:P.kind==="planet"?`<rect x="${(k[0]-y).toFixed(1)}" y="${(k[1]-y).toFixed(1)}" width="${(y*2).toFixed(1)}" height="${(y*2).toFixed(1)}" fill="#9ecbff"/>`:`<polygon points="${k[0].toFixed(1)},${(k[1]-y).toFixed(1)} ${(k[0]+y).toFixed(1)},${k[1].toFixed(1)} ${k[0].toFixed(1)},${(k[1]+y).toFixed(1)} ${(k[0]-y).toFixed(1)},${k[1].toFixed(1)}" fill="${P.kind==="sun"?"#ffd27d":"#dfe6f2"}"/>`}).join(""),A=n.filter(P=>P.kind!=="star"||P.mag<=1.6).map(P=>{const k=s.projection([P.ra,P.dec]);return k?`<text x="${(k[0]+7).toFixed(1)}" y="${(k[1]+3).toFixed(1)}" font-size="10.5" fill="#cfe0ff">${S(P.name)}</text>`:""}).join(""),w=i.map(P=>{const k=s.projection([P.ra,P.dec]);return k?`<circle cx="${k[0].toFixed(1)}" cy="${k[1].toFixed(1)}" r="5" fill="none" stroke="${P.color}" stroke-width="1.6"/><text x="${(k[0]+8).toFixed(1)}" y="${(k[1]+4).toFixed(1)}" font-size="11" fill="${P.color}">${S(P.text)}</text>`:""}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${f}" viewBox="0 0 ${u} ${f}" font-family="sans-serif">
<rect width="${u}" height="${f}" fill="#070a14"/>
<text x="${h}" y="28" font-size="20" font-weight="bold" fill="#eaf1ff">本地星图 · ${S(r.projectionLabel)}</text>
<text x="${h}" y="52" font-size="12" fill="#9fb4d8">
坐标系：J2000.0 平赤道/平春分点（赤经、赤纬）；视场中心 ${Zu(r.fov.centerRa)} / ${Ju(r.fov.centerDec)}，
球面角半径 ${r.fov.radiusDeg.toFixed(1)}°；同心虚线环为等角距参考环（${t==="stereographic"?"立体投影下变形放大":"等距方位投影下等距"}）。
</text>
<g transform="translate(${h},${m})">
<circle cx="${o}" cy="${o}" r="${Ka}" fill="#0b1020" stroke="#3b4a6b" stroke-width="1.5"/>
<clipPath id="expdisc"><circle cx="${o}" cy="${o}" r="${Ka}"/></clipPath>
<g clip-path="url(#expdisc)">
<path d="${g}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${p.map(P=>`<path d="${P}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join(`
`)}
<path d="${v}" fill="#5a1f24" opacity="0.35"/>
<path d="${_}" fill="none" stroke="#ff5d5d" stroke-width="1.6"/>
<path d="${d}" fill="none" stroke="#57e389" stroke-width="1.4"/>
${C}
${A}
${w}
</g>
</g>
<g transform="translate(${h},${m+An+26})" font-size="11.5" fill="#9fb4d8">
<text x="0" y="0">时间基准：${kA(r.timeUtcIso)}（UTC）；儒略日 JD = ${r.julianDay.toFixed(5)}（力学时 TT）；格林威治视恒星时 ${r.gmstHours.toFixed(4)} h</text>
<text x="0" y="18">观测位置：${S(r.site.name)}（纬度 ${r.site.latitude.toFixed(4)}°，经度 ${r.site.longitude.toFixed(4)}°，海拔 ${r.site.height} m）</text>
<text x="0" y="36">筛选：星等 ≤ ${r.magLimit}（仅恒星）；地平线裁切：${r.horizonClip?"开启（仅地平以上）":"关闭（地平以下目标半透明显示）"}。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正。</text>
<text x="0" y="54">角距均按球面（haversine）计算；图上像素距离不作为实际角距。太阳系天体坐标为含光行差的地心 J2000 视位置。星表为 J2000 近似值，仅供科普制图。</text>
</g>
</svg>`}function Y1(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function BA(t,e,n=2){const i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(i),s=new Image;await new Promise((f,h)=>{s.onload=()=>f(),s.onerror=()=>h(new Error("SVG 栅格化失败")),s.src=r});const o=t.match(/width="(\d+)"\s+height="(\d+)"/),a=o?Number(o[1]):An,l=o?Number(o[2]):An,c=document.createElement("canvas");c.width=a*n,c.height=l*n;const u=c.getContext("2d");u.fillStyle="#070a14",u.fillRect(0,0,c.width,c.height),u.drawImage(s,0,0,c.width,c.height),URL.revokeObjectURL(r),c.toBlob(f=>{if(!f)return;const h=URL.createObjectURL(f),m=document.createElement("a");m.href=h,m.download=e,m.click(),setTimeout(()=>URL.revokeObjectURL(h),1e3)},"image/png")}function HA(t,e,n,i){return JSON.stringify({tool:"local-starchart",coordinateSystem:"J2000.0 mean equator & equinox (ICRS-aligned catalog approximations)",timeStandard:{utc:i.timeUtcIso,julianDayTT:i.julianDay,gmstHours:i.gmstHours},observer:i.site,fieldOfView:{centerRA_J2000_deg:i.fov.centerRa,centerDec_J2000_deg:i.fov.centerDec,angularRadius_deg:i.fov.radiusDeg},filters:{magnitudeLimitStars:i.magLimit,horizonClip:i.horizonClip},targets:e.map(r=>({id:r.id,name:r.name,designation:r.designation,kind:r.kind,ra_J2000_deg:Number(r.ra.toFixed(5)),dec_J2000_deg:Number(r.dec.toFixed(5)),magnitude:r.mag,azimuth_deg:Number(r.az.toFixed(3)),altitude_deg:Number(r.alt.toFixed(3)),angularSeparationFromCenter_deg:Number(r.sepFromCenter.toFixed(3))})),annotations:n},null,2)}const VA="local-starchart",GA=1,Za="fovs",Ja="annotations";let hc=null;function WA(){return hc||(hc=new Promise((t,e)=>{const n=indexedDB.open(VA,GA);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(Za)||i.createObjectStore(Za,{keyPath:"uuid"}),i.objectStoreNames.contains(Ja)||i.createObjectStore(Ja,{keyPath:"uuid"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),hc)}function Oo(t,e,n){return WA().then(i=>new Promise((r,s)=>{const o=i.transaction(t,e),a=n(o.objectStore(t));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)}))}async function jA(t){await Oo(Za,"readwrite",e=>e.put(t))}async function v0(){return(await Oo(Za,"readonly",e=>e.getAll())).sort((e,n)=>n.createdAt-e.createdAt)}async function XA(t){await Oo(Za,"readwrite",e=>e.delete(t))}async function $A(t){await Oo(Ja,"readwrite",e=>e.put(t))}async function _0(){return(await Oo(Ja,"readonly",e=>e.getAll())).sort((e,n)=>e.createdAt-n.createdAt)}async function YA(t){await Oo(Ja,"readwrite",e=>e.delete(t))}const q1=Au[0],qA="2026-09-30T13:00:00Z",KA={centerRa:213.9,centerDec:19.2,radiusDeg:30},ZA={body:we.Mars,targetName:"火星",startUtcIso:"2026-09-28T00:00:00Z",endUtcIso:"2026-10-03T00:00:00Z",stepHours:24};function K1(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}function JA(){const[t,e]=He.useState(q1),[n,i]=He.useState(qA),[r,s]=He.useState(KA),[o,a]=He.useState(4.5),[l,c]=He.useState(!1),[u,f]=He.useState(!0),[h,m]=He.useState(!0),[g,x]=He.useState(null),[p,d]=He.useState(null),[_,v]=He.useState(null),[S,C]=He.useState([]),[A,w]=He.useState([]),[P,k]=He.useState(ZA),[y,M]=He.useState(null),[j,B]=He.useState(null);He.useEffect(()=>{v0().then(C).catch(()=>{}),_0().then(w).catch(()=>{})},[]);const V=He.useMemo(()=>{const ae=new Date(n);return Number.isNaN(ae.getTime())?null:new ll(ae,t)},[t.latitude,t.longitude,t.height,n]),I=He.useMemo(()=>O5(r.centerRa,r.centerDec,r.radiusDeg,128),[r]),U=He.useMemo(()=>V?zA(V,r,o,l,I):null,[V,r,o,l,I]),q=He.useMemo(()=>V==null?void 0:V.graticuleHorizontal(),[V]),L=He.useMemo(()=>!V||!y?null:LA(y,t,r,V),[V,y,t,r]),K=He.useMemo(()=>g&&U?U.targets.find(ae=>ae.id===g)??null:null,[g,U]),$=ae=>{x(ae),ae&&v({id:ae,nonce:Date.now()})},ne=ae=>{const le=Fc.find(Te=>Te.id===ae);if(!le)return;const Ce=Au.find(Te=>Te.id===le.siteId)??q1;e({...Ce}),i(le.timeUtcIso),s({centerRa:le.centerRaDeg,centerDec:le.centerDecDeg,radiusDeg:le.fovRadiusDeg}),a(le.magLimit),c(le.horizonClip),le.suggestSelectId&&(x(le.suggestSelectId),v({id:le.suggestSelectId,nonce:Date.now()}))},ye=()=>{try{const ae=PA(P);M(ae),B(null)}catch(ae){M(null),B(ae instanceof Error?ae.message:"轨迹参数无效。")}},Ie=()=>{M(null),B(null)},Y=()=>{const ae=y==null?void 0:y.samples[0];ae&&s(le=>({...le,centerRa:ae.ra,centerDec:ae.dec}))},ee=ae=>{const le={uuid:K1(),name:ae,createdAt:Date.now(),fov:{...r},siteId:t.id,timeUtcIso:n};jA(le).then(()=>v0().then(C))},ce=ae=>XA(ae).then(()=>v0().then(C)),fe=ae=>s({...ae.fov}),Ne=(ae,le)=>{if(!K){alert("请先在任一视图中点击一个目标，批注将锚定在该目标的 J2000 坐标上。");return}const Ce={uuid:K1(),createdAt:Date.now(),ra:K.ra,dec:K.dec,text:ae,color:le};$A(Ce).then(()=>_0().then(w))},H=ae=>YA(ae).then(()=>_0().then(w)),Ue=ae=>U?{projectionLabel:ae,site:t,timeUtcIso:n,fov:r,julianDay:U.julianDay,gmstHours:U.gmstHours,horizonClip:l,magLimit:o}:null,Ke=ae=>{if(!U)return;const Ce=Ue(ae==="stereographic"?"立体投影 Stereographic":"等距方位投影 Azimuthal Equidistant"),Te=U.targets.filter(De=>g0(De,l)),We=$1(ae,U,Te,A,Ce);Y1(`星图_${ae}_${n.slice(0,10)}.svg`,We,"image/svg+xml;charset=utf-8")},me=async ae=>{if(!U)return;const Ce=Ue("立体投影 Stereographic"),Te=U.targets.filter(De=>g0(De,l)),We=$1(ae,U,Te,A,Ce);await BA(We,`星图_${ae}_${n.slice(0,10)}.png`)},b=()=>{if(!U)return;const ae=Ue("数据导出 JSON"),le=U.targets.filter(Ce=>g0(Ce,l));Y1(`星表视场_${n.slice(0,10)}.json`,HA(U,le,A,ae),"application/json")};return D.jsxs("div",{className:"app",children:[D.jsxs("header",{className:"app-header",children:[D.jsxs("div",{children:[D.jsx("h1",{children:"本地星图工具"}),D.jsx("p",{children:"球面（Three.js） · 立体投影 · 等距方位投影（D3 geo）三视对照 — 同一片天区、同一组目标"})]}),D.jsxs("div",{className:"export-bar",children:[D.jsx("button",{className:"btn",onClick:()=>Ke("stereographic"),children:"导出 立体 SVG"}),D.jsx("button",{className:"btn",onClick:()=>Ke("equidistant"),children:"导出 等距 SVG"}),D.jsx("button",{className:"btn",onClick:()=>me("stereographic"),children:"导出 PNG"}),D.jsx("button",{className:"btn",onClick:b,children:"导出 JSON"})]})]}),D.jsxs("div",{className:"main-grid",children:[D.jsx("aside",{className:"sidebar",children:D.jsx(DA,{site:t,timeUtcIso:n,fov:r,magLimit:o,horizonClip:l,showHorizon:u,showGraticule:h,savedFovs:S,annotations:A,onChangeSite:e,onChangeTime:i,onChangeFov:s,onChangeMag:a,onToggleHorizonClip:c,onToggleShowHorizon:f,onToggleGraticule:m,onApplyScenario:ne,onSaveFov:ee,onLoadFov:fe,onDeleteFov:ce,onAddAnnotation:Ne,onDeleteAnnotation:H,trajectoryDraft:P,trajectoryError:j,hasTrajectory:!!y,onChangeTrajectoryDraft:ae=>{k(ae),B(null)},onGenerateTrajectory:ye,onClearTrajectory:Ie})}),D.jsx("main",{className:"content",children:U?D.jsxs(D.Fragment,{children:[D.jsxs("section",{className:"view-row globe-section",children:[D.jsx("h2",{className:"view-label",children:"球面视图 · 本地地平天球（Three.js）"}),D.jsx(k5,{sky:U,fov:r,horizonClip:l,showGraticule:h,annotations:A,selectedId:g,hoverId:p,onSelect:$,onHover:d,focusToken:_,graticuleHorizontal:q,trajectory:L})]}),D.jsxs("section",{className:"view-row proj-section",children:[D.jsx(G1,{kind:"stereographic",sky:U,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:g,hoverId:p,onSelect:$,onHover:d,trajectory:L}),D.jsx(G1,{kind:"equidistant",sky:U,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:g,hoverId:p,onSelect:$,onHover:d,trajectory:L})]}),D.jsx(UA,{target:K,centerAlt:U.centerAlt,centerAz:U.centerAz,gmstHours:U.gmstHours,julianDay:U.julianDay}),L&&D.jsx(NA,{view:L,onCenterStart:Y})]}):D.jsx("div",{className:"bad-time",children:"时间格式无效，请检查 UTC 时间输入。"})})]}),D.jsxs("footer",{className:"app-footer",children:["纯前端本地应用，无后端、无网络请求 · 星表 J2000.0 近似坐标 · 地平坐标转换 astronomy-engine（Rotation_EQJ_HOR，无大气折射）· 角距一律按球面 haversine 计算，图上像素距离不代表实际角距",L?" · 日期轨迹为固定 UTC 步长离散采样，短线不是连续精密星历":""]})]})}x0.createRoot(document.getElementById("root")).render(D.jsx(s3.StrictMode,{children:D.jsx(JA,{})}));
