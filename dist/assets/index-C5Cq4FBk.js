var N3=Object.defineProperty;var U3=(t,e,n)=>e in t?N3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var et=(t,e,n)=>U3(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F3(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y1={exports:{}},Tu={},K1={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),O3=Symbol.for("react.portal"),z3=Symbol.for("react.fragment"),k3=Symbol.for("react.strict_mode"),B3=Symbol.for("react.profiler"),H3=Symbol.for("react.provider"),V3=Symbol.for("react.context"),G3=Symbol.for("react.forward_ref"),W3=Symbol.for("react.suspense"),X3=Symbol.for("react.memo"),j3=Symbol.for("react.lazy"),Qp=Symbol.iterator;function $3(t){return t===null||typeof t!="object"?null:(t=Qp&&t[Qp]||t["@@iterator"],typeof t=="function"?t:null)}var Z1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J1=Object.assign,Q1={};function Io(t,e,n){this.props=t,this.context=e,this.refs=Q1,this.updater=n||Z1}Io.prototype.isReactComponent={};Io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ev(){}ev.prototype=Io.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=Q1,this.updater=n||Z1}var Ph=Ch.prototype=new ev;Ph.constructor=Ch;J1(Ph,Io.prototype);Ph.isPureReactComponent=!0;var em=Array.isArray,tv=Object.prototype.hasOwnProperty,bh={current:null},nv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tv.call(e,i)&&!nv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qa,type:t,key:s,ref:o,props:r,_owner:bh.current}}function q3(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function Y3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tm=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y3(""+t.key):e.toString(36)}function fc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qa:case O3:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ju(o,0):i,em(r)?(n="",t!=null&&(n=t.replace(tm,"$&/")+"/"),fc(r,e,n,"",function(c){return c})):r!=null&&(Lh(r)&&(r=q3(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",em(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ju(s,a);o+=fc(s,e,n,l,r)}else if(l=$3(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ju(s,a++),o+=fc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ul(t,e,n){if(t==null)return t;var i=[],r=0;return fc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},dc={transition:null},Z3={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:dc,ReactCurrentOwner:bh};function rv(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:ul,forEach:function(t,e,n){ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ul(t,function(){e++}),e},toArray:function(t){return ul(t,function(e){return e})||[]},only:function(t){if(!Lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Io;Ve.Fragment=z3;Ve.Profiler=B3;Ve.PureComponent=Ch;Ve.StrictMode=k3;Ve.Suspense=W3;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z3;Ve.act=rv;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=J1({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tv.call(e,l)&&!nv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:V3,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H3,_context:t},t.Consumer=t};Ve.createElement=iv;Ve.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:G3,render:t}};Ve.isValidElement=Lh;Ve.lazy=function(t){return{$$typeof:j3,_payload:{_status:-1,_result:t},_init:K3}};Ve.memo=function(t,e){return{$$typeof:X3,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=dc.transition;dc.transition={};try{t()}finally{dc.transition=e}};Ve.unstable_act=rv;Ve.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ve.useContext=function(t){return cn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ve.useId=function(){return cn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ve.useRef=function(t){return cn.current.useRef(t)};Ve.useState=function(t){return cn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return cn.current.useTransition()};Ve.version="18.3.1";K1.exports=Ve;var Ge=K1.exports;const J3=F3(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q3=Ge,ex=Symbol.for("react.element"),tx=Symbol.for("react.fragment"),nx=Object.prototype.hasOwnProperty,ix=Q3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rx={key:!0,ref:!0,__self:!0,__source:!0};function sv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)nx.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ex,type:t,key:s,ref:o,props:r,_owner:ix.current}}Tu.Fragment=tx;Tu.jsx=sv;Tu.jsxs=sv;Y1.exports=Tu;var H=Y1.exports,p0={},ov={exports:{}},bn={},av={exports:{}},lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Z){var q=L.length;L.push(Z);e:for(;0<q;){var ne=q-1>>>1,_e=L[ne];if(0<r(_e,Z))L[ne]=Z,L[q]=_e,q=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Z=L[0],q=L.pop();if(q!==Z){L[0]=q;e:for(var ne=0,_e=L.length,be=_e>>>1;ne<be;){var B=2*(ne+1)-1,J=L[B],ae=B+1,le=L[ae];if(0>r(J,q))ae<_e&&0>r(le,J)?(L[ne]=le,L[ae]=q,ne=ae):(L[ne]=J,L[B]=q,ne=B);else if(ae<_e&&0>r(le,q))L[ne]=le,L[ae]=q,ne=ae;else break e}}return Z}function r(L,Z){var q=L.sortIndex-Z.sortIndex;return q!==0?q:L.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=L)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(L){if(x=!1,v(L),!m)if(n(l)!==null)m=!0,O(P);else{var Z=n(c);Z!==null&&Y(S,Z.startTime-L)}}function P(L,Z){m=!1,x&&(x=!1,h(R),R=-1),p=!0;var q=f;try{for(v(Z),d=n(l);d!==null&&(!(d.expirationTime>Z)||L&&!M());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var _e=ne(d.expirationTime<=Z);Z=t.unstable_now(),typeof _e=="function"?d.callback=_e:d===n(l)&&i(l),v(Z)}else i(l);d=n(l)}if(d!==null)var be=!0;else{var B=n(c);B!==null&&Y(S,B.startTime-Z),be=!1}return be}finally{d=null,f=q,p=!1}}var A=!1,T=null,R=-1,z=5,y=-1;function M(){return!(t.unstable_now()-y<z)}function W(){if(T!==null){var L=t.unstable_now();y=L;var Z=!0;try{Z=T(!0,L)}finally{Z?k():(A=!1,T=null)}}else A=!1}var k;if(typeof _=="function")k=function(){_(W)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,D=$.port2;$.port1.onmessage=W,k=function(){D.postMessage(null)}}else k=function(){g(W,0)};function O(L){T=L,A||(A=!0,k())}function Y(L,Z){R=g(function(){L(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,O(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var q=f;f=Z;try{return L()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=f;f=L;try{return Z()}finally{f=q}},t.unstable_scheduleCallback=function(L,Z,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,L){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=q+_e,L={id:u++,callback:Z,priorityLevel:L,startTime:q,expirationTime:_e,sortIndex:-1},q>ne?(L.sortIndex=q,e(c,L),n(l)===null&&L===n(c)&&(x?(h(R),R=-1):x=!0,Y(S,q-ne))):(L.sortIndex=_e,e(l,L),m||p||(m=!0,O(P))),L},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(L){var Z=f;return function(){var q=f;f=Z;try{return L.apply(this,arguments)}finally{f=q}}}})(lv);av.exports=lv;var sx=av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=Ge,Cn=sx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cv=new Set,Ca={};function ps(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(Ca[t]=e,t=0;t<e.length;t++)cv.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m0=Object.prototype.hasOwnProperty,ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nm={},im={};function lx(t){return m0.call(im,t)?!0:m0.call(nm,t)?!1:ax.test(t)?im[t]=!0:(nm[t]=!0,!1)}function cx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ux(t,e,n,i){if(e===null||typeof e>"u"||cx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Ih);Xt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Ih);Xt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Ih);Xt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ux(e,n,r,i)&&(n=null),i||r===null?lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Hs=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),g0=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),v0=Symbol.for("react.suspense"),_0=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),dv=Symbol.for("react.offscreen"),rm=Symbol.iterator;function ko(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Qu;function ra(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var ef=!1;function tf(t,e){if(!t||ef)return"";ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ef=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function fx(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=tf(t.type,!1),t;case 11:return t=tf(t.type.render,!1),t;case 1:return t=tf(t.type,!0),t;default:return""}}function x0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Hs:return"Portal";case g0:return"Profiler";case Uh:return"StrictMode";case v0:return"Suspense";case _0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fv:return(t.displayName||"Context")+".Consumer";case uv:return(t._context.displayName||"Context")+".Provider";case Fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:x0(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return x0(t(e))}catch{}}return null}function dx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return x0(e);case 8:return e===Uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hx(t){var e=hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dl(t){t._valueTracker||(t._valueTracker=hx(t))}function pv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=hv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function y0(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mv(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function S0(t,e){mv(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?M0(t,e.type,n):e.hasOwnProperty("defaultValue")&&M0(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function M0(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function E0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(sa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function gv(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,_v=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mx=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function T0(t,e){if(e){if(mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function A0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R0=null;function zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var C0=null,so=null,oo=null;function cm(t){if(t=nl(t)){if(typeof C0!="function")throw Error(re(280));var e=t.stateNode;e&&(e=bu(e),C0(t.stateNode,t.type,e))}}function Sv(t){so?oo?oo.push(t):oo=[t]:so=t}function Mv(){if(so){var t=so,e=oo;if(oo=so=null,cm(t),e)for(t=0;t<e.length;t++)cm(e[t])}}function Ev(t,e){return t(e)}function wv(){}var nf=!1;function Tv(t,e,n){if(nf)return t(e,n);nf=!0;try{return Ev(t,e,n)}finally{nf=!1,(so!==null||oo!==null)&&(wv(),Mv())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var i=bu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var P0=!1;if(Hi)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){P0=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{P0=!1}function gx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ga=!1,Nc=null,Uc=!1,b0=null,vx={onError:function(t){ga=!0,Nc=t}};function _x(t,e,n,i,r,s,o,a,l){ga=!1,Nc=null,gx.apply(vx,arguments)}function xx(t,e,n,i,r,s,o,a,l){if(_x.apply(this,arguments),ga){if(ga){var c=Nc;ga=!1,Nc=null}else throw Error(re(198));Uc||(Uc=!0,b0=c)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function um(t){if(ms(t)!==t)throw Error(re(188))}function yx(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return um(r),t;if(s===i)return um(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Rv(t){return t=yx(t),t!==null?Cv(t):null}function Cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cv(t);if(e!==null)return e;t=t.sibling}return null}var Pv=Cn.unstable_scheduleCallback,fm=Cn.unstable_cancelCallback,Sx=Cn.unstable_shouldYield,Mx=Cn.unstable_requestPaint,Rt=Cn.unstable_now,Ex=Cn.unstable_getCurrentPriorityLevel,kh=Cn.unstable_ImmediatePriority,bv=Cn.unstable_UserBlockingPriority,Fc=Cn.unstable_NormalPriority,wx=Cn.unstable_LowPriority,Lv=Cn.unstable_IdlePriority,Au=null,yi=null;function Tx(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Au,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:Cx,Ax=Math.log,Rx=Math.LN2;function Cx(t){return t>>>=0,t===0?32:31-(Ax(t)/Rx|0)|0}var pl=64,ml=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=oa(a):(s&=o,s!==0&&(i=oa(s)))}else o=n&~r,o!==0?i=oa(o):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function Px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function L0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dv(){var t=pl;return pl<<=1,!(pl&4194240)&&(pl=64),t}function rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function el(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function Lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nv,Hh,Uv,Fv,Ov,D0=!1,gl=[],hr=null,pr=null,mr=null,La=new Map,Da=new Map,ar=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dm(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Ho(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&Hh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ix(t,e,n,i,r){switch(e){case"focusin":return hr=Ho(hr,t,e,n,i,r),!0;case"dragenter":return pr=Ho(pr,t,e,n,i,r),!0;case"mouseover":return mr=Ho(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,Ho(La.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,Ho(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function zv(t){var e=jr(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=Av(n),e!==null){t.blockedOn=e,Ov(t.priority,function(){Uv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=I0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);R0=i,n.target.dispatchEvent(i),R0=null}else return e=nl(n),e!==null&&Hh(e),t.blockedOn=n,!1;e.shift()}return!0}function hm(t,e,n){hc(t)&&n.delete(e)}function Nx(){D0=!1,hr!==null&&hc(hr)&&(hr=null),pr!==null&&hc(pr)&&(pr=null),mr!==null&&hc(mr)&&(mr=null),La.forEach(hm),Da.forEach(hm)}function Vo(t,e){t.blockedOn===e&&(t.blockedOn=null,D0||(D0=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Nx)))}function Ia(t){function e(r){return Vo(r,t)}if(0<gl.length){Vo(gl[0],t);for(var n=1;n<gl.length;n++){var i=gl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&Vo(hr,t),pr!==null&&Vo(pr,t),mr!==null&&Vo(mr,t),La.forEach(e),Da.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)zv(n),n.blockedOn===null&&ar.shift()}var ao=qi.ReactCurrentBatchConfig,zc=!0;function Ux(t,e,n,i){var r=lt,s=ao.transition;ao.transition=null;try{lt=1,Vh(t,e,n,i)}finally{lt=r,ao.transition=s}}function Fx(t,e,n,i){var r=lt,s=ao.transition;ao.transition=null;try{lt=4,Vh(t,e,n,i)}finally{lt=r,ao.transition=s}}function Vh(t,e,n,i){if(zc){var r=I0(t,e,n,i);if(r===null)pf(t,e,i,kc,n),dm(t,i);else if(Ix(r,t,e,n,i))i.stopPropagation();else if(dm(t,i),e&4&&-1<Dx.indexOf(t)){for(;r!==null;){var s=nl(r);if(s!==null&&Nv(s),s=I0(t,e,n,i),s===null&&pf(t,e,i,kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pf(t,e,i,null,n)}}var kc=null;function I0(t,e,n,i){if(kc=null,t=zh(i),t=jr(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ex()){case kh:return 1;case bv:return 4;case Fc:case wx:return 16;case Lv:return 536870912;default:return 16}default:return 16}}var ur=null,Gh=null,pc=null;function Bv(){if(pc)return pc;var t,e=Gh,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pc=r.slice(t,1<i?1-i:void 0)}function mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function pm(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:pm,this.isPropagationStopped=pm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=Ln(No),tl=Et({},No,{view:0,detail:0}),Ox=Ln(tl),sf,of,Go,Ru=Et({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(sf=t.screenX-Go.screenX,of=t.screenY-Go.screenY):of=sf=0,Go=t),sf)},movementY:function(t){return"movementY"in t?t.movementY:of}}),mm=Ln(Ru),zx=Et({},Ru,{dataTransfer:0}),kx=Ln(zx),Bx=Et({},tl,{relatedTarget:0}),af=Ln(Bx),Hx=Et({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=Ln(Hx),Gx=Et({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=Ln(Gx),Xx=Et({},No,{data:0}),gm=Ln(Xx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qx[t])?!!e[t]:!1}function Xh(){return Yx}var Kx=Et({},tl,{key:function(t){if(t.key){var e=jx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zx=Ln(Kx),Jx=Et({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Ln(Jx),Qx=Et({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),ey=Ln(Qx),ty=Et({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=Ln(ty),iy=Et({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Ln(iy),sy=[9,13,27,32],jh=Hi&&"CompositionEvent"in window,va=null;Hi&&"documentMode"in document&&(va=document.documentMode);var oy=Hi&&"TextEvent"in window&&!va,Hv=Hi&&(!jh||va&&8<va&&11>=va),_m=" ",xm=!1;function Vv(t,e){switch(t){case"keyup":return sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function ay(t,e){switch(t){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:(xm=!0,_m);case"textInput":return t=e.data,t===_m&&xm?null:t;default:return null}}function ly(t,e){if(Gs)return t==="compositionend"||!jh&&Vv(t,e)?(t=Bv(),pc=Gh=ur=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hv&&e.locale!=="ko"?null:e.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cy[t.type]:e==="textarea"}function Wv(t,e,n,i){Sv(i),e=Bc(e,"onChange"),0<e.length&&(n=new Wh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _a=null,Na=null;function uy(t){t_(t,0)}function Cu(t){var e=js(t);if(pv(e))return t}function fy(t,e){if(t==="change")return e}var Xv=!1;if(Hi){var lf;if(Hi){var cf="oninput"in document;if(!cf){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),cf=typeof Sm.oninput=="function"}lf=cf}else lf=!1;Xv=lf&&(!document.documentMode||9<document.documentMode)}function Mm(){_a&&(_a.detachEvent("onpropertychange",jv),Na=_a=null)}function jv(t){if(t.propertyName==="value"&&Cu(Na)){var e=[];Wv(e,Na,t,zh(t)),Tv(uy,e)}}function dy(t,e,n){t==="focusin"?(Mm(),_a=e,Na=n,_a.attachEvent("onpropertychange",jv)):t==="focusout"&&Mm()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(Na)}function py(t,e){if(t==="click")return Cu(e)}function my(t,e){if(t==="input"||t==="change")return Cu(e)}function gy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:gy;function Ua(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!m0.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,e){var n=Em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Em(n)}}function $v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qv(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vy(t){var e=qv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$v(n.ownerDocument.documentElement,n)){if(i!==null&&$h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wm(n,s);var o=wm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _y=Hi&&"documentMode"in document&&11>=document.documentMode,Ws=null,N0=null,xa=null,U0=!1;function Tm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;U0||Ws==null||Ws!==Ic(i)||(i=Ws,"selectionStart"in i&&$h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&Ua(xa,i)||(xa=i,i=Bc(N0,"onSelect"),0<i.length&&(e=new Wh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ws)))}function _l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},uf={},Yv={};Hi&&(Yv=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Pu(t){if(uf[t])return uf[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yv)return uf[t]=e[n];return t}var Kv=Pu("animationend"),Zv=Pu("animationiteration"),Jv=Pu("animationstart"),Qv=Pu("transitionend"),e_=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){e_.set(t,e),ps(e,[t])}for(var ff=0;ff<Am.length;ff++){var df=Am[ff],xy=df.toLowerCase(),yy=df[0].toUpperCase()+df.slice(1);Rr(xy,"on"+yy)}Rr(Kv,"onAnimationEnd");Rr(Zv,"onAnimationIteration");Rr(Jv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Qv,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xx(i,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rm(r,a,c),s=l}}}if(Uc)throw t=b0,Uc=!1,b0=null,t}function pt(t,e){var n=e[B0];n===void 0&&(n=e[B0]=new Set);var i=t+"__bubble";n.has(i)||(n_(e,t,2,!1),n.add(i))}function hf(t,e,n){var i=0;e&&(i|=4),n_(n,t,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[xl]){t[xl]=!0,cv.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||hf(n,!1,t),hf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,hf("selectionchange",!1,e))}}function n_(t,e,n,i){switch(kv(e)){case 1:var r=Ux;break;case 4:r=Fx;break;default:r=Vh}n=r.bind(null,e,n,t),r=void 0,!P0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Tv(function(){var c=s,u=zh(n),d=[];e:{var f=e_.get(t);if(f!==void 0){var p=Wh,m=t;switch(t){case"keypress":if(mc(n)===0)break e;case"keydown":case"keyup":p=Zx;break;case"focusin":m="focus",p=af;break;case"focusout":m="blur",p=af;break;case"beforeblur":case"afterblur":p=af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ey;break;case Kv:case Zv:case Jv:p=Vx;break;case Qv:p=ny;break;case"scroll":p=Ox;break;case"wheel":p=ry;break;case"copy":case"cut":case"paste":p=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vm}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=ba(_,h),S!=null&&x.push(Oa(_,S,v)))),g)break;_=_.return}0<x.length&&(f=new p(f,m,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==R0&&(m=n.relatedTarget||n.fromElement)&&(jr(m)||m[Vi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?jr(m):null,m!==null&&(g=ms(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=mm,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=vm,S="onPointerLeave",h="onPointerEnter",_="pointer"),g=p==null?f:js(p),v=m==null?f:js(m),f=new x(S,_+"leave",p,n,u),f.target=g,f.relatedTarget=v,S=null,jr(u)===c&&(x=new x(h,_+"enter",m,n,u),x.target=v,x.relatedTarget=g,S=x),g=S,p&&m)t:{for(x=p,h=m,_=0,v=x;v;v=_s(v))_++;for(v=0,S=h;S;S=_s(S))v++;for(;0<_-v;)x=_s(x),_--;for(;0<v-_;)h=_s(h),v--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=_s(x),h=_s(h)}x=null}else x=null;p!==null&&Cm(d,f,p,x,!1),m!==null&&g!==null&&Cm(d,g,m,x,!0)}}e:{if(f=c?js(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=fy;else if(ym(f))if(Xv)P=my;else{P=hy;var A=dy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=py);if(P&&(P=P(t,c))){Wv(d,P,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&M0(f,"number",f.value)}switch(A=c?js(c):window,t){case"focusin":(ym(A)||A.contentEditable==="true")&&(Ws=A,N0=c,xa=null);break;case"focusout":xa=N0=Ws=null;break;case"mousedown":U0=!0;break;case"contextmenu":case"mouseup":case"dragend":U0=!1,Tm(d,n,u);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Tm(d,n,u)}var T;if(jh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Gs?Vv(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Hv&&n.locale!=="ko"&&(Gs||R!=="onCompositionStart"?R==="onCompositionEnd"&&Gs&&(T=Bv()):(ur=u,Gh="value"in ur?ur.value:ur.textContent,Gs=!0)),A=Bc(c,R),0<A.length&&(R=new gm(R,t,null,n,u),d.push({event:R,listeners:A}),T?R.data=T:(T=Gv(n),T!==null&&(R.data=T)))),(T=oy?ay(t,n):ly(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(u=new gm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}t_(d,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ba(t,n),s!=null&&i.unshift(Oa(t,s,r)),s=ba(t,e),s!=null&&i.push(Oa(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ba(n,s),l!=null&&o.unshift(Oa(n,l,a))):r||(l=ba(n,s),l!=null&&o.push(Oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var My=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function Pm(t){return(typeof t=="string"?t:""+t).replace(My,`
`).replace(Ey,"")}function yl(t,e,n){if(e=Pm(e),Pm(t)!==e&&n)throw Error(re(425))}function Hc(){}var F0=null,O0=null;function z0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var k0=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(t){return bm.resolve(null).then(t).catch(Ay)}:k0;function Ay(t){setTimeout(function(){throw t})}function mf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ia(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),gi="__reactFiber$"+Uo,za="__reactProps$"+Uo,Vi="__reactContainer$"+Uo,B0="__reactEvents$"+Uo,Ry="__reactListeners$"+Uo,Cy="__reactHandles$"+Uo;function jr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lm(t);t!==null;){if(n=t[gi])return n;t=Lm(t)}return e}t=n,n=t.parentNode}return null}function nl(t){return t=t[gi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function bu(t){return t[za]||null}var H0=[],$s=-1;function Cr(t){return{current:t}}function gt(t){0>$s||(t.current=H0[$s],H0[$s]=null,$s--)}function dt(t,e){$s++,H0[$s]=t.current,t.current=e}var wr={},Qt=Cr(wr),mn=Cr(!1),ns=wr;function go(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Vc(){gt(mn),gt(Qt)}function Dm(t,e,n){if(Qt.current!==wr)throw Error(re(168));dt(Qt,e),dt(mn,n)}function i_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,dx(t)||"Unknown",r));return Et({},n,i)}function Gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,ns=Qt.current,dt(Qt,t),dt(mn,mn.current),!0}function Im(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=i_(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,gt(mn),gt(Qt),dt(Qt,t)):gt(mn),dt(mn,n)}var Di=null,Lu=!1,gf=!1;function r_(t){Di===null?Di=[t]:Di.push(t)}function Py(t){Lu=!0,r_(t)}function Pr(){if(!gf&&Di!==null){gf=!0;var t=0,e=lt;try{var n=Di;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,Lu=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),Pv(kh,Pr),r}finally{lt=e,gf=!1}}return null}var qs=[],Ys=0,Wc=null,Xc=0,Un=[],Fn=0,is=null,Ni=1,Ui="";function kr(t,e){qs[Ys++]=Xc,qs[Ys++]=Wc,Wc=t,Xc=e}function s_(t,e,n){Un[Fn++]=Ni,Un[Fn++]=Ui,Un[Fn++]=is,is=t;var i=Ni;t=Ui;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-ci(e)+r|n<<r|i,Ui=s+t}else Ni=1<<s|n<<r|i,Ui=t}function qh(t){t.return!==null&&(kr(t,1),s_(t,1,0))}function Yh(t){for(;t===Wc;)Wc=qs[--Ys],qs[Ys]=null,Xc=qs[--Ys],qs[Ys]=null;for(;t===is;)is=Un[--Fn],Un[Fn]=null,Ui=Un[--Fn],Un[Fn]=null,Ni=Un[--Fn],Un[Fn]=null}var Rn=null,Tn=null,_t=!1,ii=null;function o_(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Tn=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:Ni,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Tn=null,!0):!1;default:return!1}}function V0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function G0(t){if(_t){var e=Tn;if(e){var n=e;if(!Nm(t,e)){if(V0(t))throw Error(re(418));e=gr(n.nextSibling);var i=Rn;e&&Nm(t,e)?o_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Rn=t)}}else{if(V0(t))throw Error(re(418));t.flags=t.flags&-4097|2,_t=!1,Rn=t}}}function Um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Sl(t){if(t!==Rn)return!1;if(!_t)return Um(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!z0(t.type,t.memoizedProps)),e&&(e=Tn)){if(V0(t))throw a_(),Error(re(418));for(;e;)o_(t,e),e=gr(e.nextSibling)}if(Um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=Rn?gr(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=Tn;t;)t=gr(t.nextSibling)}function vo(){Tn=Rn=null,_t=!1}function Kh(t){ii===null?ii=[t]:ii.push(t)}var by=qi.ReactCurrentBatchConfig;function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fm(t){var e=t._init;return e(t._payload)}function l_(t){function e(h,_){if(t){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=yr(h,_),h.index=0,h.sibling=null,h}function s(h,_,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,S){return _===null||_.tag!==6?(_=Ef(v,h.mode,S),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,S){var P=v.type;return P===Vs?u(h,_,v.props.children,S,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sr&&Fm(P)===_.type)?(S=r(_,v.props),S.ref=Wo(h,_,v),S.return=h,S):(S=Mc(v.type,v.key,v.props,null,h.mode,S),S.ref=Wo(h,_,v),S.return=h,S)}function c(h,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=wf(v,h.mode,S),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function u(h,_,v,S,P){return _===null||_.tag!==7?(_=es(v,h.mode,S,P),_.return=h,_):(_=r(_,v),_.return=h,_)}function d(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ef(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:return v=Mc(_.type,_.key,_.props,null,h.mode,v),v.ref=Wo(h,null,_),v.return=h,v;case Hs:return _=wf(_,h.mode,v),_.return=h,_;case sr:var S=_._init;return d(h,S(_._payload),v)}if(sa(_)||ko(_))return _=es(_,h.mode,v,null),_.return=h,_;Ml(h,_)}return null}function f(h,_,v,S){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(h,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:return v.key===P?l(h,_,v,S):null;case Hs:return v.key===P?c(h,_,v,S):null;case sr:return P=v._init,f(h,_,P(v._payload),S)}if(sa(v)||ko(v))return P!==null?null:u(h,_,v,S,null);Ml(h,v)}return null}function p(h,_,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(_,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fl:return h=h.get(S.key===null?v:S.key)||null,l(_,h,S,P);case Hs:return h=h.get(S.key===null?v:S.key)||null,c(_,h,S,P);case sr:var A=S._init;return p(h,_,v,A(S._payload),P)}if(sa(S)||ko(S))return h=h.get(v)||null,u(_,h,S,P,null);Ml(_,S)}return null}function m(h,_,v,S){for(var P=null,A=null,T=_,R=_=0,z=null;T!==null&&R<v.length;R++){T.index>R?(z=T,T=null):z=T.sibling;var y=f(h,T,v[R],S);if(y===null){T===null&&(T=z);break}t&&T&&y.alternate===null&&e(h,T),_=s(y,_,R),A===null?P=y:A.sibling=y,A=y,T=z}if(R===v.length)return n(h,T),_t&&kr(h,R),P;if(T===null){for(;R<v.length;R++)T=d(h,v[R],S),T!==null&&(_=s(T,_,R),A===null?P=T:A.sibling=T,A=T);return _t&&kr(h,R),P}for(T=i(h,T);R<v.length;R++)z=p(T,h,R,v[R],S),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?R:z.key),_=s(z,_,R),A===null?P=z:A.sibling=z,A=z);return t&&T.forEach(function(M){return e(h,M)}),_t&&kr(h,R),P}function x(h,_,v,S){var P=ko(v);if(typeof P!="function")throw Error(re(150));if(v=P.call(v),v==null)throw Error(re(151));for(var A=P=null,T=_,R=_=0,z=null,y=v.next();T!==null&&!y.done;R++,y=v.next()){T.index>R?(z=T,T=null):z=T.sibling;var M=f(h,T,y.value,S);if(M===null){T===null&&(T=z);break}t&&T&&M.alternate===null&&e(h,T),_=s(M,_,R),A===null?P=M:A.sibling=M,A=M,T=z}if(y.done)return n(h,T),_t&&kr(h,R),P;if(T===null){for(;!y.done;R++,y=v.next())y=d(h,y.value,S),y!==null&&(_=s(y,_,R),A===null?P=y:A.sibling=y,A=y);return _t&&kr(h,R),P}for(T=i(h,T);!y.done;R++,y=v.next())y=p(T,h,R,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?R:y.key),_=s(y,_,R),A===null?P=y:A.sibling=y,A=y);return t&&T.forEach(function(W){return e(h,W)}),_t&&kr(h,R),P}function g(h,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Vs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:e:{for(var P=v.key,A=_;A!==null;){if(A.key===P){if(P=v.type,P===Vs){if(A.tag===7){n(h,A.sibling),_=r(A,v.props.children),_.return=h,h=_;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sr&&Fm(P)===A.type){n(h,A.sibling),_=r(A,v.props),_.ref=Wo(h,A,v),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}v.type===Vs?(_=es(v.props.children,h.mode,S,v.key),_.return=h,h=_):(S=Mc(v.type,v.key,v.props,null,h.mode,S),S.ref=Wo(h,_,v),S.return=h,h=S)}return o(h);case Hs:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=wf(v,h.mode,S),_.return=h,h=_}return o(h);case sr:return A=v._init,g(h,_,A(v._payload),S)}if(sa(v))return m(h,_,v,S);if(ko(v))return x(h,_,v,S);Ml(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,v),_.return=h,h=_):(n(h,_),_=Ef(v,h.mode,S),_.return=h,h=_),o(h)):n(h,_)}return g}var _o=l_(!0),c_=l_(!1),jc=Cr(null),$c=null,Ks=null,Zh=null;function Jh(){Zh=Ks=$c=null}function Qh(t){var e=jc.current;gt(jc),t._currentValue=e}function W0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){$c=t,Zh=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if($c===null)throw Error(re(308));Ks=t,$c.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var $r=null;function ep(t){$r===null?$r=[t]:$r.push(t)}function u_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ep(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,ep(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}function Om(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,x=a;switch(f=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=Et({},d,f);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=d}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var il={},Si=Cr(il),ka=Cr(il),Ba=Cr(il);function qr(t){if(t===il)throw Error(re(174));return t}function np(t,e){switch(dt(Ba,e),dt(ka,t),dt(Si,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:w0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=w0(e,t)}gt(Si),dt(Si,e)}function xo(){gt(Si),gt(ka),gt(Ba)}function d_(t){qr(Ba.current);var e=qr(Si.current),n=w0(e,t.type);e!==n&&(dt(ka,t),dt(Si,n))}function ip(t){ka.current===t&&(gt(Si),gt(ka))}var yt=Cr(0);function Yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vf=[];function rp(){for(var t=0;t<vf.length;t++)vf[t]._workInProgressVersionPrimary=null;vf.length=0}var vc=qi.ReactCurrentDispatcher,_f=qi.ReactCurrentBatchConfig,rs=0,Mt=null,It=null,zt=null,Kc=!1,ya=!1,Ha=0,Ly=0;function jt(){throw Error(re(321))}function sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function op(t,e,n,i,r,s){if(rs=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?Uy:Fy,t=n(i,r),ya){s=0;do{if(ya=!1,Ha=0,25<=s)throw Error(re(301));s+=1,zt=It=null,e.updateQueue=null,vc.current=Oy,t=n(i,r)}while(ya)}if(vc.current=Zc,e=It!==null&&It.next!==null,rs=0,zt=It=Mt=null,Kc=!1,e)throw Error(re(300));return t}function ap(){var t=Ha!==0;return Ha=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function $n(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(re(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function Va(t,e){return typeof e=="function"?e(t):e}function xf(t){var e=$n(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((rs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=u,ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yf(t){var e=$n(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function h_(){}function p_(t,e){var n=Mt,i=$n(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,lp(v_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Ga(9,g_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(re(349));rs&30||m_(n,e,r)}return r}function m_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g_(t,e,n,i){e.value=n,e.getSnapshot=i,__(e)&&x_(t)}function v_(t,e,n){return n(function(){__(e)&&x_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function x_(t){var e=Gi(t,1);e!==null&&ui(e,t,1,-1)}function km(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=Ny.bind(null,Mt,t),[e.memoizedState,t]}function Ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function y_(){return $n().memoizedState}function _c(t,e,n,i){var r=hi();Mt.flags|=t,r.memoizedState=Ga(1|e,n,void 0,i===void 0?null:i)}function Du(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&sp(i,o.deps)){r.memoizedState=Ga(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ga(1|e,n,s,i)}function Bm(t,e){return _c(8390656,8,t,e)}function lp(t,e){return Du(2048,8,t,e)}function S_(t,e){return Du(4,2,t,e)}function M_(t,e){return Du(4,4,t,e)}function E_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,E_.bind(null,e,t),n)}function cp(){}function T_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function A_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function R_(t,e,n){return rs&21?(fi(n,e)||(n=Dv(),Mt.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function Dy(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=_f.transition;_f.transition={};try{t(!1),e()}finally{lt=n,_f.transition=i}}function C_(){return $n().memoizedState}function Iy(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))b_(e,n);else if(n=u_(t,e,n,i),n!==null){var r=on();ui(n,t,i,r),L_(n,e,i)}}function Ny(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))b_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,ep(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=u_(t,e,r,i),n!==null&&(r=on(),ui(n,t,i,r),L_(n,e,i))}}function P_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function b_(t,e){ya=Kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}var Zc={readContext:jn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Uy={readContext:jn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_c(4194308,4,E_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _c(4194308,4,t,e)},useInsertionEffect:function(t,e){return _c(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Iy.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:km,useDebugValue:cp,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=km(!1),e=t[0];return t=Dy.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=hi();if(_t){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Bt===null)throw Error(re(349));rs&30||m_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bm(v_.bind(null,i,s,t),[t]),i.flags|=2048,Ga(9,g_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Bt.identifierPrefix;if(_t){var n=Ui,i=Ni;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:jn,useCallback:T_,useContext:jn,useEffect:lp,useImperativeHandle:w_,useInsertionEffect:S_,useLayoutEffect:M_,useMemo:A_,useReducer:xf,useRef:y_,useState:function(){return xf(Va)},useDebugValue:cp,useDeferredValue:function(t){var e=$n();return R_(e,It.memoizedState,t)},useTransition:function(){var t=xf(Va)[0],e=$n().memoizedState;return[t,e]},useMutableSource:h_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1},Oy={readContext:jn,useCallback:T_,useContext:jn,useEffect:lp,useImperativeHandle:w_,useInsertionEffect:S_,useLayoutEffect:M_,useMemo:A_,useReducer:yf,useRef:y_,useState:function(){return yf(Va)},useDebugValue:cp,useDeferredValue:function(t){var e=$n();return It===null?e.memoizedState=t:R_(e,It.memoizedState,t)},useTransition:function(){var t=yf(Va)[0],e=$n().memoizedState;return[t,e]},useMutableSource:h_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function X0(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=xr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),gc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=xr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),gc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=xr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(ui(e,t,i,n),gc(e,t,i))}};function Hm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function D_(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=gn(e)?ns:Qt.current,i=e.contextTypes,s=(i=i!=null)?go(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function j0(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},tp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=gn(e)?ns:Qt.current,r.context=go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(X0(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Iu.enqueueReplaceState(r,r.state,null),qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",i=e;do n+=fx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Sf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $0(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function I_(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qc||(Qc=!0,id=i),$0(t,e)},n}function N_(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$0(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$0(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Jy.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var ky=qi.ReactCurrentOwner,pn=!1;function nn(t,e,n,i){e.child=t===null?c_(e,null,n,i):_o(e,t.child,n,i)}function jm(t,e,n,i,r){n=n.render;var s=e.ref;return lo(e,r),i=op(t,e,n,i,s,r),n=ap(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(_t&&n&&qh(e),e.flags|=1,nn(t,e,i,r),e.child)}function $m(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,U_(t,e,s,i,r)):(t=Mc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function U_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return q0(t,e,n,i,r)}function F_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Js,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Js,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Js,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Js,wn),wn|=i;return nn(t,e,r,n),e.child}function O_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function q0(t,e,n,i,r){var s=gn(n)?ns:Qt.current;return s=go(e,s),lo(e,r),n=op(t,e,n,i,s,r),i=ap(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(_t&&i&&qh(e),e.flags|=1,nn(t,e,n,r),e.child)}function qm(t,e,n,i,r){if(gn(n)){var s=!0;Gc(e)}else s=!1;if(lo(e,r),e.stateNode===null)xc(t,e),D_(e,n,i),j0(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=gn(n)?ns:Qt.current,c=go(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Vm(e,o,i,c),or=!1;var f=e.memoizedState;o.state=f,qc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||mn.current||or?(typeof u=="function"&&(X0(e,n,u,i),l=e.memoizedState),(a=or||Hm(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,f_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=gn(n)?ns:Qt.current,l=go(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Vm(e,o,i,l),or=!1,f=e.memoizedState,o.state=f,qc(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||mn.current||or?(typeof p=="function"&&(X0(e,n,p,i),m=e.memoizedState),(c=or||Hm(e,n,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Y0(t,e,n,i,s,r)}function Y0(t,e,n,i,r,s){O_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Im(e,n,!1),Wi(t,e,s);i=e.stateNode,ky.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&Im(e,n,!0),e.child}function z_(t){var e=t.stateNode;e.pendingContext?Dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dm(t,e.context,!1),np(t,e.containerInfo)}function Ym(t,e,n,i,r){return vo(),Kh(r),e.flags|=256,nn(t,e,n,i),e.child}var K0={dehydrated:null,treeContext:null,retryLane:0};function Z0(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return G0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fu(o,i,0,null),t=es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Z0(n),e.memoizedState=K0,t):up(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return By(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=es(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Z0(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=K0,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function up(t,e){return e=Fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,i){return i!==null&&Kh(i),_o(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function By(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Sf(Error(re(422))),El(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fu({mode:"visible",children:i.children},r,0,null),s=es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=Z0(o),e.memoizedState=K0,s);if(!(e.mode&1))return El(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Sf(s,i,void 0),El(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),ui(i,t,r,-1))}return gp(),i=Sf(Error(re(421))),El(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Qy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=gr(r.nextSibling),Rn=e,_t=!0,ii=null,t!==null&&(Un[Fn++]=Ni,Un[Fn++]=Ui,Un[Fn++]=is,Ni=t.id,Ui=t.overflow,is=e),e=up(e,i.children),e.flags|=4096,e)}function Km(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),W0(t.return,e,n)}function Mf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function B_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,n,e);else if(t.tag===19)Km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mf(e,!0,n,null,s);break;case"together":Mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hy(t,e,n){switch(e.tag){case 3:z_(e),vo();break;case 5:d_(e);break;case 1:gn(e.type)&&Gc(e);break;case 4:np(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(dt(yt,yt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return B_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return Wi(t,e,n)}var H_,J0,V_,G_;H_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};J0=function(){};V_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(Si.current);var s=null;switch(n){case"input":r=y0(t,r),i=y0(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=E0(t,r),i=E0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hc)}T0(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};G_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xo(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Vy(t,e,n){var i=e.pendingProps;switch(Yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return gn(e.type)&&Vc(),$t(e),null;case 3:return i=e.stateNode,xo(),gt(mn),gt(Qt),rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(od(ii),ii=null))),J0(t,e),$t(e),null;case 5:ip(e);var r=qr(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)V_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return $t(e),null}if(t=qr(Si.current),Sl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)pt(aa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":sm(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":am(i,s),pt("invalid",i)}T0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,t),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":dl(i),om(i,s,!0);break;case"textarea":dl(i),lm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[za]=i,H_(t,e,!1,!1),e.stateNode=t;e:{switch(o=A0(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)pt(aa[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":sm(t,i),r=y0(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":am(t,i),r=E0(t,i),pt("invalid",t);break;default:r=i}T0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_v(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Nh(t,s,l,o))}switch(n){case"input":dl(t),om(t,i,!1);break;case"textarea":dl(t),lm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ro(t,!!i.multiple,s,!1):i.defaultValue!=null&&ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)G_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=qr(Ba.current),qr(Si.current),Sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:yl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return $t(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Tn!==null&&e.mode&1&&!(e.flags&128))a_(),vo(),e.flags|=98560,s=!1;else if(s=Sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[gi]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else ii!==null&&(od(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):gp())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return xo(),J0(t,e),t===null&&Fa(e.stateNode.containerInfo),$t(e),null;case 10:return Qh(e.type._context),$t(e),null;case 17:return gn(e.type)&&Vc(),$t(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xo(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yc(t),o!==null){for(e.flags|=128,Xo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>So&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return $t(e),null}else 2*Rt()-s.renderingStartTime>So&&n!==1073741824&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Gy(t,e){switch(Yh(e),e.tag){case 1:return gn(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),gt(mn),gt(Qt),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ip(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return xo(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var wl=!1,Zt=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Q0(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Zm=!1;function Xy(t,e){if(F0=zc,t=qv(),$h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(O0={focusedElem:t,selectionRange:n},zc=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:ti(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return m=Zm,Zm=!1,m}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Q0(e,n,s)}r=r.next}while(r!==i)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[za],delete e[B0],delete e[Ry],delete e[Cy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X_(t){return t.tag===5||t.tag===3||t.tag===4}function Jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hc));else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var Vt=null,ni=!1;function Ki(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:Zt||Zs(n,e);case 6:var i=Vt,r=ni;Vt=null,Ki(t,e,n),Vt=i,ni=r,Vt!==null&&(ni?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ni?(t=Vt,n=n.stateNode,t.nodeType===8?mf(t.parentNode,n):t.nodeType===1&&mf(t,n),Ia(t)):mf(Vt,n.stateNode));break;case 4:i=Vt,r=ni,Vt=n.stateNode.containerInfo,ni=!0,Ki(t,e,n),Vt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Q0(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!Zt&&(Zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Ki(t,e,n),Zt=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function Qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wy),e.forEach(function(i){var r=eS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ni=!1;break e;case 3:Vt=a.stateNode.containerInfo,ni=!0;break e;case 4:Vt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Vt===null)throw Error(re(160));j_(s,o,r),Vt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$_(e,t),e=e.sibling}function $_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),di(t),i&4){try{Sa(3,t,t.return),Nu(3,t)}catch(x){Tt(t,t.return,x)}try{Sa(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Kn(e,t),di(t),i&512&&n!==null&&Zs(n,n.return);break;case 5:if(Kn(e,t),di(t),i&512&&n!==null&&Zs(n,n.return),t.flags&32){var r=t.stateNode;try{Pa(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mv(r,s),A0(a,o);var c=A0(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?yv(r,d):u==="dangerouslySetInnerHTML"?_v(r,d):u==="children"?Pa(r,d):Nh(r,u,d,c)}switch(a){case"input":S0(r,s);break;case"textarea":gv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ro(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ro(r,!!s.multiple,s.defaultValue,!0):ro(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Kn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Kn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Kn(e,t),di(t);break;case 13:Kn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hp=Rt())),i&4&&Qm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||u,Kn(e,t),Zt=c):Kn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ge=t,u=t.child;u!==null;){for(d=ge=u;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:Sa(4,f,f.return);break;case 1:Zs(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:Zs(f,f.return);break;case 22:if(f.memoizedState!==null){tg(d);continue}}p!==null?(p.return=f,ge=p):tg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xv("display",o))}catch(x){Tt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),di(t),i&4&&Qm(t);break;case 21:break;default:Kn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Pa(r,""),i.flags&=-33);var s=Jm(t);nd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jm(t);td(t,a,o);break;default:throw Error(re(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jy(t,e,n){ge=t,q_(t)}function q_(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=wl;var c=Zt;if(wl=o,(Zt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?ng(r):l!==null?(l.return=o,ge=l):ng(r);for(;s!==null;)ge=s,q_(s),s=s.sibling;ge=r,wl=a,Zt=c}eg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):eg(t)}}function eg(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Zt||e.flags&512&&ed(e)}catch(f){Tt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function tg(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ng(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{ed(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{ed(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var $y=Math.ceil,Jc=qi.ReactCurrentDispatcher,fp=qi.ReactCurrentOwner,Wn=qi.ReactCurrentBatchConfig,Je=0,Bt=null,Lt=null,Wt=0,wn=0,Js=Cr(0),Nt=0,Wa=null,ss=0,Uu=0,dp=0,Ma=null,hn=null,hp=0,So=1/0,Li=null,Qc=!1,id=null,_r=null,Tl=!1,fr=null,eu=0,Ea=0,rd=null,yc=-1,Sc=0;function on(){return Je&6?Rt():yc!==-1?yc:yc=Rt()}function xr(t){return t.mode&1?Je&2&&Wt!==0?Wt&-Wt:by.transition!==null?(Sc===0&&(Sc=Dv()),Sc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function ui(t,e,n,i){if(50<Ea)throw Ea=0,rd=null,Error(re(185));el(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(Uu|=n),Nt===4&&lr(t,Wt)),vn(t,i),n===1&&Je===0&&!(e.mode&1)&&(So=Rt()+500,Lu&&Pr()))}function vn(t,e){var n=t.callbackNode;bx(t,e);var i=Oc(t,t===Bt?Wt:0);if(i===0)n!==null&&fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fm(n),e===1)t.tag===0?Py(ig.bind(null,t)):r_(ig.bind(null,t)),Ty(function(){!(Je&6)&&Pr()}),n=null;else{switch(Iv(i)){case 1:n=kh;break;case 4:n=bv;break;case 16:n=Fc;break;case 536870912:n=Lv;break;default:n=Fc}n=n2(n,Y_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Y_(t,e){if(yc=-1,Sc=0,Je&6)throw Error(re(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var i=Oc(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tu(t,i);else{e=i;var r=Je;Je|=2;var s=Z_();(Bt!==t||Wt!==e)&&(Li=null,So=Rt()+500,Qr(t,e));do try{Ky();break}catch(a){K_(t,a)}while(!0);Jh(),Jc.current=s,Je=r,Lt!==null?e=0:(Bt=null,Wt=0,e=Nt)}if(e!==0){if(e===2&&(r=L0(t),r!==0&&(i=r,e=sd(t,r))),e===1)throw n=Wa,Qr(t,0),lr(t,i),vn(t,Rt()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!qy(r)&&(e=tu(t,i),e===2&&(s=L0(t),s!==0&&(i=s,e=sd(t,s))),e===1))throw n=Wa,Qr(t,0),lr(t,i),vn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Br(t,hn,Li);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=hp+500-Rt(),10<e)){if(Oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=k0(Br.bind(null,t,hn,Li),e);break}Br(t,hn,Li);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$y(i/1960))-i,10<i){t.timeoutHandle=k0(Br.bind(null,t,hn,Li),i);break}Br(t,hn,Li);break;case 5:Br(t,hn,Li);break;default:throw Error(re(329))}}}return vn(t,Rt()),t.callbackNode===n?Y_.bind(null,t):null}function sd(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=tu(t,e),t!==2&&(e=hn,hn=n,e!==null&&od(e)),t}function od(t){hn===null?hn=t:hn.push.apply(hn,t)}function qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~dp,e&=~Uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function ig(t){if(Je&6)throw Error(re(327));co();var e=Oc(t,0);if(!(e&1))return vn(t,Rt()),null;var n=tu(t,e);if(t.tag!==0&&n===2){var i=L0(t);i!==0&&(e=i,n=sd(t,i))}if(n===1)throw n=Wa,Qr(t,0),lr(t,e),vn(t,Rt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,hn,Li),vn(t,Rt()),null}function pp(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(So=Rt()+500,Lu&&Pr())}}function os(t){fr!==null&&fr.tag===0&&!(Je&6)&&co();var e=Je;Je|=1;var n=Wn.transition,i=lt;try{if(Wn.transition=null,lt=1,t)return t()}finally{lt=i,Wn.transition=n,Je=e,!(Je&6)&&Pr()}}function mp(){wn=Js.current,gt(Js)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wy(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vc();break;case 3:xo(),gt(mn),gt(Qt),rp();break;case 5:ip(i);break;case 4:xo();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:Qh(i.type._context);break;case 22:case 23:mp()}n=n.return}if(Bt=t,Lt=t=yr(t.current,null),Wt=wn=e,Nt=0,Wa=null,dp=Uu=ss=0,hn=Ma=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}$r=null}return t}function K_(t,e){do{var n=Lt;try{if(Jh(),vc.current=Zc,Kc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kc=!1}if(rs=0,zt=It=Mt=null,ya=!1,Ha=0,fp.current=null,n===null||n.return===null){Nt=1,Wa=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Wm(o);if(p!==null){p.flags&=-257,Xm(p,o,a,s,e),p.mode&1&&Gm(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){Gm(s,c,e),gp();break e}l=Error(re(426))}}else if(_t&&a.mode&1){var g=Wm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Xm(g,o,a,s,e),Kh(yo(l,a));break e}}s=l=yo(l,a),Nt!==4&&(Nt=2),Ma===null?Ma=[s]:Ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=I_(s,l,e);Om(s,h);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(_r===null||!_r.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=N_(s,a,e);Om(s,S);break e}}s=s.return}while(s!==null)}Q_(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Z_(){var t=Jc.current;return Jc.current=Zc,t===null?Zc:t}function gp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Bt===null||!(ss&268435455)&&!(Uu&268435455)||lr(Bt,Wt)}function tu(t,e){var n=Je;Je|=2;var i=Z_();(Bt!==t||Wt!==e)&&(Li=null,Qr(t,e));do try{Yy();break}catch(r){K_(t,r)}while(!0);if(Jh(),Je=n,Jc.current=i,Lt!==null)throw Error(re(261));return Bt=null,Wt=0,Nt}function Yy(){for(;Lt!==null;)J_(Lt)}function Ky(){for(;Lt!==null&&!Sx();)J_(Lt)}function J_(t){var e=t2(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Q_(t):Lt=e,fp.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Lt=null;return}}else if(n=Vy(n,e,wn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Br(t,e,n){var i=lt,r=Wn.transition;try{Wn.transition=null,lt=1,Zy(t,e,n,i)}finally{Wn.transition=r,lt=i}return null}function Zy(t,e,n,i){do co();while(fr!==null);if(Je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lx(t,s),t===Bt&&(Lt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tl||(Tl=!0,n2(Fc,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=lt;lt=1;var a=Je;Je|=4,fp.current=null,Xy(t,n),$_(n,t),vy(O0),zc=!!F0,O0=F0=null,t.current=n,jy(n),Mx(),Je=a,lt=o,Wn.transition=s}else t.current=n;if(Tl&&(Tl=!1,fr=t,eu=r),s=t.pendingLanes,s===0&&(_r=null),Tx(n.stateNode),vn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qc)throw Qc=!1,t=id,id=null,t;return eu&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===rd?Ea++:(Ea=0,rd=t):Ea=0,Pr(),null}function co(){if(fr!==null){var t=Iv(eu),e=Wn.transition,n=lt;try{if(Wn.transition=null,lt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,eu=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:Sa(8,u,s)}var d=u.child;if(d!==null)d.return=u,ge=d;else for(;ge!==null;){u=ge;var f=u.sibling,p=u.return;if(W_(u),u===c){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var _=t.current;for(ge=_;ge!==null;){o=ge;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ge=v;else e:for(o=_;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nu(9,a)}}catch(P){Tt(a,a.return,P)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if(Je=r,Pr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Au,t)}catch{}i=!0}return i}finally{lt=n,Wn.transition=e}}return!1}function rg(t,e,n){e=yo(n,e),e=I_(t,e,1),t=vr(t,e,1),e=on(),t!==null&&(el(t,1,e),vn(t,e))}function Tt(t,e,n){if(t.tag===3)rg(t,t,n);else for(;e!==null;){if(e.tag===3){rg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=yo(n,t),t=N_(e,t,1),e=vr(e,t,1),t=on(),e!==null&&(el(e,1,t),vn(e,t));break}}e=e.return}}function Jy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Nt===4||Nt===3&&(Wt&130023424)===Wt&&500>Rt()-hp?Qr(t,0):dp|=n),vn(t,e)}function e2(t,e){e===0&&(t.mode&1?(e=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):e=1);var n=on();t=Gi(t,e),t!==null&&(el(t,e,n),vn(t,n))}function Qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e2(t,n)}function eS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),e2(t,n)}var t2;t2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,Hy(t,e,n);pn=!!(t.flags&131072)}else pn=!1,_t&&e.flags&1048576&&s_(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xc(t,e),t=e.pendingProps;var r=go(e,Qt.current);lo(e,n),r=op(null,e,i,t,r,n);var s=ap();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tp(e),r.updater=Iu,e.stateNode=r,r._reactInternals=e,j0(e,i,t,n),e=Y0(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&qh(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nS(i),t=ti(i,t),r){case 0:e=q0(null,e,i,t,n);break e;case 1:e=qm(null,e,i,t,n);break e;case 11:e=jm(null,e,i,t,n);break e;case 14:e=$m(null,e,i,ti(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),q0(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),qm(t,e,i,r,n);case 3:e:{if(z_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,f_(t,e),qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=yo(Error(re(423)),e),e=Ym(t,e,i,n,r);break e}else if(i!==r){r=yo(Error(re(424)),e),e=Ym(t,e,i,n,r);break e}else for(Tn=gr(e.stateNode.containerInfo.firstChild),Rn=e,_t=!0,ii=null,n=c_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=Wi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return d_(e),t===null&&G0(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,z0(i,r)?o=null:s!==null&&z0(i,s)&&(e.flags|=32),O_(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&G0(e),null;case 13:return k_(t,e,n);case 4:return np(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_o(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),jm(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(jc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!mn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),W0(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),W0(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,lo(e,n),r=jn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),$m(t,e,i,r,n);case 15:return U_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),xc(t,e),e.tag=1,gn(i)?(t=!0,Gc(e)):t=!1,lo(e,n),D_(e,i,r),j0(e,i,r,n),Y0(null,e,i,!0,t,n);case 19:return B_(t,e,n);case 22:return F_(t,e,n)}throw Error(re(156,e.tag))};function n2(t,e){return Pv(t,e)}function tS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new tS(t,e,n,i)}function vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nS(t){if(typeof t=="function")return vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fh)return 11;if(t===Oh)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return es(n.children,r,s,e);case Uh:o=8,r|=8;break;case g0:return t=Bn(12,n,e,r|2),t.elementType=g0,t.lanes=s,t;case v0:return t=Bn(13,n,e,r),t.elementType=v0,t.lanes=s,t;case _0:return t=Bn(19,n,e,r),t.elementType=_0,t.lanes=s,t;case dv:return Fu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uv:o=10;break e;case fv:o=9;break e;case Fh:o=11;break e;case Oh:o=14;break e;case sr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function es(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Fu(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=dv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ef(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function wf(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rf(0),this.expirationTimes=rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _p(t,e,n,i,r,s,o,a,l){return t=new iS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(s),t}function rS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function i2(t){if(!t)return wr;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(gn(n))return i_(t,n,e)}return e}function r2(t,e,n,i,r,s,o,a,l){return t=_p(n,i,!0,t,r,s,o,a,l),t.context=i2(null),n=t.current,i=on(),r=xr(n),s=ki(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,el(t,r,i),vn(t,i),t}function Ou(t,e,n,i){var r=e.current,s=on(),o=xr(r);return n=i2(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,o),t!==null&&(ui(t,r,o,s),gc(t,r,o)),o}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xp(t,e){sg(t,e),(t=t.alternate)&&sg(t,e)}function sS(){return null}var s2=typeof reportError=="function"?reportError:function(t){console.error(t)};function yp(t){this._internalRoot=t}zu.prototype.render=yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Ou(t,e,null,null)};zu.prototype.unmount=yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Ou(null,t,null,null)}),e[Vi]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&zv(t)}};function Sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function og(){}function oS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nu(o);s.call(c)}}var o=r2(e,i,t,0,null,!1,!1,"",og);return t._reactRootContainer=o,t[Vi]=o.current,Fa(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nu(l);a.call(c)}}var l=_p(t,0,!1,null,null,!1,!1,"",og);return t._reactRootContainer=l,t[Vi]=l.current,Fa(t.nodeType===8?t.parentNode:t),os(function(){Ou(e,l,n,i)}),l}function Bu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nu(o);a.call(l)}}Ou(e,o,t,r)}else o=oS(n,e,t,r,i);return nu(o)}Nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Bh(e,n|1),vn(e,Rt()),!(Je&6)&&(So=Rt()+500,Pr()))}break;case 13:os(function(){var i=Gi(t,1);if(i!==null){var r=on();ui(i,t,1,r)}}),xp(t,1)}};Hh=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=on();ui(e,t,134217728,n)}xp(t,134217728)}};Uv=function(t){if(t.tag===13){var e=xr(t),n=Gi(t,e);if(n!==null){var i=on();ui(n,t,e,i)}xp(t,e)}};Fv=function(){return lt};Ov=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};C0=function(t,e,n){switch(e){case"input":if(S0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=bu(i);if(!r)throw Error(re(90));pv(i),S0(i,r)}}}break;case"textarea":gv(t,n);break;case"select":e=n.value,e!=null&&ro(t,!!n.multiple,e,!1)}};Ev=pp;wv=os;var aS={usingClientEntryPoint:!1,Events:[nl,js,bu,Sv,Mv,pp]},jo={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lS={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rv(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Au=Al.inject(lS),yi=Al}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(re(200));return rS(t,e,null,n)};bn.createRoot=function(t,e){if(!Sp(t))throw Error(re(299));var n=!1,i="",r=s2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_p(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,Fa(t.nodeType===8?t.parentNode:t),new yp(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Rv(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return os(t)};bn.hydrate=function(t,e,n){if(!ku(e))throw Error(re(200));return Bu(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Sp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=s2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r2(e,null,t,1,n??null,r,!1,s,o),t[Vi]=e.current,Fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zu(e)};bn.render=function(t,e,n){if(!ku(e))throw Error(re(200));return Bu(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!ku(t))throw Error(re(40));return t._reactRootContainer?(os(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};bn.unstable_batchedUpdates=pp;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ku(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Bu(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function o2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o2)}catch(t){console.error(t)}}o2(),ov.exports=bn;var cS=ov.exports,ag=cS;p0.createRoot=ag.createRoot,p0.hydrateRoot=ag.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="169",uS=0,lg=1,fS=2,a2=1,dS=2,Ci=3,Tr=0,an=1,vi=2,Sr=0,uo=1,cg=2,ug=3,fg=4,hS=5,Gr=100,pS=101,mS=102,gS=103,vS=104,_S=200,xS=201,yS=202,SS=203,ad=204,ld=205,MS=206,ES=207,wS=208,TS=209,AS=210,RS=211,CS=212,PS=213,bS=214,cd=0,ud=1,fd=2,Mo=3,dd=4,hd=5,pd=6,md=7,l2=0,LS=1,DS=2,Mr=0,IS=1,NS=2,US=3,FS=4,OS=5,zS=6,kS=7,c2=300,Eo=301,wo=302,gd=303,vd=304,Hu=306,_d=1e3,Yr=1001,xd=1002,Hn=1003,BS=1004,Rl=1005,ri=1006,Tf=1007,Kr=1008,Xi=1009,u2=1010,f2=1011,Xa=1012,Ep=1013,as=1014,Fi=1015,rl=1016,wp=1017,Tp=1018,To=1020,d2=35902,h2=1021,p2=1022,oi=1023,m2=1024,g2=1025,fo=1026,Ao=1027,v2=1028,Ap=1029,_2=1030,Rp=1031,Cp=1033,Ec=33776,wc=33777,Tc=33778,Ac=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,wd=36196,Td=37492,Ad=37496,Rd=37808,Cd=37809,Pd=37810,bd=37811,Ld=37812,Dd=37813,Id=37814,Nd=37815,Ud=37816,Fd=37817,Od=37818,zd=37819,kd=37820,Bd=37821,Rc=36492,Hd=36494,Vd=36495,x2=36283,Gd=36284,Wd=36285,Xd=36286,HS=3200,VS=3201,GS=0,WS=1,cr="",pi="srgb",br="srgb-linear",Pp="display-p3",Vu="display-p3-linear",iu="linear",mt="srgb",ru="rec709",su="p3",xs=7680,dg=519,XS=512,jS=513,$S=514,y2=515,qS=516,YS=517,KS=518,ZS=519,jd=35044,hg="300 es",Oi=2e3,ou=2001;class Fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pg=1234567;const wa=Math.PI/180,ja=180/Math.PI;function Bi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function bp(t,e){return(t%e+e)%e}function JS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function QS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ta(t,e,n){return(1-n)*t+n*e}function eM(t,e,n,i){return Ta(t,e,1-Math.exp(-n*i))}function tM(t,e=1){return e-Math.abs(bp(t,e*2)-e)}function nM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function iM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function rM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function sM(t,e){return t+Math.random()*(e-t)}function oM(t){return t*(.5-Math.random())}function aM(t){t!==void 0&&(pg=t);let e=pg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lM(t){return t*wa}function cM(t){return t*ja}function uM(t){return(t&t-1)===0&&t!==0}function fM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function dM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const mg={DEG2RAD:wa,RAD2DEG:ja,generateUUID:Bi,clamp:rn,euclideanModulo:bp,mapLinear:JS,inverseLerp:QS,lerp:Ta,damp:eM,pingpong:tM,smoothstep:nM,smootherstep:iM,randInt:rM,randFloat:sM,randFloatSpread:oM,seededRandom:aM,degToRad:lM,radToDeg:cM,isPowerOfTwo:uM,ceilPowerOfTwo:fM,floorPowerOfTwo:dM,setQuaternionFromProperEuler:hM,normalize:at,denormalize:si};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],x=r[0],g=r[3],h=r[6],_=r[1],v=r[4],S=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*g+a*v+l*A,s[6]=o*h+a*S+l*T,s[1]=c*x+u*_+d*P,s[4]=c*g+u*v+d*A,s[7]=c*h+u*S+d*T,s[2]=f*x+p*_+m*P,s[5]=f*g+p*v+m*A,s[8]=f*h+p*S+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Af.makeScale(e,n)),this}rotate(e){return this.premultiply(Af.makeRotation(-e)),this}translate(e,n){return this.premultiply(Af.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Af=new He;function S2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function au(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pM(){const t=au("canvas");return t.style.display="block",t}const gg={};function Cc(t){t in gg||(gg[t]=!0,console.warn(t))}function mM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function gM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vg=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_g=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$o={[br]:{transfer:iu,primaries:ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[pi]:{transfer:mt,primaries:ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Vu]:{transfer:iu,primaries:su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg)},[Pp]:{transfer:mt,primaries:su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg).convertLinearToSRGB()}},_M=new Set([br,Vu]),st={enabled:!0,_workingColorSpace:br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_M.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$o[e].toReference,r=$o[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $o[t].primaries},getTransfer:function(t){return t===cr?iu:$o[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray($o[e].luminanceCoefficients)}};function ho(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ys;class xM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=au("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=au("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ho(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ho(n[i]/255)*255):n[i]=ho(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yM=0;class M2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cf(r[o].image)):s.push(Cf(r[o]))}else s=Cf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SM=0;class ln extends Fo{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Yr,r=Yr,s=ri,o=Kr,a=oi,l=Xi,c=ln.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Bi(),this.name="",this.source=new M2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=c2;ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,P=(h+1)/2,A=(u+f)/4,T=(d+x)/4,R=(m+g)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MM extends Fo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new M2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends MM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class E2 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=m,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==m){let g=1-a;const h=l*f+c*p+u*m+d*x,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,h*_);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}const S=a*_;if(l=l*g+f*S,c=c*g+p*S,u=u*g+m*S,d=d*g+x*S,g===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*p-c*f,e[n+1]=l*m+u*f+c*d-a*p,e[n+2]=c*m+u*p+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pf=new F,xg=new cs;class sl{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Pl.subVectors(this.max,qo),Ss.subVectors(e.a,qo),Ms.subVectors(e.b,qo),Es.subVectors(e.c,qo),Zi.subVectors(Ms,Ss),Ji.subVectors(Es,Ms),Ir.subVectors(Ss,Es);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Ir.z,Ir.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Ir.z,0,-Ir.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Ir.y,Ir.x,0];return!bf(n,Ss,Ms,Es,Pl)||(n=[1,0,0,0,1,0,0,0,1],!bf(n,Ss,Ms,Es,Pl))?!1:(bl.crossVectors(Zi,Ji),n=[bl.x,bl.y,bl.z],bf(n,Ss,Ms,Es,Pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new F,new F,new F,new F,new F,new F,new F,new F],Zn=new F,Cl=new sl,Ss=new F,Ms=new F,Es=new F,Zi=new F,Ji=new F,Ir=new F,qo=new F,Pl=new F,bl=new F,Nr=new F;function bf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),u=i.dot(Nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wM=new sl,Yo=new F,Lf=new F;class ol{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const n=Yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Lf)),this.expandByPoint(Yo.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new F,Df=new F,Ll=new F,Qi=new F,If=new F,Dl=new F,Nf=new F;class Gu{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Df.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Df);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ll),a=Qi.dot(this.direction),l=-Qi.dot(Ll),c=Qi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Df).addScaledVector(Ll,f),p}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){If.subVectors(n,e),Dl.subVectors(i,e),Nf.crossVectors(If,Dl);let o=this.direction.dot(Nf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(Qi,Dl));if(l<0)return null;const c=a*this.direction.dot(If.cross(Qi));if(c<0||l+c>o)return null;const u=-a*Qi.dot(Nf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,m,x,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,x,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,m=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,m=c*u,x=c*d;n[0]=f+x*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,m=c*u,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,m=a*u,x=a*d;n[0]=l*u,n[4]=m*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=x-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+m,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=o*u,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,AM)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),er.crossVectors(i,Mn),er.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),er.crossVectors(i,Mn)),er.normalize(),Il.crossVectors(Mn,er),r[0]=er.x,r[4]=Il.x,r[8]=Mn.x,r[1]=er.y,r[5]=Il.y,r[9]=Mn.y,r[2]=er.z,r[6]=Il.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],x=i[6],g=i[10],h=i[14],_=i[3],v=i[7],S=i[11],P=i[15],A=r[0],T=r[4],R=r[8],z=r[12],y=r[1],M=r[5],W=r[9],k=r[13],$=r[2],D=r[6],O=r[10],Y=r[14],L=r[3],Z=r[7],q=r[11],ne=r[15];return s[0]=o*A+a*y+l*$+c*L,s[4]=o*T+a*M+l*D+c*Z,s[8]=o*R+a*W+l*O+c*q,s[12]=o*z+a*k+l*Y+c*ne,s[1]=u*A+d*y+f*$+p*L,s[5]=u*T+d*M+f*D+p*Z,s[9]=u*R+d*W+f*O+p*q,s[13]=u*z+d*k+f*Y+p*ne,s[2]=m*A+x*y+g*$+h*L,s[6]=m*T+x*M+g*D+h*Z,s[10]=m*R+x*W+g*O+h*q,s[14]=m*z+x*k+g*Y+h*ne,s[3]=_*A+v*y+S*$+P*L,s[7]=_*T+v*M+S*D+P*Z,s[11]=_*R+v*W+S*O+P*q,s[15]=_*z+v*k+S*Y+P*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],x=e[7],g=e[11],h=e[15];return m*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],x=e[13],g=e[14],h=e[15],_=d*g*c-x*f*c+x*l*p-a*g*p-d*l*h+a*f*h,v=m*f*c-u*g*c-m*l*p+o*g*p+u*l*h-o*f*h,S=u*x*c-m*d*c+m*a*p-o*x*p-u*a*h+o*d*h,P=m*d*l-u*x*l-m*a*f+o*x*f+u*a*g-o*d*g,A=n*_+i*v+r*S+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*f*s-d*g*s-x*r*p+i*g*p+d*r*h-i*f*h)*T,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(u*g*s-m*f*s+m*r*p-n*g*p-u*r*h+n*f*h)*T,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*h-n*l*h)*T,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(m*d*s-u*x*s-m*i*p+n*x*p+u*i*h-n*d*h)*T,e[10]=(o*x*s-m*a*s+m*i*c-n*x*c-o*i*h+n*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=P*T,e[13]=(u*x*r-m*d*r+m*i*f-n*x*f-u*i*g+n*d*g)*T,e[14]=(m*a*r-o*x*r-m*i*l+n*x*l+o*i*g-n*a*g)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,m=s*d,x=o*u,g=o*d,h=a*d,_=l*c,v=l*u,S=l*d,P=i.x,A=i.y,T=i.z;return r[0]=(1-(x+h))*P,r[1]=(p+S)*P,r[2]=(m-v)*P,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(g+_)*A,r[7]=0,r[8]=(m+v)*T,r[9]=(g-_)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ws.set(r[0],r[1],r[2]).length();const o=ws.set(r[4],r[5],r[6]).length(),a=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,u=1/o,d=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Oi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,m;if(a===Oi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===ou)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let m,x;if(a===Oi)m=(o+s)*d,x=-2*d;else if(a===ou)m=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ws=new F,Jn=new xt,TM=new F(0,0,0),AM=new F(1,1,1),er=new F,Il=new F,Mn=new F,yg=new xt,Sg=new cs;class ji{constructor(e=0,n=0,i=0,r=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const Mg=new F,Ts=new cs,Ti=new xt,Nl=new F,Ko=new F,CM=new F,PM=new cs,Eg=new F(1,0,0),wg=new F(0,1,0),Tg=new F(0,0,1),Ag={type:"added"},bM={type:"removed"},As={type:"childadded",child:null},Uf={type:"childremoved",child:null};class Jt extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new F,n=new ji,i=new cs,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new He}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Nl.copy(e):Nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ko,Nl,this.up):Ti.lookAt(Nl,Ko,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bM),Uf.child=e,this.dispatchEvent(Uf),Uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,CM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,PM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new F(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new F,Ai=new F,Ff=new F,Ri=new F,Rs=new F,Cs=new F,Rg=new F,Of=new F,zf=new F,kf=new F,Bf=new Ct,Hf=new Ct,Vf=new Ct;class zn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Ai.subVectors(i,n),Ff.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Ai),l=Qn.dot(Ff),c=Ai.dot(Ai),u=Ai.dot(Ff),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Bf.setScalar(0),Hf.setScalar(0),Vf.setScalar(0),Bf.fromBufferAttribute(e,n),Hf.fromBufferAttribute(e,i),Vf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bf,s.x),o.addScaledVector(Hf,s.y),o.addScaledVector(Vf,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Ai.subVectors(e,n),Qn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Rs.subVectors(r,i),Cs.subVectors(s,i),Of.subVectors(e,i);const l=Rs.dot(Of),c=Cs.dot(Of);if(l<=0&&c<=0)return n.copy(i);zf.subVectors(e,r);const u=Rs.dot(zf),d=Cs.dot(zf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Rs,o);kf.subVectors(e,s);const p=Rs.dot(kf),m=Cs.dot(kf);if(m>=0&&p<=m)return n.copy(s);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Cs,a);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return Rg.subVectors(s,r),a=(d-u)/(d-u+(p-m)),n.copy(r).addScaledVector(Rg,a);const h=1/(g+x+f);return o=x*h,a=f*h,n.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Gf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=bp(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Gf(o,s,e+1/3),this.g=Gf(o,s,e),this.b=Gf(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const i=w2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}copyLinearToSRGB(e){return this.r=Rf(e.r),this.g=Rf(e.g),this.b=Rf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return st.fromWorkingColorSpace(Yt.copy(this),e),Math.round(rn(Yt.r*255,0,255))*65536+Math.round(rn(Yt.g*255,0,255))*256+Math.round(rn(Yt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=pi){st.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(Ul);const i=Ta(tr.h,Ul.h,n),r=Ta(tr.s,Ul.s,n),s=Ta(tr.l,Ul.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new We;We.NAMES=w2;let LM=0;class gs extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=uo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ad&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lu extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=l2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new F,Fl=new Xe;class sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fl.fromBufferAttribute(this,n),Fl.applyMatrix3(e),this.setXY(n,Fl.x,Fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=si(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=si(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=si(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=si(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jd&&(e.usage=this.usage),e}}class T2 extends sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A2 extends sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _n extends sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DM=0;const In=new xt,Wf=new Jt,Ps=new F,En=new sl,Zo=new sl,Ot=new F;class kt extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S2(e)?A2:T2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Wf.lookAt(e),Wf.updateMatrix(),this.applyMatrix4(Wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(En.min,Zo.min),En.expandByPoint(Ot),Ot.addVectors(En.max,Zo.max),En.expandByPoint(Ot)):(En.expandByPoint(Zo.min),En.expandByPoint(Zo.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Ot.add(Ps)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new F,l[R]=new F;const c=new F,u=new F,d=new F,f=new Xe,p=new Xe,m=new Xe,x=new F,g=new F;function h(R,z,y){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,z),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,z),m.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),m.sub(f);const M=1/(p.x*m.y-m.x*p.y);isFinite(M)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(M),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(M),a[R].add(x),a[z].add(x),a[y].add(x),l[R].add(g),l[z].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,z=_.length;R<z;++R){const y=_[R],M=y.start,W=y.count;for(let k=M,$=M+W;k<$;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new F,S=new F,P=new F,A=new F;function T(R){P.fromBufferAttribute(r,R),A.copy(P);const z=a[R];v.copy(z),v.sub(P.multiplyScalar(P.dot(z))).normalize(),S.crossVectors(A,z);const M=S.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,M)}for(let R=0,z=_.length;R<z;++R){const y=_[R],M=y.start,W=y.count;for(let k=M,$=M+W;k<$;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[m++]=c[p++]}return new sn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cg=new xt,Ur=new Gu,Ol=new ol,Pg=new F,zl=new F,kl=new F,Bl=new F,Xf=new F,Hl=new F,bg=new F,Vl=new F;class ai extends Jt{constructor(e=new kt,n=new lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Xf.fromBufferAttribute(d,e),o?Hl.addScaledVector(Xf,u):Hl.addScaledVector(Xf.sub(n),u))}n.add(Hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(Ol.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Ol,Pg)===null||Ur.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],h=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,P=v;S<P;S+=3){const A=a.getX(S),T=a.getX(S+1),R=a.getX(S+2);r=Gl(this,h,e,i,c,u,d,A,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const _=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Gl(this,o,e,i,c,u,d,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],h=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,P=v;S<P;S+=3){const A=S,T=S+1,R=S+2;r=Gl(this,h,e,i,c,u,d,A,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const _=g,v=g+1,S=g+2;r=Gl(this,o,e,i,c,u,d,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function IM(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Vl);return c<n.near||c>n.far?null:{distance:c,point:Vl.clone(),object:t}}function Gl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,zl),t.getVertexPosition(l,kl),t.getVertexPosition(c,Bl);const u=IM(t,e,n,i,zl,kl,Bl,bg);if(u){const d=new F;zn.getBarycoord(bg,zl,kl,Bl,d),r&&(u.uv=zn.getInterpolatedAttribute(r,a,l,c,d,new Xe)),s&&(u.uv1=zn.getInterpolatedAttribute(s,a,l,c,d,new Xe)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};zn.getNormal(zl,kl,Bl,f.normal),u.face=f,u.barycoord=d}return u}class al extends kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function m(x,g,h,_,v,S,P,A,T,R,z){const y=S/T,M=P/R,W=S/2,k=P/2,$=A/2,D=T+1,O=R+1;let Y=0,L=0;const Z=new F;for(let q=0;q<O;q++){const ne=q*M-k;for(let _e=0;_e<D;_e++){const be=_e*y-W;Z[x]=be*_,Z[g]=ne*v,Z[h]=$,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[h]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(_e/T),d.push(1-q/R),Y+=1}}for(let q=0;q<R;q++)for(let ne=0;ne<T;ne++){const _e=f+ne+D*q,be=f+ne+D*(q+1),B=f+(ne+1)+D*(q+1),J=f+(ne+1)+D*q;l.push(_e,be,J),l.push(be,B,J),L+=6}a.addGroup(p,L,z),p+=L,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Ro(t[n]);for(const r in i)e[r]=i[r]}return e}function NM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function R2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const UM={clone:Ro,merge:tn};var FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=NM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class C2 extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new F,Lg=new Xe,Dg=new Xe;class On extends C2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,Lg,Dg),n.subVectors(Dg,Lg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ls=1;class zM extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(bs,Ls,e,n);r.layers=this.layers,this.add(r);const s=new On(bs,Ls,e,n);s.layers=this.layers,this.add(s);const o=new On(bs,Ls,e,n);o.layers=this.layers,this.add(o);const a=new On(bs,Ls,e,n);a.layers=this.layers,this.add(a);const l=new On(bs,Ls,e,n);l.layers=this.layers,this.add(l);const c=new On(bs,Ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class P2 extends ln{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Eo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kM extends ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new P2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new al(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Sr});s.uniforms.tEquirect.value=n;const o=new ai(r,s),a=n.minFilter;return n.minFilter===Kr&&(n.minFilter=ri),new zM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const jf=new F,BM=new F,HM=new He;class Hr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jf.subVectors(i,n).cross(BM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HM.getNormalMatrix(e),r=this.coplanarPoint(jf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new ol,Wl=new F;class b2{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,o=new Hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],m=r[9],x=r[10],g=r[11],h=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-p,S-h).normalize(),i[1].setComponents(l+s,f+c,g+p,S+h).normalize(),i[2].setComponents(l+o,f+u,g+m,S+_).normalize(),i[3].setComponents(l-o,f-u,g-m,S-_).normalize(),i[4].setComponents(l-a,f-d,g-x,S-v).normalize(),n===Oi)i[5].setComponents(l+a,f+d,g+x,S+v).normalize();else if(n===ou)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wl.x=r.normal.x>0?e.max.x:e.min.x,Wl.y=r.normal.y>0?e.max.y:e.min.y,Wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function L2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function VM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Wu extends kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],m=[],x=[],g=[];for(let h=0;h<u;h++){const _=h*f-o;for(let v=0;v<c;v++){const S=v*d-s;m.push(S,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+c*h,S=_+c*(h+1),P=_+1+c*(h+1),A=_+1+c*h;p.push(v,S,A),p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _n(m,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.width,e.height,e.widthSegments,e.heightSegments)}}var GM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YM=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
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
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nE=`#ifdef USE_IRIDESCENCE
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
#endif`,iE=`#ifdef USE_BUMPMAP
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
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dE=`#define PI 3.141592653589793
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
} // validated`,hE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pE=`vec3 transformedNormal = objectNormal;
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
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`
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
}`,SE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bE=`#ifdef USE_GRADIENTMAP
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
}`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NE=`uniform bool receiveShadow;
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
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,FE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BE=`PhysicalMaterial material;
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
#endif`,HE=`struct PhysicalMaterial {
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
}`,VE=`
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
#endif`,GE=`#if defined( RE_IndirectDiffuse )
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JE=`#if defined( USE_POINTS_UV )
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
#endif`,QE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r4=`#ifdef USE_MORPHTARGETS
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
#endif`,s4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f4=`#ifdef USE_NORMALMAP
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
#endif`,d4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R4=`float getShadowMask() {
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
}`,C4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P4=`#ifdef USE_SKINNING
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
#endif`,b4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L4=`#ifdef USE_SKINNING
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
#endif`,D4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F4=`#ifdef USE_TRANSMISSION
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
#endif`,O4=`#ifdef USE_TRANSMISSION
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
#endif`,z4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G4=`uniform sampler2D t2D;
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
}`,W4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q4=`#include <common>
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
}`,Y4=`#if DEPTH_PACKING == 3200
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
}`,K4=`#define DISTANCE
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
}`,Z4=`#define DISTANCE
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
}`,J4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`uniform float scale;
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#include <common>
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
}`,iw=`uniform vec3 diffuse;
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
}`,rw=`#define LAMBERT
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
}`,sw=`#define LAMBERT
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
}`,ow=`#define MATCAP
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
}`,aw=`#define MATCAP
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
}`,lw=`#define NORMAL
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
}`,cw=`#define NORMAL
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
}`,uw=`#define PHONG
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
}`,fw=`#define PHONG
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
}`,dw=`#define STANDARD
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
}`,hw=`#define STANDARD
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
}`,pw=`#define TOON
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
}`,mw=`#define TOON
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
}`,gw=`uniform float size;
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
}`,vw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,xw=`uniform vec3 color;
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
}`,yw=`uniform float rotation;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:GM,alphahash_pars_fragment:WM,alphamap_fragment:XM,alphamap_pars_fragment:jM,alphatest_fragment:$M,alphatest_pars_fragment:qM,aomap_fragment:YM,aomap_pars_fragment:KM,batching_pars_vertex:ZM,batching_vertex:JM,begin_vertex:QM,beginnormal_vertex:eE,bsdfs:tE,iridescence_fragment:nE,bumpmap_pars_fragment:iE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:sE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:aE,color_fragment:lE,color_pars_fragment:cE,color_pars_vertex:uE,color_vertex:fE,common:dE,cube_uv_reflection_fragment:hE,defaultnormal_vertex:pE,displacementmap_pars_vertex:mE,displacementmap_vertex:gE,emissivemap_fragment:vE,emissivemap_pars_fragment:_E,colorspace_fragment:xE,colorspace_pars_fragment:yE,envmap_fragment:SE,envmap_common_pars_fragment:ME,envmap_pars_fragment:EE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:UE,envmap_vertex:TE,fog_vertex:AE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:PE,gradientmap_pars_fragment:bE,lightmap_pars_fragment:LE,lights_lambert_fragment:DE,lights_lambert_pars_fragment:IE,lights_pars_begin:NE,lights_toon_fragment:FE,lights_toon_pars_fragment:OE,lights_phong_fragment:zE,lights_phong_pars_fragment:kE,lights_physical_fragment:BE,lights_physical_pars_fragment:HE,lights_fragment_begin:VE,lights_fragment_maps:GE,lights_fragment_end:WE,logdepthbuf_fragment:XE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:qE,map_fragment:YE,map_pars_fragment:KE,map_particle_fragment:ZE,map_particle_pars_fragment:JE,metalnessmap_fragment:QE,metalnessmap_pars_fragment:e4,morphinstance_vertex:t4,morphcolor_vertex:n4,morphnormal_vertex:i4,morphtarget_pars_vertex:r4,morphtarget_vertex:s4,normal_fragment_begin:o4,normal_fragment_maps:a4,normal_pars_fragment:l4,normal_pars_vertex:c4,normal_vertex:u4,normalmap_pars_fragment:f4,clearcoat_normal_fragment_begin:d4,clearcoat_normal_fragment_maps:h4,clearcoat_pars_fragment:p4,iridescence_pars_fragment:m4,opaque_fragment:g4,packing:v4,premultiplied_alpha_fragment:_4,project_vertex:x4,dithering_fragment:y4,dithering_pars_fragment:S4,roughnessmap_fragment:M4,roughnessmap_pars_fragment:E4,shadowmap_pars_fragment:w4,shadowmap_pars_vertex:T4,shadowmap_vertex:A4,shadowmask_pars_fragment:R4,skinbase_vertex:C4,skinning_pars_vertex:P4,skinning_vertex:b4,skinnormal_vertex:L4,specularmap_fragment:D4,specularmap_pars_fragment:I4,tonemapping_fragment:N4,tonemapping_pars_fragment:U4,transmission_fragment:F4,transmission_pars_fragment:O4,uv_pars_fragment:z4,uv_pars_vertex:k4,uv_vertex:B4,worldpos_vertex:H4,background_vert:V4,background_frag:G4,backgroundCube_vert:W4,backgroundCube_frag:X4,cube_vert:j4,cube_frag:$4,depth_vert:q4,depth_frag:Y4,distanceRGBA_vert:K4,distanceRGBA_frag:Z4,equirect_vert:J4,equirect_frag:Q4,linedashed_vert:ew,linedashed_frag:tw,meshbasic_vert:nw,meshbasic_frag:iw,meshlambert_vert:rw,meshlambert_frag:sw,meshmatcap_vert:ow,meshmatcap_frag:aw,meshnormal_vert:lw,meshnormal_frag:cw,meshphong_vert:uw,meshphong_frag:fw,meshphysical_vert:dw,meshphysical_frag:hw,meshtoon_vert:pw,meshtoon_frag:mw,points_vert:gw,points_frag:vw,shadow_vert:_w,shadow_frag:xw,sprite_vert:yw,sprite_frag:Sw},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},mi={basic:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:tn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:tn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:tn([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:tn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:tn([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:tn([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:tn([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:tn([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};mi.physical={uniforms:tn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Xl={r:0,b:0,g:0},Or=new ji,Mw=new xt;function Ew(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=m(_);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===Hu)?(u===void 0&&(u=new ai(new al(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ro(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(v.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(Or)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ai(new Wu(2,2),new $i({name:"BackgroundMaterial",uniforms:Ro(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,v){_.getRGB(Xl,R2(t)),i.buffers.color.setClear(Xl.r,Xl.g,Xl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:g}}function ww(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,M,W,k,$){let D=!1;const O=d(k,W,M);s!==O&&(s=O,c(s.object)),D=p(y,k,W,$),D&&m(y,k,W,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,S(y,M,W,k),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,M,W){const k=W.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let D=$[M.id];D===void 0&&(D={},$[M.id]=D);let O=D[k];return O===void 0&&(O=f(l()),D[k]=O),O}function f(y){const M=[],W=[],k=[];for(let $=0;$<n;$++)M[$]=0,W[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:W,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,M,W,k){const $=s.attributes,D=M.attributes;let O=0;const Y=W.getAttributes();for(const L in Y)if(Y[L].location>=0){const q=$[L];let ne=D[L];if(ne===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),q===void 0||q.attribute!==ne||ne&&q.data!==ne.data)return!0;O++}return s.attributesNum!==O||s.index!==k}function m(y,M,W,k){const $={},D=M.attributes;let O=0;const Y=W.getAttributes();for(const L in Y)if(Y[L].location>=0){let q=D[L];q===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));const ne={};ne.attribute=q,q&&q.data&&(ne.data=q.data),$[L]=ne,O++}s.attributes=$,s.attributesNum=O,s.index=k}function x(){const y=s.newAttributes;for(let M=0,W=y.length;M<W;M++)y[M]=0}function g(y){h(y,0)}function h(y,M){const W=s.newAttributes,k=s.enabledAttributes,$=s.attributeDivisors;W[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),$[y]!==M&&(t.vertexAttribDivisor(y,M),$[y]=M)}function _(){const y=s.newAttributes,M=s.enabledAttributes;for(let W=0,k=M.length;W<k;W++)M[W]!==y[W]&&(t.disableVertexAttribArray(W),M[W]=0)}function v(y,M,W,k,$,D,O){O===!0?t.vertexAttribIPointer(y,M,W,$,D):t.vertexAttribPointer(y,M,W,k,$,D)}function S(y,M,W,k){x();const $=k.attributes,D=W.getAttributes(),O=M.defaultAttributeValues;for(const Y in D){const L=D[Y];if(L.location>=0){let Z=$[Y];if(Z===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const q=Z.normalized,ne=Z.itemSize,_e=e.get(Z);if(_e===void 0)continue;const be=_e.buffer,B=_e.type,J=_e.bytesPerElement,ae=B===t.INT||B===t.UNSIGNED_INT||Z.gpuType===Ep;if(Z.isInterleavedBufferAttribute){const le=Z.data,De=le.stride,V=Z.offset;if(le.isInstancedInterleavedBuffer){for(let ze=0;ze<L.locationSize;ze++)h(L.location+ze,le.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ze=0;ze<L.locationSize;ze++)g(L.location+ze);t.bindBuffer(t.ARRAY_BUFFER,be);for(let ze=0;ze<L.locationSize;ze++)v(L.location+ze,ne/L.locationSize,B,q,De*J,(V+ne/L.locationSize*ze)*J,ae)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)h(L.location+le,Z.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<L.locationSize;le++)g(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,be);for(let le=0;le<L.locationSize;le++)v(L.location+le,ne/L.locationSize,B,q,ne*J,ne/L.locationSize*le*J,ae)}}else if(O!==void 0){const q=O[Y];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(L.location,q);break;case 3:t.vertexAttrib3fv(L.location,q);break;case 4:t.vertexAttrib4fv(L.location,q);break;default:t.vertexAttrib1fv(L.location,q)}}}}_()}function P(){R();for(const y in i){const M=i[y];for(const W in M){const k=M[W];for(const $ in k)u(k[$].object),delete k[$];delete M[W]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const W in M){const k=M[W];for(const $ in k)u(k[$].object),delete k[$];delete M[W]}delete i[y.id]}function T(y){for(const M in i){const W=i[M];if(W[y.id]===void 0)continue;const k=W[y.id];for(const $ in k)u(k[$].object),delete k[$];delete W[y.id]}}function R(){z(),o=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:z,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Tw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let x=0;x<d;x++)m+=u[x];for(let x=0;x<f.length;x++)n.update(m,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Aw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==oi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Xi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:A}}function Rw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,v=_*4;let S=h.clippingState||null;l.value=S,S=u(m,f,v,p);for(let P=0;P!==v;++P)S[P]=n[P];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const h=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<h)&&(g=new Float32Array(h));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Cw(t){let e=new WeakMap;function n(o,a){return a===gd?o.mapping=Eo:a===vd&&(o.mapping=wo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gd||a===vd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pw extends C2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qs=4,Ig=[.125,.215,.35,.446,.526,.582],Wr=20,$f=new Pw,Ng=new We;let qf=null,Yf=0,Kf=0,Zf=!1;const Vr=(1+Math.sqrt(5))/2,Ds=1/Vr,Ug=[new F(-Vr,Ds,0),new F(Vr,Ds,0),new F(-Ds,0,Vr),new F(Ds,0,Vr),new F(0,Vr,-Ds),new F(0,Vr,Ds),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qf,Yf,Kf),this._renderer.xr.enabled=Zf,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Eo||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:rl,format:oi,colorSpace:br,depthBuffer:!1},r=Og(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bw(s)),this._blurMaterial=Lw(s,e,n)}return r}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,$f)}_sceneToCubeUV(e,n,i,r){const a=new On(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ng),u.toneMapping=Mr,u.autoClear=!1;const p=new lu({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new ai(new al,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Ng),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;jl(r,_*v,h>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Eo||e.mapping===wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;jl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$f)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ug[(r-s-1)%Ug.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ai(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):Wr;g>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wr}`);const h=[];let _=0;for(let T=0;T<Wr;++T){const R=T/x,z=Math.exp(-R*R/2);h.push(z),T===0?_+=z:T<g&&(_+=2*z)}for(let T=0;T<h.length;T++)h[T]=h[T]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Qs?r-v+Qs:0),A=4*(this._cubeSize-S);jl(n,P,A,3*S,2*S),l.setRenderTarget(n),l.render(d,$f)}}function bw(t){const e=[],n=[],i=[];let r=t;const s=t-Qs+1+Ig.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Qs?l=Ig[o-t+Qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,x=3,g=2,h=1,_=new Float32Array(x*m*p),v=new Float32Array(g*m*p),S=new Float32Array(h*m*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,z=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(z,x*m*A),v.set(f,g*m*A);const y=[A,A,A,A,A,A];S.set(y,h*m*A)}const P=new kt;P.setAttribute("position",new sn(_,x)),P.setAttribute("uv",new sn(v,g)),P.setAttribute("faceIndex",new sn(S,h)),e.push(P),r>Qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Og(t,e,n){const i=new ls(t,e,n);return i.texture.mapping=Hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Lw(t,e,n){const i=new Float32Array(Wr),r=new F(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function zg(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function kg(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Dp(){return`

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
	`}function Dw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gd||l===vd,u=l===Eo||l===wo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Fg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Fg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Iw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Cc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Nw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const x=f.morphAttributes[m];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const x=p[m];for(let g=0,h=x.length;g<h;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,m=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,S=_.length;v<S;v+=3){const P=_[v+0],A=_[v+1],T=_[v+2];f.push(P,A,A,T,T,P)}}else if(m!==void 0){const _=m.array;x=m.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const P=v+0,A=v+1,T=v+2;f.push(P,A,A,T,T,P)}}else return;const g=new(S2(f)?A2:T2)(f,1);g.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Uw(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,f*o,m),n.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function d(f,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],x[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,m);let h=0;for(let _=0;_<m;_++)h+=p[_];for(let _=0;_<x.length;_++)n.update(h,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ow(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let P=a.attributes.position.count*S,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*d),R=new E2(T,P,A,d);R.type=Fi,R.needsUpdate=!0;const z=S*4;for(let M=0;M<d;M++){const W=h[M],k=_[M],$=v[M],D=P*A*4*M;for(let O=0;O<W.count;O++){const Y=O*z;m===!0&&(r.fromBufferAttribute(W,O),T[D+Y+0]=r.x,T[D+Y+1]=r.y,T[D+Y+2]=r.z,T[D+Y+3]=0),x===!0&&(r.fromBufferAttribute(k,O),T[D+Y+4]=r.x,T[D+Y+5]=r.y,T[D+Y+6]=r.z,T[D+Y+7]=0),g===!0&&(r.fromBufferAttribute($,O),T[D+Y+8]=r.x,T[D+Y+9]=r.y,T[D+Y+10]=r.z,T[D+Y+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new Xe(P,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function zw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class D2 extends ln{constructor(e,n,i,r,s,o,a,l,c,u=fo){if(u!==fo&&u!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fo&&(i=as),i===void 0&&u===Ao&&(i=To),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const I2=new ln,Bg=new D2(1,1),N2=new E2,U2=new EM,F2=new P2,Hg=[],Vg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function Oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hg[r];if(s===void 0&&(s=new Float32Array(r),Hg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xu(t,e){let n=Vg[e];n===void 0&&(n=new Int32Array(e),Vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Xg.set(i),t.uniformMatrix2fv(this.addr,!1,Xg),Ft(n,i)}}function Ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Wg.set(i),t.uniformMatrix3fv(this.addr,!1,Wg),Ft(n,i)}}function Xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Gg.set(i),t.uniformMatrix4fv(this.addr,!1,Gg),Ft(n,i)}}function jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function Kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Bg.compareFunction=y2,s=Bg):s=I2,n.setTexture2D(e||s,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||U2,r)}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||F2,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N2,r)}function rT(t){switch(t){case 5126:return kw;case 35664:return Bw;case 35665:return Hw;case 35666:return Vw;case 35674:return Gw;case 35675:return Ww;case 35676:return Xw;case 5124:case 35670:return jw;case 35667:case 35671:return $w;case 35668:case 35672:return qw;case 35669:case 35673:return Yw;case 5125:return Kw;case 36294:return Zw;case 36295:return Jw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function sT(t,e){t.uniform1fv(this.addr,e)}function oT(t,e){const n=Oo(e,this.size,2);t.uniform2fv(this.addr,n)}function aT(t,e){const n=Oo(e,this.size,3);t.uniform3fv(this.addr,n)}function lT(t,e){const n=Oo(e,this.size,4);t.uniform4fv(this.addr,n)}function cT(t,e){const n=Oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uT(t,e){const n=Oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fT(t,e){const n=Oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dT(t,e){t.uniform1iv(this.addr,e)}function hT(t,e){t.uniform2iv(this.addr,e)}function pT(t,e){t.uniform3iv(this.addr,e)}function mT(t,e){t.uniform4iv(this.addr,e)}function gT(t,e){t.uniform1uiv(this.addr,e)}function vT(t,e){t.uniform2uiv(this.addr,e)}function _T(t,e){t.uniform3uiv(this.addr,e)}function xT(t,e){t.uniform4uiv(this.addr,e)}function yT(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||I2,s[o])}function ST(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||U2,s[o])}function MT(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||F2,s[o])}function ET(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||N2,s[o])}function wT(t){switch(t){case 5126:return sT;case 35664:return oT;case 35665:return aT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return vT;case 36295:return _T;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}class TT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rT(n.type)}}class AT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wT(n.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function jg(t,e){t.seq.push(e),t.map[e.id]=e}function CT(t,e,n){const i=t.name,r=i.length;for(Jf.lastIndex=0;;){const s=Jf.exec(i),o=Jf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){jg(n,c===void 0?new TT(a,t,e):new AT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new RT(a),jg(n,d)),n=d}}}class Pc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);CT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function $g(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const PT=37297;let bT=0;function LT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function DT(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===su&&n===ru?i="LinearDisplayP3ToLinearSRGB":e===ru&&n===su&&(i="LinearSRGBToLinearDisplayP3"),t){case br:case Vu:return[i,"LinearTransferOETF"];case pi:case Pp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function qg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LT(t.getShaderSource(e),o)}else return r}function IT(t,e){const n=DT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function NT(t,e){let n;switch(e){case IS:n="Linear";break;case NS:n="Reinhard";break;case US:n="Cineon";break;case FS:n="ACESFilmic";break;case zS:n="AgX";break;case kS:n="Neutral";break;case OS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $l=new F;function UT(){st.getLuminanceCoefficients($l);const t=$l.x.toFixed(4),e=$l.y.toFixed(4),n=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function OT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function la(t){return t!==""}function Yg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(t){return t.replace(kT,HT)}const BT=new Map;function HT(t,e){let n=Be[e];if(n===void 0){const i=BT.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $d(n)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(t){return t.replace(VT,GT)}function GT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function WT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===a2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function XT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Eo:case wo:e="ENVMAP_TYPE_CUBE";break;case Hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case l2:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case DS:e="ENVMAP_BLENDING_ADD";break}return e}function qT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function YT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=WT(n),c=XT(n),u=jT(n),d=$T(n),f=qT(n),p=FT(n),m=OT(s),x=r.createProgram();let g,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(la).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(la).join(`
`),h.length>0&&(h+=`
`)):(g=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),h=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?Be.tonemapping_pars_fragment:"",n.toneMapping!==Mr?NT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,IT("linearToOutputTexel",n.outputColorSpace),UT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),o=$d(o),o=Yg(o,n),o=Kg(o,n),a=$d(a),a=Yg(a,n),a=Kg(a,n),o=Zg(o),a=Zg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=_+g+o,S=_+h+a,P=$g(r,r.VERTEX_SHADER,v),A=$g(r,r.FRAGMENT_SHADER,S);r.attachShader(x,P),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(M){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(A).trim();let D=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,A);else{const Y=qg(r,P,"vertex"),L=qg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+W+`
`+Y+`
`+L)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||$==="")&&(O=!1);O&&(M.diagnostics={runnable:D,programLog:W,vertexShader:{log:k,prefix:g},fragmentShader:{log:$,prefix:h}})}r.deleteShader(P),r.deleteShader(A),R=new Pc(r,x),z=zT(r,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let z;this.getAttributes=function(){return z===void 0&&T(this),z};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,PT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let KT=0;class ZT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JT(e),n.set(e,i)),i}}class JT{constructor(e){this.id=KT++,this.code=e,this.usedTimes=0}}function QT(t,e,n,i,r,s,o){const a=new Lp,l=new ZT,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,M,W,k,$){const D=k.fog,O=$.geometry,Y=y.isMeshStandardMaterial?k.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),Z=L&&L.mapping===Hu?L.image.height:null,q=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_e=ne!==void 0?ne.length:0;let be=0;O.morphAttributes.position!==void 0&&(be=1),O.morphAttributes.normal!==void 0&&(be=2),O.morphAttributes.color!==void 0&&(be=3);let B,J,ae,le;if(q){const dn=mi[q];B=dn.vertexShader,J=dn.fragmentShader}else B=y.vertexShader,J=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const De=t.getRenderTarget(),V=$.isInstancedMesh===!0,ze=$.isBatchedMesh===!0,nt=!!y.map,me=!!y.matcap,b=!!L,je=!!y.aoMap,Ce=!!y.lightMap,Le=!!y.bumpMap,Pe=!!y.normalMap,$e=!!y.displacementMap,Ie=!!y.emissiveMap,C=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,ee=y.clearcoat>0,ie=y.dispersion>0,Q=y.iridescence>0,Te=y.sheen>0,ue=y.transmission>0,xe=G&&!!y.anisotropyMap,Qe=ee&&!!y.clearcoatMap,se=ee&&!!y.clearcoatNormalMap,ye=ee&&!!y.clearcoatRoughnessMap,Fe=Q&&!!y.iridescenceMap,Oe=Q&&!!y.iridescenceThicknessMap,Se=Te&&!!y.sheenColorMap,qe=Te&&!!y.sheenRoughnessMap,ke=!!y.specularMap,ut=!!y.specularColorMap,I=!!y.specularIntensityMap,he=ue&&!!y.transmissionMap,K=ue&&!!y.thicknessMap,te=!!y.gradientMap,fe=!!y.alphaMap,pe=y.alphaTest>0,Ke=!!y.alphaHash,Pt=!!y.extensions;let fn=Mr;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(fn=t.toneMapping);const tt={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:J,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ze,batchingColor:ze&&$._colorsTexture!==null,instancing:V,instancingColor:V&&$.instanceColor!==null,instancingMorph:V&&$.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:br,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:me,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:Z,aoMap:je,lightMap:Ce,bumpMap:Le,normalMap:Pe,displacementMap:p&&$e,emissiveMap:Ie,normalMapObjectSpace:Pe&&y.normalMapType===WS,normalMapTangentSpace:Pe&&y.normalMapType===GS,metalnessMap:C,roughnessMap:E,anisotropy:G,anisotropyMap:xe,clearcoat:ee,clearcoatMap:Qe,clearcoatNormalMap:se,clearcoatRoughnessMap:ye,dispersion:ie,iridescence:Q,iridescenceMap:Fe,iridescenceThicknessMap:Oe,sheen:Te,sheenColorMap:Se,sheenRoughnessMap:qe,specularMap:ke,specularColorMap:ut,specularIntensityMap:I,transmission:ue,transmissionMap:he,thicknessMap:K,gradientMap:te,opaque:y.transparent===!1&&y.blending===uo&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ke,combine:y.combine,mapUv:nt&&g(y.map.channel),aoMapUv:je&&g(y.aoMap.channel),lightMapUv:Ce&&g(y.lightMap.channel),bumpMapUv:Le&&g(y.bumpMap.channel),normalMapUv:Pe&&g(y.normalMap.channel),displacementMapUv:$e&&g(y.displacementMap.channel),emissiveMapUv:Ie&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:E&&g(y.roughnessMap.channel),anisotropyMapUv:xe&&g(y.anisotropyMap.channel),clearcoatMapUv:Qe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(y.sheenRoughnessMap.channel),specularMapUv:ke&&g(y.specularMap.channel),specularColorMapUv:ut&&g(y.specularColorMap.channel),specularIntensityMapUv:I&&g(y.specularIntensityMap.channel),transmissionMapUv:he&&g(y.transmissionMap.channel),thicknessMapUv:K&&g(y.thicknessMap.channel),alphaMapUv:fe&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Pe||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(nt||fe),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:fn,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)M.push(W),M.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const M=x[y.type];let W;if(M){const k=mi[M];W=UM.clone(k.uniforms)}else W=y.uniforms;return W}function A(y,M){let W;for(let k=0,$=u.length;k<$;k++){const D=u[k];if(D.cacheKey===M){W=D,++W.usedTimes;break}}return W===void 0&&(W=new YT(t,M,y,s),u.push(W)),W}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function z(){l.dispose()}return{getParameters:h,getProgramCacheKey:_,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:z}}function e6(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function t6(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function e1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,m,x,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=m,h.renderOrder=d.renderOrder,h.z=x,h.group=g),e++,h}function a(d,f,p,m,x,g){const h=o(d,f,p,m,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,m,x,g){const h=o(d,f,p,m,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||t6),i.length>1&&i.sort(f||Qg),r.length>1&&r.sort(f||Qg)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function n6(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new e1,t.set(i,[o])):r>=s.length?(o=new e1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function i6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new We};break;case"SpotLight":n={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function r6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let s6=0;function o6(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function a6(t){const e=new i6,n=r6(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new xt,o=new xt;function a(c){let u=0,d=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,m=0,x=0,g=0,h=0,_=0,v=0,S=0,P=0,A=0,T=0;c.sort(o6);for(let z=0,y=c.length;z<y;z++){const M=c[z],W=M.color,k=M.intensity,$=M.distance,D=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=W.r*k,d+=W.g*k,f+=W.b*k;else if(M.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(M.sh.coefficients[O],k);T++}else if(M.isDirectionalLight){const O=e.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,L=n.get(M);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=M.shadow.matrix,_++}i.directional[p]=O,p++}else if(M.isSpotLight){const O=e.get(M);O.position.setFromMatrixPosition(M.matrixWorld),O.color.copy(W).multiplyScalar(k),O.distance=$,O.coneCos=Math.cos(M.angle),O.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),O.decay=M.decay,i.spot[x]=O;const Y=M.shadow;if(M.map&&(i.spotLightMap[P]=M.map,P++,Y.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=Y.matrix,M.castShadow){const L=n.get(M);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=D,S++}x++}else if(M.isRectAreaLight){const O=e.get(M);O.color.copy(W).multiplyScalar(k),O.halfWidth.set(M.width*.5,0,0),O.halfHeight.set(0,M.height*.5,0),i.rectArea[g]=O,g++}else if(M.isPointLight){const O=e.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),O.distance=M.distance,O.decay=M.decay,M.castShadow){const Y=M.shadow,L=n.get(M);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=D,i.pointShadowMatrix[m]=M.shadow.matrix,v++}i.point[m]=O,m++}else if(M.isHemisphereLight){const O=e.get(M);O.skyColor.copy(M.color).multiplyScalar(k),O.groundColor.copy(M.groundColor).multiplyScalar(k),i.hemi[h]=O,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==h||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==S||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=h,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=S,R.numSpotMaps=P,R.numLightProbes=T,i.version=s6++)}function l(c,u){let d=0,f=0,p=0,m=0,x=0;const g=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function t1(t){const e=new a6(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function l6(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new t1(t),e.set(r,[a])):s>=o.length?(a=new t1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class c6 extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u6 extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d6=`uniform sampler2D shadow_pass;
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
}`;function h6(t,e,n){let i=new b2;const r=new Xe,s=new Xe,o=new Ct,a=new c6({depthPacking:VS}),l=new u6,c={},u=n.maxTextureSize,d={[Tr]:an,[an]:Tr,[vi]:vi},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:f6,fragmentShader:d6}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ai(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a2;let h=this.type;this.render=function(A,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const z=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Sr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=h!==Ci&&this.type===Ci,$=h===Ci&&this.type!==Ci;for(let D=0,O=A.length;D<O;D++){const Y=A[D],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Z=L.getFrameExtents();if(r.multiply(Z),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,L.mapSize.y=s.y)),L.map===null||k===!0||$===!0){const ne=this.type!==Ci?{minFilter:Hn,magFilter:Hn}:{};L.map!==null&&L.map.dispose(),L.map=new ls(r.x,r.y,ne),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const q=L.getViewportCount();for(let ne=0;ne<q;ne++){const _e=L.getViewport(ne);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),W.viewport(o),L.updateMatrices(Y,ne),i=L.getFrustum(),S(T,R,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Ci&&_(L,R),L.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(z,y,M)};function _(A,T){const R=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ls(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,R,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,R,p,x,null)}function v(A,T,R,z){let y=null;const M=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=y.uuid,k=T.uuid;let $=c[W];$===void 0&&($={},c[W]=$);let D=$[k];D===void 0&&(D=y.clone(),$[k]=D,T.addEventListener("dispose",P)),y=D}if(y.visible=T.visible,y.wireframe=T.wireframe,z===Ci?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=t.properties.get(y);W.light=R}return y}function S(A,T,R,z,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const k=e.update(A),$=A.material;if(Array.isArray($)){const D=k.groups;for(let O=0,Y=D.length;O<Y;O++){const L=D[O],Z=$[L.materialIndex];if(Z&&Z.visible){const q=v(A,Z,z,y);A.onBeforeShadow(t,A,T,R,k,q,L),t.renderBufferDirect(R,null,k,q,A,L),A.onAfterShadow(t,A,T,R,k,q,L)}}}else if($.visible){const D=v(A,$,z,y);A.onBeforeShadow(t,A,T,R,k,D,null),t.renderBufferDirect(R,null,k,D,A,null),A.onAfterShadow(t,A,T,R,k,D,null)}}const W=A.children;for(let k=0,$=W.length;k<$;k++)S(W[k],T,R,z,y)}function P(A){A.target.removeEventListener("dispose",P);for(const R in c){const z=c[R],y=A.target.uuid;y in z&&(z[y].dispose(),delete z[y])}}}const p6={[cd]:ud,[fd]:pd,[dd]:md,[Mo]:hd,[ud]:cd,[pd]:fd,[md]:dd,[hd]:Mo};function m6(t){function e(){let I=!1;const he=new Ct;let K=null;const te=new Ct(0,0,0,0);return{setMask:function(fe){K!==fe&&!I&&(t.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){I=fe},setClear:function(fe,pe,Ke,Pt,fn){fn===!0&&(fe*=Pt,pe*=Pt,Ke*=Pt),he.set(fe,pe,Ke,Pt),te.equals(he)===!1&&(t.clearColor(fe,pe,Ke,Pt),te.copy(he))},reset:function(){I=!1,K=null,te.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,K=null,te=null,fe=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?ae(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(pe){K!==pe&&!I&&(t.depthMask(pe),K=pe)},setFunc:function(pe){if(he&&(pe=p6[pe]),te!==pe){switch(pe){case cd:t.depthFunc(t.NEVER);break;case ud:t.depthFunc(t.ALWAYS);break;case fd:t.depthFunc(t.LESS);break;case Mo:t.depthFunc(t.LEQUAL);break;case dd:t.depthFunc(t.EQUAL);break;case hd:t.depthFunc(t.GEQUAL);break;case pd:t.depthFunc(t.GREATER);break;case md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=pe}},setLocked:function(pe){I=pe},setClear:function(pe){fe!==pe&&(t.clearDepth(pe),fe=pe)},reset:function(){I=!1,K=null,te=null,fe=null}}}function i(){let I=!1,he=null,K=null,te=null,fe=null,pe=null,Ke=null,Pt=null,fn=null;return{setTest:function(tt){I||(tt?ae(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(tt){he!==tt&&!I&&(t.stencilMask(tt),he=tt)},setFunc:function(tt,dn,Mi){(K!==tt||te!==dn||fe!==Mi)&&(t.stencilFunc(tt,dn,Mi),K=tt,te=dn,fe=Mi)},setOp:function(tt,dn,Mi){(pe!==tt||Ke!==dn||Pt!==Mi)&&(t.stencilOp(tt,dn,Mi),pe=tt,Ke=dn,Pt=Mi)},setLocked:function(tt){I=tt},setClear:function(tt){fn!==tt&&(t.clearStencil(tt),fn=tt)},reset:function(){I=!1,he=null,K=null,te=null,fe=null,pe=null,Ke=null,Pt=null,fn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,m=!1,x=null,g=null,h=null,_=null,v=null,S=null,P=null,A=new We(0,0,0),T=0,R=!1,z=null,y=null,M=null,W=null,k=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),D=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),D=O>=2);let L=null,Z={};const q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),_e=new Ct().fromArray(q),be=new Ct().fromArray(ne);function B(I,he,K,te){const fe=new Uint8Array(4),pe=t.createTexture();t.bindTexture(I,pe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<K;Ke++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(he+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return pe}const J={};J[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=B(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=B(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(Mo),Ce(!1),Le(lg),ae(t.CULL_FACE),b(Sr);function ae(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function le(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function De(I,he){return u[I]!==he?(t.bindFramebuffer(I,he),u[I]=he,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function V(I,he){let K=f,te=!1;if(I){K=d.get(he),K===void 0&&(K=[],d.set(he,K));const fe=I.textures;if(K.length!==fe.length||K[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ke=fe.length;pe<Ke;pe++)K[pe]=t.COLOR_ATTACHMENT0+pe;K.length=fe.length,te=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,te=!0);te&&t.drawBuffers(K)}function ze(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const nt={[Gr]:t.FUNC_ADD,[pS]:t.FUNC_SUBTRACT,[mS]:t.FUNC_REVERSE_SUBTRACT};nt[gS]=t.MIN,nt[vS]=t.MAX;const me={[_S]:t.ZERO,[xS]:t.ONE,[yS]:t.SRC_COLOR,[ad]:t.SRC_ALPHA,[AS]:t.SRC_ALPHA_SATURATE,[wS]:t.DST_COLOR,[MS]:t.DST_ALPHA,[SS]:t.ONE_MINUS_SRC_COLOR,[ld]:t.ONE_MINUS_SRC_ALPHA,[TS]:t.ONE_MINUS_DST_COLOR,[ES]:t.ONE_MINUS_DST_ALPHA,[RS]:t.CONSTANT_COLOR,[CS]:t.ONE_MINUS_CONSTANT_COLOR,[PS]:t.CONSTANT_ALPHA,[bS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(I,he,K,te,fe,pe,Ke,Pt,fn,tt){if(I===Sr){m===!0&&(le(t.BLEND),m=!1);return}if(m===!1&&(ae(t.BLEND),m=!0),I!==hS){if(I!==x||tt!==R){if((g!==Gr||v!==Gr)&&(t.blendEquation(t.FUNC_ADD),g=Gr,v=Gr),tt)switch(I){case uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cg:t.blendFunc(t.ONE,t.ONE);break;case ug:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ug:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,_=null,S=null,P=null,A.set(0,0,0),T=0,x=I,R=tt}return}fe=fe||he,pe=pe||K,Ke=Ke||te,(he!==g||fe!==v)&&(t.blendEquationSeparate(nt[he],nt[fe]),g=he,v=fe),(K!==h||te!==_||pe!==S||Ke!==P)&&(t.blendFuncSeparate(me[K],me[te],me[pe],me[Ke]),h=K,_=te,S=pe,P=Ke),(Pt.equals(A)===!1||fn!==T)&&(t.blendColor(Pt.r,Pt.g,Pt.b,fn),A.copy(Pt),T=fn),x=I,R=!1}function je(I,he){I.side===vi?le(t.CULL_FACE):ae(t.CULL_FACE);let K=I.side===an;he&&(K=!K),Ce(K),I.blending===uo&&I.transparent===!1?b(Sr):b(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;o.setTest(te),te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){z!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),z=I)}function Le(I){I!==uS?(ae(t.CULL_FACE),I!==y&&(I===lg?t.cullFace(t.BACK):I===fS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),y=I}function Pe(I){I!==M&&(D&&t.lineWidth(I),M=I)}function $e(I,he,K){I?(ae(t.POLYGON_OFFSET_FILL),(W!==he||k!==K)&&(t.polygonOffset(he,K),W=he,k=K)):le(t.POLYGON_OFFSET_FILL)}function Ie(I){I?ae(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+$-1),L!==I&&(t.activeTexture(I),L=I)}function E(I,he,K){K===void 0&&(L===null?K=t.TEXTURE0+$-1:K=L);let te=Z[K];te===void 0&&(te={type:void 0,texture:void 0},Z[K]=te),(te.type!==I||te.texture!==he)&&(L!==K&&(t.activeTexture(K),L=K),t.bindTexture(I,he||J[I]),te.type=I,te.texture=he)}function G(){const I=Z[L];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(I){_e.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),_e.copy(I))}function Se(I){be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),be.copy(I))}function qe(I,he){let K=l.get(he);K===void 0&&(K=new WeakMap,l.set(he,K));let te=K.get(I);te===void 0&&(te=t.getUniformBlockIndex(he,I.name),K.set(I,te))}function ke(I,he){const te=l.get(he).get(I);a.get(he)!==te&&(t.uniformBlockBinding(he,te,I.__bindingPointIndex),a.set(he,te))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Z={},u={},d=new WeakMap,f=[],p=null,m=!1,x=null,g=null,h=null,_=null,v=null,S=null,P=null,A=new We(0,0,0),T=0,R=!1,z=null,y=null,M=null,W=null,k=null,_e.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:le,bindFramebuffer:De,drawBuffers:V,useProgram:ze,setBlending:b,setMaterial:je,setFlipSided:Ce,setCullFace:Le,setLineWidth:Pe,setPolygonOffset:$e,setScissorTest:Ie,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:ye,texImage3D:Fe,updateUBOMapping:qe,uniformBlockBinding:ke,texStorage2D:Qe,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:xe,scissor:Oe,viewport:Se,reset:ut}}function n1(t,e,n,i){const r=g6(i);switch(n){case h2:return t*e;case m2:return t*e;case g2:return t*e*2;case v2:return t*e/r.components*r.byteLength;case Ap:return t*e/r.components*r.byteLength;case _2:return t*e*2/r.components*r.byteLength;case Rp:return t*e*2/r.components*r.byteLength;case p2:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Cp:return t*e*4/r.components*r.byteLength;case Ec:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tc:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Ed:return Math.max(t,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(t,8)*Math.max(e,8)/2;case wd:case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case x2:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wd:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function g6(t){switch(t){case Xi:case u2:return{byteLength:1,components:1};case Xa:case f2:case rl:return{byteLength:2,components:1};case wp:case Tp:return{byteLength:2,components:4};case as:case Ep:case Fi:return{byteLength:4,components:1};case d2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function v6(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,E){return p?new OffscreenCanvas(C,E):au("canvas")}function x(C,E,G){let ee=1;const ie=Ie(C);if((ie.width>G||ie.height>G)&&(ee=G/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(ee*ie.width),Te=Math.floor(ee*ie.height);d===void 0&&(d=m(Q,Te));const ue=E?m(Q,Te):d;return ue.width=Q,ue.height=Te,ue.getContext("2d").drawImage(C,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Te+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==Hn&&C.minFilter!==ri}function h(C){t.generateMipmap(C)}function _(C,E,G,ee,ie=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=E;if(E===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),E===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const Te=ie?iu:st.getTransfer(ee);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Te===mt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,E){let G;return C?E===null||E===as||E===To?G=t.DEPTH24_STENCIL8:E===Fi?G=t.DEPTH32F_STENCIL8:E===Xa&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===as||E===To?G=t.DEPTH_COMPONENT24:E===Fi?G=t.DEPTH_COMPONENT32F:E===Xa&&(G=t.DEPTH_COMPONENT16),G}function S(C,E){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Hn&&C.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){const E=C.target;E.removeEventListener("dispose",P),T(E),E.isVideoTexture&&u.delete(E)}function A(C){const E=C.target;E.removeEventListener("dispose",A),z(E)}function T(C){const E=i.get(C);if(E.__webglInit===void 0)return;const G=C.source,ee=f.get(G);if(ee){const ie=ee[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(C),Object.keys(ee).length===0&&f.delete(G)}i.remove(C)}function R(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const G=C.source,ee=f.get(G);delete ee[E.__cacheKey],o.memory.textures--}function z(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ie=0;ie<E.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let ee=0,ie=G.length;ee<ie;ee++){const Q=i.get(G[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(C)}let y=0;function M(){y=0}function W(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function $(C,E){const G=i.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(G,C,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function D(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){be(G,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function O(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){be(G,C,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function Y(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){B(G,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const L={[_d]:t.REPEAT,[Yr]:t.CLAMP_TO_EDGE,[xd]:t.MIRRORED_REPEAT},Z={[Hn]:t.NEAREST,[BS]:t.NEAREST_MIPMAP_NEAREST,[Rl]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Tf]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},q={[XS]:t.NEVER,[ZS]:t.ALWAYS,[jS]:t.LESS,[y2]:t.LEQUAL,[$S]:t.EQUAL,[KS]:t.GEQUAL,[qS]:t.GREATER,[YS]:t.NOTEQUAL};function ne(C,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===Tf||E.magFilter===Rl||E.magFilter===Kr||E.minFilter===ri||E.minFilter===Tf||E.minFilter===Rl||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==Rl&&E.minFilter!==Kr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function _e(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P));const ee=E.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const Q=k(E);if(Q!==C.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const Te=ie[C.__cacheKey];Te!==void 0&&(ie[C.__cacheKey].usedTimes--,Te.usedTimes===0&&R(E)),C.__cacheKey=Q,C.__webglTexture=ie[Q].texture}return G}function be(C,E,G){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=_e(C,E),Q=E.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+G);const Te=i.get(Q);if(Q.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const ue=st.getPrimaries(st.workingColorSpace),xe=E.colorSpace===cr?null:st.getPrimaries(E.colorSpace),Qe=E.colorSpace===cr||ue===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let se=x(E.image,!1,r.maxTextureSize);se=$e(E,se);const ye=s.convert(E.format,E.colorSpace),Fe=s.convert(E.type);let Oe=_(E.internalFormat,ye,Fe,E.colorSpace,E.isVideoTexture);ne(ee,E);let Se;const qe=E.mipmaps,ke=E.isVideoTexture!==!0,ut=Te.__version===void 0||ie===!0,I=Q.dataReady,he=S(E,se);if(E.isDepthTexture)Oe=v(E.format===Ao,E.type),ut&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Oe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Oe,se.width,se.height,0,ye,Fe,null));else if(E.isDataTexture)if(qe.length>0){ke&&ut&&n.texStorage2D(t.TEXTURE_2D,he,Oe,qe[0].width,qe[0].height);for(let K=0,te=qe.length;K<te;K++)Se=qe[K],ke?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ye,Fe,Se.data):n.texImage2D(t.TEXTURE_2D,K,Oe,Se.width,Se.height,0,ye,Fe,Se.data);E.generateMipmaps=!1}else ke?(ut&&n.texStorage2D(t.TEXTURE_2D,he,Oe,se.width,se.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ye,Fe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,se.width,se.height,0,ye,Fe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Oe,qe[0].width,qe[0].height,se.depth);for(let K=0,te=qe.length;K<te;K++)if(Se=qe[K],E.format!==oi)if(ye!==null)if(ke){if(I)if(E.layerUpdates.size>0){const fe=n1(Se.width,Se.height,E.format,E.type);for(const pe of E.layerUpdates){const Ke=Se.data.subarray(pe*fe/Se.data.BYTES_PER_ELEMENT,(pe+1)*fe/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,pe,Se.width,Se.height,1,ye,Ke,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,se.depth,ye,Se.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Oe,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,se.depth,ye,Fe,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Oe,Se.width,Se.height,se.depth,0,ye,Fe,Se.data)}else{ke&&ut&&n.texStorage2D(t.TEXTURE_2D,he,Oe,qe[0].width,qe[0].height);for(let K=0,te=qe.length;K<te;K++)Se=qe[K],E.format!==oi?ye!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ye,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Oe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ye,Fe,Se.data):n.texImage2D(t.TEXTURE_2D,K,Oe,Se.width,Se.height,0,ye,Fe,Se.data)}else if(E.isDataArrayTexture)if(ke){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Oe,se.width,se.height,se.depth),I)if(E.layerUpdates.size>0){const K=n1(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const fe=se.data.subarray(te*K/se.data.BYTES_PER_ELEMENT,(te+1)*K/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,ye,Fe,fe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,Fe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,ye,Fe,se.data);else if(E.isData3DTexture)ke?(ut&&n.texStorage3D(t.TEXTURE_3D,he,Oe,se.width,se.height,se.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,Fe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,ye,Fe,se.data);else if(E.isFramebufferTexture){if(ut)if(ke)n.texStorage2D(t.TEXTURE_2D,he,Oe,se.width,se.height);else{let K=se.width,te=se.height;for(let fe=0;fe<he;fe++)n.texImage2D(t.TEXTURE_2D,fe,Oe,K,te,0,ye,Fe,null),K>>=1,te>>=1}}else if(qe.length>0){if(ke&&ut){const K=Ie(qe[0]);n.texStorage2D(t.TEXTURE_2D,he,Oe,K.width,K.height)}for(let K=0,te=qe.length;K<te;K++)Se=qe[K],ke?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ye,Fe,Se):n.texImage2D(t.TEXTURE_2D,K,Oe,ye,Fe,Se);E.generateMipmaps=!1}else if(ke){if(ut){const K=Ie(se);n.texStorage2D(t.TEXTURE_2D,he,Oe,K.width,K.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Fe,se)}else n.texImage2D(t.TEXTURE_2D,0,Oe,ye,Fe,se);g(E)&&h(ee),Te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function B(C,E,G){if(E.image.length!==6)return;const ee=_e(C,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const Q=i.get(ie);if(ie.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const Te=st.getPrimaries(st.workingColorSpace),ue=E.colorSpace===cr?null:st.getPrimaries(E.colorSpace),xe=E.colorSpace===cr||Te===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!Qe&&!se?ye[te]=x(E.image[te],!0,r.maxCubemapSize):ye[te]=se?E.image[te].image:E.image[te],ye[te]=$e(E,ye[te]);const Fe=ye[0],Oe=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),qe=_(E.internalFormat,Oe,Se,E.colorSpace),ke=E.isVideoTexture!==!0,ut=Q.__version===void 0||ee===!0,I=ie.dataReady;let he=S(E,Fe);ne(t.TEXTURE_CUBE_MAP,E);let K;if(Qe){ke&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,qe,Fe.width,Fe.height);for(let te=0;te<6;te++){K=ye[te].mipmaps;for(let fe=0;fe<K.length;fe++){const pe=K[fe];E.format!==oi?Oe!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,pe.width,pe.height,Oe,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,0,0,pe.width,pe.height,Oe,Se,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe,qe,pe.width,pe.height,0,Oe,Se,pe.data)}}}else{if(K=E.mipmaps,ke&&ut){K.length>0&&he++;const te=Ie(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,qe,te.width,te.height)}for(let te=0;te<6;te++)if(se){ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,Oe,Se,ye[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,ye[te].width,ye[te].height,0,Oe,Se,ye[te].data);for(let fe=0;fe<K.length;fe++){const Ke=K[fe].image[te].image;ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Ke.width,Ke.height,Oe,Se,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,qe,Ke.width,Ke.height,0,Oe,Se,Ke.data)}}else{ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Oe,Se,ye[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Oe,Se,ye[te]);for(let fe=0;fe<K.length;fe++){const pe=K[fe];ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,0,0,Oe,Se,pe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe+1,qe,Oe,Se,pe.image[te])}}}g(E)&&h(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function J(C,E,G,ee,ie,Q){const Te=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),xe=_(G.internalFormat,Te,ue,G.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Q),ye=Math.max(1,E.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,xe,se,ye,E.depth,0,Te,ue,null):n.texImage2D(ie,Q,xe,se,ye,0,Te,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(G).__webglTexture,0,Ce(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(G).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(C,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const ee=E.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Q=v(E.stencilBuffer,ie),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Ce(E);Le(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Q,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,C)}else{const ee=E.textures;for(let ie=0;ie<ee.length;ie++){const Q=ee[ie],Te=s.convert(Q.format,Q.colorSpace),ue=s.convert(Q.type),xe=_(Q.internalFormat,Te,ue,Q.colorSpace),Qe=Ce(E);G&&Le(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,xe,E.width,E.height):Le(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe,xe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,xe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,ie=Ce(E);if(E.depthTexture.format===fo)Le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Ao)Le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(C){const E=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ee}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),ae(E.__webglDepthbuffer[ee],C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ae(E.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(C,E,G){const ee=i.get(C);E!==void 0&&J(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&De(C)}function ze(C){const E=C.texture,G=i.get(C),ee=i.get(E);C.addEventListener("dispose",A);const ie=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let xe=0;xe<E.mipmaps.length;xe++)G.__webglFramebuffer[ue][xe]=t.createFramebuffer()}else G.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)G.__webglFramebuffer[ue]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ue=0,xe=ie.length;ue<xe;ue++){const Qe=i.get(ie[ue]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Le(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const xe=ie[ue];G.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Qe=s.convert(xe.format,xe.colorSpace),se=s.convert(xe.type),ye=_(xe.internalFormat,Qe,se,xe.colorSpace,C.isXRRenderTarget===!0),Fe=Ce(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ye,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ne(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)J(G.__webglFramebuffer[ue][xe],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else J(G.__webglFramebuffer[ue],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ue=0,xe=ie.length;ue<xe;ue++){const Qe=ie[ue],se=i.get(Qe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ne(t.TEXTURE_2D,Qe),J(G.__webglFramebuffer,C,Qe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(Qe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ee.__webglTexture),ne(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)J(G.__webglFramebuffer[xe],C,E,t.COLOR_ATTACHMENT0,ue,xe);else J(G.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,ue,0);g(E)&&h(ue),n.unbindTexture()}C.depthBuffer&&De(C)}function nt(C){const E=C.textures;for(let G=0,ee=E.length;G<ee;G++){const ie=E[G];if(g(ie)){const Q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ie).__webglTexture;n.bindTexture(Q,Te),h(Q),n.unbindTexture()}}}const me=[],b=[];function je(C){if(C.samples>0){if(Le(C)===!1){const E=C.textures,G=C.width,ee=C.height;let ie=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(C),ue=E.length>1;if(ue)for(let xe=0;xe<E.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Qe=i.get(E[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Qe,0)}t.blitFramebuffer(0,0,G,ee,0,0,G,ee,ie,t.NEAREST),l===!0&&(me.length=0,b.length=0,me.push(t.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(me.push(Q),b.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,me))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let xe=0;xe<E.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Qe=i.get(E[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ce(C){return Math.min(r.maxSamples,C.samples)}function Le(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function $e(C,E){const G=C.colorSpace,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==br&&G!==cr&&(st.getTransfer(G)===mt?(ee!==oi||ie!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=M,this.setTexture2D=$,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=V,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Le}function _6(t,e){function n(i,r=cr){let s;const o=st.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===wp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Tp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===d2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===u2)return t.BYTE;if(i===f2)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===Ep)return t.INT;if(i===as)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===rl)return t.HALF_FLOAT;if(i===h2)return t.ALPHA;if(i===p2)return t.RGB;if(i===oi)return t.RGBA;if(i===m2)return t.LUMINANCE;if(i===g2)return t.LUMINANCE_ALPHA;if(i===fo)return t.DEPTH_COMPONENT;if(i===Ao)return t.DEPTH_STENCIL;if(i===v2)return t.RED;if(i===Ap)return t.RED_INTEGER;if(i===_2)return t.RG;if(i===Rp)return t.RG_INTEGER;if(i===Cp)return t.RGBA_INTEGER;if(i===Ec||i===wc||i===Tc||i===Ac)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Sd||i===Md||i===Ed)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Td||i===Ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Td)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ad)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===Cd||i===Pd||i===bd||i===Ld||i===Dd||i===Id||i===Nd||i===Ud||i===Fd||i===Od||i===zd||i===kd||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rc||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rc)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===x2||i===Gd||i===Wd||i===Xd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class x6 extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y6={type:"move"};class Qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y6)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const S6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M6=`
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

}`;class E6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:S6,fragmentShader:M6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new Wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w6 extends Fo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null;const x=new E6,g=n.getContextAttributes();let h=null,_=null;const v=[],S=[],P=new Xe;let A=null;const T=new On;T.layers.enable(1),T.viewport=new Ct;const R=new On;R.layers.enable(2),R.viewport=new Ct;const z=[T,R],y=new x6;y.layers.enable(1),y.layers.enable(2);let M=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=v[B];return J===void 0&&(J=new Qf,v[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=v[B];return J===void 0&&(J=new Qf,v[B]=J),J.getGripSpace()},this.getHand=function(B){let J=v[B];return J===void 0&&(J=new Qf,v[B]=J),J.getHandSpace()};function k(B){const J=S.indexOf(B.inputSource);if(J===-1)return;const ae=v[J];ae!==void 0&&(ae.update(B.inputSource,B.frame,c||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",D);for(let B=0;B<v.length;B++){const J=S[B];J!==null&&(S[B]=null,v[B].disconnect(J))}M=null,W=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,_=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ls(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,ae=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=g.stencil?Ao:fo,ae=g.stencil?To:as);const De={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new ls(f.textureWidth,f.textureHeight,{format:oi,type:Xi,depthTexture:new D2(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function D(B){for(let J=0;J<B.removed.length;J++){const ae=B.removed[J],le=S.indexOf(ae);le>=0&&(S[le]=null,v[le].disconnect(ae))}for(let J=0;J<B.added.length;J++){const ae=B.added[J];let le=S.indexOf(ae);if(le===-1){for(let V=0;V<v.length;V++)if(V>=S.length){S.push(ae),le=V;break}else if(S[V]===null){S[V]=ae,le=V;break}if(le===-1)break}const De=v[le];De&&De.connect(ae)}}const O=new F,Y=new F;function L(B,J,ae){O.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const le=O.distanceTo(Y),De=J.projectionMatrix.elements,V=ae.projectionMatrix.elements,ze=De[14]/(De[10]-1),nt=De[14]/(De[10]+1),me=(De[9]+1)/De[5],b=(De[9]-1)/De[5],je=(De[8]-1)/De[0],Ce=(V[8]+1)/V[0],Le=ze*je,Pe=ze*Ce,$e=le/(-je+Ce),Ie=$e*-je;if(J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ie),B.translateZ($e),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),De[10]===-1)B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const C=ze+$e,E=nt+$e,G=Le-Ie,ee=Pe+(le-Ie),ie=me*nt/E*C,Q=b*nt/E*C;B.projectionMatrix.makePerspective(G,ee,ie,Q,C,E),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Z(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let J=B.near,ae=B.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),y.near=R.near=T.near=J,y.far=R.far=T.far=ae,(M!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,W=y.far);const le=B.parent,De=y.cameras;Z(y,le);for(let V=0;V<De.length;V++)Z(De[V],le);De.length===2?L(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),q(B,y,le)};function q(B,J,ae){ae===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ja*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ne=null;function _e(B,J){if(u=J.getViewerPose(c||o),m=J,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let le=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let V=0;V<ae.length;V++){const ze=ae[V];let nt=null;if(p!==null)nt=p.getViewport(ze);else{const b=d.getViewSubImage(f,ze);nt=b.viewport,V===0&&(e.setRenderTargetTextures(_,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let me=z[V];me===void 0&&(me=new On,me.layers.enable(V),me.viewport=new Ct,z[V]=me),me.matrix.fromArray(ze.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ze.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(nt.x,nt.y,nt.width,nt.height),V===0&&(y.matrix.copy(me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(me)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const V=d.getDepthInformation(ae[0]);V&&V.isValid&&V.texture&&x.init(e,V,r.renderState)}}for(let ae=0;ae<v.length;ae++){const le=S[ae],De=v[ae];le!==null&&De!==void 0&&De.update(le,J,c||o)}ne&&ne(B,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}const be=new L2;be.setAnimationLoop(_e),this.setAnimationLoop=function(B){ne=B},this.dispose=function(){}}}const zr=new ji,T6=new xt;function A6(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,R2(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,_,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,_,v):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===an&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===an&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const _=e.get(h),v=_.envMap,S=_.envMapRotation;v&&(g.envMap.value=v,zr.copy(S),zr.x*=-1,zr.y*=-1,zr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),g.envMapRotation.value.setFromMatrix4(T6.makeRotationFromEuler(zr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,_,v){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*_,g.scale.value=v*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,_){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const _=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R6(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(m(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const P=v.program;i.updateUBOMapping(_,P);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function u(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),P=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const R=Array.isArray(S[A])?S[A]:[S[A]];for(let z=0,y=R.length;z<y;z++){const M=R[z];if(p(M,A,z,P)===!0){const W=M.__offset,k=Array.isArray(M.value)?M.value:[M.value];let $=0;for(let D=0;D<k.length;D++){const O=k[D],Y=x(O);typeof O=="number"||typeof O=="boolean"?(M.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,W+$,M.__data)):O.isMatrix3?(M.__data[0]=O.elements[0],M.__data[1]=O.elements[1],M.__data[2]=O.elements[2],M.__data[3]=0,M.__data[4]=O.elements[3],M.__data[5]=O.elements[4],M.__data[6]=O.elements[5],M.__data[7]=0,M.__data[8]=O.elements[6],M.__data[9]=O.elements[7],M.__data[10]=O.elements[8],M.__data[11]=0):(O.toArray(M.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,S,P){const A=_.value,T=v+"_"+S;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const R=P[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(_){const v=_.uniforms;let S=0;const P=16;for(let T=0,R=v.length;T<R;T++){const z=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=z.length;y<M;y++){const W=z[y],k=Array.isArray(W.value)?W.value:[W.value];for(let $=0,D=k.length;$<D;$++){const O=k[$],Y=x(O),L=S%P,Z=L%Y.boundary,q=L+Z;S+=Z,q!==0&&P-q<Y.storage&&(S+=P-q),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Y.storage}}}const A=S%P;return A>0&&(S+=P-A),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class C6{constructor(e={}){const{canvas:n=pM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),m=new Int32Array(4);let x=null,g=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=Mr,this.toneMappingExposure=1;const v=this;let S=!1,P=0,A=0,T=null,R=-1,z=null;const y=new Ct,M=new Ct;let W=null;const k=new We(0);let $=0,D=n.width,O=n.height,Y=1,L=null,Z=null;const q=new Ct(0,0,D,O),ne=new Ct(0,0,D,O);let _e=!1;const be=new b2;let B=!1,J=!1;const ae=new xt,le=new xt,De=new F,V=new Ct,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function me(){return T===null?Y:1}let b=i;function je(w,N){return n.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",pe,!1),b===null){const N="webgl2";if(b=je(N,w),b===null)throw je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,Le,Pe,$e,Ie,C,E,G,ee,ie,Q,Te,ue,xe,Qe,se,ye,Fe,Oe,Se,qe,ke,ut,I;function he(){Ce=new Iw(b),Ce.init(),ke=new _6(b,Ce),Le=new Aw(b,Ce,e,ke),Pe=new m6(b),Le.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),$e=new Fw(b),Ie=new e6,C=new v6(b,Ce,Pe,Ie,Le,ke,$e),E=new Cw(v),G=new Dw(v),ee=new VM(b),ut=new ww(b,ee),ie=new Nw(b,ee,$e,ut),Q=new zw(b,ie,ee,$e),Oe=new Ow(b,Le,C),se=new Rw(Ie),Te=new QT(v,E,G,Ce,Le,ut,se),ue=new A6(v,Ie),xe=new n6,Qe=new l6(Ce),Fe=new Ew(v,E,G,Pe,Q,f,l),ye=new h6(v,Q,Le),I=new R6(b,$e,Le,Pe),Se=new Tw(b,Ce,$e),qe=new Uw(b,Ce,$e),$e.programs=Te.programs,v.capabilities=Le,v.extensions=Ce,v.properties=Ie,v.renderLists=xe,v.shadowMap=ye,v.state=Pe,v.info=$e}he();const K=new w6(v,b);this.xr=K,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(D,O,!1))},this.getSize=function(w){return w.set(D,O)},this.setSize=function(w,N,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,O=N,n.width=Math.floor(w*Y),n.height=Math.floor(N*Y),X===!0&&(n.style.width=w+"px",n.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(D*Y,O*Y).floor()},this.setDrawingBufferSize=function(w,N,X){D=w,O=N,Y=X,n.width=Math.floor(w*X),n.height=Math.floor(N*X),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,N,X,j){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,N,X,j),Pe.viewport(y.copy(q).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,N,X,j){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,N,X,j),Pe.scissor(M.copy(ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){Pe.setScissorTest(_e=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(w=!0,N=!0,X=!0){let j=0;if(w){let U=!1;if(T!==null){const oe=T.texture.format;U=oe===Cp||oe===Rp||oe===Ap}if(U){const oe=T.texture.type,de=oe===Xi||oe===as||oe===Xa||oe===To||oe===wp||oe===Tp,Me=Fe.getClearColor(),we=Fe.getClearAlpha(),Ne=Me.r,Ue=Me.g,Ae=Me.b;de?(p[0]=Ne,p[1]=Ue,p[2]=Ae,p[3]=we,b.clearBufferuiv(b.COLOR,0,p)):(m[0]=Ne,m[1]=Ue,m[2]=Ae,m[3]=we,b.clearBufferiv(b.COLOR,0,m))}else j|=b.COLOR_BUFFER_BIT}N&&(j|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(j|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Qe.dispose(),Ie.dispose(),E.dispose(),G.dispose(),Q.dispose(),ut.dispose(),I.dispose(),Te.dispose(),K.dispose(),K.removeEventListener("sessionstart",Xp),K.removeEventListener("sessionend",jp),Dr.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=$e.autoReset,N=ye.enabled,X=ye.autoUpdate,j=ye.needsUpdate,U=ye.type;he(),$e.autoReset=w,ye.enabled=N,ye.autoUpdate=X,ye.needsUpdate=j,ye.type=U}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const N=w.target;N.removeEventListener("dispose",Ke),Pt(N)}function Pt(w){fn(w),Ie.remove(w)}function fn(w){const N=Ie.get(w).programs;N!==void 0&&(N.forEach(function(X){Te.releaseProgram(X)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,X,j,U,oe){N===null&&(N=ze);const de=U.isMesh&&U.matrixWorld.determinant()<0,Me=b3(w,N,X,j,U);Pe.setMaterial(j,de);let we=X.index,Ne=1;if(j.wireframe===!0){if(we=ie.getWireframeAttribute(X),we===void 0)return;Ne=2}const Ue=X.drawRange,Ae=X.attributes.position;let ot=Ue.start*Ne,ht=(Ue.start+Ue.count)*Ne;oe!==null&&(ot=Math.max(ot,oe.start*Ne),ht=Math.min(ht,(oe.start+oe.count)*Ne)),we!==null?(ot=Math.max(ot,0),ht=Math.min(ht,we.count)):Ae!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,Ae.count));const wt=ht-ot;if(wt<0||wt===1/0)return;ut.setup(U,j,Me,X,we);let yn,it=Se;if(we!==null&&(yn=ee.get(we),it=qe,it.setIndex(yn)),U.isMesh)j.wireframe===!0?(Pe.setLineWidth(j.wireframeLinewidth*me()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(U.isLine){let Re=j.linewidth;Re===void 0&&(Re=1),Pe.setLineWidth(Re*me()),U.isLineSegments?it.setMode(b.LINES):U.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else U.isPoints?it.setMode(b.POINTS):U.isSprite&&it.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Re=U._multiDrawStarts,Ht=U._multiDrawCounts,rt=U._multiDrawCount,Yn=we?ee.get(we).bytesPerElement:1,vs=Ie.get(j).currentProgram.getUniforms();for(let Sn=0;Sn<rt;Sn++)vs.setValue(b,"_gl_DrawID",Sn),it.render(Re[Sn]/Yn,Ht[Sn])}else if(U.isInstancedMesh)it.renderInstances(ot,wt,U.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ht=Math.min(X.instanceCount,Re);it.renderInstances(ot,wt,Ht)}else it.render(ot,wt)};function tt(w,N,X){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,cl(w,N,X),w.side=Tr,w.needsUpdate=!0,cl(w,N,X),w.side=vi):cl(w,N,X)}this.compile=function(w,N,X=null){X===null&&(X=w),g=Qe.get(X),g.init(N),_.push(g),X.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),w!==X&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights();const j=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const Me=oe[de];tt(Me,X,U),j.add(Me)}else tt(oe,X,U),j.add(oe)}),_.pop(),g=null,j},this.compileAsync=function(w,N,X=null){const j=this.compile(w,N,X);return new Promise(U=>{function oe(){if(j.forEach(function(de){Ie.get(de).currentProgram.isReady()&&j.delete(de)}),j.size===0){U(w);return}setTimeout(oe,10)}Ce.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let dn=null;function Mi(w){dn&&dn(w)}function Xp(){Dr.stop()}function jp(){Dr.start()}const Dr=new L2;Dr.setAnimationLoop(Mi),typeof self<"u"&&Dr.setContext(self),this.setAnimationLoop=function(w){dn=w,K.setAnimationLoop(w),w===null?Dr.stop():Dr.start()},K.addEventListener("sessionstart",Xp),K.addEventListener("sessionend",jp),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,T),g=Qe.get(w,_.length),g.init(N),_.push(g),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),be.setFromProjectionMatrix(le),J=this.localClippingEnabled,B=se.init(this.clippingPlanes,J),x=xe.get(w,h.length),x.init(),h.push(x),K.enabled===!0&&K.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&qu(oe,N,-1/0,v.sortObjects)}qu(w,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,Z),nt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,nt&&Fe.addToRenderList(x,w),this.info.render.frame++,B===!0&&se.beginShadows();const X=g.state.shadowsArray;ye.render(X,w,N),B===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,U=x.transmissive;if(g.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let de=0,Me=oe.length;de<Me;de++){const we=oe[de];qp(j,U,w,we)}nt&&Fe.render(w);for(let de=0,Me=oe.length;de<Me;de++){const we=oe[de];$p(x,w,we,we.viewport)}}else U.length>0&&qp(j,U,w,N),nt&&Fe.render(w),$p(x,w,N);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,N),ut.resetDefaultState(),R=-1,z=null,_.pop(),_.length>0?(g=_[_.length-1],B===!0&&se.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function qu(w,N,X,j){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||be.intersectsSprite(w)){j&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const de=Q.update(w),Me=w.material;Me.visible&&x.push(w,de,Me,X,V.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||be.intersectsObject(w))){const de=Q.update(w),Me=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),V.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),V.copy(de.boundingSphere.center)),V.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(Me)){const we=de.groups;for(let Ne=0,Ue=we.length;Ne<Ue;Ne++){const Ae=we[Ne],ot=Me[Ae.materialIndex];ot&&ot.visible&&x.push(w,de,ot,X,V.z,Ae)}}else Me.visible&&x.push(w,de,Me,X,V.z,null)}}const oe=w.children;for(let de=0,Me=oe.length;de<Me;de++)qu(oe[de],N,X,j)}function $p(w,N,X,j){const U=w.opaque,oe=w.transmissive,de=w.transparent;g.setupLightsView(X),B===!0&&se.setGlobalState(v.clippingPlanes,X),j&&Pe.viewport(y.copy(j)),U.length>0&&ll(U,N,X),oe.length>0&&ll(oe,N,X),de.length>0&&ll(de,N,X),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function qp(w,N,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new ls(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?rl:Xi,minFilter:Kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const oe=g.state.transmissionRenderTarget[j.id],de=j.viewport||y;oe.setSize(de.z,de.w);const Me=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(k),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Fe.render(X);const we=v.toneMapping;v.toneMapping=Mr;const Ne=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),B===!0&&se.setGlobalState(v.clippingPlanes,j),ll(w,X,j),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ae=0,ot=N.length;Ae<ot;Ae++){const ht=N[Ae],wt=ht.object,yn=ht.geometry,it=ht.material,Re=ht.group;if(it.side===vi&&wt.layers.test(j.layers)){const Ht=it.side;it.side=an,it.needsUpdate=!0,Yp(wt,X,j,yn,it,Re),it.side=Ht,it.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}v.setRenderTarget(Me),v.setClearColor(k,$),Ne!==void 0&&(j.viewport=Ne),v.toneMapping=we}function ll(w,N,X){const j=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=w.length;U<oe;U++){const de=w[U],Me=de.object,we=de.geometry,Ne=j===null?de.material:j,Ue=de.group;Me.layers.test(X.layers)&&Yp(Me,N,X,we,Ne,Ue)}}function Yp(w,N,X,j,U,oe){w.onBeforeRender(v,N,X,j,U,oe),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,N,X,j,w,oe),U.transparent===!0&&U.side===vi&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,v.renderBufferDirect(X,N,j,U,w,oe),U.side=Tr,U.needsUpdate=!0,v.renderBufferDirect(X,N,j,U,w,oe),U.side=vi):v.renderBufferDirect(X,N,j,U,w,oe),w.onAfterRender(v,N,X,j,U,oe)}function cl(w,N,X){N.isScene!==!0&&(N=ze);const j=Ie.get(w),U=g.state.lights,oe=g.state.shadowsArray,de=U.state.version,Me=Te.getParameters(w,U.state,oe,N,X),we=Te.getProgramCacheKey(Me);let Ne=j.programs;j.environment=w.isMeshStandardMaterial?N.environment:null,j.fog=N.fog,j.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Ke),Ne=new Map,j.programs=Ne);let Ue=Ne.get(we);if(Ue!==void 0){if(j.currentProgram===Ue&&j.lightsStateVersion===de)return Zp(w,Me),Ue}else Me.uniforms=Te.getUniforms(w),w.onBeforeCompile(Me,v),Ue=Te.acquireProgram(Me,we),Ne.set(we,Ue),j.uniforms=Me.uniforms;const Ae=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=se.uniform),Zp(w,Me),j.needsLights=D3(w),j.lightsStateVersion=de,j.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),j.currentProgram=Ue,j.uniformsList=null,Ue}function Kp(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Pc.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Zp(w,N){const X=Ie.get(w);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function b3(w,N,X,j,U){N.isScene!==!0&&(N=ze),C.resetTextureUnits();const oe=N.fog,de=j.isMeshStandardMaterial?N.environment:null,Me=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:br,we=(j.isMeshStandardMaterial?G:E).get(j.envMap||de),Ne=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ae=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,ht=!!X.morphAttributes.color;let wt=Mr;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=v.toneMapping);const yn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=yn!==void 0?yn.length:0,Re=Ie.get(j),Ht=g.state.lights;if(B===!0&&(J===!0||w!==z)){const Dn=w===z&&j.id===R;se.setState(j,w,Dn)}let rt=!1;j.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ht.state.version||Re.outputColorSpace!==Me||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==we||j.fog===!0&&Re.fog!==oe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Ue||Re.morphTargets!==Ae||Re.morphNormals!==ot||Re.morphColors!==ht||Re.toneMapping!==wt||Re.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Re.__version=j.version);let Yn=Re.currentProgram;rt===!0&&(Yn=cl(j,N,U));let vs=!1,Sn=!1,Yu=!1;const At=Yn.getUniforms(),Yi=Re.uniforms;if(Pe.useProgram(Yn.program)&&(vs=!0,Sn=!0,Yu=!0),j.id!==R&&(R=j.id,Sn=!0),vs||z!==w){Le.reverseDepthBuffer?(ae.copy(w.projectionMatrix),gM(ae),vM(ae),At.setValue(b,"projectionMatrix",ae)):At.setValue(b,"projectionMatrix",w.projectionMatrix),At.setValue(b,"viewMatrix",w.matrixWorldInverse);const Dn=At.map.cameraPosition;Dn!==void 0&&Dn.setValue(b,De.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,Sn=!0,Yu=!0)}if(U.isSkinnedMesh){At.setOptional(b,U,"bindMatrix"),At.setOptional(b,U,"bindMatrixInverse");const Dn=U.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),At.setValue(b,"boneTexture",Dn.boneTexture,C))}U.isBatchedMesh&&(At.setOptional(b,U,"batchingTexture"),At.setValue(b,"batchingTexture",U._matricesTexture,C),At.setOptional(b,U,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",U._indirectTexture,C),At.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",U._colorsTexture,C));const Ku=X.morphAttributes;if((Ku.position!==void 0||Ku.normal!==void 0||Ku.color!==void 0)&&Oe.update(U,X,Yn),(Sn||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,At.setValue(b,"receiveShadow",U.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yi.envMap.value=we,Yi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&N.environment!==null&&(Yi.envMapIntensity.value=N.environmentIntensity),Sn&&(At.setValue(b,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&L3(Yi,Yu),oe&&j.fog===!0&&ue.refreshFogUniforms(Yi,oe),ue.refreshMaterialUniforms(Yi,j,Y,O,g.state.transmissionRenderTarget[w.id]),Pc.upload(b,Kp(Re),Yi,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Pc.upload(b,Kp(Re),Yi,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(b,"center",U.center),At.setValue(b,"modelViewMatrix",U.modelViewMatrix),At.setValue(b,"normalMatrix",U.normalMatrix),At.setValue(b,"modelMatrix",U.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Dn=j.uniformsGroups;for(let Zu=0,I3=Dn.length;Zu<I3;Zu++){const Jp=Dn[Zu];I.update(Jp,Yn),I.bind(Jp,Yn)}}return Yn}function L3(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function D3(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,N,X){Ie.get(w.texture).__webglTexture=N,Ie.get(w.depthTexture).__webglTexture=X;const j=Ie.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const X=Ie.get(w);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,X=0){T=w,P=N,A=X;let j=!0,U=null,oe=!1,de=!1;if(w){const we=Ie.get(w);if(we.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(b.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(we.__hasExternalTextures)C.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ae=w.depthTexture;if(we.__boundDepthTexture!==Ae){if(Ae!==null&&Ie.has(Ae)&&(w.width!==Ae.image.width||w.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(de=!0);const Ue=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][X]:U=Ue[N],oe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?U=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[X]:U=Ue,y.copy(w.viewport),M.copy(w.scissor),W=w.scissorTest}else y.copy(q).multiplyScalar(Y).floor(),M.copy(ne).multiplyScalar(Y).floor(),W=_e;if(Pe.bindFramebuffer(b.FRAMEBUFFER,U)&&j&&Pe.drawBuffers(w,U),Pe.viewport(y),Pe.scissor(M),Pe.setScissorTest(W),oe){const we=Ie.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,X)}else if(de){const we=Ie.get(w.texture),Ne=N||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Ne)}R=-1},this.readRenderTargetPixels=function(w,N,X,j,U,oe,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){Pe.bindFramebuffer(b.FRAMEBUFFER,Me);try{const we=w.texture,Ne=we.format,Ue=we.type;if(!Le.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-j&&X>=0&&X<=w.height-U&&b.readPixels(N,X,j,U,ke.convert(Ne),ke.convert(Ue),oe)}finally{const we=T!==null?Ie.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(b.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,N,X,j,U,oe,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){const we=w.texture,Ne=we.format,Ue=we.type;if(!Le.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-j&&X>=0&&X<=w.height-U){Pe.bindFramebuffer(b.FRAMEBUFFER,Me);const Ae=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ae),b.bufferData(b.PIXEL_PACK_BUFFER,oe.byteLength,b.STREAM_READ),b.readPixels(N,X,j,U,ke.convert(Ne),ke.convert(Ue),0);const ot=T!==null?Ie.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(b.FRAMEBUFFER,ot);const ht=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await mM(b,ht,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ae),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,oe),b.deleteBuffer(Ae),b.deleteSync(ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,X=0){w.isTexture!==!0&&(Cc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-X),U=Math.floor(w.image.width*j),oe=Math.floor(w.image.height*j),de=N!==null?N.x:0,Me=N!==null?N.y:0;C.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,X,0,0,de,Me,U,oe),Pe.unbindTexture()},this.copyTextureToTexture=function(w,N,X=null,j=null,U=0){w.isTexture!==!0&&(Cc("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,X=null);let oe,de,Me,we,Ne,Ue;X!==null?(oe=X.max.x-X.min.x,de=X.max.y-X.min.y,Me=X.min.x,we=X.min.y):(oe=w.image.width,de=w.image.height,Me=0,we=0),j!==null?(Ne=j.x,Ue=j.y):(Ne=0,Ue=0);const Ae=ke.convert(N.format),ot=ke.convert(N.type);C.setTexture2D(N,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=b.getParameter(b.UNPACK_ROW_LENGTH),wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),Re=b.getParameter(b.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[U]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Me),b.pixelStorei(b.UNPACK_SKIP_ROWS,we),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,U,Ne,Ue,oe,de,Ae,ot,Ht.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,U,Ne,Ue,Ht.width,Ht.height,Ae,Ht.data):b.texSubImage2D(b.TEXTURE_2D,U,Ne,Ue,oe,de,Ae,ot,Ht),b.pixelStorei(b.UNPACK_ROW_LENGTH,ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Re),U===0&&N.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,N,X=null,j=null,U=0){w.isTexture!==!0&&(Cc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0);let oe,de,Me,we,Ne,Ue,Ae,ot,ht;const wt=w.isCompressedTexture?w.mipmaps[U]:w.image;X!==null?(oe=X.max.x-X.min.x,de=X.max.y-X.min.y,Me=X.max.z-X.min.z,we=X.min.x,Ne=X.min.y,Ue=X.min.z):(oe=wt.width,de=wt.height,Me=wt.depth,we=0,Ne=0,Ue=0),j!==null?(Ae=j.x,ot=j.y,ht=j.z):(Ae=0,ot=0,ht=0);const yn=ke.convert(N.format),it=ke.convert(N.type);let Re;if(N.isData3DTexture)C.setTexture3D(N,0),Re=b.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Re=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const Ht=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Yn=b.getParameter(b.UNPACK_SKIP_PIXELS),vs=b.getParameter(b.UNPACK_SKIP_ROWS),Sn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ne),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ue),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Re,U,Ae,ot,ht,oe,de,Me,yn,it,wt.data):N.isCompressedArrayTexture?b.compressedTexSubImage3D(Re,U,Ae,ot,ht,oe,de,Me,yn,wt.data):b.texSubImage3D(Re,U,Ae,ot,ht,oe,de,Me,yn,it,wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,vs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Sn),U===0&&N.generateMipmaps&&b.generateMipmap(Re),Pe.unbindTexture()},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Pe.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Pp?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Vu?"display-p3":"srgb"}}class P6 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class b6{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new F;class cu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=si(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=si(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=si(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=si(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new sn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class O2 extends gs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Is;const Jo=new F,Ns=new F,Us=new F,Fs=new Xe,Qo=new Xe,z2=new xt,ql=new F,ea=new F,Yl=new F,i1=new Xe,e0=new Xe,r1=new Xe;class L6 extends Jt{constructor(e=new O2){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new kt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new b6(n,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new cu(i,3,0,!1)),Is.setAttribute("uv",new cu(i,2,3,!1))}this.geometry=Is,this.material=e,this.center=new Xe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),z2.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Kl(ql.set(-.5,-.5,0),Us,o,Ns,r,s),Kl(ea.set(.5,-.5,0),Us,o,Ns,r,s),Kl(Yl.set(.5,.5,0),Us,o,Ns,r,s),i1.set(0,0),e0.set(1,0),r1.set(1,1);let a=e.ray.intersectTriangle(ql,ea,Yl,!1,Jo);if(a===null&&(Kl(ea.set(-.5,.5,0),Us,o,Ns,r,s),e0.set(0,1),a=e.ray.intersectTriangle(ql,Yl,ea,!1,Jo),a===null))return;const l=e.ray.origin.distanceTo(Jo);l<e.near||l>e.far||n.push({distance:l,point:Jo.clone(),uv:zn.getInterpolation(Jo,ql,ea,Yl,i1,e0,r1,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Kl(t,e,n,i,r,s){Fs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Qo.x=s*Fs.x-r*Fs.y,Qo.y=r*Fs.x+s*Fs.y):Qo.copy(Fs),t.copy(e),t.x+=Qo.x,t.y+=Qo.y,t.applyMatrix4(z2)}class ks extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new F,fu=new F,s1=new xt,ta=new Gu,Zl=new ol,t0=new F,o1=new F;class qd extends Jt{constructor(e=new kt,n=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)uu.fromBufferAttribute(n,r-1),fu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(r),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;s1.copy(r).invert(),ta.copy(e.ray).applyMatrix4(s1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const h=u.getX(x),_=u.getX(x+1),v=Jl(this,e,ta,l,h,_);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(m-1),g=u.getX(p),h=Jl(this,e,ta,l,x,g);h&&n.push(h)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const h=Jl(this,e,ta,l,x,x+1);h&&n.push(h)}if(this.isLineLoop){const x=Jl(this,e,ta,l,m-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(uu.fromBufferAttribute(o,r),fu.fromBufferAttribute(o,s),n.distanceSqToSegment(uu,fu,t0,o1)>i)return;t0.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(t0);if(!(l<e.near||l>e.far))return{distance:l,point:o1.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class n0 extends qd{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class D6 extends gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const a1=new xt,Yd=new Gu,Ql=new ol,ec=new F;class I6 extends Jt{constructor(e=new kt,n=new D6){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;a1.copy(r).invert(),Yd.copy(e.ray).applyMatrix4(a1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,x=p;m<x;m++){const g=c.getX(m);ec.fromBufferAttribute(d,g),l1(ec,g,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,x=p;m<x;m++)ec.fromBufferAttribute(d,m),l1(ec,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function l1(t,e,n,i,r,s,o){const a=Yd.distanceSqToPoint(t);if(a<n){const l=new F;Yd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class N6 extends ln{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ip extends kt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new F,m=new Xe;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){const h=s+g/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,u.push(m.x,m.y)}d+=f}for(let x=0;x<r;x++){const g=x*(i+1);for(let h=0;h<i;h++){const _=h+g,v=_,S=_+i+1,P=_+i+2,A=_+1;a.push(v,S,A),a.push(S,P,A)}}this.setIndex(a),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(c,3)),this.setAttribute("uv",new _n(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Np extends kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new F,f=new F,p=[],m=[],x=[],g=[];for(let h=0;h<=i;h++){const _=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const A=P/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(A+S,1-v),_.push(c++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const v=u[h][_+1],S=u[h][_],P=u[h+1][_],A=u[h+1][_+1];(h!==0||o>0)&&p.push(v,S,A),(h!==i-1||l<Math.PI)&&p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _n(m,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Np(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const c1=new xt;class U6{constructor(e,n,i=0,r=1/0){this.ray=new Gu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return c1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(c1),this}intersectObject(e,n=!0,i=[]){return Kd(e,this,i,n),i.sort(u1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kd(e[r],this,i,n);return i.sort(u1),i}}function u1(t,e){return t.distance-e.distance}function Kd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Kd(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);const li=Math.PI/180,Zd=180/Math.PI;function k2(t){return Math.max(-1,Math.min(1,t))}function f1(t,e,n,i){const r=(i-e)*li;let s=((n-t+540)%360-180)*li;const o=Math.sin(r/2),a=Math.sin(s/2),l=o*o+Math.cos(e*li)*Math.cos(i*li)*a*a;return 2*Math.asin(k2(Math.sqrt(l)))*Zd}function Up(t,e,n,i){const r=i*li,s=n*li,o=e*li,a=t*li,l=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),c=Math.asin(k2(l)),u=Math.sin(s)*Math.sin(r)*Math.cos(o),d=Math.cos(r)-Math.sin(o)*l;return[((a+Math.atan2(u,d))*Zd%360+360)%360,c*Zd]}function F6(t,e,n,i=128){const r=[];for(let s=0;s<=i;s++)r.push(Up(t,e,360*s/i,n));return r}function Fp(t){const n=(t%360+360)%360/15,i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${String(i).padStart(2,"0")}h${String(r).padStart(2,"0")}m${String(s%60).padStart(2,"0")}s`}function Op(t){const e=t<0?"−":"+";let n=Math.abs(t);const i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${e}${String(i).padStart(2,"0")}°${String(r).padStart(2,"0")}′${String(s%60).padStart(2,"0")}″`}function d1(t){return["北","东北","东","东南","南","西南","西","西北"][Math.round((t%360+360)%360/45)%8]}const ir=1;function O6(t){return t.kind==="sun"?new We(16765565):t.kind==="moon"?new We(14673650):t.kind==="planet"?new We(10406911):new We(16777215)}function h1(t){return t==="sun"||t==="moon"?"diamond":t==="planet"?"square":"circle"}function z6(t){var f;const{sky:e,fov:n,horizonClip:i,showGraticule:r,annotations:s,selectedId:o,hoverId:a}=t,l=Ge.useRef(null),c=Ge.useRef(null),[u,d]=Ge.useState(null);return Ge.useEffect(()=>{if(l.current)try{const p=new k6(l.current,t);return c.current=p,()=>{p.dispose(),c.current=null}}catch{d("当前环境无法初始化 WebGL，三维球面视图不可用（右侧两种投影不受影响）。")}},[]),Ge.useEffect(()=>{var p;(p=c.current)==null||p.update(t)}),Ge.useEffect(()=>{var m;if(!t.focusToken)return;const p=e.targets.find(x=>x.id===t.focusToken.id);p&&((m=c.current)==null||m.flyTo(p.hx,p.hy,p.hz))},[(f=t.focusToken)==null?void 0:f.nonce]),H.jsxs("div",{className:"globe-wrap",children:[u?H.jsx("div",{className:"globe-mount globe-error",children:u}):H.jsx("div",{ref:l,className:"globe-mount"}),H.jsxs("div",{className:"globe-hint",children:["拖拽旋转 · 滚轮缩放 · 点击星点定位（与右侧两图联动）",H.jsx("br",{}),"地平坐标系：红圈=地平（N/E/S/W），绿圈=视场（角半径 ",n.radiusDeg.toFixed(1),"°），网格=J2000 赤道坐标",i?" · 已开启地平线裁切":""]})]})}class k6{constructor(e,n){et(this,"renderer");et(this,"scene");et(this,"camera");et(this,"raf",0);et(this,"mount");et(this,"resizeObs");et(this,"points");et(this,"pointMaterial");et(this,"fovLine");et(this,"horizonLine");et(this,"groundDisc");et(this,"graticuleGroup",new Zr);et(this,"equatorLine",null);et(this,"highlight");et(this,"labelsGroup",new Zr);et(this,"annotationsGroup",new Zr);et(this,"raycaster",new U6);et(this,"pickSphere");et(this,"drag",{active:!1,x:0,y:0,moved:0});et(this,"camDir",new F(0,0,1));et(this,"camTargetDir",new F(0,0,1));et(this,"props");et(this,"positionData",[]);et(this,"disposed",!1);et(this,"cleanupEvents",()=>{});et(this,"everMoved",!1);et(this,"animate",()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.camDir.lerp(this.camTargetDir,.12).normalize(),this.camera.lookAt(this.camDir.clone().multiplyScalar(ir)),this.camera.up.set(0,0,1),this.renderer.render(this.scene,this.camera))});this.mount=e,this.props=n,this.renderer=new C6({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.scene=new P6,this.scene.background=new We(461332),this.camera=new On(60,1,.01,10),this.camera.position.set(0,0,1e-4),this.camera.up.set(0,0,1),this.camera.lookAt(this.camDir),this.pickSphere=new ai(new Np(ir,48,32),new lu({visible:!1,side:an})),this.scene.add(this.pickSphere),this.highlight=new ai(new Ip(.022,.032,32),new lu({color:16766282,side:vi,transparent:!0,opacity:.95})),this.highlight.visible=!1,this.scene.add(this.highlight),this.scene.add(this.graticuleGroup),this.scene.add(this.labelsGroup),this.scene.add(this.annotationsGroup),this.initStars(),this.initStaticFrames(),this.resize(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.bindEvents(),this.update(n),this.animate()}initStars(){const n=new kt,i=new Float32Array(256*3),r=new Float32Array(256),s=new Float32Array(256*3),o=new Float32Array(256);n.setAttribute("position",new sn(i,3)),n.setAttribute("aSize",new sn(r,1)),n.setAttribute("aColor",new sn(s,3)),n.setAttribute("aShape",new sn(o,1)),n.setDrawRange(0,0),this.pointMaterial=new $i({transparent:!0,depthWrite:!1,uniforms:{uPxRatio:{value:this.renderer.getPixelRatio()}},vertexShader:`
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
        }`}),this.points=new I6(n,this.pointMaterial),this.points.frustumCulled=!1,this.scene.add(this.points)}makeLine(e,n,i=1){const r=new kt().setFromPoints(e),s=new ks({color:n,transparent:i<1,opacity:i});return new n0(r,s)}initStaticFrames(){const e=[];for(let r=0;r<128;r++){const s=2*Math.PI*r/128;e.push(new F(Math.cos(s),-Math.sin(s),0))}this.horizonLine=new n0(new kt().setFromPoints(e),new ks({color:16735581})),this.scene.add(this.horizonLine);const n=[];for(let r=0;r<=128;r++){const s=2*Math.PI*r/128;n.push(new F(Math.cos(s)*ir,-Math.sin(s)*ir,-.002))}this.groundDisc=new qd(new kt().setFromPoints([...n,new F(0,0,-ir*.98),n[0]]),new ks({color:16735581,transparent:!0,opacity:.25})),this.scene.add(this.groundDisc);const i=[["N 北",1,0,0],["E 东",0,-1,0],["S 南",-1,0,0],["W 西",0,1,0]];for(const[r,s,o,a]of i)this.labelsGroup.add(this.makeTextSprite(r,new F(s,o,a),"#ff8a8a"));this.labelsGroup.add(this.makeTextSprite("天顶 Z",new F(0,0,1),"#9fd0ff")),this.labelsGroup.add(this.makeTextSprite("天底",new F(0,0,-1),"#8a6a6a"))}makeTextSprite(e,n,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.font="28px sans-serif",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(e,128,32);const o=new N6(r),a=new O2({map:o,transparent:!0,depthTest:!1,depthWrite:!1}),l=new L6(a);return l.position.copy(n.clone().multiplyScalar(ir*1.01)),l.scale.set(.09,.0225,1),l}bindEvents(){const e=this.renderer.domElement;e.style.cursor="grab";const n=o=>{this.drag={active:!0,x:o.clientX,y:o.clientY,moved:0},e.setPointerCapture(o.pointerId),e.style.cursor="grabbing"},i=o=>{const a=e.getBoundingClientRect();if(this.drag.active){const l=o.clientX-this.drag.x,c=o.clientY-this.drag.y;this.drag.moved+=Math.abs(l)+Math.abs(c),this.drag.x=o.clientX,this.drag.y=o.clientY,this.orbit(l,c)}else{const l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onHover(l),e.style.cursor=l?"pointer":"grab"}},r=o=>{if(this.drag.active&&this.drag.moved<5){const a=e.getBoundingClientRect(),l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onSelect(l)}this.drag.active=!1,e.style.cursor="grab"},s=o=>{o.preventDefault();const a=mg.clamp(this.camera.fov+o.deltaY*.05,8,100);this.camera.fov=a,this.camera.updateProjectionMatrix()};e.addEventListener("pointerdown",n),e.addEventListener("pointermove",i),window.addEventListener("pointerup",r),e.addEventListener("wheel",s,{passive:!1}),this.cleanupEvents=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),e.removeEventListener("wheel",s)}}orbit(e,n){const r=this.camDir,s=new F(0,0,1),o=new F().crossVectors(s,r).normalize(),a=new cs().setFromAxisAngle(s,-e*.25*Math.PI/180),l=new cs().setFromAxisAngle(o,-n*.25*Math.PI/180);r.applyQuaternion(a).applyQuaternion(l).normalize(),Math.abs(r.z)>.999&&(r.z=Math.sign(r.z)*.999,r.normalize()),this.camTargetDir.copy(r),this.everMoved=!0}pick(e,n){const i=this.renderer.domElement.getBoundingClientRect(),r=new Xe(e/i.width*2-1,-(n/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera),this.raycaster;let s=null;for(const o of this.positionData){const a=o.vec,l=a.dot(this.camDir);if(l<=0)continue;const c=a.clone().project(this.camera),u=(c.x+1)/2*i.width,d=(-c.y+1)/2*i.height,f=(r.x+1)/2*i.width,p=(-r.y+1)/2*i.height;Math.hypot(u-f,d-p)<10&&(!s||l>s.dot)&&(s={id:o.id,dot:l})}return(s==null?void 0:s.id)??null}flyTo(e,n,i){this.camTargetDir.set(e,n,i).normalize(),this.camera.fov=35,this.camera.updateProjectionMatrix()}updateStars(e,n){const i=e.targets.filter(u=>u.inFov&&u.passesMag&&(!n||u.aboveHorizon)),r=this.points.geometry.getAttribute("position").count,s=Math.min(i.length,r),o=this.points.geometry.getAttribute("position"),a=this.points.geometry.getAttribute("aSize"),l=this.points.geometry.getAttribute("aColor"),c=this.points.geometry.getAttribute("aShape");this.positionData=[];for(let u=0;u<s;u++){const d=i[u],f=new F(d.hx,d.hy,d.hz).multiplyScalar(ir);o.setXYZ(u,f.x,f.y,f.z);const p=d.id===this.props.selectedId||d.id===this.props.hoverId;let m=mg.clamp(2.6-d.mag*.28,.5,3.4)*.012;d.kind!=="star"&&(m=Math.max(m,.04)),p&&(m*=1.6),a.setX(u,m);const x=O6(d);l.setXYZ(u,x.r,x.g,x.b),c.setX(u,h1(d.kind)==="circle"?0:h1(d.kind)==="square"?1:2),this.positionData.push({id:d.id,vec:new F(d.hx,d.hy,d.hz)})}this.points.geometry.setDrawRange(0,s),o.needsUpdate=!0,a.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0}update(e){this.props=e,this.updateStars(e.sky,e.horizonClip),this.rebuildFovCircle(e),this.graticuleGroup.visible=e.showGraticule,this.rebuildGraticuleContent(e),this.rebuildAnnotations(e);const n=e.selectedId?e.sky.targets.find(i=>i.id===e.selectedId):null;if(n?(this.highlight.visible=!0,this.highlight.position.set(n.hx,n.hy,n.hz),this.highlight.lookAt(0,0,0)):this.highlight.visible=!1,!this.everMoved){const i=this.centerVec(e);this.camDir.copy(i),this.camTargetDir.copy(i)}}centerVec(e){const n=e.sky.centerAz*li,i=e.sky.centerAlt*li;return new F(Math.cos(i)*Math.cos(n),-Math.cos(i)*Math.sin(n),Math.sin(i)).normalize()}rebuildFovCircle(e){this.fovLine&&(this.scene.remove(this.fovLine),this.fovLine.geometry.dispose());const n=this.centerVec(e),i=e.fov.radiusDeg*li,r=Math.abs(n.z)<.9?new F(0,0,1):new F(1,0,0),s=new F().crossVectors(r,n).normalize(),o=new F().crossVectors(n,s).normalize(),a=[];for(let l=0;l<128;l++){const c=2*Math.PI*l/128,u=n.clone().multiplyScalar(Math.cos(i)).add(s.clone().multiplyScalar(Math.sin(i)*Math.cos(c))).add(o.clone().multiplyScalar(Math.sin(i)*Math.sin(c))).normalize().multiplyScalar(ir*1.002);a.push(u)}this.fovLine=new n0(new kt().setFromPoints(a),new ks({color:5759881})),this.scene.add(this.fovLine)}rebuildGraticuleContent(e){if([...this.graticuleGroup.children].forEach(i=>{var s,o;(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.graticuleGroup.clear(),!e.showGraticule){this.equatorLine&&(this.scene.remove(this.equatorLine),this.equatorLine=null);return}const n=e.graticuleHorizontal;if(n)for(const i of[...n.parallels,...n.meridians]){const r=i.map(([o,a,l])=>new F(o,a,l)),s=new qd(new kt().setFromPoints(r),new ks({color:3820139,transparent:!0,opacity:.7}));this.graticuleGroup.add(s)}}rebuildAnnotations(e){[...this.annotationsGroup.children].forEach(n=>{var r,s,o;const i=n;(r=i.material.map)==null||r.dispose(),(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.annotationsGroup.clear();for(const n of e.annotations){const i=e.sky.targets.find(s=>Math.abs(s.ra-n.ra)<1e-9&&Math.abs(s.dec-n.dec)<1e-9);if(!i)continue;const r=this.makeTextSprite(`📝 ${n.text}`,new F(i.hx,i.hy,i.hz),n.color);this.annotationsGroup.add(r)}}resize(){const e=this.mount.clientWidth||1,n=this.mount.clientHeight||1;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.cleanupEvents(),this.resizeObs.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}}class us{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=n[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(n[i++]=a),e=o}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,s,o=0;if(n>0){for(o=e[--n];n>0&&(i=o,r=e[--n],o=i+r,s=r-(o-i),!s););n>0&&(s<0&&e[n-1]<0||s>0&&e[n-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}function*B6(t){for(const e of t)yield*e}function B2(t){return Array.from(B6(t))}function eo(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,s=new Array(r);++i<r;)s[i]=t+i*n;return s}var Ye=1e-6,Ze=Math.PI,Vn=Ze/2,p1=Ze/4,qn=Ze*2,ei=180/Ze,Gt=Ze/180,vt=Math.abs,H2=Math.atan,Co=Math.atan2,ft=Math.cos,tc=Math.ceil,ct=Math.sin,H6=Math.sign||function(t){return t>0?1:t<0?-1:0},Lr=Math.sqrt;function V2(t){return t>1?0:t<-1?Ze:Math.acos(t)}function Po(t){return t>1?Vn:t<-1?-Vn:Math.asin(t)}function Gn(){}function du(t,e){t&&g1.hasOwnProperty(t.type)&&g1[t.type](t,e)}var m1={Feature:function(t,e){du(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)du(n[i].geometry,e)}},g1={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){Jd(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)Jd(n[i],e,0)},Polygon:function(t,e){v1(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)v1(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)du(n[i],e)}};function Jd(t,e,n){var i=-1,r=t.length-n,s;for(e.lineStart();++i<r;)s=t[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function v1(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)Jd(t[n],e,1);e.polygonEnd()}function Bs(t,e){t&&m1.hasOwnProperty(t.type)?m1[t.type](t,e):du(t,e)}function Qd(t){return[Co(t[1],t[0]),Po(t[2])]}function bo(t){var e=t[0],n=t[1],i=ft(n);return[i*ft(e),i*ct(e),ct(n)]}function nc(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function hu(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function i0(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function ic(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function eh(t){var e=Lr(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function Os(t){return function(){return t}}function th(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function nh(t,e){return vt(t)>Ze&&(t-=Math.round(t/qn)*qn),[t,e]}nh.invert=nh;function G2(t,e,n){return(t%=qn)?e||n?th(x1(t),y1(e,n)):x1(t):e||n?y1(e,n):nh}function _1(t){return function(e,n){return e+=t,vt(e)>Ze&&(e-=Math.round(e/qn)*qn),[e,n]}}function x1(t){var e=_1(t);return e.invert=_1(-t),e}function y1(t,e){var n=ft(t),i=ct(t),r=ft(e),s=ct(e);function o(a,l){var c=ft(l),u=ft(a)*c,d=ct(a)*c,f=ct(l),p=f*n+u*i;return[Co(d*r-p*s,u*n-f*i),Po(p*r+d*s)]}return o.invert=function(a,l){var c=ft(l),u=ft(a)*c,d=ct(a)*c,f=ct(l),p=f*r-d*s;return[Co(d*r+f*s,u*n+p*i),Po(p*n-u*i)]},o}function W2(t,e,n,i,r,s){if(n){var o=ft(e),a=ct(e),l=i*n;r==null?(r=e+i*qn,s=e-l/2):(r=S1(o,r),s=S1(o,s),(i>0?r<s:r>s)&&(r+=i*qn));for(var c,u=r;i>0?u>s:u<s;u-=l)c=Qd([o,-a*ft(u),-a*ct(u)]),t.point(c[0],c[1])}}function S1(t,e){e=bo(e),e[0]-=t,eh(e);var n=V2(-e[1]);return((-e[2]<0?-n:n)+qn-Ye)%qn}function zp(){var t=Os([0,0]),e=Os(90),n=Os(2),i,r,s={point:o};function o(l,c){i.push(l=r(l,c)),l[0]*=ei,l[1]*=ei}function a(){var l=t.apply(this,arguments),c=e.apply(this,arguments)*Gt,u=n.apply(this,arguments)*Gt;return i=[],r=G2(-l[0]*Gt,-l[1]*Gt,0).invert,W2(s,c,u,1),l={type:"Polygon",coordinates:[i]},i=r=null,l}return a.center=function(l){return arguments.length?(t=typeof l=="function"?l:Os([+l[0],+l[1]]),a):t},a.radius=function(l){return arguments.length?(e=typeof l=="function"?l:Os(+l),a):e},a.precision=function(l){return arguments.length?(n=typeof l=="function"?l:Os(+l),a):n},a}function X2(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:Gn,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function bc(t,e){return vt(t[0]-e[0])<Ye&&vt(t[1]-e[1])<Ye}function rc(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function j2(t,e,n,i,r){var s=[],o=[],a,l;if(t.forEach(function(m){if(!((x=m.length-1)<=0)){var x,g=m[0],h=m[x],_;if(bc(g,h)){if(!g[2]&&!h[2]){for(r.lineStart(),a=0;a<x;++a)r.point((g=m[a])[0],g[1]);r.lineEnd();return}h[0]+=2*Ye}s.push(_=new rc(g,m,null,!0)),o.push(_.o=new rc(g,null,_,!1)),s.push(_=new rc(h,m,null,!1)),o.push(_.o=new rc(h,null,_,!0))}}),!!s.length){for(o.sort(e),M1(s),M1(o),a=0,l=o.length;a<l;++a)o[a].e=n=!n;for(var c=s[0],u,d;;){for(var f=c,p=!0;f.v;)if((f=f.n)===c)return;u=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(p)for(a=0,l=u.length;a<l;++a)r.point((d=u[a])[0],d[1]);else i(f.x,f.n.x,1,r);f=f.n}else{if(p)for(u=f.p.z,a=u.length-1;a>=0;--a)r.point((d=u[a])[0],d[1]);else i(f.x,f.p.x,-1,r);f=f.p}f=f.o,u=f.z,p=!p}while(!f.v);r.lineEnd()}}}function M1(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function r0(t){return vt(t[0])<=Ze?t[0]:H6(t[0])*((vt(t[0])+Ze)%qn-Ze)}function V6(t,e){var n=r0(e),i=e[1],r=ct(i),s=[ct(n),-ft(n),0],o=0,a=0,l=new us;r===1?i=Vn+Ye:r===-1&&(i=-Vn-Ye);for(var c=0,u=t.length;c<u;++c)if(f=(d=t[c]).length)for(var d,f,p=d[f-1],m=r0(p),x=p[1]/2+p1,g=ct(x),h=ft(x),_=0;_<f;++_,m=S,g=A,h=T,p=v){var v=d[_],S=r0(v),P=v[1]/2+p1,A=ct(P),T=ft(P),R=S-m,z=R>=0?1:-1,y=z*R,M=y>Ze,W=g*A;if(l.add(Co(W*z*ct(y),h*T+W*ft(y))),o+=M?R+z*qn:R,M^m>=n^S>=n){var k=hu(bo(p),bo(v));eh(k);var $=hu(s,k);eh($);var D=(M^R>=0?-1:1)*Po($[2]);(i>D||i===D&&(k[0]||k[1]))&&(a+=M^R>=0?1:-1)}}return(o<-Ye||o<Ye&&l<-1e-12)^a&1}function $2(t,e,n,i){return function(r){var s=e(r),o=X2(),a=e(o),l=!1,c,u,d,f={point:p,lineStart:x,lineEnd:g,polygonStart:function(){f.point=h,f.lineStart=_,f.lineEnd=v,u=[],c=[]},polygonEnd:function(){f.point=p,f.lineStart=x,f.lineEnd=g,u=B2(u);var S=V6(c,i);u.length?(l||(r.polygonStart(),l=!0),j2(u,W6,S,n,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(S,P){t(S,P)&&r.point(S,P)}function m(S,P){s.point(S,P)}function x(){f.point=m,s.lineStart()}function g(){f.point=p,s.lineEnd()}function h(S,P){d.push([S,P]),a.point(S,P)}function _(){a.lineStart(),d=[]}function v(){h(d[0][0],d[0][1]),a.lineEnd();var S=a.clean(),P=o.result(),A,T=P.length,R,z,y;if(d.pop(),c.push(d),d=null,!!T){if(S&1){if(z=P[0],(R=z.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),A=0;A<R;++A)r.point((y=z[A])[0],y[1]);r.lineEnd()}return}T>1&&S&2&&P.push(P.pop().concat(P.shift())),u.push(P.filter(G6))}}return f}}function G6(t){return t.length>1}function W6(t,e){return((t=t.x)[0]<0?t[1]-Vn-Ye:Vn-t[1])-((e=e.x)[0]<0?e[1]-Vn-Ye:Vn-e[1])}const E1=$2(function(){return!0},X6,$6,[-Ze,-Vn]);function X6(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(s,o){var a=s>0?Ze:-Ze,l=vt(s-e);vt(l-Ze)<Ye?(t.point(e,n=(n+o)/2>0?Vn:-Vn),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(s,n),r=0):i!==a&&l>=Ze&&(vt(e-i)<Ye&&(e-=i*Ye),vt(s-a)<Ye&&(s-=a*Ye),n=j6(e,n,s,o),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=s,n=o),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function j6(t,e,n,i){var r,s,o=ct(t-n);return vt(o)>Ye?H2((ct(e)*(s=ft(i))*ct(n)-ct(i)*(r=ft(e))*ct(t))/(r*s*o)):(e+i)/2}function $6(t,e,n,i){var r;if(t==null)r=n*Vn,i.point(-Ze,r),i.point(0,r),i.point(Ze,r),i.point(Ze,0),i.point(Ze,-r),i.point(0,-r),i.point(-Ze,-r),i.point(-Ze,0),i.point(-Ze,r);else if(vt(t[0]-e[0])>Ye){var s=t[0]<e[0]?Ze:-Ze;r=n*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function q6(t){var e=ft(t),n=2*Gt,i=e>0,r=vt(e)>Ye;function s(u,d,f,p){W2(p,t,n,f,u,d)}function o(u,d){return ft(u)*ft(d)>e}function a(u){var d,f,p,m,x;return{lineStart:function(){m=p=!1,x=1},point:function(g,h){var _=[g,h],v,S=o(g,h),P=i?S?0:c(g,h):S?c(g+(g<0?Ze:-Ze),h):0;if(!d&&(m=p=S)&&u.lineStart(),S!==p&&(v=l(d,_),(!v||bc(d,v)||bc(_,v))&&(_[2]=1)),S!==p)x=0,S?(u.lineStart(),v=l(_,d),u.point(v[0],v[1])):(v=l(d,_),u.point(v[0],v[1],2),u.lineEnd()),d=v;else if(r&&d&&i^S){var A;!(P&f)&&(A=l(_,d,!0))&&(x=0,i?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}S&&(!d||!bc(d,_))&&u.point(_[0],_[1]),d=_,p=S,f=P},lineEnd:function(){p&&u.lineEnd(),d=null},clean:function(){return x|(m&&p)<<1}}}function l(u,d,f){var p=bo(u),m=bo(d),x=[1,0,0],g=hu(p,m),h=nc(g,g),_=g[0],v=h-_*_;if(!v)return!f&&u;var S=e*h/v,P=-e*_/v,A=hu(x,g),T=ic(x,S),R=ic(g,P);i0(T,R);var z=A,y=nc(T,z),M=nc(z,z),W=y*y-M*(nc(T,T)-1);if(!(W<0)){var k=Lr(W),$=ic(z,(-y-k)/M);if(i0($,T),$=Qd($),!f)return $;var D=u[0],O=d[0],Y=u[1],L=d[1],Z;O<D&&(Z=D,D=O,O=Z);var q=O-D,ne=vt(q-Ze)<Ye,_e=ne||q<Ye;if(!ne&&L<Y&&(Z=Y,Y=L,L=Z),_e?ne?Y+L>0^$[1]<(vt($[0]-D)<Ye?Y:L):Y<=$[1]&&$[1]<=L:q>Ze^(D<=$[0]&&$[0]<=O)){var be=ic(z,(-y+k)/M);return i0(be,T),[$,Qd(be)]}}}function c(u,d){var f=i?t:Ze-t,p=0;return u<-f?p|=1:u>f&&(p|=2),d<-f?p|=4:d>f&&(p|=8),p}return $2(o,a,s,i?[0,-t]:[-Ze,t-Ze])}function Y6(t,e,n,i,r,s){var o=t[0],a=t[1],l=e[0],c=e[1],u=0,d=1,f=l-o,p=c-a,m;if(m=n-o,!(!f&&m>0)){if(m/=f,f<0){if(m<u)return;m<d&&(d=m)}else if(f>0){if(m>d)return;m>u&&(u=m)}if(m=r-o,!(!f&&m<0)){if(m/=f,f<0){if(m>d)return;m>u&&(u=m)}else if(f>0){if(m<u)return;m<d&&(d=m)}if(m=i-a,!(!p&&m>0)){if(m/=p,p<0){if(m<u)return;m<d&&(d=m)}else if(p>0){if(m>d)return;m>u&&(u=m)}if(m=s-a,!(!p&&m<0)){if(m/=p,p<0){if(m>d)return;m>u&&(u=m)}else if(p>0){if(m<u)return;m<d&&(d=m)}return u>0&&(t[0]=o+u*f,t[1]=a+u*p),d<1&&(e[0]=o+d*f,e[1]=a+d*p),!0}}}}}var ca=1e9,sc=-ca;function K6(t,e,n,i){function r(c,u){return t<=c&&c<=n&&e<=u&&u<=i}function s(c,u,d,f){var p=0,m=0;if(c==null||(p=o(c,d))!==(m=o(u,d))||l(c,u)<0^d>0)do f.point(p===0||p===3?t:n,p>1?i:e);while((p=(p+d+4)%4)!==m);else f.point(u[0],u[1])}function o(c,u){return vt(c[0]-t)<Ye?u>0?0:3:vt(c[0]-n)<Ye?u>0?2:1:vt(c[1]-e)<Ye?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var d=o(c,1),f=o(u,1);return d!==f?d-f:d===0?u[1]-c[1]:d===1?c[0]-u[0]:d===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,d=X2(),f,p,m,x,g,h,_,v,S,P,A,T={point:R,lineStart:W,lineEnd:k,polygonStart:y,polygonEnd:M};function R(D,O){r(D,O)&&u.point(D,O)}function z(){for(var D=0,O=0,Y=p.length;O<Y;++O)for(var L=p[O],Z=1,q=L.length,ne=L[0],_e,be,B=ne[0],J=ne[1];Z<q;++Z)_e=B,be=J,ne=L[Z],B=ne[0],J=ne[1],be<=i?J>i&&(B-_e)*(i-be)>(J-be)*(t-_e)&&++D:J<=i&&(B-_e)*(i-be)<(J-be)*(t-_e)&&--D;return D}function y(){u=d,f=[],p=[],A=!0}function M(){var D=z(),O=A&&D,Y=(f=B2(f)).length;(O||Y)&&(c.polygonStart(),O&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),Y&&j2(f,a,D,s,c),c.polygonEnd()),u=c,f=p=m=null}function W(){T.point=$,p&&p.push(m=[]),P=!0,S=!1,_=v=NaN}function k(){f&&($(x,g),h&&S&&d.rejoin(),f.push(d.result())),T.point=R,S&&u.lineEnd()}function $(D,O){var Y=r(D,O);if(p&&m.push([D,O]),P)x=D,g=O,h=Y,P=!1,Y&&(u.lineStart(),u.point(D,O));else if(Y&&S)u.point(D,O);else{var L=[_=Math.max(sc,Math.min(ca,_)),v=Math.max(sc,Math.min(ca,v))],Z=[D=Math.max(sc,Math.min(ca,D)),O=Math.max(sc,Math.min(ca,O))];Y6(L,Z,t,e,n,i)?(S||(u.lineStart(),u.point(L[0],L[1])),u.point(Z[0],Z[1]),Y||u.lineEnd(),A=!1):Y&&(u.lineStart(),u.point(D,O),A=!1)}_=D,v=O,S=Y}return T}}function w1(t,e,n){var i=eo(t,e-Ye,n).concat(e);return function(r){return i.map(function(s){return[r,s]})}}function T1(t,e,n){var i=eo(t,e-Ye,n).concat(e);return function(r){return i.map(function(s){return[s,r]})}}function Z6(){var t,e,n,i,r,s,o,a,l=10,c=l,u=90,d=360,f,p,m,x,g=2.5;function h(){return{type:"MultiLineString",coordinates:_()}}function _(){return eo(tc(i/u)*u,n,u).map(m).concat(eo(tc(a/d)*d,o,d).map(x)).concat(eo(tc(e/l)*l,t,l).filter(function(v){return vt(v%u)>Ye}).map(f)).concat(eo(tc(s/c)*c,r,c).filter(function(v){return vt(v%d)>Ye}).map(p))}return h.lines=function(){return _().map(function(v){return{type:"LineString",coordinates:v}})},h.outline=function(){return{type:"Polygon",coordinates:[m(i).concat(x(o).slice(1),m(n).reverse().slice(1),x(a).reverse().slice(1))]}},h.extent=function(v){return arguments.length?h.extentMajor(v).extentMinor(v):h.extentMinor()},h.extentMajor=function(v){return arguments.length?(i=+v[0][0],n=+v[1][0],a=+v[0][1],o=+v[1][1],i>n&&(v=i,i=n,n=v),a>o&&(v=a,a=o,o=v),h.precision(g)):[[i,a],[n,o]]},h.extentMinor=function(v){return arguments.length?(e=+v[0][0],t=+v[1][0],s=+v[0][1],r=+v[1][1],e>t&&(v=e,e=t,t=v),s>r&&(v=s,s=r,r=v),h.precision(g)):[[e,s],[t,r]]},h.step=function(v){return arguments.length?h.stepMajor(v).stepMinor(v):h.stepMinor()},h.stepMajor=function(v){return arguments.length?(u=+v[0],d=+v[1],h):[u,d]},h.stepMinor=function(v){return arguments.length?(l=+v[0],c=+v[1],h):[l,c]},h.precision=function(v){return arguments.length?(g=+v,f=w1(s,r,90),p=T1(e,t,g),m=w1(a,o,90),x=T1(i,n,g),h):g},h.extentMajor([[-180,-90+Ye],[180,90-Ye]]).extentMinor([[-180,-80-Ye],[180,80+Ye]])}function J6(){return Z6()()}const ih=t=>t;var s0=new us,rh=new us,q2,Y2,sh,oh,Ii={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){Ii.lineStart=Q6,Ii.lineEnd=t5},polygonEnd:function(){Ii.lineStart=Ii.lineEnd=Ii.point=Gn,s0.add(vt(rh)),rh=new us},result:function(){var t=s0/2;return s0=new us,t}};function Q6(){Ii.point=e5}function e5(t,e){Ii.point=K2,q2=sh=t,Y2=oh=e}function K2(t,e){rh.add(oh*t-sh*e),sh=t,oh=e}function t5(){K2(q2,Y2)}var Lo=1/0,pu=Lo,$a=-Lo,mu=$a,gu={point:n5,lineStart:Gn,lineEnd:Gn,polygonStart:Gn,polygonEnd:Gn,result:function(){var t=[[Lo,pu],[$a,mu]];return $a=mu=-(pu=Lo=1/0),t}};function n5(t,e){t<Lo&&(Lo=t),t>$a&&($a=t),e<pu&&(pu=e),e>mu&&(mu=e)}var ah=0,lh=0,ua=0,vu=0,_u=0,to=0,ch=0,uh=0,fa=0,Z2,J2,_i,xi,kn={point:fs,lineStart:A1,lineEnd:R1,polygonStart:function(){kn.lineStart=s5,kn.lineEnd=o5},polygonEnd:function(){kn.point=fs,kn.lineStart=A1,kn.lineEnd=R1},result:function(){var t=fa?[ch/fa,uh/fa]:to?[vu/to,_u/to]:ua?[ah/ua,lh/ua]:[NaN,NaN];return ah=lh=ua=vu=_u=to=ch=uh=fa=0,t}};function fs(t,e){ah+=t,lh+=e,++ua}function A1(){kn.point=i5}function i5(t,e){kn.point=r5,fs(_i=t,xi=e)}function r5(t,e){var n=t-_i,i=e-xi,r=Lr(n*n+i*i);vu+=r*(_i+t)/2,_u+=r*(xi+e)/2,to+=r,fs(_i=t,xi=e)}function R1(){kn.point=fs}function s5(){kn.point=a5}function o5(){Q2(Z2,J2)}function a5(t,e){kn.point=Q2,fs(Z2=_i=t,J2=xi=e)}function Q2(t,e){var n=t-_i,i=e-xi,r=Lr(n*n+i*i);vu+=r*(_i+t)/2,_u+=r*(xi+e)/2,to+=r,r=xi*t-_i*e,ch+=r*(_i+t),uh+=r*(xi+e),fa+=r*3,fs(_i=t,xi=e)}function e3(t){this._context=t}e3.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,qn);break}}},result:Gn};var fh=new us,o0,t3,n3,da,ha,qa={point:Gn,lineStart:function(){qa.point=l5},lineEnd:function(){o0&&i3(t3,n3),qa.point=Gn},polygonStart:function(){o0=!0},polygonEnd:function(){o0=null},result:function(){var t=+fh;return fh=new us,t}};function l5(t,e){qa.point=i3,t3=da=t,n3=ha=e}function i3(t,e){da-=t,ha-=e,fh.add(Lr(da*da+ha*ha)),da=t,ha=e}let C1,xu,P1,b1;class L1{constructor(e){this._append=e==null?r3:c5(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==P1||this._append!==xu){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,P1=i,xu=this._append,b1=this._,this._=r}this._+=b1;break}}}result(){const e=this._;return this._="",e.length?e:null}}function r3(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function c5(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return r3;if(e!==C1){const n=10**e;C1=e,xu=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}return xu}function u5(t,e){let n=3,i=4.5,r,s;function o(a){return a&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),Bs(a,r(s))),s.result()}return o.area=function(a){return Bs(a,r(Ii)),Ii.result()},o.measure=function(a){return Bs(a,r(qa)),qa.result()},o.bounds=function(a){return Bs(a,r(gu)),gu.result()},o.centroid=function(a){return Bs(a,r(kn)),kn.result()},o.projection=function(a){return arguments.length?(r=a==null?(t=null,ih):(t=a).stream,o):t},o.context=function(a){return arguments.length?(s=a==null?(e=null,new L1(n)):new e3(e=a),typeof i!="function"&&s.pointRadius(i),o):e},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(s.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(s=new L1(n)),o},o.projection(t).digits(n).context(e)}function kp(t){return function(e){var n=new dh;for(var i in t)n[i]=t[i];return n.stream=e,n}}function dh(){}dh.prototype={constructor:dh,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Bp(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),Bs(n,t.stream(gu)),e(gu.result()),i!=null&&t.clipExtent(i),t}function s3(t,e,n){return Bp(t,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([a,l])},n)}function f5(t,e,n){return s3(t,[[0,0],e],n)}function d5(t,e,n){return Bp(t,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];t.scale(150*s).translate([o,a])},n)}function h5(t,e,n){return Bp(t,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([o,a])},n)}var D1=16,p5=ft(30*Gt);function I1(t,e){return+e?g5(t,e):m5(t)}function m5(t){return kp({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function g5(t,e){function n(i,r,s,o,a,l,c,u,d,f,p,m,x,g){var h=c-i,_=u-r,v=h*h+_*_;if(v>4*e&&x--){var S=o+f,P=a+p,A=l+m,T=Lr(S*S+P*P+A*A),R=Po(A/=T),z=vt(vt(A)-1)<Ye||vt(s-d)<Ye?(s+d)/2:Co(P,S),y=t(z,R),M=y[0],W=y[1],k=M-i,$=W-r,D=_*k-h*$;(D*D/v>e||vt((h*k+_*$)/v-.5)>.3||o*f+a*p+l*m<p5)&&(n(i,r,s,o,a,l,M,W,z,S/=T,P/=T,A,x,g),g.point(M,W),n(M,W,z,S,P,A,c,u,d,f,p,m,x,g))}}return function(i){var r,s,o,a,l,c,u,d,f,p,m,x,g={point:h,lineStart:_,lineEnd:S,polygonStart:function(){i.polygonStart(),g.lineStart=P},polygonEnd:function(){i.polygonEnd(),g.lineStart=_}};function h(R,z){R=t(R,z),i.point(R[0],R[1])}function _(){d=NaN,g.point=v,i.lineStart()}function v(R,z){var y=bo([R,z]),M=t(R,z);n(d,f,u,p,m,x,d=M[0],f=M[1],u=R,p=y[0],m=y[1],x=y[2],D1,i),i.point(d,f)}function S(){g.point=h,i.lineEnd()}function P(){_(),g.point=A,g.lineEnd=T}function A(R,z){v(r=R,z),s=d,o=f,a=p,l=m,c=x,g.point=v}function T(){n(d,f,u,p,m,x,s,o,r,a,l,c,D1,i),g.lineEnd=S,S()}return g}}var v5=kp({point:function(t,e){this.stream.point(t*Gt,e*Gt)}});function _5(t){return kp({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function x5(t,e,n,i,r){function s(o,a){return o*=i,a*=r,[e+t*o,n-t*a]}return s.invert=function(o,a){return[(o-e)/t*i,(n-a)/t*r]},s}function N1(t,e,n,i,r,s){if(!s)return x5(t,e,n,i,r);var o=ft(s),a=ct(s),l=o*t,c=a*t,u=o/t,d=a/t,f=(a*n-o*e)/t,p=(a*e+o*n)/t;function m(x,g){return x*=i,g*=r,[l*x-c*g+e,n-c*x-l*g]}return m.invert=function(x,g){return[i*(u*x-d*g+f),r*(p-d*x-u*g)]},m}function o3(t){return y5(function(){return t})()}function y5(t){var e,n=150,i=480,r=250,s=0,o=0,a=0,l=0,c=0,u,d=0,f=1,p=1,m=null,x=E1,g=null,h,_,v,S=ih,P=.5,A,T,R,z,y;function M(D){return R(D[0]*Gt,D[1]*Gt)}function W(D){return D=R.invert(D[0],D[1]),D&&[D[0]*ei,D[1]*ei]}M.stream=function(D){return z&&y===D?z:z=v5(_5(u)(x(A(S(y=D)))))},M.preclip=function(D){return arguments.length?(x=D,m=void 0,$()):x},M.postclip=function(D){return arguments.length?(S=D,g=h=_=v=null,$()):S},M.clipAngle=function(D){return arguments.length?(x=+D?q6(m=D*Gt):(m=null,E1),$()):m*ei},M.clipExtent=function(D){return arguments.length?(S=D==null?(g=h=_=v=null,ih):K6(g=+D[0][0],h=+D[0][1],_=+D[1][0],v=+D[1][1]),$()):g==null?null:[[g,h],[_,v]]},M.scale=function(D){return arguments.length?(n=+D,k()):n},M.translate=function(D){return arguments.length?(i=+D[0],r=+D[1],k()):[i,r]},M.center=function(D){return arguments.length?(s=D[0]%360*Gt,o=D[1]%360*Gt,k()):[s*ei,o*ei]},M.rotate=function(D){return arguments.length?(a=D[0]%360*Gt,l=D[1]%360*Gt,c=D.length>2?D[2]%360*Gt:0,k()):[a*ei,l*ei,c*ei]},M.angle=function(D){return arguments.length?(d=D%360*Gt,k()):d*ei},M.reflectX=function(D){return arguments.length?(f=D?-1:1,k()):f<0},M.reflectY=function(D){return arguments.length?(p=D?-1:1,k()):p<0},M.precision=function(D){return arguments.length?(A=I1(T,P=D*D),$()):Lr(P)},M.fitExtent=function(D,O){return s3(M,D,O)},M.fitSize=function(D,O){return f5(M,D,O)},M.fitWidth=function(D,O){return d5(M,D,O)},M.fitHeight=function(D,O){return h5(M,D,O)};function k(){var D=N1(n,0,0,f,p,d).apply(null,e(s,o)),O=N1(n,i-D[0],r-D[1],f,p,d);return u=G2(a,l,c),T=th(e,O),R=th(u,T),A=I1(T,P),$()}function $(){return z=y=null,M}return function(){return e=t.apply(this,arguments),M.invert=e.invert&&W,k()}}function S5(t){return function(e,n){var i=ft(e),r=ft(n),s=t(i*r);return s===1/0?[2,0]:[s*r*ct(e),s*ct(n)]}}function a3(t){return function(e,n){var i=Lr(e*e+n*n),r=t(i),s=ct(r),o=ft(r);return[Co(e*s,i*o),Po(i&&n*s/i)]}}var l3=S5(function(t){return(t=V2(t))&&t/ct(t)});l3.invert=a3(function(t){return t});function M5(){return o3(l3).scale(79.4188).clipAngle(180-.001)}function c3(t,e){var n=ft(e),i=1+ft(t)*n;return[n*ct(t)/i,ct(e)/i]}c3.invert=a3(function(t){return 2*H2(t)});function E5(){return o3(c3).scale(250).clipAngle(142)}const Ya=210,An=560;function w5(t,e,n,i){const[r,s]=Up(e,n,90,i);let o=10,a=1e5;for(let l=0;l<44;l++){const c=(o+a)/2;t.scale(c);const u=t([r,s]),d=t([e,n]);if(!u||!d){o=c;continue}Math.hypot(u[0]-d[0],u[1]-d[1])<Ya?o=c:a=c}return(o+a)/2}function u3(t,e,n,i){const r=t==="stereographic"?E5():M5();r.rotate([-e,-n]).clipAngle(i+.02).precision(.1);const s=w5(r,e,n,i);r.scale(s).translate([An/2,An/2]);const o=u5(r),a=u=>o(u)??"",l=u=>{const[d,f]=Up(e,n,90,u),p=r([d,f]),m=r([e,n]);return!p||!m?0:Math.hypot(p[0]-m[0],p[1]-m[1])},c=l(1);return{projection:r,path:a,label:t==="stereographic"?"立体投影（Stereographic）":"等距方位投影（Azimuthal Equidistant）",radialPixels:l,pxPerDegreeAtCenter:c,scaleRatioAt:u=>l(u)/u/(c||1)}}function f3(){return J6()}function yu(t,e,n,i=128){return zp().center([t,e]).radius(n).precision(.1)()}function d3(t,e){return zp().center([t,e]).radius(90-1e-4).precision(.1)()}function h3(t,e){return zp().center([t,e]).radius(90).precision(.05)()}function a0(t,e,n){const i=t([e,n]);return i?[i[0],i[1]]:null}const Nn=An/2;function U1(t){const{kind:e,sky:n,fov:i,horizonClip:r,showHorizon:s}=t,o=Ge.useMemo(()=>u3(e,i.centerRa,i.centerDec,i.radiusDeg),[e,i.centerRa,i.centerDec,i.radiusDeg]),a=Ge.useMemo(()=>{const m=o.path(f3()),x=i.radiusDeg<=20?5:i.radiusDeg<=45?10:20,g=[];for(let S=x;S<i.radiusDeg;S+=x)g.push({d:o.path(yu(i.centerRa,i.centerDec,S)),rDeg:S});const h=o.path(yu(i.centerRa,i.centerDec,i.radiusDeg)),_=o.path(h3(n.horizon.nadirRa,n.horizon.nadirDec)),v=o.path(d3(n.horizon.nadirRa,n.horizon.nadirDec));return{grat:m,rings:g,fovPath:h,horizon:_,below:v}},[o,i,n.horizon.nadirRa,n.horizon.nadirDec]),l=Ge.useMemo(()=>{const m=[];for(const x of n.targets){if(!x.inFov||!x.passesMag||r&&!x.aboveHorizon)continue;const g=a0(o.projection,x.ra,x.dec);if(!g)continue;const h=Math.max(1.6,Math.min(7,6.2-x.mag*.9)),_=x.kind==="star"?h:Math.max(h,5);m.push({t:x,x:g[0],y:g[1],r:_})}return m},[o,n.targets,r]),c=Ge.useMemo(()=>l.filter(m=>m.t.id===t.selectedId||m.t.id===t.hoverId||m.t.kind!=="star"||m.t.mag<=1.6),[l,t.selectedId,t.hoverId]),u=Ge.useMemo(()=>{const m=g=>g.trim().split(/\s+/).pop()??g,x=[];for(const g of n.horizon.cardinalPoints){const h=a0(o.projection,g.ra,g.dec);h&&x.push({x:h[0],y:h[1],label:m(g.label)})}return x},[o,n.horizon.cardinalPoints]),d=Ge.useMemo(()=>t.annotations.map(m=>{const x=a0(o.projection,m.ra,m.dec);return x?{a:m,x:x[0],y:x[1]}:null}).filter(m=>m!==null),[o,t.annotations]),f=t.selectedId?n.targets.find(m=>m.id===t.selectedId):null,p=o.scaleRatioAt(i.radiusDeg);return H.jsxs("div",{className:"proj-view",children:[H.jsxs("div",{className:"proj-title",children:[H.jsx("strong",{children:o.label}),H.jsxs("span",{className:"proj-sub",children:["中心 ",Fp(i.centerRa)," / ",Op(i.centerDec)," · 视场角半径 ",i.radiusDeg.toFixed(1),"°"]})]}),H.jsxs("svg",{width:An,height:An,viewBox:`0 0 ${An} ${An}`,className:"proj-svg",onMouseLeave:()=>t.onHover(null),children:[H.jsx("defs",{children:H.jsx("clipPath",{id:`disc-${e}`,children:H.jsx("circle",{cx:Nn,cy:Nn,r:Ya})})}),H.jsx("circle",{cx:Nn,cy:Nn,r:Ya,fill:"#0b1020",stroke:"#3b4a6b",strokeWidth:1.5}),H.jsxs("g",{clipPath:`url(#disc-${e})`,children:[H.jsx("path",{d:a.grat,fill:"none",stroke:"#27406a",strokeWidth:.6,opacity:.9}),a.rings.map(m=>H.jsx("path",{d:m.d,fill:"none",stroke:"#3d6ea5",strokeWidth:.7,strokeDasharray:"2 3"},m.rDeg)),s&&H.jsxs(H.Fragment,{children:[H.jsx("path",{d:a.below,fill:"#5a1f24",opacity:.35}),H.jsx("path",{d:a.horizon,fill:"none",stroke:"#ff5d5d",strokeWidth:1.6})]}),H.jsx("path",{d:a.fovPath,fill:"none",stroke:"#57e389",strokeWidth:1.4,opacity:.9}),s&&u.map((m,x)=>H.jsx("text",{x:m.x,y:m.y-5,fill:"#ff9a9a",fontSize:11,textAnchor:"middle",children:m.label},x)),l.map(({t:m,x,y:g,r:h})=>{const _=m.id===t.selectedId,v=m.id===t.hoverId,S=!m.aboveHorizon,P=m.kind==="sun"?"#ffd27d":m.kind==="moon"?"#dfe6f2":m.kind==="planet"?"#9ecbff":"#ffffff";return H.jsxs("g",{transform:`translate(${x},${g})`,className:"star-marker",onMouseEnter:()=>t.onHover(m.id),onClick:A=>{A.stopPropagation(),t.onSelect(m.id)},children:[_&&H.jsx("circle",{r:h+6,fill:"none",stroke:"#ffd54a",strokeWidth:2}),v&&!_&&H.jsx("circle",{r:h+4,fill:"none",stroke:"#9fd0ff",strokeWidth:1.2}),m.kind==="star"?H.jsx("circle",{r:h,fill:P,opacity:S&&!r?.35:1}):m.kind==="planet"?H.jsx("rect",{x:-h,y:-h,width:h*2,height:h*2,fill:P}):H.jsx("polygon",{points:`0,${-h} ${h},0 0,${h} ${-h},0`,fill:P})]},m.id)}),c.map(({t:m,x,y:g})=>H.jsx("text",{x:x+7,y:g+3,fill:"#cfe0ff",fontSize:10.5,className:"proj-label",children:m.name},`l-${m.id}`)),d.map(({a:m,x,y:g})=>H.jsxs("g",{transform:`translate(${x},${g})`,children:[H.jsx("circle",{r:5,fill:"none",stroke:m.color,strokeWidth:1.6}),H.jsx("text",{x:8,y:4,fill:m.color,fontSize:11,children:m.text})]},m.uuid)),H.jsxs("g",{stroke:"#8aa0c8",strokeWidth:1,children:[H.jsx("line",{x1:Nn-7,y1:Nn,x2:Nn+7,y2:Nn}),H.jsx("line",{x1:Nn,y1:Nn-7,x2:Nn,y2:Nn+7})]})]})]}),H.jsxs("div",{className:"proj-foot",children:[H.jsxs("span",{children:["中心比例尺 ≈ ",o.pxPerDegreeAtCenter.toFixed(1)," px/°",e==="stereographic"?`（立体投影边缘径向外放 ×${p.toFixed(2)}，图上距离≠角距）`:"（等距方位：径向 r 与角距成正比，同心圆为等角距参考环）"]}),f&&H.jsxs("span",{className:"proj-foot-sel",children:[f.name,"：距视场中心 ",f.sepFromCenter.toFixed(2),"°（球面角距）· 高度 ",f.alt.toFixed(1),"°"]})]})]})}const Su=[{id:"beijing",name:"北京（古观象台附近）",latitude:39.9042,longitude:116.4074,height:50},{id:"shanghai",name:"上海（佘山天文台）",latitude:31.0989,longitude:121.1958,height:100},{id:"lhasa",name:"拉萨",latitude:29.652,longitude:91.1721,height:3650},{id:"sanya",name:"三亚",latitude:18.2528,longitude:109.512,height:10},{id:"mohe",name:"漠河",latitude:53.4722,longitude:122.3464,height:400},{id:"london",name:"伦敦（格林威治）",latitude:51.4769,longitude:-5e-4,height:50},{id:"sidingspring",name:"赛丁泉天文台（澳大利亚）",latitude:-31.2733,longitude:149.0644,height:1165},{id:"custom",name:"自定义位置",latitude:0,longitude:0,height:0}],Lc=[{id:"polar",label:"极区天区",description:"以北天极为中心的视场，检查极区在球面与两种方位投影下的表现；含北极星、小熊座、仙后座。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:0,centerDecDeg:90,fovRadiusDeg:35,magLimit:5,horizonClip:!1,suggestSelectId:"polaris"},{id:"zero",label:"赤经跨零点",description:"视场中心 RA 358°，边界跨过 0h 线（飞马座四边形 / 仙女座 / 仙后座），不应出现横贯整图的连线。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:358,centerDecDeg:30,fovRadiusDeg:30,magLimit:5,horizonClip:!1,suggestSelectId:"alpheratz"},{id:"horizon",label:"地平线附近目标",description:"北京 2026-09-30 21:00（UTC+8），大角星位于正西偏北、地平高度约 0.1°；开启地平线裁切可见取舍。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:213.9,centerDecDeg:19.2,fovRadiusDeg:30,magLimit:4.5,horizonClip:!1,suggestSelectId:"arcturus"}];function T5(t){var u,d;const[e,n]=Ge.useState(""),[i,r]=Ge.useState(""),[s,o]=Ge.useState("#ffd54a"),a=f=>t.onChangeFov({...t.fov,centerRa:(f%360+360)%360}),l=f=>t.onChangeFov({...t.fov,centerDec:Math.max(-90,Math.min(90,f))}),c=f=>t.onChangeFov({...t.fov,radiusDeg:Math.max(1,Math.min(90,f))});return H.jsxs("div",{className:"controls",children:[H.jsxs("section",{className:"ctl-block",children:[H.jsx("h3",{children:"演示场景"}),H.jsx("div",{className:"btn-row",children:Lc.map(f=>H.jsx("button",{className:"btn scenario",onClick:()=>t.onApplyScenario(f.id),title:f.description,children:f.label},f.id))}),H.jsx("p",{className:"hint",title:(u=Lc.find(f=>f.id==="horizon"))==null?void 0:u.description,children:(d=Lc.find(f=>f.id==="horizon"))==null?void 0:d.description})]}),H.jsxs("section",{className:"ctl-block",children:[H.jsx("h3",{children:"观测位置与时间"}),H.jsxs("label",{children:["位置",H.jsx("select",{value:t.site.id,onChange:f=>{const p=Su.find(m=>m.id===f.target.value);t.onChangeSite({...p})},children:Su.map(f=>H.jsx("option",{value:f.id,children:f.name},f.id))})]}),t.site.id==="custom"&&H.jsxs("div",{className:"num-row",children:[H.jsxs("label",{children:["纬度°",H.jsx("input",{type:"number",value:t.site.latitude,step:1e-4,onChange:f=>t.onChangeSite({...t.site,latitude:Number(f.target.value)})})]}),H.jsxs("label",{children:["经度°",H.jsx("input",{type:"number",value:t.site.longitude,step:1e-4,onChange:f=>t.onChangeSite({...t.site,longitude:Number(f.target.value)})})]})]}),H.jsxs("label",{children:["时间（UTC，非本地时区）",H.jsx("input",{type:"datetime-local",step:1,value:t.timeUtcIso.slice(0,19),onChange:f=>t.onChangeTime(f.target.value+"Z")})]}),H.jsx("p",{className:"hint",children:"北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。"})]}),H.jsxs("section",{className:"ctl-block",children:[H.jsx("h3",{children:"视场（J2000 赤道坐标）"}),H.jsxs("div",{className:"num-row",children:[H.jsxs("label",{children:["中心赤经°",H.jsx("input",{type:"number",value:l0(t.fov.centerRa),min:0,max:360,step:.1,onChange:f=>a(Number(f.target.value))})]}),H.jsxs("label",{children:["中心赤纬°",H.jsx("input",{type:"number",value:l0(t.fov.centerDec),min:-90,max:90,step:.1,onChange:f=>l(Number(f.target.value))})]}),H.jsxs("label",{children:["角半径°",H.jsx("input",{type:"number",value:l0(t.fov.radiusDeg),min:1,max:90,step:.5,onChange:f=>c(Number(f.target.value))})]})]}),H.jsx("p",{className:"hint",children:"视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。"}),H.jsxs("div",{className:"save-row",children:[H.jsx("input",{placeholder:"命名当前视场…",value:e,onChange:f=>n(f.target.value)}),H.jsx("button",{className:"btn",disabled:!e.trim(),onClick:()=>{t.onSaveFov(e.trim()),n("")},children:"存视场"})]}),t.savedFovs.length>0&&H.jsx("ul",{className:"store-list",children:t.savedFovs.slice(0,6).map(f=>H.jsxs("li",{children:[H.jsx("button",{className:"link-btn",title:`RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°`,onClick:()=>t.onLoadFov(f),children:f.name}),H.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteFov(f.uuid),children:"×"})]},f.uuid))})]}),H.jsxs("section",{className:"ctl-block",children:[H.jsx("h3",{children:"筛选（两条相互独立）"}),H.jsxs("label",{className:"range-label",children:["星等上限（仅恒星）：≤ ",t.magLimit.toFixed(1),H.jsx("input",{type:"range",min:-2,max:6,step:.1,value:t.magLimit,onChange:f=>t.onChangeMag(Number(f.target.value))})]}),H.jsxs("label",{className:"check",children:[H.jsx("input",{type:"checkbox",checked:t.horizonClip,onChange:f=>t.onToggleHorizonClip(f.target.checked)}),"地平线裁切：仅显示地平以上目标"]}),H.jsxs("label",{className:"check",children:[H.jsx("input",{type:"checkbox",checked:t.showHorizon,onChange:f=>t.onToggleShowHorizon(f.target.checked)}),"显示地平圈与地平以下区域"]}),H.jsxs("label",{className:"check",children:[H.jsx("input",{type:"checkbox",checked:t.showGraticule,onChange:f=>t.onToggleGraticule(f.target.checked)}),"显示 J2000 经纬网"]})]}),H.jsxs("section",{className:"ctl-block",children:[H.jsx("h3",{children:"批注（绑定天球坐标，存 IndexedDB）"}),H.jsxs("div",{className:"save-row",children:[H.jsx("input",{type:"color",value:s,onChange:f=>o(f.target.value)}),H.jsx("input",{placeholder:"批注文字（锚定当前选中目标）",value:i,onChange:f=>r(f.target.value)}),H.jsx("button",{className:"btn",disabled:!i.trim(),onClick:()=>{t.onAddAnnotation(i.trim(),s),r("")},children:"添加"})]}),t.annotations.length>0&&H.jsx("ul",{className:"store-list",children:t.annotations.map(f=>H.jsxs("li",{children:[H.jsx("span",{className:"dot",style:{background:f.color}}),H.jsx("button",{className:"link-btn",onClick:()=>t.onChangeFov({centerRa:f.ra,centerDec:f.dec,radiusDeg:Math.max(10,t.fov.radiusDeg)}),title:"把视场中心移到批注位置",children:f.text}),H.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteAnnotation(f.uuid),children:"×"})]},f.uuid))})]})]})}function l0(t){return Math.round(t*1e3)/1e3}const A5={star:"恒星（星表 J2000.0）",sun:"太阳（动态视位置）",moon:"月球（动态视位置）",planet:"行星（动态视位置）"};function R5({target:t,centerAlt:e,centerAz:n,gmstHours:i,julianDay:r}){return H.jsxs("div",{className:"info-panel",children:[t?H.jsxs(H.Fragment,{children:[H.jsxs("div",{className:"info-head",children:[H.jsx("span",{className:"info-name",children:t.name}),H.jsx("span",{className:"info-desig",children:t.designation}),H.jsx("span",{className:"info-kind",children:A5[t.kind]})]}),H.jsxs("div",{className:"info-grid",children:[H.jsxs("div",{children:[H.jsx("label",{children:"赤经 RA (J2000)"}),H.jsx("strong",{children:Fp(t.ra)}),H.jsxs("span",{className:"sub",children:[t.ra.toFixed(4),"°"]})]}),H.jsxs("div",{children:[H.jsx("label",{children:"赤纬 Dec (J2000)"}),H.jsx("strong",{children:Op(t.dec)}),H.jsxs("span",{className:"sub",children:[t.dec.toFixed(4),"°"]})]}),H.jsxs("div",{children:[H.jsx("label",{children:"方位角 A（北=0 顺时针）"}),H.jsxs("strong",{children:[t.az.toFixed(2),"°"]}),H.jsxs("span",{className:"sub",children:[d1(t.az),"方"]})]}),H.jsxs("div",{children:[H.jsx("label",{children:"地平高度 h"}),H.jsxs("strong",{className:t.alt>=0?"up":"down",children:[t.alt.toFixed(2),"°"]}),H.jsx("span",{className:"sub",children:t.alt>=0?"地平以上":"地平以下"})]}),H.jsxs("div",{children:[H.jsx("label",{children:"视星等"}),H.jsx("strong",{children:t.mag.toFixed(2)}),t.kind==="moon"&&t.phaseFraction!==void 0&&H.jsxs("span",{className:"sub",children:["月相照亮 ",(t.phaseFraction*100).toFixed(0),"%"]})]}),H.jsxs("div",{children:[H.jsx("label",{children:"距视场中心（球面角距）"}),H.jsxs("strong",{children:[t.sepFromCenter.toFixed(3),"°"]}),H.jsx("span",{className:"sub",children:"haversine 计算，非图上像素距离"})]})]})]}):H.jsxs("div",{className:"info-empty",children:["点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。",H.jsxs("ul",{children:[H.jsx("li",{children:"圆形＝恒星，方形＝行星，菱形＝太阳/月球"}),H.jsx("li",{children:"绿色圆＝视场边界，红色线＝地平圈，蓝色虚线＝等角距参考环"})]})]}),H.jsxs("div",{className:"info-meta",children:["视场中心：高度 ",e.toFixed(2),"°，方位 ",n.toFixed(2),"°（",d1(n),"）· GMST ",i.toFixed(4)," h · JD(TT) ",r.toFixed(4)]})]})}/**
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
 */const p3=173.1446326846693,Xr=14959787069098932e-8,Dt=.017453292519943295,ds=57.29577951308232,C5=3.819718634205488,P5=365.24217,F1=new Date("2000-01-01T12:00:00Z"),Pi=2*Math.PI,rr=3600*(180/Math.PI),no=484813681109536e-20,m3=180*60*60,b5=2*m3,O1=7292115e-11,L5=m3/Math.PI,D5=-.17-5*Math.log10(L5),hh=.996647180302104,I5=hh*hh,ph=6378.1366,N5=ph/Xr,g3=81.30056,Hp=.0002959122082855911,mh=2825345909524226e-22,gh=8459715185680659e-23,vh=1292024916781969e-23,_h=1524358900784276e-23;function Mu(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function Xn(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function zs(t){return t-Math.floor(t)}function U5(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:ds*Math.acos(r)}var Ee;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(Ee||(Ee={}));const F5=[Ee.Star1,Ee.Star2,Ee.Star3,Ee.Star4,Ee.Star5,Ee.Star6,Ee.Star7,Ee.Star8],O5=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function z5(t){const e=F5.indexOf(t);return e>=0?O5[e]:null}function Vp(t){const e=z5(t);return e&&e.dist>0?e:null}var Pn;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Pn||(Pn={}));const zi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function k5(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/P5;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let B5=k5;function z1(t){return t+B5(t)/86400}class ts{constructor(e){if(e instanceof ts){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-F1.getTime())/n,this.tt=z1(this.ut);return}if(Number.isFinite(e)){this.date=new Date(F1.getTime()+e*n),this.ut=e,this.tt=z1(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new ts(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new ts(this.ut+e)}}function xn(t){return t instanceof ts?t:new ts(t)}function H5(t){function e(f){return f%b5*no}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,u=(92052331+9086*n)*l+15377*a,d=2*(r-s+o);return a=Math.sin(d),l=Math.cos(d),c+=(-13170906-1675*n)*a-13696*l,u+=(5730336-3015*n)*l-4587*a,d=2*(r+o),a=Math.sin(d),l=Math.cos(d),c+=(-2276413-234*n)*a+2796*l,u+=(978459-485*n)*l+1374*a,d=2*o,a=Math.sin(d),l=Math.cos(d),c+=(2074554+207*n)*a-698*l,u+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,u+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function v3(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var oc;function Gp(t){if(!oc||Math.abs(oc.tt-t.tt)>1e-6){const e=H5(t),n=v3(t),i=n+e.deps/3600;oc={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*Dt)/15,mobl:n,tobl:i}}return oc}function V5(t,e){const n=t*Dt,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function G5(t,e){return V5(v3(t),e)}function W5(t){const e=t.tt/36525;function n(me,b){const je=[];let Ce;for(Ce=0;Ce<=b-me;++Ce)je.push(0);return{min:me,array:je}}function i(me,b,je,Ce){const Le=[];for(let Pe=0;Pe<=b-me;++Pe)Le.push(n(je,Ce));return{min:me,array:Le}}function r(me,b,je){const Ce=me.array[b-me.min];return Ce.array[je-Ce.min]}function s(me,b,je,Ce){const Le=me.array[b-me.min];Le.array[je-Le.min]=Ce}let o,a,l,c,u,d,f,p,m,x,g,h,_,v,S,P,A,T,R,z,y,M,W,k=i(-6,6,1,4),$=i(-6,6,1,4);function D(me,b){return r(k,me,b)}function O(me,b){return r($,me,b)}function Y(me,b,je){return s(k,me,b,je)}function L(me,b,je){return s($,me,b,je)}function Z(me,b,je,Ce,Le){Le(me*je-b*Ce,b*je+me*Ce)}function q(me){return Math.sin(Pi*me)}f=e*e,m=0,W=0,g=0,h=3422.7;var ne=q(.19833+.05611*e),_e=q(.27869+.04508*e),be=q(.16827-.36903*e),B=q(.34734-5.37261*e),J=q(.10498-5.37899*e),ae=q(.42681-.41855*e),le=q(.14943-5.37511*e);for(T=.84*ne+.31*_e+14.27*be+7.26*B+.28*J+.24*ae,R=2.94*ne+.31*_e+14.27*be+9.34*B+1.12*J+.83*ae,z=-6.4*ne-1.89*ae,y=.21*ne+.31*_e+14.27*be-88.7*B-15.3*J+.24*ae-1.86*le,M=T-z,p=-3332e-9*q(.59734-5.37261*e)-539e-9*q(.35498-5.37899*e)-64e-9*q(.39943-5.37511*e),_=Pi*zs(.60643382+1336.85522467*e-313e-8*f)+T/rr,v=Pi*zs(.37489701+1325.55240982*e+2565e-8*f)+R/rr,S=Pi*zs(.99312619+99.99735956*e-44e-8*f)+z/rr,P=Pi*zs(.25909118+1342.2278298*e-892e-8*f)+y/rr,A=Pi*zs(.82736186+1236.85308708*e-397e-8*f)+M/rr,u=1;u<=4;++u){switch(u){case 1:l=v,a=4,c=1.000002208;break;case 2:l=S,a=3,c=.997504612-.002495388*e;break;case 3:l=P,a=4,c=1.000002708+139.978*p;break;case 4:l=A,a=6,c=1;break;default:throw`Internal error: I = ${u}`}for(Y(0,u,1),Y(1,u,Math.cos(l)*c),L(0,u,0),L(1,u,Math.sin(l)*c),d=2;d<=a;++d)Z(D(d-1,u),O(d-1,u),D(1,u),O(1,u),(me,b)=>(Y(d,u,me),L(d,u,b)));for(d=1;d<=a;++d)Y(-d,u,D(d,u)),L(-d,u,-O(d,u))}function De(me,b,je,Ce){for(var Le={x:1,y:0},Pe=[0,me,b,je,Ce],$e=1;$e<=4;++$e)Pe[$e]!==0&&Z(Le.x,Le.y,D(Pe[$e],$e),O(Pe[$e],$e),(Ie,C)=>(Le.x=Ie,Le.y=C));return Le}function V(me,b,je,Ce,Le,Pe,$e,Ie){var C=De(Le,Pe,$e,Ie);m+=me*C.y,W+=b*C.y,g+=je*C.x,h+=Ce*C.x}V(13.902,14.06,-.001,.2607,0,0,0,4),V(.403,-4.01,.394,.0023,0,0,0,3),V(2369.912,2373.36,.601,28.2333,0,0,0,2),V(-125.154,-112.79,-.725,-.9781,0,0,0,1),V(1.979,6.98,-.445,.0433,1,0,0,4),V(191.953,192.72,.029,3.0861,1,0,0,2),V(-8.466,-13.51,.455,-.1093,1,0,0,1),V(22639.5,22609.07,.079,186.5398,1,0,0,0),V(18.609,3.59,-.094,.0118,1,0,0,-1),V(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),V(3.215,5.44,.192,-.0386,1,0,0,-3),V(-38.428,-38.64,.001,.6008,1,0,0,-4),V(-.393,-1.43,-.092,.0086,1,0,0,-6),V(-.289,-1.59,.123,-.0053,0,1,0,4),V(-24.42,-25.1,.04,-.3,0,1,0,2),V(18.023,17.93,.007,.1494,0,1,0,1),V(-668.146,-126.98,-1.302,-.3997,0,1,0,0),V(.56,.32,-.001,-.0037,0,1,0,-1),V(-165.145,-165.06,.054,1.9178,0,1,0,-2),V(-1.877,-6.46,-.416,.0339,0,1,0,-4),V(.213,1.02,-.074,.0054,2,0,0,4),V(14.387,14.78,-.017,.2833,2,0,0,2),V(-.586,-1.2,.054,-.01,2,0,0,1),V(769.016,767.96,.107,10.1657,2,0,0,0),V(1.75,2.01,-.018,.0155,2,0,0,-1),V(-211.656,-152.53,5.679,-.3039,2,0,0,-2),V(1.225,.91,-.03,-.0088,2,0,0,-3),V(-30.773,-34.07,-.308,.3722,2,0,0,-4),V(-.57,-1.4,-.074,.0109,2,0,0,-6),V(-2.921,-11.75,.787,-.0484,1,1,0,2),V(1.267,1.52,-.022,.0164,1,1,0,1),V(-109.673,-115.18,.461,-.949,1,1,0,0),V(-205.962,-182.36,2.056,1.4437,1,1,0,-2),V(.233,.36,.012,-.0025,1,1,0,-3),V(-4.391,-9.66,-.471,.0673,1,1,0,-4),V(.283,1.53,-.111,.006,1,-1,0,4),V(14.577,31.7,-1.54,.2302,1,-1,0,2),V(147.687,138.76,.679,1.1528,1,-1,0,0),V(-1.089,.55,.021,0,1,-1,0,-1),V(28.475,23.59,-.443,-.2257,1,-1,0,-2),V(-.276,-.38,-.006,-.0036,1,-1,0,-3),V(.636,2.27,.146,-.0102,1,-1,0,-4),V(-.189,-1.68,.131,-.0028,0,2,0,2),V(-7.486,-.66,-.037,-.0086,0,2,0,0),V(-8.096,-16.35,-.74,.0918,0,2,0,-2),V(-5.741,-.04,0,-9e-4,0,0,2,2),V(.255,0,0,0,0,0,2,1),V(-411.608,-.2,0,-.0124,0,0,2,0),V(.584,.84,0,.0071,0,0,2,-1),V(-55.173,-52.14,0,-.1052,0,0,2,-2),V(.254,.25,0,-.0017,0,0,2,-3),V(.025,-1.67,0,.0031,0,0,2,-4),V(1.06,2.96,-.166,.0243,3,0,0,2),V(36.124,50.64,-1.3,.6215,3,0,0,0),V(-13.193,-16.4,.258,-.1187,3,0,0,-2),V(-1.187,-.74,.042,.0074,3,0,0,-4),V(-.293,-.31,-.002,.0046,3,0,0,-6),V(-.29,-1.45,.116,-.0051,2,1,0,2),V(-7.649,-10.56,.259,-.1038,2,1,0,0),V(-8.627,-7.59,.078,-.0192,2,1,0,-2),V(-2.74,-2.54,.022,.0324,2,1,0,-4),V(1.181,3.32,-.212,.0213,2,-1,0,2),V(9.703,11.67,-.151,.1268,2,-1,0,0),V(-.352,-.37,.001,-.0028,2,-1,0,-1),V(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),V(.36,.2,-.012,-.0043,2,-1,0,-4),V(-1.167,-1.25,.008,-.0106,1,2,0,0),V(-7.412,-6.12,.117,.0484,1,2,0,-2),V(-.311,-.65,-.032,.0044,1,2,0,-4),V(.757,1.82,-.105,.0112,1,-2,0,2),V(2.58,2.32,.027,.0196,1,-2,0,0),V(2.533,2.4,-.014,-.0212,1,-2,0,-2),V(-.344,-.57,-.025,.0036,0,3,0,-2),V(-.992,-.02,0,0,1,0,2,2),V(-45.099,-.02,0,-.001,1,0,2,0),V(-.179,-9.52,0,-.0833,1,0,2,-2),V(-.301,-.33,0,.0014,1,0,2,-4),V(-6.382,-3.37,0,-.0481,1,0,-2,2),V(39.528,85.13,0,-.7136,1,0,-2,0),V(9.366,.71,0,-.0112,1,0,-2,-2),V(.202,.02,0,0,1,0,-2,-4),V(.415,.1,0,.0013,0,1,2,0),V(-2.152,-2.26,0,-.0066,0,1,2,-2),V(-1.44,-1.3,0,.0014,0,1,-2,2),V(.384,-.04,0,0,0,1,-2,-2),V(1.938,3.6,-.145,.0401,4,0,0,0),V(-.952,-1.58,.052,-.013,4,0,0,-2),V(-.551,-.94,.032,-.0097,3,1,0,0),V(-.482,-.57,.005,-.0045,3,1,0,-2),V(.681,.96,-.026,.0115,3,-1,0,0),V(-.297,-.27,.002,-9e-4,2,2,0,-2),V(.254,.21,-.003,0,2,-2,0,-2),V(-.25,-.22,.004,.0014,1,3,0,-2),V(-3.996,0,0,4e-4,2,0,2,0),V(.557,-.75,0,-.009,2,0,2,-2),V(-.459,-.38,0,-.0053,2,0,-2,2),V(-1.298,.74,0,4e-4,2,0,-2,0),V(.538,1.14,0,-.0141,2,0,-2,-2),V(.263,.02,0,0,1,1,2,0),V(.426,.07,0,-6e-4,1,1,-2,-2),V(-.304,.03,0,3e-4,1,-1,2,0),V(-.372,-.19,0,-.0027,1,-1,-2,2),V(.418,0,0,0,0,0,4,0),V(-.33,-.04,0,0,3,0,2,0);function ze(me,b,je,Ce,Le){return me*De(b,je,Ce,Le).y}x=0,x+=ze(-526.069,0,0,1,-2),x+=ze(-3.352,0,0,1,-4),x+=ze(44.297,1,0,1,-2),x+=ze(-6,1,0,1,-4),x+=ze(20.599,-1,0,1,0),x+=ze(-30.598,-1,0,1,-2),x+=ze(-24.649,-2,0,1,0),x+=ze(-2,-2,0,1,-2),x+=ze(-22.571,0,1,1,-2),x+=ze(10.985,0,-1,1,-2),m+=.82*q(.7736-62.5512*e)+.31*q(.0466-125.1025*e)+.35*q(.5785-25.1042*e)+.66*q(.4591+1335.8075*e)+.64*q(.313-91.568*e)+1.14*q(.148+1331.2898*e)+.21*q(.5918+1056.5859*e)+.44*q(.5784+1322.8595*e)+.24*q(.2275-5.7374*e)+.28*q(.2965+2.6929*e)+.33*q(.3132+6.3368*e),o=P+W/rr;let nt=(1.000002708+139.978*p)*(18518.511+1.189+g)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:Pi*zs((_+m/rr)/Pi),geo_eclip_lat:Math.PI/(180*3600)*nt,distance_au:rr*N5/(.999953253*h)}}function _3(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function Eu(t,e,n){const i=x3(e,n);return _3(i,t)}function x3(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=no,r*=no,s*=no,o*=no;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),u=Math.cos(-r),d=Math.sin(-s),f=Math.cos(-s),p=Math.sin(o),m=Math.cos(o),x=m*u-c*p*f,g=m*c*l+p*f*u*l-a*p*d,h=m*c*a+p*f*u*a+l*p*d,_=-p*u-c*m*f,v=-p*c*l+m*f*u*l-a*m*d,S=-p*c*a+m*f*u*a+l*m*d,P=c*d,A=-d*u*l-a*f,T=-d*u*a+f*l;if(e===Pn.Into2000)return new Ar([[x,g,h],[_,v,S],[P,A,T]]);if(e===Pn.From2000)return new Ar([[x,_,P],[g,v,A],[h,S,T]]);throw"Invalid precess direction"}function X5(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let ac;function Wp(t){if(!ac||ac.tt!==t.tt){const e=t.tt/36525;let n=15*Gp(t).ee;const i=X5(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),ac={tt:t.tt,st:s}}return ac.st}function j5(t){const e=xn(t);return Wp(e)}function $5(t,e){const n=t.latitude*Dt,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,hh*i),o=I5*s,a=t.height/1e3,l=ph*s+a,c=ph*o+a,u=(15*e+t.longitude)*Dt,d=Math.sin(u),f=Math.cos(u);return{pos:[l*r*f/Xr,l*r*d/Xr,c*i/Xr],vel:[-O1*l*r*d*86400/Xr,O1*l*r*f*86400/Xr,0]}}function xh(t,e,n){const i=y3(e,n);return _3(i,t)}function y3(t,e){const n=Gp(t),i=n.mobl*Dt,r=n.tobl*Dt,s=n.dpsi*no,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s),f=u,p=-d*o,m=-d*a,x=d*l,g=u*o*l+a*c,h=u*a*l-o*c,_=d*c,v=u*o*c-a*l,S=u*a*c+o*l;if(e===Pn.From2000)return new Ar([[f,x,_],[p,g,v],[m,h,S]]);if(e===Pn.Into2000)return new Ar([[f,p,m],[x,g,h],[_,v,S]]);throw"Invalid precess direction"}function q5(t,e,n){return n===Pn.Into2000?Eu(xh(t,e,n),e,n):xh(Eu(t,e,n),e,n)}function Y5(t,e){const n=Wp(t),i=$5(e,n).pos;return q5(i,t,Pn.Into2000)}class St{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class dr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class Aa{constructor(e,n,i){this.lat=Xn(e),this.lon=Xn(n),this.dist=Xn(i)}}class k1{constructor(e,n,i,r){this.ra=Xn(e),this.dec=Xn(n),this.dist=Xn(i),this.vec=r}}class Ar{constructor(e){this.rot=e}}class K5{constructor(e,n,i){this.vec=e,this.elat=Xn(n),this.elon=Xn(i)}}function Z5(t,e){return new St(t[0],t[1],t[2],e)}function J5(t,e){const n=Z5(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new k1(0,n.z<0?-90:90,r,n)}let s=C5*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=ds*Math.atan2(t[2],Math.sqrt(i));return new k1(s,o,r,n)}function c0(t,e){const n=t*Dt,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function S3(t){if(!(t instanceof M3))throw`Not an instance of the Observer class: ${t}`;if(Xn(t.latitude),Xn(t.longitude),Xn(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class M3{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,S3(this)}}function Q5(t,e,n,i,r){S3(n),Mu(i),Mu(r);const s=xn(e),o=Y5(s,n),a=fA(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]];return J5(l,s)}function eA(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=ds*Math.atan2(r,i),a<0&&(a+=360));let l=ds*Math.atan2(s,o),c=new St(i,r,s,t.t);return new K5(c,l,a)}function tA(t){const e=Gp(t.t),n=[t.x,t.y,t.z],i=Eu(n,t.t,Pn.From2000),[r,s,o]=xh(i,t.t,Pn.From2000),a=new St(r,s,o,t.t),l=e.tobl*Dt;return eA(a,Math.cos(l),Math.sin(l))}function Do(t){const e=xn(t),n=W5(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=G5(e,r),o=Eu(s,e,Pn.Into2000);return new St(o[0],o[1],o[2],e)}function E3(t){const e=xn(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=Do(i),o=Do(r);return new dr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function nA(t){const e=xn(t),n=E3(e),i=1+g3;return new dr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function po(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,u]of s)o+=l*Math.cos(c+e*u);let a=i*o;n&&(a%=Pi),r+=a,i*=e}return r}function u0(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,u,d]of o){let f=u+e*d;a+=c*d*Math.sin(f),s>0&&(l+=c*Math.cos(f))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const pa=365250,yh=0,Sh=1,Mh=2;function Eh(t){return new Kt(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function w3(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function Ra(t,e){const n=e.tt/pa,i=po(t[yh],n,!0),r=po(t[Sh],n,!1),s=po(t[Mh],n,!1),o=w3(i,r,s);return Eh(o).ToAstroVector(e)}function wh(t,e){const n=e/pa,i=po(t[yh],n,!0),r=po(t[Sh],n,!1),s=po(t[Mh],n,!1),o=u0(t[yh],n),a=u0(t[Sh],n),l=u0(t[Mh],n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(r),f=Math.sin(r),p=+(l*d*c)-s*f*c*a-s*d*u*o,m=+(l*d*u)-s*f*u*a+s*d*c*o,x=+(l*f)+s*d*a,g=w3(i,r,s),h=[p/pa,m/pa,x/pa],_=Eh(g),v=Eh(h);return new hs(e,_,v)}function lc(t,e,n,i){const r=i/(i+Hp),s=Ra(zi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function iA(t){const e=new St(0,0,0,t);return lc(e,t,Ee.Jupiter,mh),lc(e,t,Ee.Saturn,gh),lc(e,t,Ee.Uranus,vh),lc(e,t,Ee.Neptune,_h),e}const Th=51,rA=29200,io=146,bi=201,Jr=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Kt{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new Kt(this.x,this.y,this.z)}ToAstroVector(e){return new St(this.x,this.y,this.z,e)}static zero(){return new Kt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Kt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Kt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Kt(e*this.x,e*this.y,e*this.z)}div(e){return new Kt(this.x/e,this.y/e,this.z/e)}mean(e){return new Kt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Kt(-this.x,-this.y,-this.z)}}class hs{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new hs(this.tt,this.r,this.v)}sub(e){return new hs(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function sA(t){let[e,[n,i,r],[s,o,a]]=t;return new hs(e,new Kt(n,i,r),new Kt(s,o,a))}function cc(t,e,n,i){const r=i/(i+Hp),s=wh(zi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function na(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class ju{constructor(e){let n=new hs(e,new Kt(0,0,0),new Kt(0,0,0));this.Jupiter=cc(n,e,Ee.Jupiter,mh),this.Saturn=cc(n,e,Ee.Saturn,gh),this.Uranus=cc(n,e,Ee.Uranus,vh),this.Neptune=cc(n,e,Ee.Neptune,_h),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new hs(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=na(e,Hp,this.Sun.r);return n.incr(na(e,mh,this.Jupiter.r)),n.incr(na(e,gh,this.Saturn.r)),n.incr(na(e,vh,this.Uranus.r)),n.incr(na(e,_h,this.Neptune.r)),n}}class $u{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new $u(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class T3{constructor(e,n){this.bary=e,this.grav=n}}function wu(t,e,n,i){return new Kt(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function B1(t,e,n){return new Kt(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Ah(t,e){const n=t-e.tt,i=new ju(t),r=wu(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=wu(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new $u(t,o,a,l);return new T3(i,c)}const oA=[];function A3(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function Rh(t){const e=sA(t),n=new ju(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new $u(e.tt,i,r,s);return new T3(n,o)}function aA(t,e){const n=Jr[0][0];if(e<n||e>Jr[Th-1][0])return null;const i=A3((e-n)/rA,Th-1);if(!t[i]){const s=t[i]=[];s[0]=Rh(Jr[i]).grav,s[bi-1]=Rh(Jr[i+1]).grav;let o,a=s[0].tt;for(o=1;o<bi-1;++o)s[o]=Ah(a+=io,s[o-1]).grav;a=s[bi-1].tt;var r=[];for(r[bi-1]=s[bi-1],o=bi-2;o>0;--o)r[o]=Ah(a-=io,r[o+1]).grav;for(o=bi-2;o>0;--o){const l=o/(bi-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function H1(t,e,n){let i=Rh(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Ah(s+1===r?e:i.grav.tt+n,i.grav);return i}function R3(t,e){let n,i,r;const s=aA(oA,t.tt);if(s){const o=A3((t.tt-s[0].tt)/io,bi-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),u=wu(t.tt-a.tt,a.r,a.v,c),d=B1(t.tt-a.tt,a.v,c),f=wu(t.tt-l.tt,l.r,l.v,c),p=B1(t.tt-l.tt,l.v,c),m=(t.tt-a.tt)/io;n=u.mul(1-m).add(f.mul(m)),i=d.mul(1-m).add(p.mul(m))}else{let o;t.tt<Jr[0][0]?o=H1(Jr[0],t.tt,-io):o=H1(Jr[Th-1],t.tt,+io),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new ju(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new dr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function Ka(t,e){var n=xn(e);if(t in zi)return Ra(zi[t],n);if(t===Ee.Pluto){const o=R3(n);return new St(o.x,o.y,o.z,n)}if(t===Ee.Sun)return new St(0,0,0,n);if(t===Ee.Moon){var i=Ra(zi.Earth,n),r=Do(n);return new St(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===Ee.EMB){const o=Ra(zi.Earth,n),a=Do(n),l=1+g3;return new St(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===Ee.SSB)return iA(n);const s=Vp(t);if(s){const o=new Aa(s.dec,15*s.ra,s.dist);return Dc(o,n)}throw`HelioVector: Unknown body "${t}"`}function lA(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/p3;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class cA{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=Ka(this.observerBody,e));const n=Ka(this.targetBody,e);return new St(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function uA(t,e,n,i){Mu(i);const r=xn(t);if(Vp(n)){const a=Ka(n,r);{const l=hA(e,r),c=new St(a.x-l.x,a.y-l.y,a.z-l.z,r),u=p3/c.Length();return new St(c.x+l.vx/u,c.y+l.vy/u,c.z+l.vz/u,r)}}let s;s=new St(0,0,0,r);const o=new cA(e,n,i,s);return lA(a=>o.Position(a),r)}function fA(t,e,n){Mu(n);const i=xn(e);switch(t){case Ee.Earth:return new St(0,0,0,i);case Ee.Moon:return Do(i);default:const r=uA(i,Ee.Earth,t,n);return r.t=i,r}}function dA(t,e){return new dr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function hA(t,e){const n=xn(e);switch(t){case Ee.Sun:return new dr(0,0,0,0,0,0,n);case Ee.SSB:const i=new ju(n.tt);return new dr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case Ee.Mercury:case Ee.Venus:case Ee.Earth:case Ee.Mars:case Ee.Jupiter:case Ee.Saturn:case Ee.Uranus:case Ee.Neptune:const r=wh(zi[t],n.tt);return dA(r,n);case Ee.Pluto:return R3(n);case Ee.Moon:case Ee.EMB:const s=wh(zi.Earth,n.tt),o=t==Ee.Moon?E3(n):nA(n);return new dr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(Vp(t)){const a=Ka(t,n);return new dr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function pA(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case Ee.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case Ee.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case Ee.Mars:r=-1.52,s=1.6;break;case Ee.Jupiter:r=-9.4,s=.5;break;case Ee.Uranus:r=-7.19,s=.25;break;case Ee.Neptune:r=-6.87;break;case Ee.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function mA(t,e,n,i,r){const s=tA(i),o=Dt*28.06,a=Dt*(169.51+382e-7*r.tt),l=Dt*s.elat,c=Dt*s.elon,u=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),d=Math.sin(Math.abs(u));let f=-9+.044*t;return f+=d*(-2.6+1.2*d),f+=5*Math.log10(e*n),{mag:f,ring_tilt:ds*u}}function gA(t,e,n){let i=t*Dt,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/Xr;let l=n/a;return o+=5*Math.log10(e*l),o}class vA{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(Dt*i))/2}}function _A(t,e){if(t===Ee.Earth)throw"The illumination of the Earth is not defined.";const n=xn(e),i=Ra(zi.Earth,n);let r,s,o,a;t===Ee.Sun?(o=new St(-i.x,-i.y,-i.z,n),s=new St(0,0,0,n),r=0):(t===Ee.Moon?(o=Do(n),s=new St(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=Ka(t,e),o=new St(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=U5(o,s));let l=o.Length(),c=s.Length(),u;if(t===Ee.Sun)a=D5+5*Math.log10(l);else if(t===Ee.Moon)a=gA(r,c,l);else if(t===Ee.Saturn){const d=mA(r,c,l,o,n);a=d.mag,u=d.ring_tilt}else a=pA(t,r,c,l);return new vA(n,a,r,c,l,o,s,u)}var V1;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(V1||(V1={}));function C3(t){return new Ar([[t.rot[0][0],t.rot[1][0],t.rot[2][0]],[t.rot[0][1],t.rot[1][1],t.rot[2][1]],[t.rot[0][2],t.rot[1][2],t.rot[2][2]]])}function P3(t,e){return new Ar([[e.rot[0][0]*t.rot[0][0]+e.rot[1][0]*t.rot[0][1]+e.rot[2][0]*t.rot[0][2],e.rot[0][1]*t.rot[0][0]+e.rot[1][1]*t.rot[0][1]+e.rot[2][1]*t.rot[0][2],e.rot[0][2]*t.rot[0][0]+e.rot[1][2]*t.rot[0][1]+e.rot[2][2]*t.rot[0][2]],[e.rot[0][0]*t.rot[1][0]+e.rot[1][0]*t.rot[1][1]+e.rot[2][0]*t.rot[1][2],e.rot[0][1]*t.rot[1][0]+e.rot[1][1]*t.rot[1][1]+e.rot[2][1]*t.rot[1][2],e.rot[0][2]*t.rot[1][0]+e.rot[1][2]*t.rot[1][1]+e.rot[2][2]*t.rot[1][2]],[e.rot[0][0]*t.rot[2][0]+e.rot[1][0]*t.rot[2][1]+e.rot[2][0]*t.rot[2][2],e.rot[0][1]*t.rot[2][0]+e.rot[1][1]*t.rot[2][1]+e.rot[2][1]*t.rot[2][2],e.rot[0][2]*t.rot[2][0]+e.rot[1][2]*t.rot[2][1]+e.rot[2][2]*t.rot[2][2]]])}function Dc(t,e){e=xn(e);const n=t.lat*Dt,i=t.lon*Dt,r=t.dist*Math.cos(n);return new St(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function xA(t){const e=t.x*t.x+t.y*t.y,n=Math.sqrt(e+t.z*t.z);let i,r;if(e===0){if(t.z===0)throw"Zero-length vector not allowed.";r=0,i=t.z<0?-90:90}else r=ds*Math.atan2(t.y,t.x),r<0&&(r+=360),i=ds*Math.atan2(t.z,Math.sqrt(e));return new Aa(i,r,n)}function yA(t){return t=360-t,t>=360?t-=360:t<0&&(t+=360),t}function SA(t,e){const n=xA(t);return n.lon=yA(n.lon),n.lat+=MA(e,n.lat),n}function MA(t,e){let n;return Xn(e),e<-90||e>90?0:(n=0,n)}function ia(t,e){return new St(t.rot[0][0]*e.x+t.rot[1][0]*e.y+t.rot[2][0]*e.z,t.rot[0][1]*e.x+t.rot[1][1]*e.y+t.rot[2][1]*e.z,t.rot[0][2]*e.x+t.rot[1][2]*e.y+t.rot[2][2]*e.z,e.t)}function EA(t){t=xn(t);const e=y3(t,Pn.Into2000),n=x3(t,Pn.Into2000);return P3(e,n)}function wA(t,e){t=xn(t);const n=Math.sin(e.latitude*Dt),i=Math.cos(e.latitude*Dt),r=Math.sin(e.longitude*Dt),s=Math.cos(e.longitude*Dt),o=[i*s,i*r,n],a=[-n*s,-n*r,i],l=[r,-s,0],c=-15*Wp(t),u=c0(c,o),d=c0(c,a),f=c0(c,l);return new Ar([[d[0],f[0],u[0]],[d[1],f[1],u[1]],[d[2],f[2],u[2]]])}function TA(t,e){const n=wA(t,e);return C3(n)}function AA(t,e){t=xn(t);const n=TA(t,e),i=EA(t);return P3(n,i)}function RA(t,e){const n=AA(t,e);return C3(n)}var G1;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(G1||(G1={}));var W1;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(W1||(W1={}));function CA(t){const e=t.rot;return new Ar([[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]])}class PA{constructor(e,n){et(this,"time");et(this,"observer");et(this,"rEqjToHor");et(this,"rHorToEqj");this.time=new ts(e),this.observer=new M3(n.latitude,n.longitude,n.height),this.rEqjToHor=RA(this.time,this.observer),this.rHorToEqj=CA(this.rEqjToHor)}julianDay(){return 2451545+this.time.tt}gmstHours(){return j5(this.time)}equatorialToHorizontal(e,n){const i=Dc(new Aa(n,e,1),this.time),r=ia(this.rEqjToHor,i),s=SA(r,null);return{azDeg:(s.lon%360+360)%360,altDeg:s.lat,hx:r.x,hy:r.y,hz:r.z}}centerHorizontalVec(e,n){const i=Dc(new Aa(n,e,1),this.time),r=ia(this.rEqjToHor,i),s=Math.hypot(r.x,r.y,r.z)||1;return[r.x/s,r.y/s,r.z/s]}graticuleHorizontal(){const e=[],n=[],r=(s,o)=>{const a=ia(this.rEqjToHor,Dc(new Aa(o,s,1),this.time)),l=Math.hypot(a.x,a.y,a.z)||1;return[a.x/l,a.y/l,a.z/l]};for(const s of[-60,-30,0,30,60]){const o=[],a=[];for(let l=0;l<=96;l++)a.push(r(360*l/96,s));o.push(a),e.push(...o)}for(let s=0;s<360;s+=30){const o=[];for(let a=0;a<=96;a++)o.push(r(s,-90+180*a/96));n.push(o)}return{parallels:e,meridians:n}}nadirEquatorial(){const e=ia(this.rHorToEqj,new St(0,0,-1,this.time)),n=(Math.atan2(e.y,e.x)*180/Math.PI%360+360)%360,i=Math.asin(Math.max(-1,Math.min(1,e.z)))*180/Math.PI;return{ra:n,dec:i}}horizonPointEquatorial(e){const n=e*Math.PI/180,i=new St(Math.cos(n),-Math.sin(n),0,this.time),r=ia(this.rHorToEqj,i),s=Math.hypot(r.x,r.y,r.z)||1,o=(Math.atan2(r.y/s,r.x/s)*180/Math.PI%360+360)%360,a=Math.asin(Math.max(-1,Math.min(1,r.z/s)))*180/Math.PI;return{ra:o,dec:a}}solarSystemBodies(){return[{body:Ee.Sun,name:"太阳"},{body:Ee.Moon,name:"月球"},{body:Ee.Mercury,name:"水星"},{body:Ee.Venus,name:"金星"},{body:Ee.Mars,name:"火星"},{body:Ee.Jupiter,name:"木星"},{body:Ee.Saturn,name:"土星"}].map(({body:n,name:i})=>{const r=Q5(n,this.time,this.observer,!1,!0),s=_A(n,this.time);return{body:n,name:i,ra:r.ra*15,dec:r.dec,mag:s.mag,phaseFraction:n===Ee.Moon?s.phase_fraction:void 0}})}}const ve=t=>t*15,bA=[{id:"polaris",name:"勾陈一（北极星）",designation:"α UMi",ra:ve(2+31/60+49.1/3600),dec:89.2641,mag:1.98,tags:["polar","bright"]},{id:"kochab",name:"帝（北极二）",designation:"β UMi",ra:ve(14+50/60+42.3/3600),dec:74.1555,mag:2.07,tags:["polar"]},{id:"pherkad",name:"太子（北极一）",designation:"γ UMi",ra:ve(15+20/60+43.7/3600),dec:71.8344,mag:3.04,tags:["polar"]},{id:"zeta-umi",name:"开阳增一",designation:"ζ UMi",ra:ve(16+0/60),dec:77.8,mag:4.32,tags:["polar"]},{id:"yildun",name:"勾陈二",designation:"δ UMi",ra:ve(17+32/60+13/3600),dec:86.5851,mag:4.36,tags:["polar"]},{id:"epsilon-umi",name:"勾陈四",designation:"ε UMi",ra:ve(16+45/60+58/3600),dec:82.0411,mag:4.21,tags:["polar"]},{id:"cassiopeia-alpha",name:"王良一",designation:"α Cas",ra:ve(0+40/60+30.4/3600),dec:56.5373,mag:2.24,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-beta",name:"王良四",designation:"β Cas",ra:ve(0+9/60+10.7/3600),dec:59.1498,mag:2.27,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-gamma",name:"策",designation:"γ Cas",ra:ve(0+56/60+42.5/3600),dec:60.7167,mag:2.47,tags:["polar","zero-cross"]},{id:"cassiopeia-delta",name:"阁道三",designation:"δ Cas",ra:ve(1+25/60+49/3600),dec:60.2353,mag:2.68,tags:["polar"]},{id:"cephei-alpha",name:"天钩五",designation:"α Cep",ra:ve(21+18/60+34.6/3600),dec:62.5856,mag:2.51,tags:["polar","bright"]},{id:"cephei-gamma",name:"少卫增八",designation:"γ Cep",ra:ve(23+39/60+20.9/3600),dec:77.6322,mag:3.21,tags:["polar","zero-cross"]},{id:"draco-thuban",name:"右枢（古北极星）",designation:"α Dra",ra:ve(14+4/60+23.4/3600),dec:64.3758,mag:3.65,tags:["polar"]},{id:"ursa-minor-eta",name:"勾陈增九",designation:"η UMi",ra:ve(16+17/60+30.5/3600),dec:75.7553,mag:4.95,tags:["polar"]},{id:"alpheratz",name:"壁宿二",designation:"α And",ra:ve(0+8/60+23.3/3600),dec:29.0904,mag:2.06,tags:["zero-cross","bright"]},{id:"algenib",name:"壁宿一",designation:"γ Peg",ra:ve(0+13/60+14.2/3600),dec:15.1836,mag:2.83,tags:["zero-cross","bright"]},{id:"markab",name:"室宿一",designation:"α Peg",ra:ve(23+4/60+46.5/3600),dec:15.2053,mag:2.49,tags:["zero-cross","bright"]},{id:"scheat",name:"室宿二",designation:"β Peg",ra:ve(23+3/60+46.5/3600),dec:28.083,mag:2.42,tags:["zero-cross","bright"]},{id:"alrescha",name:"外屏七",designation:"α Psc",ra:ve(2+2/60+2.8/3600),dec:2.7486,mag:3.82,tags:["zero-cross"]},{id:"eta-and",name:"奎宿四（仙女座η）",designation:"η And",ra:ve(0+57/60+12.4/3600),dec:23.4236,mag:4.4,tags:["zero-cross"]},{id:"delta-psc",name:"外屏一",designation:"δ Psc",ra:ve(0+48/60+40.9/3600),dec:7.5786,mag:4.43,tags:["zero-cross"]},{id:"epsilon-psc",name:"外屏二",designation:"ε Psc",ra:ve(1+2/60+56.6/3600),dec:7.8883,mag:4.27,tags:["zero-cross"]},{id:"mirach",name:"奎宿九",designation:"β And",ra:ve(1+9/60+43.9/3600),dec:35.6206,mag:2.05,tags:["zero-cross","bright"]},{id:"mu-and",name:"天大将军一",designation:"μ And",ra:ve(0+56/60+45.2/3600),dec:38.4995,mag:3.86,tags:["zero-cross"]},{id:"51-and",name:"车府增廿一",designation:"51 And",ra:ve(1+37/60+59.6/3600),dec:48.6333,mag:3.57,tags:[]},{id:"phoenicis-alpha",name:"火鸟六",designation:"α Phe",ra:ve(0+26/60+17/3600),dec:-42.306,mag:2.39,tags:["zero-cross","bright"]},{id:"arcturus",name:"大角星",designation:"α Boo",ra:ve(14+15/60+39.7/3600),dec:19.1825,mag:-.05,tags:["bright"]},{id:"vega",name:"织女一（织女星）",designation:"α Lyr",ra:ve(18+36/60+56.3/3600),dec:38.7837,mag:.03,tags:["bright"]},{id:"capella",name:"五车二",designation:"α Aur",ra:ve(5+16/60+41.4/3600),dec:45.998,mag:.08,tags:["bright"]},{id:"rigel",name:"参宿七",designation:"β Ori",ra:ve(5+14/60+32.3/3600),dec:-8.2017,mag:.13,tags:["bright"]},{id:"procyon",name:"南河三",designation:"α CMi",ra:ve(7+39/60+18.1/3600),dec:5.225,mag:.34,tags:["bright"]},{id:"betelgeuse",name:"参宿四",designation:"α Ori",ra:ve(5+55/60+10.3/3600),dec:7.4071,mag:.45,tags:["bright"]},{id:"altair",name:"河鼓二（牛郎星）",designation:"α Aql",ra:ve(19+50/60+47/3600),dec:8.8683,mag:.77,tags:["bright"]},{id:"aldebaran",name:"毕宿五",designation:"α Tau",ra:ve(4+35/60+55.2/3600),dec:16.5093,mag:.85,tags:["bright"]},{id:"antares",name:"心宿二（火星之敌）",designation:"α Sco",ra:ve(16+29/60+24.5/3600),dec:-26.432,mag:1.06,tags:["bright"]},{id:"spica",name:"角宿一",designation:"α Vir",ra:ve(13+25/60+11.6/3600),dec:-11.1614,mag:.98,tags:["bright"]},{id:"pollux",name:"北河三",designation:"β Gem",ra:ve(7+45/60+18.9/3600),dec:28.0262,mag:1.14,tags:["bright"]},{id:"deneb",name:"天津四",designation:"α Cyg",ra:ve(20+41/60+25.9/3600),dec:45.2803,mag:1.25,tags:["bright"]},{id:"regulus",name:"轩辕十四",designation:"α Leo",ra:ve(10+8/60+22.3/3600),dec:11.9672,mag:1.35,tags:["bright"]},{id:"castor",name:"北河二",designation:"α Gem",ra:ve(7+34/60+35.9/3600),dec:31.8884,mag:1.58,tags:["bright"]},{id:"bellatrix",name:"参宿五",designation:"γ Ori",ra:ve(5+25/60+7.9/3600),dec:6.3497,mag:1.64,tags:["bright"]},{id:"eltanin",name:"天棓四",designation:"γ Dra",ra:ve(17+56/60+36.4/3600),dec:51.4889,mag:2.24,tags:["bright"]},{id:"dubhe",name:"天枢",designation:"α UMa",ra:ve(11+3/60+43.7/3600),dec:61.751,mag:1.79,tags:["bright","polar"]},{id:"merak",name:"天璇",designation:"β UMa",ra:ve(11+1/60+50.5/3600),dec:56.3824,mag:2.37,tags:["bright","polar"]},{id:"alioth",name:"玉衡",designation:"ε UMa",ra:ve(12+54/60+1.7/3600),dec:55.9598,mag:1.77,tags:["bright","polar"]},{id:"mizar",name:"开阳",designation:"ζ UMa",ra:ve(13+23/60+55.5/3600),dec:54.9254,mag:2.27,tags:["bright","polar"]},{id:"fomalhaut",name:"北落师门",designation:"α PsA",ra:ve(22+57/60+39/3600),dec:-29.6222,mag:1.16,tags:["bright","zero-cross"]},{id:"achernar",name:"水委一",designation:"α Eri",ra:ve(1+37/60+42.8/3600),dec:-57.2367,mag:.46,tags:["bright"]},{id:"canopus",name:"老人星",designation:"α Car",ra:ve(6+23/60+57.1/3600),dec:-52.6957,mag:-.74,tags:["bright"]},{id:"sirius",name:"天狼星",designation:"α CMa",ra:ve(6+45/60+9/3600),dec:-16.7161,mag:-1.46,tags:["bright"]},{id:"hadar",name:"马腹一",designation:"β Cen",ra:ve(14+3/60+49.4/3600),dec:-60.373,mag:.61,tags:["bright"]},{id:"rigil-kent",name:"南门二",designation:"α Cen",ra:ve(14+39/60+36.5/3600),dec:-60.8334,mag:-.27,tags:["bright"]},{id:"acrux",name:"十字架二",designation:"α Cru",ra:ve(12+26/60+35.9/3600),dec:-63.0991,mag:.77,tags:["bright"]},{id:"mimosa",name:"十字架三",designation:"β Cru",ra:ve(12+47/60+43.3/3600),dec:-59.6887,mag:1.25,tags:["bright"]},{id:"avior",name:"海石一",designation:"ε Car",ra:ve(8+22/60+30.8/3600),dec:-59.5095,mag:1.86,tags:["bright"]},{id:"suhail",name:"天记",designation:"γ Vel",ra:ve(8+9/60+32/3600),dec:-47.3428,mag:1.78,tags:["bright"]},{id:"peacock",name:"孔雀十一",designation:"α Pav",ra:ve(20+25/60+38.9/3600),dec:-56.7351,mag:1.94,tags:["bright"]},{id:"ankaa",name:"火鸟九",designation:"β Phe",ra:ve(23+26/60),dec:-46.95,mag:3.31,tags:["zero-cross"]},{id:"hamal",name:"娄宿三",designation:"α Ari",ra:ve(2+7/60+10.4/3600),dec:23.4624,mag:2,tags:["bright"]},{id:"denebola",name:"五帝座一",designation:"β Leo",ra:ve(11+49/60+3.6/3600),dec:14.572,mag:2.14,tags:["bright"]},{id:"alphecca",name:"贯索四",designation:"α CrB",ra:ve(15+34/60+41.3/3600),dec:26.7147,mag:2.23,tags:["bright"]},{id:"rasalhague",name:"侯（蛇夫座α）",designation:"α Oph",ra:ve(17+34/60+56.1/3600),dec:12.5601,mag:2.07,tags:["bright"]},{id:"enif",name:"危宿三",designation:"ε Peg",ra:ve(21+44/60+11.2/3600),dec:9.875,mag:2.39,tags:["bright"]},{id:"algol",name:"大陵五（魔星）",designation:"β Per",ra:ve(3+8/60+10.1/3600),dec:40.9556,mag:2.12,tags:["bright"]},{id:"mirfak",name:"天船三",designation:"α Per",ra:ve(3+24/60+19.4/3600),dec:49.8612,mag:1.79,tags:["bright","polar"]}];function LA(t){return t==="太阳"?"sun":t==="月球"?"moon":"planet"}function DA(t,e,n,i,r){const s=t.solarSystemBodies(),o=[];for(const p of bA){const m=t.equatorialToHorizontal(p.ra,p.dec),x=f1(e.centerRa,e.centerDec,p.ra,p.dec),g=x<=e.radiusDeg,h=m.altDeg>=0;o.push({id:p.id,name:p.name,designation:p.designation,kind:"star",ra:p.ra,dec:p.dec,mag:p.mag,az:m.azDeg,alt:m.altDeg,hx:m.hx,hy:m.hy,hz:m.hz,sepFromCenter:x,inFov:g,passesMag:p.mag<=n,aboveHorizon:h,tags:p.tags})}for(const p of s){const m=t.equatorialToHorizontal(p.ra,p.dec),x=f1(e.centerRa,e.centerDec,p.ra,p.dec),g=x<=e.radiusDeg,h=m.altDeg>=0;o.push({id:`body-${p.body}`,name:p.name,designation:p.name,kind:LA(p.name),ra:p.ra,dec:p.dec,mag:p.mag,az:m.azDeg,alt:m.altDeg,hx:m.hx,hy:m.hy,hz:m.hz,sepFromCenter:x,inFov:g,passesMag:!0,aboveHorizon:h,tags:[],phaseFraction:p.phaseFraction})}const a=[],l=[],c={0:"北点 N",90:"东点 E",180:"南点 S",270:"西点 W"},u=240;for(let p=0;p<u;p++){const m=360*p/u,x=t.horizonPointEquatorial(m);a.push([x.ra,x.dec]),m in c&&l.push({label:c[m],ra:x.ra,dec:x.dec})}a.push(a[0]);const d=t.nadirEquatorial(),f=t.equatorialToHorizontal(e.centerRa,e.centerDec);for(const p of o)p.inFov=p.sepFromCenter<=e.radiusDeg;return{targets:o,horizon:{ring:a,nadirRa:d.ra,nadirDec:d.dec,cardinalPoints:l},centerAlt:f.altDeg,centerAz:f.azDeg,gmstHours:t.gmstHours(),julianDay:t.julianDay(),fovBoundary:r}}function f0(t,e){return t.inFov&&t.passesMag&&(!e||t.aboveHorizon)}function IA(t){return t.replace(".000Z","Z").replace("T"," ")}function X1(t,e,n,i,r){const s=u3(t,r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg),o=An/2,a=30,l=70,c=92,u=An+a*2,d=An+a*2+l+c,f=a,p=l,m=s.path(f3()),x=r.fov.radiusDeg<=20?5:r.fov.radiusDeg<=45?10:20,g=[];for(let R=x;R<r.fov.radiusDeg;R+=x)g.push(s.path(yu(r.fov.centerRa,r.fov.centerDec,R)));const h=s.path(yu(r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg)),_=s.path(h3(e.horizon.nadirRa,e.horizon.nadirDec)),v=s.path(d3(e.horizon.nadirRa,e.horizon.nadirDec)),S=R=>R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),P=n.map(R=>{const z=s.projection([R.ra,R.dec]);if(!z)return"";const y=Math.max(1.6,Math.min(7,6.2-R.mag*.9));return R.kind==="star"?`<circle cx="${z[0].toFixed(1)}" cy="${z[1].toFixed(1)}" r="${y.toFixed(1)}" fill="#fff" opacity="${R.aboveHorizon?1:.35}"/>`:R.kind==="planet"?`<rect x="${(z[0]-y).toFixed(1)}" y="${(z[1]-y).toFixed(1)}" width="${(y*2).toFixed(1)}" height="${(y*2).toFixed(1)}" fill="#9ecbff"/>`:`<polygon points="${z[0].toFixed(1)},${(z[1]-y).toFixed(1)} ${(z[0]+y).toFixed(1)},${z[1].toFixed(1)} ${z[0].toFixed(1)},${(z[1]+y).toFixed(1)} ${(z[0]-y).toFixed(1)},${z[1].toFixed(1)}" fill="${R.kind==="sun"?"#ffd27d":"#dfe6f2"}"/>`}).join(""),A=n.filter(R=>R.kind!=="star"||R.mag<=1.6).map(R=>{const z=s.projection([R.ra,R.dec]);return z?`<text x="${(z[0]+7).toFixed(1)}" y="${(z[1]+3).toFixed(1)}" font-size="10.5" fill="#cfe0ff">${S(R.name)}</text>`:""}).join(""),T=i.map(R=>{const z=s.projection([R.ra,R.dec]);return z?`<circle cx="${z[0].toFixed(1)}" cy="${z[1].toFixed(1)}" r="5" fill="none" stroke="${R.color}" stroke-width="1.6"/><text x="${(z[0]+8).toFixed(1)}" y="${(z[1]+4).toFixed(1)}" font-size="11" fill="${R.color}">${S(R.text)}</text>`:""}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${d}" viewBox="0 0 ${u} ${d}" font-family="sans-serif">
<rect width="${u}" height="${d}" fill="#070a14"/>
<text x="${f}" y="28" font-size="20" font-weight="bold" fill="#eaf1ff">本地星图 · ${S(r.projectionLabel)}</text>
<text x="${f}" y="52" font-size="12" fill="#9fb4d8">
坐标系：J2000.0 平赤道/平春分点（赤经、赤纬）；视场中心 ${Fp(r.fov.centerRa)} / ${Op(r.fov.centerDec)}，
球面角半径 ${r.fov.radiusDeg.toFixed(1)}°；同心虚线环为等角距参考环（${t==="stereographic"?"立体投影下变形放大":"等距方位投影下等距"}）。
</text>
<g transform="translate(${f},${p})">
<circle cx="${o}" cy="${o}" r="${Ya}" fill="#0b1020" stroke="#3b4a6b" stroke-width="1.5"/>
<clipPath id="expdisc"><circle cx="${o}" cy="${o}" r="${Ya}"/></clipPath>
<g clip-path="url(#expdisc)">
<path d="${m}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${g.map(R=>`<path d="${R}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join(`
`)}
<path d="${v}" fill="#5a1f24" opacity="0.35"/>
<path d="${_}" fill="none" stroke="#ff5d5d" stroke-width="1.6"/>
<path d="${h}" fill="none" stroke="#57e389" stroke-width="1.4"/>
${P}
${A}
${T}
</g>
</g>
<g transform="translate(${f},${p+An+26})" font-size="11.5" fill="#9fb4d8">
<text x="0" y="0">时间基准：${IA(r.timeUtcIso)}（UTC）；儒略日 JD = ${r.julianDay.toFixed(5)}（力学时 TT）；格林威治视恒星时 ${r.gmstHours.toFixed(4)} h</text>
<text x="0" y="18">观测位置：${S(r.site.name)}（纬度 ${r.site.latitude.toFixed(4)}°，经度 ${r.site.longitude.toFixed(4)}°，海拔 ${r.site.height} m）</text>
<text x="0" y="36">筛选：星等 ≤ ${r.magLimit}（仅恒星）；地平线裁切：${r.horizonClip?"开启（仅地平以上）":"关闭（地平以下目标半透明显示）"}。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正。</text>
<text x="0" y="54">角距均按球面（haversine）计算；图上像素距离不作为实际角距。太阳系天体坐标为含光行差的 J2000 视位置。星表为 J2000 近似值，仅供科普制图。</text>
</g>
</svg>`}function j1(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function NA(t,e,n=2){const i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(i),s=new Image;await new Promise((d,f)=>{s.onload=()=>d(),s.onerror=()=>f(new Error("SVG 栅格化失败")),s.src=r});const o=t.match(/width="(\d+)"\s+height="(\d+)"/),a=o?Number(o[1]):An,l=o?Number(o[2]):An,c=document.createElement("canvas");c.width=a*n,c.height=l*n;const u=c.getContext("2d");u.fillStyle="#070a14",u.fillRect(0,0,c.width,c.height),u.drawImage(s,0,0,c.width,c.height),URL.revokeObjectURL(r),c.toBlob(d=>{if(!d)return;const f=URL.createObjectURL(d),p=document.createElement("a");p.href=f,p.download=e,p.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)},"image/png")}function UA(t,e,n,i){return JSON.stringify({tool:"local-starchart",coordinateSystem:"J2000.0 mean equator & equinox (ICRS-aligned catalog approximations)",timeStandard:{utc:i.timeUtcIso,julianDayTT:i.julianDay,gmstHours:i.gmstHours},observer:i.site,fieldOfView:{centerRA_J2000_deg:i.fov.centerRa,centerDec_J2000_deg:i.fov.centerDec,angularRadius_deg:i.fov.radiusDeg},filters:{magnitudeLimitStars:i.magLimit,horizonClip:i.horizonClip},targets:e.map(r=>({id:r.id,name:r.name,designation:r.designation,kind:r.kind,ra_J2000_deg:Number(r.ra.toFixed(5)),dec_J2000_deg:Number(r.dec.toFixed(5)),magnitude:r.mag,azimuth_deg:Number(r.az.toFixed(3)),altitude_deg:Number(r.alt.toFixed(3)),angularSeparationFromCenter_deg:Number(r.sepFromCenter.toFixed(3))})),annotations:n},null,2)}const FA="local-starchart",OA=1,Za="fovs",Ja="annotations";let uc=null;function zA(){return uc||(uc=new Promise((t,e)=>{const n=indexedDB.open(FA,OA);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(Za)||i.createObjectStore(Za,{keyPath:"uuid"}),i.objectStoreNames.contains(Ja)||i.createObjectStore(Ja,{keyPath:"uuid"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),uc)}function zo(t,e,n){return zA().then(i=>new Promise((r,s)=>{const o=i.transaction(t,e),a=n(o.objectStore(t));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)}))}async function kA(t){await zo(Za,"readwrite",e=>e.put(t))}async function d0(){return(await zo(Za,"readonly",e=>e.getAll())).sort((e,n)=>n.createdAt-e.createdAt)}async function BA(t){await zo(Za,"readwrite",e=>e.delete(t))}async function HA(t){await zo(Ja,"readwrite",e=>e.put(t))}async function h0(){return(await zo(Ja,"readonly",e=>e.getAll())).sort((e,n)=>e.createdAt-n.createdAt)}async function VA(t){await zo(Ja,"readwrite",e=>e.delete(t))}const $1=Su[0],GA="2026-09-30T13:00:00Z",WA={centerRa:213.9,centerDec:19.2,radiusDeg:30};function q1(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}function XA(){const[t,e]=Ge.useState($1),[n,i]=Ge.useState(GA),[r,s]=Ge.useState(WA),[o,a]=Ge.useState(4.5),[l,c]=Ge.useState(!1),[u,d]=Ge.useState(!0),[f,p]=Ge.useState(!0),[m,x]=Ge.useState(null),[g,h]=Ge.useState(null),[_,v]=Ge.useState(null),[S,P]=Ge.useState([]),[A,T]=Ge.useState([]);Ge.useEffect(()=>{d0().then(P).catch(()=>{}),h0().then(T).catch(()=>{})},[]);const R=Ge.useMemo(()=>{const B=new Date(n);return Number.isNaN(B.getTime())?null:new PA(B,t)},[t.latitude,t.longitude,t.height,n]),z=Ge.useMemo(()=>F6(r.centerRa,r.centerDec,r.radiusDeg,128),[r]),y=Ge.useMemo(()=>R?DA(R,r,o,l,z):null,[R,r,o,l,z]),M=Ge.useMemo(()=>R==null?void 0:R.graticuleHorizontal(),[R]),W=Ge.useMemo(()=>m&&y?y.targets.find(B=>B.id===m)??null:null,[m,y]),k=B=>{x(B),B&&v({id:B,nonce:Date.now()})},$=B=>{const J=Lc.find(le=>le.id===B);if(!J)return;const ae=Su.find(le=>le.id===J.siteId)??$1;e({...ae}),i(J.timeUtcIso),s({centerRa:J.centerRaDeg,centerDec:J.centerDecDeg,radiusDeg:J.fovRadiusDeg}),a(J.magLimit),c(J.horizonClip),J.suggestSelectId&&(x(J.suggestSelectId),v({id:J.suggestSelectId,nonce:Date.now()}))},D=B=>{const J={uuid:q1(),name:B,createdAt:Date.now(),fov:{...r},siteId:t.id,timeUtcIso:n};kA(J).then(()=>d0().then(P))},O=B=>BA(B).then(()=>d0().then(P)),Y=B=>s({...B.fov}),L=(B,J)=>{if(!W){alert("请先在任一视图中点击一个目标，批注将锚定在该目标的 J2000 坐标上。");return}const ae={uuid:q1(),createdAt:Date.now(),ra:W.ra,dec:W.dec,text:B,color:J};HA(ae).then(()=>h0().then(T))},Z=B=>VA(B).then(()=>h0().then(T)),q=B=>y?{projectionLabel:B,site:t,timeUtcIso:n,fov:r,julianDay:y.julianDay,gmstHours:y.gmstHours,horizonClip:l,magLimit:o}:null,ne=B=>{if(!y)return;const ae=q(B==="stereographic"?"立体投影 Stereographic":"等距方位投影 Azimuthal Equidistant"),le=y.targets.filter(V=>f0(V,l)),De=X1(B,y,le,A,ae);j1(`星图_${B}_${n.slice(0,10)}.svg`,De,"image/svg+xml;charset=utf-8")},_e=async B=>{if(!y)return;const ae=q("立体投影 Stereographic"),le=y.targets.filter(V=>f0(V,l)),De=X1(B,y,le,A,ae);await NA(De,`星图_${B}_${n.slice(0,10)}.png`)},be=()=>{if(!y)return;const B=q("数据导出 JSON"),J=y.targets.filter(ae=>f0(ae,l));j1(`星表视场_${n.slice(0,10)}.json`,UA(y,J,A,B),"application/json")};return H.jsxs("div",{className:"app",children:[H.jsxs("header",{className:"app-header",children:[H.jsxs("div",{children:[H.jsx("h1",{children:"本地星图工具"}),H.jsx("p",{children:"球面（Three.js） · 立体投影 · 等距方位投影（D3 geo）三视对照 — 同一片天区、同一组目标"})]}),H.jsxs("div",{className:"export-bar",children:[H.jsx("button",{className:"btn",onClick:()=>ne("stereographic"),children:"导出 立体 SVG"}),H.jsx("button",{className:"btn",onClick:()=>ne("equidistant"),children:"导出 等距 SVG"}),H.jsx("button",{className:"btn",onClick:()=>_e("stereographic"),children:"导出 PNG"}),H.jsx("button",{className:"btn",onClick:be,children:"导出 JSON"})]})]}),H.jsxs("div",{className:"main-grid",children:[H.jsx("aside",{className:"sidebar",children:H.jsx(T5,{site:t,timeUtcIso:n,fov:r,magLimit:o,horizonClip:l,showHorizon:u,showGraticule:f,savedFovs:S,annotations:A,onChangeSite:e,onChangeTime:i,onChangeFov:s,onChangeMag:a,onToggleHorizonClip:c,onToggleShowHorizon:d,onToggleGraticule:p,onApplyScenario:$,onSaveFov:D,onLoadFov:Y,onDeleteFov:O,onAddAnnotation:L,onDeleteAnnotation:Z})}),H.jsx("main",{className:"content",children:y?H.jsxs(H.Fragment,{children:[H.jsxs("section",{className:"view-row globe-section",children:[H.jsx("h2",{className:"view-label",children:"球面视图 · 本地地平天球（Three.js）"}),H.jsx(z6,{sky:y,fov:r,horizonClip:l,showGraticule:f,annotations:A,selectedId:m,hoverId:g,onSelect:k,onHover:h,focusToken:_,graticuleHorizontal:M})]}),H.jsxs("section",{className:"view-row proj-section",children:[H.jsx(U1,{kind:"stereographic",sky:y,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:m,hoverId:g,onSelect:k,onHover:h}),H.jsx(U1,{kind:"equidistant",sky:y,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:m,hoverId:g,onSelect:k,onHover:h})]}),H.jsx(R5,{target:W,centerAlt:y.centerAlt,centerAz:y.centerAz,gmstHours:y.gmstHours,julianDay:y.julianDay})]}):H.jsx("div",{className:"bad-time",children:"时间格式无效，请检查 UTC 时间输入。"})})]}),H.jsx("footer",{className:"app-footer",children:"纯前端本地应用，无后端、无网络请求 · 星表 J2000.0 近似坐标 · 地平坐标转换 astronomy-engine（Rotation_EQJ_HOR，无大气折射）· 角距一律按球面 haversine 计算，图上像素距离不代表实际角距"})]})}p0.createRoot(document.getElementById("root")).render(H.jsx(J3.StrictMode,{children:H.jsx(XA,{})}));
