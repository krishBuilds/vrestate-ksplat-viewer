var $d=Object.defineProperty;var Jd=(o,e,t)=>e in o?$d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var he=(o,e,t)=>Jd(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="170",$i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ef=0,Rc=1,tf=2,Ku=1,nf=2,ni=3,zn=0,nn=1,vn=2,Ei=0,Ci=1,Ic=2,Pc=3,Dc=4,Zu=5,Hi=100,sf=101,rf=102,of=103,af=104,lf=200,cf=201,hf=202,uf=203,mr=204,gr=205,df=206,ff=207,pf=208,mf=209,gf=210,xf=211,vf=212,yf=213,Af=214,Va=0,Ga=1,Wa=2,bs=3,qa=4,Xa=5,Ya=6,Qa=7,$u=0,Sf=1,_f=2,Ti=0,Mf=1,Ef=2,Cf=3,Tf=4,wf=5,bf=6,Rf=7,Bc="attached",If="detached",Ju=300,Rs=301,Is=302,ja=303,Ka=304,Lo=306,Za=1e3,Xi=1001,$a=1002,un=1003,Pf=1004,br=1005,Nn=1006,Xo=1007,Yi=1008,kn=1009,ed=1010,td=1011,xr=1012,Hl=1013,yn=1014,ln=1015,Ns=1016,Vl=1017,Gl=1018,Ps=1020,nd=35902,id=1021,sd=1022,Wt=1023,rd=1024,od=1025,ji=1026,Ds=1027,Wl=1028,Uo=1029,ad=1030,ql=1031,Ms=1033,xo=33776,vo=33777,yo=33778,Ao=33779,Ja=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,vl=37820,yl=37821,So=36492,Al=36494,Sl=36495,ld=36283,_l=36284,Ml=36285,El=36286,Mo=2300,Cl=2301,Yo=2302,Fc=2400,Lc=2401,Uc=2402,Df=2500,vM=0,yM=1,AM=2,Bf=3200,Ff=3201,cd=0,Lf=1,_i="",xn="srgb",Os="srgb-linear",No="linear",ft="srgb",es=7680,Nc=519,Uf=512,Nf=513,Of=514,hd=515,zf=516,kf=517,Hf=518,Vf=519,Tl=35044,Gf=35048,Oc="300 es",oi=2e3,Eo=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const ar=Math.PI/180,Bs=180/Math.PI;function Rn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[o&255]+Vt[o>>8&255]+Vt[o>>16&255]+Vt[o>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function zt(o,e,t){return Math.max(e,Math.min(t,o))}function Xl(o,e){return(o%e+e)%e}function Wf(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function qf(o,e,t){return o!==e?(t-o)/(e-o):0}function lr(o,e,t){return(1-t)*o+t*e}function Xf(o,e,t,n){return lr(o,e,1-Math.exp(-t*n))}function Yf(o,e=1){return e-Math.abs(Xl(o,e*2)-e)}function Qf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function jf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Kf(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Zf(o,e){return o+Math.random()*(e-o)}function $f(o){return o*(.5-Math.random())}function Jf(o){o!==void 0&&(zc=o);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ep(o){return o*ar}function tp(o){return o*Bs}function np(o){return(o&o-1)===0&&o!==0}function ip(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function sp(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function rp(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*d,l*u,a*c);break;case"YZY":o.set(l*u,a*h,l*d,a*c);break;case"ZXZ":o.set(l*d,l*u,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ut(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ud={DEG2RAD:ar,RAD2DEG:Bs,generateUUID:Rn,clamp:zt,euclideanModulo:Xl,mapLinear:Wf,inverseLerp:qf,lerp:lr,damp:Xf,pingpong:Yf,smoothstep:Qf,smootherstep:jf,randInt:Kf,randFloat:Zf,randFloatSpread:$f,seededRandom:Jf,degToRad:ep,radToDeg:tp,isPowerOfTwo:np,ceilPowerOfTwo:ip,floorPowerOfTwo:sp,setQuaternionFromProperEuler:rp,normalize:ut,denormalize:Tn};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,r,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c)}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],p=i[3],m=i[6],v=i[1],A=i[4],y=i[7],M=i[2],E=i[5],_=i[8];return s[0]=r*x+a*v+l*M,s[3]=r*p+a*A+l*E,s[6]=r*m+a*y+l*_,s[1]=c*x+h*v+d*M,s[4]=c*p+h*A+d*E,s[7]=c*m+h*y+d*_,s[2]=u*x+f*v+g*M,s[5]=u*p+f*A+g*E,s[8]=u*m+f*y+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*r-a*c,u=a*l-h*s,f=c*s-r*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*r)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new ke;function dd(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function vr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function op(){const o=vr("canvas");return o.style.display="block",o}const kc={};function sr(o){o in kc||(kc[o]=!0,console.warn(o))}function ap(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function lp(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cp(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(o.r=ai(o.r),o.g=ai(o.g),o.b=ai(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(o.r=Es(o.r),o.g=Es(o.g),o.b=Es(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_i?No:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function ai(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Es(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Hc=[.64,.33,.3,.6,.15,.06],Vc=[.2126,.7152,.0722],Gc=[.3127,.329],Wc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[Os]:{primaries:Hc,whitePoint:Gc,transfer:No,toXYZ:Wc,fromXYZ:qc,luminanceCoefficients:Vc,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:Hc,whitePoint:Gc,transfer:ft,toXYZ:Wc,fromXYZ:qc,luminanceCoefficients:Vc,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});let ts;class hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=vr("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ai(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let up=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(jo(i[r].image)):s.push(jo(i[r]))}else s=jo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hp.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;class qt extends Ri{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Xi,i=Xi,s=Nn,r=Yi,a=Wt,l=kn,c=qt.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Rn(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Ju;qt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(f+1)/2,M=(m+1)/2,E=(h+u)/4,_=(d+x)/4,T=(g+p)/4;return A>y&&A>M?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=E/n,s=_/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=T/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=_/s,i=T/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends fp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pd extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Et=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],f=s[r+1],g=s[r+2],x=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let p=1-a;const m=l*u+c*f+h*g+d*x,v=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const M=Math.sqrt(A),E=Math.atan2(M,m*v);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M}const y=a*v;if(l=l*p+u*y,c=c*p+f*y,h=h*p+g*y,d=d*p+x*y,p===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),h=2*(a*t-s*i),d=2*(s*n-r*t);return this.x=t+l*c+r*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new D,Xc=new Et;class cn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,_n):_n.fromBufferAttribute(s,r),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Ir.subVectors(this.max,Xs),ns.subVectors(e.a,Xs),is.subVectors(e.b,Xs),ss.subVectors(e.c,Xs),di.subVectors(is,ns),fi.subVectors(ss,is),Pi.subVectors(ns,ss);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Pi.z,Pi.y,di.z,0,-di.x,fi.z,0,-fi.x,Pi.z,0,-Pi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Pi.y,Pi.x,0];return!Zo(t,ns,is,ss,Ir)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,ns,is,ss,Ir))?!1:(Pr.crossVectors(di,fi),t=[Pr.x,Pr.y,Pr.z],Zo(t,ns,is,ss,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new D,new D,new D,new D,new D,new D,new D,new D],_n=new D,Rr=new cn,ns=new D,is=new D,ss=new D,di=new D,fi=new D,Pi=new D,Xs=new D,Ir=new D,Pr=new D,Di=new D;function Zo(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Di.fromArray(o,s);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mp=new cn,Ys=new D,$o=new D;let ci=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add($o)),this.expandByPoint(Ys.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const qn=new D,Jo=new D,Dr=new D,pi=new D,ea=new D,Br=new D,ta=new D;let zs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jo.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Jo);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Dr),a=pi.dot(this.direction),l=-pi.dot(Dr),c=pi.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-a,u=r*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Jo).addScaledVector(Dr,u),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),i=qn.dot(qn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,i,s){ea.subVectors(t,e),Br.subVectors(n,e),ta.crossVectors(ea,Br);let r=this.direction.dot(ta),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(Br.crossVectors(pi,Br));if(l<0)return null;const c=a*this.direction.dot(ea.cross(pi));if(c<0||l+c>r)return null;const h=-a*pi.dot(ta);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Re{constructor(e,t,n,i,s,r,a,l,c,h,d,u,f,g,x,p){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c,h,d,u,f,g,x,p)}set(e,t,n,i,s,r,a,l,c,h,d,u,f,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),r=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,f=r*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=x+u*a,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*a,t[4]=-r*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=x-u*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,f=r*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,xp)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),mi.crossVectors(n,on),mi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),mi.crossVectors(n,on)),mi.normalize(),Fr.crossVectors(on,mi),i[0]=mi.x,i[4]=Fr.x,i[8]=on.x,i[1]=mi.y,i[5]=Fr.y,i[9]=on.y,i[2]=mi.z,i[6]=Fr.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],A=n[7],y=n[11],M=n[15],E=i[0],_=i[4],T=i[8],C=i[12],S=i[1],I=i[5],N=i[9],R=i[13],B=i[2],U=i[6],F=i[10],q=i[14],z=i[3],V=i[7],$=i[11],ae=i[15];return s[0]=r*E+a*S+l*B+c*z,s[4]=r*_+a*I+l*U+c*V,s[8]=r*T+a*N+l*F+c*$,s[12]=r*C+a*R+l*q+c*ae,s[1]=h*E+d*S+u*B+f*z,s[5]=h*_+d*I+u*U+f*V,s[9]=h*T+d*N+u*F+f*$,s[13]=h*C+d*R+u*q+f*ae,s[2]=g*E+x*S+p*B+m*z,s[6]=g*_+x*I+p*U+m*V,s[10]=g*T+x*N+p*F+m*$,s[14]=g*C+x*R+p*q+m*ae,s[3]=v*E+A*S+y*B+M*z,s[7]=v*_+A*I+y*U+M*V,s[11]=v*T+A*N+y*F+M*$,s[15]=v*C+A*R+y*q+M*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+x*(+t*l*f-t*c*u+s*r*u-i*r*f+i*c*h-s*l*h)+p*(+t*c*d-t*a*f-s*r*d+n*r*f+s*a*h-n*c*h)+m*(-i*a*h-t*l*d+t*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=d*p*c-x*u*c+x*l*f-a*p*f-d*l*m+a*u*m,A=g*u*c-h*p*c-g*l*f+r*p*f+h*l*m-r*u*m,y=h*x*c-g*d*c+g*a*f-r*x*f-h*a*m+r*d*m,M=g*d*l-h*x*l-g*a*u+r*x*u+h*a*p-r*d*p,E=t*v+n*A+i*y+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/E;return e[0]=v*_,e[1]=(x*u*s-d*p*s-x*i*f+n*p*f+d*i*m-n*u*m)*_,e[2]=(a*p*s-x*l*s+x*i*c-n*p*c-a*i*m+n*l*m)*_,e[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*_,e[4]=A*_,e[5]=(h*p*s-g*u*s+g*i*f-t*p*f-h*i*m+t*u*m)*_,e[6]=(g*l*s-r*p*s-g*i*c+t*p*c+r*i*m-t*l*m)*_,e[7]=(r*u*s-h*l*s+h*i*c-t*u*c-r*i*f+t*l*f)*_,e[8]=y*_,e[9]=(g*d*s-h*x*s-g*n*f+t*x*f+h*n*m-t*d*m)*_,e[10]=(r*x*s-g*a*s+g*n*c-t*x*c-r*n*m+t*a*m)*_,e[11]=(h*a*s-r*d*s-h*n*c+t*d*c+r*n*f-t*a*f)*_,e[12]=M*_,e[13]=(h*x*i-g*d*i+g*n*u-t*x*u-h*n*p+t*d*p)*_,e[14]=(g*a*i-r*x*i-g*n*l+t*x*l+r*n*p-t*a*p)*_,e[15]=(r*d*i-h*a*i+h*n*l-t*d*l-r*n*u+t*a*u)*_,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,d=a+a,u=s*c,f=s*h,g=s*d,x=r*h,p=r*d,m=a*d,v=l*c,A=l*h,y=l*d,M=n.x,E=n.y,_=n.z;return i[0]=(1-(x+m))*M,i[1]=(f+y)*M,i[2]=(g-A)*M,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+m))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+A)*_,i[9]=(p-v)*_,i[10]=(1-(u+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=rs.set(i[0],i[1],i[2]).length();const r=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);const c=1/s,h=1/r,d=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=oi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===oi)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Eo)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=oi){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(r-s),u=(t+e)*c,f=(n+i)*h;let g,x;if(a===oi)g=(r+s)*d,x=-2*d;else if(a===Eo)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new D,Mn=new Re,gp=new D(0,0,0),xp=new D(1,1,1),mi=new D,Fr=new D,on=new D,Yc=new Re,Qc=new Et;class gt{constructor(e=0,t=0,n=0,i=gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gt.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vp=0;const jc=new D,os=new Et,Xn=new Re,Lr=new D,Qs=new D,yp=new D,Ap=new Et,Kc=new D(1,0,0),Zc=new D(0,1,0),$c=new D(0,0,1),Jc={type:"added"},Sp={type:"removed"},as={type:"childadded",child:null},na={type:"childremoved",child:null};class xt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new D,t=new gt,n=new Et,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new ke}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis(Zc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis(Zc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Qs,Lr,this.up):Xn.lookAt(Lr,Qs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Xn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new D(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new D,Yn=new D,ia=new D,Qn=new D,ls=new D,cs=new D,eh=new D,sa=new D,ra=new D,oa=new D,aa=new nt,la=new nt,ca=new nt;class wn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){En.subVectors(i,t),Yn.subVectors(n,t),ia.subVectors(e,t);const r=En.dot(En),a=En.dot(Yn),l=En.dot(ia),c=Yn.dot(Yn),h=Yn.dot(ia),d=r*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(r*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(r,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(e,t),la.fromBufferAttribute(e,n),ca.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(aa,s.x),r.addScaledVector(la,s.y),r.addScaledVector(ca,s.z),r}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),Yn.subVectors(e,t),En.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;ls.subVectors(i,n),cs.subVectors(s,n),sa.subVectors(e,n);const l=ls.dot(sa),c=cs.dot(sa);if(l<=0&&c<=0)return t.copy(n);ra.subVectors(e,i);const h=ls.dot(ra),d=cs.dot(ra);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(ls,r);oa.subVectors(e,s);const f=ls.dot(oa),g=cs.dot(oa);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(cs,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return eh.subVectors(s,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(eh,a);const m=1/(p+x+u);return r=x*m,a=u*m,t.copy(n).addScaledVector(ls,r).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ha(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Xl(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ha(r,s,e+1/3),this.g=ha(r,s,e),this.b=ha(r,s,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(zt(Gt.r*255,0,255))*65536+Math.round(zt(Gt.g*255,0,255))*256+Math.round(zt(Gt.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,s=Gt.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=xn){it.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Ur);const n=lr(gi.h,Ur.h,t),i=lr(gi.s,Ur.s,t),s=lr(gi.l,Ur.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ke;Ke.NAMES=md;let _p=0,Ki=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Rn(),this.name="",this.blending=Ci,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class bi extends Ki{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gt,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const si=Mp();function Mp(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function Ep(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=zt(o,-65504,65504),si.floatView[0]=o;const e=si.uint32View[0],t=e>>23&511;return si.baseTable[t]+((e&8388607)>>si.shiftTable[t])}function Cp(o){const e=o>>10;return si.uint32View[0]=si.mantissaTable[si.offsetTable[e]+(o&1023)]+si.exponentTable[e],si.floatView[0]}const yr={toHalfFloat:Ep,fromHalfFloat:Cp},Pt=new D,Nr=new Me;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}}class gd extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xd extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tp=0;const mn=new Re,ua=new xt,hs=new D,an=new cn,js=new cn,Ot=new D;class sn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?xd:gd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(an.min,js.min),an.expandByPoint(Ot),Ot.addVectors(an.max,js.max),an.expandByPoint(Ot)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Ot.add(hs)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new D,l[T]=new D;const c=new D,h=new D,d=new D,u=new Me,f=new Me,g=new Me,x=new D,p=new D;function m(T,C,S){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),u.fromBufferAttribute(s,T),f.fromBufferAttribute(s,C),g.fromBufferAttribute(s,S),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[T].add(x),a[C].add(x),a[S].add(x),l[T].add(p),l[C].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,C=v.length;T<C;++T){const S=v[T],I=S.start,N=S.count;for(let R=I,B=I+N;R<B;R+=3)m(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const A=new D,y=new D,M=new D,E=new D;function _(T){M.fromBufferAttribute(i,T),E.copy(M);const C=a[T];A.copy(C),A.sub(M.multiplyScalar(M.dot(C))).normalize(),y.crossVectors(E,C);const I=y.dot(l[T])<0?-1:1;r.setXYZW(T,A.x,A.y,A.z,I)}for(let T=0,C=v.length;T<C;++T){const S=v[T],I=S.start,N=S.count;for(let R=I,B=I+N;R<B;R+=3)_(e.getX(R+0)),_(e.getX(R+1)),_(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,r=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new dn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new Re,Bi=new zs,Or=new ci,nh=new D,zr=new D,kr=new D,Hr=new D,da=new D,Vr=new D,ih=new D,Gr=new D;class Mt extends xt{constructor(e=new sn,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Vr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(da.fromBufferAttribute(d,e),r?Vr.addScaledVector(da,h):Vr.addScaledVector(da.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(Or.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Or,nh)===null||Bi.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(th),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),A=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,M=A;y<M;y+=3){const E=a.getX(y),_=a.getX(y+1),T=a.getX(y+2);i=Wr(this,m,e,n,c,h,d,E,_,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const v=a.getX(p),A=a.getX(p+1),y=a.getX(p+2);i=Wr(this,r,e,n,c,h,d,v,A,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,M=A;y<M;y+=3){const E=y,_=y+1,T=y+2;i=Wr(this,m,e,n,c,h,d,E,_,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const v=p,A=p+1,y=p+2;i=Wr(this,r,e,n,c,h,d,v,A,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function wp(o,e,t,n,i,s,r,a){let l;if(e.side===nn?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===zn,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:o}}function Wr(o,e,t,n,i,s,r,a,l,c){o.getVertexPosition(a,zr),o.getVertexPosition(l,kr),o.getVertexPosition(c,Hr);const h=wp(o,e,t,n,zr,kr,Hr,ih);if(h){const d=new D;wn.getBarycoord(ih,zr,kr,Hr,d),i&&(h.uv=wn.getInterpolatedAttribute(i,a,l,c,d,new Me)),s&&(h.uv1=wn.getInterpolatedAttribute(s,a,l,c,d,new Me)),r&&(h.normal=wn.getInterpolatedAttribute(r,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};wn.getNormal(zr,kr,Hr,u.normal),h.face=u,h.barycoord=d}return h}class ks extends sn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function g(x,p,m,v,A,y,M,E,_,T,C){const S=y/_,I=M/T,N=y/2,R=M/2,B=E/2,U=_+1,F=T+1;let q=0,z=0;const V=new D;for(let $=0;$<F;$++){const ae=$*I-R;for(let ie=0;ie<U;ie++){const Ie=ie*S-N;V[x]=Ie*v,V[p]=ae*A,V[m]=B,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[m]=E>0?1:-1,h.push(V.x,V.y,V.z),d.push(ie/_),d.push(1-$/T),q+=1}}for(let $=0;$<T;$++)for(let ae=0;ae<_;ae++){const ie=u+ae+U*$,Ie=u+ae+U*($+1),Y=u+(ae+1)+U*($+1),ee=u+(ae+1)+U*$;l.push(ie,Ie,ee),l.push(Ie,Y,ee),z+=6}a.addGroup(f,z,C),f+=z,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(o){const e={};for(let t=0;t<o.length;t++){const n=Fs(o[t]);for(const i in n)e[i]=n[i]}return e}function bp(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function vd(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Rp={clone:Fs,merge:Yt};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Ki{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yd extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new D,sh=new Me,rh=new Me;class tn extends yd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,sh,rh),t.subVectors(rh,sh)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class Dp extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(us,ds,e,t);i.layers=this.layers,this.add(i);const s=new tn(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new tn(us,ds,e,t);r.layers=this.layers,this.add(r);const a=new tn(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new tn(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new tn(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ad extends qt{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bp extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ad(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ks(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ei});s.uniforms.tEquirect.value=t;const r=new Mt(i,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Nn),new Dp(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const fa=new D,Fp=new D,Lp=new ke;let Ai=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fa.subVectors(n,t).cross(Fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lp.getNormalMatrix(e),i=this.coplanarPoint(fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Fi=new ci,qr=new D;class Ql{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,r=new Ai){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],x=i[10],p=i[11],m=i[12],v=i[13],A=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,p-f,y-m).normalize(),n[1].setComponents(l+s,u+c,p+f,y+m).normalize(),n[2].setComponents(l+r,u+h,p+g,y+v).normalize(),n[3].setComponents(l-r,u-h,p-g,y-v).normalize(),n[4].setComponents(l-a,u-d,p-x,y-A).normalize(),t===oi)n[5].setComponents(l+a,u+d,p+x,y+A).normalize();else if(t===Eo)n[5].setComponents(a,d,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qr.x=i.normal.x>0?e.max.x:e.min.x,qr.y=i.normal.y>0?e.max.y:e.min.y,qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sd(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Up(o){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=o.createBuffer();o.bindBuffer(l,u),o.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(o.bindBuffer(c,a),d.length===0)o.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];o.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class Ls extends sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const v=m*u-r;for(let A=0;A<c;A++){const y=A*d-s;g.push(y,-v,0),x.push(0,0,1),p.push(A/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const A=v+c*m,y=v+c*(m+1),M=v+1+c*(m+1),E=v+1+c*m;f.push(A,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Lm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ng=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Wg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Zg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,Jg=`#define LAMBERT
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
}`,e0=`#define MATCAP
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
}`,t0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,o0=`#define STANDARD
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
}`,a0=`#define STANDARD
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Np,alphahash_pars_fragment:Op,alphamap_fragment:zp,alphamap_pars_fragment:kp,alphatest_fragment:Hp,alphatest_pars_fragment:Vp,aomap_fragment:Gp,aomap_pars_fragment:Wp,batching_pars_vertex:qp,batching_vertex:Xp,begin_vertex:Yp,beginnormal_vertex:Qp,bsdfs:jp,iridescence_fragment:Kp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:em,clipping_planes_vertex:tm,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:sm,color_vertex:rm,common:om,cube_uv_reflection_fragment:am,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:xm,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Rm,envmap_vertex:ym,fog_vertex:Am,fog_pars_vertex:Sm,fog_fragment:_m,fog_pars_fragment:Mm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Cm,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:wm,lights_pars_begin:bm,lights_toon_fragment:Im,lights_toon_pars_fragment:Pm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Bm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Vm,map_fragment:Gm,map_pars_fragment:Wm,map_particle_fragment:qm,map_particle_pars_fragment:Xm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:Qm,morphinstance_vertex:jm,morphcolor_vertex:Km,morphnormal_vertex:Zm,morphtarget_pars_vertex:$m,morphtarget_vertex:Jm,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:yg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Sg,skinbase_vertex:_g,skinning_pars_vertex:Mg,skinning_vertex:Eg,skinnormal_vertex:Cg,specularmap_fragment:Tg,specularmap_pars_fragment:wg,tonemapping_fragment:bg,tonemapping_pars_fragment:Rg,transmission_fragment:Ig,transmission_pars_fragment:Pg,uv_pars_fragment:Dg,uv_pars_vertex:Bg,uv_vertex:Fg,worldpos_vertex:Lg,background_vert:Ug,background_frag:Ng,backgroundCube_vert:Og,backgroundCube_frag:zg,cube_vert:kg,cube_frag:Hg,depth_vert:Vg,depth_frag:Gg,distanceRGBA_vert:Wg,distanceRGBA_frag:qg,equirect_vert:Xg,equirect_frag:Yg,linedashed_vert:Qg,linedashed_frag:jg,meshbasic_vert:Kg,meshbasic_frag:Zg,meshlambert_vert:$g,meshlambert_frag:Jg,meshmatcap_vert:e0,meshmatcap_frag:t0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:o0,meshphysical_frag:a0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:u0,shadow_vert:d0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Un={basic:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Yt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Yt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Yt([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Yt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Yt([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Yt([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Yt([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Yt([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Un.physical={uniforms:Yt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Xr={r:0,b:0,g:0},Li=new gt,g0=new Re;function x0(o,e,t,n,i,s,r){const a=new Ke(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let A=v.isScene===!0?v.background:null;return A&&A.isTexture&&(A=(v.backgroundBlurriness>0?t:e).get(A)),A}function x(v){let A=!1;const y=g(v);y===null?m(a,l):y&&y.isColor&&(m(y,1),A=!0);const M=o.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function p(v,A){const y=g(A);y&&(y.isCubeTexture||y.mapping===Lo)?(h===void 0&&(h=new Mt(new ks(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Fs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Li.copy(A.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(Li)),h.material.toneMapped=it.getTransfer(y.colorSpace)!==ft,(d!==y||u!==y.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=o.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Mt(new Ls(2,2),new fn({name:"BackgroundMaterial",uniforms:Fs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=o.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,A){v.getRGB(Xr,vd(o)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,A,r)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),l=A,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:p}}function v0(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,r=!1;function a(S,I,N,R,B){let U=!1;const F=d(R,N,I);s!==F&&(s=F,c(s.object)),U=f(S,R,N,B),U&&g(S,R,N,B),B!==null&&e.update(B,o.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,y(S,I,N,R),B!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return o.createVertexArray()}function c(S){return o.bindVertexArray(S)}function h(S){return o.deleteVertexArray(S)}function d(S,I,N){const R=N.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let U=B[I.id];U===void 0&&(U={},B[I.id]=U);let F=U[R];return F===void 0&&(F=u(l()),U[R]=F),F}function u(S){const I=[],N=[],R=[];for(let B=0;B<t;B++)I[B]=0,N[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:R,object:S,attributes:{},index:null}}function f(S,I,N,R){const B=s.attributes,U=I.attributes;let F=0;const q=N.getAttributes();for(const z in q)if(q[z].location>=0){const $=B[z];let ae=U[z];if(ae===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;F++}return s.attributesNum!==F||s.index!==R}function g(S,I,N,R){const B={},U=I.attributes;let F=0;const q=N.getAttributes();for(const z in q)if(q[z].location>=0){let $=U[z];$===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),B[z]=ae,F++}s.attributes=B,s.attributesNum=F,s.index=R}function x(){const S=s.newAttributes;for(let I=0,N=S.length;I<N;I++)S[I]=0}function p(S){m(S,0)}function m(S,I){const N=s.newAttributes,R=s.enabledAttributes,B=s.attributeDivisors;N[S]=1,R[S]===0&&(o.enableVertexAttribArray(S),R[S]=1),B[S]!==I&&(o.vertexAttribDivisor(S,I),B[S]=I)}function v(){const S=s.newAttributes,I=s.enabledAttributes;for(let N=0,R=I.length;N<R;N++)I[N]!==S[N]&&(o.disableVertexAttribArray(N),I[N]=0)}function A(S,I,N,R,B,U,F){F===!0?o.vertexAttribIPointer(S,I,N,B,U):o.vertexAttribPointer(S,I,N,R,B,U)}function y(S,I,N,R){x();const B=R.attributes,U=N.getAttributes(),F=I.defaultAttributeValues;for(const q in U){const z=U[q];if(z.location>=0){let V=B[q];if(V===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const $=V.normalized,ae=V.itemSize,ie=e.get(V);if(ie===void 0)continue;const Ie=ie.buffer,Y=ie.type,ee=ie.bytesPerElement,le=Y===o.INT||Y===o.UNSIGNED_INT||V.gpuType===Hl;if(V.isInterleavedBufferAttribute){const re=V.data,Ae=re.stride,we=V.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<z.locationSize;Pe++)m(z.location+Pe,re.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<z.locationSize;Pe++)p(z.location+Pe);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Pe=0;Pe<z.locationSize;Pe++)A(z.location+Pe,ae/z.locationSize,Y,$,Ae*ee,(we+ae/z.locationSize*Pe)*ee,le)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<z.locationSize;re++)m(z.location+re,V.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<z.locationSize;re++)p(z.location+re);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let re=0;re<z.locationSize;re++)A(z.location+re,ae/z.locationSize,Y,$,ae*ee,ae/z.locationSize*re*ee,le)}}else if(F!==void 0){const $=F[q];if($!==void 0)switch($.length){case 2:o.vertexAttrib2fv(z.location,$);break;case 3:o.vertexAttrib3fv(z.location,$);break;case 4:o.vertexAttrib4fv(z.location,$);break;default:o.vertexAttrib1fv(z.location,$)}}}}v()}function M(){T();for(const S in n){const I=n[S];for(const N in I){const R=I[N];for(const B in R)h(R[B].object),delete R[B];delete I[N]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const N in I){const R=I[N];for(const B in R)h(R[B].object),delete R[B];delete I[N]}delete n[S.id]}function _(S){for(const I in n){const N=n[I];if(N[S.id]===void 0)continue;const R=N[S.id];for(const B in R)h(R[B].object),delete R[B];delete N[S.id]}}function T(){C(),r=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function y0(o,e,t){let n;function i(c){n=c}function s(c,h){o.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,d){d!==0&&(o.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A0(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(_){return!(_!==Wt&&n.convert(_)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const T=_===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==kn&&n.convert(_)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==ln&&!T)}function l(_){if(_==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),p=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),A=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,E=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:M,maxSamples:E}}function S0(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Ai,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=o.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,A=v*4;let y=m.clippingState||null;l.value=y,y=h(g,u,A,f);for(let M=0;M!==A;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,y=f;A!==x;++A,y+=4)r.copy(d[A]).applyMatrix4(v,a),r.normal.toArray(p,y),p[y+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function _0(o){let e=new WeakMap;function t(r,a){return a===ja?r.mapping=Rs:a===Ka&&(r.mapping=Is),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ja||a===Ka)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Bp(l.height);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Oo extends yd{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ss=4,oh=[.125,.215,.35,.446,.526,.582],Vi=20,pa=new Oo,ah=new Ke;let ma=null,ga=0,xa=0,va=!1;const ki=(1+Math.sqrt(5))/2,fs=1/ki,lh=[new D(-ki,fs,0),new D(ki,fs,0),new D(-fs,0,ki),new D(fs,0,ki),new D(0,ki,-fs),new D(0,ki,fs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,xa),this._renderer.xr.enabled=va,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ns,format:Wt,colorSpace:Os,depthBuffer:!1},i=hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M0(s)),this._blurMaterial=E0(s,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,i){const a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ah),h.toneMapping=Ti,h.autoClear=!1;const f=new bi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Mt(new ks,f);let x=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(ah),x=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const A=this._cubeSize;Yr(i,v*A,m>2?A:0,A,A),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rs||e.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lh[(i-s-1)%lh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Mt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):Vi;p>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const m=[];let v=0;for(let _=0;_<Vi;++_){const T=_/x,C=Math.exp(-T*T/2);m.push(C),_===0?v+=C:_<p&&(v+=2*C)}for(let _=0;_<m.length;_++)m[_]=m[_]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-n;const y=this._sizeLods[i],M=3*y*(i>A-Ss?i-A+Ss:0),E=4*(this._cubeSize-y);Yr(t,M,E,3*y,2*y),l.setRenderTarget(t),l.render(d,pa)}}function M0(o){const e=[],t=[],n=[];let i=o;const s=o-Ss+1+oh.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Ss?l=oh[r-o+Ss-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),A=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let E=0;E<f;E++){const _=E%3*2/3-1,T=E>2?0:-1,C=[_,T,0,_+2/3,T,0,_+2/3,T+1,0,_,T,0,_+2/3,T+1,0,_,T+1,0];v.set(C,x*g*E),A.set(u,p*g*E);const S=[E,E,E,E,E,E];y.set(S,m*g*E)}const M=new sn;M.setAttribute("position",new dn(v,x)),M.setAttribute("uv",new dn(A,p)),M.setAttribute("faceIndex",new dn(y,m)),e.push(M),i>Ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hh(o,e,t){const n=new wi(o,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function E0(o,e,t){const n=new Float32Array(Vi),i=new D(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function uh(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function dh(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function C0(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ja||l===Ka,h=l===Rs||l===Is;if(c||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ch(o)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new ch(o)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function T0(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function w0(o,e,t,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],o.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],o.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let A=0,y=v.length;A<y;A+=3){const M=v[A+0],E=v[A+1],_=v[A+2];u.push(M,E,E,_,_,M)}}else if(g!==void 0){const v=g.array;x=g.version;for(let A=0,y=v.length/3-1;A<y;A+=3){const M=A+0,E=A+1,_=A+2;u.push(M,E,E,_,_,M)}}else return;const p=new(dd(u)?xd:gd)(u,1);p.version=x;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function b0(o,e,t){let n;function i(u){n=u}let s,r;function a(u){s=u.type,r=u.bytesPerElement}function l(u,f){o.drawElements(n,f,s,u*r),t.update(f,n,1)}function c(u,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,u*r,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function d(u,f,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/r,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*x[v];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function R0(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function I0(o,e,t){const n=new WeakMap,i=new nt;function s(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let A=0;f===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let y=a.attributes.position.count*A,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*M*4*d),_=new pd(E,y,M,d);_.type=ln,_.needsUpdate=!0;const T=A*4;for(let S=0;S<d;S++){const I=p[S],N=m[S],R=v[S],B=y*M*4*S;for(let U=0;U<I.count;U++){const F=U*T;f===!0&&(i.fromBufferAttribute(I,U),E[B+F+0]=i.x,E[B+F+1]=i.y,E[B+F+2]=i.z,E[B+F+3]=0),g===!0&&(i.fromBufferAttribute(N,U),E[B+F+4]=i.x,E[B+F+5]=i.y,E[B+F+6]=i.z,E[B+F+7]=0),x===!0&&(i.fromBufferAttribute(R,U),E[B+F+8]=i.x,E[B+F+9]=i.y,E[B+F+10]=i.z,E[B+F+11]=R.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new Me(y,M)},n.set(a,u),a.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(o,"morphTargetBaseInfluence",g),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",u.size)}return{update:s}}function P0(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class Kl extends qt{constructor(e,t,n,i,s,r,a,l,c,h=ji){if(h!==ji&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=yn),n===void 0&&h===Ds&&(n=Ps),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _d=new qt,fh=new Kl(1,1),Md=new pd,Ed=new pp,Cd=new Ad,ph=[],mh=[],gh=new Float32Array(16),xh=new Float32Array(9),vh=new Float32Array(4);function Hs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=ph[i];if(s===void 0&&(s=new Float32Array(i),ph[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Ut(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Nt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function zo(o,e){let t=mh[e];t===void 0&&(t=new Int32Array(e),mh[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function D0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function B0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;o.uniform2fv(this.addr,e),Nt(t,e)}}function F0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;o.uniform3fv(this.addr,e),Nt(t,e)}}function L0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;o.uniform4fv(this.addr,e),Nt(t,e)}}function U0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;vh.set(n),o.uniformMatrix2fv(this.addr,!1,vh),Nt(t,n)}}function N0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;xh.set(n),o.uniformMatrix3fv(this.addr,!1,xh),Nt(t,n)}}function O0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;gh.set(n),o.uniformMatrix4fv(this.addr,!1,gh),Nt(t,n)}}function z0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function k0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;o.uniform2iv(this.addr,e),Nt(t,e)}}function H0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;o.uniform3iv(this.addr,e),Nt(t,e)}}function V0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;o.uniform4iv(this.addr,e),Nt(t,e)}}function G0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function W0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;o.uniform2uiv(this.addr,e),Nt(t,e)}}function q0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;o.uniform3uiv(this.addr,e),Nt(t,e)}}function X0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;o.uniform4uiv(this.addr,e),Nt(t,e)}}function Y0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(fh.compareFunction=hd,s=fh):s=_d,t.setTexture2D(e||s,i)}function Q0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ed,i)}function j0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cd,i)}function K0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Md,i)}function Z0(o){switch(o){case 5126:return D0;case 35664:return B0;case 35665:return F0;case 35666:return L0;case 35674:return U0;case 35675:return N0;case 35676:return O0;case 5124:case 35670:return z0;case 35667:case 35671:return k0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return q0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return K0}}function $0(o,e){o.uniform1fv(this.addr,e)}function J0(o,e){const t=Hs(e,this.size,2);o.uniform2fv(this.addr,t)}function ex(o,e){const t=Hs(e,this.size,3);o.uniform3fv(this.addr,t)}function tx(o,e){const t=Hs(e,this.size,4);o.uniform4fv(this.addr,t)}function nx(o,e){const t=Hs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ix(o,e){const t=Hs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function sx(o,e){const t=Hs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function rx(o,e){o.uniform1iv(this.addr,e)}function ox(o,e){o.uniform2iv(this.addr,e)}function ax(o,e){o.uniform3iv(this.addr,e)}function lx(o,e){o.uniform4iv(this.addr,e)}function cx(o,e){o.uniform1uiv(this.addr,e)}function hx(o,e){o.uniform2uiv(this.addr,e)}function ux(o,e){o.uniform3uiv(this.addr,e)}function dx(o,e){o.uniform4uiv(this.addr,e)}function fx(o,e,t){const n=this.cache,i=e.length,s=zo(t,i);Ut(n,s)||(o.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||_d,s[r])}function px(o,e,t){const n=this.cache,i=e.length,s=zo(t,i);Ut(n,s)||(o.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ed,s[r])}function mx(o,e,t){const n=this.cache,i=e.length,s=zo(t,i);Ut(n,s)||(o.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Cd,s[r])}function gx(o,e,t){const n=this.cache,i=e.length,s=zo(t,i);Ut(n,s)||(o.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Md,s[r])}function xx(o){switch(o){case 5126:return $0;case 35664:return J0;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}class vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z0(t.type)}}class yx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xx(t.type)}}class Ax{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function yh(o,e){o.seq.push(e),o.map[e.id]=e}function Sx(o,e,t){const n=o.name,i=n.length;for(ya.lastIndex=0;;){const s=ya.exec(n),r=ya.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){yh(t,c===void 0?new vx(a,o,e):new yx(a,o,e));break}else{let d=t.map[a];d===void 0&&(d=new Ax(a),yh(t,d)),t=d}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Sx(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Ah(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const _x=37297;let Mx=0;function Ex(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const Sh=new ke;function Cx(o){it._getMatrix(Sh,it.workingColorSpace,o);const e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(o)){case No:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _h(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ex(o.getShaderSource(e),r)}else return i}function Tx(o,e){const t=Cx(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wx(o,e){let t;switch(e){case Mf:t="Linear";break;case Ef:t="Reinhard";break;case Cf:t="Cineon";break;case Tf:t="ACESFilmic";break;case bf:t="AgX";break;case Rf:t="Neutral";break;case wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new D;function bx(){it.getLuminanceCoefficients(Qr);const o=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rx(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Ix(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Px(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function rr(o){return o!==""}function Mh(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(o){return o.replace(Dx,Fx)}const Bx=new Map;function Fx(o,e){let t=je[e];if(t===void 0){const n=Bx.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(o){return o.replace(Lx,Ux)}function Ux(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Th(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nx(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Ox(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Rs:case Is:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zx(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function kx(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $u:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case _f:e="ENVMAP_BLENDING_ADD";break}return e}function Hx(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vx(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=Nx(t),c=Ox(t),h=zx(t),d=kx(t),u=Hx(t),f=Rx(t),g=Ix(s),x=i.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(p=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?je.tonemapping_pars_fragment:"",t.toneMapping!==Ti?wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Tx("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),r=wl(r),r=Mh(r,t),r=Eh(r,t),a=wl(a),a=Mh(a,t),a=Eh(a,t),r=Ch(r),a=Ch(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=v+p+r,y=v+m+a,M=Ah(i,i.VERTEX_SHADER,A),E=Ah(i,i.FRAGMENT_SHADER,y);i.attachShader(x,M),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function _(I){if(o.debug.checkShaderErrors){const N=i.getProgramInfoLog(x).trim(),R=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(E).trim();let U=!0,F=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,x,M,E);else{const q=_h(i,M,"vertex"),z=_h(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+q+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||B==="")&&(F=!1);F&&(I.diagnostics={runnable:U,programLog:N,vertexShader:{log:R,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(M),i.deleteShader(E),T=new _o(i,x),C=Px(i,x)}let T;this.getUniforms=function(){return T===void 0&&_(this),T};let C;this.getAttributes=function(){return C===void 0&&_(this),C};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,_x)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}let Gx=0;class Wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qx(e),t.set(e,n)),n}}class qx{constructor(e){this.id=Gx++,this.code=e,this.usedTimes=0}}function Xx(o,e,t,n,i,s,r){const a=new Yl,l=new Wx,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(C){return c.add(C),C===0?"uv":`uv${C}`}function p(C,S,I,N,R){const B=N.fog,U=R.geometry,F=C.isMeshStandardMaterial?N.environment:null,q=(C.isMeshStandardMaterial?t:e).get(C.envMap||F),z=q&&q.mapping===Lo?q.image.height:null,V=g[C.type];C.precision!==null&&(f=i.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ae=$!==void 0?$.length:0;let ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let Ie,Y,ee,le;if(V){const ct=Un[V];Ie=ct.vertexShader,Y=ct.fragmentShader}else Ie=C.vertexShader,Y=C.fragmentShader,l.update(C),ee=l.getVertexShaderID(C),le=l.getFragmentShaderID(C);const re=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),we=R.isInstancedMesh===!0,Pe=R.isBatchedMesh===!0,Ye=!!C.map,Oe=!!C.matcap,We=!!q,k=!!C.aoMap,Ze=!!C.lightMap,He=!!C.bumpMap,qe=!!C.normalMap,Se=!!C.displacementMap,$e=!!C.emissiveMap,De=!!C.metalnessMap,L=!!C.roughnessMap,b=C.anisotropy>0,X=C.clearcoat>0,ne=C.dispersion>0,oe=C.iridescence>0,te=C.sheen>0,Be=C.transmission>0,ve=b&&!!C.anisotropyMap,Ce=X&&!!C.clearcoatMap,et=X&&!!C.clearcoatNormalMap,ce=X&&!!C.clearcoatRoughnessMap,O=oe&&!!C.iridescenceMap,se=oe&&!!C.iridescenceThicknessMap,Ee=te&&!!C.sheenColorMap,de=te&&!!C.sheenRoughnessMap,ze=!!C.specularMap,Ve=!!C.specularColorMap,tt=!!C.specularIntensityMap,H=Be&&!!C.transmissionMap,me=Be&&!!C.thicknessMap,K=!!C.gradientMap,J=!!C.alphaMap,xe=C.alphaTest>0,pe=!!C.alphaHash,Ge=!!C.extensions;let mt=Ti;C.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(mt=o.toneMapping);const Ht={shaderID:V,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Y,defines:C.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&R._colorsTexture!==null,instancing:we,instancingColor:we&&R.instanceColor!==null,instancingMorph:we&&R.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?o.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Os,alphaToCoverage:!!C.alphaToCoverage,map:Ye,matcap:Oe,envMap:We,envMapMode:We&&q.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:Ze,bumpMap:He,normalMap:qe,displacementMap:u&&Se,emissiveMap:$e,normalMapObjectSpace:qe&&C.normalMapType===Lf,normalMapTangentSpace:qe&&C.normalMapType===cd,metalnessMap:De,roughnessMap:L,anisotropy:b,anisotropyMap:ve,clearcoat:X,clearcoatMap:Ce,clearcoatNormalMap:et,clearcoatRoughnessMap:ce,dispersion:ne,iridescence:oe,iridescenceMap:O,iridescenceThicknessMap:se,sheen:te,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ze,specularColorMap:Ve,specularIntensityMap:tt,transmission:Be,transmissionMap:H,thicknessMap:me,gradientMap:K,opaque:C.transparent===!1&&C.blending===Ci&&C.alphaToCoverage===!1,alphaMap:J,alphaTest:xe,alphaHash:pe,combine:C.combine,mapUv:Ye&&x(C.map.channel),aoMapUv:k&&x(C.aoMap.channel),lightMapUv:Ze&&x(C.lightMap.channel),bumpMapUv:He&&x(C.bumpMap.channel),normalMapUv:qe&&x(C.normalMap.channel),displacementMapUv:Se&&x(C.displacementMap.channel),emissiveMapUv:$e&&x(C.emissiveMap.channel),metalnessMapUv:De&&x(C.metalnessMap.channel),roughnessMapUv:L&&x(C.roughnessMap.channel),anisotropyMapUv:ve&&x(C.anisotropyMap.channel),clearcoatMapUv:Ce&&x(C.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(C.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&x(C.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(C.sheenColorMap.channel),sheenRoughnessMapUv:de&&x(C.sheenRoughnessMap.channel),specularMapUv:ze&&x(C.specularMap.channel),specularColorMapUv:Ve&&x(C.specularColorMap.channel),specularIntensityMapUv:tt&&x(C.specularIntensityMap.channel),transmissionMapUv:H&&x(C.transmissionMap.channel),thicknessMapUv:me&&x(C.thicknessMap.channel),alphaMapUv:J&&x(C.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(qe||b),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!U.attributes.uv&&(Ye||J),fog:!!B,useFog:C.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:R.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ye&&C.map.isVideoTexture===!0&&it.getTransfer(C.map.colorSpace)===ft,decodeVideoTextureEmissive:$e&&C.emissiveMap.isVideoTexture===!0&&it.getTransfer(C.emissiveMap.colorSpace)===ft,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===vn,flipSided:C.side===nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ge&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&C.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function m(C){const S=[];if(C.shaderID?S.push(C.shaderID):(S.push(C.customVertexShaderID),S.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)S.push(I),S.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(v(S,C),A(S,C),S.push(o.outputColorSpace)),S.push(C.customProgramCacheKey),S.join()}function v(C,S){C.push(S.precision),C.push(S.outputColorSpace),C.push(S.envMapMode),C.push(S.envMapCubeUVHeight),C.push(S.mapUv),C.push(S.alphaMapUv),C.push(S.lightMapUv),C.push(S.aoMapUv),C.push(S.bumpMapUv),C.push(S.normalMapUv),C.push(S.displacementMapUv),C.push(S.emissiveMapUv),C.push(S.metalnessMapUv),C.push(S.roughnessMapUv),C.push(S.anisotropyMapUv),C.push(S.clearcoatMapUv),C.push(S.clearcoatNormalMapUv),C.push(S.clearcoatRoughnessMapUv),C.push(S.iridescenceMapUv),C.push(S.iridescenceThicknessMapUv),C.push(S.sheenColorMapUv),C.push(S.sheenRoughnessMapUv),C.push(S.specularMapUv),C.push(S.specularColorMapUv),C.push(S.specularIntensityMapUv),C.push(S.transmissionMapUv),C.push(S.thicknessMapUv),C.push(S.combine),C.push(S.fogExp2),C.push(S.sizeAttenuation),C.push(S.morphTargetsCount),C.push(S.morphAttributeCount),C.push(S.numDirLights),C.push(S.numPointLights),C.push(S.numSpotLights),C.push(S.numSpotLightMaps),C.push(S.numHemiLights),C.push(S.numRectAreaLights),C.push(S.numDirLightShadows),C.push(S.numPointLightShadows),C.push(S.numSpotLightShadows),C.push(S.numSpotLightShadowsWithMaps),C.push(S.numLightProbes),C.push(S.shadowMapType),C.push(S.toneMapping),C.push(S.numClippingPlanes),C.push(S.numClipIntersection),C.push(S.depthPacking)}function A(C,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),C.push(a.mask)}function y(C){const S=g[C.type];let I;if(S){const N=Un[S];I=Rp.clone(N.uniforms)}else I=C.uniforms;return I}function M(C,S){let I;for(let N=0,R=h.length;N<R;N++){const B=h[N];if(B.cacheKey===S){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Vx(o,S,C,s),h.push(I)),I}function E(C){if(--C.usedTimes===0){const S=h.indexOf(C);h[S]=h[h.length-1],h.pop(),C.destroy()}}function _(C){l.remove(C)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:_,programs:h,dispose:T}}function Yx(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Qx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function wh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function bh(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,f,g,x,p){let m=o[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},o[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),e++,m}function a(d,u,f,g,x,p){const m=r(d,u,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,u,f,g,x,p){const m=r(d,u,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||Qx),n.length>1&&n.sort(u||wh),i.length>1&&i.sort(u||wh)}function h(){for(let d=e,u=o.length;d<u;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function jx(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new bh,o.set(n,[r])):i>=s.length?(r=new bh,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Kx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ke};break;case"SpotLight":t={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return o[e.id]=t,t}}}function Zx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let $x=0;function Jx(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ev(o){const e=new Kx,t=Zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Re,r=new Re;function a(c){let h=0,d=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,A=0,y=0,M=0,E=0,_=0;c.sort(Jx);for(let C=0,S=c.length;C<S;C++){const I=c[C],N=I.color,R=I.intensity,B=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*R,d+=N.g*R,u+=N.b*R;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],R);_++}else if(I.isDirectionalLight){const F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,z=t.get(I);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=F,f++}else if(I.isSpotLight){const F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(N).multiplyScalar(R),F.distance=B,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[x]=F;const q=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,q.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=q.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=U,y++}x++}else if(I.isRectAreaLight){const F=e.get(I);F.color.copy(N).multiplyScalar(R),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=F,p++}else if(I.isPointLight){const F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const q=I.shadow,z=t.get(I);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=I.shadow.matrix,A++}n.point[g]=F,g++}else if(I.isHemisphereLight){const F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(R),F.groundColor.copy(I.groundColor).multiplyScalar(R),n.hemi[m]=F,m++}}p>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==p||T.hemiLength!==m||T.numDirectionalShadows!==v||T.numPointShadows!==A||T.numSpotShadows!==y||T.numSpotMaps!==M||T.numLightProbes!==_)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=_,T.directionalLength=f,T.pointLength=g,T.spotLength=x,T.rectAreaLength=p,T.hemiLength=m,T.numDirectionalShadows=v,T.numPointShadows=A,T.numSpotShadows=y,T.numSpotMaps=M,T.numLightProbes=_,n.version=$x++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const A=c[m];if(A.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(A.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(A.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),r.identity(),s.copy(A.matrixWorld),s.premultiply(p),r.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(A.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),u++}else if(A.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Rh(o){const e=new ev(o),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function r(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function tv(o){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let a;return r===void 0?(a=new Rh(o),e.set(i,[a])):s>=r.length?(a=new Rh(o),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class nv extends Ki{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iv extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
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
}`;function ov(o,e,t){let n=new Ql;const i=new Me,s=new Me,r=new nt,a=new nv({depthPacking:Ff}),l=new iv,c={},h=t.maxTextureSize,d={[zn]:nn,[nn]:zn,[vn]:vn},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let m=this.type;this.render=function(E,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const C=o.getRenderTarget(),S=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),N=o.state;N.setBlending(Ei),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const R=m!==ni&&this.type===ni,B=m===ni&&this.type!==ni;for(let U=0,F=E.length;U<F;U++){const q=E[U],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const V=z.getFrameExtents();if(i.multiply(V),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,z.mapSize.y=s.y)),z.map===null||R===!0||B===!0){const ae=this.type!==ni?{minFilter:un,magFilter:un}:{};z.map!==null&&z.map.dispose(),z.map=new wi(i.x,i.y,ae),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const $=z.getViewportCount();for(let ae=0;ae<$;ae++){const ie=z.getViewport(ae);r.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),N.viewport(r),z.updateMatrices(q,ae),n=z.getFrustum(),y(_,T,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===ni&&v(z,T),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(C,S,I)};function v(E,_){const T=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new wi(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,o.setRenderTarget(E.mapPass),o.clear(),o.renderBufferDirect(_,null,T,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,o.setRenderTarget(E.map),o.clear(),o.renderBufferDirect(_,null,T,f,x,null)}function A(E,_,T,C){let S=null;const I=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=T.isPointLight===!0?l:a,o.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const N=S.uuid,R=_.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let U=B[R];U===void 0&&(U=S.clone(),B[R]=U,_.addEventListener("dispose",M)),S=U}if(S.visible=_.visible,S.wireframe=_.wireframe,C===ni?S.side=_.shadowSide!==null?_.shadowSide:_.side:S.side=_.shadowSide!==null?_.shadowSide:d[_.side],S.alphaMap=_.alphaMap,S.alphaTest=_.alphaTest,S.map=_.map,S.clipShadows=_.clipShadows,S.clippingPlanes=_.clippingPlanes,S.clipIntersection=_.clipIntersection,S.displacementMap=_.displacementMap,S.displacementScale=_.displacementScale,S.displacementBias=_.displacementBias,S.wireframeLinewidth=_.wireframeLinewidth,S.linewidth=_.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=o.properties.get(S);N.light=T}return S}function y(E,_,T,C,S){if(E.visible===!1)return;if(E.layers.test(_.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const R=e.update(E),B=E.material;if(Array.isArray(B)){const U=R.groups;for(let F=0,q=U.length;F<q;F++){const z=U[F],V=B[z.materialIndex];if(V&&V.visible){const $=A(E,V,C,S);E.onBeforeShadow(o,E,_,T,R,$,z),o.renderBufferDirect(T,null,R,$,E,z),E.onAfterShadow(o,E,_,T,R,$,z)}}}else if(B.visible){const U=A(E,B,C,S);E.onBeforeShadow(o,E,_,T,R,U,null),o.renderBufferDirect(T,null,R,U,E,null),E.onAfterShadow(o,E,_,T,R,U,null)}}const N=E.children;for(let R=0,B=N.length;R<B;R++)y(N[R],_,T,C,S)}function M(E){E.target.removeEventListener("dispose",M);for(const T in c){const C=c[T],S=E.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}const av={[Va]:Ga,[Wa]:Ya,[qa]:Qa,[bs]:Xa,[Ga]:Va,[Ya]:Wa,[Qa]:qa,[Xa]:bs};function lv(o,e){function t(){let H=!1;const me=new nt;let K=null;const J=new nt(0,0,0,0);return{setMask:function(xe){K!==xe&&!H&&(o.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){H=xe},setClear:function(xe,pe,Ge,mt,Ht){Ht===!0&&(xe*=mt,pe*=mt,Ge*=mt),me.set(xe,pe,Ge,mt),J.equals(me)===!1&&(o.clearColor(xe,pe,Ge,mt),J.copy(me))},reset:function(){H=!1,K=null,J.set(-1,0,0,0)}}}function n(){let H=!1,me=!1,K=null,J=null,xe=null;return{setReversed:function(pe){if(me!==pe){const Ge=e.get("EXT_clip_control");me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const mt=xe;xe=null,this.setClear(mt)}me=pe},getReversed:function(){return me},setTest:function(pe){pe?re(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(pe){K!==pe&&!H&&(o.depthMask(pe),K=pe)},setFunc:function(pe){if(me&&(pe=av[pe]),J!==pe){switch(pe){case Va:o.depthFunc(o.NEVER);break;case Ga:o.depthFunc(o.ALWAYS);break;case Wa:o.depthFunc(o.LESS);break;case bs:o.depthFunc(o.LEQUAL);break;case qa:o.depthFunc(o.EQUAL);break;case Xa:o.depthFunc(o.GEQUAL);break;case Ya:o.depthFunc(o.GREATER);break;case Qa:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}J=pe}},setLocked:function(pe){H=pe},setClear:function(pe){xe!==pe&&(me&&(pe=1-pe),o.clearDepth(pe),xe=pe)},reset:function(){H=!1,K=null,J=null,xe=null,me=!1}}}function i(){let H=!1,me=null,K=null,J=null,xe=null,pe=null,Ge=null,mt=null,Ht=null;return{setTest:function(ct){H||(ct?re(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(ct){me!==ct&&!H&&(o.stencilMask(ct),me=ct)},setFunc:function(ct,An,Vn){(K!==ct||J!==An||xe!==Vn)&&(o.stencilFunc(ct,An,Vn),K=ct,J=An,xe=Vn)},setOp:function(ct,An,Vn){(pe!==ct||Ge!==An||mt!==Vn)&&(o.stencilOp(ct,An,Vn),pe=ct,Ge=An,mt=Vn)},setLocked:function(ct){H=ct},setClear:function(ct){Ht!==ct&&(o.clearStencil(ct),Ht=ct)},reset:function(){H=!1,me=null,K=null,J=null,xe=null,pe=null,Ge=null,mt=null,Ht=null}}}const s=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,A=null,y=null,M=null,E=null,_=new Ke(0,0,0),T=0,C=!1,S=null,I=null,N=null,R=null,B=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,q=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=q>=2);let V=null,$={};const ae=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),Ie=new nt().fromArray(ae),Y=new nt().fromArray(ie);function ee(H,me,K,J){const xe=new Uint8Array(4),pe=o.createTexture();o.bindTexture(H,pe),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ge=0;Ge<K;Ge++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(me,0,o.RGBA,1,1,J,0,o.RGBA,o.UNSIGNED_BYTE,xe):o.texImage2D(me+Ge,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xe);return pe}const le={};le[o.TEXTURE_2D]=ee(o.TEXTURE_2D,o.TEXTURE_2D,1),le[o.TEXTURE_CUBE_MAP]=ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[o.TEXTURE_2D_ARRAY]=ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),le[o.TEXTURE_3D]=ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),re(o.DEPTH_TEST),r.setFunc(bs),He(!1),qe(Rc),re(o.CULL_FACE),k(Ei);function re(H){h[H]!==!0&&(o.enable(H),h[H]=!0)}function Ae(H){h[H]!==!1&&(o.disable(H),h[H]=!1)}function we(H,me){return d[H]!==me?(o.bindFramebuffer(H,me),d[H]=me,H===o.DRAW_FRAMEBUFFER&&(d[o.FRAMEBUFFER]=me),H===o.FRAMEBUFFER&&(d[o.DRAW_FRAMEBUFFER]=me),!0):!1}function Pe(H,me){let K=f,J=!1;if(H){K=u.get(me),K===void 0&&(K=[],u.set(me,K));const xe=H.textures;if(K.length!==xe.length||K[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,Ge=xe.length;pe<Ge;pe++)K[pe]=o.COLOR_ATTACHMENT0+pe;K.length=xe.length,J=!0}}else K[0]!==o.BACK&&(K[0]=o.BACK,J=!0);J&&o.drawBuffers(K)}function Ye(H){return g!==H?(o.useProgram(H),g=H,!0):!1}const Oe={[Hi]:o.FUNC_ADD,[sf]:o.FUNC_SUBTRACT,[rf]:o.FUNC_REVERSE_SUBTRACT};Oe[of]=o.MIN,Oe[af]=o.MAX;const We={[lf]:o.ZERO,[cf]:o.ONE,[hf]:o.SRC_COLOR,[mr]:o.SRC_ALPHA,[gf]:o.SRC_ALPHA_SATURATE,[pf]:o.DST_COLOR,[df]:o.DST_ALPHA,[uf]:o.ONE_MINUS_SRC_COLOR,[gr]:o.ONE_MINUS_SRC_ALPHA,[mf]:o.ONE_MINUS_DST_COLOR,[ff]:o.ONE_MINUS_DST_ALPHA,[xf]:o.CONSTANT_COLOR,[vf]:o.ONE_MINUS_CONSTANT_COLOR,[yf]:o.CONSTANT_ALPHA,[Af]:o.ONE_MINUS_CONSTANT_ALPHA};function k(H,me,K,J,xe,pe,Ge,mt,Ht,ct){if(H===Ei){x===!0&&(Ae(o.BLEND),x=!1);return}if(x===!1&&(re(o.BLEND),x=!0),H!==Zu){if(H!==p||ct!==C){if((m!==Hi||y!==Hi)&&(o.blendEquation(o.FUNC_ADD),m=Hi,y=Hi),ct)switch(H){case Ci:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ic:o.blendFunc(o.ONE,o.ONE);break;case Pc:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dc:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ci:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ic:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Pc:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dc:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,A=null,M=null,E=null,_.set(0,0,0),T=0,p=H,C=ct}return}xe=xe||me,pe=pe||K,Ge=Ge||J,(me!==m||xe!==y)&&(o.blendEquationSeparate(Oe[me],Oe[xe]),m=me,y=xe),(K!==v||J!==A||pe!==M||Ge!==E)&&(o.blendFuncSeparate(We[K],We[J],We[pe],We[Ge]),v=K,A=J,M=pe,E=Ge),(mt.equals(_)===!1||Ht!==T)&&(o.blendColor(mt.r,mt.g,mt.b,Ht),_.copy(mt),T=Ht),p=H,C=!1}function Ze(H,me){H.side===vn?Ae(o.CULL_FACE):re(o.CULL_FACE);let K=H.side===nn;me&&(K=!K),He(K),H.blending===Ci&&H.transparent===!1?k(Ei):k(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),s.setMask(H.colorWrite);const J=H.stencilWrite;a.setTest(J),J&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),$e(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?re(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function He(H){S!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),S=H)}function qe(H){H!==ef?(re(o.CULL_FACE),H!==I&&(H===Rc?o.cullFace(o.BACK):H===tf?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),I=H}function Se(H){H!==N&&(F&&o.lineWidth(H),N=H)}function $e(H,me,K){H?(re(o.POLYGON_OFFSET_FILL),(R!==me||B!==K)&&(o.polygonOffset(me,K),R=me,B=K)):Ae(o.POLYGON_OFFSET_FILL)}function De(H){H?re(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function L(H){H===void 0&&(H=o.TEXTURE0+U-1),V!==H&&(o.activeTexture(H),V=H)}function b(H,me,K){K===void 0&&(V===null?K=o.TEXTURE0+U-1:K=V);let J=$[K];J===void 0&&(J={type:void 0,texture:void 0},$[K]=J),(J.type!==H||J.texture!==me)&&(V!==K&&(o.activeTexture(K),V=K),o.bindTexture(H,me||le[H]),J.type=H,J.texture=me)}function X(){const H=$[V];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ne(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function O(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(H){Ie.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Ie.copy(H))}function de(H){Y.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Y.copy(H))}function ze(H,me){let K=c.get(me);K===void 0&&(K=new WeakMap,c.set(me,K));let J=K.get(H);J===void 0&&(J=o.getUniformBlockIndex(me,H.name),K.set(H,J))}function Ve(H,me){const J=c.get(me).get(H);l.get(me)!==J&&(o.uniformBlockBinding(me,J,H.__bindingPointIndex),l.set(me,J))}function tt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},V=null,$={},d={},u=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,A=null,y=null,M=null,E=null,_=new Ke(0,0,0),T=0,C=!1,S=null,I=null,N=null,R=null,B=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:re,disable:Ae,bindFramebuffer:we,drawBuffers:Pe,useProgram:Ye,setBlending:k,setMaterial:Ze,setFlipSided:He,setCullFace:qe,setLineWidth:Se,setPolygonOffset:$e,setScissorTest:De,activeTexture:L,bindTexture:b,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:O,texImage3D:se,updateUBOMapping:ze,uniformBlockBinding:Ve,texStorage2D:et,texStorage3D:ce,texSubImage2D:te,texSubImage3D:Be,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ce,scissor:Ee,viewport:de,reset:tt}}function Ih(o,e,t,n){const i=cv(n);switch(t){case id:return o*e;case rd:return o*e;case od:return o*e*2;case Wl:return o*e/i.components*i.byteLength;case Uo:return o*e/i.components*i.byteLength;case ad:return o*e*2/i.components*i.byteLength;case ql:return o*e*2/i.components*i.byteLength;case sd:return o*e*3/i.components*i.byteLength;case Wt:return o*e*4/i.components*i.byteLength;case Ms:return o*e*4/i.components*i.byteLength;case xo:case vo:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yo:case Ao:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(o,16)*Math.max(e,8)/4;case Ja:case tl:return Math.max(o,8)*Math.max(e,8)/2;case il:case sl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case rl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case So:case Al:case Sl:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ld:case _l:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ml:case El:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cv(o){switch(o){case kn:case ed:return{byteLength:1,components:1};case xr:case td:case Ns:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case yn:case Hl:case ln:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function hv(o,e,t,n,i,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):vr("canvas")}function x(L,b,X){let ne=1;const oe=De(L);if((oe.width>X||oe.height>X)&&(ne=X/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(ne*oe.width),Be=Math.floor(ne*oe.height);d===void 0&&(d=g(te,Be));const ve=b?g(te,Be):d;return ve.width=te,ve.height=Be,ve.getContext("2d").drawImage(L,0,0,te,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+Be+")."),ve}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){o.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function A(L,b,X,ne,oe=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=b;if(b===o.RED&&(X===o.FLOAT&&(te=o.R32F),X===o.HALF_FLOAT&&(te=o.R16F),X===o.UNSIGNED_BYTE&&(te=o.R8)),b===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(te=o.R8UI),X===o.UNSIGNED_SHORT&&(te=o.R16UI),X===o.UNSIGNED_INT&&(te=o.R32UI),X===o.BYTE&&(te=o.R8I),X===o.SHORT&&(te=o.R16I),X===o.INT&&(te=o.R32I)),b===o.RG&&(X===o.FLOAT&&(te=o.RG32F),X===o.HALF_FLOAT&&(te=o.RG16F),X===o.UNSIGNED_BYTE&&(te=o.RG8)),b===o.RG_INTEGER&&(X===o.UNSIGNED_BYTE&&(te=o.RG8UI),X===o.UNSIGNED_SHORT&&(te=o.RG16UI),X===o.UNSIGNED_INT&&(te=o.RG32UI),X===o.BYTE&&(te=o.RG8I),X===o.SHORT&&(te=o.RG16I),X===o.INT&&(te=o.RG32I)),b===o.RGB_INTEGER&&(X===o.UNSIGNED_BYTE&&(te=o.RGB8UI),X===o.UNSIGNED_SHORT&&(te=o.RGB16UI),X===o.UNSIGNED_INT&&(te=o.RGB32UI),X===o.BYTE&&(te=o.RGB8I),X===o.SHORT&&(te=o.RGB16I),X===o.INT&&(te=o.RGB32I)),b===o.RGBA_INTEGER&&(X===o.UNSIGNED_BYTE&&(te=o.RGBA8UI),X===o.UNSIGNED_SHORT&&(te=o.RGBA16UI),X===o.UNSIGNED_INT&&(te=o.RGBA32UI),X===o.BYTE&&(te=o.RGBA8I),X===o.SHORT&&(te=o.RGBA16I),X===o.INT&&(te=o.RGBA32I)),b===o.RGB&&X===o.UNSIGNED_INT_5_9_9_9_REV&&(te=o.RGB9_E5),b===o.RGBA){const Be=oe?No:it.getTransfer(ne);X===o.FLOAT&&(te=o.RGBA32F),X===o.HALF_FLOAT&&(te=o.RGBA16F),X===o.UNSIGNED_BYTE&&(te=Be===ft?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(te=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(te=o.RGB5_A1)}return(te===o.R16F||te===o.R32F||te===o.RG16F||te===o.RG32F||te===o.RGBA16F||te===o.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(L,b){let X;return L?b===null||b===yn||b===Ps?X=o.DEPTH24_STENCIL8:b===ln?X=o.DEPTH32F_STENCIL8:b===xr&&(X=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yn||b===Ps?X=o.DEPTH_COMPONENT24:b===ln?X=o.DEPTH_COMPONENT32F:b===xr&&(X=o.DEPTH_COMPONENT16),X}function M(L,b){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function E(L){const b=L.target;b.removeEventListener("dispose",E),T(b),b.isVideoTexture&&h.delete(b)}function _(L){const b=L.target;b.removeEventListener("dispose",_),S(b)}function T(L){const b=n.get(L);if(b.__webglInit===void 0)return;const X=L.source,ne=u.get(X);if(ne){const oe=ne[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(L),Object.keys(ne).length===0&&u.delete(X)}n.remove(L)}function C(L){const b=n.get(L);o.deleteTexture(b.__webglTexture);const X=L.source,ne=u.get(X);delete ne[b.__cacheKey],r.memory.textures--}function S(L){const b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let oe=0;oe<b.__webglFramebuffer[ne].length;oe++)o.deleteFramebuffer(b.__webglFramebuffer[ne][oe]);else o.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)o.deleteFramebuffer(b.__webglFramebuffer[ne]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=L.textures;for(let ne=0,oe=X.length;ne<oe;ne++){const te=n.get(X[ne]);te.__webglTexture&&(o.deleteTexture(te.__webglTexture),r.memory.textures--),n.remove(X[ne])}n.remove(L)}let I=0;function N(){I=0}function R(){const L=I;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),I+=1,L}function B(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function U(L,b){const X=n.get(L);if(L.isVideoTexture&&Se(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(X,L,b);return}}t.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+b)}function F(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Y(X,L,b);return}t.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+b)}function q(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Y(X,L,b);return}t.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+b)}function z(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ee(X,L,b);return}t.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+b)}const V={[Za]:o.REPEAT,[Xi]:o.CLAMP_TO_EDGE,[$a]:o.MIRRORED_REPEAT},$={[un]:o.NEAREST,[Pf]:o.NEAREST_MIPMAP_NEAREST,[br]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[Xo]:o.LINEAR_MIPMAP_NEAREST,[Yi]:o.LINEAR_MIPMAP_LINEAR},ae={[Uf]:o.NEVER,[Vf]:o.ALWAYS,[Nf]:o.LESS,[hd]:o.LEQUAL,[Of]:o.EQUAL,[Hf]:o.GEQUAL,[zf]:o.GREATER,[kf]:o.NOTEQUAL};function ie(L,b){if(b.type===ln&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===Xo||b.magFilter===br||b.magFilter===Yi||b.minFilter===Nn||b.minFilter===Xo||b.minFilter===br||b.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,V[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,V[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,V[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,$[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==br&&b.minFilter!==Yi||b.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ie(L,b){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",E));const ne=b.source;let oe=u.get(ne);oe===void 0&&(oe={},u.set(ne,oe));const te=B(b);if(te!==L.__cacheKey){oe[te]===void 0&&(oe[te]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,X=!0),oe[te].usedTimes++;const Be=oe[L.__cacheKey];Be!==void 0&&(oe[L.__cacheKey].usedTimes--,Be.usedTimes===0&&C(b)),L.__cacheKey=te,L.__webglTexture=oe[te].texture}return X}function Y(L,b,X){let ne=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=o.TEXTURE_3D);const oe=Ie(L,b),te=b.source;t.bindTexture(ne,L.__webglTexture,o.TEXTURE0+X);const Be=n.get(te);if(te.version!==Be.__version||oe===!0){t.activeTexture(o.TEXTURE0+X);const ve=it.getPrimaries(it.workingColorSpace),Ce=b.colorSpace===_i?null:it.getPrimaries(b.colorSpace),et=b.colorSpace===_i||ve===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ce=x(b.image,!1,i.maxTextureSize);ce=$e(b,ce);const O=s.convert(b.format,b.colorSpace),se=s.convert(b.type);let Ee=A(b.internalFormat,O,se,b.colorSpace,b.isVideoTexture);ie(ne,b);let de;const ze=b.mipmaps,Ve=b.isVideoTexture!==!0,tt=Be.__version===void 0||oe===!0,H=te.dataReady,me=M(b,ce);if(b.isDepthTexture)Ee=y(b.format===Ds,b.type),tt&&(Ve?t.texStorage2D(o.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(o.TEXTURE_2D,0,Ee,ce.width,ce.height,0,O,se,null));else if(b.isDataTexture)if(ze.length>0){Ve&&tt&&t.texStorage2D(o.TEXTURE_2D,me,Ee,ze[0].width,ze[0].height);for(let K=0,J=ze.length;K<J;K++)de=ze[K],Ve?H&&t.texSubImage2D(o.TEXTURE_2D,K,0,0,de.width,de.height,O,se,de.data):t.texImage2D(o.TEXTURE_2D,K,Ee,de.width,de.height,0,O,se,de.data);b.generateMipmaps=!1}else Ve?(tt&&t.texStorage2D(o.TEXTURE_2D,me,Ee,ce.width,ce.height),H&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ce.width,ce.height,O,se,ce.data)):t.texImage2D(o.TEXTURE_2D,0,Ee,ce.width,ce.height,0,O,se,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&tt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,me,Ee,ze[0].width,ze[0].height,ce.depth);for(let K=0,J=ze.length;K<J;K++)if(de=ze[K],b.format!==Wt)if(O!==null)if(Ve){if(H)if(b.layerUpdates.size>0){const xe=Ih(de.width,de.height,b.format,b.type);for(const pe of b.layerUpdates){const Ge=de.data.subarray(pe*xe/de.data.BYTES_PER_ELEMENT,(pe+1)*xe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,pe,de.width,de.height,1,O,Ge)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,ce.depth,O,de.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,K,Ee,de.width,de.height,ce.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?H&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,ce.depth,O,se,de.data):t.texImage3D(o.TEXTURE_2D_ARRAY,K,Ee,de.width,de.height,ce.depth,0,O,se,de.data)}else{Ve&&tt&&t.texStorage2D(o.TEXTURE_2D,me,Ee,ze[0].width,ze[0].height);for(let K=0,J=ze.length;K<J;K++)de=ze[K],b.format!==Wt?O!==null?Ve?H&&t.compressedTexSubImage2D(o.TEXTURE_2D,K,0,0,de.width,de.height,O,de.data):t.compressedTexImage2D(o.TEXTURE_2D,K,Ee,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?H&&t.texSubImage2D(o.TEXTURE_2D,K,0,0,de.width,de.height,O,se,de.data):t.texImage2D(o.TEXTURE_2D,K,Ee,de.width,de.height,0,O,se,de.data)}else if(b.isDataArrayTexture)if(Ve){if(tt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,me,Ee,ce.width,ce.height,ce.depth),H)if(b.layerUpdates.size>0){const K=Ih(ce.width,ce.height,b.format,b.type);for(const J of b.layerUpdates){const xe=ce.data.subarray(J*K/ce.data.BYTES_PER_ELEMENT,(J+1)*K/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,J,ce.width,ce.height,1,O,se,xe)}b.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,O,se,ce.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,O,se,ce.data);else if(b.isData3DTexture)Ve?(tt&&t.texStorage3D(o.TEXTURE_3D,me,Ee,ce.width,ce.height,ce.depth),H&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,O,se,ce.data)):t.texImage3D(o.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,O,se,ce.data);else if(b.isFramebufferTexture){if(tt)if(Ve)t.texStorage2D(o.TEXTURE_2D,me,Ee,ce.width,ce.height);else{let K=ce.width,J=ce.height;for(let xe=0;xe<me;xe++)t.texImage2D(o.TEXTURE_2D,xe,Ee,K,J,0,O,se,null),K>>=1,J>>=1}}else if(ze.length>0){if(Ve&&tt){const K=De(ze[0]);t.texStorage2D(o.TEXTURE_2D,me,Ee,K.width,K.height)}for(let K=0,J=ze.length;K<J;K++)de=ze[K],Ve?H&&t.texSubImage2D(o.TEXTURE_2D,K,0,0,O,se,de):t.texImage2D(o.TEXTURE_2D,K,Ee,O,se,de);b.generateMipmaps=!1}else if(Ve){if(tt){const K=De(ce);t.texStorage2D(o.TEXTURE_2D,me,Ee,K.width,K.height)}H&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,O,se,ce)}else t.texImage2D(o.TEXTURE_2D,0,Ee,O,se,ce);p(b)&&m(ne),Be.__version=te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ee(L,b,X){if(b.image.length!==6)return;const ne=Ie(L,b),oe=b.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+X);const te=n.get(oe);if(oe.version!==te.__version||ne===!0){t.activeTexture(o.TEXTURE0+X);const Be=it.getPrimaries(it.workingColorSpace),ve=b.colorSpace===_i?null:it.getPrimaries(b.colorSpace),Ce=b.colorSpace===_i||Be===ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const et=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,O=[];for(let J=0;J<6;J++)!et&&!ce?O[J]=x(b.image[J],!0,i.maxCubemapSize):O[J]=ce?b.image[J].image:b.image[J],O[J]=$e(b,O[J]);const se=O[0],Ee=s.convert(b.format,b.colorSpace),de=s.convert(b.type),ze=A(b.internalFormat,Ee,de,b.colorSpace),Ve=b.isVideoTexture!==!0,tt=te.__version===void 0||ne===!0,H=oe.dataReady;let me=M(b,se);ie(o.TEXTURE_CUBE_MAP,b);let K;if(et){Ve&&tt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,me,ze,se.width,se.height);for(let J=0;J<6;J++){K=O[J].mipmaps;for(let xe=0;xe<K.length;xe++){const pe=K[xe];b.format!==Wt?Ee!==null?Ve?H&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?H&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,pe.width,pe.height,Ee,de,pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,ze,pe.width,pe.height,0,Ee,de,pe.data)}}}else{if(K=b.mipmaps,Ve&&tt){K.length>0&&me++;const J=De(O[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,me,ze,J.width,J.height)}for(let J=0;J<6;J++)if(ce){Ve?H&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,O[J].width,O[J].height,Ee,de,O[J].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,O[J].width,O[J].height,0,Ee,de,O[J].data);for(let xe=0;xe<K.length;xe++){const Ge=K[xe].image[J].image;Ve?H&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,Ge.width,Ge.height,Ee,de,Ge.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,ze,Ge.width,Ge.height,0,Ee,de,Ge.data)}}else{Ve?H&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,de,O[J]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Ee,de,O[J]);for(let xe=0;xe<K.length;xe++){const pe=K[xe];Ve?H&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,Ee,de,pe.image[J]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,ze,Ee,de,pe.image[J])}}}p(b)&&m(o.TEXTURE_CUBE_MAP),te.__version=oe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function le(L,b,X,ne,oe,te){const Be=s.convert(X.format,X.colorSpace),ve=s.convert(X.type),Ce=A(X.internalFormat,Be,ve,X.colorSpace),et=n.get(b),ce=n.get(X);if(ce.__renderTarget=b,!et.__hasExternalTextures){const O=Math.max(1,b.width>>te),se=Math.max(1,b.height>>te);oe===o.TEXTURE_3D||oe===o.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,Ce,O,se,b.depth,0,Be,ve,null):t.texImage2D(oe,te,Ce,O,se,0,Be,ve,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),qe(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ne,oe,ce.__webglTexture,0,He(b)):(oe===o.TEXTURE_2D||oe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ne,oe,ce.__webglTexture,te),t.bindFramebuffer(o.FRAMEBUFFER,null)}function re(L,b,X){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const ne=b.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,te=y(b.stencilBuffer,oe),Be=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=He(b);qe(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,te,b.width,b.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,te,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,te,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Be,o.RENDERBUFFER,L)}else{const ne=b.textures;for(let oe=0;oe<ne.length;oe++){const te=ne[oe],Be=s.convert(te.format,te.colorSpace),ve=s.convert(te.type),Ce=A(te.internalFormat,Be,ve,te.colorSpace),et=He(b);X&&qe(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Ce,b.width,b.height):qe(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,et,Ce,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ce,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ae(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(b.depthTexture);ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const oe=ne.__webglTexture,te=He(b);if(b.depthTexture.format===ji)qe(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,oe,0,te):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,oe,0);else if(b.depthTexture.format===Ds)qe(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,oe,0,te):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function we(L){const b=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ne=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){const oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=ne}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,L)}else if(X){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=o.createRenderbuffer(),re(b.__webglDepthbuffer[ne],L,!1);else{const oe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[ne];o.bindRenderbuffer(o.RENDERBUFFER,te),o.framebufferRenderbuffer(o.FRAMEBUFFER,oe,o.RENDERBUFFER,te)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),re(b.__webglDepthbuffer,L,!1);else{const ne=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ne,o.RENDERBUFFER,oe)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Pe(L,b,X){const ne=n.get(L);b!==void 0&&le(ne.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&we(L)}function Ye(L){const b=L.texture,X=n.get(L),ne=n.get(b);L.addEventListener("dispose",_);const oe=L.textures,te=L.isWebGLCubeRenderTarget===!0,Be=oe.length>1;if(Be||(ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture()),ne.__version=b.version,r.memory.textures++),te){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)X.__webglFramebuffer[ve][Ce]=o.createFramebuffer()}else X.__webglFramebuffer[ve]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)X.__webglFramebuffer[ve]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(Be)for(let ve=0,Ce=oe.length;ve<Ce;ve++){const et=n.get(oe[ve]);et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture(),r.memory.textures++)}if(L.samples>0&&qe(L)===!1){X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<oe.length;ve++){const Ce=oe[ve];X.__webglColorRenderbuffer[ve]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const et=s.convert(Ce.format,Ce.colorSpace),ce=s.convert(Ce.type),O=A(Ce.internalFormat,et,ce,Ce.colorSpace,L.isXRRenderTarget===!0),se=He(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,se,O,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),re(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(te){t.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture),ie(o.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)le(X.__webglFramebuffer[ve][Ce],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce);else le(X.__webglFramebuffer[ve],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(b)&&m(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let ve=0,Ce=oe.length;ve<Ce;ve++){const et=oe[ve],ce=n.get(et);t.bindTexture(o.TEXTURE_2D,ce.__webglTexture),ie(o.TEXTURE_2D,et),le(X.__webglFramebuffer,L,et,o.COLOR_ATTACHMENT0+ve,o.TEXTURE_2D,0),p(et)&&m(o.TEXTURE_2D)}t.unbindTexture()}else{let ve=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(ve,ne.__webglTexture),ie(ve,b),b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)le(X.__webglFramebuffer[Ce],L,b,o.COLOR_ATTACHMENT0,ve,Ce);else le(X.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,ve,0);p(b)&&m(ve),t.unbindTexture()}L.depthBuffer&&we(L)}function Oe(L){const b=L.textures;for(let X=0,ne=b.length;X<ne;X++){const oe=b[X];if(p(oe)){const te=v(L),Be=n.get(oe).__webglTexture;t.bindTexture(te,Be),m(te),t.unbindTexture()}}}const We=[],k=[];function Ze(L){if(L.samples>0){if(qe(L)===!1){const b=L.textures,X=L.width,ne=L.height;let oe=o.COLOR_BUFFER_BIT;const te=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Be=n.get(L),ve=b.length>1;if(ve)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(o.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Be.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=o.STENCIL_BUFFER_BIT)),ve){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const et=n.get(b[Ce]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,et,0)}o.blitFramebuffer(0,0,X,ne,0,0,X,ne,oe,o.NEAREST),l===!0&&(We.length=0,k.length=0,We.push(o.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.resolveDepthBuffer===!1&&(We.push(te),k.push(te),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(o.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const et=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Be.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,et,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function He(L){return Math.min(i.maxSamples,L.samples)}function qe(L){const b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(L){const b=r.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function $e(L,b){const X=L.colorSpace,ne=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Os&&X!==_i&&(it.getTransfer(X)===ft?(ne!==Wt||oe!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function De(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Pe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=le,this.useMultisampledRTT=qe}function Td(o,e){function t(n,i=_i){let s;const r=it.getTransfer(i);if(n===kn)return o.UNSIGNED_BYTE;if(n===Vl)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return o.UNSIGNED_SHORT_5_5_5_1;if(n===nd)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return o.BYTE;if(n===td)return o.SHORT;if(n===xr)return o.UNSIGNED_SHORT;if(n===Hl)return o.INT;if(n===yn)return o.UNSIGNED_INT;if(n===ln)return o.FLOAT;if(n===Ns)return o.HALF_FLOAT;if(n===id)return o.ALPHA;if(n===sd)return o.RGB;if(n===Wt)return o.RGBA;if(n===rd)return o.LUMINANCE;if(n===od)return o.LUMINANCE_ALPHA;if(n===ji)return o.DEPTH_COMPONENT;if(n===Ds)return o.DEPTH_STENCIL;if(n===Wl)return o.RED;if(n===Uo)return o.RED_INTEGER;if(n===ad)return o.RG;if(n===ql)return o.RG_INTEGER;if(n===Ms)return o.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===Ao)if(r===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===el||n===tl||n===nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===il||n===sl)return r===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===vl||n===yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ol)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===Al||n===Sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===So)return r===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ld||n===_l||n===Ml||n===El)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===So)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class uv extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dv={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
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

}`;class mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new qt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gv extends Ri{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=new mv,p=t.getContextAttributes();let m=null,v=null;const A=[],y=[],M=new Me;let E=null;const _=new tn;_.viewport=new nt;const T=new tn;T.viewport=new nt;const C=[_,T],S=new uv;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=A[Y];return ee===void 0&&(ee=new Aa,A[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=A[Y];return ee===void 0&&(ee=new Aa,A[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=A[Y];return ee===void 0&&(ee=new Aa,A[Y]=ee),ee.getHandSpace()};function R(Y){const ee=y.indexOf(Y.inputSource);if(ee===-1)return;const le=A[ee];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||r),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",U);for(let Y=0;Y<A.length;Y++){const ee=y[Y];ee!==null&&(y[Y]=null,A[Y].disconnect(ee))}I=null,N=null,x.reset(),e.setRenderTarget(m),f=null,u=null,d=null,i=null,v=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",B),i.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new wi(f.framebufferWidth,f.framebufferHeight,{format:Wt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,le=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Ds:ji,le=p.stencil?Ps:yn);const Ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Ae),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new wi(u.textureWidth,u.textureHeight,{format:Wt,type:kn,depthTexture:new Kl(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(Y){for(let ee=0;ee<Y.removed.length;ee++){const le=Y.removed[ee],re=y.indexOf(le);re>=0&&(y[re]=null,A[re].disconnect(le))}for(let ee=0;ee<Y.added.length;ee++){const le=Y.added[ee];let re=y.indexOf(le);if(re===-1){for(let we=0;we<A.length;we++)if(we>=y.length){y.push(le),re=we;break}else if(y[we]===null){y[we]=le,re=we;break}if(re===-1)break}const Ae=A[re];Ae&&Ae.connect(le)}}const F=new D,q=new D;function z(Y,ee,le){F.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const re=F.distanceTo(q),Ae=ee.projectionMatrix.elements,we=le.projectionMatrix.elements,Pe=Ae[14]/(Ae[10]-1),Ye=Ae[14]/(Ae[10]+1),Oe=(Ae[9]+1)/Ae[5],We=(Ae[9]-1)/Ae[5],k=(Ae[8]-1)/Ae[0],Ze=(we[8]+1)/we[0],He=Pe*k,qe=Pe*Ze,Se=re/(-k+Ze),$e=Se*-k;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(Se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const De=Pe+Se,L=Ye+Se,b=He-$e,X=qe+(re-$e),ne=Oe*Ye/L*De,oe=We*Ye/L*De;Y.projectionMatrix.makePerspective(b,X,ne,oe,De,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function V(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ee=Y.near,le=Y.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(le=x.depthFar)),S.near=T.near=_.near=ee,S.far=T.far=_.far=le,(I!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,N=S.far),_.layers.mask=Y.layers.mask|2,T.layers.mask=Y.layers.mask|4,S.layers.mask=_.layers.mask|T.layers.mask;const re=Y.parent,Ae=S.cameras;V(S,re);for(let we=0;we<Ae.length;we++)V(Ae[we],re);Ae.length===2?z(S,_,T):S.projectionMatrix.copy(_.projectionMatrix),$(Y,S,re)};function $(Y,ee,le){le===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ae=null;function ie(Y,ee){if(h=ee.getViewerPose(c||r),g=ee,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let re=!1;le.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let we=0;we<le.length;we++){const Pe=le[we];let Ye=null;if(f!==null)Ye=f.getViewport(Pe);else{const We=d.getViewSubImage(u,Pe);Ye=We.viewport,we===0&&(e.setRenderTargetTextures(v,We.colorTexture,u.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(v))}let Oe=C[we];Oe===void 0&&(Oe=new tn,Oe.layers.enable(we),Oe.viewport=new nt,C[we]=Oe),Oe.matrix.fromArray(Pe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Pe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),we===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Oe)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const we=d.getDepthInformation(le[0]);we&&we.isValid&&we.texture&&x.init(e,we,i.renderState)}}for(let le=0;le<A.length;le++){const re=y[le],Ae=A[le];re!==null&&Ae!==void 0&&Ae.update(re,ee,c||r)}ae&&ae(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ie=new Sd;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(Y){ae=Y},this.dispose=function(){}}}const Ui=new gt,xv=new Re;function vv(o,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,vd(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,A,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),A=v.envMap,y=v.envMapRotation;A&&(p.envMap.value=A,Ui.copy(y),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Ui)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yv(o,e,t,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){const y=A.program;n.uniformBlockBinding(v,y)}function c(v,A){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));const M=A.program;n.updateUBOMapping(v,M);const E=e.render.frame;s[v.id]!==E&&(u(v),s[v.id]=E)}function h(v){const A=d();v.__bindingPointIndex=A;const y=o.createBuffer(),M=v.__size,E=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,y),o.bufferData(o.UNIFORM_BUFFER,M,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,y),y}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const A=i[v.id],y=v.uniforms,M=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let E=0,_=y.length;E<_;E++){const T=Array.isArray(y[E])?y[E]:[y[E]];for(let C=0,S=T.length;C<S;C++){const I=T[C];if(f(I,E,C,M)===!0){const N=I.__offset,R=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let U=0;U<R.length;U++){const F=R[U],q=x(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,N+B,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,N,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,A,y,M){const E=v.value,_=A+"_"+y;if(M[_]===void 0)return typeof E=="number"||typeof E=="boolean"?M[_]=E:M[_]=E.clone(),!0;{const T=M[_];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return M[_]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(v){const A=v.uniforms;let y=0;const M=16;for(let _=0,T=A.length;_<T;_++){const C=Array.isArray(A[_])?A[_]:[A[_]];for(let S=0,I=C.length;S<I;S++){const N=C[S],R=Array.isArray(N.value)?N.value:[N.value];for(let B=0,U=R.length;B<U;B++){const F=R[B],q=x(F),z=y%M,V=z%q.boundary,$=z+V;y+=V,$!==0&&M-$<q.storage&&(y+=M-$),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=q.storage}}}const E=y%M;return E>0&&(y+=M-E),v.__size=y,v.__cache={},this}function x(v){const A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),A}function p(v){const A=v.target;A.removeEventListener("dispose",p);const y=r.indexOf(A.__bindingPointIndex);r.splice(y,1),o.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function m(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Av{constructor(e={}){const{canvas:t=op(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,m=null;const v=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=Ti,this.toneMappingExposure=1;const y=this;let M=!1,E=0,_=0,T=null,C=-1,S=null;const I=new nt,N=new nt;let R=null;const B=new Ke(0);let U=0,F=t.width,q=t.height,z=1,V=null,$=null;const ae=new nt(0,0,F,q),ie=new nt(0,0,F,q);let Ie=!1;const Y=new Ql;let ee=!1,le=!1;const re=new Re,Ae=new Re,we=new D,Pe=new nt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function We(){return T===null?z:1}let k=n;function Ze(P,G){return t.getContext(P,G)}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),k===null){const G="webgl2";if(k=Ze(G,P),k===null)throw Ze(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let He,qe,Se,$e,De,L,b,X,ne,oe,te,Be,ve,Ce,et,ce,O,se,Ee,de,ze,Ve,tt,H;function me(){He=new T0(k),He.init(),Ve=new Td(k,He),qe=new A0(k,He,e,Ve),Se=new lv(k,He),qe.reverseDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),$e=new R0(k),De=new Yx,L=new hv(k,He,Se,De,qe,Ve,$e),b=new _0(y),X=new C0(y),ne=new Up(k),tt=new v0(k,ne),oe=new w0(k,ne,$e,tt),te=new P0(k,oe,ne,$e),Ee=new I0(k,qe,L),ce=new S0(De),Be=new Xx(y,b,X,He,qe,tt,ce),ve=new vv(y,De),Ce=new jx,et=new tv(He),se=new x0(y,b,X,Se,te,f,l),O=new ov(y,te,qe),H=new yv(k,$e,qe,Se),de=new y0(k,He,$e),ze=new b0(k,He,$e),$e.programs=Be.programs,y.capabilities=qe,y.extensions=He,y.properties=De,y.renderLists=Ce,y.shadowMap=O,y.state=Se,y.info=$e}me();const K=new gv(y,k);this.xr=K,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=He.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=He.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(F,q,!1))},this.getSize=function(P){return P.set(F,q)},this.setSize=function(P,G,Q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,q=G,t.width=Math.floor(P*z),t.height=Math.floor(G*z),Q===!0&&(t.style.width=P+"px",t.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(F*z,q*z).floor()},this.setDrawingBufferSize=function(P,G,Q){F=P,q=G,z=Q,t.width=Math.floor(P*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,G,Q,j){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,G,Q,j),Se.viewport(I.copy(ae).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,G,Q,j){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,G,Q,j),Se.scissor(N.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(P){Se.setScissorTest(Ie=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(P=!0,G=!0,Q=!0){let j=0;if(P){let W=!1;if(T!==null){const ue=T.texture.format;W=ue===Ms||ue===ql||ue===Uo}if(W){const ue=T.texture.type,ye=ue===kn||ue===yn||ue===xr||ue===Ps||ue===Vl||ue===Gl,Fe=se.getClearColor(),Le=se.getClearAlpha(),Xe=Fe.r,Qe=Fe.g,Ue=Fe.b;ye?(g[0]=Xe,g[1]=Qe,g[2]=Ue,g[3]=Le,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=Xe,x[1]=Qe,x[2]=Ue,x[3]=Le,k.clearBufferiv(k.COLOR,0,x))}else j|=k.COLOR_BUFFER_BIT}G&&(j|=k.DEPTH_BUFFER_BIT),Q&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ce.dispose(),et.dispose(),De.dispose(),b.dispose(),X.dispose(),te.dispose(),tt.dispose(),H.dispose(),Be.dispose(),K.dispose(),K.removeEventListener("sessionstart",Sc),K.removeEventListener("sessionend",_c),Ii.stop()};function J(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const P=$e.autoReset,G=O.enabled,Q=O.autoUpdate,j=O.needsUpdate,W=O.type;me(),$e.autoReset=P,O.enabled=G,O.autoUpdate=Q,O.needsUpdate=j,O.type=W}function pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ge(P){const G=P.target;G.removeEventListener("dispose",Ge),mt(G)}function mt(P){Ht(P),De.remove(P)}function Ht(P){const G=De.get(P).programs;G!==void 0&&(G.forEach(function(Q){Be.releaseProgram(Q)}),P.isShaderMaterial&&Be.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Q,j,W,ue){G===null&&(G=Ye);const ye=W.isMesh&&W.matrixWorld.determinant()<0,Fe=jd(P,G,Q,j,W);Se.setMaterial(j,ye);let Le=Q.index,Xe=1;if(j.wireframe===!0){if(Le=oe.getWireframeAttribute(Q),Le===void 0)return;Xe=2}const Qe=Q.drawRange,Ue=Q.attributes.position;let st=Qe.start*Xe,vt=(Qe.start+Qe.count)*Xe;ue!==null&&(st=Math.max(st,ue.start*Xe),vt=Math.min(vt,(ue.start+ue.count)*Xe)),Le!==null?(st=Math.max(st,0),vt=Math.min(vt,Le.count)):Ue!=null&&(st=Math.max(st,0),vt=Math.min(vt,Ue.count));const yt=vt-st;if(yt<0||yt===1/0)return;tt.setup(W,j,Fe,Q,Le);let Kt,ot=de;if(Le!==null&&(Kt=ne.get(Le),ot=ze,ot.setIndex(Kt)),W.isMesh)j.wireframe===!0?(Se.setLineWidth(j.wireframeLinewidth*We()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(W.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),Se.setLineWidth(Ne*We()),W.isLineSegments?ot.setMode(k.LINES):W.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else W.isPoints?ot.setMode(k.POINTS):W.isSprite&&ot.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ne=W._multiDrawStarts,Gn=W._multiDrawCounts,at=W._multiDrawCount,Sn=Le?ne.get(Le).bytesPerElement:1,Zi=De.get(j).currentProgram.getUniforms();for(let rn=0;rn<at;rn++)Zi.setValue(k,"_gl_DrawID",rn),ot.render(Ne[rn]/Sn,Gn[rn])}else if(W.isInstancedMesh)ot.renderInstances(st,yt,W.count);else if(Q.isInstancedBufferGeometry){const Ne=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Gn=Math.min(Q.instanceCount,Ne);ot.renderInstances(st,yt,Gn)}else ot.render(st,yt)};function ct(P,G,Q){P.transparent===!0&&P.side===vn&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,wr(P,G,Q),P.side=zn,P.needsUpdate=!0,wr(P,G,Q),P.side=vn):wr(P,G,Q)}this.compile=function(P,G,Q=null){Q===null&&(Q=P),m=et.get(Q),m.init(G),A.push(m),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),P!==Q&&P.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const j=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ue=W.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Fe=ue[ye];ct(Fe,Q,W),j.add(Fe)}else ct(ue,Q,W),j.add(ue)}),A.pop(),m=null,j},this.compileAsync=function(P,G,Q=null){const j=this.compile(P,G,Q);return new Promise(W=>{function ue(){if(j.forEach(function(ye){De.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){W(P);return}setTimeout(ue,10)}He.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let An=null;function Vn(P){An&&An(P)}function Sc(){Ii.stop()}function _c(){Ii.start()}const Ii=new Sd;Ii.setAnimationLoop(Vn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(P){An=P,K.setAnimationLoop(P),P===null?Ii.stop():Ii.start()},K.addEventListener("sessionstart",Sc),K.addEventListener("sessionend",_c),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(G),G=K.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,G,T),m=et.get(P,A.length),m.init(G),A.push(m),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),le=this.localClippingEnabled,ee=ce.init(this.clippingPlanes,le),p=Ce.get(P,v.length),p.init(),v.push(p),K.enabled===!0&&K.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&qo(ue,G,-1/0,y.sortObjects)}qo(P,G,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(V,$),Oe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Oe&&se.addToRenderList(p,P),this.info.render.frame++,ee===!0&&ce.beginShadows();const Q=m.state.shadowsArray;O.render(Q,P,G),ee===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,W=p.transmissive;if(m.setupLights(),G.isArrayCamera){const ue=G.cameras;if(W.length>0)for(let ye=0,Fe=ue.length;ye<Fe;ye++){const Le=ue[ye];Ec(j,W,P,Le)}Oe&&se.render(P);for(let ye=0,Fe=ue.length;ye<Fe;ye++){const Le=ue[ye];Mc(p,P,Le,Le.viewport)}}else W.length>0&&Ec(j,W,P,G),Oe&&se.render(P),Mc(p,P,G);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(y,P,G),tt.resetDefaultState(),C=-1,S=null,A.pop(),A.length>0?(m=A[A.length-1],ee===!0&&ce.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function qo(P,G,Q,j){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){j&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ae);const ye=te.update(P),Fe=P.material;Fe.visible&&p.push(P,ye,Fe,Q,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const ye=te.update(P),Fe=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Pe.copy(ye.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(Ae)),Array.isArray(Fe)){const Le=ye.groups;for(let Xe=0,Qe=Le.length;Xe<Qe;Xe++){const Ue=Le[Xe],st=Fe[Ue.materialIndex];st&&st.visible&&p.push(P,ye,st,Q,Pe.z,Ue)}}else Fe.visible&&p.push(P,ye,Fe,Q,Pe.z,null)}}const ue=P.children;for(let ye=0,Fe=ue.length;ye<Fe;ye++)qo(ue[ye],G,Q,j)}function Mc(P,G,Q,j){const W=P.opaque,ue=P.transmissive,ye=P.transparent;m.setupLightsView(Q),ee===!0&&ce.setGlobalState(y.clippingPlanes,Q),j&&Se.viewport(I.copy(j)),W.length>0&&Tr(W,G,Q),ue.length>0&&Tr(ue,G,Q),ye.length>0&&Tr(ye,G,Q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ec(P,G,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new wi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ns:kn,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ue=m.state.transmissionRenderTarget[j.id],ye=j.viewport||I;ue.setSize(ye.z,ye.w);const Fe=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(B),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&se.render(Q);const Le=y.toneMapping;y.toneMapping=Ti;const Xe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),ee===!0&&ce.setGlobalState(y.clippingPlanes,j),Tr(P,Q,j),L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue),He.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ue=0,st=G.length;Ue<st;Ue++){const vt=G[Ue],yt=vt.object,Kt=vt.geometry,ot=vt.material,Ne=vt.group;if(ot.side===vn&&yt.layers.test(j.layers)){const Gn=ot.side;ot.side=nn,ot.needsUpdate=!0,Cc(yt,Q,j,Kt,ot,Ne),ot.side=Gn,ot.needsUpdate=!0,Qe=!0}}Qe===!0&&(L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue))}y.setRenderTarget(Fe),y.setClearColor(B,U),Xe!==void 0&&(j.viewport=Xe),y.toneMapping=Le}function Tr(P,G,Q){const j=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ue=P.length;W<ue;W++){const ye=P[W],Fe=ye.object,Le=ye.geometry,Xe=j===null?ye.material:j,Qe=ye.group;Fe.layers.test(Q.layers)&&Cc(Fe,G,Q,Le,Xe,Qe)}}function Cc(P,G,Q,j,W,ue){P.onBeforeRender(y,G,Q,j,W,ue),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(y,G,Q,j,P,ue),W.transparent===!0&&W.side===vn&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,y.renderBufferDirect(Q,G,j,W,P,ue),W.side=zn,W.needsUpdate=!0,y.renderBufferDirect(Q,G,j,W,P,ue),W.side=vn):y.renderBufferDirect(Q,G,j,W,P,ue),P.onAfterRender(y,G,Q,j,W,ue)}function wr(P,G,Q){G.isScene!==!0&&(G=Ye);const j=De.get(P),W=m.state.lights,ue=m.state.shadowsArray,ye=W.state.version,Fe=Be.getParameters(P,W.state,ue,G,Q),Le=Be.getProgramCacheKey(Fe);let Xe=j.programs;j.environment=P.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(P.isMeshStandardMaterial?X:b).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",Ge),Xe=new Map,j.programs=Xe);let Qe=Xe.get(Le);if(Qe!==void 0){if(j.currentProgram===Qe&&j.lightsStateVersion===ye)return wc(P,Fe),Qe}else Fe.uniforms=Be.getUniforms(P),P.onBeforeCompile(Fe,y),Qe=Be.acquireProgram(Fe,Le),Xe.set(Le,Qe),j.uniforms=Fe.uniforms;const Ue=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ue.clippingPlanes=ce.uniform),wc(P,Fe),j.needsLights=Zd(P),j.lightsStateVersion=ye,j.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMap.value=W.state.directionalShadowMap,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotShadowMap.value=W.state.spotShadowMap,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMap.value=W.state.pointShadowMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Qe,j.uniformsList=null,Qe}function Tc(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=_o.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function wc(P,G){const Q=De.get(P);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function jd(P,G,Q,j,W){G.isScene!==!0&&(G=Ye),L.resetTextureUnits();const ue=G.fog,ye=j.isMeshStandardMaterial?G.environment:null,Fe=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Os,Le=(j.isMeshStandardMaterial?X:b).get(j.envMap||ye),Xe=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!Q.morphAttributes.position,st=!!Q.morphAttributes.normal,vt=!!Q.morphAttributes.color;let yt=Ti;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(yt=y.toneMapping);const Kt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ot=Kt!==void 0?Kt.length:0,Ne=De.get(j),Gn=m.state.lights;if(ee===!0&&(le===!0||P!==S)){const pn=P===S&&j.id===C;ce.setState(j,P,pn)}let at=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Gn.state.version||Ne.outputColorSpace!==Fe||W.isBatchedMesh&&Ne.batching===!1||!W.isBatchedMesh&&Ne.batching===!0||W.isBatchedMesh&&Ne.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ne.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||W.isInstancedMesh&&Ne.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ne.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ne.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ne.instancingMorph===!1&&W.morphTexture!==null||Ne.envMap!==Le||j.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ce.numPlanes||Ne.numIntersection!==ce.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==Qe||Ne.morphTargets!==Ue||Ne.morphNormals!==st||Ne.morphColors!==vt||Ne.toneMapping!==yt||Ne.morphTargetsCount!==ot)&&(at=!0):(at=!0,Ne.__version=j.version);let Sn=Ne.currentProgram;at===!0&&(Sn=wr(j,G,W));let Zi=!1,rn=!1,Ws=!1;const At=Sn.getUniforms(),In=Ne.uniforms;if(Se.useProgram(Sn.program)&&(Zi=!0,rn=!0,Ws=!0),j.id!==C&&(C=j.id,rn=!0),Zi||S!==P){Se.buffers.depth.getReversed()?(re.copy(P.projectionMatrix),lp(re),cp(re),At.setValue(k,"projectionMatrix",re)):At.setValue(k,"projectionMatrix",P.projectionMatrix),At.setValue(k,"viewMatrix",P.matrixWorldInverse);const hi=At.map.cameraPosition;hi!==void 0&&hi.setValue(k,we.setFromMatrixPosition(P.matrixWorld)),qe.logarithmicDepthBuffer&&At.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,rn=!0,Ws=!0)}if(W.isSkinnedMesh){At.setOptional(k,W,"bindMatrix"),At.setOptional(k,W,"bindMatrixInverse");const pn=W.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),At.setValue(k,"boneTexture",pn.boneTexture,L))}W.isBatchedMesh&&(At.setOptional(k,W,"batchingTexture"),At.setValue(k,"batchingTexture",W._matricesTexture,L),At.setOptional(k,W,"batchingIdTexture"),At.setValue(k,"batchingIdTexture",W._indirectTexture,L),At.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(k,"batchingColorTexture",W._colorsTexture,L));const qs=Q.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Ee.update(W,Q,Sn),(rn||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,At.setValue(k,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(In.envMap.value=Le,In.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(In.envMapIntensity.value=G.environmentIntensity),rn&&(At.setValue(k,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Kd(In,Ws),ue&&j.fog===!0&&ve.refreshFogUniforms(In,ue),ve.refreshMaterialUniforms(In,j,z,q,m.state.transmissionRenderTarget[P.id]),_o.upload(k,Tc(Ne),In,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(_o.upload(k,Tc(Ne),In,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(k,"center",W.center),At.setValue(k,"modelViewMatrix",W.modelViewMatrix),At.setValue(k,"normalMatrix",W.normalMatrix),At.setValue(k,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let hi=0,ui=pn.length;hi<ui;hi++){const bc=pn[hi];H.update(bc,Sn),H.bind(bc,Sn)}}return Sn}function Kd(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function Zd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,G,Q){De.get(P.texture).__webglTexture=G,De.get(P.depthTexture).__webglTexture=Q;const j=De.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,G){const Q=De.get(P);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,Q=0){T=P,E=G,_=Q;let j=!0,W=null,ue=!1,ye=!1;if(P){const Le=De.get(P);if(Le.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(k.FRAMEBUFFER,null),j=!1;else if(Le.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Le.__hasExternalTextures)L.rebindTextures(P,De.get(P.texture).__webglTexture,De.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ue=P.depthTexture;if(Le.__boundDepthTexture!==Ue){if(Ue!==null&&De.has(Ue)&&(P.width!==Ue.image.width||P.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ye=!0);const Qe=De.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?W=Qe[G][Q]:W=Qe[G],ue=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?W=De.get(P).__webglMultisampledFramebuffer:Array.isArray(Qe)?W=Qe[Q]:W=Qe,I.copy(P.viewport),N.copy(P.scissor),R=P.scissorTest}else I.copy(ae).multiplyScalar(z).floor(),N.copy(ie).multiplyScalar(z).floor(),R=Ie;if(Se.bindFramebuffer(k.FRAMEBUFFER,W)&&j&&Se.drawBuffers(P,W),Se.viewport(I),Se.scissor(N),Se.setScissorTest(R),ue){const Le=De.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,Q)}else if(ye){const Le=De.get(P.texture),Xe=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.__webglTexture,Q||0,Xe)}C=-1},this.readRenderTargetPixels=function(P,G,Q,j,W,ue,ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ye!==void 0&&(Fe=Fe[ye]),Fe){Se.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Le=P.texture,Xe=Le.format,Qe=Le.type;if(!qe.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-j&&Q>=0&&Q<=P.height-W&&k.readPixels(G,Q,j,W,Ve.convert(Xe),Ve.convert(Qe),ue)}finally{const Le=T!==null?De.get(T).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(P,G,Q,j,W,ue,ye){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ye!==void 0&&(Fe=Fe[ye]),Fe){const Le=P.texture,Xe=Le.format,Qe=Le.type;if(!qe.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=P.width-j&&Q>=0&&Q<=P.height-W){Se.bindFramebuffer(k.FRAMEBUFFER,Fe);const Ue=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ue),k.bufferData(k.PIXEL_PACK_BUFFER,ue.byteLength,k.STREAM_READ),k.readPixels(G,Q,j,W,Ve.convert(Xe),Ve.convert(Qe),0);const st=T!==null?De.get(T).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,st);const vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ap(k,vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ue),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ue),k.deleteBuffer(Ue),k.deleteSync(vt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,G=null,Q=0){P.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-Q),W=Math.floor(P.image.width*j),ue=Math.floor(P.image.height*j),ye=G!==null?G.x:0,Fe=G!==null?G.y:0;L.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,ye,Fe,W,ue),Se.unbindTexture()},this.copyTextureToTexture=function(P,G,Q=null,j=null,W=0){P.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],G=arguments[2],W=arguments[3]||0,Q=null);let ue,ye,Fe,Le,Xe,Qe,Ue,st,vt;const yt=P.isCompressedTexture?P.mipmaps[W]:P.image;Q!==null?(ue=Q.max.x-Q.min.x,ye=Q.max.y-Q.min.y,Fe=Q.isBox3?Q.max.z-Q.min.z:1,Le=Q.min.x,Xe=Q.min.y,Qe=Q.isBox3?Q.min.z:0):(ue=yt.width,ye=yt.height,Fe=yt.depth||1,Le=0,Xe=0,Qe=0),j!==null?(Ue=j.x,st=j.y,vt=j.z):(Ue=0,st=0,vt=0);const Kt=Ve.convert(G.format),ot=Ve.convert(G.type);let Ne;G.isData3DTexture?(L.setTexture3D(G,0),Ne=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Ne=k.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Ne=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const Gn=k.getParameter(k.UNPACK_ROW_LENGTH),at=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Sn=k.getParameter(k.UNPACK_SKIP_PIXELS),Zi=k.getParameter(k.UNPACK_SKIP_ROWS),rn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Le),k.pixelStorei(k.UNPACK_SKIP_ROWS,Xe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Ws=P.isDataArrayTexture||P.isData3DTexture,At=G.isDataArrayTexture||G.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const In=De.get(P),qs=De.get(G),pn=De.get(In.__renderTarget),hi=De.get(qs.__renderTarget);Se.bindFramebuffer(k.READ_FRAMEBUFFER,pn.__webglFramebuffer),Se.bindFramebuffer(k.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Fe;ui++)Ws&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.get(P).__webglTexture,W,Qe+ui),P.isDepthTexture?(At&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.get(G).__webglTexture,W,vt+ui),k.blitFramebuffer(Le,Xe,ue,ye,Ue,st,ue,ye,k.DEPTH_BUFFER_BIT,k.NEAREST)):At?k.copyTexSubImage3D(Ne,W,Ue,st,vt+ui,Le,Xe,ue,ye):k.copyTexSubImage2D(Ne,W,Ue,st,vt+ui,Le,Xe,ue,ye);Se.bindFramebuffer(k.READ_FRAMEBUFFER,null),Se.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else At?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(Ne,W,Ue,st,vt,ue,ye,Fe,Kt,ot,yt.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Ne,W,Ue,st,vt,ue,ye,Fe,Kt,yt.data):k.texSubImage3D(Ne,W,Ue,st,vt,ue,ye,Fe,Kt,ot,yt):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,Ue,st,ue,ye,Kt,ot,yt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,Ue,st,yt.width,yt.height,Kt,yt.data):k.texSubImage2D(k.TEXTURE_2D,W,Ue,st,ue,ye,Kt,ot,yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Gn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Sn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Zi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rn),W===0&&G.generateMipmaps&&k.generateMipmap(Ne),Se.unbindTexture()},this.copyTextureToTexture3D=function(P,G,Q=null,j=null,W=0){return P.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,j=arguments[1]||null,P=arguments[2],G=arguments[3],W=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,G,Q,j,W)},this.initRenderTarget=function(P){De.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),Se.unbindTexture()},this.resetState=function(){E=0,_=0,T=null,Se.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Sv extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gt,this.environmentIntensity=1,this.environmentRotation=new gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class TM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new D;class wd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ph=new D,Dh=new nt,Bh=new nt,_v=new D,Fh=new Re,jr=new D,Sa=new ci,Lh=new Re,_a=new zs;class wM extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bc,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),e.ray.intersectsSphere(Sa)!==!1&&(Lh.copy(i).invert(),_a.copy(e.ray).applyMatrix4(Lh),!(this.boundingBox!==null&&_a.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_a)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===If?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Dh.fromBufferAttribute(i.attributes.skinIndex,e),Bh.fromBufferAttribute(i.attributes.skinWeight,e),Ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Bh.getComponent(s);if(r!==0){const a=Dh.getComponent(s);Fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_v.copy(Ph).applyMatrix4(Fh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mv extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fn extends qt{constructor(e=null,t=1,n=1,i,s,r,a,l,c=un,h=un,d,u){super(null,r,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uh=new Re,Ev=new Re;class bd{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:Ev;Uh.multiplyMatrices(a,t[s]),Uh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new bd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fn(t,e,e,Wt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Mv),this.bones.push(r),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class bl extends dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Re,Nh=new Re,Kr=[],Oh=new cn,Cv=new Re,Ks=new Mt,Zs=new ci;class bM extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Oh.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Oh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Zs.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),e.ray.intersectsSphere(Zs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ps),Nh.multiplyMatrices(n,ps),Ks.matrixWorld=Nh,Ks.raycast(e,Kr);for(let r=0,a=Kr.length;r<a;r++){const l=Kr[r];l.instanceId=s,l.object=this,t.push(l)}Kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fn(new Float32Array(i*this.count),i,this.count,Wl,ln));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Tv extends Ki{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Co=new D,To=new D,zh=new Re,$s=new zs,Zr=new ci,Ma=new D,kh=new D;class Rd extends xt{constructor(e=new sn,t=new Tv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Co.fromBufferAttribute(t,i-1),To.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Co.distanceTo(To);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;zh.copy(i).invert(),$s.copy(e.ray).applyMatrix4(zh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=f,p=g-1;x<p;x+=c){const m=h.getX(x),v=h.getX(x+1),A=$r(this,e,$s,l,m,v);A&&t.push(A)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(f),m=$r(this,e,$s,l,x,p);m&&t.push(m)}}else{const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=f,p=g-1;x<p;x+=c){const m=$r(this,e,$s,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=$r(this,e,$s,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $r(o,e,t,n,i,s){const r=o.geometry.attributes.position;if(Co.fromBufferAttribute(r,i),To.fromBufferAttribute(r,s),t.distanceSqToSegment(Co,To,Ma,kh)>n)return;Ma.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Ma);if(!(l<e.near||l>e.far))return{distance:l,point:kh.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const Hh=new D,Vh=new D;class RM extends Rd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Hh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hh.distanceTo(Vh);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IM extends Rd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wv extends Ki{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gh=new Re,Rl=new zs,Jr=new ci,eo=new D;class PM extends xt{constructor(e=new sn,t=new wv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;Gh.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(Gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,x=f;g<x;g++){const p=c.getX(g);eo.fromBufferAttribute(d,p),Wh(eo,p,l,i,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,x=f;g<x;g++)eo.fromBufferAttribute(d,g),Wh(eo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wh(o,e,t,n,i,s,r){const a=Rl.distanceSqToPoint(o);if(a<t){const l=new D;Rl.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ar extends sn{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const x=[],p=n/2;let m=0;v(),r===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function v(){const y=new D,M=new D;let E=0;const _=(t-e)/n;for(let T=0;T<=s;T++){const C=[],S=T/s,I=S*(t-e)+e;for(let N=0;N<=i;N++){const R=N/i,B=R*l+a,U=Math.sin(B),F=Math.cos(B);M.x=I*U,M.y=-S*n+p,M.z=I*F,d.push(M.x,M.y,M.z),y.set(U,_,F).normalize(),u.push(y.x,y.y,y.z),f.push(R,1-S),C.push(g++)}x.push(C)}for(let T=0;T<i;T++)for(let C=0;C<s;C++){const S=x[C][T],I=x[C+1][T],N=x[C+1][T+1],R=x[C][T+1];(e>0||C!==0)&&(h.push(S,I,R),E+=3),(t>0||C!==s-1)&&(h.push(I,N,R),E+=3)}c.addGroup(m,E,0),m+=E}function A(y){const M=g,E=new Me,_=new D;let T=0;const C=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,p*S,0),u.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let N=0;N<=i;N++){const B=N/i*l+a,U=Math.cos(B),F=Math.sin(B);_.x=C*F,_.y=p*S,_.z=C*U,d.push(_.x,_.y,_.z),u.push(0,S,0),E.x=U*.5+.5,E.y=F*.5*S+.5,f.push(E.x,E.y),g++}for(let N=0;N<i;N++){const R=M+N,B=I+N;y===!0?h.push(B,B+1,R):h.push(B+1,B,R),T+=3}c.addGroup(m,T,y===!0?1:2),m+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zl extends Ar{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Zl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sr extends sn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const v=[],A=m/n;let y=0;m===0&&r===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const E=M/t;d.x=-e*Math.cos(i+E*s)*Math.sin(r+A*a),d.y=e*Math.cos(r+A*a),d.z=e*Math.sin(i+E*s)*Math.sin(r+A*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(E+y,1-A),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const A=h[m][v+1],y=h[m][v],M=h[m+1][v],E=h[m+1][v+1];(m!==0||r>0)&&f.push(A,y,E),(m!==n-1||l<Math.PI)&&f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bv extends Ki{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DM extends bv{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function to(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Rv(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Iv(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qh(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Id(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class ko{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Pv extends ko{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:s=e,a=2*t-n;break;case Uc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:r=e,l=2*n-t;break;case Uc:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,A=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let M=0;M!==a;++M)s[M]=m*r[h+M]+v*r[c+M]+A*r[l+M]+y*r[d+M];return s}}class Dv extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}}class Bv extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case Cl:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&Rv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yo,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const d=a*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Cl;class Vs extends Hn{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Mo;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Pd extends Hn{}Pd.prototype.ValueTypeName="color";class wo extends Hn{}wo.prototype.ValueTypeName="number";class Fv extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Et.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Ho extends Hn{InterpolantFactoryMethodLinear(e){return new Fv(this.times,this.values,this.getValueSize(),e)}}Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Hn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Mo;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Hn{}bo.prototype.ValueTypeName="vector";class BM{constructor(e="",t=-1,n=[],i=Df){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Uv(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Iv(l);l=qh(l,1,h),c=qh(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new wo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,x){if(f.length!==0){const p=[],m=[];Id(f,p,m,g),p.length!==0&&x.push(new d(u,p,m))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)f[u[g].morphTargets[x]]=-1;for(const x in f){const p=[],m=[];for(let v=0;v!==u[g].morphTargets.length;++v){const A=u[g];p.push(A.time),m.push(A.morphTarget===x?1:0)}i.push(new wo(".morphTargetInfluence["+x+"]",p,m))}l=f.length*r}else{const f=".bones["+t[d].name+"]";n(bo,f+".position",u,"pos",i),n(Ho,f+".quaternion",u,"rot",i),n(bo,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Lv(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return Pd;case"quaternion":return Ho;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Uv(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lv(o.type);if(o.times===void 0){const t=[],n=[];Id(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Mi={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Nv{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ov=new Nv;class Mr{constructor(e){this.manager=e!==void 0?e:Ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class zv extends Error{constructor(e,t){super(e),this.response=t}}class FM extends Mr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:i});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=jn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let x=0;const p=new ReadableStream({start(m){v();function v(){d.read().then(({done:A,value:y})=>{if(A)m.close();else{x+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,_=h.length;E<_;E++){const T=h[E];T.onProgress&&T.onProgress(M)}m.enqueue(y),v()}},A=>{m.error(A)})}}});return new Response(p)}else throw new zv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Mi.add(e,c);const h=jn[e];delete jn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=jn[e];if(h===void 0)throw this.manager.itemError(e),c;delete jn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kv extends Mr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Mi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=vr("img");function l(){h(),Mi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class LM extends Mr{constructor(e){super(e)}load(e,t,n,i){const s=new qt,r=new kv(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class $l extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ea=new Re,Xh=new D,Yh=new D;class Jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),Yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yh),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hv extends Jl{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class UM extends $l{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Hv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qh=new Re,Js=new D,Ca=new D;class Vv extends Jl{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class NM extends $l{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gv extends Jl{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OM extends $l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Gv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zM{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wv extends sn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class kM extends Mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Mi.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Mi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Mi.add(e,l),s.manager.itemStart(e)}}const ec="\\[\\]\\.:\\/",qv=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",Xv="[^"+ec.replace("\\.","")+"]",Yv=/((?:WC+[\/:])*)/.source.replace("WC",tc),Qv=/(WCOD+)?/.source.replace("WCOD",Xv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),Kv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),Zv=new RegExp("^"+Yv+Qv+jv+Kv+"$"),$v=["material","materials","bones","map"];class Jv{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qv,"")}static parseTrackName(e){const t=Zv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$v.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Jv;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const jh=new Re;let HM=class{constructor(e,t,n=0,i=1/0){this.ray=new zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(e,t=!0,n=[]){return Il(e,this,n,t),n.sort(Kh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Il(e[i],this,n,t);return n.sort(Kh),n}};function Kh(o,e){return o.distance-e.distance}function Il(o,e,t,n){let i=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)Il(s[r],e,t,!0)}}class Zh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GM extends Ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);const qi=class qi{constructor(e,t){let n,i;this.promise=new Promise((c,h)=>{n=c,i=h});const s=n.bind(this),r=i.bind(this),a=(...c)=>{s(...c)},l=c=>{r(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=qi.idGen++}then(e){return new qi((t,n)=>{this.promise=this.promise.then((...i)=>{const s=e(...i);s instanceof Promise||s instanceof qi?s.then((...r)=>{t(...r)}):t(s)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new qi(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};he(qi,"idGen",0);let _r=qi;class Dd extends Error{constructor(e){super(e)}}(function(){const o=new Float32Array(1),e=new Int32Array(o.buffer);return function(t){o[0]=t;const n=e[0];let i=n>>16&32768,s=n>>12&2047;const r=n>>23&255;return r<103?i:r>142?(i|=31744,i|=(r==255?0:1)&&n&8388607,i):r<113?(s|=2048,i|=(s>>114-r)+(s>>113-r&1),i):(i|=r-112<<10|s>>1,i+=s&1,i)}})();const Ta=function(){const o=new Float32Array(1),e=new Int32Array(o.buffer);return function(t){return o[0]=t,e[0]}}(),ey=function(o,e){return o[e]+(o[e+1]<<8)+(o[e+2]<<16)+(o[e+3]<<24)},Vo=function(o,e,t=!0,n){const i=new AbortController,s=i.signal;let r=!1;const a=h=>{i.abort(h),r=!0};let l=!1;const c=(h,d,u,f)=>{e&&!l&&(e(h,d,u,f),h===100&&(l=!0))};return new _r((h,d)=>{const u={signal:s};n&&(u.headers=n),fetch(o,u).then(async f=>{if(!f.ok){const A=await f.text();d(new Error(`Fetch failed: ${f.status} ${f.statusText} ${A}`));return}const g=f.body.getReader();let x=0,p=f.headers.get("Content-Length"),m=p?parseInt(p):void 0;const v=[];for(;!r;)try{const{value:A,done:y}=await g.read();if(y){if(c(100,"100%",A,m),t){const _=new Blob(v).arrayBuffer();h(_)}else h();break}x+=A.length;let M,E;m!==void 0&&(M=x/m*100,E=`${M.toFixed(2)}%`),t&&v.push(A),c(M,E,A,m)}catch(A){d(A);return}}).catch(f=>{d(new Dd(f))})},a)},wt=function(o,e,t){return Math.max(Math.min(o,t),e)},ms=function(){return performance.now()/1e3},As=o=>{if(o.geometry&&(o.geometry.dispose(),o.geometry=null),o.material&&(o.material.dispose(),o.material=null),o.children)for(let e of o.children)As(e)},hn=(o,e)=>new Promise(t=>{window.setTimeout(()=>{t(o?o():void 0)},e?1:50)}),Cs=(o=0)=>{let e=0;if(o===1)e=9;else if(o===2)e=24;else if(o===3)e=45;else if(o>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},nc=()=>{let o,e;return{promise:new Promise((n,i)=>{o=n,e=i}),resolve:o,reject:e}},wa=o=>{let e,t;return o||(o=()=>{}),{promise:new _r((i,s)=>{e=i,t=s},o),resolve:e,reject:t}};class ty{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function ic(){const o=navigator.userAgent;return o.indexOf("iPhone")>0||o.indexOf("iPad")>0}function Bd(){if(ic()){const o=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new ty(parseInt(o[1]||0,10),parseInt(o[2]||0,10),parseInt(o[3]||0,10))}else return null}const ny=14,pr=class pr{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Cs(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+ny,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=Cs(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=pr.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,s,r,a,l,c,h,d,u,f,g,...x){const p=[e,t,n,i,s,r,a,l,c,h,d,u,f,g,...this.defaultSphericalHarmonics];for(let m=0;m<x.length&&m<this.sphericalHarmonicsCount;m++)p[m]=x[m];return this.addSplat(p),p}addSplatFromArray(e,t){const n=e.splats[t],i=pr.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<n.length;s++)i[s]=n[s];this.addSplat(i)}};he(pr,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let fe=pr;class Je{}he(Je,"DefaultSplatSortDistanceMapPrecision",16),he(Je,"MemoryPageSize",65536),he(Je,"BytesPerFloat",4),he(Je,"BytesPerInt",4),he(Je,"MaxScenes",32),he(Je,"ProgressiveLoadSectionSize",262144),he(Je,"ProgressiveLoadSectionDelayDuration",15),he(Je,"SphericalHarmonics8BitCompressionRange",3);const iy=Je.SphericalHarmonics8BitCompressionRange,vi=iy/2,Ft=yr.toHalfFloat.bind(yr),sc=yr.fromHalfFloat.bind(yr),Ct=(o,e,t=!1,n,i)=>{if(e===0)return o;if(e===1||e===2&&!t)return yr.fromHalfFloat(o);if(e===2)return rc(o,n,i)},cr=(o,e,t)=>{o=wt(o,e,t);const n=t-e;return wt(Math.floor((o-e)/n*255),0,255)},rc=(o,e,t)=>{const n=t-e;return o/255*n+e},Fd=(o,e,t)=>cr(sc(o,e,t)),sy=(o,e,t)=>Ft(rc(o,e,t)),lt=(o,e,t,n=!1)=>t===0?o.getFloat32(e*4,!0):t===1||t===2&&!n?o.getUint16(e*2,!0):o.getUint8(e,!0),ry=function(){const o=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let s=o;return t===2&&i?n===1?s=sy:n==0&&(s=rc):t===2||t===1?n===0?s=sc:n==2&&(i?s=Fd:s=o):t===0&&(n===1?s=Ft:n==2&&(i?s=cr:s=Ft)),s(e)}}(),gs=(o,e,t,n,i=0)=>{const s=new Uint8Array(o,e),r=new Uint8Array(t,n);for(let a=0;a<i;a++)r[a]=s[a]},Z=class Z{constructor(e,t=!0){he(this,"getSplatScaleAndRotation",function(){const e=new Re,t=new Re,n=new Re,i=new D,s=new D,r=new Et;return function(a,l,c,h,d){const u=this.globalSplatIndexToSectionMap[a],f=this.sections[u],g=a-f.splatCountOffset,x=f.bytesPerSplat*g+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,f.dataBase+x);s.set(Ct(lt(p,0,this.compressionLevel),this.compressionLevel),Ct(lt(p,1,this.compressionLevel),this.compressionLevel),Ct(lt(p,2,this.compressionLevel),this.compressionLevel)),d&&(d.x!==void 0&&(s.x=d.x),d.y!==void 0&&(s.y=d.y),d.z!==void 0&&(s.z=d.z)),r.set(Ct(lt(p,4,this.compressionLevel),this.compressionLevel),Ct(lt(p,5,this.compressionLevel),this.compressionLevel),Ct(lt(p,6,this.compressionLevel),this.compressionLevel),Ct(lt(p,3,this.compressionLevel),this.compressionLevel)),h?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(r),n.copy(e).multiply(t).multiply(h),n.decompose(i,c,l)):(l.copy(s),c.copy(r))}}());he(this,"fillSplatScaleRotationArray",function(){const e=new Re,t=new Re,n=new Re,i=new D,s=new Et,r=new D,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,h,d,u,f,g,x){const p=this.splatCount;d=d||0,u=u||p-1,f===void 0&&(f=d);const m=(v,A)=>ry(v,A,g);for(let v=d;v<=u;v++){const A=this.globalSplatIndexToSectionMap[v],y=this.sections[A],M=v-y.splatCountOffset,E=y.bytesPerSplat*M+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,_=(v-d+f)*Z.ScaleComponentCount,T=(v-d+f)*Z.RotationComponentCount,C=new DataView(this.bufferData,y.dataBase+E),S=x&&x.x!==void 0?x.x:lt(C,0,this.compressionLevel),I=x&&x.y!==void 0?x.y:lt(C,1,this.compressionLevel),N=x&&x.z!==void 0?x.z:lt(C,2,this.compressionLevel),R=lt(C,3,this.compressionLevel),B=lt(C,4,this.compressionLevel),U=lt(C,5,this.compressionLevel),F=lt(C,6,this.compressionLevel);i.set(Ct(S,this.compressionLevel),Ct(I,this.compressionLevel),Ct(N,this.compressionLevel)),s.set(Ct(B,this.compressionLevel),Ct(U,this.compressionLevel),Ct(F,this.compressionLevel),Ct(R,this.compressionLevel)).normalize(),h&&(r.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(s),n.identity().premultiply(e).premultiply(t),n.premultiply(h),n.decompose(r,s,i),s.normalize()),a(s),l&&(l[_]=m(i.x,0),l[_+1]=m(i.y,0),l[_+2]=m(i.z,0)),c&&(c[T]=m(s.x,0),c[T+1]=m(s.y,0),c[T+2]=m(s.z,0),c[T+3]=m(s.w,0))}}}());he(this,"fillSphericalHarmonicsArray",function(){for(let B=0;B<15;B++)new D;const e=new ke,t=new Re,n=new D,i=new D,s=new Et,r=[],a=[],l=[],c=[],h=[],d=[],u=[],f=[],g=[],x=[],p=[],m=[],v=[],A=[],y=[],M=[],E=[],_=[],T=B=>B,C=(B,U,F,q)=>{B[0]=U,B[1]=F,B[2]=q},S=(B,U,F,q,z)=>{B[0]=lt(U,q,z,!0),B[1]=lt(U,q+F,z,!0),B[2]=lt(U,q+F+F,z,!0)},I=(B,U)=>{U[0]=B[0],U[1]=B[1],U[2]=B[2]},N=(B,U,F,q)=>{U[F]=q(B[0]),U[F+1]=q(B[1]),U[F+2]=q(B[2])},R=(B,U,F,q,z)=>(U[0]=Ct(B[0],F,!0,q,z),U[1]=Ct(B[1],F,!0,q,z),U[2]=Ct(B[2],F,!0,q,z),U);return function(B,U,F,q,z,V,$){const ae=this.splatCount;q=q||0,z=z||ae-1,V===void 0&&(V=q),F&&U>=1&&(t.copy(F),t.decompose(n,s,i),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),C(r,e.elements[4],-e.elements[7],e.elements[1]),C(a,-e.elements[5],e.elements[8],-e.elements[2]),C(l,e.elements[3],-e.elements[6],e.elements[0]));const ie=Y=>Fd(Y,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),Ie=Y=>cr(Y,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Y=q;Y<=z;Y++){const ee=this.globalSplatIndexToSectionMap[Y],le=this.sections[ee];U=Math.min(U,le.sphericalHarmonicsDegree);const re=Cs(U),Ae=Y-le.splatCountOffset,we=le.bytesPerSplat*Ae+Z.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Pe=new DataView(this.bufferData,le.dataBase+we),Ye=(Y-q+V)*re;let Oe=F?0:this.compressionLevel,We=T;Oe!==$&&(Oe===1?$===0?We=sc:$==2&&(We=ie):Oe===0&&($===1?We=Ft:$==2&&(We=Ie)));const k=this.minSphericalHarmonicsCoeff,Ze=this.maxSphericalHarmonicsCoeff;U>=1&&(S(g,Pe,3,0,this.compressionLevel),S(x,Pe,3,1,this.compressionLevel),S(p,Pe,3,2,this.compressionLevel),F?(R(g,g,this.compressionLevel,k,Ze),R(x,x,this.compressionLevel,k,Ze),R(p,p,this.compressionLevel,k,Ze),Z.rotateSphericalHarmonics3(g,x,p,r,a,l,A,y,M)):(I(g,A),I(x,y),I(p,M)),N(A,B,Ye,We),N(y,B,Ye+3,We),N(M,B,Ye+6,We),U>=2&&(S(g,Pe,5,9,this.compressionLevel),S(x,Pe,5,10,this.compressionLevel),S(p,Pe,5,11,this.compressionLevel),S(m,Pe,5,12,this.compressionLevel),S(v,Pe,5,13,this.compressionLevel),F?(R(g,g,this.compressionLevel,k,Ze),R(x,x,this.compressionLevel,k,Ze),R(p,p,this.compressionLevel,k,Ze),R(m,m,this.compressionLevel,k,Ze),R(v,v,this.compressionLevel,k,Ze),Z.rotateSphericalHarmonics5(g,x,p,m,v,r,a,l,c,h,d,u,f,A,y,M,E,_)):(I(g,A),I(x,y),I(p,M),I(m,E),I(v,_)),N(A,B,Ye+9,We),N(y,B,Ye+12,We),N(M,B,Ye+15,We),N(E,B,Ye+18,We),N(_,B,Ye+21,We)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let s=i;n=e.fullBucketCount;let r=0;for(;s<e.splatCount;){let a=e.partiallyFilledBucketLengths[r];if(t>=s&&t<s+a)break;s+=a,n++,r++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],s=this.sections[i],r=e-s.splatCountOffset,a=s.bytesPerSplat*r,l=new DataView(this.bufferData,s.dataBase+a),c=lt(l,0,this.compressionLevel),h=lt(l,1,this.compressionLevel),d=lt(l,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(s,r)*Z.BucketStorageSizeFloats,g=s.compressionScaleFactor,x=s.compressionScaleRange;t.x=(c-x)*g+s.bucketArray[f],t.y=(h-x)*g+s.bucketArray[f+1],t.z=(d-x)*g+s.bucketArray[f+2]}else t.x=c,t.y=h,t.z=d;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],s=e-i.splatCountOffset,r=i.bytesPerSplat*s+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+r,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,s){const r=this.splatCount;n=n||0,i=i||r-1,s===void 0&&(s=n);const a=new D;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],h=this.sections[c],d=l-h.splatCountOffset,u=(l-n+s)*Z.CenterComponentCount,f=h.bytesPerSplat*d,g=new DataView(this.bufferData,h.dataBase+f),x=lt(g,0,this.compressionLevel),p=lt(g,1,this.compressionLevel),m=lt(g,2,this.compressionLevel);if(this.compressionLevel>=1){const A=this.getBucketIndex(h,d)*Z.BucketStorageSizeFloats,y=h.compressionScaleFactor,M=h.compressionScaleRange;a.x=(x-M)*y+h.bucketArray[A],a.y=(p-M)*y+h.bucketArray[A+1],a.z=(m-M)*y+h.bucketArray[A+2]}else a.x=x,a.y=p,a.z=m;t&&a.applyMatrix4(t),e[u]=a.x,e[u+1]=a.y,e[u+2]=a.z}}fillSplatCovarianceArray(e,t,n,i,s,r){const a=this.splatCount,l=new D,c=new Et;n=n||0,i=i||a-1,s===void 0&&(s=n);for(let h=n;h<=i;h++){const d=this.globalSplatIndexToSectionMap[h],u=this.sections[d],f=h-u.splatCountOffset,g=(h-n+s)*Z.CovarianceComponentCount,x=u.bytesPerSplat*f+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,u.dataBase+x);l.set(Ct(lt(p,0,this.compressionLevel),this.compressionLevel),Ct(lt(p,1,this.compressionLevel),this.compressionLevel),Ct(lt(p,2,this.compressionLevel),this.compressionLevel)),c.set(Ct(lt(p,4,this.compressionLevel),this.compressionLevel),Ct(lt(p,5,this.compressionLevel),this.compressionLevel),Ct(lt(p,6,this.compressionLevel),this.compressionLevel),Ct(lt(p,3,this.compressionLevel),this.compressionLevel)),Z.computeCovariance(l,c,t,e,g,r)}}fillSplatColorArray(e,t,n,i,s){const r=this.splatCount;n=n||0,i=i||r-1,s===void 0&&(s=n);for(let a=n;a<=i;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],h=a-c.splatCountOffset,d=(a-n+s)*Z.ColorComponentCount,u=c.bytesPerSplat*h+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,c.dataBase+u);let g=f[3];g=g>=t?g:0,e[d]=f[0],e[d+1]=f[1],e[d+2]=f[2],e[d+3]=g}}static parseHeader(e){const t=new Uint8Array(e,0,Z.HeaderSizeBytes),n=new Uint16Array(e,0,Z.HeaderSizeBytes/2),i=new Uint32Array(e,0,Z.HeaderSizeBytes/4),s=new Float32Array(e,0,Z.HeaderSizeBytes/4),r=t[0],a=t[1],l=i[1],c=i[2],h=i[3],d=i[4],u=n[10],f=new D(s[6],s[7],s[8]),g=s[9]||-vi,x=s[10]||vi;return{versionMajor:r,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:h,splatCount:d,compressionLevel:u,sceneCenter:f,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:x}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,Z.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,Z.HeaderSizeBytes),i=new Uint16Array(t,0,Z.HeaderSizeBytes/2),s=new Uint32Array(t,0,Z.HeaderSizeBytes/4),r=new Float32Array(t,0,Z.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,i[10]=e.compressionLevel,r[6]=e.sceneCenter.x,r[7]=e.sceneCenter.y,r[8]=e.sceneCenter.z,r[9]=e.minSphericalHarmonicsCoeff||-vi,r[10]=e.maxSphericalHarmonicsCoeff||vi}static parseSectionHeaders(e,t,n=0,i){const s=e.compressionLevel,r=e.maxSectionCount,a=new Uint16Array(t,n,r*Z.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,r*Z.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,r*Z.SectionHeaderSizeBytes/4),h=[];let d=0,u=d/2,f=d/4,g=Z.HeaderSizeBytes+e.maxSectionCount*Z.SectionHeaderSizeBytes,x=0;for(let p=0;p<r;p++){const m=l[f+1],v=l[f+2],A=l[f+3],y=c[f+4],M=y/2,E=a[u+10],_=l[f+6]||Z.CompressionLevels[s].ScaleRange,T=l[f+8],C=l[f+9],S=C*4,I=E*A+S,N=a[u+20],{bytesPerSplat:R}=Z.calculateComponentStorage(s,N),B=R*m,U=B+I,F={bytesPerSplat:R,splatCountOffset:x,splatCount:i?m:0,maxSplatCount:m,bucketSize:v,bucketCount:A,bucketBlockSize:y,halfBucketBlockSize:M,bucketStorageSizeBytes:E,bucketsStorageSizeBytes:I,splatDataStorageSizeBytes:B,storageSizeBytes:U,compressionScaleRange:_,compressionScaleFactor:M/_,base:g,bucketsBase:g+S,dataBase:g+I,fullBucketCount:T,partiallyFilledBucketCount:C,sphericalHarmonicsDegree:N};h[p]=F,g+=U,d+=Z.SectionHeaderSizeBytes,u=d/2,f=d/4,x+=m}return h}static writeSectionHeaderToBuffer(e,t,n,i=0){const s=new Uint16Array(n,i,Z.SectionHeaderSizeBytes/2),r=new Uint32Array(n,i,Z.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,Z.SectionHeaderSizeBytes/4);r[0]=e.splatCount,r[1]=e.maxSplatCount,r[2]=t>=1?e.bucketSize:0,r[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?Z.BucketStorageSizeBytes:0,r[6]=t>=1?e.compressionScaleRange:0,r[7]=e.storageSizeBytes,r[8]=t>=1?e.fullBucketCount:0,r[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,Z.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=Z.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new D().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=Z.parseSectionHeaders(n,this.bufferData,Z.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=Z.CompressionLevels[e].BytesPerCenter,i=Z.CompressionLevels[e].BytesPerScale,s=Z.CompressionLevels[e].BytesPerRotation,r=Z.CompressionLevels[e].BytesPerColor,a=Cs(t),l=Z.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+i+s+r+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:s,bytesPerColor:r,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*Z.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const s=e+i;this.globalSplatIndexToLocalSplatIndexMap[s]=i,this.globalSplatIndexToSectionMap[s]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){Z.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*e;Z.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,i,s,r,a=[]){let l=0;for(let M=0;M<e.length;M++){const E=e[M];l=Math.max(E.sphericalHarmonicsDegree,l)}let c,h;for(let M=0;M<e.length;M++){const E=e[M];for(let _=0;_<E.splats.length;_++){const T=E.splats[_];for(let C=fe.OFFSET.FRC0;C<fe.OFFSET.FRC23&&C<T.length;C++)(!c||T[C]<c)&&(c=T[C]),(!h||T[C]>h)&&(h=T[C])}}c=c||-vi,h=h||vi;const{bytesPerSplat:d}=Z.calculateComponentStorage(n,l),u=Z.CompressionLevels[n].ScaleRange,f=[],g=[];let x=0;for(let M=0;M<e.length;M++){const E=e[M],_=new fe(l);for(let ee=0;ee<E.splatCount;ee++){const le=E.splats[ee];(le[fe.OFFSET.OPACITY]||0)>=t&&_.addSplat(le)}const T=a[M]||{},C=(T.blockSizeFactor||1)*(s||Z.BucketBlockSize),S=Math.ceil((T.bucketSizeFactor||1)*(r||Z.BucketSize)),I=Z.computeBucketsForUncompressedSplatArray(_,C,S),N=I.fullBuckets.length,R=I.partiallyFullBuckets.map(ee=>ee.splats.length),B=R.length,U=[...I.fullBuckets,...I.partiallyFullBuckets],F=_.splats.length*d,q=B*4,z=n>=1?U.length*Z.BucketStorageSizeBytes+q:0,V=F+z,$=new ArrayBuffer(V),ae=u/(C*.5),ie=new D;let Ie=0;for(let ee=0;ee<U.length;ee++){const le=U[ee];ie.fromArray(le.center);for(let re=0;re<le.splats.length;re++){let Ae=le.splats[re];const we=_.splats[Ae],Pe=z+Ie*d;Z.writeSplatDataToSectionBuffer(we,$,Pe,n,l,ie,ae,u,c,h),Ie++}}if(x+=Ie,n>=1){const ee=new Uint32Array($,0,R.length*4);for(let re=0;re<R.length;re++)ee[re]=R[re];const le=new Float32Array($,q,U.length*Z.BucketStorageSizeFloats);for(let re=0;re<U.length;re++){const Ae=U[re],we=re*3;le[we]=Ae.center[0],le[we+1]=Ae.center[1],le[we+2]=Ae.center[2]}}f.push($);const Y=new ArrayBuffer(Z.SectionHeaderSizeBytes);Z.writeSectionHeaderToBuffer({maxSplatCount:Ie,splatCount:Ie,bucketSize:S,bucketCount:U.length,bucketBlockSize:C,compressionScaleRange:u,storageSizeBytes:V,fullBucketCount:N,partiallyFilledBucketCount:B,sphericalHarmonicsDegree:l},n,Y,0),g.push(Y)}let p=0;for(let M of f)p+=M.byteLength;const m=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*f.length+p,v=new ArrayBuffer(m);Z.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:x,splatCount:x,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:h},v);let A=Z.HeaderSizeBytes;for(let M of g)new Uint8Array(v,A,Z.SectionHeaderSizeBytes).set(new Uint8Array(M)),A+=Z.SectionHeaderSizeBytes;for(let M of f)new Uint8Array(v,A,M.byteLength).set(new Uint8Array(M)),A+=M.byteLength;return new Z(v)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const s=t/2,r=new D,a=new D;for(let x=0;x<i;x++){const p=e.splats[x],m=[p[fe.OFFSET.X],p[fe.OFFSET.Y],p[fe.OFFSET.Z]];(x===0||m[0]<r.x)&&(r.x=m[0]),(x===0||m[0]>a.x)&&(a.x=m[0]),(x===0||m[1]<r.y)&&(r.y=m[1]),(x===0||m[1]>a.y)&&(a.y=m[1]),(x===0||m[2]<r.z)&&(r.z=m[2]),(x===0||m[2]>a.z)&&(a.z=m[2])}const l=new D().copy(a).sub(r),c=Math.ceil(l.y/t),h=Math.ceil(l.z/t),d=new D,u=[],f={};for(let x=0;x<i;x++){const p=e.splats[x],m=[p[fe.OFFSET.X],p[fe.OFFSET.Y],p[fe.OFFSET.Z]],v=Math.floor((m[0]-r.x)/t),A=Math.floor((m[1]-r.y)/t),y=Math.floor((m[2]-r.z)/t);d.x=v*t+r.x+s,d.y=A*t+r.y+s,d.z=y*t+r.z+s;const M=v*(c*h)+A*h+y;let E=f[M];E||(f[M]=E={splats:[],center:d.toArray()}),E.splats.push(x),E.splats.length>=n&&(u.push(E),f[M]=null)}const g=[];for(let x in f)if(f.hasOwnProperty(x)){const p=f[x];p&&g.push(p)}return{fullBuckets:u,partiallyFullBuckets:g}}static preallocateUncompressed(e,t){const n=Z.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes,s=i+n.BytesPerSplat*e,r=new ArrayBuffer(s);return Z.writeHeaderToBuffer({versionMajor:Z.CurrentMajorVersion,versionMinor:Z.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new D},r),Z.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,r,Z.HeaderSizeBytes),{splatBuffer:new Z(r,!0),splatBufferDataOffsetBytes:i}}};he(Z,"CurrentMajorVersion",0),he(Z,"CurrentMinorVersion",1),he(Z,"CenterComponentCount",3),he(Z,"ScaleComponentCount",3),he(Z,"RotationComponentCount",4),he(Z,"ColorComponentCount",4),he(Z,"CovarianceComponentCount",6),he(Z,"SplatScaleOffsetFloat",3),he(Z,"SplatRotationOffsetFloat",6),he(Z,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),he(Z,"CovarianceSizeFloats",6),he(Z,"HeaderSizeBytes",4096),he(Z,"SectionHeaderSizeBytes",1024),he(Z,"BucketStorageSizeBytes",12),he(Z,"BucketStorageSizeFloats",3),he(Z,"BucketBlockSize",5),he(Z,"BucketSize",256),he(Z,"computeCovariance",function(){const e=new Re,t=new ke,n=new ke,i=new ke,s=new ke,r=new ke,a=new ke;return function(l,c,h,d,u=0,f){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),s.copy(i).transpose().premultiply(i),h&&(r.setFromMatrix4(h),a.copy(r).transpose(),s.multiply(a),s.premultiply(r)),f>=1?(d[u]=Ft(s.elements[0]),d[u+1]=Ft(s.elements[3]),d[u+2]=Ft(s.elements[6]),d[u+3]=Ft(s.elements[4]),d[u+4]=Ft(s.elements[7]),d[u+5]=Ft(s.elements[8])):(d[u]=s.elements[0],d[u+1]=s.elements[3],d[u+2]=s.elements[6],d[u+3]=s.elements[4],d[u+4]=s.elements[7],d[u+5]=s.elements[8])}}()),he(Z,"dot3",(e,t,n,i,s)=>{s[0]=s[1]=s[2]=0;const r=i[0],a=i[1],l=i[2];Z.addInto3(e[0]*r,e[1]*r,e[2]*r,s),Z.addInto3(t[0]*a,t[1]*a,t[2]*a,s),Z.addInto3(n[0]*l,n[1]*l,n[2]*l,s)}),he(Z,"addInto3",(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n}),he(Z,"dot5",(e,t,n,i,s,r,a)=>{a[0]=a[1]=a[2]=0;const l=r[0],c=r[1],h=r[2],d=r[3],u=r[4];Z.addInto3(e[0]*l,e[1]*l,e[2]*l,a),Z.addInto3(t[0]*c,t[1]*c,t[2]*c,a),Z.addInto3(n[0]*h,n[1]*h,n[2]*h,a),Z.addInto3(i[0]*d,i[1]*d,i[2]*d,a),Z.addInto3(s[0]*u,s[1]*u,s[2]*u,a)}),he(Z,"rotateSphericalHarmonics3",(e,t,n,i,s,r,a,l,c)=>{Z.dot3(e,t,n,i,a),Z.dot3(e,t,n,s,l),Z.dot3(e,t,n,r,c)}),he(Z,"rotateSphericalHarmonics5",(e,t,n,i,s,r,a,l,c,h,d,u,f,g,x,p,m,v)=>{const A=Math.sqrt(.25),y=Math.sqrt(3/4),M=Math.sqrt(1/3),E=Math.sqrt(4/3),_=Math.sqrt(1/12);c[0]=A*(l[2]*r[0]+l[0]*r[2]+(r[2]*l[0]+r[0]*l[2])),c[1]=l[1]*r[0]+r[1]*l[0],c[2]=y*(l[1]*r[1]+r[1]*l[1]),c[3]=l[1]*r[2]+r[1]*l[2],c[4]=A*(l[2]*r[2]-l[0]*r[0]+(r[2]*l[2]-r[0]*l[0])),Z.dot5(e,t,n,i,s,c,g),h[0]=A*(a[2]*r[0]+a[0]*r[2]+(r[2]*a[0]+r[0]*a[2])),h[1]=a[1]*r[0]+r[1]*a[0],h[2]=y*(a[1]*r[1]+r[1]*a[1]),h[3]=a[1]*r[2]+r[1]*a[2],h[4]=A*(a[2]*r[2]-a[0]*r[0]+(r[2]*a[2]-r[0]*a[0])),Z.dot5(e,t,n,i,s,h,x),d[0]=M*(a[2]*a[0]+a[0]*a[2])+-_*(l[2]*l[0]+l[0]*l[2]+(r[2]*r[0]+r[0]*r[2])),d[1]=E*a[1]*a[0]+-M*(l[1]*l[0]+r[1]*r[0]),d[2]=a[1]*a[1]+-A*(l[1]*l[1]+r[1]*r[1]),d[3]=E*a[1]*a[2]+-M*(l[1]*l[2]+r[1]*r[2]),d[4]=M*(a[2]*a[2]-a[0]*a[0])+-_*(l[2]*l[2]-l[0]*l[0]+(r[2]*r[2]-r[0]*r[0])),Z.dot5(e,t,n,i,s,d,p),u[0]=A*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),u[1]=a[1]*l[0]+l[1]*a[0],u[2]=y*(a[1]*l[1]+l[1]*a[1]),u[3]=a[1]*l[2]+l[1]*a[2],u[4]=A*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),Z.dot5(e,t,n,i,s,u,m),f[0]=A*(l[2]*l[0]+l[0]*l[2]-(r[2]*r[0]+r[0]*r[2])),f[1]=l[1]*l[0]-r[1]*r[0],f[2]=y*(l[1]*l[1]-r[1]*r[1]),f[3]=l[1]*l[2]-r[1]*r[2],f[4]=A*(l[2]*l[2]-l[0]*l[0]-(r[2]*r[2]-r[0]*r[0])),Z.dot5(e,t,n,i,s,f,v)}),he(Z,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),s=new ArrayBuffer(256),r=new Et,a=new D,l=new D,{X:c,Y:h,Z:d,SCALE0:u,SCALE1:f,SCALE2:g,ROTATION0:x,ROTATION1:p,ROTATION2:m,ROTATION3:v,FDC0:A,FDC1:y,FDC2:M,OPACITY:E,FRC0:_,FRC9:T}=fe.OFFSET,C=(S,I,N)=>{const R=N*2+1;return S=Math.round(S*I)+N,wt(S,0,R)};return function(S,I,N,R,B,U,F,q,z=-vi,V=vi){const $=Cs(B),ae=Z.CompressionLevels[R].BytesPerCenter,ie=Z.CompressionLevels[R].BytesPerScale,Ie=Z.CompressionLevels[R].BytesPerRotation,Y=Z.CompressionLevels[R].BytesPerColor,ee=N,le=ee+ae,re=le+ie,Ae=re+Ie,we=Ae+Y;if(S[x]!==void 0?(r.set(S[x],S[p],S[m],S[v]),r.normalize()):r.set(1,0,0,0),S[u]!==void 0?a.set(S[u]||0,S[f]||0,S[g]||0):a.set(0,0,0),R===0){const Ye=new Float32Array(I,ee,Z.CenterComponentCount),Oe=new Float32Array(I,re,Z.RotationComponentCount),We=new Float32Array(I,le,Z.ScaleComponentCount);if(Oe.set([r.x,r.y,r.z,r.w]),We.set([a.x,a.y,a.z]),Ye.set([S[c],S[h],S[d]]),B>0){const k=new Float32Array(I,we,$);if(B>=1){for(let Ze=0;Ze<9;Ze++)k[Ze]=S[_+Ze]||0;if(B>=2)for(let Ze=0;Ze<15;Ze++)k[Ze+9]=S[T+Ze]||0}}}else{const Ye=new Uint16Array(e,0,Z.CenterComponentCount),Oe=new Uint16Array(n,0,Z.RotationComponentCount),We=new Uint16Array(t,0,Z.ScaleComponentCount);if(Oe.set([Ft(r.x),Ft(r.y),Ft(r.z),Ft(r.w)]),We.set([Ft(a.x),Ft(a.y),Ft(a.z)]),l.set(S[c],S[h],S[d]).sub(U),l.x=C(l.x,F,q),l.y=C(l.y,F,q),l.z=C(l.z,F,q),Ye.set([l.x,l.y,l.z]),B>0){const k=R===1?Uint16Array:Uint8Array,Ze=R===1?2:1,He=new k(s,0,$);if(B>=1){for(let Se=0;Se<9;Se++){const $e=S[_+Se]||0;He[Se]=R===1?Ft($e):cr($e,z,V)}const qe=9*Ze;if(gs(He.buffer,0,I,we,qe),B>=2){for(let Se=0;Se<15;Se++){const $e=S[T+Se]||0;He[Se+9]=R===1?Ft($e):cr($e,z,V)}gs(He.buffer,qe,I,we+qe,15*Ze)}}}gs(Ye.buffer,0,I,ee,6),gs(We.buffer,0,I,le,6),gs(Oe.buffer,0,I,re,8)}const Pe=new Uint8ClampedArray(i,0,4);Pe.set([S[A]||0,S[y]||0,S[M]||0]),Pe[3]=S[E]||0,gs(Pe.buffer,0,I,Ae,4)}}());let Te=Z;const $h=new Uint8Array([112,108,121,10]),Jh=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),ba="end_header",Ra=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),On=(o,e)=>{const t=(1<<e)-1;return(o&t)/t},eu=(o,e)=>{o.x=On(e>>>21,11),o.y=On(e>>>11,10),o.z=On(e,11)},oy=(o,e)=>{o.x=On(e>>>24,8),o.y=On(e>>>16,8),o.z=On(e>>>8,8),o.w=On(e,8)},ay=(o,e)=>{const t=1/(Math.sqrt(2)*.5),n=(On(e>>>20,10)-.5)*t,i=(On(e>>>10,10)-.5)*t,s=(On(e,10)-.5)*t,r=Math.sqrt(1-(n*n+i*i+s*s));switch(e>>>30){case 0:o.set(r,n,i,s);break;case 1:o.set(n,r,i,s);break;case 2:o.set(n,i,r,s);break;case 3:o.set(n,i,s,r);break}},Kn=(o,e,t)=>o*(1-t)+e*t,bt=(o,e)=>{var t;return(t=o.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},dt=class dt{static decodeHeaderText(e){let t,n,i,s;const r=e.split(`
`).filter(d=>!d.startsWith("comment "));let a=0,l=!1;for(let d=1;d<r.length;++d){const u=r[d].split(" ");switch(u[0]){case"format":if(u[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:u[1],count:parseInt(u[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(s=t);break;case"property":{if(!Ra.has(u[1]))throw new Error(`Unrecognized property data type '${u[1]}' in ply header`);const f=Ra.get(u[1]),g=f.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(a+=f.BYTES_PER_ELEMENT),t.properties.push({type:u[1],name:u[2],storage:null,byteSize:f.BYTES_PER_ELEMENT,storageSizeByes:g}),t.storageSizeBytes+=g;break}case ba:l=!0;break;default:throw new Error(`Unrecognized header value '${u[0]}' in ply header`)}if(l)break}let c=0,h=0;return s&&(h=s.properties.length,s.properties.length>=45?c=3:s.properties.length>=24?c=2:s.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:i,shElement:s,bytesPerSplat:a,headerSizeBytes:e.indexOf(ba)+ba.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:h}}static decodeHeader(e){const t=(f,g)=>{const x=f.length-g.length;let p,m;for(p=0;p<=x;++p){for(m=0;m<g.length&&f[p+m]===g[m];++m);if(m===g.length)return p}return-1},n=(f,g)=>{if(f.length<g.length)return!1;for(let x=0;x<g.length;++x)if(f[x]!==g[x])return!1;return!0};let i=new Uint8Array(e),s;if(i.length>=$h.length&&!n(i,$h))throw new Error("Invalid PLY header");if(s=t(i,Jh),s===-1)throw new Error("End of PLY header not found");const r=new TextDecoder("ascii").decode(i.slice(0,s)),{chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:d,bytesPerSplat:u}=dt.decodeHeaderText(r);return{headerSizeBytes:s+Jh.length,bytesPerSplat:u,chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:d}}static readElementData(e,t,n,i,s,r=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,s=s||e.count-1;for(let l=i;l<=s;++l)for(let c=0;c<e.properties.length;++c){const h=e.properties[c],d=Ra.get(h.type),u=d.BYTES_PER_ELEMENT*e.count;if((!h.storage||h.storage.byteLength<u)&&(!r||r(h.name))&&(h.storage=new d(e.count)),h.storage)switch(h.type){case"char":h.storage[l]=a.getInt8(n);break;case"uchar":h.storage[l]=a.getUint8(n);break;case"short":h.storage[l]=a.getInt16(n,!0);break;case"ushort":h.storage[l]=a.getUint16(n,!0);break;case"int":h.storage[l]=a.getInt32(n,!0);break;case"uint":h.storage[l]=a.getUint32(n,!0);break;case"float":h.storage[l]=a.getFloat32(n,!0);break;case"double":h.storage[l]=a.getFloat64(n,!0);break}n+=h.byteSize}return n}static readPly(e,t=null){const n=dt.decodeHeader(e);let i=dt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=dt.readElementData(n.vertexElement,e,i,null,null,t),dt.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const i={};if(t){const s=bt(e,"min_r"),r=bt(e,"min_g"),a=bt(e,"min_b"),l=bt(e,"max_r"),c=bt(e,"max_g"),h=bt(e,"max_b"),d=bt(e,"min_x"),u=bt(e,"min_y"),f=bt(e,"min_z"),g=bt(e,"max_x"),x=bt(e,"max_y"),p=bt(e,"max_z"),m=bt(e,"min_scale_x"),v=bt(e,"min_scale_y"),A=bt(e,"min_scale_z"),y=bt(e,"max_scale_x"),M=bt(e,"max_scale_y"),E=bt(e,"max_scale_z"),_=bt(t,"packed_position"),T=bt(t,"packed_rotation"),C=bt(t,"packed_scale"),S=bt(t,"packed_color");i.colorExtremes={minR:s,maxR:l,minG:r,maxG:c,minB:a,maxB:h},i.positionExtremes={minX:d,maxX:g,minY:u,maxY:x,minZ:f,maxZ:p},i.scaleExtremes={minScaleX:m,maxScaleX:y,minScaleY:v,maxScaleY:M,minScaleZ:A,maxScaleZ:E},i.position=_,i.rotation=T,i.scale=C,i.color=S}if(n){const s={};for(let r=0;r<45;r++){const a=`f_rest_${r}`,l=bt(n,a);if(l)s[a]=l;else break}i.sh=s}return i}static parseToUncompressedSplatBufferSection(e,t,n,i,s,r,a,l,c=null){dt.readElementData(t,r,0,n,i,c);const h=Te.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:d,scaleExtremes:u,colorExtremes:f,position:g,rotation:x,scale:p,color:m}=dt.getElementStorageArrays(e,t),v=fe.createSplat();for(let A=n;A<=i;++A){dt.decompressBaseSplat(A,s,g,d,p,u,x,f,m,v);const y=A*h+l;Te.writeSplatDataToSectionBuffer(v,a,y,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,r,a,l=null){dt.readElementData(t,r,0,n,i,l);const{positionExtremes:c,scaleExtremes:h,colorExtremes:d,position:u,rotation:f,scale:g,color:x}=dt.getElementStorageArrays(e,t);for(let p=n;p<=i;++p){const m=fe.createSplat();dt.decompressBaseSplat(p,s,u,c,g,h,f,d,x,m),a.addSplat(m)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,s,r,a,l,c,h=null){dt.readElementData(t,s,r,n,i,h);const{sh:d}=dt.getElementStorageArrays(e,void 0,t),u=Object.values(d);for(let f=n;f<=i;++f)dt.decompressSphericalHarmonics(f,u,a,l,c.splats[f])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:r}=dt.readPly(e);t=Math.min(t,r);const a=new fe(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:h,position:d,rotation:u,scale:f,color:g}=dt.getElementStorageArrays(n,i);let x;if(t>0){const{sh:p}=dt.getElementStorageArrays(n,void 0,s);x=Object.values(p)}for(let p=0;p<i.count;++p){a.addDefaultSplat();const m=a.getSplat(a.splatCount-1);dt.decompressBaseSplat(p,0,d,l,f,c,u,h,g,m),t>0&&dt.decompressSphericalHarmonics(p,x,t,r,m)}return a}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:r}=dt.readPly(e);t=Math.min(t,r);const{splatBuffer:a,splatBufferDataOffsetBytes:l}=Te.preallocateUncompressed(i.count,t),{positionExtremes:c,scaleExtremes:h,colorExtremes:d,position:u,rotation:f,scale:g,color:x}=dt.getElementStorageArrays(n,i);let p;if(t>0){const{sh:A}=dt.getElementStorageArrays(n,void 0,s);p=Object.values(A)}const m=Te.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,v=fe.createSplat(t);for(let A=0;A<i.count;++A){dt.decompressBaseSplat(A,0,u,c,g,h,f,d,x,v),t>0&&dt.decompressSphericalHarmonics(A,p,t,r,v);const y=A*m+l;Te.writeSplatDataToSectionBuffer(v,a.bufferData,y,0,t)}return a}};he(dt,"decompressBaseSplat",function(){const e=new D,t=new Et,n=new D,i=new nt,s=fe.OFFSET;return function(r,a,l,c,h,d,u,f,g,x){x=x||fe.createSplat();const p=Math.floor((a+r)/256);return eu(e,l[r]),ay(t,u[r]),eu(n,h[r]),oy(i,g[r]),x[s.X]=Kn(c.minX[p],c.maxX[p],e.x),x[s.Y]=Kn(c.minY[p],c.maxY[p],e.y),x[s.Z]=Kn(c.minZ[p],c.maxZ[p],e.z),x[s.ROTATION0]=t.x,x[s.ROTATION1]=t.y,x[s.ROTATION2]=t.z,x[s.ROTATION3]=t.w,x[s.SCALE0]=Math.exp(Kn(d.minScaleX[p],d.maxScaleX[p],n.x)),x[s.SCALE1]=Math.exp(Kn(d.minScaleY[p],d.maxScaleY[p],n.y)),x[s.SCALE2]=Math.exp(Kn(d.minScaleZ[p],d.maxScaleZ[p],n.z)),f.minR&&f.maxR?x[s.FDC0]=wt(Math.round(Kn(f.minR[p],f.maxR[p],i.x)*255),0,255):x[s.FDC0]=wt(Math.floor(i.x*255),0,255),f.minG&&f.maxG?x[s.FDC1]=wt(Math.round(Kn(f.minG[p],f.maxG[p],i.y)*255),0,255):x[s.FDC1]=wt(Math.floor(i.y*255),0,255),f.minB&&f.maxB?x[s.FDC2]=wt(Math.round(Kn(f.minB[p],f.maxB[p],i.z)*255),0,255):x[s.FDC2]=wt(Math.floor(i.z*255),0,255),x[s.OPACITY]=wt(Math.floor(i.w*255),0,255),x}}()),he(dt,"decompressSphericalHarmonics",function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,s,r,a){a=a||fe.createSplat();let l=e[s],c=e[r];for(let h=0;h<3;++h)for(let d=0;d<15;++d){const u=t[h*15+d];d<l&&d<c&&(a[fe.OFFSET.FRC0+u]=i[h*c+d][n]*(8/255)-4)}return a}}());let ri=dt;const Qt={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[Ld,oc,ac,lc,cc,hc,uc]=[0,1,2,3,4,5,6],tu={double:Ld,int:oc,uint:ac,float:lc,short:cc,ushort:hc,uchar:uc},ly={[Ld]:8,[oc]:4,[ac]:4,[lc]:4,[cc]:2,[hc]:2,[uc]:1},$t=class $t{static decodeSectionHeader(e,t,n=0){const i=[];let s=!1,r=-1,a=0,l=!1,c=null;const h=[],d=[],u=[],f={};for(let m=n;m<e.length;m++){const v=e[m].trim();if(v.startsWith("element"))if(s){r--;break}else{s=!0,n=m,r=m;const A=v.split(" ");let y=0;for(let M of A){const E=M.trim();E.length>0&&(y++,y===2?c=E:y===3&&(a=parseInt(E)))}}else if(v.startsWith("property")){const A=v.match(/(\w+)\s+(\w+)\s+(\w+)/);if(A){const y=A[2],M=A[3];u.push(M);const E=t[M];f[M]=y;const _=tu[y];E!==void 0&&(h.push(E),d[E]=_)}}if(v===$t.HeaderEndToken){l=!0;break}s&&(i.push(v),r++)}const g=[];let x=0;for(let m of u){const v=f[m];if(f.hasOwnProperty(m)){const A=t[m];A!==void 0&&(g[A]=x)}x+=ly[tu[v]]}const p=$t.decodeSphericalHarmonicsFromSectionHeader(u,t);return{headerLines:i,headerStartLine:n,headerEndLine:r,fieldTypes:d,fieldIds:h,fieldOffsets:g,bytesPerVertex:x,vertexCount:a,dataSizeBytes:x*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:p.degree,sphericalHarmonicsCoefficientsPerChannel:p.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:p.degree1Fields,sphericalHarmonicsDegree2Fields:p.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let s=0;i>=3&&(s=1),i>=8&&(s=2);let r=[],a=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)r.push(t["f_rest_"+(c+i*l)]);if(s>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+i*l+3)])}return{degree:s,coefficientsPerChannel:i,degree1Fields:r,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let s=0;for(let r of i){const a=r.trim();a.length>0&&(s++,s===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes($t.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const s=new Uint8Array(e,Math.max(0,t-n),n),r=i.decode(s);return $t.checkTextForEndHeader(r)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const r=new Uint8Array(e,n,s);if(i+=t.decode(r),n+=s,$t.checkBufferForEndHeader(e,n,s*2,t))break}return i}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const r=new Uint8Array(e,n,s);if(i+=t.decode(r),n+=s,$t.checkBufferForEndHeader(e,n,s*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const s=t[i].trim();if(n.push(s),s===$t.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=$t.convertHeaderTextToLines(e);let n=Qt.INRIAV1;for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Qt.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))n=Qt.INRIAV2;else if(s===$t.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=$t.extractHeaderFromBufferToText(e);return $t.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,s,r,a=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,h=t.fieldTypes;for(let d of s){const u=h[d];u===lc?r[d]=e.getFloat32(l+c[d],!0):u===cc?r[d]=e.getInt16(l+c[d],!0):u===hc?r[d]=e.getUint16(l+c[d],!0):u===oc?r[d]=e.getInt32(l+c[d],!0):u===ac?r[d]=e.getUint32(l+c[d],!0):u===uc&&(a?r[d]=e.getUint8(l+c[d])/255:r[d]=e.getUint8(l+c[d]))}}};he($t,"HeaderEndToken","end_header");let Rt=$t;const Ud=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],cy=Ud.map((o,e)=>e),[nu,hy,uy,dy,fy,py,my,gy,xy,vy,iu,yy,Ay,su,ru,Sy,_y,My]=cy,gn=class gn{static decodeHeaderLines(e){let t=0;e.forEach(h=>{h.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let s=Array.from(Array(Math.max(n-1,0))).map((h,d)=>`f_rest_${d+1}`);const r=[...Ud,...s],a=r.map((h,d)=>d),l=a.reduce((h,d)=>(h[r[d]]=d,h),{}),c=Rt.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}static decodeHeaderText(e){const t=Rt.convertHeaderTextToLines(e),n=gn.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(Rt.HeaderEndToken)+Rt.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=Rt.readHeaderFromBuffer(e);return gn.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,s,r,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=Te.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let h=t;h<=n;h++){const d=gn.parseToUncompressedSplat(i,h,e,s,l),u=h*c+a;Te.writeSplatDataToSectionBuffer(d,r,u,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,r,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=gn.parseToUncompressedSplat(i,l,e,s,a);r.addSplat(c)}}static decodeSectionSplatData(e,t,n,i,s=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),s){const r=new fe(i);for(let a=0;a<t;a++){const l=gn.parseToUncompressedSplat(e,a,n,0,i);r.addSplat(l)}return r}else{const{splatBuffer:r,splatBufferDataOffsetBytes:a}=Te.preallocateUncompressed(t,i);return gn.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,r.bufferData,a,i),r}}static readSplat(e,t,n,i,s){return Rt.readVertex(e,t,n,i,t.fieldsToReadIndexes,s,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:i,splatData:s}=ou(e);return gn.decodeSectionSplatData(s,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:i,splatData:s}=ou(e);return gn.decodeSectionSplatData(s,i,n,t,!1)}};he(gn,"parseToUncompressedSplat",function(){let e=[];const t=new Et,n=fe.OFFSET.X,i=fe.OFFSET.Y,s=fe.OFFSET.Z,r=fe.OFFSET.SCALE0,a=fe.OFFSET.SCALE1,l=fe.OFFSET.SCALE2,c=fe.OFFSET.ROTATION0,h=fe.OFFSET.ROTATION1,d=fe.OFFSET.ROTATION2,u=fe.OFFSET.ROTATION3,f=fe.OFFSET.FDC0,g=fe.OFFSET.FDC1,x=fe.OFFSET.FDC2,p=fe.OFFSET.OPACITY,m=[];for(let v=0;v<45;v++)m[v]=fe.OFFSET.FRC0+v;return function(v,A,y,M=0,E=0){E=Math.min(E,y.sphericalHarmonicsDegree),gn.readSplat(v,y,A,M,e);const _=fe.createSplat(E);if(e[nu]!==void 0?(_[r]=Math.exp(e[nu]),_[a]=Math.exp(e[hy]),_[l]=Math.exp(e[uy])):(_[r]=.01,_[a]=.01,_[l]=.01),e[iu]!==void 0){const T=.28209479177387814;_[f]=(.5+T*e[iu])*255,_[g]=(.5+T*e[yy])*255,_[x]=(.5+T*e[Ay])*255}else e[ru]!==void 0?(_[f]=e[ru]*255,_[g]=e[Sy]*255,_[x]=e[_y]*255):(_[f]=0,_[g]=0,_[x]=0);if(e[su]!==void 0&&(_[p]=1/(1+Math.exp(-e[su]))*255),_[f]=wt(Math.floor(_[f]),0,255),_[g]=wt(Math.floor(_[g]),0,255),_[x]=wt(Math.floor(_[x]),0,255),_[p]=wt(Math.floor(_[p]),0,255),E>=1&&e[My]!==void 0){for(let T=0;T<9;T++)_[m[T]]=e[y.sphericalHarmonicsDegree1Fields[T]];if(E>=2)for(let T=0;T<15;T++)_[m[9+T]]=e[y.sphericalHarmonicsDegree2Fields[T]]}return t.set(e[dy],e[fy],e[py],e[my]),t.normalize(),_[c]=t.x,_[h]=t.y,_[d]=t.z,_[u]=t.w,_[n]=e[gy],_[i]=e[xy],_[s]=e[vy],_}}());let li=gn;function ou(o){const e=li.decodeHeaderFromBuffer(o),t=e.splatCount,n=li.findSplatData(o,e);return{header:e,splatCount:t,splatData:n}}const Nd=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],no=Nd.map((o,e)=>e),[io,Ey,Cy,au,so,Ty,Ia]=[0,1,4,16,17,18,19],Od=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Pl=Od.map((o,e)=>e),[lu,wy,by,Ry,Iy,Py,Dy,By,Fy,Ly,Dl,zd,kd,cu]=Pl,hu=Dl,Uy=zd,Ny=kd,ro=o=>{const e=(31744&o)>>10,t=1023&o;return(o>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},Jt=class Jt{static decodeSectionHeadersFromHeaderLines(e){const t=Pl.reduce((h,d)=>(h[Od[d]]=d,h),{}),n=no.reduce((h,d)=>(h[Nd[d]]=d,h),{}),i=Rt.getHeaderSectionNames(e);let s;for(let h=0;h<i.length;h++)i[h]==="codebook_centers"&&(s=h);let r=0,a=!1;const l=[];let c=0;for(;!a;){let h;c===s?h=Rt.decodeSectionHeader(e,n,r):h=Rt.decodeSectionHeader(e,t,r),a=h.endOfHeader,r=h.headerEndLine+1,a||(h.splatCount=h.vertexCount,h.bytesPerSplat=h.bytesPerVertex),l.push(h),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=Rt.convertHeaderTextToLines(e);return Jt.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(Rt.HeaderEndToken)+Rt.HeaderEndToken.length+1,n=Jt.decodeSectionHeadersFromHeaderText(e),i=Jt.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){const t=Rt.readHeaderFromBuffer(e);return Jt.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let s=0;s<n&&s<t.sectionHeaders.length;s++){const r=t.sectionHeaders[s];i+=r.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],i=[];for(let s=0;s<t.vertexCount;s++){Rt.readVertex(e,t,s,0,no,n);for(let r of no){const a=no[r];let l=i[a];l||(i[a]=l=[]),l.push(n[r])}}for(let s=0;s<i.length;s++){const r=i[s],a=.28209479177387814;for(let l=0;l<r.length;l++){const c=ro(r[l]);s===au?r[l]=Math.round(1/(1+Math.exp(-c))*255):s===io?r[l]=Math.round((.5+a*c)*255):s===so?r[l]=Math.exp(c):r[l]=c}}return i}static decodeSectionSplatData(e,t,n,i,s){s=Math.min(s,n.sphericalHarmonicsDegree);const r=new fe(s);for(let a=0;a<t;a++){const l=Jt.parseToUncompressedSplat(e,a,n,i,0,s);r.addSplat(l)}return r}static readSplat(e,t,n,i,s){return Rt.readVertex(e,t,n,i,Pl,s,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],i=Jt.decodeHeaderFromBuffer(e,t);let s;for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=Jt.findVertexData(e,i,a);s=Jt.decodeCodeBook(c,l)}}for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,h=Jt.findVertexData(e,i,a),d=Jt.decodeSectionSplatData(h,c,l,s,t);n.push(d)}}const r=new fe(t);for(let a of n)for(let l of a.splats)r.addSplat(l);return r}};he(Jt,"parseToUncompressedSplat",function(){let e=[];const t=new Et,n=fe.OFFSET.X,i=fe.OFFSET.Y,s=fe.OFFSET.Z,r=fe.OFFSET.SCALE0,a=fe.OFFSET.SCALE1,l=fe.OFFSET.SCALE2,c=fe.OFFSET.ROTATION0,h=fe.OFFSET.ROTATION1,d=fe.OFFSET.ROTATION2,u=fe.OFFSET.ROTATION3,f=fe.OFFSET.FDC0,g=fe.OFFSET.FDC1,x=fe.OFFSET.FDC2,p=fe.OFFSET.OPACITY,m=[];for(let v=0;v<45;v++)m[v]=fe.OFFSET.FRC0+v;return function(v,A,y,M,E=0,_=0){_=Math.min(_,y.sphericalHarmonicsDegree),Jt.readSplat(v,y,A,E,e);const T=fe.createSplat(_);if(e[lu]!==void 0?(T[r]=M[so][e[lu]],T[a]=M[so][e[wy]],T[l]=M[so][e[by]]):(T[r]=.01,T[a]=.01,T[l]=.01),e[Dl]!==void 0?(T[f]=M[io][e[Dl]],T[g]=M[io][e[zd]],T[x]=M[io][e[kd]]):e[hu]!==void 0?(T[f]=e[hu]*255,T[g]=e[Uy]*255,T[x]=e[Ny]*255):(T[f]=0,T[g]=0,T[x]=0),e[cu]!==void 0&&(T[p]=M[au][e[cu]]),T[f]=wt(Math.floor(T[f]),0,255),T[g]=wt(Math.floor(T[g]),0,255),T[x]=wt(Math.floor(T[x]),0,255),T[p]=wt(Math.floor(T[p]),0,255),_>=1&&y.sphericalHarmonicsDegree>=1){for(let R=0;R<9;R++){const B=M[Ey+R%3];T[m[R]]=B[e[y.sphericalHarmonicsDegree1Fields[R]]]}if(_>=2&&y.sphericalHarmonicsDegree>=2)for(let R=0;R<15;R++){const B=M[Cy+R%5];T[m[9+R]]=B[e[y.sphericalHarmonicsDegree2Fields[R]]]}}const C=M[Ty][e[Ry]],S=M[Ia][e[Iy]],I=M[Ia][e[Py]],N=M[Ia][e[Dy]];return t.set(C,S,I,N),t.normalize(),T[c]=t.x,T[h]=t.y,T[d]=t.z,T[u]=t.w,T[n]=ro(e[By]),T[i]=ro(e[Fy]),T[s]=ro(e[Ly]),T}}());let Bl=Jt;class uu{static parseToUncompressedSplatArray(e,t=0){const n=Rt.determineHeaderFormatFromPlyBuffer(e);if(n===Qt.PlayCanvasCompressed)return ri.parseToUncompressedSplatArray(e,t);if(n===Qt.INRIAV1)return li.parseToUncompressedSplatArray(e,t);if(n===Qt.INRIAV2)return Bl.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=Rt.determineHeaderFormatFromPlyBuffer(e);if(n===Qt.PlayCanvasCompressed)return ri.parseToUncompressedSplatBuffer(e,t);if(n===Qt.INRIAV1)return li.parseToUncompressedSplatBuffer(e,t);if(n===Qt.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class dc{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const r=this.partitionGenerator(e);t=r.groupingParameters,n=r.sectionCount,i=r.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const s=[];for(let r=0;r<n;r++){const a=new fe(e.sphericalHarmonicsDegree),l=i[r];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);s.push(a)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new D,n=Te.BucketBlockSize,i=Te.BucketSize){const s=r=>{const a=fe.OFFSET.X,l=fe.OFFSET.Y,c=fe.OFFSET.Z;e<=0&&(e=r.splatCount);const h=new D,d=.5,u=m=>{m.x=Math.floor(m.x/d)*d,m.y=Math.floor(m.y/d)*d,m.z=Math.floor(m.z/d)*d};r.splats.forEach(m=>{h.set(m[a],m[l],m[c]).sub(t),u(h),m.centerDist=h.lengthSq()}),r.splats.sort((m,v)=>{let A=m.centerDist,y=v.centerDist;return A>y?1:-1});const f=[],g=[];e=Math.min(r.splatCount,e);const x=Math.ceil(r.splatCount/e);let p=0;for(let m=0;m<x;m++){let v=p;f.push(A=>A>=v&&A<v+e),g.push({blocksSize:n,bucketSize:i}),p+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:g}};return new dc(void 0,void 0,void 0,s)}}class Er{constructor(e,t,n,i,s,r,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=s?new D().copy(s):void 0,this.blockSize=r,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Te.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new D,s=Te.BucketBlockSize,r=Te.BucketSize){const a=dc.getStandardPartitioner(n,i,s,r);return new Er(a,e,t,n,i,s,r)}}const It={Downloading:0,Processing:1,Done:2};class Ro extends Error{constructor(e){super(e)}}const _t={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function du(o,e){let t=0;for(let i of o)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of o)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function fu(o,e,t,n,i,s,r,a){return e?Er.getStandardGenerator(t,n,i,s,r,a).generateFromUncompressedSplatArray(o):Te.generateFromUncompressedSplatArrays([o],t,0,new D)}class fc{static loadFromURL(e,t,n,i,s,r,a=!0,l=0,c,h,d,u,f){let g;!n&&!a?g=_t.DownloadBeforeProcessing:a?g=_t.ProgressiveToSplatArray:g=_t.ProgressiveToSplatBuffer;const x=Je.ProgressiveLoadSectionSize,p=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes,m=1;let v,A,y,M,E,_=0,T=0,C=0,S=!1,I=!1,N=!1;const R=nc();let B=0,U=0,F=0,q=0,z="",V=null,$=[],ae;const ie=new TextDecoder,Ie=(Y,ee,le)=>{const re=Y>=100;if(le&&($.push({data:le,sizeBytes:le.byteLength,startBytes:F,endBytes:F+le.byteLength}),F+=le.byteLength),g===_t.DownloadBeforeProcessing)re&&R.resolve($);else{if(S){if(v===Qt.PlayCanvasCompressed&&!I){const Ae=V.headerSizeBytes+V.chunkElement.storageSizeBytes;E=du($,E),E.byteLength>=Ae&&(ri.readElementData(V.chunkElement,E,V.headerSizeBytes),B=Ae,U=Ae,I=!0)}}else if(z+=ie.decode(le),Rt.checkTextForEndHeader(z)){if(v=Rt.determineHeaderFormatFromHeaderText(z),v===Qt.INRIAV1)V=li.decodeHeaderText(z),l=Math.min(l,V.sphericalHarmonicsDegree),_=V.splatCount,I=!0,q=V.headerSizeBytes+V.bytesPerSplat*_;else if(v===Qt.PlayCanvasCompressed){if(V=ri.decodeHeaderText(z),l=Math.min(l,V.sphericalHarmonicsDegree),g===_t.ProgressiveToSplatBuffer&&l>0)throw new Ro("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");_=V.vertexElement.count,q=V.headerSizeBytes+V.bytesPerSplat*_+V.chunkElement.storageSizeBytes}else{if(g===_t.ProgressiveToSplatBuffer)throw new Ro("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");g=_t.DownloadBeforeProcessing;return}if(g===_t.ProgressiveToSplatBuffer){const Ae=Te.CompressionLevels[0].SphericalHarmonicsDegrees[l],we=p+Ae.BytesPerSplat*_;y=new ArrayBuffer(we),Te.writeHeaderToBuffer({versionMajor:Te.CurrentMajorVersion,versionMinor:Te.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:_,splatCount:0,compressionLevel:0,sceneCenter:new D},y)}else ae=new fe(l);B=V.headerSizeBytes,U=V.headerSizeBytes,S=!0}if(S&&I&&$.length>0&&(A=du($,A),F-B>x||F>=q&&!N||re)){const we=N?V.sphericalHarmonicsPerSplat:V.bytesPerSplat,Ye=(N?F:Math.min(q,F))-U,Oe=Math.floor(Ye/we),We=Oe*we,k=F-U-We,Ze=U-$[0].startBytes,He=new DataView(A,Ze,We);if(N)v===Qt.PlayCanvasCompressed&&g===_t.ProgressiveToSplatArray&&(ri.parseSphericalHarmonicsToUncompressedSplatArraySection(V.chunkElement,V.shElement,C,C+Oe-1,He,0,l,V.sphericalHarmonicsDegree,ae),C+=Oe);else{if(g===_t.ProgressiveToSplatBuffer){const qe=Te.CompressionLevels[0].SphericalHarmonicsDegrees[l],Se=T*qe.BytesPerSplat+p;v===Qt.PlayCanvasCompressed?ri.parseToUncompressedSplatBufferSection(V.chunkElement,V.vertexElement,0,Oe-1,T,He,y,Se):li.parseToUncompressedSplatBufferSection(V,0,Oe-1,He,0,y,Se,l)}else v===Qt.PlayCanvasCompressed?ri.parseToUncompressedSplatArraySection(V.chunkElement,V.vertexElement,0,Oe-1,T,He,ae):li.parseToUncompressedSplatArraySection(V,0,Oe-1,He,0,ae,l);T+=Oe,g===_t.ProgressiveToSplatBuffer&&(M||(Te.writeSectionHeaderToBuffer({maxSplatCount:_,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,y,Te.HeaderSizeBytes),M=new Te(y,!1)),M.updateLoadedCounts(1,T)),F>=q&&(N=!0)}if(k===0)$=[];else{let qe=[],Se=0;for(let $e=$.length-1;$e>=0;$e--){const De=$[$e];if(Se+=De.sizeBytes,qe.unshift(De),Se>=k)break}$=qe}B+=x,U+=We}i&&M&&i(M,re),re&&(g===_t.ProgressiveToSplatBuffer?R.resolve(M):R.resolve(ae))}t&&t(Y,ee,It.Downloading)};return t&&t(0,"0%",It.Downloading),Vo(e,Ie,!1,c).then(()=>(t&&t(0,"0%",It.Processing),R.promise.then(Y=>{if(t&&t(100,"100%",It.Done),g===_t.DownloadBeforeProcessing){const ee=$.map(le=>le.data);return new Blob(ee).arrayBuffer().then(le=>fc.loadFromFileData(le,s,r,a,l,h,d,u,f))}else return g===_t.ProgressiveToSplatBuffer?Y:hn(()=>fu(Y,a,s,r,h,d,u,f))})))}static loadFromFileData(e,t,n,i,s=0,r,a,l,c){return i?hn(()=>uu.parseToUncompressedSplatArray(e,s)).then(h=>fu(h,i,t,n,r,a,l,c)):hn(()=>uu.parseToUncompressedSplatBuffer(e,s))}}const Oy=o=>new ReadableStream({async start(e){e.enqueue(o),e.close()}});async function zy(o){try{const e=Oy(o);if(!e)throw new Error("Failed to create stream from data");return await ky(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function ky(o){const e=o.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const Hy=1347635022,Vy=1,Gy=.15;function Wy(o){const e=o>>15&1,t=o>>10&31,n=o&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function qy(o){return(o-128)/128}function Qi(o){switch(o){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${o}`),0}}const Xy=function(){let o=[];const e=new Et,t=fe.OFFSET.X,n=fe.OFFSET.Y,i=fe.OFFSET.Z,s=fe.OFFSET.SCALE0,r=fe.OFFSET.SCALE1,a=fe.OFFSET.SCALE2,l=fe.OFFSET.ROTATION0,c=fe.OFFSET.ROTATION1,h=fe.OFFSET.ROTATION2,d=fe.OFFSET.ROTATION3,u=fe.OFFSET.FDC0,f=fe.OFFSET.FDC1,g=fe.OFFSET.FDC2,x=fe.OFFSET.OPACITY,p=[Qi(0),Qi(1),Qi(2),Qi(3)],m=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(v,A,y){y=Math.min(A,y);const M=fe.createSplat(y);v.scale[0]!==void 0?(M[s]=v.scale[0],M[r]=v.scale[1],M[a]=v.scale[2]):(M[s]=.01,M[r]=.01,M[a]=.01),v.color[0]!==void 0?(M[u]=v.color[0],M[f]=v.color[1],M[g]=v.color[2]):o[RED]!==void 0?(M[u]=o[RED]*255,M[f]=o[GREEN]*255,M[g]=o[BLUE]*255):(M[u]=0,M[f]=0,M[g]=0),v.alpha!==void 0&&(M[x]=v.alpha),M[u]=wt(Math.floor(M[u]),0,255),M[f]=wt(Math.floor(M[f]),0,255),M[g]=wt(Math.floor(M[g]),0,255),M[x]=wt(Math.floor(M[x]),0,255);let E=p[y],_=p[A];for(let T=0;T<3;++T)for(let C=0;C<15;++C){const S=m[T*15+C];C<E&&C<_&&(M[fe.OFFSET.FRC0+S]=v.sh[T*_+C])}return e.set(v.rotation[3],v.rotation[0],v.rotation[1],v.rotation[2]),e.normalize(),M[l]=e.x,M[c]=e.y,M[h]=e.z,M[d]=e.w,M[t]=v.position[0],M[n]=v.position[1],M[i]=v.position[2],M}}();function Yy(o,e,t,n){return!(o.positions.length!==e*3*(n?2:3)||o.scales.length!==e*3||o.rotations.length!==e*3||o.alphas.length!==e||o.colors.length!==e*3||o.sh.length!==e*t*3)}function pu(o,e,t,n,i){e=Math.min(e,o.shDegree);const s=o.numPoints,r=Qi(o.shDegree),a=o.positions.length===s*3*2;if(!Yy(o,s,r,a))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;a&&(c=new Uint16Array(o.positions.buffer,o.positions.byteOffset,s*3));const h=1/(1<<o.fractionalBits),d=Qi(o.shDegree),u=.28209479177387814;for(let f=0;f<s;f++){if(a)for(let v=0;v<3;v++)l.position[v]=Wy(c[f*3+v]);else for(let v=0;v<3;v++){const A=f*9+v*3;let y=o.positions[A];y|=o.positions[A+1]<<8,y|=o.positions[A+2]<<16,y|=y&8388608?4278190080:0,l.position[v]=y*h}for(let v=0;v<3;v++)l.scale[v]=Math.exp(o.scales[f*3+v]/16-10);const g=o.rotations.subarray(f*3,f*3+3),x=[g[0]/127.5-1,g[1]/127.5-1,g[2]/127.5-1];l.rotation[0]=x[0],l.rotation[1]=x[1],l.rotation[2]=x[2];const p=x[0]*x[0]+x[1]*x[1]+x[2]*x[2];l.rotation[3]=Math.sqrt(Math.max(0,1-p)),l.alpha=Math.floor(o.alphas[f]);for(let v=0;v<3;v++)l.color[v]=Math.floor(((o.colors[f*3+v]/255-.5)/Gy*u+.5)*255);for(let v=0;v<3;v++)for(let A=0;A<d;A++)l.sh[v*d+A]=qy(o.sh[d*3*f+A*3+v]);const m=Xy(l,o.shDegree,e);if(t){const v=Te.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,A=f*v+i;Te.writeSplatDataToSectionBuffer(m,n,A,0,e)}else n.addSplat(m)}}const Qy=16,jy=1e7;function Ky(o){const e=new DataView(o);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=Qy,n.magic!==Hy)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>jy)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const i=n.numPoints,s=Qi(n.shDegree),r=n.version===1,a={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&Vy)!==0,positions:new Uint8Array(i*3*(r?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*s*3)};try{const l=new Uint8Array(o);let c=a.positions.length,h=t;if(a.positions.set(l.slice(h,h+c)),h+=c,a.alphas.set(l.slice(h,h+a.alphas.length)),h+=a.alphas.length,a.colors.set(l.slice(h,h+a.colors.length)),h+=a.colors.length,a.scales.set(l.slice(h,h+a.scales.length)),h+=a.scales.length,a.rotations.set(l.slice(h,h+a.rotations.length)),h+=a.rotations.length,a.sh.set(l.slice(h,h+a.sh.length)),h+a.sh.length!==o.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return a}async function Zy(o){try{const e=await zy(o);return Ky(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class pc{static loadFromURL(e,t,n,i,s=!0,r=0,a,l,c,h,d){return t&&t(0,"0%",It.Downloading),Vo(e,t,!0,a).then(u=>(t&&t(0,"0%",It.Processing),pc.loadFromFileData(u,n,i,s,r,l,c,h,d)))}static async loadFromFileData(e,t,n,i,s=0,r,a,l,c){await hn();const h=await Zy(e);s=Math.min(h.shDegree,s);const d=new fe(s);if(i)return pu(h,s,!1,d,0),Er.getStandardGenerator(t,n,r,a,l,c).generateFromUncompressedSplatArray(d);{const{splatBuffer:u,splatBufferDataOffsetBytes:f}=Te.preallocateUncompressed(h.numPoints,s);return pu(h,s,!0,u.bufferData,f),u}}}const ht=class ht{static parseToUncompressedSplatBufferSection(e,t,n,i,s,r){const a=Te.CompressionLevels[0].BytesPerCenter,l=Te.CompressionLevels[0].BytesPerScale,c=Te.CompressionLevels[0].BytesPerRotation,h=Te.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let d=e;d<=t;d++){const u=d*ht.RowSizeBytes+i,f=new Float32Array(n,u,3),g=new Float32Array(n,u+ht.CenterSizeBytes,3),x=new Uint8Array(n,u+ht.CenterSizeBytes+ht.ScaleSizeBytes,4),p=new Uint8Array(n,u+ht.CenterSizeBytes+ht.ScaleSizeBytes+ht.RotationSizeBytes,4),m=new Et((p[1]-128)/128,(p[2]-128)/128,(p[3]-128)/128,(p[0]-128)/128);m.normalize();const v=d*h+r,A=new Float32Array(s,v,3),y=new Float32Array(s,v+a,3),M=new Float32Array(s,v+a+l,4),E=new Uint8Array(s,v+a+l+c,4);A[0]=f[0],A[1]=f[1],A[2]=f[2],y[0]=g[0],y[1]=g[1],y[2]=g[2],M[0]=m.w,M[1]=m.x,M[2]=m.y,M[3]=m.z,E[0]=x[0],E[1]=x[1],E[2]=x[2],E[3]=x[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,s){for(let r=e;r<=t;r++){const a=r*ht.RowSizeBytes+i,l=new Float32Array(n,a,3),c=new Float32Array(n,a+ht.CenterSizeBytes,3),h=new Uint8Array(n,a+ht.CenterSizeBytes+ht.ScaleSizeBytes,4),d=new Uint8Array(n,a+ht.CenterSizeBytes+ht.ScaleSizeBytes+ht.RotationSizeBytes,4),u=new Et((d[1]-128)/128,(d[2]-128)/128,(d[3]-128)/128,(d[0]-128)/128);u.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],u.w,u.x,u.y,u.z,h[0],h[1],h[2],h[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/ht.RowSizeBytes,n=new fe;for(let i=0;i<t;i++){const s=i*ht.RowSizeBytes,r=new Float32Array(e,s,3),a=new Float32Array(e,s+ht.CenterSizeBytes,3),l=new Uint8Array(e,s+ht.CenterSizeBytes+ht.ScaleSizeBytes,4),c=new Uint8Array(e,s+ht.CenterSizeBytes+ht.ScaleSizeBytes+ht.ColorSizeBytes,4),h=new Et((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);h.normalize(),n.addSplatFromComonents(r[0],r[1],r[2],a[0],a[1],a[2],h.w,h.x,h.y,h.z,l[0],l[1],l[2],l[3])}return n}};he(ht,"RowSizeBytes",32),he(ht,"CenterSizeBytes",12),he(ht,"ScaleSizeBytes",12),he(ht,"RotationSizeBytes",4),he(ht,"ColorSizeBytes",4);let Gi=ht;function mu(o,e,t,n,i,s,r,a){return e?Er.getStandardGenerator(t,n,i,s,r,a).generateFromUncompressedSplatArray(o):Te.generateFromUncompressedSplatArrays([o],t,0,new D)}class mc{static loadFromURL(e,t,n,i,s,r,a=!0,l,c,h,d,u){let f=n?_t.ProgressiveToSplatBuffer:_t.ProgressiveToSplatArray;a&&(f=_t.ProgressiveToSplatArray);const g=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes,x=Je.ProgressiveLoadSectionSize,p=1;let m,v,A,y=0,M=0,E;const _=nc();let T=0,C=0,S=[];const I=(N,R,B,U)=>{const F=N>=100;if(B&&S.push(B),f===_t.DownloadBeforeProcessing){F&&_.resolve(S);return}if(!U){if(n)throw new Ro("Cannon directly load .splat because no file size info is available.");f=_t.DownloadBeforeProcessing;return}if(!m){y=U/Gi.RowSizeBytes,m=new ArrayBuffer(U);const q=Te.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,z=g+q*y;f===_t.ProgressiveToSplatBuffer?(v=new ArrayBuffer(z),Te.writeHeaderToBuffer({versionMajor:Te.CurrentMajorVersion,versionMinor:Te.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:y,splatCount:M,compressionLevel:0,sceneCenter:new D},v)):E=new fe(0)}if(B){new Uint8Array(m,C,B.byteLength).set(new Uint8Array(B)),C+=B.byteLength;const q=C-T;if(q>x||F){const V=(F?q:x)/Gi.RowSizeBytes,$=M+V;f===_t.ProgressiveToSplatBuffer?Gi.parseToUncompressedSplatBufferSection(M,$-1,m,0,v,g):Gi.parseToUncompressedSplatArraySection(M,$-1,m,0,E),M=$,f===_t.ProgressiveToSplatBuffer&&(A||(Te.writeSectionHeaderToBuffer({maxSplatCount:y,splatCount:M,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,v,Te.HeaderSizeBytes),A=new Te(v,!1)),A.updateLoadedCounts(1,M),i&&i(A,F)),T+=x}}F&&(f===_t.ProgressiveToSplatBuffer?_.resolve(A):_.resolve(E)),t&&t(N,R,It.Downloading)};return t&&t(0,"0%",It.Downloading),Vo(e,I,!1,l).then(()=>(t&&t(0,"0%",It.Processing),_.promise.then(N=>(t&&t(100,"100%",It.Done),f===_t.DownloadBeforeProcessing?new Blob(S).arrayBuffer().then(R=>mc.loadFromFileData(R,s,r,a,c,h,d,u)):f===_t.ProgressiveToSplatBuffer?N:hn(()=>mu(N,a,s,r,c,h,d,u))))))}static loadFromFileData(e,t,n,i,s,r,a,l){return hn(()=>{const c=Gi.parseStandardSplatToUncompressedSplatArray(e);return mu(c,i,t,n,s,r,a,l)})}}const _s=class _s{static checkVersion(e){const t=Te.CurrentMajorVersion,n=Te.CurrentMinorVersion,i=Te.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,s){let r,a,l,c,h=!1,d=!1,u,f=[],g=!1,x=!1,p=0,m=0,v=0,A=!1,y=!1,M=!1,E=[];const _=nc(),T=()=>{!h&&!d&&p>=Te.HeaderSizeBytes&&(d=!0,new Blob(E).arrayBuffer().then(U=>{l=new ArrayBuffer(Te.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(U,0,Te.HeaderSizeBytes)),_s.checkVersion(l),d=!1,h=!0,c=Te.parseHeader(l),window.setTimeout(()=>{I()},1)}))};let C=0;const S=()=>{C===0&&(C++,window.setTimeout(()=>{C--,N()},1))},I=()=>{const B=()=>{x=!0,new Blob(E).arrayBuffer().then(F=>{x=!1,g=!0,u=new ArrayBuffer(c.maxSectionCount*Te.SectionHeaderSizeBytes),new Uint8Array(u).set(new Uint8Array(F,Te.HeaderSizeBytes,c.maxSectionCount*Te.SectionHeaderSizeBytes)),f=Te.parseSectionHeaders(c,u,0,!1);let q=0;for(let V=0;V<c.maxSectionCount;V++)q+=f[V].storageSizeBytes;const z=Te.HeaderSizeBytes+c.maxSectionCount*Te.SectionHeaderSizeBytes+q;if(!r){r=new ArrayBuffer(z);let V=0;for(let $=0;$<E.length;$++){const ae=E[$];new Uint8Array(r,V,ae.byteLength).set(new Uint8Array(ae)),V+=ae.byteLength}}v=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes*c.maxSectionCount;for(let V=0;V<=f.length&&V<c.maxSectionCount;V++)v+=f[V].storageSizeBytes;S()})};!x&&!g&&h&&p>=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes*c.maxSectionCount&&B()},N=()=>{if(M)return;M=!0;const B=()=>{if(M=!1,g){if(y)return;if(A=p>=v,p-m>Je.ProgressiveLoadSectionSize||A){m+=Je.ProgressiveLoadSectionSize,y=m>=v,a||(a=new Te(r,!1));const F=Te.HeaderSizeBytes+Te.SectionHeaderSizeBytes*c.maxSectionCount;let q=0,z=0,V=0;for(let ie=0;ie<c.maxSectionCount;ie++){const Ie=f[ie],Y=q+Ie.partiallyFilledBucketCount*4+Ie.bucketStorageSizeBytes*Ie.bucketCount,ee=F+Y;if(m>=ee){z++;const le=m-ee,we=Te.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[Ie.sphericalHarmonicsDegree].BytesPerSplat;let Pe=Math.floor(le/we);Pe=Math.min(Pe,Ie.maxSplatCount),V+=Pe,a.updateLoadedCounts(z,V),a.updateSectionLoadedCounts(ie,Pe)}else break;q+=Ie.storageSizeBytes}i(a,y);const $=m/v*100,ae=$.toFixed(2)+"%";t&&t($,ae,It.Downloading),y?_.resolve(a):N()}}};window.setTimeout(B,Je.ProgressiveLoadSectionDelayDuration)};return Vo(e,(B,U,F)=>{F&&(E.push(F),r&&new Uint8Array(r,p,F.byteLength).set(new Uint8Array(F)),p+=F.byteLength),n?(T(),I(),N()):t&&t(B,U,It.Downloading)},!n,s).then(B=>(t&&t(0,"0%",It.Processing),(n?_.promise:_s.loadFromFileData(B)).then(F=>(t&&t(100,"100%",It.Done),F))))}static loadFromFileData(e){return hn(()=>(_s.checkVersion(e),new Te(e)))}};he(_s,"downloadFile",function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}}());let Fl=_s;const en={Splat:0,KSplat:1,Ply:2,Spz:3},gu=o=>o.endsWith(".ply")?en.Ply:o.endsWith(".splat")?en.Splat:o.endsWith(".ksplat")?en.KSplat:o.endsWith(".spz")?en.Spz:null,xu={type:"change"},Pa={type:"start"},vu={type:"end"},oo=new zs,yu=new Ai,$y=Math.cos(70*ud.DEG2RAD);class ao extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",ne),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(xu),n.update(),s=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){h.set(0,0,0)},this.update=function(){const O=new D,se=new Et().setFromUnitVectors(e.up,new D(0,1,0)),Ee=se.clone().invert(),de=new D,ze=new Et,Ve=new D,tt=2*Math.PI;return function(){se.setFromUnitVectors(e.up,new D(0,1,0)),Ee.copy(se).invert();const me=n.object.position;O.copy(me).sub(n.target),O.applyQuaternion(se),a.setFromVector3(O),n.autoRotate&&s===i.NONE&&I(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let K=n.minAzimuthAngle,J=n.maxAzimuthAngle;isFinite(K)&&isFinite(J)&&(K<-Math.PI?K+=tt:K>Math.PI&&(K-=tt),J<-Math.PI?J+=tt:J>Math.PI&&(J-=tt),K<=J?a.theta=Math.max(K,Math.min(J,a.theta)):a.theta=a.theta>(K+J)/2?Math.max(K,a.theta):Math.min(J,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*c),O.setFromSpherical(a),O.applyQuaternion(Ee),me.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let xe=!1;if(n.zoomToCursor&&E){let pe=null;if(n.object.isPerspectiveCamera){const Ge=O.length();pe=V(Ge*c);const mt=Ge-pe;n.object.position.addScaledVector(y,mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ge=new D(M.x,M.y,0);Ge.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),xe=!0;const mt=new D(M.x,M.y,0);mt.unproject(n.object),n.object.position.sub(mt).add(Ge),n.object.updateMatrixWorld(),pe=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;pe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(pe).add(n.object.position):(oo.origin.copy(n.object.position),oo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(oo.direction))<$y?e.lookAt(n.target):(yu.setFromNormalAndCoplanarPoint(n.object.up,n.target),oo.intersectPlane(yu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),xe=!0);return c=1,E=!1,xe||de.distanceToSquared(n.object.position)>r||8*(1-ze.dot(n.object.quaternion))>r||Ve.distanceToSquared(n.target)>0?(n.dispatchEvent(xu),de.copy(n.object.position),ze.copy(n.object.quaternion),Ve.copy(n.target),xe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Be),n.domElement.removeEventListener("pointerdown",Se),n.domElement.removeEventListener("pointercancel",De),n.domElement.removeEventListener("wheel",X),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",De),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ne),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new Zh,l=new Zh;let c=1;const h=new D,d=new Me,u=new Me,f=new Me,g=new Me,x=new Me,p=new Me,m=new Me,v=new Me,A=new Me,y=new D,M=new Me;let E=!1;const _=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function S(){return Math.pow(.95,n.zoomSpeed)}function I(O){l.theta-=O}function N(O){l.phi-=O}const R=function(){const O=new D;return function(Ee,de){O.setFromMatrixColumn(de,0),O.multiplyScalar(-Ee),h.add(O)}}(),B=function(){const O=new D;return function(Ee,de){n.screenSpacePanning===!0?O.setFromMatrixColumn(de,1):(O.setFromMatrixColumn(de,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(Ee),h.add(O)}}(),U=function(){const O=new D;return function(Ee,de){const ze=n.domElement;if(n.object.isPerspectiveCamera){const Ve=n.object.position;O.copy(Ve).sub(n.target);let tt=O.length();tt*=Math.tan(n.object.fov/2*Math.PI/180),R(2*Ee*tt/ze.clientHeight,n.object.matrix),B(2*de*tt/ze.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(Ee*(n.object.right-n.object.left)/n.object.zoom/ze.clientWidth,n.object.matrix),B(de*(n.object.top-n.object.bottom)/n.object.zoom/ze.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(O){if(!n.zoomToCursor)return;E=!0;const se=n.domElement.getBoundingClientRect(),Ee=O.clientX-se.left,de=O.clientY-se.top,ze=se.width,Ve=se.height;M.x=Ee/ze*2-1,M.y=-(de/Ve)*2+1,y.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function V(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function $(O){d.set(O.clientX,O.clientY)}function ae(O){z(O),m.set(O.clientX,O.clientY)}function ie(O){g.set(O.clientX,O.clientY)}function Ie(O){u.set(O.clientX,O.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const se=n.domElement;I(2*Math.PI*f.x/se.clientHeight),N(2*Math.PI*f.y/se.clientHeight),d.copy(u),n.update()}function Y(O){v.set(O.clientX,O.clientY),A.subVectors(v,m),A.y>0?F(S()):A.y<0&&q(S()),m.copy(v),n.update()}function ee(O){x.set(O.clientX,O.clientY),p.subVectors(x,g).multiplyScalar(n.panSpeed),U(p.x,p.y),g.copy(x),n.update()}function le(O){z(O),O.deltaY<0?q(S()):O.deltaY>0&&F(S()),n.update()}function re(O){let se=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),se=!0;break}se&&(O.preventDefault(),n.update())}function Ae(){if(_.length===1)d.set(_[0].pageX,_[0].pageY);else{const O=.5*(_[0].pageX+_[1].pageX),se=.5*(_[0].pageY+_[1].pageY);d.set(O,se)}}function we(){if(_.length===1)g.set(_[0].pageX,_[0].pageY);else{const O=.5*(_[0].pageX+_[1].pageX),se=.5*(_[0].pageY+_[1].pageY);g.set(O,se)}}function Pe(){const O=_[0].pageX-_[1].pageX,se=_[0].pageY-_[1].pageY,Ee=Math.sqrt(O*O+se*se);m.set(0,Ee)}function Ye(){n.enableZoom&&Pe(),n.enablePan&&we()}function Oe(){n.enableZoom&&Pe(),n.enableRotate&&Ae()}function We(O){if(_.length==1)u.set(O.pageX,O.pageY);else{const Ee=ce(O),de=.5*(O.pageX+Ee.x),ze=.5*(O.pageY+Ee.y);u.set(de,ze)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const se=n.domElement;I(2*Math.PI*f.x/se.clientHeight),N(2*Math.PI*f.y/se.clientHeight),d.copy(u)}function k(O){if(_.length===1)x.set(O.pageX,O.pageY);else{const se=ce(O),Ee=.5*(O.pageX+se.x),de=.5*(O.pageY+se.y);x.set(Ee,de)}p.subVectors(x,g).multiplyScalar(n.panSpeed),U(p.x,p.y),g.copy(x)}function Ze(O){const se=ce(O),Ee=O.pageX-se.x,de=O.pageY-se.y,ze=Math.sqrt(Ee*Ee+de*de);v.set(0,ze),A.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),F(A.y),m.copy(v)}function He(O){n.enableZoom&&Ze(O),n.enablePan&&k(O)}function qe(O){n.enableZoom&&Ze(O),n.enableRotate&&We(O)}function Se(O){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",$e),n.domElement.addEventListener("pointerup",De)),ve(O),O.pointerType==="touch"?oe(O):L(O))}function $e(O){n.enabled!==!1&&(O.pointerType==="touch"?te(O):b(O))}function De(O){Ce(O),_.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",De)),n.dispatchEvent(vu),s=i.NONE}function L(O){let se;switch(O.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case $i.DOLLY:if(n.enableZoom===!1)return;ae(O),s=i.DOLLY;break;case $i.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;ie(O),s=i.PAN}else{if(n.enableRotate===!1)return;$(O),s=i.ROTATE}break;case $i.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;$(O),s=i.ROTATE}else{if(n.enablePan===!1)return;ie(O),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Pa)}function b(O){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Ie(O);break;case i.DOLLY:if(n.enableZoom===!1)return;Y(O);break;case i.PAN:if(n.enablePan===!1)return;ee(O);break}}function X(O){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(O.preventDefault(),n.dispatchEvent(Pa),le(O),n.dispatchEvent(vu))}function ne(O){n.enabled===!1||n.enablePan===!1||re(O)}function oe(O){switch(et(O),_.length){case 1:switch(n.touches.ONE){case Ji.ROTATE:if(n.enableRotate===!1)return;Ae(),s=i.TOUCH_ROTATE;break;case Ji.PAN:if(n.enablePan===!1)return;we(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(),s=i.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Pa)}function te(O){switch(et(O),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;We(O),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;k(O),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(O),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;qe(O),n.update();break;default:s=i.NONE}}function Be(O){n.enabled!==!1&&O.preventDefault()}function ve(O){_.push(O)}function Ce(O){delete T[O.pointerId];for(let se=0;se<_.length;se++)if(_[se].pointerId==O.pointerId){_.splice(se,1);return}}function et(O){let se=T[O.pointerId];se===void 0&&(se=new Me,T[O.pointerId]=se),se.set(O.pageX,O.pageY)}function ce(O){const se=O.pointerId===_[0].pointerId?_[1]:_[0];return T[se.pointerId]}n.domElement.addEventListener("contextmenu",Be),n.domElement.addEventListener("pointerdown",Se),n.domElement.addEventListener("pointercancel",De),n.domElement.addEventListener("wheel",X,{passive:!1}),this.update()}}const Jy=(o,e,t,n,i)=>{const s=performance.now();let r=o.style.display==="none"?0:parseFloat(o.style.opacity);isNaN(r)&&(r=1);const a=window.setInterval(()=>{const c=performance.now()-s;let h=Math.min(c/n,1);h>.999&&(h=1);let d;e?(d=(1-h)*r,d<1e-4&&(d=0)):d=(1-r)*h+r,d>0?(o.style.display=t,o.style.opacity=d):o.style.display="none",h>=1&&(i&&i(),window.clearInterval(a))},16);return a},eA=500,Bo=class Bo{constructor(e,t){this.taskIDGen=0,this.elementID=Bo.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){this.tasks=this.tasks.filter(t=>t.id!==e),this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){const n=this.tasks.find(i=>i.id===e);n&&(n.message=t),this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter))}setMinimized(e,t){const n=(i,s,r,a,l)=>{r?i.style.display=s?a:"none":this.fadeTransitions[l]=Jy(i,!s,a,eA,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};he(Bo,"elementIDGen",0);let Ll=Bo;class tA{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class nA{constructor(e){he(this,"update",function(e,t,n,i,s,r,a,l,c,h,d,u,f,g){const x=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==x&&(this.infoCells.cameraPosition.innerHTML=x),n){const m=n,v=`${m.x.toFixed(5)}, ${m.y.toFixed(5)}, ${m.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==v&&(this.infoCells.cameraLookAt.innerHTML=v)}const p=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==p&&(this.infoCells.cameraUp.innerHTML=p),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",r){const m=r,v=`${m.x.toFixed(5)}, ${m.y.toFixed(5)}, ${m.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=v}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${h.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${d.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${u.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let s of t){const r=document.createElement("div");r.style.display="table-row",r.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${s[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,r.appendChild(a),r.appendChild(l),r.appendChild(c),i.appendChild(r)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const Au=new D;class iA extends xt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=.1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper";const l=new Ar(i,i,n,32);l.translate(0,n/2,0);const c=new Ar(0,a,r,32);c.translate(0,n,0),this.position.copy(t),this.line=new Mt(l,new bi({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Mt(c,new bi({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Au.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Au,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class hr{constructor(e){he(this,"updateFocusMarker",function(){const e=new D,t=new Re,n=new D;return function(i,s,r){t.copy(s.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),n.copy(s.position).sub(i);const a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(r),this.focusMarker.material.uniformsNeedUpdate=!0}}());he(this,"positionAndOrientControlPlane",function(){const e=new Et,t=new D(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new wi(e,t,{format:Wt,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Kl(e,t),this.splatRenderTarget.depthTexture.format=ji,this.splatRenderTarget.depthTexture.type=yn}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new fn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Zu,blendSrc:mr,blendSrcAlpha:mr,blendDst:gr,blendDstAlpha:gr});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new Mt(new Ls(2,2),t),this.renderTargetCopyCamera=new Oo(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(As(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Zl(.5,1.5,32),t=new bi({color:16777215}),n=new Mt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new Mt(e,t);i.position.set(0,-1,0);const s=new Mt(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const r=new Mt(e,t);r.rotation.set(0,0,-Math.PI/2),r.position.set(-1,0,0),this.meshCursor=new xt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(s),this.meshCursor.add(r),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(As(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Sr(.5,32,32),t=hr.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new Mt(e,t)}}destroyFocusMarker(){this.focusMarker&&(As(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Ls(1,1);e.rotateX(-Math.PI/2);const t=new bi({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=vn;const n=new Mt(e,t),i=new D(0,1,0);i.normalize();const s=new D(0,0,0),r=.5,a=.01,l=56576,c=new iA(i,s,r,a,l,.1,.03);this.controlPlane=new xt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(As(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(As(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Sr(1,32,32),n=new xt,i=(s,r)=>{let a=new Mt(t,hr.buildDebugMaterial(s));a.renderOrder=e,n.add(a),a.position.fromArray(r)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new ks(3,3,3),n=new xt;let i=12303291;const s=a=>{let l=new Mt(t,hr.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let r=10;return s([-r,0,-r]),s([-r,0,r]),s([r,0,-r]),s([r,0,r]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new Ke(e)}},s=new fn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:zn});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new Ke(e)},realFocusPosition:{type:"v3",value:new D},viewport:{type:"v2",value:new Me},opacity:{value:0}};return new fn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:zn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const sA=new D(1,0,0),rA=new D(0,1,0),oA=new D(0,0,1);let Da=class{constructor(e=new D,t=new D){he(this,"intersectBox",function(){const e=new D,t=[],n=[],i=[];return function(s,r){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return r&&(r.origin.copy(this.origin),r.normal.set(0,0,0),r.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;const l=a==0?sA:a==1?rA:oA,c=i[a]<0?s.max:s.min;let h=-Math.sign(i[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let d=t[0]-n[a];if(d*h<0){const u=(a+1)%3,f=(a+2)%3;if(t[2]=i[u]/i[a]*d+n[u],t[1]=i[f]/i[a]*d+n[f],e.set(t[a],t[f],t[u]),this.boxContainsPoint(s,e,1e-4))return r&&(r.origin.copy(e),r.normal.copy(l).multiplyScalar(h),r.distance=e.sub(this.origin).length()),!0}}return!1}}());he(this,"intersectSphere",function(){const e=new D;return function(t,n,i){e.copy(t).sub(this.origin);const s=e.dot(this.direction),r=s*s,l=e.dot(e)-r,c=n*n;if(l>c)return!1;const h=Math.sqrt(c-l),d=s-h,u=s+h;if(u<0)return!1;let f=d<0?u:d;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,f),i.normal.copy(i.origin).sub(t).normalize(),i.distance=f),!0}}());this.origin=new D,this.direction=new D,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}};class gc{constructor(){this.origin=new D,this.normal=new D,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new gc;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const ii={ThreeD:0,TwoD:1};class aA{constructor(e,t,n=!1){he(this,"setFromCameraAndScreenPosition",function(){const e=new Me;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());he(this,"intersectSplatMesh",function(){const e=new Re,t=new Re,n=new Re,i=new Da,s=new D;return function(r,a=[]){const l=r.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const h=l.subTrees[c];t.copy(r.matrixWorld),r.dynamicMode&&(r.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const d=[];h.rootNode&&this.castRayAtSplatTreeNode(i,l,h.rootNode,d),d.forEach(u=>{u.origin.applyMatrix4(t),u.normal.applyMatrix4(t).normalize(),u.distance=s.copy(u.origin).sub(this.ray.origin).length()}),a.push(...d)}return a.sort((c,h)=>c.distance>h.distance?1:-1),a}}}());he(this,"castRayAtSplatTreeNode",function(){const e=new nt,t=new D,n=new D,i=new Et,s=new gc,r=1e-7,a=new D(0,0,0),l=new Re,c=new Re,h=new Re,d=new Re,u=new Re,f=new Da;return function(g,x,p,m=[]){if(g.intersectBox(p.boundingBox)){if(p.data&&p.data.indexes&&p.data.indexes.length>0)for(let v=0;v<p.data.indexes.length;v++){const A=p.data.indexes[v],y=x.splatMesh.getSceneIndexForSplat(A);if(x.splatMesh.getScene(y).visible&&(x.splatMesh.getSplatColor(A,e),x.splatMesh.getSplatCenter(A,t),x.splatMesh.getSplatScaleAndRotation(A,n,i),!(n.x<=r||n.y<=r||x.splatMesh.splatRenderMode===ii.ThreeD&&n.z<=r)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),h.makeRotationFromQuaternion(i);const E=Math.log10(e.w)*2;if(l.makeScale(E,E,E),u.copy(l).multiply(h).multiply(c),d.copy(u).invert(),f.origin.copy(g.origin).sub(t).applyMatrix4(d),f.direction.copy(g.origin).add(g.direction).sub(t),f.direction.applyMatrix4(d).sub(f.origin).normalize(),f.intersectSphere(a,1,s)){const _=s.clone();_.splatIndex=A,_.origin.applyMatrix4(u).add(t),m.push(_)}}else{let E=n.x+n.y,_=2;if(x.splatMesh.splatRenderMode===ii.ThreeD&&(E+=n.z,_=3),E=E/_,g.intersectSphere(t,E,s)){const T=s.clone();T.splatIndex=A,m.push(T)}}}if(p.children&&p.children.length>0)for(let v of p.children)this.castRayAtSplatTreeNode(g,x,v,m);return m}}}());this.ray=new Da(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class Ts{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let s=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(s+=`
            uniform float sceneOpacity[${Je.MaxScenes}];
            uniform int sceneVisibility[${Je.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${Je.MaxScenes}];
        `),s+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${Je.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${Je.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?s+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(s+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(s+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),s+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,s=!1){const r={sceneCenter:{type:"v3",value:new D},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Me},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Me},basisViewport:{type:"v2",value:new Me},debugColor:{type:"v3",value:new Ke},centersColorsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Me(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<Je.MaxScenes;a++)r.sphericalHarmonics8BitCompressionRangeMin.value.push(-Je.SphericalHarmonics8BitCompressionRange/2),r.sphericalHarmonics8BitCompressionRangeMax.value.push(Je.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<Je.MaxScenes;c++)a.push(1);r.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<Je.MaxScenes;c++)l.push(1);r.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<Je.MaxScenes;l++)a.push(new Re);r.transforms={type:"mat4",value:a}}return r}}class Io{static build(e=!1,t=!1,n=!1,i=2048,s=1,r=!1,a=0,l=.3){let h=Ts.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);h+=Io.buildVertexShaderProjection(n,t,i,l);const d=Io.buildFragmentShader(),u=Ts.getUniforms(e,t,a,s,r);return u.covariancesTextureSize={type:"v2",value:new Me(1024,1024)},u.covariancesTexture={type:"t",value:null},u.covariancesTextureHalfFloat={type:"t",value:null},u.covariancesAreHalfFloat={type:"i",value:0},new fn({uniforms:u,vertexShader:h,fragmentShader:d,transparent:!0,alphaTest:1,blending:Ci,depthTest:!0,depthWrite:!1,side:vn})}static buildVertexShaderProjection(e,t,n,i){let s=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?s+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:s+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,s+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(s+=`
                vColor.a *= splatOpacityFromScene;
            `),s+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,s+=Ts.getVertexShaderFadeIn(),s+="}",s}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class Po{static build(e=!1,t=!1,n=1,i=!1,s=0){let a=Ts.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=Po.buildVertexShaderProjection();const l=Po.buildFragmentShader(),c=Ts.getUniforms(e,t,s,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new Me(1024,1024)},new fn({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:Ci,depthTest:!0,depthWrite:!1,side:vn})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Ts.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class lA{static build(e){const t=new sn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(4*3),i=new dn(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const s=new Wv().copy(t),r=new Uint32Array(e),a=new bl(r,1,!1);return a.setUsage(Gf),s.setAttribute("splatIndex",a),s.instanceCount=0,s}}class cA extends xt{constructor(e,t=new D,n=new Et,i=new D(1,1,1),s=1,r=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new Re,this.minimumAlpha=s,this.opacity=r,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const Fo=class Fo{constructor(e,t,n,i){this.min=new D().copy(e),this.max=new D().copy(t),this.boundingBox=new cn(this.min,this.max),this.center=new D().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||Fo.idGen++}};he(Fo,"idGen",0);let Ul=Fo;class ur{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new D,this.sceneMin=new D,this.sceneMax=new D,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new D().fromArray(e.min),n=new D().fromArray(e.max),i=new Ul(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let s of e.data.indexes)i.data.indexes.push(s)}if(e.children)for(let s of e.children)i.children.push(ur.convertWorkerSubTreeNode(s));return i}static convertWorkerSubTree(e,t){const n=new ur(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new D().fromArray(e.sceneMin),n.sceneMax=new D().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=ur.convertWorkerSubTreeNode(e.rootNode);const i=(s,r)=>{s.children.length===0&&r(s);for(let a of s.children)i(a,r)};return n.nodesWithIndexes=[],i(n.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&n.nodesWithIndexes.push(s)}),n}}function hA(o){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,h,d){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=h,this.children=[],this.data=null,this.id=d||e++}}processSplatTreeNode=function(a,l,c,h){const d=l.data.indexes.length;if(d<a.maxCentersPerNode||l.depth>a.maxDepth){const v=[];for(let A=0;A<l.data.indexes.length;A++)a.addedIndexes[l.data.indexes[A]]||(v.push(l.data.indexes[A]),a.addedIndexes[l.data.indexes[A]]=!0);l.data.indexes=v,l.data.indexes.sort((A,y)=>A>y?1:-1),a.nodesWithIndexes.push(l);return}const u=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],f=[u[0]*.5,u[1]*.5,u[2]*.5],g=[l.min[0]+f[0],l.min[1]+f[1],l.min[2]+f[2]],x=[new t([g[0]-f[0],g[1],g[2]-f[2]],[g[0],g[1]+f[1],g[2]]),new t([g[0],g[1],g[2]-f[2]],[g[0]+f[0],g[1]+f[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+f[0],g[1]+f[1],g[2]+f[2]]),new t([g[0]-f[0],g[1],g[2]],[g[0],g[1]+f[1],g[2]+f[2]]),new t([g[0]-f[0],g[1]-f[1],g[2]-f[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-f[1],g[2]-f[2]],[g[0]+f[0],g[1],g[2]]),new t([g[0],g[1]-f[1],g[2]],[g[0]+f[0],g[1],g[2]+f[2]]),new t([g[0]-f[0],g[1]-f[1],g[2]],[g[0],g[1],g[2]+f[2]])],p=[];for(let v=0;v<x.length;v++)p[v]=[];const m=[0,0,0];for(let v=0;v<d;v++){const A=l.data.indexes[v],y=c[A];m[0]=h[y],m[1]=h[y+1],m[2]=h[y+2];for(let M=0;M<x.length;M++)x[M].containsPoint(m)&&p[M].push(A)}for(let v=0;v<x.length;v++){const A=new i(x[v].min,x[v].max,l.depth+1);A.data={indexes:p[v]},l.children.push(A)}l.data={};for(let v of l.children)processSplatTreeNode(a,v,c,h)};const s=(a,l,c)=>{const h=[0,0,0],d=[0,0,0],u=[],f=Math.floor(a.length/4);for(let x=0;x<f;x++){const p=x*4,m=a[p],v=a[p+1],A=a[p+2],y=Math.round(a[p+3]);(x===0||m<h[0])&&(h[0]=m),(x===0||m>d[0])&&(d[0]=m),(x===0||v<h[1])&&(h[1]=v),(x===0||v>d[1])&&(d[1]=v),(x===0||A<h[2])&&(h[2]=A),(x===0||A>d[2])&&(d[2]=A),u.push(y)}const g=new n(l,c);return g.sceneMin=h,g.sceneMax=d,g.rootNode=new i(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:u},g};function r(a,l,c){const h=[];for(let u of a){const f=Math.floor(u.length/4);for(let g=0;g<f;g++){const x=g*4,p=Math.round(u[x+3]);h[p]=x}}const d=[];for(let u of a){const f=s(u,l,c);d.push(f),processSplatTreeNode(f,f.rootNode,h,u)}o.postMessage({subTrees:d})}o.onmessage=a=>{a.data.process&&r(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function uA(o,e,t,n,i){o.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function dA(){return new Worker(URL.createObjectURL(new Blob(["(",hA.toString(),")(self)"],{type:"application/javascript"})))}class fA{constructor(e,t){he(this,"processSplatMesh",function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=dA()),this.splatMesh=e,this.subTrees=[];const s=new D,r=(a,l)=>{const c=new Float32Array(l*4);let h=0;for(let d=0;d<l;d++){const u=d+a;if(t(u)){e.getSplatCenter(u,s);const f=h*4;c[f]=s.x,c[f+1]=s.y,c[f+2]=s.z,c[f+3]=u,h++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),hn(()=>{if(l())return;const c=[];if(e.dynamicMode){let h=0;for(let d=0;d<e.scenes.length;d++){const f=e.getScene(d).splatBuffer.getSplatCount(),g=r(h,f);c.push(g),h+=f}}else{const h=r(0,e.getSplatCount());c.push(h)}this.splatTreeWorker.onmessage=h=>{l()||h.data.subTrees&&(i&&i(!1),hn(()=>{if(!l()){for(let d of h.data.subTrees){const u=ur.convertWorkerSubTree(d,e);this.subTrees.push(u)}this.diposeSplatTreeWorker(),i&&i(!0),hn(()=>{a()})}}))},hn(()=>{if(l())return;n&&n(!0);const h=c.map(d=>d.buffer);uA(this.splatTreeWorker,c,h,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let s of n.children)t(s,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function pA(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mA(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(_){if(_==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),u=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),p=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),m=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=u>0,y=r||e.has("OES_texture_float"),M=A&&y,E=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:A,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}const dr={Default:0,Gradual:1,Instant:2},ws={None:0,Error:1,Warning:2,Info:3,Debug:4},Su=new sn,gA=new bi,lo=6,xA=4,vA=4,yA=4,AA=6,SA=8,Ba=4,Fa=4,_u=1,_A=.012,MA=.003,Mu=1,Eu=16777216;class kt extends Mt{constructor(t=ii.ThreeD,n=!1,i=!1,s=!1,r=1,a=!0,l=!1,c=!1,h=1024,d=ws.None,u=0,f=1,g=.3){super(Su,gA);he(this,"buildSplatTree",function(t=[],n,i){return new Promise(s=>{this.disposeSplatTree(),this.baseSplatTree=new fA(8,1e3);const r=performance.now(),a=new nt;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,a);const c=this.getSceneIndexForSplat(l),h=t[c]||1;return a.w>=h},n,i).then(()=>{const l=performance.now()-r;if(this.logLevel>=ws.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)s();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,h=0,d=0;this.splatTree.visitLeaves(u=>{const f=u.data.indexes.length;f>0&&(h+=f,d++,c++)}),this.logLevel>=ws.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),h=h/d,console.log(`Avg splat count per node: ${h}`),console.log(`Total splat count: ${this.getSplatCount()}`)),s()}})})});he(this,"updateUniforms",function(){const t=new Me;return function(n,i,s,r,a,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(i,s),this.material.uniforms.orthographicMode.value=r?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let h=0;h<this.scenes.length;h++)this.material.uniforms.transforms.value[h].copy(this.getScene(h).transform);if(this.enableOptionalEffects)for(let h=0;h<this.scenes.length;h++)this.material.uniforms.sceneOpacity.value[h]=wt(this.getScene(h).opacity,0,1),this.material.uniforms.sceneVisibility.value[h]=this.getScene(h).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());he(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const i=this.lastRenderer!==this.renderer,s=t!==n;if(!i&&!s)return;i?this.disposeDistancesComputationGPUResources():s&&this.disposeDistancesComputationGPUBufferResources();const r=this.renderer.getContext(),a=(f,g,x)=>{const p=f.createShader(g);if(!p)return console.error("Fatal error: gl could not create a shader object."),null;if(f.shaderSource(p,x),f.compileShader(p),!f.getShaderParameter(p,f.COMPILE_STATUS)){let v="unknown";g===f.VERTEX_SHADER?v="vertex shader":g===f.FRAGMENT_SHADER&&(v="fragement shader");const A=f.getShaderInfoLog(p);return console.error("Failed to compile "+v+" with these errors:"+A),f.deleteShader(p),null}return p};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${Je.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:l+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(l=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${Je.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:l+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const c=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,h=r.getParameter(r.VERTEX_ARRAY_BINDING),d=r.getParameter(r.CURRENT_PROGRAM),u=d?r.getProgramParameter(d,r.DELETE_STATUS):!1;if(i&&(this.distancesTransformFeedback.vao=r.createVertexArray()),r.bindVertexArray(this.distancesTransformFeedback.vao),i){const f=r.createProgram(),g=a(r,r.VERTEX_SHADER,l),x=a(r,r.FRAGMENT_SHADER,c);if(!g||!x)throw new Error("Could not compile shaders for distances computation on GPU.");if(r.attachShader(f,g),r.attachShader(f,x),r.transformFeedbackVaryings(f,["distance"],r.SEPARATE_ATTRIBS),r.linkProgram(f),!r.getProgramParameter(f,r.LINK_STATUS)){const m=r.getProgramInfoLog(f);throw console.error("Fatal error: Failed to link program: "+m),r.deleteProgram(f),r.deleteShader(x),r.deleteShader(g),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=f,this.distancesTransformFeedback.vertexShader=g,this.distancesTransformFeedback.vertexShader=x}if(r.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let f=0;f<this.scenes.length;f++)this.distancesTransformFeedback.transformsLocs[f]=r.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${f}]`)}else this.distancesTransformFeedback.modelViewProjLoc=r.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(i||s)&&(this.distancesTransformFeedback.centersBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0))),(i||s)&&(this.distancesTransformFeedback.outDistancesBuffer=r.createBuffer()),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.bufferData(r.ARRAY_BUFFER,n*4,r.STATIC_READ),i&&(this.distancesTransformFeedback.id=r.createTransformFeedback()),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),d&&u!==!0&&r.useProgram(d),h&&r.bindVertexArray(h),this.lastRenderer=this.renderer,t=n}}());he(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let i=0;i<this.scenes.length;i++){const r=this.getScene(i).transform.elements;for(let a=0;a<16;a++)t[i*16+a]=r[a]}n.set(t)}}());he(this,"computeDistancesOnGPU",function(){const t=new Re;return function(n,i){if(!this.renderer)return;const s=this.renderer.getContext(),r=s.getParameter(s.VERTEX_ARRAY_BINDING),a=s.getParameter(s.CURRENT_PROGRAM),l=a?s.getProgramParameter(a,s.DELETE_STATUS):!1;if(s.bindVertexArray(this.distancesTransformFeedback.vao),s.useProgram(this.distancesTransformFeedback.program),s.enable(s.RASTERIZER_DISCARD),this.dynamicMode)for(let d=0;d<this.scenes.length;d++)if(t.copy(this.getScene(d).transform),t.premultiply(n),this.integerBasedDistancesComputation){const u=kt.getIntegerMatrixArray(t),f=[u[2],u[6],u[10],u[14]];s.uniform4i(this.distancesTransformFeedback.transformsLocs[d],f[0],f[1],f[2],f[3])}else s.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[d],!1,t.elements);else if(this.integerBasedDistancesComputation){const d=kt.getIntegerMatrixArray(n),u=[d[2],d[6],d[10]];s.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,u[0],u[1],u[2])}else{const d=[n.elements[2],n.elements[6],n.elements[10]];s.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0)),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),s.beginTransformFeedback(s.POINTS),s.drawArrays(s.POINTS,0,this.getSplatCount()),s.endTransformFeedback(),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,null),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,null),s.disable(s.RASTERIZER_DISCARD);const c=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);s.flush();const h=new Promise(d=>{const u=()=>{if(this.disposed)d();else switch(s.clientWaitSync(c,0,0)){case s.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(u),this.computeDistancesOnGPUSyncTimeout;case s.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,s.deleteSync(c);const p=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.getBufferSubData(s.ARRAY_BUFFER,0,i),s.bindBuffer(s.ARRAY_BUFFER,null),p&&s.bindVertexArray(p),d()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(u)});return a&&l!==!0&&s.useProgram(a),r&&s.bindVertexArray(r),h}}());he(this,"getSplatCenter",function(){const t={};return function(n,i,s){this.getLocalSplatParameters(n,t,s),t.splatBuffer.getSplatCenter(t.localIndex,i,t.sceneTransform)}}());he(this,"getSplatScaleAndRotation",function(){const t={},n=new D;return function(i,s,r,a){this.getLocalSplatParameters(i,t,a),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===ii.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,s,r,t.sceneTransform,n)}}());he(this,"getSplatColor",function(){const t={};return function(n,i){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,i)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=i,this.halfPrecisionCovariancesOnGPU=s,this.devicePixelRatio=r,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=l,this.antialiased=c,this.kernel2DSize=g,this.maxScreenSpaceSplatSize=h,this.logLevel=d,this.sphericalHarmonicsDegree=u,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=f,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new cn,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,i){const s=[];s.length=n.length;for(let r=0;r<n.length;r++){const a=n[r],l=i[r]||{};let c=l.position||[0,0,0],h=l.rotation||[0,0,0,1],d=l.scale||[1,1,1];const u=new D().fromArray(c),f=new Et().fromArray(h),g=new D().fromArray(d),x=kt.createScene(a,u,f,g,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(x),s[r]=x}return s}static createScene(t,n,i,s,r,a=1,l=!0){return new cA(t,n,i,s,r,a,l)}static buildSplatIndexMaps(t){const n=[],i=[];let s=0;for(let r=0;r<t.length;r++){const l=t[r].getMaxSplatCount();for(let c=0;c<l;c++)n[s]=c,i[s]=r,s++}return{localSplatIndexMap:n,sceneIndexMap:i}}build(t,n,i=!0,s=!1,r,a,l=!0){this.sceneOptions=n,this.finalBuild=s;const c=kt.getTotalMaxSplatCountForSplatBuffers(t),h=kt.buildScenes(this,t,n);if(i)for(let p=0;p<this.scenes.length&&p<h.length;p++){const m=h[p],v=this.getScene(p);m.copyTransformData(v)}this.scenes=h;let d=3;for(let p of t){const m=p.getMinSphericalHarmonicsDegree();m<d&&(d=m)}this.minSphericalHarmonicsDegree=Math.min(d,this.sphericalHarmonicsDegree);let u=!1;if(t.length!==this.lastBuildScenes.length)u=!0;else for(let p=0;p<t.length;p++)if(t[p]!==this.lastBuildScenes[p].splatBuffer){u=!0;break}let f=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||u)&&(f=!1),!f){this.boundingBox=new cn,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=lA.build(c),this.splatRenderMode===ii.ThreeD?this.material=Io.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=Po.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const p=kt.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=p.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=p.sceneIndexMap}const g=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const x=this.refreshGPUDataFromSplatBuffers(f);for(let p=0;p<this.scenes.length;p++)this.lastBuildScenes[p]=this.scenes[p];return this.lastBuildSplatCount=g,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,s&&this.scenes.length>0&&this.buildSplatTree(n.map(p=>p.splatAlphaRemovalThreshold||1),r,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,x}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new cn,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==Su&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const i=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),s=this.getSceneIndexes(t,n);return{centers:i,sceneIndexes:s}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const i=t?this.lastBuildSplatCount:0,{centers:s,sceneIndexes:r}=this.getDataForDistancesComputation(i,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(s,r,t),{from:i,to:n-1,count:n-i,centers:s,sceneIndexes:r}}refreshGPUBuffersForDistancesComputation(t,n,i=!1){const s=i?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(i,t,s),this.updateGPUTransformIndexesBufferForDistancesComputation(i,n,s)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),i=this.lastBuildSplatCount,s=n-1;t?this.updateBaseDataFromSplatBuffers(i,s):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(i,s),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const i=(T,C)=>{const S=new Me(4096,1024);for(;S.x*S.y*T<t*C;)S.y*=2;return S},s=T=>T>=1?AA:vA,r=T=>{const C=s(T),S=i(C,6);return{elementsPerTexelStored:C,texSize:S}};let a=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let h,d,u;if(this.splatRenderMode===ii.ThreeD){const T=r(a);T.texSize.x*T.texSize.y>Eu&&a===0&&(a=1),h=new Float32Array(t*lo)}else d=new Float32Array(t*3),u=new Float32Array(t*4);const f=new Float32Array(t*3),g=new Uint8Array(t*4);let x=Float32Array;c===1?x=Uint16Array:c===2&&(x=Uint8Array);const p=Cs(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new x(t*p):void 0,v=i(Fa,4),A=new Uint32Array(v.x*v.y*Fa);kt.updateCenterColorsPaddedData(0,n-1,f,g,A);const y=new Fn(A,v.x,v.y,Ms,yn);if(y.internalFormat="RGBA32UI",y.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=y,this.material.uniforms.centersColorsTextureSize.value.copy(v),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:h,scales:d,rotations:u,centers:f,colors:g,sphericalHarmonics:m},centerColors:{data:A,texture:y,size:v}},this.splatRenderMode===ii.ThreeD){const T=r(a),C=T.elementsPerTexelStored,S=T.texSize;let I=a>=1?Uint32Array:Float32Array;const N=a>=1?SA:yA,R=new I(S.x*S.y*N);a===0?R.set(h):kt.updatePaddedCompressedCovariancesTextureData(h,R,0,0,h.length);let B;if(a>=1)B=new Fn(R,S.x,S.y,Ms,yn),B.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=B;else{B=new Fn(R,S.x,S.y,Wt,ln),this.material.uniforms.covariancesTexture.value=B;const U=new Fn(new Uint32Array(32),2,2,Ms,yn);U.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=U,U.needsUpdate=!0}B.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(S),this.splatDataTextures.covariances={data:R,texture:B,size:S,compressionLevel:a,elementsPerTexelStored:C,elementsPerTexelAllocated:N}}else{const C=i(Ba,6);let S=Float32Array,I=ln;const N=new S(C.x*C.y*Ba);kt.updateScaleRotationsPaddedData(0,n-1,d,u,N);const R=new Fn(N,C.x,C.y,Wt,I);R.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=R,this.material.uniforms.scaleRotationsTextureSize.value.copy(C),this.splatDataTextures.scaleRotations={data:N,texture:R,size:C,compressionLevel:l}}if(m){const T=c===2?kn:Ns;let C=p;C%2!==0&&C++;const S=4,I=Wt;let N=i(S,C);if(N.x*N.y<=Eu){const R=N.x*N.y*S,B=new x(R);for(let F=0;F<n;F++){const q=p*F,z=C*F;for(let V=0;V<p;V++)B[z+V]=m[q+V]}const U=new Fn(B,N.x,N.y,I,T);U.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=U,this.splatDataTextures.sphericalHarmonics={componentCount:p,paddedComponentCount:C,data:B,textureCount:1,texture:U,size:N,compressionLevel:c,elementsPerTexel:S}}else{const R=p/3;C=R,C%2!==0&&C++,N=i(S,C);const B=N.x*N.y*S,U=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],F=[],q=[];for(let z=0;z<3;z++){const V=new x(B);F.push(V);for(let ae=0;ae<n;ae++){const ie=p*ae,Ie=C*ae;if(R>=3){for(let Y=0;Y<3;Y++)V[Ie+Y]=m[ie+z*3+Y];if(R>=8)for(let Y=0;Y<5;Y++)V[Ie+3+Y]=m[ie+9+z*5+Y]}}const $=new Fn(V,N.x,N.y,I,T);q.push($),$.needsUpdate=!0,U[z].value=$}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:p,componentCountPerChannel:R,paddedComponentCount:C,data:F,textureCount:3,textures:q,size:N,compressionLevel:c,elementsPerTexel:S}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(N),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let R=0;R<this.scenes.length;R++){const B=this.scenes[R].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[R]=B.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[R]=B.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const M=i(_u,4),E=new Uint32Array(M.x*M.y*_u);for(let T=0;T<n;T++)E[T]=this.globalSplatIndexToSceneIndexMap[T];const _=new Fn(E,M.x,M.y,Uo,yn);_.internalFormat="R32UI",_.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=_,this.material.uniforms.sceneIndexesTextureSize.value.copy(M),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:E,texture:_,size:M},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,a=r?r.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,s,a,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,a=r?r.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,h=this.splatDataTextures.centerColors,d=h.data,u=h.texture;kt.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,d);const f=this.renderer?this.renderer.properties.get(u):null;if(!f||!f.__webglTexture?u.needsUpdate=!0:this.updateDataTexture(d,h.texture,h.size,f,Fa,xA,4,t,n),i){const A=i.texture,y=t*lo,M=n*lo;if(s===0)for(let _=y;_<=M;_++){const T=this.splatDataTextures.baseData.covariances[_];i.data[_]=T}else kt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,i.data,t*i.elementsPerTexelAllocated,y,M);const E=this.renderer?this.renderer.properties.get(A):null;!E||!E.__webglTexture?A.needsUpdate=!0:s===0?this.updateDataTexture(i.data,i.texture,i.size,E,i.elementsPerTexelStored,lo,4,t,n):this.updateDataTexture(i.data,i.texture,i.size,E,i.elementsPerTexelAllocated,i.elementsPerTexelAllocated,2,t,n)}if(r){const A=r.data,y=r.texture,M=6,E=a===0?4:2;kt.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,A);const _=this.renderer?this.renderer.properties.get(y):null;!_||!_.__webglTexture?y.needsUpdate=!0:this.updateDataTexture(A,r.texture,r.size,_,Ba,M,E,t,n)}const g=this.splatDataTextures.baseData.sphericalHarmonics;if(g){let A=4;c===1?A=2:c===2&&(A=1);const y=(_,T,C,S,I)=>{const N=this.renderer?this.renderer.properties.get(_):null;!N||!N.__webglTexture?_.needsUpdate=!0:this.updateDataTexture(S,_,T,N,C,I,A,t,n)},M=l.componentCount,E=l.paddedComponentCount;if(l.textureCount===1){const _=l.data;for(let T=t;T<=n;T++){const C=M*T,S=E*T;for(let I=0;I<M;I++)_[S+I]=g[C+I]}y(l.texture,l.size,l.elementsPerTexel,_,E)}else{const _=l.componentCountPerChannel;for(let T=0;T<3;T++){const C=l.data[T];for(let S=t;S<=n;S++){const I=M*S,N=E*S;if(_>=3){for(let R=0;R<3;R++)C[N+R]=g[I+T*3+R];if(_>=8)for(let R=0;R<5;R++)C[N+3+R]=g[I+9+T*5+R]}}y(l.textures[T],l.size,l.elementsPerTexel,C,E)}}}const x=this.splatDataTextures.sceneIndexes,p=x.data;for(let A=this.lastBuildSplatCount;A<=n;A++)p[A]=this.globalSplatIndexToSceneIndexMap[A];const m=x.texture,v=this.renderer?this.renderer.properties.get(m):null;!v||!v.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(p,x.texture,x.size,v,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel>t)&&(t=s.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel<t)&&(t=s.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,i,s,r){const a=r/s,l=t*a,c=Math.floor(l/i),h=c*i*s,d=n*a,u=Math.floor(d/i),f=u*i*s+i*s;return{dataStart:h,dataEnd:f,startRow:c,endRow:u}}updateDataTexture(t,n,i,s,r,a,l,c,h){const d=this.renderer.getContext(),u=kt.computeTextureUpdateRegion(c,h,i.x,r,a),f=u.dataEnd-u.dataStart,g=new t.constructor(t.buffer,u.dataStart*l,f),x=u.endRow-u.startRow+1,p=this.webGLUtils.convert(n.type),m=this.webGLUtils.convert(n.format,n.colorSpace),v=d.getParameter(d.TEXTURE_BINDING_2D);d.bindTexture(d.TEXTURE_2D,s.__webglTexture),d.texSubImage2D(d.TEXTURE_2D,0,0,u.startRow,i.x,x,m,p,g),d.bindTexture(d.TEXTURE_2D,v)}static updatePaddedCompressedCovariancesTextureData(t,n,i,s,r){let a=new DataView(n.buffer),l=i,c=0;for(let h=s;h<=r;h+=2)a.setUint16(l*2,t[h],!0),a.setUint16(l*2+2,t[h+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,i,s,r){for(let a=t;a<=n;a++){const l=a*4,c=a*3,h=a*4;r[h]=ey(s,l),r[h+1]=Ta(i[c]),r[h+2]=Ta(i[c+1]),r[h+3]=Ta(i[c+2])}}static updateScaleRotationsPaddedData(t,n,i,s,r){for(let l=t;l<=n;l++){const c=l*3,h=l*4,d=l*6;r[d]=i[c],r[d+1]=i[c+1],r[d+2]=i[c+2],r[d+3]=s[h],r[d+4]=s[h+1],r[d+5]=s[h+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),i=new D;if(!t){const r=new D;this.scenes.forEach(a=>{r.add(a.splatBuffer.sceneCenter)}),r.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(r),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const s=t?this.lastBuildSplatCount:0;for(let r=s;r<n;r++){this.getSplatCenter(r,i,!0);const a=i.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Mu&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Mu,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=dr.Default){const n=_A*this.sceneFadeInRateMultiplier,i=MA*this.sceneFadeInRateMultiplier,s=this.finalBuild?n:i,r=t===dr.Default?s:i;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*r+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===dr.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,n){const i=this.geometry;i.attributes.splatIndex.set(t),i.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),i.instanceCount=n,i.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?kt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getSplatCount();return n}getMaxSplatCount(){return kt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),i=new pA(n),s=new mA(n,i,{});if(i.init(s),this.webGLUtils=new Td(n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:r,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(r,a)}}}updateGPUCentersBufferForDistancesComputation(t,n,i){if(!this.renderer)return;const s=this.renderer.getContext(),r=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=i*l;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,c,n);else{const h=new a(this.getMaxSplatCount()*l);h.set(n),s.bufferData(s.ARRAY_BUFFER,h,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),r&&s.bindVertexArray(r)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,i){if(!this.renderer||!this.dynamicMode)return;const s=this.renderer.getContext(),r=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=i*4;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,a,n);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(n),s.bufferData(s.ARRAY_BUFFER,l,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),r&&s.bindVertexArray(r)}getSceneIndexes(t,n){let i;const s=n-t+1;i=new Uint32Array(s);for(let r=t;r<=n;r++)i[r]=this.globalSplatIndexToSceneIndexMap[r];return i}getLocalSplatParameters(t,n,i){i==null&&(i=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=i?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,i,s,r,a,l,c=0,h=0,d=1,u,f,g=0,x){const p=new D;p.x=void 0,p.y=void 0,this.splatRenderMode===ii.ThreeD?p.z=void 0:p.z=1;const m=new Re;let v=0,A=this.scenes.length-1;x!=null&&x>=0&&x<=this.scenes.length&&(v=x,A=x);for(let y=v;y<=A;y++){l==null&&(l=!this.dynamicMode);const M=this.getScene(y),E=M.splatBuffer;let _;if(l&&(this.getSceneTransform(y,m),_=m),t&&E.fillSplatCovarianceArray(t,_,u,f,g,c),n||i){if(!n||!i)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');E.fillSplatScaleRotationArray(n,i,_,u,f,g,h,p)}s&&E.fillSplatCenterArray(s,_,u,f,g),r&&E.fillSplatColorArray(r,M.minimumAlpha,u,f,g),a&&E.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,_,u,f,g,d),g+=E.getSplatCount()}}getIntegerCenters(t,n,i=!1){const s=n-t+1,r=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,t);let a,l=i?4:3;a=new Int32Array(s*l);for(let c=0;c<s;c++){for(let h=0;h<3;h++)a[c*l+h]=Math.round(r[c*3+h]*1e3);i&&(a[c*l+3]=1e3)}return a}getFloatCenters(t,n,i=!1){const s=n-t+1,r=new Float32Array(s*3);if(this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,t),!i)return r;let a=new Float32Array(s*4);for(let l=0;l<s;l++){for(let c=0;c<3;c++)a[l*4+c]=r[l*3+c];a[l*4+3]=1}return a}getSceneTransform(t,n){const i=this.getScene(t);i.updateTransform(this.dynamicMode),n.copy(i.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,i=[];for(let s=0;s<16;s++)i[s]=Math.round(n[s]*1e3);return i}computeBoundingBox(t=!1,n){let i=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");i=this.scenes[n].splatBuffer.getSplatCount()}const s=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,s,null,null,t,void 0,void 0,void 0,void 0,n);const r=new D,a=new D;for(let l=0;l<i;l++){const c=l*3,h=s[c],d=s[c+1],u=s[c+2];(l===0||h<r.x)&&(r.x=h),(l===0||d<r.y)&&(r.y=d),(l===0||u<r.z)&&(r.z=u),(l===0||h>a.x)&&(a.x=h),(l===0||d>a.y)&&(a.y=d),(l===0||u>a.z)&&(a.z=u)}return new cn(r,a)}}var EA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Cu="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",CA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",TA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function wA(o){let e,t,n,i,s,r,a,l,c,h,d,u,f,g,x,p,m,v,A,y;function M(E,_,T,C,S,I,N){const R=performance.now();if(!n&&(new Uint32Array(t,a,S.byteLength/y.BytesPerInt).set(S),new Float32Array(t,h,N.byteLength/y.BytesPerFloat).set(N),C)){let z;i?z=new Int32Array(t,d,I.byteLength/y.BytesPerInt):z=new Float32Array(t,d,I.byteLength/y.BytesPerFloat),z.set(I)}p||(p=new Uint32Array(v)),new Float32Array(t,x,16).set(T),new Uint32Array(t,f,v).set(p),e.exports.sortIndexes(a,g,d,u,f,x,l,c,h,v,E,_,r,C,i,s);const B={sortDone:!0,splatSortCount:E,splatRenderCount:_,sortTime:0};if(!n){const F=new Uint32Array(t,l,_);(!m||m.length<_)&&(m=new Uint32Array(_)),m.set(F),B.sortedIndexes=m}const U=performance.now();B.sortTime=U-R,o.postMessage(B)}o.onmessage=E=>{if(E.data.centers)centers=E.data.centers,sceneIndexes=E.data.sceneIndexes,i?new Int32Array(t,g+E.data.range.from*y.BytesPerInt*4,E.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+E.data.range.from*y.BytesPerFloat*4,E.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+E.data.range.from*4,E.data.range.count).set(new Uint32Array(sceneIndexes)),A=E.data.range.from+E.data.range.count;else if(E.data.sort){const _=Math.min(E.data.sort.splatRenderCount||0,A),T=Math.min(E.data.sort.splatSortCount||0,A),C=E.data.sort.usePrecomputedDistances;let S,I,N;n||(S=E.data.sort.indexesToSort,N=E.data.sort.transforms,C&&(I=E.data.sort.precomputedDistances)),M(T,_,E.data.sort.modelViewProj,C,S,I,N)}else if(E.data.init){y=E.data.init.Constants,r=E.data.init.splatCount,n=E.data.init.useSharedMemory,i=E.data.init.integerBasedSort,s=E.data.init.dynamicMode,v=E.data.init.distanceMapRange,A=0;const _=i?y.BytesPerInt*4:y.BytesPerFloat*4,T=new Uint8Array(E.data.init.sorterWasmBytes),C=16*y.BytesPerFloat,S=r*y.BytesPerInt,I=r*_,N=C,R=i?r*y.BytesPerInt:r*y.BytesPerFloat,B=r*y.BytesPerInt,U=r*y.BytesPerInt,F=i?v*y.BytesPerInt*2:v*y.BytesPerFloat*2,q=s?r*y.BytesPerInt:0,z=s?y.MaxScenes*C:0,V=y.MemoryPageSize*32,$=S+I+N+R+B+F+U+q+z+V,ae=Math.floor($/y.MemoryPageSize)+1,ie={module:{},env:{memory:new WebAssembly.Memory({initial:ae,maximum:ae,shared:!0})}};WebAssembly.compile(T).then(Ie=>WebAssembly.instantiate(Ie,ie)).then(Ie=>{e=Ie,a=0,g=a+S,x=g+I,d=x+N,u=d+R,f=u+B,l=f+F,c=l+U,h=c+q,t=ie.env.memory.buffer,n?o.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:d,transformsBuffer:t,transformsOffset:h}):o.postMessage({sortSetupPhase1Complete:!0})})}}}function bA(o,e,t,n,i,s=Je.DefaultSplatSortDistanceMapPrecision){const r=new Worker(URL.createObjectURL(new Blob(["(",wA.toString(),")(self)"],{type:"application/javascript"})));let a=EA;const l=ic()?Bd():null;!t&&!e?(a=Cu,l&&l.major<=16&&l.minor<4&&(a=TA)):t?e||l&&l.major<=16&&l.minor<4&&(a=CA):a=Cu;const c=atob(a),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);return r.postMessage({init:{sorterWasmBytes:h.buffer,splatCount:o,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<s,Constants:{BytesPerFloat:Je.BytesPerFloat,BytesPerInt:Je.BytesPerInt,MemoryPageSize:Je.MemoryPageSize,MaxScenes:Je.MaxScenes}}}),r}const xs={None:0,VR:1,AR:2};class Us{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function h(f){f.addEventListener("end",d),await e.xr.setSession(f),n.textContent="EXIT VR",c=f}function d(){c.removeEventListener("end",d),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const u={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",u).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",u).then(h).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",u).then(h).catch(f=>{console.warn(f)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function r(){s(),n.textContent="VR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():r(),c&&Us.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Us.xrSessionIsGranted=!0})}}}Us.xrSessionIsGranted=!1;Us.registerSessionGrantedListener();class RA{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const u=document.createElement("div");u.style.display="none",document.body.appendChild(u);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),u.appendChild(f);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),f.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:u}}let c=null;async function h(u){u.addEventListener("end",d),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(u),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=u}function d(){c.removeEventListener("end",d),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(u=>{console.warn(u)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(u=>{console.warn(u)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function r(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():r()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const La={Always:0,OnChange:1,Never:2},IA=50,PA=.75,DA=15e5,BA=10,FA=2.5,LA=60,Si=class Si{constructor(e={}){he(this,"onMouseUp",function(){const e=new Me;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),ms()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());he(this,"checkForFocalPointChange",function(){const e=new Me,t=new D,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const s=n[0].origin;t.copy(s).sub(this.camera.position),t.length()>PA&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=ms())}}}());he(this,"updateSplatMesh",function(){const e=new Me;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,r=this.focalAdjustment*s,a=1/r;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*r,i*r,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());he(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,i=!0,s=!0,r=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const h=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(d=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),hn(()=>{if(this.isDisposingOrDisposed())d();else{const u=this.addSplatBuffersToMesh(e,t,n,s,r,l),f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:u.centers.buffer,sceneIndexes:u.sceneIndexes.buffer,range:{from:u.from,to:u.to,count:u.count}}),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(x=>{!this.sortWorker||!x?(this.splatRenderReady=!0,h(),d()):(a?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{h(),d()}))})})}},!0)})}}());he(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,i=!0,s=!1,r=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];r||(l=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const h=f=>{if(this.isDisposingOrDisposed())return;const g=this.splatMesh.getSplatCount();s&&g>=DA&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},d=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},u=this.splatMesh.build(l,c,!0,i,h,d,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),u}}());he(this,"shouldRender",function(){let e=0;const t=new D,n=new Et,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,r=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;r=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return s=this.renderMode!==La.Never&&(e===0||this.splatMesh.visibleRegionChanging||r||this.renderMode===La.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,s}}());he(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());he(this,"updateFPS",function(){let e=ms(),t=0;return function(){if(this.consecutiveRenderFrames>LA){const n=ms();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());he(this,"updateForRendererSizeChanges",function(){const e=new Me,t=new Me;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());he(this,"timingSensitiveUpdates",function(){let e;return function(){const t=ms();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());he(this,"updateCameraTransition",function(){let e=new D,t=new D,n=new D;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(n)),a=(s/(Math.PI/3)*.65+.3)/s*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());he(this,"updateFocusMarker",function(){const e=new Me;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(i+BA*n,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(i-FA*n,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}}());he(this,"updateMeshCursor",function(){const e=[],t=new Me;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());he(this,"updateInfoPanel",function(){const e=new Me;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());he(this,"runSplatSort",function(){const e=new Re,t=[],n=new D(0,0,-1),i=new D(0,0,-1),s=new D,r=new D,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,h=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let d=0,u=0,f=!1,g=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),d=i.dot(n),u=r.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(d<=.99&&(f=!0),u>=1&&(g=!0),!f&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:x,shouldSortAll:p}=this.gatherSceneNodesForSort();p=p||h,this.splatRenderCount=x,e.copy(this.camera.matrixWorld).invert();const m=this.perspectiveCamera||this.camera;e.premultiply(m.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let v=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(v=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),v.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||p)a.push(this.splatRenderCount);else{for(let M of l)if(d<M.angleThreshold){for(let E of M.sortFractions)a.push(Math.floor(this.splatRenderCount*E));break}a.push(this.splatRenderCount)}let A=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=A,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const y={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:A,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(y.indexesToSort=this.sortWorkerIndexesToSort,y.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(y.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(M=>{this.sortPromiseResolver=M}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(M=>{this.sortWorker.postMessage(M)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:y}),a.length===0&&(s.copy(this.camera.position),n.copy(i)),!0}),v}}());he(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new D,i=new D,s=new D,r=new Re,a=new Re,l=new Re,c=new D,h=new D(0,0,-1),d=new D,u=f=>d.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(c);const g=c.y/2/Math.tan(this.camera.fov/2*ud.DEG2RAD),x=Math.atan(c.x/2/g),p=Math.atan(c.y/2/g),m=Math.cos(x),v=Math.cos(p),A=this.splatMesh.getSplatTree();if(A){a.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||a.multiply(this.splatMesh.matrixWorld);let y=0,M=0;for(let _=0;_<A.subTrees.length;_++){const T=A.subTrees[_];r.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(_,l),r.multiply(l));const C=T.nodesWithIndexes.length;for(let S=0;S<C;S++){const I=T.nodesWithIndexes[S];if(!I.data||!I.data.indexes||I.data.indexes.length===0)continue;s.copy(I.center).applyMatrix4(r);const N=s.length();s.normalize(),n.copy(s).setX(0).normalize(),i.copy(s).setY(0).normalize();const R=h.dot(i),B=h.dot(n),U=u(I),F=B<v-.6,q=R<m-.6;!f&&(q||F)&&N>U||(M+=I.data.indexes.length,e[y]=I,I.data.distanceToNode=N,y++)}}e.length=y,e.sort((_,T)=>_.data.distanceToNode<T.data.distanceToNode?-1:1);let E=M*Je.BytesPerInt;for(let _=0;_<y;_++){const T=e[_],C=T.data.indexes.length,S=C*Je.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,E-S,C).set(T.data.indexes),E-=S}return{splatRenderCount:M,shouldSortAll:!1}}else{const y=this.splatMesh.getSplatCount();if(!t||t.length!==y){t=new Uint32Array(y);for(let M=0;M<y;M++)t[M]=M}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:y,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new D().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new D().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new D().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||xs.None,this.webXRMode!==xs.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||La.Always,this.sceneRevealMode=e.sceneRevealMode||dr.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||ws.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,ic()){const n=Bd();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=ii.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||Je.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=wt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new aA,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new D,this.nextCameraTarget=new D,this.mousePosition=new Me,this.mouseDownPosition=new Me,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new Ll(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new tA(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new nA(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new kt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new Sv,this.sceneHelper=new hr(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new Me;this.getRenderDimensions(e),this.perspectiveCamera=new tn(IA,e.x/e.y,.1,1e3),this.orthographicCamera=new Oo(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new Me;this.getRenderDimensions(e),this.renderer=new Av({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Ke(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===xs.VR?this.rootElement.appendChild(Us.createButton(this.renderer,e)):this.webXRMode===xs.AR&&this.rootElement.appendChild(RA.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===xs.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new ao(this.camera,this.renderer.domElement):this.perspectiveControls=new ao(this.camera,this.renderer.domElement):(this.perspectiveControls=new ao(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new ao(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===xs.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=ms()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY)}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=a=>{a.saveState(),a.reset()},s=this.controls,r=e?this.orthographicControls:this.perspectiveControls;i(r),i(s),r.target.copy(s.target),e?Si.setCameraZoomFromPosition(n,t,s):Si.setCameraPositionFromZoom(n,t,r),this.controls=r,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:gu(e),i=Si.isProgressivelyLoadable(n)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let r=null;s&&(this.loadingSpinner.removeAllTasks(),r=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(x,p,m)=>{if(s)if(m===It.Downloading)if(x==100)this.loadingSpinner.setMessageForTask(r,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(r,"Downloading splats...");else{const v=p?`: ${p}`:"...";this.loadingSpinner.setMessageForTask(r,`Downloading${v}`)}else m===It.Processing&&this.loadingSpinner.setMessageForTask(r,"Processing splats...")};let c=!1,h=0;const d=(x,p)=>{s&&((x&&i||p&&!i)&&(this.loadingSpinner.removeTask(r),!p&&!c&&this.loadingProgressBar.show()),i&&(p?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(h)))},u=(x,p,m)=>{h=x,l(x,p,m),t.onProgress&&t.onProgress(x,p,m)},f=(x,p,m)=>{!i&&t.onProgress&&t.onProgress(0,"0%",It.Processing);const v={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([x],[v],m,p&&s,s,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",It.Processing),d(p,m)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),u,a.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,s,r,a){const l=this.downloadSplatSceneToSplatBuffer(e,n,s,!1,void 0,t,a),c=wa(l.abortHandler);return l.then(h=>(this.removeSplatSceneDownloadPromise(l),i(h,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(h=>{r&&r(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(h,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,s,r,a){let l=0,c=!1;const h=[],d=()=>{if(h.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const p=h.shift();i(p.splatBuffer,p.firstBuild,p.finalBuild).then(()=>{c=!1,p.firstBuild?g.resolve():p.finalBuild&&(x.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),h.length>0&&hn(()=>d())})}},u=(p,m)=>{this.isDisposingOrDisposed()||(m||h.length===0||p.getSplatCount()>h[0].splatBuffer.getSplatCount())&&(h.push({splatBuffer:p,firstBuild:l===0,finalBuild:m}),l++,d())},f=this.downloadSplatSceneToSplatBuffer(e,n,s,!0,u,t,a),g=wa(f.abortHandler),x=wa();return this.addSplatSceneDownloadPromise(f),this.setSplatSceneDownloadAndBuildPromise(x.promise),f.then(()=>{this.removeSplatSceneDownloadPromise(f)}).catch(p=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(f);const m=this.updateError(p,"Viewer::addSplatScene -> Could not load one or more scenes");g.reject(m),r&&r(m)}),g.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,s=[];let r;t&&(this.loadingSpinner.removeAllTasks(),r=this.loadingSpinner.addTask("Downloading..."));const a=(d,u,f,g)=>{s[d]=u;let x=0;for(let p=0;p<i;p++)x+=s[p]||0;x=x/i,f=`${x.toFixed(2)}%`,t&&g===It.Downloading&&this.loadingSpinner.setMessageForTask(r,x==100?"Download complete!":`Downloading: ${f}`),n&&n(x,f,g)},l=[],c=[];for(let d=0;d<e.length;d++){const u=e[d],f=u.format!==void 0&&u.format!==null?u.format:gu(u.path),g=this.downloadSplatSceneToSplatBuffer(u.path,u.splatAlphaRemovalThreshold,a.bind(this,d),!1,void 0,f,u.headers);l.push(g),c.push(g.promise)}const h=new _r((d,u)=>{Promise.all(c).then(f=>{t&&this.loadingSpinner.removeTask(r),n&&n(0,"0%",It.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",It.Processing),this.clearSplatSceneDownloadAndBuildPromise(),d()})}).catch(f=>{t&&this.loadingSpinner.removeTask(r),this.clearSplatSceneDownloadAndBuildPromise(),u(this.updateError(f,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(h)})},d=>{for(let u of l)u.abort(d)});return this.addSplatSceneDownloadPromise(h),this.setSplatSceneDownloadAndBuildPromise(h),h}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,s=void 0,r,a){try{if(r===en.Splat||r===en.KSplat||r===en.Ply){const l=i?!1:this.optimizeSplatData;if(r===en.Splat)return mc.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,a);if(r===en.KSplat)return Fl.loadFromURL(e,n,i,s,a);if(r===en.Ply)return fc.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,a)}else if(r===en.Spz)return pc.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,a)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===en.Splat||e===en.KSplat||e===en.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=bA(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=r=>{if(r.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,r.data.splatRenderCount);else{const a=new Uint32Array(r.data.sortedIndexes.buffer,0,r.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,r.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=r.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(r.data.sortCanceled)this.sortRunning=!1;else if(r.data.sortSetupPhase1Complete){this.logLevel>=ws.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(r.data.sortedIndexesBuffer,r.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(r.data.indexesToSortBuffer,r.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new n(r.data.precomputedDistancesBuffer,r.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(r.data.transformsBuffer,r.data.transformsOffset,Je.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new n(s),this.sortWorkerTransforms=new Float32Array(Je.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=s,this.logLevel>=ws.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof Dd?e:e instanceof Ro?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,s)=>{let r;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),r=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(r))},l=h=>{a(),this.splatSceneRemovalPromise=null,h?s(h):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const h=[],d=[],u=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let g=!1;for(let x of e)if(x===f){g=!0;break}if(!g){const x=this.splatMesh.scenes[f];h.push(x.splatBuffer),d.push(this.splatMesh.sceneOptions[f]),u.push({position:x.position.clone(),quaternion:x.quaternion.clone(),scale:x.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=dr.Instant,this.createSplatMesh(),this.addSplatBuffers(h,d,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((f,g)=>{f.position.copy(u[g].position),f.quaternion.copy(u[g].quaternion),f.scale.copy(u[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(f=>{l(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&Si.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};he(Si,"setCameraPositionFromZoom",function(){const e=new D;return function(t,n,i){const s=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(i.target).add(e)}}()),he(Si,"setCameraZoomFromPosition",function(){const e=new D;return function(t,n,i){const s=e.copy(i.target).sub(n.position).length();t.zoom=1/(s*.001)}}());let Nl=Si;class Ol extends or{constructor(e={}){super(),e.selfDrivenMode=!1,e.useBuiltInControls=!1,e.rootElement=null,e.dropInMode=!0,e.camera=void 0,e.renderer=void 0,this.viewer=new Nl(e),this.splatMesh=null,this.updateSplatMesh(),this.callbackMesh=Ol.createCallbackMesh(),this.add(this.callbackMesh),this.callbackMesh.onBeforeRender=Ol.onBeforeRender.bind(this,this.viewer),this.viewer.onSplatMeshChanged(()=>{this.updateSplatMesh()})}updateSplatMesh(){this.splatMesh!==this.viewer.splatMesh&&(this.splatMesh&&this.remove(this.splatMesh),this.splatMesh=this.viewer.splatMesh,this.add(this.viewer.splatMesh))}addSplatScene(e,t={}){return t.showLoadingUI!==!1&&(t.showLoadingUI=!0),this.viewer.addSplatScene(e,t)}addSplatScenes(e,t){return t!==!1&&(t=!0),this.viewer.addSplatScenes(e,t)}getSplatScene(e){return this.viewer.getSplatScene(e)}removeSplatScene(e,t=!0){return this.viewer.removeSplatScene(e,t)}removeSplatScenes(e,t=!0){return this.viewer.removeSplatScenes(e,t)}getSceneCount(){return this.viewer.getSceneCount()}setActiveSphericalHarmonicsDegrees(e){this.viewer.setActiveSphericalHarmonicsDegrees(e)}async dispose(){return await this.viewer.dispose()}static onBeforeRender(e,t,n,i){e.update(t,i)}static createCallbackMesh(){const e=new Sr(1,8,8),t=new bi;t.colorWrite=!1,t.depthWrite=!1;const n=new Mt(e,t);return n.frustumCulled=!1,n}}class bn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new bn);const n=this.elements,i=e.elements,s=t.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],x=i[0],p=i[1],m=i[2],v=i[3],A=i[4],y=i[5],M=i[6],E=i[7],_=i[8];return s[0]=r*x+a*v+l*M,s[1]=r*p+a*A+l*E,s[2]=r*m+a*y+l*_,s[3]=c*x+h*v+d*M,s[4]=c*p+h*A+d*E,s[5]=c*m+h*y+d*_,s[6]=u*x+f*v+g*M,s[7]=u*p+f*A+g*E,s[8]=u*m+f*y+g*_,t}scale(e,t){t===void 0&&(t=new bn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new w);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,s[r+i*r]===0){for(a=r+1;a<c;a++)if(s[r+i*a]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*a];while(--h);break}}if(s[r+i*r]!==0)for(a=r+1;a<c;a++){const f=s[r+i*a]/s[r+i*r];h=d;do u=d-h,s[u+i*a]=u<=r?0:s[u+i*a]-s[u+i*r]*f;while(--h)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new bn);const t=3,n=6,i=UA;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[t+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,d)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,a=n+n,l=i+i,c=t*r,h=t*a,d=t*l,u=n*a,f=n*l,g=i*l,x=s*r,p=s*a,m=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-m,v[3*0+2]=d+p,v[3*1+0]=h+m,v[3*1+1]=1-(c+g),v[3*1+2]=f-x,v[3*2+0]=d-p,v[3*2+1]=f+x,v[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new bn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const UA=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-r*s,t.z=r*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new bn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new w);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new w);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new w),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=NA,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=OA;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Tu),Tu.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const NA=new w,OA=new w,Tu=new w;class Tt{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,wu),c=wu),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Tt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=bu,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=bu,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const wu=new w,bu=[new w,new w,new w,new w,new w,new w,new w,new w];class Ru{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Hd{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Bt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=zA,i=kA;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Bt);const n=this.x,i=this.y,s=this.z,r=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+r*a+i*c-s*l,t.y=i*h+r*l+s*a-n*c,t.z=s*h+r*c+n*l-i*a,t.w=r*h-n*a-i*l-s*c,t}inverse(e){e===void 0&&(e=new Bt);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new Bt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-r*s,u=c*s+r*i-a*n,f=-r*n-a*i-l*s;return t.x=h*c+f*-r+d*-l-u*-a,t.y=d*c+f*-a+u*-r-h*-l,t.z=u*c+f*-l+h*-a-d*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="YXZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="ZXY"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="ZYX"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="YZX"?(this.x=l*r*a+s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a-l*c*h):i==="XZY"&&(this.x=l*r*a-s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a+l*c*h),this}clone(){return new Bt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Bt);const i=this.x,s=this.y,r=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,f,g,x,p;return f=i*l+s*c+r*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),x=Math.sin((1-t)*u)/g,p=Math.sin(t*u)/g):(x=1-t,p=t),n.x=x*i+p*l,n.y=x*s+p*c,n.z=x*r+p*h,n.w=x*a+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new Bt);const s=e.x*n.x,r=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+r*h-a*c),i.y+=u*(r*d+a*l-s*h),i.z+=u*(a*d+s*c-r*l),i.w+=u*(-s*l-r*c-a*h),i}}const zA=new w,kA=new w,HA={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class _e{constructor(e){e===void 0&&(e={}),this.id=_e.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}_e.idCounter=0;_e.types=HA;class rt{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new Bt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return rt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return rt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),n.vsub(e,i),t.conjugate(Iu),Iu.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new w),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new w),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Iu=new Bt;class fr extends _e{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:_e.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==e.length;s++){const r=e[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[r[l]].vsub(t[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];fr.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new w,r=new w;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,a,l,c){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const x=h.dot(r);x>u&&(u=x,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const x=n.vertices[n.faces[d][g]],p=new w;p.copy(x),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(r,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,r,a,l){const c=new w,h=new w,d=new w,u=new w,f=new w,g=new w;let x=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],c);const v=p.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,r.copy(c))}else{const m=a?a.length:p.faces.length;for(let v=0;v<m;v++){const A=a?a[v]:v;c.copy(p.faceNormals[A]),n.vmult(c,c);const y=p.testSepAxis(c,e,t,n,i,s);if(y===!1)return!1;y<x&&(x=y,r.copy(c))}}if(e.uniqueAxes)for(let m=0;m!==e.uniqueAxes.length;m++){s.vmult(e.uniqueAxes[m],h);const v=p.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,r.copy(h))}else{const m=l?l.length:e.faces.length;for(let v=0;v<m;v++){const A=l?l[v]:v;h.copy(e.faceNormals[A]),s.vmult(h,h);const y=p.testSepAxis(h,e,t,n,i,s);if(y===!1)return!1;y<x&&(x=y,r.copy(h))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),u.cross(f,g),!g.almostZero()){g.normalize();const A=p.testSepAxis(g,e,t,n,i,s);if(A===!1)return!1;A<x&&(x=A,r.copy(g))}}return i.vsub(t,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const a=this;fr.project(a,e,n,i,Ua),fr.project(t,e,s,r,Na);const l=Ua[0],c=Ua[1],h=Na[0],d=Na[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(e,t){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,a){const l=new w,c=new w,h=new w,d=new w,u=new w,f=new w,g=new w,x=new w,p=this,m=[],v=i,A=m;let y=-1,M=Number.MAX_VALUE;for(let S=0;S<p.faces.length;S++){l.copy(p.faceNormals[S]),n.vmult(l,l);const I=l.dot(e);I<M&&(M=I,y=S)}if(y<0)return;const E=p.faces[y];E.connectedFaces=[];for(let S=0;S<p.faces.length;S++)for(let I=0;I<p.faces[S].length;I++)E.indexOf(p.faces[S][I])!==-1&&S!==y&&E.connectedFaces.indexOf(S)===-1&&E.connectedFaces.push(S);const _=E.length;for(let S=0;S<_;S++){const I=p.vertices[E[S]],N=p.vertices[E[(S+1)%_]];I.vsub(N,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(I),n.vmult(f,f),t.vadd(f,f);const R=E.connectedFaces[S];g.copy(this.faceNormals[R]);const B=this.getPlaneConstantOfFace(R);x.copy(g),n.vmult(x,x);const U=B-x.dot(t);for(this.clipFaceAgainstPlane(v,A,x,U);v.length;)v.shift();for(;A.length;)v.push(A.shift())}g.copy(this.faceNormals[y]);const T=this.getPlaneConstantOfFace(y);x.copy(g),n.vmult(x,x);const C=T-x.dot(t);for(let S=0;S<v.length;S++){let I=x.dot(v[S])+C;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=r){const N=v[S];if(I<=1e-6){const R={point:N,normal:x,depth:I};a.push(R)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],r=n.dot(c)+i,s<0)if(r<0){const d=new w;d.copy(c),t.push(d)}else{const d=new w;l.lerp(c,s/(s-r),d),t.push(d)}else if(r<0){const d=new w;l.lerp(c,s/(s-r),d),t.push(d),t.push(c)}l=c,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,a,l,c,h,d,u=new w;for(let f=0;f<s.length;f++){u.copy(s[f]),t.vmult(u,u),e.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new w;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=t[n[a][0]],h=new w;e.vsub(c,h);const d=l.dot(h),u=new w;r.vsub(c,u);const f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,a=VA;let l=0,c=0;const h=GA,d=e.vertices;h.setZero(),rt.vectorToLocalFrame(n,i,t,a),rt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Ua=[],Na=[];new w;const VA=new w,GA=new w;class xc extends _e{constructor(e){super({type:_e.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new fr({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),xc.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)yi.set(s[r][0],s[r][1],s[r][2]),t.vmult(yi,yi),e.vadd(yi,yi),n(yi.x,yi.y,yi.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Pn[0].set(s.x,s.y,s.z),Pn[1].set(-s.x,s.y,s.z),Pn[2].set(-s.x,-s.y,s.z),Pn[3].set(-s.x,-s.y,-s.z),Pn[4].set(s.x,-s.y,-s.z),Pn[5].set(s.x,s.y,-s.z),Pn[6].set(-s.x,s.y,-s.z),Pn[7].set(s.x,-s.y,s.z);const r=Pn[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=Pn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const yi=new w,Pn=[new w,new w,new w,new w,new w,new w,new w,new w],vc={DYNAMIC:1,STATIC:2,KINEMATIC:4},yc={AWAKE:0,SLEEPY:1,SLEEPING:2};class be extends Hd{constructor(e){e===void 0&&(e={}),super(),this.id=be.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?be.STATIC:be.DYNAMIC,typeof e.type==typeof be.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=be.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Bt,this.initQuaternion=new Bt,this.previousQuaternion=new Bt,this.interpolatedQuaternion=new Bt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new bn,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new bn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Tt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=be.AWAKE,this.wakeUpAfterNarrowphase=!1,e===be.SLEEPING&&this.dispatchEvent(be.wakeupEvent)}sleep(){this.sleepState=be.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===be.AWAKE&&n<i?(this.sleepState=be.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(be.sleepyEvent)):t===be.SLEEPY&&n>i?this.wakeUp():t===be.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(be.sleepEvent))}}updateSolveMassProperties(){this.sleepState===be.SLEEPING||this.type===be.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new w,s=new Bt;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const a=t[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=WA,r=qA,a=this.quaternion,l=this.aabb,c=XA;for(let h=0;h!==i;h++){const d=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=YA,i=QA;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;this.sleepState===be.SLEEPING&&this.wakeUp();const n=KA;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;const n=ZA,i=$A;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===be.DYNAMIC&&(this.sleepState===be.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;this.sleepState===be.SLEEPING&&this.wakeUp();const n=t,i=JA;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=eS;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;const n=tS,i=nS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=iS;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),xc.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new w;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===be.DYNAMIC||this.type===be.KINEMATIC)||this.sleepState===be.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,x=this.angularFactor,p=l.x*x.x,m=l.y*x.y,v=l.z*x.z;s.x+=e*(g[0]*p+g[1]*m+g[2]*v),s.y+=e*(g[3]*p+g[4]*m+g[5]*v),s.z+=e*(g[6]*p+g[7]*m+g[8]*v),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}be.idCounter=0;be.COLLIDE_EVENT_NAME="collide";be.DYNAMIC=vc.DYNAMIC;be.STATIC=vc.STATIC;be.KINEMATIC=vc.KINEMATIC;be.AWAKE=yc.AWAKE;be.SLEEPY=yc.SLEEPY;be.SLEEPING=yc.SLEEPING;be.wakeupEvent={type:"wakeup"};be.sleepyEvent={type:"sleepy"};be.sleepEvent={type:"sleep"};const WA=new w,qA=new Bt,XA=new Tt,YA=new bn,QA=new bn,jA=new bn,KA=new w,ZA=new w,$A=new w,JA=new w,eS=new w,tS=new w,nS=new w,iS=new w;class sS{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&be.STATIC||e.sleepState===be.SLEEPING)&&(t.type&be.STATIC||t.sleepState===be.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=rS;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=oS,i=aS,s=lS,r=e.length;for(let a=0;a!==r;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new w;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const rS=new w;new w;new Bt;new w;const oS={keys:[]},aS=[],lS=[];new w;new w;new w;class cS extends sS{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Do{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let Vd,Gd,Wd,qd,Xd,Yd,Qd;const Ac={CLOSEST:1,ANY:2,ALL:4};Vd=_e.types.SPHERE;Gd=_e.types.PLANE;Wd=_e.types.BOX;qd=_e.types.CYLINDER;Xd=_e.types.CONVEXPOLYHEDRON;Yd=_e.types.HEIGHTFIELD;Qd=_e.types.TRIMESH;class Dt{get[Vd](){return this._intersectSphere}get[Gd](){return this._intersectPlane}get[Wd](){return this._intersectBox}get[qd](){return this._intersectConvex}get[Xd](){return this._intersectConvex}get[Yd](){return this._intersectHeightfield}get[Qd](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Dt.ANY,this.result=new Do,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Dt.ANY,this.result=t.result||new Do,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Pu),Oa.length=0,e.broadphase.aabbQuery(e,Pu,Oa),this.intersectBodies(Oa),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=hS,s=uS;for(let r=0,a=e.shapes.length;r<a;r++){const l=e.shapes[r];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(CS(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new w(0,0,1);t.vmult(c,c);const h=new w;r.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new w,x=new w,p=new w;r.vsub(n,g);const m=-c.dot(g)/f;l.scale(m,x),r.vadd(x,p),this.reportIntersection(c,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=dS;r.from.copy(this.from),r.to.copy(this.to),rt.pointToLocalFrame(n,t,r.from,r.from),rt.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const a=fS;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new Tt;r.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,u),!!u.overlapsRay(r)){if(e.getConvexTrianglePillar(f,g,!1),rt.pointToWorldFrame(n,t,e.pillarOffset,co),this._intersectConvex(e.pillarConvex,t,co,i,s,Du),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),rt.pointToWorldFrame(n,t,e.pillarOffset,co),this._intersectConvex(e.pillarConvex,t,co,i,s,Du)}}}_intersectSphere(e,t,n,i,s){const r=this.from,a=this.to,l=e.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,f=pS,g=mS;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const x=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(x>=0&&x<=1&&(r.lerp(a,x,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const a=gS,l=Bu,c=r&&r.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,g=this.from,x=this.to,p=g.distanceTo(x),m=c?c.length:h.length,v=this.result;for(let A=0;!v.shouldStop&&A<m;A++){const y=c?c[A]:A,M=h[y],E=u[y],_=t,T=n;l.copy(d[M[0]]),_.vmult(l,l),l.vadd(T,l),l.vsub(g,l),_.vmult(E,a);const C=f.dot(a);if(Math.abs(C)<this.precision)continue;const S=a.dot(l)/C;if(!(S<0)){f.scale(S,Zt),Zt.vadd(g,Zt),Cn.copy(d[M[0]]),_.vmult(Cn,Cn),T.vadd(Cn,Cn);for(let I=1;!v.shouldStop&&I<M.length-1;I++){Dn.copy(d[M[I]]),Bn.copy(d[M[I+1]]),_.vmult(Dn,Dn),_.vmult(Bn,Bn),T.vadd(Dn,Dn),T.vadd(Bn,Bn);const N=Zt.distanceTo(g);!(Dt.pointInTriangle(Zt,Cn,Dn,Bn)||Dt.pointInTriangle(Zt,Dn,Cn,Bn))||N>p||this.reportIntersection(a,Zt,s,i,y)}}}}_intersectTrimesh(e,t,n,i,s,r){const a=xS,l=MS,c=ES,h=Bu,d=vS,u=yS,f=AS,g=_S,x=SS,p=e.indices;e.vertices;const m=this.from,v=this.to,A=this.direction;c.position.copy(n),c.quaternion.copy(t),rt.vectorToLocalFrame(n,t,A,d),rt.pointToLocalFrame(n,t,m,u),rt.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,E=l.length;!this.result.shouldStop&&M!==E;M++){const _=l[M];e.getNormal(_,a),e.getVertex(p[_*3],Cn),Cn.vsub(u,h);const T=d.dot(a),C=a.dot(h)/T;if(C<0)continue;d.scale(C,Zt),Zt.vadd(u,Zt),e.getVertex(p[_*3+1],Dn),e.getVertex(p[_*3+2],Bn);const S=Zt.distanceSquared(u);!(Dt.pointInTriangle(Zt,Dn,Cn,Bn)||Dt.pointInTriangle(Zt,Cn,Dn,Bn))||S>y||(rt.vectorToWorldFrame(t,a,x),rt.pointToWorldFrame(n,t,Zt,g),this.reportIntersection(x,g,s,i,_))}l.length=0}reportIntersection(e,t,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Dt.ALL:this.hasHit=!0,c.set(r,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case Dt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,n,i,l));break;case Dt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Wi),n.vsub(t,er),e.vsub(t,za);const s=Wi.dot(Wi),r=Wi.dot(er),a=Wi.dot(za),l=er.dot(er),c=er.dot(za);let h,d;return(h=l*a-r*c)>=0&&(d=s*c-r*a)>=0&&h+d<s*l-r*r}}Dt.CLOSEST=Ac.CLOSEST;Dt.ANY=Ac.ANY;Dt.ALL=Ac.ALL;const Pu=new Tt,Oa=[],er=new w,za=new w,hS=new w,uS=new Bt,Zt=new w,Cn=new w,Dn=new w,Bn=new w;new w;new Do;const Du={faceList:[0]},co=new w,dS=new Dt,fS=[],pS=new w,mS=new w,gS=new w;new w;new w;const Bu=new w,xS=new w,vS=new w,yS=new w,AS=new w,SS=new w,_S=new w;new Tt;const MS=[],ES=new rt,Wi=new w,ho=new w;function CS(o,e,t){t.vsub(o,Wi);const n=Wi.dot(e);return e.scale(n,ho),ho.vadd(o,ho),t.distanceTo(ho)}class TS{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Fu{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Cr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Cr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Fu,this.jacobianElementB=new Fu,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Lu),a.scale(h,Uu),n.invInertiaWorldSolve.vmult(r,Nu),i.invInertiaWorldSolve.vmult(l,Ou),e.multiplyVectors(Lu,Nu)+t.multiplyVectors(Uu,Ou)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(e.rotational,uo),c+=uo.dot(e.rotational),l.vmult(t.rotational,uo),c+=uo.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=wS;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Cr.idCounter=0;const Lu=new w,Uu=new w,Nu=new w,Ou=new w,uo=new w,wS=new w;class bS extends Cr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=RS,c=IS,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=PS,x=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;r.cross(m,l),a.cross(m,c),m.negate(x.spatial),l.negate(x.rotational),p.spatial.copy(m),p.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(r,g);const v=m.dot(g),A=this.restitution+1,y=A*u.dot(m)-A*h.dot(m)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-v*t-y*n-e*M}getImpactVelocityAlongNormal(){const e=DS,t=BS,n=FS,i=LS,s=US;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const RS=new w,IS=new w,PS=new w,DS=new w,BS=new w,FS=new w,LS=new w,US=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class zu extends Cr{constructor(e,t,n){super(e,t,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=NS,r=OS,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const NS=new w,OS=new w;class Go{constructor(e,t,n){n=TS.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Go.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Go.idCounter=0;class Wo{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Wo.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Wo.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Dt;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class zS extends _e{constructor(e){if(super({type:_e.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new w);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=e[l]-s,i[l]=e[l]+s}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class qM extends _e{constructor(){super({type:_e.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Zn.set(0,0,1),t.vmult(Zn,Zn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Zn.x===1?i.x=e.x:Zn.x===-1&&(n.x=e.x),Zn.y===1?i.y=e.y:Zn.y===-1&&(n.y=e.y),Zn.z===1?i.z=e.z:Zn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Zn=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Ln{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new Tt,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const s=this.children,r=this.maxDepth||this.root.maxDepth;if(n<r){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(e,t,n+1))return!0;a&&(s.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new Ln({aabb:new Tt({lowerBound:new w(0,0,0)})}),new Ln({aabb:new Tt({lowerBound:new w(1,0,0)})}),new Ln({aabb:new Tt({lowerBound:new w(1,1,0)})}),new Ln({aabb:new Tt({lowerBound:new w(1,1,1)})}),new Ln({aabb:new Tt({lowerBound:new w(0,1,1)})}),new Ln({aabb:new Tt({lowerBound:new w(0,0,1)})}),new Ln({aabb:new Tt({lowerBound:new w(1,0,1)})}),new Ln({aabb:new Tt({lowerBound:new w(0,1,0)})})),n.vsub(t,Ni),Ni.scale(.5,Ni);const s=this.root||this;for(let r=0;r!==8;r++){const a=i[r];a.root=s;const l=a.aabb.lowerBound;l.x*=Ni.x,l.y*=Ni.y,l.z*=Ni.z,l.vadd(t,l),l.vadd(Ni,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(fo),fo.toLocalFrame(t,fo),this.aabbQuery(fo,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class kS extends Ln{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const Ni=new w,fo=new Tt;class zl extends _e{constructor(e,t){super({type:_e.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new Tt,this.edges=null,this.scale=new w(1,1,1),this.tree=new kS,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new Tt,i=new w,s=new w,r=new w,a=[i,s,r];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],r),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){po.copy(e);const n=this.scale,i=n.x,s=n.y,r=n.z,a=po.lowerBound,l=po.upperBound;return a.x/=i,a.y/=s,a.z/=r,l.x/=i,l.y/=s,l.z/=r,this.tree.aabbQuery(po,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=HS,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],r=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,Vu),this.getVertex(r,Gu),this.getVertex(a,Wu),zl.computeNormal(Gu,Vu,Wu,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,s)=>{const r=i<s?`${i}_${s}`:`${s}_${i}`;e[r]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,r=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];t(r,a),t(a,l),t(l,r)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=VS,i=GS;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,Hu),n.vsub(t,ku),ku.cross(Hu,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),rt.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const s=e*3;this.getVertex(this.indices[s],t),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(Oi);const n=Oi.upperBound.x-Oi.lowerBound.x,i=Oi.upperBound.y-Oi.lowerBound.y,s=Oi.upperBound.z-Oi.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*s*2*s),1/12*e*(2*n*2*n+2*s*2*s),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const s=WS;this.getVertex(0,s),t.copy(s),n.copy(s);for(let r=0;r!==i;r++)this.getVertex(r,s),s.x<t.x?t.x=s.x:s.x>n.x&&(n.x=s.x),s.y<t.y?t.y=s.y:s.y>n.y&&(n.y=s.y),s.z<t.z?t.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new w;for(let i=0,s=t.length/3;i!==s;i++){this.getVertex(i,n);const r=n.lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=qS,r=XS;s.position=e,s.quaternion=t,this.aabb.toWorldFrame(s,r),n.copy(r.lowerBound),i.copy(r.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,s){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),s===void 0&&(s=Math.PI*2);const r=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const h=c/i*s,d=l/n*Math.PI*2,u=(e+t*Math.cos(d))*Math.cos(h),f=(e+t*Math.cos(d))*Math.sin(h),g=t*Math.sin(d);r.push(u,f,g)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const h=(i+1)*l+c-1,d=(i+1)*(l-1)+c-1,u=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(h,d,f),a.push(d,u,f)}return new zl(r,a)}}const HS=new w,po=new Tt,VS=new w,GS=new w,ku=new w,Hu=new w,Vu=new w,Gu=new w,Wu=new w,Oi=new Tt,WS=new w,qS=new rt,XS=new Tt;class YS{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class QS extends YS{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=t.bodies,c=l.length,h=e;let d,u,f,g,x,p;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const m=KS,v=ZS,A=jS;m.length=a,v.length=a,A.length=a;for(let y=0;y!==a;y++){const M=r[y];A[y]=0,v[y]=M.computeB(h),m[y]=1/M.computeC()}if(a!==0){for(let E=0;E!==c;E++){const _=l[E],T=_.vlambda,C=_.wlambda;T.set(0,0,0),C.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==a;E++){const _=r[E];d=v[E],u=m[E],p=A[E],x=_.computeGWlambda(),f=u*(d-x-_.eps*p),p+f<_.minForce?f=_.minForce-p:p+f>_.maxForce&&(f=_.maxForce-p),A[E]+=f,g+=f>0?f:-f,_.addToWlambda(f)}if(g*g<s)break}for(let E=0;E!==c;E++){const _=l[E],T=_.velocity,C=_.angularVelocity;_.vlambda.vmul(_.linearFactor,_.vlambda),T.vadd(_.vlambda,T),_.wlambda.vmul(_.angularFactor,_.wlambda),C.vadd(_.wlambda,C)}let y=r.length;const M=1/h;for(;y--;)r[y].multiplier=A[y]*M}return n}}const jS=[],KS=[],ZS=[];be.STATIC;class $S{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class JS extends $S{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const St={sphereSphere:_e.types.SPHERE,spherePlane:_e.types.SPHERE|_e.types.PLANE,boxBox:_e.types.BOX|_e.types.BOX,sphereBox:_e.types.SPHERE|_e.types.BOX,planeBox:_e.types.PLANE|_e.types.BOX,convexConvex:_e.types.CONVEXPOLYHEDRON,sphereConvex:_e.types.SPHERE|_e.types.CONVEXPOLYHEDRON,planeConvex:_e.types.PLANE|_e.types.CONVEXPOLYHEDRON,boxConvex:_e.types.BOX|_e.types.CONVEXPOLYHEDRON,sphereHeightfield:_e.types.SPHERE|_e.types.HEIGHTFIELD,boxHeightfield:_e.types.BOX|_e.types.HEIGHTFIELD,convexHeightfield:_e.types.CONVEXPOLYHEDRON|_e.types.HEIGHTFIELD,sphereParticle:_e.types.PARTICLE|_e.types.SPHERE,planeParticle:_e.types.PLANE|_e.types.PARTICLE,boxParticle:_e.types.BOX|_e.types.PARTICLE,convexParticle:_e.types.PARTICLE|_e.types.CONVEXPOLYHEDRON,cylinderCylinder:_e.types.CYLINDER,sphereCylinder:_e.types.SPHERE|_e.types.CYLINDER,planeCylinder:_e.types.PLANE|_e.types.CYLINDER,boxCylinder:_e.types.BOX|_e.types.CYLINDER,convexCylinder:_e.types.CONVEXPOLYHEDRON|_e.types.CYLINDER,heightfieldCylinder:_e.types.HEIGHTFIELD|_e.types.CYLINDER,particleCylinder:_e.types.PARTICLE|_e.types.CYLINDER,sphereTrimesh:_e.types.SPHERE|_e.types.TRIMESH,planeTrimesh:_e.types.PLANE|_e.types.TRIMESH};class e_{get[St.sphereSphere](){return this.sphereSphere}get[St.spherePlane](){return this.spherePlane}get[St.boxBox](){return this.boxBox}get[St.sphereBox](){return this.sphereBox}get[St.planeBox](){return this.planeBox}get[St.convexConvex](){return this.convexConvex}get[St.sphereConvex](){return this.sphereConvex}get[St.planeConvex](){return this.planeConvex}get[St.boxConvex](){return this.boxConvex}get[St.sphereHeightfield](){return this.sphereHeightfield}get[St.boxHeightfield](){return this.boxHeightfield}get[St.convexHeightfield](){return this.convexHeightfield}get[St.sphereParticle](){return this.sphereParticle}get[St.planeParticle](){return this.planeParticle}get[St.boxParticle](){return this.boxParticle}get[St.convexParticle](){return this.convexParticle}get[St.cylinderCylinder](){return this.convexConvex}get[St.sphereCylinder](){return this.sphereConvex}get[St.planeCylinder](){return this.planeConvex}get[St.boxCylinder](){return this.boxConvex}get[St.convexCylinder](){return this.convexConvex}get[St.heightfieldCylinder](){return this.heightfieldCylinder}get[St.particleCylinder](){return this.particleCylinder}get[St.sphereTrimesh](){return this.sphereTrimesh}get[St.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new JS,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new bS(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,x=g.length?g.pop():new zu(n,i,u*f),p=g.length?g.pop():new zu(n,i,u*f);return x.bi=p.bi=n,x.bj=p.bj=i,x.minForce=p.minForce=-u*f,x.maxForce=p.maxForce=u*f,x.ri.copy(e.ri),x.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(x.t,p.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=p.enabled=e.enabled,t.push(x,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];zi.setZero(),vs.setZero(),ys.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(zi.vadd(t.ni,zi),vs.vadd(t.ri,vs),ys.vadd(t.rj,ys)):(zi.vsub(t.ni,zi),vs.vadd(t.rj,vs),ys.vadd(t.ri,ys));const r=1/e;vs.scale(r,n.ri),ys.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),zi.normalize(),zi.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=i_,c=s_,h=t_,d=n_;for(let u=0,f=e.length;u!==f;u++){const g=e[u],x=t[u];let p=null;g.material&&x.material&&(p=n.getContactMaterial(g.material,x.material)||null);const m=g.type&be.KINEMATIC&&x.type&be.STATIC||g.type&be.STATIC&&x.type&be.KINEMATIC||g.type&be.KINEMATIC&&x.type&be.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const A=g.shapes[v];for(let y=0;y<x.shapes.length;y++){x.quaternion.mult(x.shapeOrientations[y],c),x.quaternion.vmult(x.shapeOffsets[y],d),d.vadd(x.position,d);const M=x.shapes[y];if(!(A.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&A.collisionFilterGroup)||h.distanceTo(d)>A.boundingSphereRadius+M.boundingSphereRadius)continue;let E=null;A.material&&M.material&&(E=n.getContactMaterial(A.material,M.material)||null),this.currentContactMaterial=E||p||n.defaultContactMaterial;const _=A.type|M.type,T=this[_];if(T){let C=!1;A.type<M.type?C=T.call(this,A,M,h,d,l,c,g,x,A,M,m):C=T.call(this,M,A,d,h,c,l,x,g,A,M,m),C&&m&&(n.shapeOverlapKeeper.set(A.id,M.id),n.bodyOverlapKeeper.set(g.id,x.id))}}}}}sphereSphere(e,t,n,i,s,r,a,l,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,r,a,l,c,h,d){const u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,mo),u.ni.scale(u.ni.dot(mo),qu),mo.vsub(qu,u.rj),-mo.dot(u.ni)<=e.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,a,l,e,t,d)}sphereBox(e,t,n,i,s,r,a,l,c,h,d){const u=this.v3pool,f=I_;n.vsub(i,go),t.getSideNormals(f,r);const g=e.radius;let x=!1;const p=D_,m=B_,v=F_;let A=null,y=0,M=0,E=0,_=null;for(let F=0,q=f.length;F!==q&&x===!1;F++){const z=w_;z.copy(f[F]);const V=z.length();z.normalize();const $=go.dot(z);if($<V+g&&$>0){const ae=b_,ie=R_;ae.copy(f[(F+1)%3]),ie.copy(f[(F+2)%3]);const Ie=ae.length(),Y=ie.length();ae.normalize(),ie.normalize();const ee=go.dot(ae),le=go.dot(ie);if(ee<Ie&&ee>-Ie&&le<Y&&le>-Y){const re=Math.abs($-V-g);if((_===null||re<_)&&(_=re,M=ee,E=le,A=V,p.copy(z),m.copy(ae),v.copy(ie),y++,d))return!0}}}if(y){x=!0;const F=this.createContactEquation(a,l,e,t,c,h);p.scale(-g,F.ri),F.ni.copy(p),F.ni.negate(F.ni),p.scale(A,p),m.scale(M,m),p.vadd(m,p),v.scale(E,v),p.vadd(v,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let T=u.get();const C=P_;for(let F=0;F!==2&&!x;F++)for(let q=0;q!==2&&!x;q++)for(let z=0;z!==2&&!x;z++)if(T.set(0,0,0),F?T.vadd(f[0],T):T.vsub(f[0],T),q?T.vadd(f[1],T):T.vsub(f[1],T),z?T.vadd(f[2],T):T.vsub(f[2],T),i.vadd(T,C),C.vsub(n,C),C.lengthSquared()<g*g){if(d)return!0;x=!0;const V=this.createContactEquation(a,l,e,t,c,h);V.ri.copy(C),V.ri.normalize(),V.ni.copy(V.ri),V.ri.scale(g,V.ri),V.rj.copy(T),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.vadd(i,V.rj),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}u.release(T),T=null;const S=u.get(),I=u.get(),N=u.get(),R=u.get(),B=u.get(),U=f.length;for(let F=0;F!==U&&!x;F++)for(let q=0;q!==U&&!x;q++)if(F%3!==q%3){f[q].cross(f[F],S),S.normalize(),f[F].vadd(f[q],I),N.copy(n),N.vsub(I,N),N.vsub(i,N);const z=N.dot(S);S.scale(z,R);let V=0;for(;V===F%3||V===q%3;)V++;B.copy(n),B.vsub(R,B),B.vsub(I,B),B.vsub(i,B);const $=Math.abs(z),ae=B.length();if($<f[V].length()&&ae<g){if(d)return!0;x=!0;const ie=this.createContactEquation(a,l,e,t,c,h);I.vadd(R,ie.rj),ie.rj.copy(ie.rj),B.negate(ie.ni),ie.ni.normalize(),ie.ri.copy(ie.rj),ie.ri.vadd(i,ie.ri),ie.ri.vsub(n,ie.ri),ie.ri.normalize(),ie.ri.scale(g,ie.ri),ie.ri.vadd(n,ie.ri),ie.ri.vsub(a.position,ie.ri),ie.rj.vadd(i,ie.rj),ie.rj.vsub(l.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)}}u.release(S,I,N,R,B)}planeBox(e,t,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,a,l,e,t,d)}convexConvex(e,t,n,i,s,r,a,l,c,h,d,u,f){const g=j_;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,u,f)){const x=[],p=K_;e.clipAgainstHull(n,s,t,i,r,g,-100,100,x);let m=0;for(let v=0;v!==x.length;v++){if(d)return!0;const A=this.createContactEquation(a,l,e,t,c,h),y=A.ri,M=A.rj;g.negate(A.ni),x[v].normal.negate(p),p.scale(x[v].depth,p),x[v].point.vadd(p,y),M.copy(x[v].point),y.vsub(n,y),M.vsub(i,M),y.vadd(n,y),y.vsub(a.position,y),M.vadd(i,M),M.vsub(l.position,M),this.result.push(A),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(A,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(e,t,n,i,s,r,a,l,c,h,d){const u=this.v3pool;n.vsub(i,L_);const f=t.faceNormals,g=t.faces,x=t.vertices,p=e.radius;let m=!1;for(let v=0;v!==x.length;v++){const A=x[v],y=z_;r.vmult(A,y),i.vadd(y,y);const M=O_;if(y.vsub(n,M),M.lengthSquared()<p*p){if(d)return!0;m=!0;const E=this.createContactEquation(a,l,e,t,c,h);E.ri.copy(M),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(p,E.ri),y.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,A=g.length;v!==A&&m===!1;v++){const y=f[v],M=g[v],E=k_;r.vmult(y,E);const _=H_;r.vmult(x[M[0]],_),_.vadd(i,_);const T=V_;E.scale(-p,T),n.vadd(T,T);const C=G_;T.vsub(_,C);const S=C.dot(E),I=W_;if(n.vsub(_,I),S<0&&I.dot(E)>0){const N=[];for(let R=0,B=M.length;R!==B;R++){const U=u.get();r.vmult(x[M[R]],U),i.vadd(U,U),N.push(U)}if(T_(N,E,n)){if(d)return!0;m=!0;const R=this.createContactEquation(a,l,e,t,c,h);E.scale(-p,R.ri),E.negate(R.ni);const B=u.get();E.scale(-S,B);const U=u.get();E.scale(-p,U),n.vsub(i,R.rj),R.rj.vadd(U,R.rj),R.rj.vadd(B,R.rj),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),u.release(B),u.release(U),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);for(let F=0,q=N.length;F!==q;F++)u.release(N[F]);return}else for(let R=0;R!==M.length;R++){const B=u.get(),U=u.get();r.vmult(x[M[(R+1)%M.length]],B),r.vmult(x[M[(R+2)%M.length]],U),i.vadd(B,B),i.vadd(U,U);const F=U_;U.vsub(B,F);const q=N_;F.unit(q);const z=u.get(),V=u.get();n.vsub(B,V);const $=V.dot(q);q.scale($,z),z.vadd(B,z);const ae=u.get();if(z.vsub(n,ae),$>0&&$*$<F.lengthSquared()&&ae.lengthSquared()<p*p){if(d)return!0;const ie=this.createContactEquation(a,l,e,t,c,h);z.vsub(i,ie.rj),z.vsub(n,ie.ni),ie.ni.normalize(),ie.ni.scale(p,ie.ri),ie.rj.vadd(i,ie.rj),ie.rj.vsub(l.position,ie.rj),ie.ri.vadd(n,ie.ri),ie.ri.vsub(a.position,ie.ri),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);for(let Ie=0,Y=N.length;Ie!==Y;Ie++)u.release(N[Ie]);u.release(B),u.release(U),u.release(z),u.release(ae),u.release(V);return}u.release(B),u.release(U),u.release(z),u.release(ae),u.release(V)}for(let R=0,B=N.length;R!==B;R++)u.release(N[R])}}}planeConvex(e,t,n,i,s,r,a,l,c,h,d){const u=q_,f=X_;f.set(0,0,1),s.vmult(f,f);let g=0;const x=Y_;for(let p=0;p!==t.vertices.length;p++)if(u.copy(t.vertices[p]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,h),A=Q_;f.scale(f.dot(x),A),u.vsub(A,A),A.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,d)}sphereHeightfield(e,t,n,i,s,r,a,l,c,h,d){const u=t.data,f=e.radius,g=t.elementSize,x=lM,p=aM;rt.pointToLocalFrame(i,r,n,p);let m=Math.floor((p.x-f)/g)-1,v=Math.ceil((p.x+f)/g)+1,A=Math.floor((p.y-f)/g)-1,y=Math.ceil((p.y+f)/g)+1;if(v<0||y<0||m>u.length||A>u[0].length)return;m<0&&(m=0),v<0&&(v=0),A<0&&(A=0),y<0&&(y=0),m>=u.length&&(m=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),A>=u[0].length&&(A=u[0].length-1);const M=[];t.getRectMinMax(m,A,v,y,M);const E=M[0],_=M[1];if(p.z-f>_||p.z+f<E)return;const T=this.result;for(let C=m;C<v;C++)for(let S=A;S<y;S++){const I=T.length;let N=!1;if(t.getConvexTrianglePillar(C,S,!1),rt.pointToWorldFrame(i,r,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,n,x,s,r,a,l,e,t,d)),d&&N||(t.getConvexTrianglePillar(C,S,!0),rt.pointToWorldFrame(i,r,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,n,x,s,r,a,l,e,t,d)),d&&N))return!0;if(T.length-I>2)return}}boxHeightfield(e,t,n,i,s,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,d)}convexHeightfield(e,t,n,i,s,r,a,l,c,h,d){const u=t.data,f=t.elementSize,g=e.boundingSphereRadius,x=rM,p=oM,m=sM;rt.pointToLocalFrame(i,r,n,m);let v=Math.floor((m.x-g)/f)-1,A=Math.ceil((m.x+g)/f)+1,y=Math.floor((m.y-g)/f)-1,M=Math.ceil((m.y+g)/f)+1;if(A<0||M<0||v>u.length||y>u[0].length)return;v<0&&(v=0),A<0&&(A=0),y<0&&(y=0),M<0&&(M=0),v>=u.length&&(v=u.length-1),A>=u.length&&(A=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const E=[];t.getRectMinMax(v,y,A,M,E);const _=E[0],T=E[1];if(!(m.z-g>T||m.z+g<_))for(let C=v;C<A;C++)for(let S=y;S<M;S++){let I=!1;if(t.getConvexTrianglePillar(C,S,!1),rt.pointToWorldFrame(i,r,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,r,a,l,null,null,d,p,null)),d&&I||(t.getConvexTrianglePillar(C,S,!0),rt.pointToWorldFrame(i,r,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,r,a,l,null,null,d,p,null)),d&&I))return!0}}sphereParticle(e,t,n,i,s,r,a,l,c,h,d){const u=eM;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(l,a,t,e,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,a,l,c,h,d){const u=Z_;u.set(0,0,1),a.quaternion.vmult(u,u);const f=$_;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(l,a,t,e,c,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const p=J_;u.scale(u.dot(i),p),i.vsub(p,p),x.rj.copy(p),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,i,s,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,d)}convexParticle(e,t,n,i,s,r,a,l,c,h,d){let u=-1;const f=nM,g=iM;let x=null;const p=tM;if(p.copy(i),p.vsub(n,p),s.conjugate(Xu),Xu.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let m=0,v=e.faces.length;m!==v;m++){const A=[e.worldVertices[e.faces[m][0]]],y=e.worldFaceNormals[m];i.vsub(A[0],Yu);const M=-y.dot(Yu);if(x===null||Math.abs(M)<Math.abs(x)){if(d)return!0;x=M,u=m,f.copy(y)}}if(u!==-1){const m=this.createContactEquation(l,a,t,e,c,h);f.scale(x,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const v=m.ri,A=m.rj;v.vadd(i,v),v.vsub(l.position,v),A.vadd(n,A),A.vsub(a.position,A),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,a,l,c,h,d){return this.convexHeightfield(t,e,i,n,r,s,l,a,c,h,d)}particleCylinder(e,t,n,i,s,r,a,l,c,h,d){return this.convexParticle(t,e,i,n,r,s,l,a,c,h,d)}sphereTrimesh(e,t,n,i,s,r,a,l,c,h,d){const u=d_,f=f_,g=p_,x=m_,p=g_,m=x_,v=S_,A=u_,y=c_,M=__;rt.pointToLocalFrame(i,r,n,p);const E=e.radius;v.lowerBound.set(p.x-E,p.y-E,p.z-E),v.upperBound.set(p.x+E,p.y+E,p.z+E),t.getTrianglesInAABB(v,M);const _=h_,T=e.radius*e.radius;for(let R=0;R<M.length;R++)for(let B=0;B<3;B++)if(t.getVertex(t.indices[M[R]*3+B],_),_.vsub(p,y),y.lengthSquared()<=T){if(A.copy(_),rt.pointToWorldFrame(i,r,A,_),_.vsub(n,y),d)return!0;let U=this.createContactEquation(a,l,e,t,c,h);U.ni.copy(y),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(_),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let R=0;R<M.length;R++)for(let B=0;B<3;B++){t.getVertex(t.indices[M[R]*3+B],u),t.getVertex(t.indices[M[R]*3+(B+1)%3],f),f.vsub(u,g),p.vsub(f,m);const U=m.dot(g);p.vsub(u,m);let F=m.dot(g);if(F>0&&U<0&&(p.vsub(u,m),x.copy(g),x.normalize(),F=m.dot(x),x.scale(F,m),m.vadd(u,m),m.distanceTo(p)<e.radius)){if(d)return!0;const z=this.createContactEquation(a,l,e,t,c,h);m.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),rt.pointToWorldFrame(i,r,m,m),m.vsub(l.position,z.rj),rt.vectorToWorldFrame(r,z.ni,z.ni),rt.vectorToWorldFrame(r,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const C=v_,S=y_,I=A_,N=l_;for(let R=0,B=M.length;R!==B;R++){t.getTriangleVertices(M[R],C,S,I),t.getNormal(M[R],N),p.vsub(C,m);let U=m.dot(N);if(N.scale(U,m),p.vsub(m,m),U=m.distanceTo(p),Dt.pointInTriangle(m,C,S,I)&&U<e.radius){if(d)return!0;let F=this.createContactEquation(a,l,e,t,c,h);m.vsub(p,F.ni),F.ni.normalize(),F.ni.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),rt.pointToWorldFrame(i,r,m,m),m.vsub(l.position,F.rj),rt.vectorToWorldFrame(r,F.ni,F.ni),rt.vectorToWorldFrame(r,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,s,r,a,l,c,h,d){const u=new w,f=r_;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const x=new w;x.copy(u),rt.pointToWorldFrame(i,r,x,u);const p=o_;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(f);const A=a_;f.scale(p.dot(f),A),u.vsub(A,A),v.ri.copy(A),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const zi=new w,vs=new w,ys=new w,t_=new w,n_=new w,i_=new Bt,s_=new Bt,r_=new w,o_=new w,a_=new w,l_=new w,c_=new w;new w;const h_=new w,u_=new w,d_=new w,f_=new w,p_=new w,m_=new w,g_=new w,x_=new w,v_=new w,y_=new w,A_=new w,S_=new Tt,__=[],mo=new w,qu=new w,M_=new w,E_=new w,C_=new w;function T_(o,e,t){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=M_;o[(s+1)%i].vsub(r,a);const l=E_;a.cross(e,l);const c=C_;t.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const go=new w,w_=new w,b_=new w,R_=new w,I_=[new w,new w,new w,new w,new w,new w],P_=new w,D_=new w,B_=new w,F_=new w,L_=new w,U_=new w,N_=new w,O_=new w,z_=new w,k_=new w,H_=new w,V_=new w,G_=new w,W_=new w;new w;new w;const q_=new w,X_=new w,Y_=new w,Q_=new w,j_=new w,K_=new w,Z_=new w,$_=new w,J_=new w,eM=new w,Xu=new Bt,tM=new w;new w;const nM=new w,Yu=new w,iM=new w,sM=new w,rM=new w,oM=[0],aM=new w,lM=new w;class Qu{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||ju(e,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||ju(t,h)}}}function ju(o,e){o.push((e&4294901760)>>16,e&65535)}const ka=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class cM{constructor(){this.data={keys:[]}}get(e,t){const n=ka(e,t);return this.data[n]}set(e,t,n){const i=ka(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=ka(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class XM extends Hd{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new cS,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new QS,this.constraints=[],this.narrowphase=new e_(this),this.collisionMatrix=new Ru,this.collisionMatrixPrevious=new Ru,this.bodyOverlapKeeper=new Qu,this.shapeOverlapKeeper=new Qu,this.contactmaterials=[],this.contactMaterialTable=new cM,this.defaultMaterial=new Wo("default"),this.defaultContactMaterial=new Go(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Do?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Dt.ALL,n.from=e,n.to=t,n.callback=i,Ha.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Dt.ANY,n.from=e,n.to=t,n.result=i,Ha.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Dt.CLOSEST,n.from=e,n.to=t,n.result=i,Ha.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof be&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Lt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Lt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Lt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=pM,i=mM,s=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=be.DYNAMIC;let u=-1/0;const f=this.constraints,g=fM;l.length();const x=l.x,p=l.y,m=l.z;let v=0;for(c&&(u=Lt.now()),v=0;v!==s;v++){const R=r[v];if(R.type===d){const B=R.force,U=R.mass;B.x+=U*x,B.y+=U*p,B.z+=U*m}}for(let R=0,B=this.subsystems.length;R!==B;R++)this.subsystems[R].update();c&&(u=Lt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Lt.now()-u);let A=f.length;for(v=0;v!==A;v++){const R=f[v];if(!R.collideConnected)for(let B=n.length-1;B>=0;B-=1)(R.bodyA===n[B]&&R.bodyB===i[B]||R.bodyB===n[B]&&R.bodyA===i[B])&&(n.splice(B,1),i.splice(B,1))}this.collisionMatrixTick(),c&&(u=Lt.now());const y=dM,M=t.length;for(v=0;v!==M;v++)y.push(t[v]);t.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,g),c&&(h.narrowphase=Lt.now()-u),c&&(u=Lt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const _=t.length;for(let R=0;R!==_;R++){const B=t[R],U=B.bi,F=B.bj,q=B.si,z=B.sj;let V;if(U.material&&F.material?V=this.getContactMaterial(U.material,F.material)||this.defaultContactMaterial:V=this.defaultContactMaterial,V.friction,U.material&&F.material&&(U.material.friction>=0&&F.material.friction>=0&&U.material.friction*F.material.friction,U.material.restitution>=0&&F.material.restitution>=0&&(B.restitution=U.material.restitution*F.material.restitution)),a.addEquation(B),U.allowSleep&&U.type===be.DYNAMIC&&U.sleepState===be.SLEEPING&&F.sleepState===be.AWAKE&&F.type!==be.STATIC){const $=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),ae=F.sleepSpeedLimit**2;$>=ae*2&&(U.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===be.DYNAMIC&&F.sleepState===be.SLEEPING&&U.sleepState===be.AWAKE&&U.type!==be.STATIC){const $=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ae=U.sleepSpeedLimit**2;$>=ae*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,F,!0),this.collisionMatrixPrevious.get(U,F)||(tr.body=F,tr.contact=B,U.dispatchEvent(tr),tr.body=U,F.dispatchEvent(tr)),this.bodyOverlapKeeper.set(U.id,F.id),this.shapeOverlapKeeper.set(q.id,z.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Lt.now()-u,u=Lt.now()),v=0;v!==s;v++){const R=r[v];R.wakeUpAfterNarrowphase&&(R.wakeUp(),R.wakeUpAfterNarrowphase=!1)}for(A=f.length,v=0;v!==A;v++){const R=f[v];R.update();for(let B=0,U=R.equations.length;B!==U;B++){const F=R.equations[B];a.addEquation(F)}}a.solve(e,this),c&&(h.solve=Lt.now()-u),a.removeAllEquations();const T=Math.pow;for(v=0;v!==s;v++){const R=r[v];if(R.type&d){const B=T(1-R.linearDamping,e),U=R.velocity;U.scale(B,U);const F=R.angularVelocity;if(F){const q=T(1-R.angularDamping,e);F.scale(q,F)}}}this.dispatchEvent(uM),c&&(u=Lt.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(e,S,I);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Lt.now()-u),this.stepnumber+=1,this.dispatchEvent(hM);let N=!0;if(this.allowSleep)for(N=!1,v=0;v!==s;v++){const R=r[v];R.sleepTick(this.time),R.sleepState!==be.SLEEPING&&(N=!0)}this.hasActiveBodies=N}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff($n,Jn),e){for(let s=0,r=$n.length;s<r;s+=2)nr.bodyA=this.getBodyById($n[s]),nr.bodyB=this.getBodyById($n[s+1]),this.dispatchEvent(nr);nr.bodyA=nr.bodyB=null}if(t){for(let s=0,r=Jn.length;s<r;s+=2)ir.bodyA=this.getBodyById(Jn[s]),ir.bodyB=this.getBodyById(Jn[s+1]),this.dispatchEvent(ir);ir.bodyA=ir.bodyB=null}$n.length=Jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff($n,Jn),n){for(let s=0,r=$n.length;s<r;s+=2){const a=this.getShapeById($n[s]),l=this.getShapeById($n[s+1]);ei.shapeA=a,ei.shapeB=l,a&&(ei.bodyA=a.body),l&&(ei.bodyB=l.body),this.dispatchEvent(ei)}ei.bodyA=ei.bodyB=ei.shapeA=ei.shapeB=null}if(i){for(let s=0,r=Jn.length;s<r;s+=2){const a=this.getShapeById(Jn[s]),l=this.getShapeById(Jn[s+1]);ti.shapeA=a,ti.shapeB=l,a&&(ti.bodyA=a.body),l&&(ti.bodyB=l.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Tt;const Ha=new Dt,Lt=globalThis.performance||{};if(!Lt.now){let o=Date.now();Lt.timing&&Lt.timing.navigationStart&&(o=Lt.timing.navigationStart),Lt.now=()=>Date.now()-o}new w;const hM={type:"postStep"},uM={type:"preStep"},tr={type:be.COLLIDE_EVENT_NAME,body:null,contact:null},dM=[],fM=[],pM=[],mM=[],$n=[],Jn=[],nr={type:"beginContact",bodyA:null,bodyB:null},ir={type:"endContact",bodyA:null,bodyB:null},ei={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ti={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},YM="3921 W Sheffield Ave, Chandler, AZ 85226";function QM(o){o.controls.minPolarAngle=0,o.controls.maxPolarAngle=Math.PI/2.9,o.controls.minDistance=1.7,o.controls.maxDistance=5.2,o.controls.screenSpacePanning=!1}const jM=[{path:"./Splat/externalview.ksplat",label:"Orbit View",initialCameraPosition:[1.13847,.99612,-2.29371],initialCameraLookAt:[.30026,-.07211,-.74364]},{path:"./Splat/floorplan.ksplat",label:"Floorplan View",initialCameraPosition:[-2.06649,3.04536,-2.57555],initialCameraLookAt:[.07765,-.43193,.02626]}],KM={"./Splat/externalview.ksplat":[],"./Splat/floorplan.ksplat":[{text:"Living Room",pos:[1.5281,.155,.77332]},{text:"Kitchen",pos:[.62549,.155,.93695]},{text:"Office",pos:[.13904,.155,-1.1343]},{text:"Bedroom 1",pos:[-1.3773,.155,-.69722]},{text:"Bedroom 2",pos:[-1.3799,.155,.13413]},{text:"Master Bed",pos:[-.27992,.155,.79506]},{text:"Master Bath",pos:[-1.164,.155,1.2371]},{text:"Laundry",pos:[-.57862,.155,-1.081]},{text:"Entry Area",pos:[1.4584,.155,-1.3204]},{text:"Guest Bath",pos:[.045649,.155,-.41592]}]},ZM=1.18,$M=new gt(-.06325,-1.21291,-.05925),gM=new be({mass:1,position:new w(-1.31077,-.25243,-.84634)});gM.addShape(new zS(.2));const JM=[{path:"./Splat/FrontYard.ksplat",splatAlphaRemovalThreshold:0,progressiveLoad:!1,rotation:[1,0,0,0]}],eE=[{name:"FrontToInside",position:new D(6.0614,.8,-4.7398),rotation:new gt(0,Math.PI/2,0),groupKey:"group2",targetPosition:new D(-19.53065,.09059,117.66714),targetRotation:new gt(-.19531,-.05251,-.01038)},{name:"InsideToFront",position:new D(-19.307,1.1,118.13),rotation:new gt(0,Math.PI/1,0),groupKey:"group1",targetPosition:new D(5.88715,-.25243,-4.84869),targetRotation:new gt(-1.80266,1.38683,1.80649)},{name:"FrontToBack",position:new D(2.9076,.8,3.1375),rotation:new gt(0,Math.PI/1,0),groupKey:"group8",targetPosition:new D(4.74418,-.20531,-106.36395),targetRotation:new gt(-.11801,-.01232,-.00146)},{name:"BackToFront",position:new D(4.8599,.8,-105.46),rotation:new gt(0,Math.PI/1,0),groupKey:"group1",targetPosition:new D(2.93457,-.25243,2.424),targetRotation:new gt(-.16517,.11092,.01845)},{name:"BackToInside",position:new D(-6.1366,.8,-114.38),rotation:new gt(0,Math.PI/1,0),groupKey:"group2",targetPosition:new D(-21.21988,.05668,110.5427),targetRotation:new gt(-3.03746,-.06038,-3.13529)},{name:"InsideToBack",position:new D(-21.156,1.1,110.43),rotation:new gt(0,Math.PI/1,0),groupKey:"group8",targetPosition:new D(-6.28755,-.20531,-114.5146),targetRotation:new gt(-.13701,.04934,.0068)},{name:"BackToMaster",position:new D(-1.6653,.8,-115.25),rotation:new gt(0,Math.PI/1,0),groupKey:"group2",targetPosition:new D(-15.87097,.05668,109.68405),targetRotation:new gt(-3.10594,-.01391,-3.1411)},{name:"MasterToBack",position:new D(-16.097,1.1,109.61),rotation:new gt(0,Math.PI/1,0),groupKey:"group8",targetPosition:new D(-1.72191,-.20531,-115.57028),targetRotation:new gt(-.14607,.03008,.00443)}],tE={group1:[{name:"front",path:"./Splat/FrontYard.ksplat"}],group2:[{name:"interior",path:"./Splat/Interior.ksplat"}],group8:[{name:"backyard",path:"./Splat/BackYard.ksplat"}]},nE=[];export{DM as $,HM as A,be as B,Ke as C,Ol as D,gt as E,Ql as F,Me as G,vn as H,ZM as I,vM as J,AM as K,yM as L,Re as M,Mr as N,zM as O,Ls as P,FM as Q,La as R,Sv as S,LM as T,Os as U,Nl as V,XM as W,UM as X,NM as Y,OM as Z,xn as _,dr as a,bM as a0,bl as a1,xt as a2,kM as a3,dn as a4,TM as a5,Nn as a6,Yi as a7,Za as a8,un as a9,zn as aA,wd as aB,qt as aC,bo as aD,wo as aE,Ho as aF,ci as aG,ko as aH,zs as aI,Ai as aJ,Zh as aK,wv as aa,Ki as ab,Tv as ac,bv as ad,pt as ae,sn as af,wM as ag,RM as ah,Rd as ai,IM as aj,PM as ak,or as al,ud as am,Oo as an,bd as ao,BM as ap,Mv as aq,Cl as ar,it as as,Et as at,Pf as au,Xo as av,br as aw,Xi as ax,$a as ay,Mo as az,D as b,QM as c,GM as d,YM as e,w as f,eE as g,$i as h,JM as i,Ji as j,zl as k,Mt as l,bi as m,zS as n,$M as o,gM as p,Sr as q,KM as r,jM as s,nE as t,cn as u,xc as v,tE as w,qM as x,Av as y,tn as z};
