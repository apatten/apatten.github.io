var ve=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var s=(a,t,e)=>(ve(a,t,"read from private field"),e?e.call(a):t.get(a)),c=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)},b=(a,t,e,r)=>(ve(a,t,"write to private field"),r?r.call(a,e):t.set(a,e),e);var E=(a,t,e)=>(ve(a,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();const _e=["aria-label","role"];function Je(a){return _e.includes(a)||a.startsWith("@")}function ye(a){return a&&(a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)}function Ne(a){const t=typeof a;return t==="string"||t==="number"||t==="boolean"||t==="function"}function Te(a,t){t.forEach(e=>{Ye(a,e)})}function ze(a,t){const e=document.createTextNode(t);a.appendChild(e)}function Ke(a,t){const e=Y("div");a.appendChild(e),t.then(r=>{if(ye(r))a.replaceChild(r,e);else if(ye(r.element))a.replaceChild(r.element,e);else if(typeof r=="string"){const n=document.createTextNode(r);a.replaceChild(n,e)}else a.removeChild(e)})}function Ye(a,t){let e=!0;return Array.isArray(t)?Te(a,t):ye(t)?a.appendChild(t):typeof t=="string"?ze(a,t):t instanceof Promise?Ke(a,t):e=!1,e}function Ze(a,t){Object.keys(t).forEach(e=>{e in a.style&&(a.style[e]=t[e])})}function et(a,t){Object.keys(t).forEach(e=>{const r=t[e];Ne(r)&&(a.dataset[e]=r)})}function Y(a,t,...e){const r=document.createElement(a);return t&&(!Ye(r,t)&&t!==null&&typeof t=="object"&&Object.keys(t).forEach(i=>{if(i in r||Je(i)){const o=t[i];i==="style"?Ze(r,o):i==="dataset"?et(r,o):_e.includes(i)?r.setAttribute(i,o):i.startsWith("@")?r.setAttribute(i.substring(1),o):Ne(o)&&(r[i]=o)}}),e&&e.length>0&&Te(r,e)),r}function Ce(...a){const t=document.createDocumentFragment();return Te(t,a),t}new DOMParser;const Me=(...a)=>Y("button",...a),ge=(...a)=>Y("div",...a),Z=(...a)=>Y("p",...a),Oe=(...a)=>Y("span",...a);var _,F,N,I,L,ne,$e;class Pe{constructor({team:t,record:e}){c(this,ne);c(this,_,void 0);c(this,F,void 0);c(this,N,void 0);c(this,I,void 0);c(this,L,void 0);b(this,I,t.id),b(this,L,t.name),b(this,_,e.wins),b(this,F,e.losses),b(this,N,e.ot||0)}get name(){return s(this,L)}get logo(){return`/logos/${s(this,I)}_dark.svg`}get city(){const t=s(this,L).split(" ");return t[0].length>3?t[0]:`${t[0]} ${t[1]}`}get wins(){return s(this,_)}get losses(){return s(this,F)}get otWins(){return s(this,N)}get points(){return s(this,_)*2+s(this,N)}get pointsPercentage(){return this.points/s(this,ne,$e)}}_=new WeakMap,F=new WeakMap,N=new WeakMap,I=new WeakMap,L=new WeakMap,ne=new WeakSet,$e=function(){return(s(this,_)+s(this,F)+s(this,N))*2};var w,B,V,ie,Fe,pe,at,T,M;class tt{constructor(t){c(this,ie);c(this,pe);c(this,T);c(this,w,void 0);c(this,B,void 0);c(this,V,void 0);b(this,w,t),b(this,B,new Pe({team:s(this,w).teams.away.team,record:s(this,w).teams.away.leagueRecord})),b(this,V,new Pe({team:s(this,w).teams.home.team,record:s(this,w).teams.home.leagueRecord}))}get awayTeam(){return s(this,B)}get homeTeam(){return s(this,V)}get isRegularSeason(){return s(this,w).gameType==="R"}get isPlayoffs(){return s(this,w).gameType==="P"}get statusClass(){return this.scheduled?"game-status-scheduled":this.inProgress?"game-status-in-progress":this.final?"game-status-final":""}get statusString(){return this.scheduled||this.postponed?s(this,ie,Fe).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):s(this,w).status.detailedState}get inProgress(){return s(this,T,M)===3||s(this,T,M)===4}get final(){return s(this,T,M)===5||s(this,T,M)===6||s(this,T,M)===7}get scheduled(){return s(this,T,M)===1||s(this,T,M)===2||s(this,T,M)===8}get postponed(){return s(this,T,M)===9}get goalDifferential(){return Math.abs(s(this,w).teams.away.score-s(this,w).teams.home.score)}get strengthOfMatchUp(){if(this.isPlayoffs)return`${this.awayTeam.wins} - ${this.homeTeam.wins}`;const t=(this.awayTeam.pointsPercentage+this.homeTeam.pointsPercentage)/2,e=Math.abs(this.awayTeam.pointsPercentage-this.homeTeam.pointsPercentage),r=parseInt(Math.abs(t-e)*100);return Number.isNaN(r)?"-":r}}w=new WeakMap,B=new WeakMap,V=new WeakMap,ie=new WeakSet,Fe=function(){return new Date(s(this,w).gameDate)},pe=new WeakSet,at=function(){return Math.abs(this.homeTeam.points+this.awayTeam.points)},T=new WeakSet,M=function(){return parseInt(s(this,w).status.statusCode,10)};function te(a){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},te(a)}function O(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function m(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function C(a){m(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||te(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Le(a,t){m(2,arguments);var e=C(a),r=O(t);return isNaN(r)?new Date(NaN):(r&&e.setDate(e.getDate()+r),e)}function rt(a,t){m(2,arguments);var e=C(a).getTime(),r=O(t);return new Date(e+r)}var nt={};function de(){return nt}function it(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}function ot(a){return m(1,arguments),a instanceof Date||te(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function st(a){if(m(1,arguments),!ot(a)&&typeof a!="number")return!1;var t=C(a);return!isNaN(Number(t))}function ut(a,t){m(2,arguments);var e=O(t);return rt(a,-e)}var dt=864e5;function lt(a){m(1,arguments);var t=C(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/dt)+1}function ae(a){m(1,arguments);var t=1,e=C(a),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function qe(a){m(1,arguments);var t=C(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=ae(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=ae(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function ct(a){m(1,arguments);var t=qe(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=ae(e);return r}var ft=6048e5;function ht(a){m(1,arguments);var t=C(a),e=ae(t).getTime()-ct(t).getTime();return Math.round(e/ft)+1}function re(a,t){var e,r,n,i,o,d,f,l;m(1,arguments);var v=de(),h=O((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:v.weekStartsOn)!==null&&r!==void 0?r:(f=v.locale)===null||f===void 0||(l=f.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=C(a),g=y.getUTCDay(),D=(g<h?7:0)+g-h;return y.setUTCDate(y.getUTCDate()-D),y.setUTCHours(0,0,0,0),y}function Re(a,t){var e,r,n,i,o,d,f,l;m(1,arguments);var v=C(a),h=v.getUTCFullYear(),y=de(),g=O((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:y.firstWeekContainsDate)!==null&&r!==void 0?r:(f=y.locale)===null||f===void 0||(l=f.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var D=new Date(0);D.setUTCFullYear(h+1,0,g),D.setUTCHours(0,0,0,0);var A=re(D,t),x=new Date(0);x.setUTCFullYear(h,0,g),x.setUTCHours(0,0,0,0);var H=re(x,t);return v.getTime()>=A.getTime()?h+1:v.getTime()>=H.getTime()?h:h-1}function mt(a,t){var e,r,n,i,o,d,f,l;m(1,arguments);var v=de(),h=O((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&r!==void 0?r:(f=v.locale)===null||f===void 0||(l=f.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1),y=Re(a,t),g=new Date(0);g.setUTCFullYear(y,0,h),g.setUTCHours(0,0,0,0);var D=re(g,t);return D}var vt=6048e5;function gt(a,t){m(1,arguments);var e=C(a),r=re(e,t).getTime()-mt(e,t).getTime();return Math.round(r/vt)+1}function u(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}var wt={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return u(e==="yy"?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):u(r+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return u(i,e.length)}};const S=wt;var $={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},yt={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return S.y(t,e)},Y:function(t,e,r,n){var i=Re(t,n),o=i>0?i:1-i;if(e==="YY"){var d=o%100;return u(d,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var r=qe(t);return u(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return u(r,e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return S.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var i=gt(t,n);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,r){var n=ht(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):S.d(t,e)},D:function(t,e,r){var n=lt(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):u(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n=t.getUTCHours(),i;switch(n===12?i=$.noon:n===0?i=$.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n=t.getUTCHours(),i;switch(n>=17?i=$.evening:n>=12?i=$.afternoon:n>=4?i=$.morning:i=$.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return S.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):S.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):S.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):S.s(t,e)},S:function(t,e){return S.S(t,e)},X:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return ke(o);case"XXXX":case"XX":return U(o);case"XXXXX":case"XXX":default:return U(o,":")}},x:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return ke(o);case"xxxx":case"xx":return U(o);case"xxxxx":case"xxx":default:return U(o,":")}},O:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Se(o,":");case"OOOO":default:return"GMT"+U(o,":")}},z:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Se(o,":");case"zzzz":default:return"GMT"+U(o,":")}},t:function(t,e,r,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,r,n){var i=n._originalDate||t,o=i.getTime();return u(o,e.length)}};function Se(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+u(i,2)}function ke(a,t){if(a%60===0){var e=a>0?"-":"+";return e+u(Math.abs(a)/60,2)}return U(a,t)}function U(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a),i=u(Math.floor(n/60),2),o=u(n%60,2);return r+i+e+o}const bt=yt;var We=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ae=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},pt=function(t,e){var r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return We(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",We(n,e)).replace("{{time}}",Ae(i,e))},Tt={p:Ae,P:pt};const Dt=Tt;var Ct=["D","DD"],Mt=["YY","YYYY"];function Ot(a){return Ct.indexOf(a)!==-1}function Pt(a){return Mt.indexOf(a)!==-1}function xe(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var St={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},kt=function(t,e,r){var n,i=St[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const Wt=kt;function we(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,r=a.formats[e]||a.formats[a.defaultWidth];return r}}var xt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Et={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ut={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},_t={date:we({formats:xt,defaultWidth:"full"}),time:we({formats:Et,defaultWidth:"full"}),dateTime:we({formats:Ut,defaultWidth:"full"})};const Nt=_t;var Yt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$t=function(t,e,r,n){return Yt[t]};const Ft=$t;function Q(a){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var d=a.defaultWidth,f=e!=null&&e.width?String(e.width):a.defaultWidth;n=a.values[f]||a.values[d]}var l=a.argumentCallback?a.argumentCallback(t):t;return n[l]}}var Lt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},qt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Rt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},At={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ht={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Gt=function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Qt={ordinalNumber:Gt,era:Q({values:Lt,defaultWidth:"wide"}),quarter:Q({values:qt,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Q({values:Rt,defaultWidth:"wide"}),day:Q({values:At,defaultWidth:"wide"}),dayPeriod:Q({values:Ht,defaultWidth:"wide",formattingValues:jt,defaultFormattingWidth:"wide"})};const Xt=Qt;function X(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],d=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],f=Array.isArray(d)?Bt(d,function(h){return h.test(o)}):It(d,function(h){return h.test(o)}),l;l=a.valueCallback?a.valueCallback(f):f,l=e.valueCallback?e.valueCallback(l):l;var v=t.slice(o.length);return{value:l,rest:v}}}function It(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function Bt(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function Vt(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var d=t.slice(n.length);return{value:o,rest:d}}}var Jt=/^(\d+)(th|st|nd|rd)?/i,zt=/\d+/i,Kt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Zt={any:[/^b/i,/^(a|c)/i]},ea={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ta={any:[/1/i,/2/i,/3/i,/4/i]},aa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ra={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},na={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ia={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},oa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},sa={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ua={ordinalNumber:Vt({matchPattern:Jt,parsePattern:zt,valueCallback:function(t){return parseInt(t,10)}}),era:X({matchPatterns:Kt,defaultMatchWidth:"wide",parsePatterns:Zt,defaultParseWidth:"any"}),quarter:X({matchPatterns:ea,defaultMatchWidth:"wide",parsePatterns:ta,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:X({matchPatterns:aa,defaultMatchWidth:"wide",parsePatterns:ra,defaultParseWidth:"any"}),day:X({matchPatterns:na,defaultMatchWidth:"wide",parsePatterns:ia,defaultParseWidth:"any"}),dayPeriod:X({matchPatterns:oa,defaultMatchWidth:"any",parsePatterns:sa,defaultParseWidth:"any"})};const da=ua;var la={code:"en-US",formatDistance:Wt,formatLong:Nt,formatRelative:Ft,localize:Xt,match:da,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ca=la;var fa=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ha=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ma=/^'([^]*?)'?$/,va=/''/g,ga=/[a-zA-Z]/;function Ee(a,t,e){var r,n,i,o,d,f,l,v,h,y,g,D,A,x,H,le,ce,fe;m(2,arguments);var Qe=String(t),j=de(),G=(r=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:j.locale)!==null&&r!==void 0?r:ca,he=O((i=(o=(d=(f=e==null?void 0:e.firstWeekContainsDate)!==null&&f!==void 0?f:e==null||(l=e.locale)===null||l===void 0||(v=l.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&d!==void 0?d:j.firstWeekContainsDate)!==null&&o!==void 0?o:(h=j.locale)===null||h===void 0||(y=h.options)===null||y===void 0?void 0:y.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(he>=1&&he<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var me=O((g=(D=(A=(x=e==null?void 0:e.weekStartsOn)!==null&&x!==void 0?x:e==null||(H=e.locale)===null||H===void 0||(le=H.options)===null||le===void 0?void 0:le.weekStartsOn)!==null&&A!==void 0?A:j.weekStartsOn)!==null&&D!==void 0?D:(ce=j.locale)===null||ce===void 0||(fe=ce.options)===null||fe===void 0?void 0:fe.weekStartsOn)!==null&&g!==void 0?g:0);if(!(me>=0&&me<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!G.localize)throw new RangeError("locale must contain localize property");if(!G.formatLong)throw new RangeError("locale must contain formatLong property");var z=C(a);if(!st(z))throw new RangeError("Invalid time value");var Xe=it(z),Ie=ut(z,Xe),Be={firstWeekContainsDate:he,weekStartsOn:me,locale:G,_originalDate:z},Ve=Qe.match(ha).map(function(p){var P=p[0];if(P==="p"||P==="P"){var K=Dt[P];return K(p,G.formatLong)}return p}).join("").match(fa).map(function(p){if(p==="''")return"'";var P=p[0];if(P==="'")return wa(p);var K=bt[P];if(K)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Pt(p)&&xe(p,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Ot(p)&&xe(p,t,String(a)),K(Ie,p,G.localize,Be);if(P.match(ga))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return p}).join("");return Ve}function wa(a){var t=a.match(ma);return t?t[1].replace(va,"'"):a}function ya(a,t){m(2,arguments);var e=O(t);return Le(a,-e)}const ba="https://statsapi.web.nhl.com/api/v1",Ue=(...a)=>Y("img",...a);var k,q,J,W,R,ee,oe,He,se,je,ue,Ge;const De=class De{constructor(){c(this,R);c(this,oe);c(this,se);c(this,ue);c(this,k,void 0);c(this,q,void 0);c(this,J,void 0);c(this,W,void 0)}static async initialize(){var e,r;const t=new De;return E(e=t,se,je).call(e),await E(r=t,R,ee).call(r,new Date),t}};k=new WeakMap,q=new WeakMap,J=new WeakMap,W=new WeakMap,R=new WeakSet,ee=async function(t){b(this,W,t),E(this,ue,Ge).call(this),await E(this,oe,He).call(this),s(this,k).length>0?s(this,q).replaceChildren(Ce(s(this,k).map(e=>ge({className:"game"},Z(Ue({alt:`${e.awayTeam.name} logo`,className:"game-team-logo",src:e.awayTeam.logo,title:`${e.awayTeam.name} - ${e.awayTeam.pointsPercentage.toFixed(3)}`}),Oe({className:`strength-of-matchup ${e.statusClass}`},`${e.strengthOfMatchUp}`),Ue({alt:`${e.homeTeam.name} logo`,className:"game-team-logo",src:e.homeTeam.logo,title:`${e.homeTeam.name} - ${e.homeTeam.pointsPercentage.toFixed(3)}`})),(e.scheduled||e.postponed)&&Z(e.statusString),(e.inProgress||e.final)&&Z(`Goal Differential: ${e.goalDifferential}`))))):s(this,q).replaceChildren(Z("No Games"))},oe=new WeakSet,He=async function(){b(this,k,[]);const e=await(await fetch(`${ba}/schedule?date=${Ee(s(this,W),"yyyy-MM-dd")}`)).json();e.totalGames>0&&(b(this,k,e.dates[0].games.map(r=>new tt(r))),s(this,k).sort((r,n)=>r.strengthOfMatchUp<n.strengthOfMatchUp?1:r.strengthOfMatchUp>n.strengthOfMatchUp?-1:0))},se=new WeakSet,je=function(){this.element=ge(b(this,J,Y("nav")),b(this,q,ge({className:"games-container"})))},ue=new WeakSet,Ge=function(){const t=ya(s(this,W),1),e=Le(s(this,W),1);s(this,J).replaceChildren(Ce(Me({className:"previous",onclick:async()=>{await E(this,R,ee).call(this,t)}},"Previous"),Oe({className:"current"},Ee(s(this,W),"PP")),Me({onclick:async()=>{await E(this,R,ee).call(this,e)}},"Next")))};let be=De;(async()=>{const a=await be.initialize();document.querySelector("#app").appendChild(a.element)})();
