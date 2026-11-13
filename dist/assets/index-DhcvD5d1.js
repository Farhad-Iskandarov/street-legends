(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="170",Nl=0,mo=1,Fl=2,zc=1,Ya=2,Tn=3,bn=0,kt=1,Yt=2,Vn=0,bi=1,ta=2,go=3,_o=4,kl=5,ii=100,Ol=101,Bl=102,Hl=103,Gl=104,zl=200,Vl=201,Wl=202,Xl=203,na=204,ia=205,Kl=206,ql=207,Yl=208,jl=209,$l=210,Zl=211,Jl=212,Ql=213,eh=214,sa=0,ra=1,aa=2,Ii=3,oa=4,ca=5,la=6,ha=7,Vc=0,th=1,nh=2,Wn=0,ih=1,sh=2,rh=3,ah=4,oh=5,ch=6,lh=7,xo="attached",hh="detached",Wc=300,Di=301,Ui=302,ua=303,da=304,fr=306,Ni=1e3,Gn=1001,or=1002,Dt=1003,Xc=1004,os=1005,Tt=1006,er=1007,hn=1008,Rn=1009,Kc=1010,qc=1011,fs=1012,ja=1013,ri=1014,sn=1015,ys=1016,$a=1017,Za=1018,Fi=1020,Yc=35902,jc=1021,$c=1022,jt=1023,Zc=1024,Jc=1025,Ri=1026,ki=1027,Ja=1028,Qa=1029,Qc=1030,eo=1031,to=1033,tr=33776,nr=33777,ir=33778,sr=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,xa=37492,va=37496,ya=37808,Ma=37809,Sa=37810,Ta=37811,Ea=37812,wa=37813,Aa=37814,ba=37815,Ra=37816,Ca=37817,Pa=37818,La=37819,Ia=37820,Da=37821,rr=36492,Ua=36494,Na=36495,el=36283,Fa=36284,ka=36285,Oa=36286,ps=2300,ms=2301,xr=2302,vo=2400,yo=2401,Mo=2402,uh=2500,dh=0,tl=1,Ba=2,fh=3200,ph=3201,nl=0,mh=1,Hn="",pt="srgb",Nt="srgb-linear",pr="linear",it="srgb",ui=7680,So=519,gh=512,_h=513,xh=514,il=515,vh=516,yh=517,Mh=518,Sh=519,Ha=35044,To="300 es",wn=2e3,cr=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const hs=Math.PI/180,Oi=180/Math.PI;function rn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function no(r,e){return(r%e+e)%e}function Th(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Eh(r,e,t){return r!==e?(t-r)/(e-r):0}function us(r,e,t){return(1-t)*r+t*e}function wh(r,e,t,n){return us(r,e,1-Math.exp(-t*n))}function Ah(r,e=1){return e-Math.abs(no(r,e*2)-e)}function bh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Rh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ch(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ph(r,e){return r+Math.random()*(e-r)}function Lh(r){return r*(.5-Math.random())}function Ih(r){r!==void 0&&(Eo=r);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dh(r){return r*hs}function Uh(r){return r*Oi}function Nh(r){return(r&r-1)===0&&r!==0}function Fh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Oh(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ga={DEG2RAD:hs,RAD2DEG:Oi,generateUUID:rn,clamp:Rt,euclideanModulo:no,mapLinear:Th,inverseLerp:Eh,lerp:us,damp:wh,pingpong:Ah,smoothstep:bh,smootherstep:Rh,randInt:Ch,randFloat:Ph,randFloatSpread:Lh,seededRandom:Ih,degToRad:Dh,radToDeg:Uh,isPowerOfTwo:Nh,ceilPowerOfTwo:Fh,floorPowerOfTwo:kh,setQuaternionFromProperEuler:Oh,normalize:et,denormalize:tn};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,i,s,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],E=i[4],y=i[7],C=i[2],b=i[5],A=i[8];return s[0]=a*_+o*T+c*C,s[3]=a*m+o*E+c*b,s[6]=a*p+o*y+c*A,s[1]=l*_+h*T+u*C,s[4]=l*m+h*E+u*b,s[7]=l*p+h*y+u*A,s[2]=d*_+f*T+g*C,s[5]=d*m+f*E+g*b,s[8]=d*p+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vr.makeScale(e,t)),this}rotate(e){return this.premultiply(vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new Ie;function sl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bh(){const r=gs("canvas");return r.style.display="block",r}const wo={};function cs(r){r in wo||(wo[r]=!0,console.warn(r))}function Hh(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Gh(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zh(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(r.r=An(r.r),r.g=An(r.g),r.b=An(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hn?pr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function An(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ci(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ao=[.64,.33,.3,.6,.15,.06],bo=[.2126,.7152,.0722],Ro=[.3127,.329],Co=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Nt]:{primaries:Ao,whitePoint:Ro,transfer:pr,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:bo,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:Ao,whitePoint:Ro,transfer:it,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:bo,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}});let di;class Vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=gs("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=An(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(yr(i[a].image)):s.push(yr(i[a]))}else s=yr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function yr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xh=0;class vt extends Vi{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Gn,i=Gn,s=Tt,a=hn,o=jt,c=Rn,l=vt.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=rn(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Wc;vt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(f+1)/2,C=(p+1)/2,b=(h+d)/4,A=(u+_)/4,P=(g+m)/4;return E>y&&E>C?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=b/n,s=A/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class al extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),b=Math.atan2(C,p*T);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}const y=o*T;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new L,Lo=new Kn;class Cn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),bs.subVectors(this.max,Ji),fi.subVectors(e.a,Ji),pi.subVectors(e.b,Ji),mi.subVectors(e.c,Ji),Dn.subVectors(pi,fi),Un.subVectors(mi,pi),Yn.subVectors(fi,mi);let t=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Yn.z,Yn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Yn.z,0,-Yn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Yn.y,Yn.x,0];return!Sr(t,fi,pi,mi,bs)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,fi,pi,mi,bs))?!1:(Rs.crossVectors(Dn,Un),t=[Rs.x,Rs.y,Rs.z],Sr(t,fi,pi,mi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new L,new L,new L,new L,new L,new L,new L,new L],Zt=new L,As=new Cn,fi=new L,pi=new L,mi=new L,Dn=new L,Un=new L,Yn=new L,Ji=new L,bs=new L,Rs=new L,jn=new L;function Sr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){jn.fromArray(r,s);const o=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),c=e.dot(jn),l=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Yh=new Cn,Qi=new L,Tr=new L;class fn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Tr)),this.expandByPoint(Qi.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new L,Er=new L,Cs=new L,Nn=new L,wr=new L,Ps=new L,Ar=new L;class mr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Er.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Er);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Nn.dot(this.direction),c=-Nn.dot(Cs),l=Nn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Er).addScaledVector(Cs,d),f}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,i,s){wr.subVectors(t,e),Ps.subVectors(n,e),Ar.crossVectors(wr,Ps);let a=this.direction.dot(Ar),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const c=o*this.direction.dot(Ps.crossVectors(Nn,Ps));if(c<0)return null;const l=o*this.direction.dot(wr.cross(Nn));if(l<0||c+l>a)return null;const h=-o*Nn.dot(Ar);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,$h)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Fn.crossVectors(n,Ht),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Fn.crossVectors(n,Ht)),Fn.normalize(),Ls.crossVectors(Ht,Fn),i[0]=Fn.x,i[4]=Ls.x,i[8]=Ht.x,i[1]=Fn.y,i[5]=Ls.y,i[9]=Ht.y,i[2]=Fn.z,i[6]=Ls.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],y=n[11],C=n[15],b=i[0],A=i[4],P=i[8],S=i[12],v=i[1],R=i[5],F=i[9],O=i[13],X=i[2],V=i[6],W=i[10],Z=i[14],z=i[3],ie=i[7],fe=i[11],ve=i[15];return s[0]=a*b+o*v+c*X+l*z,s[4]=a*A+o*R+c*V+l*ie,s[8]=a*P+o*F+c*W+l*fe,s[12]=a*S+o*O+c*Z+l*ve,s[1]=h*b+u*v+d*X+f*z,s[5]=h*A+u*R+d*V+f*ie,s[9]=h*P+u*F+d*W+f*fe,s[13]=h*S+u*O+d*Z+f*ve,s[2]=g*b+_*v+m*X+p*z,s[6]=g*A+_*R+m*V+p*ie,s[10]=g*P+_*F+m*W+p*fe,s[14]=g*S+_*O+m*Z+p*ve,s[3]=T*b+E*v+y*X+C*z,s[7]=T*A+E*R+y*V+C*ie,s[11]=T*P+E*F+y*W+C*fe,s[15]=T*S+E*O+y*Z+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+_*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,E=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,y=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,C=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,b=t*T+n*E+i*y+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=T*A,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*p+n*c*p)*A,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*A,e[4]=E*A,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*A,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*f+t*c*f)*A,e[8]=y*A,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*A,e[12]=C*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,T=c*l,E=c*h,y=c*u,C=n.x,b=n.y,A=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+y)*C,i[2]=(g-E)*C,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+p))*b,i[6]=(m+T)*b,i[7]=0,i[8]=(g+E)*A,i[9]=(m-T)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gi.set(i[0],i[1],i[2]).length();const a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Jt.copy(this);const l=1/s,h=1/a,u=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=wn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===wn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===cr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=wn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(o===wn)g=(a+s)*u,_=-2*u;else if(o===cr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new L,Jt=new De,jh=new L(0,0,0),$h=new L(1,1,1),Fn=new L,Ls=new L,Ht=new L,Io=new De,Do=new Kn;class dn{constructor(e=0,t=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const Uo=new L,_i=new Kn,vn=new De,Is=new L,es=new L,Jh=new L,Qh=new Kn,No=new L(1,0,0),Fo=new L(0,1,0),ko=new L(0,0,1),Oo={type:"added"},eu={type:"removed"},xi={type:"childadded",child:null},br={type:"childremoved",child:null};class ut extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new L,t=new dn,n=new Kn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Ie}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(es,Is,this.up):vn.lookAt(Is,es,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(vn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oo),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eu),br.child=e,this.dispatchEvent(br),br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oo),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new L(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new L,yn=new L,Rr=new L,Mn=new L,vi=new L,yi=new L,Bo=new L,Cr=new L,Pr=new L,Lr=new L,Ir=new $e,Dr=new $e,Ur=new $e;class nn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qt.subVectors(i,t),yn.subVectors(n,t),Rr.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(yn),c=Qt.dot(Rr),l=yn.dot(yn),h=yn.dot(Rr),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ir.setScalar(0),Dr.setScalar(0),Ur.setScalar(0),Ir.fromBufferAttribute(e,t),Dr.fromBufferAttribute(e,n),Ur.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ir,s.x),a.addScaledVector(Dr,s.y),a.addScaledVector(Ur,s.z),a}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),yn.subVectors(e,t),Qt.cross(yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;vi.subVectors(i,n),yi.subVectors(s,n),Cr.subVectors(e,n);const c=vi.dot(Cr),l=yi.dot(Cr);if(c<=0&&l<=0)return t.copy(n);Pr.subVectors(e,i);const h=vi.dot(Pr),u=yi.dot(Pr);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(vi,a);Lr.subVectors(e,s);const f=vi.dot(Lr),g=yi.dot(Lr);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(yi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Bo.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Bo,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(vi,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Nr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=no(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Nr(a,s,e+1/3),this.g=Nr(a,s,e),this.b=Nr(a,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return We.fromWorkingColorSpace(bt.copy(this),e),Math.round(Rt(bt.r*255,0,255))*65536+Math.round(Rt(bt.g*255,0,255))*256+Math.round(Rt(bt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,s=bt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=pt){We.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Ds);const n=us(kn.h,Ds.h,t),i=us(kn.s,Ds.s,t),s=us(kn.l,Ds.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new we;we.NAMES=cl;let tu=0;class un extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=rn(),this.name="",this.blending=bi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ht extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new L,Us=new Ge;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class ll extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hl extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nu=0;const Xt=new De,Fr=new ut,Mi=new L,Gt=new Cn,ts=new Cn,St=new L;class zt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?hl:ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,ts.min),Gt.expandByPoint(St),St.addVectors(Gt.max,ts.max),Gt.expandByPoint(St)):(Gt.expandByPoint(ts.min),Gt.expandByPoint(ts.max))}Gt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),c&&(Mi.fromBufferAttribute(e,l),St.add(Mi)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new L,c[P]=new L;const l=new L,h=new L,u=new L,d=new Ge,f=new Ge,g=new Ge,_=new L,m=new L;function p(P,S,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(_),o[S].add(_),o[v].add(_),c[P].add(m),c[S].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,S=T.length;P<S;++P){const v=T[P],R=v.start,F=v.count;for(let O=R,X=R+F;O<X;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new L,y=new L,C=new L,b=new L;function A(P){C.fromBufferAttribute(i,P),b.copy(C);const S=o[P];E.copy(S),E.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(b,S);const R=y.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,S=T.length;P<S;++P){const v=T[P],R=v.start,F=v.count;for(let O=R,X=R+F;O<X;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new De,$n=new mr,Ns=new fn,Go=new L,Fs=new L,ks=new L,Os=new L,kr=new L,Bs=new L,zo=new L,Hs=new L;class J extends ut{constructor(e=new zt,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Bs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(kr.fromBufferAttribute(u,e),a?Bs.addScaledVector(kr,h):Bs.addScaledVector(kr.sub(t),h))}t.add(Bs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Ns.containsPoint($n.origin)===!1&&($n.intersectSphere(Ns,Go)===null||$n.origin.distanceToSquared(Go)>(e.far-e.near)**2))&&(Ho.copy(s).invert(),$n.copy(e.ray).applyMatrix4(Ho),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,C=E;y<C;y+=3){const b=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);i=Gs(this,p,e,n,l,h,u,b,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);i=Gs(this,a,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,C=E;y<C;y+=3){const b=y,A=y+1,P=y+2;i=Gs(this,p,e,n,l,h,u,b,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,y=m+2;i=Gs(this,a,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function iu(r,e,t,n,i,s,a,o){let c;if(e.side===kt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===bn,o),c===null)return null;Hs.copy(o),Hs.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Hs);return l<t.near||l>t.far?null:{distance:l,point:Hs.clone(),object:r}}function Gs(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Fs),r.getVertexPosition(c,ks),r.getVertexPosition(l,Os);const h=iu(r,e,t,n,Fs,ks,Os,zo);if(h){const u=new L;nn.getBarycoord(zo,Fs,ks,Os,u),i&&(h.uv=nn.getInterpolatedAttribute(i,o,c,l,u,new Ge)),s&&(h.uv1=nn.getInterpolatedAttribute(s,o,c,l,u,new Ge)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};nn.getNormal(Fs,ks,Os,d.normal),h.face=d,h.barycoord=u}return h}class _t extends zt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2));function g(_,m,p,T,E,y,C,b,A,P,S){const v=y/A,R=C/P,F=y/2,O=C/2,X=b/2,V=A+1,W=P+1;let Z=0,z=0;const ie=new L;for(let fe=0;fe<W;fe++){const ve=fe*R-O;for(let Ue=0;Ue<V;Ue++){const Ze=Ue*v-F;ie[_]=Ze*T,ie[m]=ve*E,ie[p]=X,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=b>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ue/A),u.push(1-fe/P),Z+=1}}for(let fe=0;fe<P;fe++)for(let ve=0;ve<A;ve++){const Ue=d+ve+V*fe,Ze=d+ve+V*(fe+1),q=d+(ve+1)+V*(fe+1),ee=d+(ve+1)+V*fe;c.push(Ue,Ze,ee),c.push(Ze,q,ee),z+=6}o.addGroup(f,z,S),f+=z,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(r){const e={};for(let t=0;t<r.length;t++){const n=Bi(r[t]);for(const i in n)e[i]=n[i]}return e}function su(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ul(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const ru={clone:Bi,merge:It};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dl extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new L,Vo=new Ge,Wo=new Ge;class Ct extends dl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,Vo,Wo),t.subVectors(Wo,Vo)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Ti=1;class cu extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ct(Si,Ti,e,t);i.layers=this.layers,this.add(i);const s=new Ct(Si,Ti,e,t);s.layers=this.layers,this.add(s);const a=new Ct(Si,Ti,e,t);a.layers=this.layers,this.add(a);const o=new Ct(Si,Ti,e,t);o.layers=this.layers,this.add(o);const c=new Ct(Si,Ti,e,t);c.layers=this.layers,this.add(c);const l=new Ct(Si,Ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fl extends vt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lu extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _t(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new J(i,s),o=t.minFilter;return t.minFilter===hn&&(t.minFilter=Tt),new cu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Or=new L,hu=new L,uu=new Ie;class ti{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Or.subVectors(n,t).cross(hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Or),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uu.getNormalMatrix(e),i=this.coplanarPoint(Or).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new fn,zs=new L;class io{constructor(e=new ti,t=new ti,n=new ti,i=new ti,s=new ti,a=new ti){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],E=i[14],y=i[15];if(n[0].setComponents(c-s,d-l,m-f,y-p).normalize(),n[1].setComponents(c+s,d+l,m+f,y+p).normalize(),n[2].setComponents(c+a,d+h,m+g,y+T).normalize(),n[3].setComponents(c-a,d-h,m-g,y-T).normalize(),n[4].setComponents(c-o,d-u,m-_,y-E).normalize(),t===wn)n[5].setComponents(c+o,d+u,m+_,y+E).normalize();else if(t===cr)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zs.x=i.normal.x>0?e.max.x:e.min.x,zs.y=i.normal.y>0?e.max.y:e.min.y,zs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function du(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class cn extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*d-a;for(let E=0;E<l;E++){const y=E*u-s;g.push(y,-T,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const E=T+l*p,y=T+l*(p+1),C=T+1+l*(p+1),b=T+1+l*p;f.push(E,y,b),f.push(y,C,b)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}var fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
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
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vu=`#ifdef USE_AOMAP
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
#endif`,yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mu=`#ifdef USE_BATCHING
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
#endif`,Su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Au=`#ifdef USE_IRIDESCENCE
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
#endif`,bu=`#ifdef USE_BUMPMAP
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fu=`#define PI 3.141592653589793
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
} // validated`,ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ou=`vec3 transformedNormal = objectNormal;
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
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
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
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
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
#endif`,ud=`struct PhysicalMaterial {
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
}`,dd=`
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zd=`float getShadowMask() {
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
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`#include <common>
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
}`,yf=`#if DEPTH_PACKING == 3200
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
}`,Mf=`#define DISTANCE
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
}`,Sf=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Af=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#define LAMBERT
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
}`,Pf=`#define LAMBERT
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
}`,Lf=`#define MATCAP
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
}`,If=`#define MATCAP
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
}`,Df=`#define NORMAL
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
}`,Uf=`#define NORMAL
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
}`,Nf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,Hf=`#define TOON
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
}`,Gf=`uniform float size;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Wf=`uniform vec3 color;
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
}`,Xf=`uniform float rotation;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:fu,alphahash_pars_fragment:pu,alphamap_fragment:mu,alphamap_pars_fragment:gu,alphatest_fragment:_u,alphatest_pars_fragment:xu,aomap_fragment:vu,aomap_pars_fragment:yu,batching_pars_vertex:Mu,batching_vertex:Su,begin_vertex:Tu,beginnormal_vertex:Eu,bsdfs:wu,iridescence_fragment:Au,bumpmap_pars_fragment:bu,clipping_planes_fragment:Ru,clipping_planes_pars_fragment:Cu,clipping_planes_pars_vertex:Pu,clipping_planes_vertex:Lu,color_fragment:Iu,color_pars_fragment:Du,color_pars_vertex:Uu,color_vertex:Nu,common:Fu,cube_uv_reflection_fragment:ku,defaultnormal_vertex:Ou,displacementmap_pars_vertex:Bu,displacementmap_vertex:Hu,emissivemap_fragment:Gu,emissivemap_pars_fragment:zu,colorspace_fragment:Vu,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:Ku,envmap_pars_fragment:qu,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:rd,envmap_vertex:ju,fog_vertex:$u,fog_pars_vertex:Zu,fog_fragment:Ju,fog_pars_fragment:Qu,gradientmap_pars_fragment:ed,lightmap_pars_fragment:td,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:cd,lights_phong_pars_fragment:ld,lights_physical_fragment:hd,lights_physical_pars_fragment:ud,lights_fragment_begin:dd,lights_fragment_maps:fd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:xd,map_fragment:vd,map_pars_fragment:yd,map_particle_fragment:Md,map_particle_pars_fragment:Sd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ed,morphinstance_vertex:wd,morphcolor_vertex:Ad,morphnormal_vertex:bd,morphtarget_pars_vertex:Rd,morphtarget_vertex:Cd,normal_fragment_begin:Pd,normal_fragment_maps:Ld,normal_pars_fragment:Id,normal_pars_vertex:Dd,normal_vertex:Ud,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:Hd,packing:Gd,premultiplied_alpha_fragment:zd,project_vertex:Vd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:jd,shadowmap_vertex:$d,shadowmask_pars_fragment:Zd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:cf,uv_pars_fragment:lf,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:df,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:xf,depth_vert:vf,depth_frag:yf,distanceRGBA_vert:Mf,distanceRGBA_frag:Sf,equirect_vert:Tf,equirect_frag:Ef,linedashed_vert:wf,linedashed_frag:Af,meshbasic_vert:bf,meshbasic_frag:Rf,meshlambert_vert:Cf,meshlambert_frag:Pf,meshmatcap_vert:Lf,meshmatcap_frag:If,meshnormal_vert:Df,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:kf,meshphysical_frag:Of,meshtoon_vert:Bf,meshtoon_frag:Hf,points_vert:Gf,points_frag:zf,shadow_vert:Vf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:Kf},re={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},on={basic:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:It([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:It([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:It([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:It([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:It([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:It([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:It([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:It([re.lights,re.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};on.physical={uniforms:It([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Vs={r:0,b:0,g:0},Jn=new dn,qf=new De;function Yf(r,e,t,n,i,s,a){const o=new we(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function _(T){let E=!1;const y=g(T);y===null?p(o,c):y&&y.isColor&&(p(y,1),E=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===fr)?(h===void 0&&(h=new J(new _t(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Bi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Jn.copy(E.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(Jn)),h.material.toneMapped=We.getTransfer(y.colorSpace)!==it,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new J(new cn(2,2),new Xn({name:"BackgroundMaterial",uniforms:Bi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=We.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,E){T.getRGB(Vs,ul(r)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:_,addToRenderList:m}}function jf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(v,R,F,O,X){let V=!1;const W=u(O,F,R);s!==W&&(s=W,l(s.object)),V=f(v,O,F,X),V&&g(v,O,F,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(v,R,F,O),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return r.createVertexArray()}function l(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,R,F){const O=F.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let V=X[R.id];V===void 0&&(V={},X[R.id]=V);let W=V[O];return W===void 0&&(W=d(c()),V[O]=W),W}function d(v){const R=[],F=[],O=[];for(let X=0;X<t;X++)R[X]=0,F[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,R,F,O){const X=s.attributes,V=R.attributes;let W=0;const Z=F.getAttributes();for(const z in Z)if(Z[z].location>=0){const fe=X[z];let ve=V[z];if(ve===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function g(v,R,F,O){const X={},V=R.attributes;let W=0;const Z=F.getAttributes();for(const z in Z)if(Z[z].location>=0){let fe=V[z];fe===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),X[z]=ve,W++}s.attributes=X,s.attributesNum=W,s.index=O}function _(){const v=s.newAttributes;for(let R=0,F=v.length;R<F;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const F=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;F[v]=1,O[v]===0&&(r.enableVertexAttribArray(v),O[v]=1),X[v]!==R&&(r.vertexAttribDivisor(v,R),X[v]=R)}function T(){const v=s.newAttributes,R=s.enabledAttributes;for(let F=0,O=R.length;F<O;F++)R[F]!==v[F]&&(r.disableVertexAttribArray(F),R[F]=0)}function E(v,R,F,O,X,V,W){W===!0?r.vertexAttribIPointer(v,R,F,X,V):r.vertexAttribPointer(v,R,F,O,X,V)}function y(v,R,F,O){_();const X=O.attributes,V=F.getAttributes(),W=R.defaultAttributeValues;for(const Z in V){const z=V[Z];if(z.location>=0){let ie=X[Z];if(ie===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),ie!==void 0){const fe=ie.normalized,ve=ie.itemSize,Ue=e.get(ie);if(Ue===void 0)continue;const Ze=Ue.buffer,q=Ue.type,ee=Ue.bytesPerElement,pe=q===r.INT||q===r.UNSIGNED_INT||ie.gpuType===ja;if(ie.isInterleavedBufferAttribute){const ae=ie.data,Te=ae.stride,be=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)p(z.location+Ne,ae.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)m(z.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<z.locationSize;Ne++)E(z.location+Ne,ve/z.locationSize,q,fe,Te*ee,(be+ve/z.locationSize*Ne)*ee,pe)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,ie.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<z.locationSize;ae++)m(z.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let ae=0;ae<z.locationSize;ae++)E(z.location+ae,ve/z.locationSize,q,fe,ve*ee,ve/z.locationSize*ae*ee,pe)}}else if(W!==void 0){const fe=W[Z];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(z.location,fe);break;case 3:r.vertexAttrib3fv(z.location,fe);break;case 4:r.vertexAttrib4fv(z.location,fe);break;default:r.vertexAttrib1fv(z.location,fe)}}}}T()}function C(){P();for(const v in n){const R=n[v];for(const F in R){const O=R[F];for(const X in O)h(O[X].object),delete O[X];delete R[F]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const F in R){const O=R[F];for(const X in O)h(O[X].object),delete O[X];delete R[F]}delete n[v.id]}function A(v){for(const R in n){const F=n[R];if(F[v.id]===void 0)continue;const O=F[v.id];for(const X in O)h(O[X].object),delete O[X];delete F[v.id]}}function P(){S(),a=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function $f(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Zf(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==jt&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Rn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:C,maxSamples:b}}function Jf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ti,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const T=s?0:n,E=T*4;let y=p.clippingState||null;c.value=y,y=h(g,d,E,f);for(let C=0;C!==E;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(u[E]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Qf(r){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=Di:o===da&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===da)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new lu(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class so extends dl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Xo=[.125,.215,.35,.446,.526,.582],si=20,Br=new so,Ko=new we;let Hr=null,Gr=0,zr=0,Vr=!1;const ni=(1+Math.sqrt(5))/2,Ei=1/ni,qo=[new L(-ni,Ei,0),new L(ni,Ei,0),new L(-Ei,0,ni),new L(Ei,0,ni),new L(0,ni,-Ei),new L(0,ni,Ei),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr,Gr,zr),this._renderer.xr.enabled=Vr,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:ys,format:jt,colorSpace:Nt,depthBuffer:!1},i=jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(s)),this._blurMaterial=tp(s,e,t)}return i}_compileMaterial(e){const t=new J(this._lodPlanes[0],e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,i){const o=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ko),h.toneMapping=Wn,h.autoClear=!1;const f=new ht({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new J(new _t,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Ko),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):T===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const E=this._cubeSize;Ws(i,T*E,p>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new J(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ws(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qo[(i-s-1)%qo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new J(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*si-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):si;m>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const p=[];let T=0;for(let A=0;A<si;++A){const P=A/_,S=Math.exp(-P*P/2);p.push(S),A===0?T+=S:A<m&&(T+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[i],C=3*y*(i>E-Ai?i-E+Ai:0),b=4*(this._cubeSize-y);Ws(t,C,b,3*y,2*y),c.setRenderTarget(t),c.render(u,Br)}}function ep(r){const e=[],t=[],n=[];let i=r;const s=r-Ai+1+Xo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Ai?c=Xo[a-r+Ai-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),E=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,P=b>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];T.set(S,_*g*b),E.set(d,m*g*b);const v=[b,b,b,b,b,b];y.set(v,p*g*b)}const C=new zt;C.setAttribute("position",new Ut(T,_)),C.setAttribute("uv",new Ut(E,m)),C.setAttribute("faceIndex",new Ut(y,p)),e.push(C),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jo(r,e,t){const n=new ai(r,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tp(r,e,t){const n=new Float32Array(si),i=new L(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $o(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zo(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ro(){return`

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
	`}function np(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ua||c===da,h=c===Di||c===Ui;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Yo(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Yo(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ip(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sp(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,y=T.length;E<y;E+=3){const C=T[E+0],b=T[E+1],A=T[E+2];d.push(C,b,b,A,A,C)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const C=E+0,b=E+1,A=E+2;d.push(C,b,b,A,A,C)}}else return;const m=new(sl(d)?hl:ll)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function rp(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ap(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function op(r,e,t){const n=new WeakMap,i=new $e;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*u),P=new al(A,C,b,u);P.type=sn,P.needsUpdate=!0;const S=y*4;for(let R=0;R<u;R++){const F=p[R],O=T[R],X=E[R],V=C*b*4*R;for(let W=0;W<F.count;W++){const Z=W*S;g===!0&&(i.fromBufferAttribute(F,W),A[V+Z+0]=i.x,A[V+Z+1]=i.y,A[V+Z+2]=i.z,A[V+Z+3]=0),_===!0&&(i.fromBufferAttribute(O,W),A[V+Z+4]=i.x,A[V+Z+5]=i.y,A[V+Z+6]=i.z,A[V+Z+7]=0),m===!0&&(i.fromBufferAttribute(X,W),A[V+Z+8]=i.x,A[V+Z+9]=i.y,A[V+Z+10]=i.z,A[V+Z+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Ge(C,b)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function cp(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class ml extends vt{constructor(e,t,n,i,s,a,o,c,l,h=Ri){if(h!==Ri&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=ri),n===void 0&&h===ki&&(n=Fi),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gl=new vt,Jo=new ml(1,1),_l=new al,xl=new qh,vl=new fl,Qo=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function Wi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qo[i];if(s===void 0&&(s=new Float32Array(i),Qo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gr(r,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function lp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function fp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;ic.set(n),r.uniformMatrix2fv(this.addr,!1,ic),Mt(t,n)}}function pp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;nc.set(n),r.uniformMatrix3fv(this.addr,!1,nc),Mt(t,n)}}function mp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;tc.set(n),r.uniformMatrix4fv(this.addr,!1,tc),Mt(t,n)}}function gp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function yp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function Sp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function Tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function Ep(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jo.compareFunction=il,s=Jo):s=gl,t.setTexture2D(e||s,i)}function wp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xl,i)}function Ap(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vl,i)}function bp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_l,i)}function Rp(r){switch(r){case 5126:return lp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return xp;case 35669:case 35673:return vp;case 5125:return yp;case 36294:return Mp;case 36295:return Sp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return bp}}function Cp(r,e){r.uniform1fv(this.addr,e)}function Pp(r,e){const t=Wi(e,this.size,2);r.uniform2fv(this.addr,t)}function Lp(r,e){const t=Wi(e,this.size,3);r.uniform3fv(this.addr,t)}function Ip(r,e){const t=Wi(e,this.size,4);r.uniform4fv(this.addr,t)}function Dp(r,e){const t=Wi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Up(r,e){const t=Wi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Np(r,e){const t=Wi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fp(r,e){r.uniform1iv(this.addr,e)}function kp(r,e){r.uniform2iv(this.addr,e)}function Op(r,e){r.uniform3iv(this.addr,e)}function Bp(r,e){r.uniform4iv(this.addr,e)}function Hp(r,e){r.uniform1uiv(this.addr,e)}function Gp(r,e){r.uniform2uiv(this.addr,e)}function zp(r,e){r.uniform3uiv(this.addr,e)}function Vp(r,e){r.uniform4uiv(this.addr,e)}function Wp(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gl,s[a])}function Xp(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xl,s[a])}function Kp(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vl,s[a])}function qp(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_l,s[a])}function Yp(r){switch(r){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Ip;case 35674:return Dp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return kp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return Hp;case 36294:return Gp;case 36295:return zp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return qp}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rp(t.type)}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}}class Zp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function sc(r,e){r.seq.push(e),r.map[e.id]=e}function Jp(r,e,t){const n=r.name,i=n.length;for(Wr.lastIndex=0;;){const s=Wr.exec(n),a=Wr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){sc(t,l===void 0?new jp(o,r,e):new $p(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Zp(o),sc(t,u)),t=u}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Jp(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function rc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Qp=37297;let em=0;function tm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ac=new Ie;function nm(r){We._getMatrix(ac,We.workingColorSpace,r);const e=`mat3( ${ac.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case pr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function oc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+tm(r.getShaderSource(e),a)}else return i}function im(r,e){const t=nm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sm(r,e){let t;switch(e){case ih:t="Linear";break;case sh:t="Reinhard";break;case rh:t="Cineon";break;case ah:t="ACESFilmic";break;case ch:t="AgX";break;case lh:t="Neutral";break;case oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xs=new L;function rm(){We.getLuminanceCoefficients(Xs);const r=Xs.x.toFixed(4),e=Xs.y.toFixed(4),t=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function am(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function om(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ls(r){return r!==""}function cc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(r){return r.replace(lm,um)}const hm=new Map;function um(r,e){let t=Fe[e];if(t===void 0){const n=hm.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(r){return r.replace(dm,fm)}function fm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function uc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function mm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Di:case Ui:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function _m(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function xm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=pm(t),l=mm(t),h=gm(t),u=_m(t),d=xm(t),f=am(t),g=om(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(m=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,im("linearToOutputTexel",t.outputColorSpace),rm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=za(a),a=cc(a,t),a=lc(a,t),o=za(o),o=cc(o,t),o=lc(o,t),a=hc(a),o=hc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+a,y=T+p+o,C=rc(i,i.VERTEX_SHADER,E),b=rc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(b).trim();let V=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,b);else{const Z=oc(i,C,"vertex"),z=oc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+Z+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||X==="")&&(W=!1);W&&(R.diagnostics={runnable:V,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(C),i.deleteShader(b),P=new ar(i,_),S=cm(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Qp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=em++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let ym=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sm(e),t.set(e,n)),n}}class Sm{constructor(e){this.id=ym++,this.code=e,this.usedTimes=0}}function Tm(r,e,t,n,i,s,a){const o=new ol,c=new Mm,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,R,F,O){const X=F.fog,V=O.geometry,W=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),z=Z&&Z.mapping===fr?Z.image.height:null,ie=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=fe!==void 0?fe.length:0;let Ue=0;V.morphAttributes.position!==void 0&&(Ue=1),V.morphAttributes.normal!==void 0&&(Ue=2),V.morphAttributes.color!==void 0&&(Ue=3);let Ze,q,ee,pe;if(ie){const qe=on[ie];Ze=qe.vertexShader,q=qe.fragmentShader}else Ze=S.vertexShader,q=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),pe=c.getFragmentShaderID(S);const ae=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),be=O.isInstancedMesh===!0,Ne=O.isBatchedMesh===!0,at=!!S.map,ze=!!S.matcap,dt=!!Z,U=!!S.aoMap,Pt=!!S.lightMap,Oe=!!S.bumpMap,ke=!!S.normalMap,Me=!!S.displacementMap,Xe=!!S.emissiveMap,Se=!!S.metalnessMap,w=!!S.roughnessMap,x=S.anisotropy>0,k=S.clearcoat>0,Y=S.dispersion>0,$=S.iridescence>0,K=S.sheen>0,me=S.transmission>0,ce=x&&!!S.anisotropyMap,de=k&&!!S.clearcoatMap,Ve=k&&!!S.clearcoatNormalMap,Q=k&&!!S.clearcoatRoughnessMap,le=$&&!!S.iridescenceMap,Ee=$&&!!S.iridescenceThicknessMap,Ae=K&&!!S.sheenColorMap,he=K&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Pe=!!S.specularColorMap,Ke=!!S.specularIntensityMap,I=me&&!!S.transmissionMap,ne=me&&!!S.thicknessMap,G=!!S.gradientMap,j=!!S.alphaMap,se=S.alphaTest>0,oe=!!S.alphaHash,Re=!!S.extensions;let rt=Wn;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(rt=r.toneMapping);const mt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Nt,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:ze,envMap:dt,envMapMode:dt&&Z.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:Pt,bumpMap:Oe,normalMap:ke,displacementMap:d&&Me,emissiveMap:Xe,normalMapObjectSpace:ke&&S.normalMapType===mh,normalMapTangentSpace:ke&&S.normalMapType===nl,metalnessMap:Se,roughnessMap:w,anisotropy:x,anisotropyMap:ce,clearcoat:k,clearcoatMap:de,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:$,iridescenceMap:le,iridescenceThicknessMap:Ee,sheen:K,sheenColorMap:Ae,sheenRoughnessMap:he,specularMap:Be,specularColorMap:Pe,specularIntensityMap:Ke,transmission:me,transmissionMap:I,thicknessMap:ne,gradientMap:G,opaque:S.transparent===!1&&S.blending===bi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:se,alphaHash:oe,combine:S.combine,mapUv:at&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Pt&&_(S.lightMap.channel),bumpMapUv:Oe&&_(S.bumpMap.channel),normalMapUv:ke&&_(S.normalMap.channel),displacementMapUv:Me&&_(S.displacementMap.channel),emissiveMapUv:Xe&&_(S.emissiveMap.channel),metalnessMapUv:Se&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:de&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(S.sheenRoughnessMap.channel),specularMapUv:Be&&_(S.specularMap.channel),specularColorMapUv:Pe&&_(S.specularColorMap.channel),specularIntensityMapUv:Ke&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:ne&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ke||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(at||j),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ue,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:Xe&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(v,S),E(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const v=g[S.type];let R;if(v){const F=on[v];R=ru.clone(F.uniforms)}else R=S.uniforms;return R}function C(S,v){let R;for(let F=0,O=h.length;F<O;F++){const X=h[F];if(X.cacheKey===v){R=X,++R.usedTimes;break}}return R===void 0&&(R=new vm(r,v,S,s),h.push(R)),R}function b(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:P}}function Em(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function wm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||wm),n.length>1&&n.sort(d||dc),i.length>1&&i.sort(d||dc)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Am(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new fc,r.set(n,[a])):i>=s.length?(a=new fc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function bm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Rm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cm=0;function Pm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Lm(r){const e=new bm,t=Rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new De,a=new De;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,E=0,y=0,C=0,b=0,A=0;l.sort(Pm);for(let S=0,v=l.length;S<v;S++){const R=l[S],F=R.color,O=R.intensity,X=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],O);A++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=R.shadow.matrix,T++}n.directional[f]=W,f++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(O),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const Z=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,Z.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=V,y++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(F).multiplyScalar(O),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(O),W.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=A,n.version=Cm++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const E=l[p];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function pc(r){const e=new Lm(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Im(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new pc(r),e.set(i,[o])):s>=a.length?(o=new pc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Dm extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Um extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function km(r,e,t){let n=new io;const i=new Ge,s=new Ge,a=new $e,o=new Dm({depthPacking:ph}),c=new Um,l={},h=t.maxTextureSize,u={[bn]:kt,[kt]:bn,[Yt]:Yt},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Nm,fragmentShader:Fm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Vn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==Tn&&this.type===Tn,X=p===Tn&&this.type!==Tn;for(let V=0,W=b.length;V<W;V++){const Z=b[V],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ie=z.getFrameExtents();if(i.multiply(ie),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||O===!0||X===!0){const ve=this.type!==Tn?{minFilter:Dt,magFilter:Dt}:{};z.map!==null&&z.map.dispose(),z.map=new ai(i.x,i.y,ve),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const fe=z.getViewportCount();for(let ve=0;ve<fe;ve++){const Ue=z.getViewport(ve);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),F.viewport(a),z.updateMatrices(Z,ve),n=z.getFrustum(),y(A,P,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Tn&&T(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,v,R)};function T(b,A){const P=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ai(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,P,f,_,null)}function E(b,A,P,S){let v=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=v.uuid,O=A.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let V=X[O];V===void 0&&(V=v.clone(),X[O]=V,A.addEventListener("dispose",C)),v=V}if(v.visible=A.visible,v.wireframe=A.wireframe,S===Tn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=r.properties.get(v);F.light=P}return v}function y(b,A,P,S,v){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Tn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const O=e.update(b),X=b.material;if(Array.isArray(X)){const V=O.groups;for(let W=0,Z=V.length;W<Z;W++){const z=V[W],ie=X[z.materialIndex];if(ie&&ie.visible){const fe=E(b,ie,S,v);b.onBeforeShadow(r,b,A,P,O,fe,z),r.renderBufferDirect(P,null,O,fe,b,z),b.onAfterShadow(r,b,A,P,O,fe,z)}}}else if(X.visible){const V=E(b,X,S,v);b.onBeforeShadow(r,b,A,P,O,V,null),r.renderBufferDirect(P,null,O,V,b,null),b.onAfterShadow(r,b,A,P,O,V,null)}}const F=b.children;for(let O=0,X=F.length;O<X;O++)y(F[O],A,P,S,v)}function C(b){b.target.removeEventListener("dispose",C);for(const P in l){const S=l[P],v=b.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Om={[sa]:ra,[aa]:la,[oa]:ha,[Ii]:ca,[ra]:sa,[la]:aa,[ha]:oa,[ca]:Ii};function Bm(r,e){function t(){let I=!1;const ne=new $e;let G=null;const j=new $e(0,0,0,0);return{setMask:function(se){G!==se&&!I&&(r.colorMask(se,se,se,se),G=se)},setLocked:function(se){I=se},setClear:function(se,oe,Re,rt,mt){mt===!0&&(se*=rt,oe*=rt,Re*=rt),ne.set(se,oe,Re,rt),j.equals(ne)===!1&&(r.clearColor(se,oe,Re,rt),j.copy(ne))},reset:function(){I=!1,G=null,j.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,G=null,j=null,se=null;return{setReversed:function(oe){if(ne!==oe){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);const rt=se;se=null,this.setClear(rt)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?ae(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(oe){G!==oe&&!I&&(r.depthMask(oe),G=oe)},setFunc:function(oe){if(ne&&(oe=Om[oe]),j!==oe){switch(oe){case sa:r.depthFunc(r.NEVER);break;case ra:r.depthFunc(r.ALWAYS);break;case aa:r.depthFunc(r.LESS);break;case Ii:r.depthFunc(r.LEQUAL);break;case oa:r.depthFunc(r.EQUAL);break;case ca:r.depthFunc(r.GEQUAL);break;case la:r.depthFunc(r.GREATER);break;case ha:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=oe}},setLocked:function(oe){I=oe},setClear:function(oe){se!==oe&&(ne&&(oe=1-oe),r.clearDepth(oe),se=oe)},reset:function(){I=!1,G=null,j=null,se=null,ne=!1}}}function i(){let I=!1,ne=null,G=null,j=null,se=null,oe=null,Re=null,rt=null,mt=null;return{setTest:function(qe){I||(qe?ae(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(qe){ne!==qe&&!I&&(r.stencilMask(qe),ne=qe)},setFunc:function(qe,wt,Vt){(G!==qe||j!==wt||se!==Vt)&&(r.stencilFunc(qe,wt,Vt),G=qe,j=wt,se=Vt)},setOp:function(qe,wt,Vt){(oe!==qe||Re!==wt||rt!==Vt)&&(r.stencilOp(qe,wt,Vt),oe=qe,Re=wt,rt=Vt)},setLocked:function(qe){I=qe},setClear:function(qe){mt!==qe&&(r.clearStencil(qe),mt=qe)},reset:function(){I=!1,ne=null,G=null,j=null,se=null,oe=null,Re=null,rt=null,mt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,C=null,b=null,A=new we(0,0,0),P=0,S=!1,v=null,R=null,F=null,O=null,X=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=Z>=2);let ie=null,fe={};const ve=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Ze=new $e().fromArray(ve),q=new $e().fromArray(Ue);function ee(I,ne,G,j){const se=new Uint8Array(4),oe=r.createTexture();r.bindTexture(I,oe),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<G;Re++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(ne+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return oe}const pe={};pe[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(Ii),Oe(!1),ke(mo),ae(r.CULL_FACE),U(Vn);function ae(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Te(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function be(I,ne){return u[I]!==ne?(r.bindFramebuffer(I,ne),u[I]=ne,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ne),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ne(I,ne){let G=f,j=!1;if(I){G=d.get(ne),G===void 0&&(G=[],d.set(ne,G));const se=I.textures;if(G.length!==se.length||G[0]!==r.COLOR_ATTACHMENT0){for(let oe=0,Re=se.length;oe<Re;oe++)G[oe]=r.COLOR_ATTACHMENT0+oe;G.length=se.length,j=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,j=!0);j&&r.drawBuffers(G)}function at(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const ze={[ii]:r.FUNC_ADD,[Ol]:r.FUNC_SUBTRACT,[Bl]:r.FUNC_REVERSE_SUBTRACT};ze[Hl]=r.MIN,ze[Gl]=r.MAX;const dt={[zl]:r.ZERO,[Vl]:r.ONE,[Wl]:r.SRC_COLOR,[na]:r.SRC_ALPHA,[$l]:r.SRC_ALPHA_SATURATE,[Yl]:r.DST_COLOR,[Kl]:r.DST_ALPHA,[Xl]:r.ONE_MINUS_SRC_COLOR,[ia]:r.ONE_MINUS_SRC_ALPHA,[jl]:r.ONE_MINUS_DST_COLOR,[ql]:r.ONE_MINUS_DST_ALPHA,[Zl]:r.CONSTANT_COLOR,[Jl]:r.ONE_MINUS_CONSTANT_COLOR,[Ql]:r.CONSTANT_ALPHA,[eh]:r.ONE_MINUS_CONSTANT_ALPHA};function U(I,ne,G,j,se,oe,Re,rt,mt,qe){if(I===Vn){_===!0&&(Te(r.BLEND),_=!1);return}if(_===!1&&(ae(r.BLEND),_=!0),I!==kl){if(I!==m||qe!==S){if((p!==ii||y!==ii)&&(r.blendEquation(r.FUNC_ADD),p=ii,y=ii),qe)switch(I){case bi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ta:r.blendFunc(r.ONE,r.ONE);break;case go:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case bi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ta:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case go:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,C=null,b=null,A.set(0,0,0),P=0,m=I,S=qe}return}se=se||ne,oe=oe||G,Re=Re||j,(ne!==p||se!==y)&&(r.blendEquationSeparate(ze[ne],ze[se]),p=ne,y=se),(G!==T||j!==E||oe!==C||Re!==b)&&(r.blendFuncSeparate(dt[G],dt[j],dt[oe],dt[Re]),T=G,E=j,C=oe,b=Re),(rt.equals(A)===!1||mt!==P)&&(r.blendColor(rt.r,rt.g,rt.b,mt),A.copy(rt),P=mt),m=I,S=!1}function Pt(I,ne){I.side===Yt?Te(r.CULL_FACE):ae(r.CULL_FACE);let G=I.side===kt;ne&&(G=!G),Oe(G),I.blending===bi&&I.transparent===!1?U(Vn):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){v!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),v=I)}function ke(I){I!==Nl?(ae(r.CULL_FACE),I!==R&&(I===mo?r.cullFace(r.BACK):I===Fl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),R=I}function Me(I){I!==F&&(W&&r.lineWidth(I),F=I)}function Xe(I,ne,G){I?(ae(r.POLYGON_OFFSET_FILL),(O!==ne||X!==G)&&(r.polygonOffset(ne,G),O=ne,X=G)):Te(r.POLYGON_OFFSET_FILL)}function Se(I){I?ae(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function w(I){I===void 0&&(I=r.TEXTURE0+V-1),ie!==I&&(r.activeTexture(I),ie=I)}function x(I,ne,G){G===void 0&&(ie===null?G=r.TEXTURE0+V-1:G=ie);let j=fe[G];j===void 0&&(j={type:void 0,texture:void 0},fe[G]=j),(j.type!==I||j.texture!==ne)&&(ie!==G&&(r.activeTexture(G),ie=G),r.bindTexture(I,ne||pe[I]),j.type=I,j.texture=ne)}function k(){const I=fe[ie];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){Ze.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function he(I){q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Be(I,ne){let G=l.get(ne);G===void 0&&(G=new WeakMap,l.set(ne,G));let j=G.get(I);j===void 0&&(j=r.getUniformBlockIndex(ne,I.name),G.set(I,j))}function Pe(I,ne){const j=l.get(ne).get(I);c.get(ne)!==j&&(r.uniformBlockBinding(ne,j,I.__bindingPointIndex),c.set(ne,j))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,fe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,C=null,b=null,A=new we(0,0,0),P=0,S=!1,v=null,R=null,F=null,O=null,X=null,Ze.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Te,bindFramebuffer:be,drawBuffers:Ne,useProgram:at,setBlending:U,setMaterial:Pt,setFlipSided:Oe,setCullFace:ke,setLineWidth:Me,setPolygonOffset:Xe,setScissorTest:Se,activeTexture:w,bindTexture:x,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:le,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:Pe,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:K,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:de,scissor:Ae,viewport:he,reset:Ke}}function mc(r,e,t,n){const i=Hm(n);switch(t){case jc:return r*e;case Zc:return r*e;case Jc:return r*e*2;case Ja:return r*e/i.components*i.byteLength;case Qa:return r*e/i.components*i.byteLength;case Qc:return r*e*2/i.components*i.byteLength;case eo:return r*e*2/i.components*i.byteLength;case $c:return r*e*3/i.components*i.byteLength;case jt:return r*e*4/i.components*i.byteLength;case to:return r*e*4/i.components*i.byteLength;case tr:case nr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ir:case sr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(r,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(r,8)*Math.max(e,8)/2;case _a:case xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ba:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rr:case Ua:case Na:return Math.ceil(r/4)*Math.ceil(e/4)*16;case el:case Fa:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ka:case Oa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(r){switch(r){case Rn:case Kc:return{byteLength:1,components:1};case fs:case qc:case ys:return{byteLength:2,components:1};case $a:case Za:return{byteLength:2,components:4};case ri:case ja:case sn:return{byteLength:4,components:1};case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Gm(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):gs("canvas")}function _(w,x,k){let Y=1;const $=Se(w);if(($.width>k||$.height>k)&&(Y=k/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Y*$.width),me=Math.floor(Y*$.height);u===void 0&&(u=g(K,me));const ce=x?g(K,me):u;return ce.width=K,ce.height=me,ce.getContext("2d").drawImage(w,0,0,K,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+me+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(w,x,k,Y,$=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=x;if(x===r.RED&&(k===r.FLOAT&&(K=r.R32F),k===r.HALF_FLOAT&&(K=r.R16F),k===r.UNSIGNED_BYTE&&(K=r.R8)),x===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.R8UI),k===r.UNSIGNED_SHORT&&(K=r.R16UI),k===r.UNSIGNED_INT&&(K=r.R32UI),k===r.BYTE&&(K=r.R8I),k===r.SHORT&&(K=r.R16I),k===r.INT&&(K=r.R32I)),x===r.RG&&(k===r.FLOAT&&(K=r.RG32F),k===r.HALF_FLOAT&&(K=r.RG16F),k===r.UNSIGNED_BYTE&&(K=r.RG8)),x===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RG8UI),k===r.UNSIGNED_SHORT&&(K=r.RG16UI),k===r.UNSIGNED_INT&&(K=r.RG32UI),k===r.BYTE&&(K=r.RG8I),k===r.SHORT&&(K=r.RG16I),k===r.INT&&(K=r.RG32I)),x===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGB8UI),k===r.UNSIGNED_SHORT&&(K=r.RGB16UI),k===r.UNSIGNED_INT&&(K=r.RGB32UI),k===r.BYTE&&(K=r.RGB8I),k===r.SHORT&&(K=r.RGB16I),k===r.INT&&(K=r.RGB32I)),x===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),k===r.UNSIGNED_INT&&(K=r.RGBA32UI),k===r.BYTE&&(K=r.RGBA8I),k===r.SHORT&&(K=r.RGBA16I),k===r.INT&&(K=r.RGBA32I)),x===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),x===r.RGBA){const me=$?pr:We.getTransfer(Y);k===r.FLOAT&&(K=r.RGBA32F),k===r.HALF_FLOAT&&(K=r.RGBA16F),k===r.UNSIGNED_BYTE&&(K=me===it?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(w,x){let k;return w?x===null||x===ri||x===Fi?k=r.DEPTH24_STENCIL8:x===sn?k=r.DEPTH32F_STENCIL8:x===fs&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ri||x===Fi?k=r.DEPTH_COMPONENT24:x===sn?k=r.DEPTH_COMPONENT32F:x===fs&&(k=r.DEPTH_COMPONENT16),k}function C(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dt&&w.minFilter!==Tt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function b(w){const x=w.target;x.removeEventListener("dispose",b),P(x),x.isVideoTexture&&h.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),v(x)}function P(w){const x=n.get(w);if(x.__webglInit===void 0)return;const k=w.source,Y=d.get(k);if(Y){const $=Y[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(w),Object.keys(Y).length===0&&d.delete(k)}n.remove(w)}function S(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const k=w.source,Y=d.get(k);delete Y[x.__cacheKey],a.memory.textures--}function v(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let $=0;$<x.__webglFramebuffer[Y].length;$++)r.deleteFramebuffer(x.__webglFramebuffer[Y][$]);else r.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[Y]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=w.textures;for(let Y=0,$=k.length;Y<$;Y++){const K=n.get(k[Y]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(w)}let R=0;function F(){R=0}function O(){const w=R;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),R+=1,w}function X(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function V(w,x){const k=n.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,w,x);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+x)}function W(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+x)}function Z(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,x);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+x)}function z(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ee(k,w,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+x)}const ie={[Ni]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[or]:r.MIRRORED_REPEAT},fe={[Dt]:r.NEAREST,[Xc]:r.NEAREST_MIPMAP_NEAREST,[os]:r.NEAREST_MIPMAP_LINEAR,[Tt]:r.LINEAR,[er]:r.LINEAR_MIPMAP_NEAREST,[hn]:r.LINEAR_MIPMAP_LINEAR},ve={[gh]:r.NEVER,[Sh]:r.ALWAYS,[_h]:r.LESS,[il]:r.LEQUAL,[xh]:r.EQUAL,[Mh]:r.GEQUAL,[vh]:r.GREATER,[yh]:r.NOTEQUAL};function Ue(w,x){if(x.type===sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tt||x.magFilter===er||x.magFilter===os||x.magFilter===hn||x.minFilter===Tt||x.minFilter===er||x.minFilter===os||x.minFilter===hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ie[x.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ie[x.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ie[x.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,fe[x.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dt||x.minFilter!==os&&x.minFilter!==hn||x.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",b));const Y=x.source;let $=d.get(Y);$===void 0&&($={},d.set(Y,$));const K=X(x);if(K!==w.__cacheKey){$[K]===void 0&&($[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[K].usedTimes++;const me=$[w.__cacheKey];me!==void 0&&($[w.__cacheKey].usedTimes--,me.usedTimes===0&&S(x)),w.__cacheKey=K,w.__webglTexture=$[K].texture}return k}function q(w,x,k){let Y=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=r.TEXTURE_3D);const $=Ze(w,x),K=x.source;t.bindTexture(Y,w.__webglTexture,r.TEXTURE0+k);const me=n.get(K);if(K.version!==me.__version||$===!0){t.activeTexture(r.TEXTURE0+k);const ce=We.getPrimaries(We.workingColorSpace),de=x.colorSpace===Hn?null:We.getPrimaries(x.colorSpace),Ve=x.colorSpace===Hn||ce===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=_(x.image,!1,i.maxTextureSize);Q=Xe(x,Q);const le=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type);let Ae=E(x.internalFormat,le,Ee,x.colorSpace,x.isVideoTexture);Ue(Y,x);let he;const Be=x.mipmaps,Pe=x.isVideoTexture!==!0,Ke=me.__version===void 0||$===!0,I=K.dataReady,ne=C(x,Q);if(x.isDepthTexture)Ae=y(x.format===ki,x.type),Ke&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Ae,Q.width,Q.height,0,le,Ee,null));else if(x.isDataTexture)if(Be.length>0){Pe&&Ke&&t.texStorage2D(r.TEXTURE_2D,ne,Ae,Be[0].width,Be[0].height);for(let G=0,j=Be.length;G<j;G++)he=Be[G],Pe?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,he.width,he.height,le,Ee,he.data):t.texImage2D(r.TEXTURE_2D,G,Ae,he.width,he.height,0,le,Ee,he.data);x.generateMipmaps=!1}else Pe?(Ke&&t.texStorage2D(r.TEXTURE_2D,ne,Ae,Q.width,Q.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,le,Ee,Q.data)):t.texImage2D(r.TEXTURE_2D,0,Ae,Q.width,Q.height,0,le,Ee,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ae,Be[0].width,Be[0].height,Q.depth);for(let G=0,j=Be.length;G<j;G++)if(he=Be[G],x.format!==jt)if(le!==null)if(Pe){if(I)if(x.layerUpdates.size>0){const se=mc(he.width,he.height,x.format,x.type);for(const oe of x.layerUpdates){const Re=he.data.subarray(oe*se/he.data.BYTES_PER_ELEMENT,(oe+1)*se/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,oe,he.width,he.height,1,le,Re)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,he.width,he.height,Q.depth,le,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Ae,he.width,he.height,Q.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,he.width,he.height,Q.depth,le,Ee,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,Ae,he.width,he.height,Q.depth,0,le,Ee,he.data)}else{Pe&&Ke&&t.texStorage2D(r.TEXTURE_2D,ne,Ae,Be[0].width,Be[0].height);for(let G=0,j=Be.length;G<j;G++)he=Be[G],x.format!==jt?le!==null?Pe?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(r.TEXTURE_2D,G,Ae,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,he.width,he.height,le,Ee,he.data):t.texImage2D(r.TEXTURE_2D,G,Ae,he.width,he.height,0,le,Ee,he.data)}else if(x.isDataArrayTexture)if(Pe){if(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ae,Q.width,Q.height,Q.depth),I)if(x.layerUpdates.size>0){const G=mc(Q.width,Q.height,x.format,x.type);for(const j of x.layerUpdates){const se=Q.data.subarray(j*G/Q.data.BYTES_PER_ELEMENT,(j+1)*G/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,le,Ee,se)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Ee,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,le,Ee,Q.data);else if(x.isData3DTexture)Pe?(Ke&&t.texStorage3D(r.TEXTURE_3D,ne,Ae,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Ee,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,le,Ee,Q.data);else if(x.isFramebufferTexture){if(Ke)if(Pe)t.texStorage2D(r.TEXTURE_2D,ne,Ae,Q.width,Q.height);else{let G=Q.width,j=Q.height;for(let se=0;se<ne;se++)t.texImage2D(r.TEXTURE_2D,se,Ae,G,j,0,le,Ee,null),G>>=1,j>>=1}}else if(Be.length>0){if(Pe&&Ke){const G=Se(Be[0]);t.texStorage2D(r.TEXTURE_2D,ne,Ae,G.width,G.height)}for(let G=0,j=Be.length;G<j;G++)he=Be[G],Pe?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,le,Ee,he):t.texImage2D(r.TEXTURE_2D,G,Ae,le,Ee,he);x.generateMipmaps=!1}else if(Pe){if(Ke){const G=Se(Q);t.texStorage2D(r.TEXTURE_2D,ne,Ae,G.width,G.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,Ee,Q)}else t.texImage2D(r.TEXTURE_2D,0,Ae,le,Ee,Q);m(x)&&p(Y),me.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ee(w,x,k){if(x.image.length!==6)return;const Y=Ze(w,x),$=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+k);const K=n.get($);if($.version!==K.__version||Y===!0){t.activeTexture(r.TEXTURE0+k);const me=We.getPrimaries(We.workingColorSpace),ce=x.colorSpace===Hn?null:We.getPrimaries(x.colorSpace),de=x.colorSpace===Hn||me===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!Ve&&!Q?le[j]=_(x.image[j],!0,i.maxCubemapSize):le[j]=Q?x.image[j].image:x.image[j],le[j]=Xe(x,le[j]);const Ee=le[0],Ae=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Be=E(x.internalFormat,Ae,he,x.colorSpace),Pe=x.isVideoTexture!==!0,Ke=K.__version===void 0||Y===!0,I=$.dataReady;let ne=C(x,Ee);Ue(r.TEXTURE_CUBE_MAP,x);let G;if(Ve){Pe&&Ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Be,Ee.width,Ee.height);for(let j=0;j<6;j++){G=le[j].mipmaps;for(let se=0;se<G.length;se++){const oe=G[se];x.format!==jt?Ae!==null?Pe?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,0,0,oe.width,oe.height,Ae,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,Be,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,0,0,oe.width,oe.height,Ae,he,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,Be,oe.width,oe.height,0,Ae,he,oe.data)}}}else{if(G=x.mipmaps,Pe&&Ke){G.length>0&&ne++;const j=Se(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Be,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Pe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,Ae,he,le[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,le[j].width,le[j].height,0,Ae,he,le[j].data);for(let se=0;se<G.length;se++){const Re=G[se].image[j].image;Pe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,0,0,Re.width,Re.height,Ae,he,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,Be,Re.width,Re.height,0,Ae,he,Re.data)}}else{Pe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,he,le[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,Ae,he,le[j]);for(let se=0;se<G.length;se++){const oe=G[se];Pe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,0,0,Ae,he,oe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,Be,Ae,he,oe.image[j])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),K.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function pe(w,x,k,Y,$,K){const me=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),de=E(k.internalFormat,me,ce,k.colorSpace),Ve=n.get(x),Q=n.get(k);if(Q.__renderTarget=x,!Ve.__hasExternalTextures){const le=Math.max(1,x.width>>K),Ee=Math.max(1,x.height>>K);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,K,de,le,Ee,x.depth,0,me,ce,null):t.texImage2D($,K,de,le,Ee,0,me,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ke(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,$,Q.__webglTexture,0,Oe(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,$,Q.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(w,x,k){if(r.bindRenderbuffer(r.RENDERBUFFER,w),x.depthBuffer){const Y=x.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,K=y(x.stencilBuffer,$),me=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=Oe(x);ke(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,K,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,K,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,K,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,w)}else{const Y=x.textures;for(let $=0;$<Y.length;$++){const K=Y[$],me=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),de=E(K.internalFormat,me,ce,K.colorSpace),Ve=Oe(x);k&&ke(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,de,x.width,x.height):ke(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve,de,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,de,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const $=Y.__webglTexture,K=Oe(x);if(x.depthTexture.format===Ri)ke(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(x.depthTexture.format===ki)ke(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function be(w){const x=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,w)}else if(k){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=r.createRenderbuffer(),ae(x.__webglDepthbuffer[Y],w,!1);else{const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),ae(x.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(w,x,k){const Y=n.get(w);x!==void 0&&pe(Y.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&be(w)}function at(w){const x=w.texture,k=n.get(w),Y=n.get(x);w.addEventListener("dispose",A);const $=w.textures,K=w.isWebGLCubeRenderTarget===!0,me=$.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=x.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let de=0;de<x.mipmaps.length;de++)k.__webglFramebuffer[ce][de]=r.createFramebuffer()}else k.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)k.__webglFramebuffer[ce]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(me)for(let ce=0,de=$.length;ce<de;ce++){const Ve=n.get($[ce]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&ke(w)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const de=$[ce];k.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const Ve=s.convert(de.format,de.colorSpace),Q=s.convert(de.type),le=E(de.internalFormat,Ve,Q,de.colorSpace,w.isXRRenderTarget===!0),Ee=Oe(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,le,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)pe(k.__webglFramebuffer[ce][de],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else pe(k.__webglFramebuffer[ce],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ce=0,de=$.length;ce<de;ce++){const Ve=$[ce],Q=n.get(Ve);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Ue(r.TEXTURE_2D,Ve),pe(k.__webglFramebuffer,w,Ve,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),m(Ve)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Ue(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)pe(k.__webglFramebuffer[de],w,x,r.COLOR_ATTACHMENT0,ce,de);else pe(k.__webglFramebuffer,w,x,r.COLOR_ATTACHMENT0,ce,0);m(x)&&p(ce),t.unbindTexture()}w.depthBuffer&&be(w)}function ze(w){const x=w.textures;for(let k=0,Y=x.length;k<Y;k++){const $=x[k];if(m($)){const K=T(w),me=n.get($).__webglTexture;t.bindTexture(K,me),p(K),t.unbindTexture()}}}const dt=[],U=[];function Pt(w){if(w.samples>0){if(ke(w)===!1){const x=w.textures,k=w.width,Y=w.height;let $=r.COLOR_BUFFER_BIT;const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(w),ce=x.length>1;if(ce)for(let de=0;de<x.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<x.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const Ve=n.get(x[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,k,Y,0,0,k,Y,$,r.NEAREST),c===!0&&(dt.length=0,U.length=0,dt.push(r.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(dt.push(K),U.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let de=0;de<x.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const Ve=n.get(x[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Oe(w){return Math.min(i.maxSamples,w.samples)}function ke(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Xe(w,x){const k=w.colorSpace,Y=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Nt&&k!==Hn&&(We.getTransfer(k)===it?(Y!==jt||$!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=Ne,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ke}function zm(r,e){function t(n,i=Hn){let s;const a=We.getTransfer(i);if(n===Rn)return r.UNSIGNED_BYTE;if(n===$a)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return r.BYTE;if(n===qc)return r.SHORT;if(n===fs)return r.UNSIGNED_SHORT;if(n===ja)return r.INT;if(n===ri)return r.UNSIGNED_INT;if(n===sn)return r.FLOAT;if(n===ys)return r.HALF_FLOAT;if(n===jc)return r.ALPHA;if(n===$c)return r.RGB;if(n===jt)return r.RGBA;if(n===Zc)return r.LUMINANCE;if(n===Jc)return r.LUMINANCE_ALPHA;if(n===Ri)return r.DEPTH_COMPONENT;if(n===ki)return r.DEPTH_STENCIL;if(n===Ja)return r.RED;if(n===Qa)return r.RED_INTEGER;if(n===Qc)return r.RG;if(n===eo)return r.RG_INTEGER;if(n===to)return r.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===sr)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===xa||n===va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_a||n===xa)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===va)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ma||n===Sa||n===Ta||n===Ea||n===wa||n===Aa||n===ba||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ya)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rr||n===Ua||n===Na)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rr)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===Fa||n===ka||n===Oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===rr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Vm extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class je extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
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

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new vt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:Xm,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ym extends Vi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new qm,m=t.getContextAttributes();let p=null,T=null;const E=[],y=[],C=new Ge;let b=null;const A=new Ct;A.viewport=new $e;const P=new Ct;P.viewport=new $e;const S=[A,P],v=new Vm;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=E[q];return ee===void 0&&(ee=new Xr,E[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=E[q];return ee===void 0&&(ee=new Xr,E[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=E[q];return ee===void 0&&(ee=new Xr,E[q]=ee),ee.getHandSpace()};function O(q){const ee=y.indexOf(q.inputSource);if(ee===-1)return;const pe=E[ee];pe!==void 0&&(pe.update(q.inputSource,q.frame,l||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",V);for(let q=0;q<E.length;q++){const ee=y[q];ee!==null&&(y[q]=null,E[q].disconnect(ee))}R=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,T=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",X),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new ai(f.framebufferWidth,f.framebufferHeight,{format:jt,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,pe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?ki:Ri,pe=m.stencil?Fi:ri);const Te={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ai(d.textureWidth,d.textureHeight,{format:jt,type:Rn,depthTexture:new ml(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(q){for(let ee=0;ee<q.removed.length;ee++){const pe=q.removed[ee],ae=y.indexOf(pe);ae>=0&&(y[ae]=null,E[ae].disconnect(pe))}for(let ee=0;ee<q.added.length;ee++){const pe=q.added[ee];let ae=y.indexOf(pe);if(ae===-1){for(let be=0;be<E.length;be++)if(be>=y.length){y.push(pe),ae=be;break}else if(y[be]===null){y[be]=pe,ae=be;break}if(ae===-1)break}const Te=E[ae];Te&&Te.connect(pe)}}const W=new L,Z=new L;function z(q,ee,pe){W.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const ae=W.distanceTo(Z),Te=ee.projectionMatrix.elements,be=pe.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),at=Te[14]/(Te[10]+1),ze=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],U=(Te[8]-1)/Te[0],Pt=(be[8]+1)/be[0],Oe=Ne*U,ke=Ne*Pt,Me=ae/(-U+Pt),Xe=Me*-U;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xe),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Se=Ne+Me,w=at+Me,x=Oe-Xe,k=ke+(ae-Xe),Y=ze*at/w*Se,$=dt*at/w*Se;q.projectionMatrix.makePerspective(x,k,Y,$,Se,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,pe=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),v.near=P.near=A.near=ee,v.far=P.far=A.far=pe,(R!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,F=v.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,v.layers.mask=A.layers.mask|P.layers.mask;const ae=q.parent,Te=v.cameras;ie(v,ae);for(let be=0;be<Te.length;be++)ie(Te[be],ae);Te.length===2?z(v,A,P):v.projectionMatrix.copy(A.projectionMatrix),fe(q,v,ae)};function fe(q,ee,pe){pe===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Oi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ve=null;function Ue(q,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ae=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let be=0;be<pe.length;be++){const Ne=pe[be];let at=null;if(f!==null)at=f.getViewport(Ne);else{const dt=u.getViewSubImage(d,Ne);at=dt.viewport,be===0&&(e.setRenderTargetTextures(T,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(T))}let ze=S[be];ze===void 0&&(ze=new Ct,ze.layers.enable(be),ze.viewport=new $e,S[be]=ze),ze.matrix.fromArray(Ne.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ne.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(at.x,at.y,at.width,at.height),be===0&&(v.matrix.copy(ze.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(ze)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const be=u.getDepthInformation(pe[0]);be&&be.isValid&&be.texture&&_.init(e,be,i.renderState)}}for(let pe=0;pe<E.length;pe++){const ae=y[pe],Te=E[pe];ae!==null&&Te!==void 0&&Te.update(ae,ee,l||a)}ve&&ve(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ze=new pl;Ze.setAnimationLoop(Ue),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const Qn=new dn,jm=new De;function $m(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ul(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,Qn.copy(y),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(Qn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zm(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const y=E.program;n.uniformBlockBinding(T,y)}function l(T,E){let y=i[T.id];y===void 0&&(g(T),y=h(T),i[T.id]=y,T.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(T,C);const b=e.render.frame;s[T.id]!==b&&(d(T),s[T.id]=b)}function h(T){const E=u();T.__bindingPointIndex=E;const y=r.createBuffer(),C=T.__size,b=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,y),y}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],y=T.uniforms,C=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let b=0,A=y.length;b<A;b++){const P=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,v=P.length;S<v;S++){const R=P[S];if(f(R,b,S,C)===!0){const F=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let V=0;V<O.length;V++){const W=O[V],Z=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+X,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,E,y,C){const b=T.value,A=E+"_"+y;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const P=C[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(T){const E=T.uniforms;let y=0;const C=16;for(let A=0,P=E.length;A<P;A++){const S=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,R=S.length;v<R;v++){const F=S[v],O=Array.isArray(F.value)?F.value:[F.value];for(let X=0,V=O.length;X<V;X++){const W=O[X],Z=_(W),z=y%C,ie=z%Z.boundary,fe=z+ie;y+=ie,fe!==0&&C-fe<Z.storage&&(y+=C-fe),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Z.storage}}}const b=y%C;return b>0&&(y+=C-b),T.__size=y,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class yl{constructor(e={}){const{canvas:t=Bh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=Wn,this.toneMappingExposure=1;const y=this;let C=!1,b=0,A=0,P=null,S=-1,v=null;const R=new $e,F=new $e;let O=null;const X=new we(0);let V=0,W=t.width,Z=t.height,z=1,ie=null,fe=null;const ve=new $e(0,0,W,Z),Ue=new $e(0,0,W,Z);let Ze=!1;const q=new io;let ee=!1,pe=!1;const ae=new De,Te=new De,be=new L,Ne=new $e,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function dt(){return P===null?z:1}let U=n;function Pt(M,D){return t.getContext(M,D)}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){const D="webgl2";if(U=Pt(D,M),U===null)throw Pt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Oe,ke,Me,Xe,Se,w,x,k,Y,$,K,me,ce,de,Ve,Q,le,Ee,Ae,he,Be,Pe,Ke,I;function ne(){Oe=new ip(U),Oe.init(),Pe=new zm(U,Oe),ke=new Zf(U,Oe,e,Pe),Me=new Bm(U,Oe),ke.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Xe=new ap(U),Se=new Em,w=new Gm(U,Oe,Me,Se,ke,Pe,Xe),x=new Qf(y),k=new np(y),Y=new du(U),Ke=new jf(U,Y),$=new sp(U,Y,Xe,Ke),K=new cp(U,$,Y,Xe),Ae=new op(U,ke,w),Q=new Jf(Se),me=new Tm(y,x,k,Oe,ke,Ke,Q),ce=new $m(y,Se),de=new Am,Ve=new Im(Oe),Ee=new Yf(y,x,k,Me,K,f,c),le=new km(y,K,ke),I=new Zm(U,Xe,ke,Me),he=new $f(U,Oe,Xe),Be=new rp(U,Oe,Xe),Xe.programs=me.programs,y.capabilities=ke,y.extensions=Oe,y.properties=Se,y.renderLists=de,y.shadowMap=le,y.state=Me,y.info=Xe}ne();const G=new Ym(y,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(W,Z,!1))},this.getSize=function(M){return M.set(W,Z)},this.setSize=function(M,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,Z=D,t.width=Math.floor(M*z),t.height=Math.floor(D*z),B===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(W*z,Z*z).floor()},this.setDrawingBufferSize=function(M,D,B){W=M,Z=D,z=B,t.width=Math.floor(M*B),t.height=Math.floor(D*B),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,D,B,H){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,D,B,H),Me.viewport(R.copy(ve).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,D,B,H){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,D,B,H),Me.scissor(F.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(M){Me.setScissorTest(Ze=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(M=!0,D=!0,B=!0){let H=0;if(M){let N=!1;if(P!==null){const te=P.texture.format;N=te===to||te===eo||te===Qa}if(N){const te=P.texture.type,ue=te===Rn||te===ri||te===fs||te===Fi||te===$a||te===Za,ge=Ee.getClearColor(),_e=Ee.getClearAlpha(),Ce=ge.r,Le=ge.g,xe=ge.b;ue?(g[0]=Ce,g[1]=Le,g[2]=xe,g[3]=_e,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ce,_[1]=Le,_[2]=xe,_[3]=_e,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),B&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),Ve.dispose(),Se.dispose(),x.dispose(),k.dispose(),K.dispose(),Ke.dispose(),I.dispose(),me.dispose(),G.dispose(),G.removeEventListener("sessionstart",Pn),G.removeEventListener("sessionend",Yi),Ot.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=Xe.autoReset,D=le.enabled,B=le.autoUpdate,H=le.needsUpdate,N=le.type;ne(),Xe.autoReset=M,le.enabled=D,le.autoUpdate=B,le.needsUpdate=H,le.type=N}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Re(M){const D=M.target;D.removeEventListener("dispose",Re),rt(D)}function rt(M){mt(M),Se.remove(M)}function mt(M){const D=Se.get(M).programs;D!==void 0&&(D.forEach(function(B){me.releaseProgram(B)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,B,H,N,te){D===null&&(D=at);const ue=N.isMesh&&N.matrixWorld.determinant()<0,ge=fo(M,D,B,H,N);Me.setMaterial(H,ue);let _e=B.index,Ce=1;if(H.wireframe===!0){if(_e=$.getWireframeAttribute(B),_e===void 0)return;Ce=2}const Le=B.drawRange,xe=B.attributes.position;let Ye=Le.start*Ce,ot=(Le.start+Le.count)*Ce;te!==null&&(Ye=Math.max(Ye,te.start*Ce),ot=Math.min(ot,(te.start+te.count)*Ce)),_e!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,_e.count)):xe!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,xe.count));const ct=ot-Ye;if(ct<0||ct===1/0)return;Ke.setup(N,H,ge,B,_e);let Ft,Je=he;if(_e!==null&&(Ft=Y.get(_e),Je=Be,Je.setIndex(Ft)),N.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*dt()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(N.isLine){let ye=H.linewidth;ye===void 0&&(ye=1),Me.setLineWidth(ye*dt()),N.isLineSegments?Je.setMode(U.LINES):N.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else N.isPoints?Je.setMode(U.POINTS):N.isSprite&&Je.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ye=N._multiDrawStarts,gn=N._multiDrawCounts,Qe=N._multiDrawCount,$t=_e?Y.get(_e).bytesPerElement:1,hi=Se.get(H).currentProgram.getUniforms();for(let Bt=0;Bt<Qe;Bt++)hi.setValue(U,"_gl_DrawID",Bt),Je.render(ye[Bt]/$t,gn[Bt])}else if(N.isInstancedMesh)Je.renderInstances(Ye,ct,N.count);else if(B.isInstancedBufferGeometry){const ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gn=Math.min(B.instanceCount,ye);Je.renderInstances(Ye,ct,gn)}else Je.render(Ye,ct)};function qe(M,D,B){M.transparent===!0&&M.side===Yt&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,ci(M,D,B),M.side=bn,M.needsUpdate=!0,ci(M,D,B),M.side=Yt):ci(M,D,B)}this.compile=function(M,D,B=null){B===null&&(B=M),p=Ve.get(B),p.init(D),E.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==B&&M.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const ge=te[ue];qe(ge,B,N),H.add(ge)}else qe(te,B,N),H.add(te)}),E.pop(),p=null,H},this.compileAsync=function(M,D,B=null){const H=this.compile(M,D,B);return new Promise(N=>{function te(){if(H.forEach(function(ue){Se.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){N(M);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let wt=null;function Vt(M){wt&&wt(M)}function Pn(){Ot.stop()}function Yi(){Ot.start()}const Ot=new pl;Ot.setAnimationLoop(Vt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(M){wt=M,G.setAnimationLoop(M),M===null?Ot.stop():Ot.start()},G.addEventListener("sessionstart",Pn),G.addEventListener("sessionend",Yi),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,D,P),p=Ve.get(M,E.length),p.init(D),E.push(p),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Te),pe=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,pe),m=de.get(M,T.length),m.init(),T.push(m),G.enabled===!0&&G.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&oi(te,D,-1/0,y.sortObjects)}oi(M,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ie,fe),ze=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ze&&Ee.addToRenderList(m,M),this.info.render.frame++,ee===!0&&Q.beginShadows();const B=p.state.shadowsArray;le.render(B,M,D),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const te=D.cameras;if(N.length>0)for(let ue=0,ge=te.length;ue<ge;ue++){const _e=te[ue];Ts(H,N,M,_e)}ze&&Ee.render(M);for(let ue=0,ge=te.length;ue<ge;ue++){const _e=te[ue];Ss(m,M,_e,_e.viewport)}}else N.length>0&&Ts(H,N,M,D),ze&&Ee.render(M),Ss(m,M,D);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,D),Ke.resetDefaultState(),S=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],ee===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function oi(M,D,B,H){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){H&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const ue=K.update(M),ge=M.material;ge.visible&&m.push(M,ue,ge,B,Ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const ue=K.update(M),ge=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ne.copy(ue.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(ge)){const _e=ue.groups;for(let Ce=0,Le=_e.length;Ce<Le;Ce++){const xe=_e[Ce],Ye=ge[xe.materialIndex];Ye&&Ye.visible&&m.push(M,ue,Ye,B,Ne.z,xe)}}else ge.visible&&m.push(M,ue,ge,B,Ne.z,null)}}const te=M.children;for(let ue=0,ge=te.length;ue<ge;ue++)oi(te[ue],D,B,H)}function Ss(M,D,B,H){const N=M.opaque,te=M.transmissive,ue=M.transparent;p.setupLightsView(B),ee===!0&&Q.setGlobalState(y.clippingPlanes,B),H&&Me.viewport(R.copy(H)),N.length>0&&qn(N,D,B),te.length>0&&qn(te,D,B),ue.length>0&&qn(ue,D,B),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ts(M,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?ys:Rn,minFilter:hn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const te=p.state.transmissionRenderTarget[H.id],ue=H.viewport||R;te.setSize(ue.z,ue.w);const ge=y.getRenderTarget();y.setRenderTarget(te),y.getClearColor(X),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),ze&&Ee.render(B);const _e=y.toneMapping;y.toneMapping=Wn;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ee===!0&&Q.setGlobalState(y.clippingPlanes,H),qn(M,B,H),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let xe=0,Ye=D.length;xe<Ye;xe++){const ot=D[xe],ct=ot.object,Ft=ot.geometry,Je=ot.material,ye=ot.group;if(Je.side===Yt&&ct.layers.test(H.layers)){const gn=Je.side;Je.side=kt,Je.needsUpdate=!0,Es(ct,B,H,Ft,Je,ye),Je.side=gn,Je.needsUpdate=!0,Le=!0}}Le===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}y.setRenderTarget(ge),y.setClearColor(X,V),Ce!==void 0&&(H.viewport=Ce),y.toneMapping=_e}function qn(M,D,B){const H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,te=M.length;N<te;N++){const ue=M[N],ge=ue.object,_e=ue.geometry,Ce=H===null?ue.material:H,Le=ue.group;ge.layers.test(B.layers)&&Es(ge,D,B,_e,Ce,Le)}}function Es(M,D,B,H,N,te){M.onBeforeRender(y,D,B,H,N,te),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(y,D,B,H,M,te),N.transparent===!0&&N.side===Yt&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,y.renderBufferDirect(B,D,H,N,M,te),N.side=bn,N.needsUpdate=!0,y.renderBufferDirect(B,D,H,N,M,te),N.side=Yt):y.renderBufferDirect(B,D,H,N,M,te),M.onAfterRender(y,D,B,H,N,te)}function ci(M,D,B){D.isScene!==!0&&(D=at);const H=Se.get(M),N=p.state.lights,te=p.state.shadowsArray,ue=N.state.version,ge=me.getParameters(M,N.state,te,D,B),_e=me.getProgramCacheKey(ge);let Ce=H.programs;H.environment=M.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(M.isMeshStandardMaterial?k:x).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Re),Ce=new Map,H.programs=Ce);let Le=Ce.get(_e);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ue)return li(M,ge),Le}else ge.uniforms=me.getUniforms(M),M.onBeforeCompile(ge,y),Le=me.acquireProgram(ge,_e),Ce.set(_e,Le),H.uniforms=ge.uniforms;const xe=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xe.clippingPlanes=Q.uniform),li(M,ge),H.needsLights=Ul(M),H.lightsStateVersion=ue,H.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function ji(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=ar.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function li(M,D){const B=Se.get(M);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function fo(M,D,B,H,N){D.isScene!==!0&&(D=at),w.resetTextureUnits();const te=D.fog,ue=H.isMeshStandardMaterial?D.environment:null,ge=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nt,_e=(H.isMeshStandardMaterial?k:x).get(H.envMap||ue),Ce=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),xe=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let ct=Wn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ct=y.toneMapping);const Ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=Ft!==void 0?Ft.length:0,ye=Se.get(H),gn=p.state.lights;if(ee===!0&&(pe===!0||M!==v)){const Wt=M===v&&H.id===S;Q.setState(H,M,Wt)}let Qe=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==gn.state.version||ye.outputColorSpace!==ge||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==_e||H.fog===!0&&ye.fog!==te||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Q.numPlanes||ye.numIntersection!==Q.numIntersection)||ye.vertexAlphas!==Ce||ye.vertexTangents!==Le||ye.morphTargets!==xe||ye.morphNormals!==Ye||ye.morphColors!==ot||ye.toneMapping!==ct||ye.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,ye.__version=H.version);let $t=ye.currentProgram;Qe===!0&&($t=ci(H,D,N));let hi=!1,Bt=!1,$i=!1;const lt=$t.getUniforms(),an=ye.uniforms;if(Me.useProgram($t.program)&&(hi=!0,Bt=!0,$i=!0),H.id!==S&&(S=H.id,Bt=!0),hi||v!==M){Me.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),Gh(ae),zh(ae),lt.setValue(U,"projectionMatrix",ae)):lt.setValue(U,"projectionMatrix",M.projectionMatrix),lt.setValue(U,"viewMatrix",M.matrixWorldInverse);const Ln=lt.map.cameraPosition;Ln!==void 0&&Ln.setValue(U,be.setFromMatrixPosition(M.matrixWorld)),ke.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&lt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Bt=!0,$i=!0)}if(N.isSkinnedMesh){lt.setOptional(U,N,"bindMatrix"),lt.setOptional(U,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),lt.setValue(U,"boneTexture",Wt.boneTexture,w))}N.isBatchedMesh&&(lt.setOptional(U,N,"batchingTexture"),lt.setValue(U,"batchingTexture",N._matricesTexture,w),lt.setOptional(U,N,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",N._indirectTexture,w),lt.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",N._colorsTexture,w));const Zi=B.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Ae.update(N,B,$t),(Bt||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,lt.setValue(U,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(an.envMap.value=_e,an.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(an.envMapIntensity.value=D.environmentIntensity),Bt&&(lt.setValue(U,"toneMappingExposure",y.toneMappingExposure),ye.needsLights&&ws(an,$i),te&&H.fog===!0&&ce.refreshFogUniforms(an,te),ce.refreshMaterialUniforms(an,H,z,Z,p.state.transmissionRenderTarget[M.id]),ar.upload(U,ji(ye),an,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ar.upload(U,ji(ye),an,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&lt.setValue(U,"center",N.center),lt.setValue(U,"modelViewMatrix",N.modelViewMatrix),lt.setValue(U,"normalMatrix",N.normalMatrix),lt.setValue(U,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Wt=H.uniformsGroups;for(let Ln=0,In=Wt.length;Ln<In;Ln++){const po=Wt[Ln];I.update(po,$t),I.bind(po,$t)}}return $t}function ws(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ul(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,D,B){Se.get(M.texture).__webglTexture=D,Se.get(M.depthTexture).__webglTexture=B;const H=Se.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const B=Se.get(M);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,B=0){P=M,b=D,A=B;let H=!0,N=null,te=!1,ue=!1;if(M){const _e=Se.get(M);if(_e.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(_e.__hasExternalTextures)w.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const xe=M.depthTexture;if(_e.__boundDepthTexture!==xe){if(xe!==null&&Se.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ue=!0);const Le=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?N=Le[D][B]:N=Le[D],te=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?N=Se.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[B]:N=Le,R.copy(M.viewport),F.copy(M.scissor),O=M.scissorTest}else R.copy(ve).multiplyScalar(z).floor(),F.copy(Ue).multiplyScalar(z).floor(),O=Ze;if(Me.bindFramebuffer(U.FRAMEBUFFER,N)&&H&&Me.drawBuffers(M,N),Me.viewport(R),Me.scissor(F),Me.setScissorTest(O),te){const _e=Se.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,B)}else if(ue){const _e=Se.get(M.texture),Ce=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Ce)}S=-1},this.readRenderTargetPixels=function(M,D,B,H,N,te,ue){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){Me.bindFramebuffer(U.FRAMEBUFFER,ge);try{const _e=M.texture,Ce=_e.format,Le=_e.type;if(!ke.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-H&&B>=0&&B<=M.height-N&&U.readPixels(D,B,H,N,Pe.convert(Ce),Pe.convert(Le),te)}finally{const _e=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(M,D,B,H,N,te,ue){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){const _e=M.texture,Ce=_e.format,Le=_e.type;if(!ke.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-H&&B>=0&&B<=M.height-N){Me.bindFramebuffer(U.FRAMEBUFFER,ge);const xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.bufferData(U.PIXEL_PACK_BUFFER,te.byteLength,U.STREAM_READ),U.readPixels(D,B,H,N,Pe.convert(Ce),Pe.convert(Le),0);const Ye=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Ye);const ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Hh(U,ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,te),U.deleteBuffer(xe),U.deleteSync(ot),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,B=0){M.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-B),N=Math.floor(M.image.width*H),te=Math.floor(M.image.height*H),ue=D!==null?D.x:0,ge=D!==null?D.y:0;w.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ue,ge,N,te),Me.unbindTexture()},this.copyTextureToTexture=function(M,D,B=null,H=null,N=0){M.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let te,ue,ge,_e,Ce,Le,xe,Ye,ot;const ct=M.isCompressedTexture?M.mipmaps[N]:M.image;B!==null?(te=B.max.x-B.min.x,ue=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,_e=B.min.x,Ce=B.min.y,Le=B.isBox3?B.min.z:0):(te=ct.width,ue=ct.height,ge=ct.depth||1,_e=0,Ce=0,Le=0),H!==null?(xe=H.x,Ye=H.y,ot=H.z):(xe=0,Ye=0,ot=0);const Ft=Pe.convert(D.format),Je=Pe.convert(D.type);let ye;D.isData3DTexture?(w.setTexture3D(D,0),ye=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(w.setTexture2DArray(D,0),ye=U.TEXTURE_2D_ARRAY):(w.setTexture2D(D,0),ye=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const gn=U.getParameter(U.UNPACK_ROW_LENGTH),Qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=U.getParameter(U.UNPACK_SKIP_PIXELS),hi=U.getParameter(U.UNPACK_SKIP_ROWS),Bt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_e),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le);const $i=M.isDataArrayTexture||M.isData3DTexture,lt=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const an=Se.get(M),Zi=Se.get(D),Wt=Se.get(an.__renderTarget),Ln=Se.get(Zi.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let In=0;In<ge;In++)$i&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(M).__webglTexture,N,Le+In),M.isDepthTexture?(lt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(D).__webglTexture,N,ot+In),U.blitFramebuffer(_e,Ce,te,ue,xe,Ye,te,ue,U.DEPTH_BUFFER_BIT,U.NEAREST)):lt?U.copyTexSubImage3D(ye,N,xe,Ye,ot+In,_e,Ce,te,ue):U.copyTexSubImage2D(ye,N,xe,Ye,ot+In,_e,Ce,te,ue);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(ye,N,xe,Ye,ot,te,ue,ge,Ft,Je,ct.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,N,xe,Ye,ot,te,ue,ge,Ft,ct.data):U.texSubImage3D(ye,N,xe,Ye,ot,te,ue,ge,Ft,Je,ct):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,xe,Ye,te,ue,Ft,Je,ct.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,xe,Ye,ct.width,ct.height,Ft,ct.data):U.texSubImage2D(U.TEXTURE_2D,N,xe,Ye,te,ue,Ft,Je,ct);U.pixelStorei(U.UNPACK_ROW_LENGTH,gn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),U.pixelStorei(U.UNPACK_SKIP_ROWS,hi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt),N===0&&D.generateMipmaps&&U.generateMipmap(ye),Me.unbindTexture()},this.copyTextureToTexture3D=function(M,D,B=null,H=null,N=0){return M.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,M=arguments[2],D=arguments[3],N=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,B,H,N)},this.initRenderTarget=function(M){Se.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,Me.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class lr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new lr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ml extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new L;class ao{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ao(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gc=new L,_c=new $e,xc=new $e,Qm=new L,vc=new De,Ks=new L,Kr=new fn,yc=new De,qr=new mr;class eg extends J{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xo,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ks),this.boundingBox.expandByPoint(Ks)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ks),this.boundingSphere.expandByPoint(Ks)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(i),e.ray.intersectsSphere(Kr)!==!1&&(yc.copy(i).invert(),qr.copy(e.ray).applyMatrix4(yc),!(this.boundingBox!==null&&qr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_c.fromBufferAttribute(i.attributes.skinIndex,e),xc.fromBufferAttribute(i.attributes.skinWeight,e),gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=xc.getComponent(s);if(a!==0){const o=_c.getComponent(s);vc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qm.copy(gc).applyMatrix4(vc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sl extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tl extends vt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Dt,h=Dt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=new De,tg=new De;class oo{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:tg;Mc.multiplyMatrices(o,t[s]),Mc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new oo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tl(t,e,e,jt,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Sl),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Va extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wi=new De,Sc=new De,qs=[],Tc=new Cn,ng=new De,ns=new J,is=new fn;class ig extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Va(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ng)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Tc.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(Tc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),is.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),e.ray.intersectsSphere(is)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,wi),Sc.multiplyMatrices(n,wi),ns.matrixWorld=Sc,ns.raycast(e,qs);for(let a=0,o=qs.length;a<o;a++){const c=qs[a];c.instanceId=s,c.object=this,t.push(c)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Va(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(i*this.count),i,this.count,Ja,sn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class El extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hr=new L,ur=new L,Ec=new De,ss=new mr,Ys=new fn,Yr=new L,wc=new L;class co extends ut{constructor(e=new zt,t=new El){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hr.fromBufferAttribute(t,i-1),ur.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hr.distanceTo(ur);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;Ec.copy(i).invert(),ss.copy(e.ray).applyMatrix4(Ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),T=h.getX(_+1),E=js(this,e,ss,c,p,T);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=js(this,e,ss,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=js(this,e,ss,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=js(this,e,ss,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function js(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(hr.fromBufferAttribute(a,i),ur.fromBufferAttribute(a,s),t.distanceSqToSegment(hr,ur,Yr,wc)>n)return;Yr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Yr);if(!(c<e.near||c>e.far))return{distance:c,point:wc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Ac=new L,bc=new L;class sg extends co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ac.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ac.distanceTo(bc);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rg extends co{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wl extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rc=new De,Wa=new mr,$s=new fn,Zs=new L;class ag extends ut{constructor(e=new zt,t=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;Rc.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(Rc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Zs.fromBufferAttribute(u,m),Cc(Zs,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Zs.fromBufferAttribute(u,g),Cc(Zs,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cc(r,e,t,n,i,s,a){const o=Wa.distanceSqToPoint(r);if(o<t){const c=new L;Wa.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pc extends vt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xt extends zt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function T(){const y=new L,C=new L;let b=0;const A=(t-e)/n;for(let P=0;P<=s;P++){const S=[],v=P/s,R=v*(t-e)+e;for(let F=0;F<=i;F++){const O=F/i,X=O*c+o,V=Math.sin(X),W=Math.cos(X);C.x=R*V,C.y=-v*n+m,C.z=R*W,u.push(C.x,C.y,C.z),y.set(V,A,W).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-v),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){const v=_[S][P],R=_[S+1][P],F=_[S+1][P+1],O=_[S][P+1];(e>0||S!==0)&&(h.push(v,R,O),b+=3),(t>0||S!==s-1)&&(h.push(R,F,O),b+=3)}l.addGroup(p,b,0),p+=b}function E(y){const C=g,b=new Ge,A=new L;let P=0;const S=y===!0?e:t,v=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=i;F++){const X=F/i*c+o,V=Math.cos(X),W=Math.sin(X);A.x=S*W,A.y=m*v,A.z=S*V,u.push(A.x,A.y,A.z),d.push(0,v,0),b.x=V*.5+.5,b.y=W*.5*v+.5,f.push(b.x,b.y),g++}for(let F=0;F<i;F++){const O=C+F,X=R+F;y===!0?h.push(X,X+1,O):h.push(X+1,X,O),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pi extends xt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Pi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class st extends zt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const b=C/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+y,1-E),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const E=h[p][T+1],y=h[p][T],C=h[p+1][T],b=h[p+1][T+1];(p!==0||a>0)&&f.push(E,y,b),(p!==n-1||c<Math.PI)&&f.push(y,C,b)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _s extends zt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,T=(i+1)*f+g;a.push(_,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ft extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pn extends ft{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Js(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function og(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function cg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Al(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ms{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lg extends Ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vo,endingEnd:vo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yo:s=e,o=2*t-n;break;case Mo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yo:a=e,c=2*n-t;break;case Mo:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+T*a[l+C]+E*a[c+C]+y*a[u+C];return s}}class hg extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class ug extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ug(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case xr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return xr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&og(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=ms;class Xi extends mn{constructor(e,t,n){super(e,t,n)}}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ps;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class bl extends mn{}bl.prototype.ValueTypeName="color";class Hi extends mn{}Hi.prototype.ValueTypeName="number";class dg extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Kn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Gi extends mn{InterpolantFactoryMethodLinear(e){return new dg(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends mn{constructor(e,t,n){super(e,t,n)}}Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ps;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class zi extends mn{}zi.prototype.ValueTypeName="vector";class fg{constructor(e="",t=-1,n=[],i=uh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=cg(c);c=Lc(c,1,h),l=Lc(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Hi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Al(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}i.push(new Hi(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(zi,f+".position",d,"pos",i),n(Gi,f+".quaternion",d,"rot",i),n(zi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function pg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return zi;case"color":return bl;case"quaternion":return Gi;case"bool":case"boolean":return Xi;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function mg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pg(r.type);if(r.times===void 0){const t=[],n=[];Al(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const zn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class gg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const _g=new gg;class qi{constructor(e){this.manager=e!==void 0?e:_g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class xg extends Error{constructor(e,t){super(e),this.response=t}}class Rl extends qi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:i});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Sn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,A=h.length;b<A;b++){const P=h[b];P.onProgress&&P.onProgress(C)}p.enqueue(y),T()}},E=>{p.error(E)})}}});return new Response(m)}else throw new xg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{zn.add(e,l);const h=Sn[e];delete Sn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Sn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Sn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vg extends qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=gs("img");function c(){h(),zn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Cl extends qi{constructor(e){super(e)}load(e,t,n,i){const s=new vt,a=new vg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class _r extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jr=new De,Ic=new L,Dc=new L;class lo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yg extends lo{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Oi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mg extends _r{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new yg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uc=new De,rs=new L,$r=new L;class Sg extends lo{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(rs),$r.copy(n.position),$r.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($r),n.updateMatrixWorld(),i.makeTranslation(-rs.x,-rs.y,-rs.z),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc)}}class xs extends _r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tg extends lo{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vs extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pl extends _r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ds{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Eg extends qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zn.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return zn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),zn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});zn.add(e,c),s.manager.itemStart(e)}}const ho="\\[\\]\\.:\\/",wg=new RegExp("["+ho+"]","g"),uo="[^"+ho+"]",Ag="[^"+ho.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",uo),Rg=/(WCOD+)?/.source.replace("WCOD",Ag),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),Lg=new RegExp("^"+bg+Rg+Cg+Pg+"$"),Ig=["material","materials","bones","map"];class Dg{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(e){const t=Lg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ig.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Dg;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);const en=[{id:"khirdalan",name:"KHIRDALAN",subtitle:"Night Street (Default)",imagePath:null},{id:"warsaw",name:"WARSAW",subtitle:"Palace of Culture",imagePath:"/assets/arenas/warsaw.jpg"},{id:"krakow",name:"KRAKOW",subtitle:"Main Market Square",imagePath:"/assets/arenas/krakow.jpg"},{id:"baku",name:"BAKU",subtitle:"Flame Towers & Boulevard",imagePath:"/assets/arenas/baku.jpg"}];class Ug{scene;arenaHalfWidth=11.5;currentArenaId="khirdalan";streetBaseGroup;khirdalanGroup;customArenaGroup;cityLightsGroup;backdropMesh;backdropMat;radialGlowTex=null;textureCache=new Map;animatedLights=[];khirdalanWindows=[];customStageLights=[];steamParticles=[];constructor(){this.scene=new Ml,this.streetBaseGroup=new je,this.streetBaseGroup.name="street_base_group",this.scene.add(this.streetBaseGroup),this.khirdalanGroup=new je,this.khirdalanGroup.name="khirdalan_arena_group",this.scene.add(this.khirdalanGroup),this.customArenaGroup=new je,this.customArenaGroup.name="custom_arena_group",this.customArenaGroup.visible=!1,this.scene.add(this.customArenaGroup),this.cityLightsGroup=new je,this.cityLightsGroup.name="city_lights_group",this.customArenaGroup.add(this.cityLightsGroup),this.setupAtmosphere(),this.buildStreet(),this.buildCitySkyline(),this.buildStreetProps(),this.buildCustomBackdrop(),this.setupLighting()}setArena(e){this.currentArenaId=e;const t=en.find(n=>n.id===e)||en[0];if(e==="khirdalan"||!t.imagePath){this.khirdalanGroup.visible=!0,this.customArenaGroup.visible=!1,this.scene.fog=new lr(659229,.018);return}if(this.khirdalanGroup.visible=!1,this.customArenaGroup.visible=!0,this.scene.fog=null,e==="warsaw"?(this.backdropMesh.scale.set(22.5,9.6,1),this.backdropMesh.position.set(0,.16+4.8,-2.5)):(this.backdropMesh.scale.set(23.5,7.1,1),this.backdropMesh.position.set(0,.16+3.55,-2.5)),this.populateCustomStageLights(e),typeof document<"u"&&typeof document.createElementNS=="function"){const n=`${e}_hd`,i=this.textureCache.get(n);i?(this.backdropMat.map=i,this.backdropMat.needsUpdate=!0):this.loadSharpenedHDTexture(t.imagePath,e,s=>{this.textureCache.set(n,s),this.currentArenaId===e&&(this.backdropMat.map=s,this.backdropMat.needsUpdate=!0)})}}loadSharpenedHDTexture(e,t,n){const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{const s=t==="warsaw"?.76:.9,a=i.width,o=Math.round(i.height*s),c=document.createElement("canvas");c.width=a,c.height=o;const l=c.getContext("2d");if(!l)return;l.drawImage(i,0,0,a,o,0,0,a,o);try{const _=l.getImageData(0,0,a,o),m=_.data,p=new Uint8ClampedArray(m),T=(C,b)=>{const A=Math.max(0,Math.min(a-1,C)),S=(Math.max(0,Math.min(o-1,b))*a+A)*4;return p[S]<38&&p[S+1]<52&&p[S+2]<88},E=Math.floor(o*.65),y=Math.max(26,Math.round(a*.032));for(let C=0;C<E;C++)for(let b=0;b<a;b++){if(T(b,C))continue;let A=!1,P=!1,S=!1,v=!1,R=Math.max(0,b-y);for(let F=4;F<=y;F+=2)!A&&T(b-F,C)&&(A=!0,R=Math.max(0,b-F-2)),!P&&T(b+F,C)&&(P=!0,A||(R=Math.min(a-1,b+F+2))),!S&&(C-F<0||T(b,C-F))&&(S=!0),!v&&T(b,C+F)&&T(b-3,C+F)&&T(b+3,C+F)&&(v=!0);if(A&&P&&S&&v){const F=(C*a+b)*4,O=(C*a+R)*4;m[F]=p[O],m[F+1]=p[O+1],m[F+2]=p[O+2]}}l.putImageData(_,0,0)}catch{}const h=Math.min(2048,a*2),u=Math.round(o*(h/a)),d=document.createElement("canvas");d.width=h,d.height=u;const f=d.getContext("2d");if(!f)return;f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(c,0,0,a,o,0,0,h,u);try{const _=f.getImageData(0,0,h,u),m=_.data,p=new Uint8ClampedArray(m.length);p.set(m);const T=.48,E=h*4;for(let y=1;y<u-1;y++){let C=(y*h+1)*4;for(let b=1;b<h-1;b++,C+=4)for(let A=0;A<3;A++){const P=m[C+A],S=(m[C-4+A]+m[C+4+A]+m[C-E+A]+m[C+E+A])*.25,v=P+(P-S)*T,R=Math.max(0,Math.min(255,v))/255,F=Math.pow(R,.96)*255;p[C+A]=F}}_.data.set(p),f.putImageData(_,0,0)}catch{}const g=new Pc(d);g.colorSpace=pt,g.minFilter=hn,g.magFilter=Tt,g.anisotropy=16,g.generateMipmaps=!0,g.needsUpdate=!0,n(g)},i.src=e}buildCustomBackdrop(){const e=new cn(1,1);this.backdropMat=new ht({color:16777215,side:Yt,toneMapped:!1,fog:!1}),this.backdropMesh=new J(e,this.backdropMat),this.backdropMesh.scale.set(22.5,9.6,1),this.backdropMesh.position.set(0,4.96,-2.5),this.customArenaGroup.add(this.backdropMesh)}getRadialGlowTexture(){if(this.radialGlowTex)return this.radialGlowTex;if(typeof document>"u"||typeof document.createElementNS!="function")return null;const e=64,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)return null;const i=e/2,s=n.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.28,"rgba(255, 255, 255, 0.55)"),s.addColorStop(.65,"rgba(255, 255, 255, 0.14)"),s.addColorStop(1,"rgba(255, 255, 255, 0.0)"),n.fillStyle=s,n.fillRect(0,0,e,e);const a=new Pc(t);return a.needsUpdate=!0,this.radialGlowTex=a,a}populateCustomStageLights(e){for(;this.cityLightsGroup.children.length>0;)this.cityLightsGroup.remove(this.cityLightsGroup.children[0]);this.customStageLights=[];const t=this.getRadialGlowTexture(),n=(i,s,a,o,c,l,h=2.5,u=0)=>{const d=new cn(a,o),f=new ht({color:c,map:t,transparent:!0,opacity:.65,blending:ta,depthWrite:!1,toneMapped:!1,fog:!1}),g=new J(d,f);g.position.set(i,s,-2.42),this.cityLightsGroup.add(g),this.customStageLights.push({mesh:g,mat:f,baseColor:new we(c),phase:Math.random()*Math.PI*2,speed:h,mode:l,baseX:i,baseY:s,rowRatio:u})};if(e==="warsaw"){n(.02,8.95,.55,.55,16719426,"beacon",4),n(.02,7.15,.85,.85,16707722,"pulse",2),n(.02,4.2,2.8,3.8,12616956,"pulse",1.6);for(let i=-6;i<=6;i+=2)n(i*.9,1.35,.95,1.1,16638023,"twinkle",1.8+Math.abs(i)*.2);n(-9.3,5.15,1.8,1.8,16436245,"pulse",2),n(9.3,5.15,1.8,1.8,16436245,"pulse",2)}else if(e==="krakow"){for(let i=0;i<8;i++){const s=-9.4+i*.78;n(s,1.15,.95,1.1,16498468,"pulse",2+i%3*.5)}n(1.05,3.6,1.4,3.2,16096779,"pulse",1.8),n(2.25,3.2,1.3,2.8,16096779,"pulse",2.1);for(let i=0;i<12;i++){const s=-8.5+i*1.45;n(s,.42,1.2,.35,16096779,"shimmer",2.2+i%4*.4)}n(-10.1,4.9,1.9,1.9,16707722,"pulse",2.2),n(10.1,4.9,1.9,1.9,16707722,"pulse",2.2)}else if(e==="baku"){const i=[{cx:-.05,baseW:1.35,yStart:2.4,yEnd:4.9},{cx:1.35,baseW:1.1,yStart:2.3,yEnd:4.3},{cx:2.28,baseW:1.25,yStart:2.4,yEnd:4.7}];for(const s of i)for(let o=0;o<7;o++){const c=o/6,l=s.yStart+c*(s.yEnd-s.yStart),h=s.baseW*(1-c*.45);n(s.cx,l,h,.55,54015,"wave",3,c)}n(3.92,5.95,.55,.55,16719426,"beacon",4.5),n(-8.2,2.4,2.6,2.8,16096779,"pulse",1.6),n(8.4,2.2,3.8,2.2,16498468,"pulse",1.9);for(let s=0;s<14;s++){const a=-7+s*1.1;n(a,.45,1.2,.32,16498468,"shimmer",2.5+s%3*.6)}n(-10.1,4.9,1.9,1.9,16707722,"pulse",2.2),n(10.1,4.9,1.9,1.9,16707722,"pulse",2.2)}}setupAtmosphere(){this.scene.background=new we(395539),this.scene.fog=new lr(659229,.018)}setupLighting(){const e=new Pl(1976635,1.2);this.scene.add(e);const t=new vs(9684477,1.5);t.position.set(6,16,8),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=40,t.shadow.camera.left=-16,t.shadow.camera.right=16,t.shadow.camera.top=16,t.shadow.camera.bottom=-4,t.shadow.bias=-.001,this.scene.add(t);const n=new vs(165063,.8);n.position.set(-8,8,-6),this.scene.add(n)}buildStreet(){const e=new cn(60,20),t=new ft({color:1316900,roughness:.85,metalness:.15}),n=new J(e,t);n.rotation.x=-Math.PI/2,n.position.y=0,n.position.z=0,n.receiveShadow=!0,this.streetBaseGroup.add(n);const i=new ht({color:15381256});for(let f=-20;f<=20;f+=3.5){const g=new cn(2,.18),_=new J(g,i);_.rotation.x=-Math.PI/2,_.position.set(f,.005,.8),this.streetBaseGroup.add(_)}const s=new _t(60,.22,2.8),a=new ft({color:2238776,roughness:.9}),o=new J(s,a);o.position.set(0,.11,-2.4),o.receiveShadow=!0,this.streetBaseGroup.add(o);const c=new xt(.65,.65,.04,20),l=new ft({color:3359061,roughness:.7,metalness:.7}),h=new J(c,l);h.position.set(0,.02,.3),h.receiveShadow=!0,this.khirdalanGroup.add(h);const u=new st(.08,6,6),d=new ht({color:9741240,transparent:!0,opacity:.25});for(let f=0;f<15;f++){const g=new J(u,d.clone());g.position.set((Math.random()-.5)*.4,.1+Math.random()*1.5,.3+(Math.random()-.5)*.4),this.khirdalanGroup.add(g),this.steamParticles.push(g)}}buildCitySkyline(){const e=[988970,1120295,1973067,593174],t=[16707722,3718648,16020150,16436245];for(let n=0;n<9;n++){const i=4+Math.random()*3.5,s=14+Math.random()*16,a=4+Math.random()*4,o=-28+n*4.2,c=-6.5-Math.random()*7;this.createBuilding(o,s,c,i,a,e[n%e.length],t)}for(let n=0;n<9;n++){const i=4+Math.random()*3.5,s=14+Math.random()*16,a=4+Math.random()*4,o=4+n*4.2,c=-6.5-Math.random()*7;this.createBuilding(o,s,c,i,a,e[(n+2)%e.length],t)}this.createNeonSign("DRAGON ARCADE",-7,6.2,-4.8,16711807),this.createNeonSign("NEO COMBAT",7,6.6,-4.8,61695),this.createNeonSign("OVERDRIVE",0,8.2,-7.5,16760331)}createBuilding(e,t,n,i,s,a,o){const c=new _t(i,t,s),l=new ft({color:a,roughness:.8,metalness:.2}),h=new J(c,l);h.position.set(e,t/2,n),h.receiveShadow=!0,this.khirdalanGroup.add(h);const u=Math.floor(t/1.6),d=Math.floor(i/1.1);for(let f=2;f<u;f++)for(let g=1;g<d;g++)if(Math.random()<.45){const _=new cn(.35,.45),m=o[Math.floor(Math.random()*o.length)],p=new ht({color:m,transparent:!0,opacity:.9}),T=new J(_,p),E=e-i/2+g*(i/d),y=f*1.6,C=n+s/2+.02;T.position.set(E,y,C),this.khirdalanGroup.add(T),this.khirdalanWindows.push({mesh:T,mat:p,baseColor:new we(m),phase:Math.random()*Math.PI*2,speed:1.5+Math.random()*2.5,mode:Math.random()<.35?"toggle":"twinkle",baseX:E,baseY:y})}}createNeonSign(e,t,n,i,s){const a=new _t(4.8,1.2,.2),o=new ft({color:988970,roughness:.5}),c=new J(a,o);c.position.set(t,n,i),this.khirdalanGroup.add(c);const l=new _t(4.4,.85,.1),h=new ht({color:s}),u=new J(l,h);u.position.set(t,n,i+.1),this.khirdalanGroup.add(u);const d=new xs(s,2.2,8);d.position.set(t,n,i+.6),this.khirdalanGroup.add(d),this.animatedLights.push({light:d,baseIntensity:2.2,phase:Math.random()*10})}buildStreetProps(){this.createStreetLamp(-10,0,-1.8),this.createStreetLamp(10,0,-1.8);const e=new _t(2.2,1.4,1.2),t=new ft({color:1980971,roughness:.7,metalness:.3}),n=new J(e,t);n.position.set(-11.5,.8,-2.6),n.castShadow=!0,n.receiveShadow=!0,this.khirdalanGroup.add(n);const i=new ft({color:7877903,roughness:.9}),s=new J(new _t(1,1,1),i);s.position.set(11.2,.6,-2.6),s.castShadow=!0,this.khirdalanGroup.add(s);const a=new J(new _t(.8,.8,.8),i);a.position.set(12.1,.5,-2.5),a.rotation.y=.3,a.castShadow=!0,this.khirdalanGroup.add(a)}createStreetLamp(e,t,n){const i=new xt(.08,.12,4.8,8),s=new ft({color:1976635,roughness:.5,metalness:.8}),a=new J(i,s);a.position.set(e,t+2.4,n),a.castShadow=!0,this.khirdalanGroup.add(a);const o=new _t(.8,.08,.08),c=new J(o,s);c.position.set(e+(e<0?.35:-.35),t+4.75,n),this.khirdalanGroup.add(c);const l=new Pi(.28,.22,8),h=new ft({color:3359061}),u=new J(l,h);u.position.set(e+(e<0?.7:-.7),t+4.65,n),this.khirdalanGroup.add(u);const d=new st(.12,8,8),f=new ht({color:16772565}),g=new J(d,f);g.position.set(e+(e<0?.7:-.7),t+4.5,n),this.khirdalanGroup.add(g);const _=new xs(16760331,1.8,10);_.position.set(e+(e<0?.7:-.7),t+4.4,n),_.castShadow=!0,this.khirdalanGroup.add(_)}update(e,t=0){const n=performance.now()*.001;if(this.customArenaGroup.position.x=t*.55,this.currentArenaId==="khirdalan"){for(const i of this.animatedLights){const a=Math.sin(n*8+i.phase)*Math.cos(n*3.5)>.88?.6:1;i.light.intensity=i.baseIntensity*a}for(const i of this.khirdalanWindows){const s=Math.sin(n*i.speed+i.phase);i.mode==="toggle"?i.mat.opacity=s>-.2?.95:.08:i.mat.opacity=.35+(s*.5+.5)*.65}for(const i of this.steamParticles)i.position.y+=e*.45,i.scale.addScalar(e*.3),i.position.y>1.8&&(i.position.y=.1,i.position.x=(Math.random()-.5)*.4,i.position.z=.3+(Math.random()-.5)*.4,i.scale.set(1,1,1))}else for(const i of this.customStageLights){const s=Math.sin(n*i.speed+i.phase);if(i.mode==="beacon"){const a=Math.sin(n*i.speed)>.1?.95:.08;i.mat.opacity=a,i.mesh.scale.setScalar(.85+a*.35)}else if(i.mode==="pulse"){const a=s*.5+.5;i.mat.opacity=.14+a*.28,i.mesh.scale.setScalar(.92+a*.16)}else if(i.mode==="twinkle")i.mat.opacity=.15+(s*.5+.5)*.45;else if(i.mode==="toggle")i.mat.opacity=s>0?.55:.08;else if(i.mode==="shimmer")i.mat.opacity=.15+(s*.5+.5)*.38,i.mesh.scale.x=.85+(s*.5+.5)*.3;else if(i.mode==="wave"){const a=(n*.85-(i.rowRatio||0)*1.4)%3,o=a<0?a+3:a;o<1?i.mat.color.setHex(54015):o<2?i.mat.color.setHex(16722517):i.mat.color.setHex(2278750),i.mat.opacity=.18+(Math.sin(n*4-(i.rowRatio||0)*5)*.5+.5)*.28}}}}class Ng{camera;currentTarget=new L(0,1.6,0);currentPos=new L(0,1.6,10.5);minZ=8.5;maxZ=15;baseY=1.8;constructor(e=45,t=16/9){this.camera=new Ct(e,t,.1,1e3),this.camera.position.set(0,this.baseY,11),this.camera.lookAt(0,this.baseY,0)}reset(){this.currentPos.set(0,this.baseY,11),this.currentTarget.set(0,this.baseY,0),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentTarget)}update(e,t,n,i){const s=(t.position.x+n.position.x)*.5,a=(t.position.y+n.position.y)*.5,o=Math.abs(t.position.x-n.position.x),c=Ga.clamp(8.5+o*.45,this.minZ,this.maxZ),l=i*.45,h=Ga.clamp(s,-l,l),u=this.baseY+Math.max(0,a*.35),d=7*e;this.currentPos.x+=(h-this.currentPos.x)*d,this.currentPos.y+=(u-this.currentPos.y)*d,this.currentPos.z+=(c-this.currentPos.z)*d,this.currentTarget.x+=(h-this.currentTarget.x)*d,this.currentTarget.y+=(u-.2-this.currentTarget.y)*d,this.currentTarget.z=0,this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentTarget)}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}class Fg{activeKeys=new Set;prevKeys=new Set;holdThresholdMs=350;p1PunchHold={startTime:0,isHeld:!1,heavyTriggered:!1};p1KickHold={startTime:0,isHeld:!1,heavyTriggered:!1};p2PunchHold={startTime:0,isHeld:!1,heavyTriggered:!1};p2KickHold={startTime:0,isHeld:!1,heavyTriggered:!1};p1PunchLight=!1;p1PunchHeavy=!1;p1KickLight=!1;p1KickHeavy=!1;p2PunchLight=!1;p2PunchHeavy=!1;p2KickLight=!1;p2KickHeavy=!1;gameKeyCodes=new Set(["KeyW","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyR","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyK","KeyL","Semicolon","KeyO","Space"]);constructor(){this.setupListeners()}setupListeners(){window.addEventListener("keydown",e=>{if((this.gameKeyCodes.has(e.code)||e.key===";"||e.key==="ArrowUp"||e.key==="ArrowDown")&&e.preventDefault(),e.repeat)return;const t=performance.now();e.code==="KeyF"&&!this.p1PunchHold.isHeld&&(this.p1PunchHold={startTime:t,isHeld:!0,heavyTriggered:!1}),e.code==="KeyG"&&!this.p1KickHold.isHeld&&(this.p1KickHold={startTime:t,isHeld:!0,heavyTriggered:!1}),e.code==="KeyK"&&!this.p2PunchHold.isHeld&&(this.p2PunchHold={startTime:t,isHeld:!0,heavyTriggered:!1}),e.code==="KeyL"&&!this.p2KickHold.isHeld&&(this.p2KickHold={startTime:t,isHeld:!0,heavyTriggered:!1}),this.activeKeys.add(e.code),e.key===";"&&this.activeKeys.add("Semicolon")}),window.addEventListener("keyup",e=>{(this.gameKeyCodes.has(e.code)||e.key===";"||e.key==="ArrowUp"||e.key==="ArrowDown")&&e.preventDefault();const t=performance.now();e.code==="KeyF"&&this.p1PunchHold.isHeld&&(t-this.p1PunchHold.startTime<this.holdThresholdMs&&!this.p1PunchHold.heavyTriggered&&(this.p1PunchLight=!0),this.p1PunchHold.isHeld=!1),e.code==="KeyG"&&this.p1KickHold.isHeld&&(t-this.p1KickHold.startTime<this.holdThresholdMs&&!this.p1KickHold.heavyTriggered&&(this.p1KickLight=!0),this.p1KickHold.isHeld=!1),e.code==="KeyK"&&this.p2PunchHold.isHeld&&(t-this.p2PunchHold.startTime<this.holdThresholdMs&&!this.p2PunchHold.heavyTriggered&&(this.p2PunchLight=!0),this.p2PunchHold.isHeld=!1),e.code==="KeyL"&&this.p2KickHold.isHeld&&(t-this.p2KickHold.startTime<this.holdThresholdMs&&!this.p2KickHold.heavyTriggered&&(this.p2KickLight=!0),this.p2KickHold.isHeld=!1),this.activeKeys.delete(e.code),e.key===";"&&this.activeKeys.delete("Semicolon")}),window.addEventListener("blur",()=>{this.reset()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()})}isKeyDown(e){return this.activeKeys.has(e)}isKeyJustPressed(e){return this.activeKeys.has(e)&&!this.prevKeys.has(e)}getPlayer1Actions(){const e=performance.now();this.p1PunchHold.isHeld&&!this.p1PunchHold.heavyTriggered&&e-this.p1PunchHold.startTime>=this.holdThresholdMs&&(this.p1PunchHeavy=!0,this.p1PunchHold.heavyTriggered=!0),this.p1KickHold.isHeld&&!this.p1KickHold.heavyTriggered&&e-this.p1KickHold.startTime>=this.holdThresholdMs&&(this.p1KickHeavy=!0,this.p1KickHold.heavyTriggered=!0);const t=this.isKeyDown("KeyA"),n=this.isKeyDown("KeyD"),i=this.isKeyDown("KeyW"),s=this.isKeyDown("KeyS"),a=this.isKeyDown("KeyF"),o=this.isKeyDown("KeyG"),c=this.isKeyDown("KeyH"),l=this.isKeyDown("KeyR"),h=this.isKeyJustPressed("KeyW"),u=this.isKeyJustPressed("KeyH"),d=this.p1PunchLight,f=this.p1PunchHeavy,g=this.p1KickLight,_=this.p1KickHeavy,m=d||f,p=g||_;return this.p1PunchLight=!1,this.p1PunchHeavy=!1,this.p1KickLight=!1,this.p1KickHeavy=!1,{moveLeft:t,moveRight:n,jump:i,crouch:s,punch:a,kick:o,special:c,block:l,punchTriggered:m,kickTriggered:p,punchLightTriggered:d,punchHeavyTriggered:f,kickLightTriggered:g,kickHeavyTriggered:_,specialTriggered:u,jumpTriggered:h}}getPlayer2Actions(){const e=performance.now();this.p2PunchHold.isHeld&&!this.p2PunchHold.heavyTriggered&&e-this.p2PunchHold.startTime>=this.holdThresholdMs&&(this.p2PunchHeavy=!0,this.p2PunchHold.heavyTriggered=!0),this.p2KickHold.isHeld&&!this.p2KickHold.heavyTriggered&&e-this.p2KickHold.startTime>=this.holdThresholdMs&&(this.p2KickHeavy=!0,this.p2KickHold.heavyTriggered=!0);const t=this.isKeyDown("ArrowLeft"),n=this.isKeyDown("ArrowRight"),i=this.isKeyDown("ArrowUp"),s=this.isKeyDown("ArrowDown"),a=this.isKeyDown("KeyK"),o=this.isKeyDown("KeyL"),c=this.isKeyDown("Semicolon")||this.isKeyDown("Quote"),l=this.isKeyDown("KeyO"),h=this.isKeyJustPressed("ArrowUp"),u=this.isKeyJustPressed("Semicolon")||this.isKeyJustPressed("Quote"),d=this.p2PunchLight,f=this.p2PunchHeavy,g=this.p2KickLight,_=this.p2KickHeavy,m=d||f,p=g||_;return this.p2PunchLight=!1,this.p2PunchHeavy=!1,this.p2KickLight=!1,this.p2KickHeavy=!1,{moveLeft:t,moveRight:n,jump:i,crouch:s,punch:a,kick:o,special:c,block:l,punchTriggered:m,kickTriggered:p,punchLightTriggered:d,punchHeavyTriggered:f,kickLightTriggered:g,kickHeavyTriggered:_,specialTriggered:u,jumpTriggered:h}}update(){this.prevKeys=new Set(this.activeKeys)}reset(){this.activeKeys.clear(),this.prevKeys.clear(),this.p1PunchHold={startTime:0,isHeld:!1,heavyTriggered:!1},this.p1KickHold={startTime:0,isHeld:!1,heavyTriggered:!1},this.p2PunchHold={startTime:0,isHeld:!1,heavyTriggered:!1},this.p2KickHold={startTime:0,isHeld:!1,heavyTriggered:!1},this.p1PunchLight=!1,this.p1PunchHeavy=!1,this.p1KickLight=!1,this.p1KickHeavy=!1,this.p2PunchLight=!1,this.p2PunchHeavy=!1,this.p2KickLight=!1,this.p2KickHeavy=!1}}class kg{ctx=null;isMuted=!1;masterGain=null;musicGain=null;sfxGain=null;isMusicPlaying=!1;musicIntervalId=null;constructor(){}initContext(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.8,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.sfxGain.connect(this.masterGain)}catch(e){console.warn("AudioContext failed to initialize:",e)}}ensureContext(){this.initContext()}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.8,this.ctx.currentTime),this.isMuted}getIsMuted(){return this.isMuted}playMenuHover(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(660,this.ctx.currentTime+.05),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(t),t.connect(this.sfxGain),e.start(),e.stop(this.ctx.currentTime+.05)}playMenuSelect(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(520,e),t.frequency.setValueAtTime(780,e+.06),n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.01,e+.18),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.18)}playPunchImpact(e=!1){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const t=this.ctx.currentTime,n=e?220:180,i=e?35:55,s=e?.18:.1,a=e?.8:.5,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n,t),o.frequency.exponentialRampToValueAtTime(i,t+s),c.gain.setValueAtTime(a,t),c.gain.exponentialRampToValueAtTime(.01,t+s),o.connect(c),c.connect(this.sfxGain),o.start(t),o.stop(t+s),this.playNoiseBurst(s*.7,e?.55:.35,600,e?2e3:3e3)}playKickImpact(e=!1){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const t=this.ctx.currentTime,n=e?280:220,i=e?28:42,s=e?.26:.16,a=e?.9:.65,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,t),o.frequency.exponentialRampToValueAtTime(i,t+s),c.gain.setValueAtTime(a,t),c.gain.exponentialRampToValueAtTime(.01,t+s),o.connect(c),c.connect(this.sfxGain),o.start(t),o.stop(t+s),this.playNoiseBurst(s*.75,e?.65:.45,400,e?1600:2400)}playBlock(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(980,e),t.frequency.exponentialRampToValueAtTime(600,e+.18),n.type="square",n.frequency.setValueAtTime(1420,e),n.frequency.exponentialRampToValueAtTime(800,e+.14),i.gain.setValueAtTime(.45,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(i),n.connect(i),i.connect(this.sfxGain),t.start(e),n.start(e),t.stop(e+.18),n.stop(e+.18)}playSpecialByCharacter(e){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const t=this.ctx.currentTime;if(e==="fire_strike"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(600,t+.25),i.gain.setValueAtTime(.6,t),i.gain.exponentialRampToValueAtTime(.01,t+.35),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.35),this.playNoiseBurst(.35,.65,300,1800)}else if(e==="thunder_kick"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.setValueAtTime(880,t),n.frequency.linearRampToValueAtTime(120,t+.3),i.gain.setValueAtTime(.5,t),i.gain.exponentialRampToValueAtTime(.01,t+.35),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.35),this.playNoiseBurst(.25,.5,2e3,7e3)}else if(e==="shadow_rush"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(90,t),n.frequency.exponentialRampToValueAtTime(320,t+.15),n.frequency.exponentialRampToValueAtTime(45,t+.35),i.gain.setValueAtTime(.7,t),i.gain.exponentialRampToValueAtTime(.01,t+.35),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.35)}else if(e==="phoenix_kick"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(350,t),n.frequency.exponentialRampToValueAtTime(1100,t+.35),i.gain.setValueAtTime(.55,t),i.gain.exponentialRampToValueAtTime(.01,t+.38),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.38),this.playNoiseBurst(.25,.45,1500,4500)}else if(e==="dragon_spin"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(260,t),n.frequency.linearRampToValueAtTime(520,t+.18),n.frequency.linearRampToValueAtTime(180,t+.35),i.gain.setValueAtTime(.6,t),i.gain.exponentialRampToValueAtTime(.01,t+.38),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.38),this.playNoiseBurst(.3,.4,800,3e3)}else this.playSpecialAttack()}playSpecialAttack(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(950,e+.35),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.01,e+.4),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.4),this.playNoiseBurst(.2,.25,1200,4e3)}playSpecialExplosion(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(30,e+.45),n.gain.setValueAtTime(.85,e),n.gain.exponentialRampToValueAtTime(.01,e+.45),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.45),this.playNoiseBurst(.35,.65,250,2200)}playComboHit(e){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const t=this.ctx.currentTime,n=440+Math.min(e,8)*60,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(n,t),i.frequency.exponentialRampToValueAtTime(n*1.5,t+.08),s.gain.setValueAtTime(.28,t),s.gain.exponentialRampToValueAtTime(.001,t+.08),i.connect(s),s.connect(this.sfxGain),i.start(t),i.stop(t+.08)}playComboComplete(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{if(!this.ctx||!this.sfxGain)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(n,e+i*.06),a.gain.setValueAtTime(.18,e+i*.06),a.gain.exponentialRampToValueAtTime(.001,e+i*.06+.15),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.06),s.stop(e+i*.06+.15)})}playJump(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(380,e+.14),n.gain.setValueAtTime(.22,e),n.gain.exponentialRampToValueAtTime(.01,e+.14),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.14)}playLanding(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(40,e+.08),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.08)}playRoundStart(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime;[440,554,659].forEach((n,i)=>{if(!this.ctx||!this.sfxGain)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n,e+i*.1),a.gain.setValueAtTime(.3,e+i*.1),a.gain.exponentialRampToValueAtTime(.01,e+i*.1+.35),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.1),s.stop(e+i*.1+.35)})}playKO(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(25,e+.95),n.gain.setValueAtTime(.85,e),n.gain.exponentialRampToValueAtTime(.01,e+.95),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.95),this.playNoiseBurst(.65,.75,80,1400)}playVictory(){if(this.initContext(),!this.ctx||!this.sfxGain||this.isMuted)return;const e=this.ctx.currentTime,t=[392,523.25,659.25,783.99,1046.5];t.forEach((n,i)=>{if(!this.ctx||!this.sfxGain)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n,e+i*.12);const o=i===t.length-1?.6:.2;a.gain.setValueAtTime(.35,e+i*.12),a.gain.exponentialRampToValueAtTime(.01,e+i*.12+o),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.12),s.stop(e+i*.12+o)})}playNoiseBurst(e,t,n,i){if(!this.ctx||!this.sfxGain)return;const s=Math.floor(this.ctx.sampleRate*e),a=this.ctx.createBuffer(1,s,this.ctx.sampleRate),o=a.getChannelData(0);for(let u=0;u<s;u++)o[u]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=a;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime((n+i)*.5,this.ctx.currentTime),l.Q.setValueAtTime(1,this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(t,this.ctx.currentTime),h.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),c.connect(l),l.connect(h),h.connect(this.sfxGain),c.start()}startBattleMusic(){if(this.isMusicPlaying||(this.initContext(),!this.ctx||!this.musicGain))return;this.isMusicPlaying=!0;let e=0;const t=[110,110,164.8,110,110,110,130.8,146.8,98,98,146.8,98,98,98,123.5,130.8,87.3,87.3,130.8,87.3,87.3,87.3,110,123.5,82.4,82.4,123.5,82.4,98,110,123.5,146.8],n=120;this.musicIntervalId=window.setInterval(()=>{if(!this.ctx||!this.musicGain||this.isMuted||!this.isMusicPlaying)return;const i=this.ctx.currentTime,s=t[e%t.length],a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(s,i);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(s*3.5,i),c.frequency.exponentialRampToValueAtTime(s*1.2,i+.1),o.gain.setValueAtTime(.18,i),o.gain.exponentialRampToValueAtTime(.001,i+.11),a.connect(c),c.connect(o),o.connect(this.musicGain),a.start(i),a.stop(i+.11),e%2===1&&this.playNoiseBurst(.03,.04,6e3,12e3),e++},n)}stopBattleMusic(){this.isMusicPlaying=!1,this.musicIntervalId!==null&&(clearInterval(this.musicIntervalId),this.musicIntervalId=null)}}class Og{scene;projectiles=[];particles=[];particlePool=[];flashOverlay=null;container=null;shakeIntensity=0;shakeDecay=.9;shakeOffset=new Ge;slowMoTimer=0;slowMoFactor=1;hitStopTimer=0;constructor(e){this.scene=e,this.flashOverlay=document.getElementById("fx-flash-overlay"),this.container=document.getElementById("game-container"),this.initParticlePool()}initParticlePool(){const e=new st(.06,6,6),t=new ht({color:16768324,transparent:!0});for(let n=0;n<140;n++){const i=new J(e,t.clone());i.visible=!1,this.scene.add(i),this.particlePool.push(i)}}triggerScreenShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}triggerSlowMotion(e=.28,t=.85){this.slowMoFactor=e,this.slowMoTimer=t}triggerHitStop(e=.05){this.hitStopTimer=Math.max(this.hitStopTimer,e)}getEffectiveDt(e){return this.hitStopTimer>0?1e-4:this.slowMoTimer>0?e*this.slowMoFactor:e}triggerImpactFlash(e="white",t=60){this.flashOverlay&&(this.flashOverlay.style.backgroundColor=e,this.flashOverlay.style.opacity="0.40",setTimeout(()=>{this.flashOverlay&&(this.flashOverlay.style.opacity="0")},t))}spawnHitSparks(e,t=16770560,n=12){for(let i=0;i<n;i++){let s=this.particlePool.find(h=>!h.visible);if(!s){const h=new st(.06,6,6),u=new ht({color:t,transparent:!0});s=new J(h,u),this.scene.add(s),this.particlePool.push(s)}s.visible=!0,s.material.color.setHex(t),s.material.opacity=1,s.position.copy(e);const a=Math.random()*Math.PI*2,o=2.5+Math.random()*5.5,c=Math.cos(a)*o,l=Math.sin(a)*o+1.8;this.particles.push({mesh:s,velocity:new L(c,l,(Math.random()-.5)*1.5),life:0,maxLife:.25+Math.random()*.22,scaleDecay:!0})}}spawnBlockEffect(e){this.spawnHitSparks(e,54015,14)}spawnSpecialEffect(e,t,n,i=16347926){if(e==="fire_strike")for(let s=0;s<24;s++){const a=Math.random()>.3?16347926:16436245;this.spawnBurstParticle(t,a,n*(3+Math.random()*6),(Math.random()-.5)*4,.4)}else if(e==="thunder_kick")for(let s=0;s<28;s++){const a=Math.random()*Math.PI*2,o=4+Math.random()*5;this.spawnBurstParticle(t,54015,Math.cos(a)*o,Math.sin(a)*o,.35)}else if(e==="shadow_rush")for(let s=0;s<22;s++){const a=Math.random()>.4?9133302:3223169;this.spawnBurstParticle(t,a,-n*(2+Math.random()*5),(Math.random()-.5)*3,.45)}else if(e==="phoenix_kick")for(let s=0;s<26;s++){const a=Math.random()>.5?15680580:16436245;this.spawnBurstParticle(t,a,(Math.random()-.5)*3,4+Math.random()*6,.5)}else if(e==="dragon_spin")for(let s=0;s<30;s++){const a=s/30*Math.PI*2,o=5.5;this.spawnBurstParticle(t,14239471,Math.cos(a)*o,Math.sin(a)*o*.5,.4)}}spawnBurstParticle(e,t,n,i,s){let a=this.particlePool.find(o=>!o.visible);if(!a){const o=new st(.07,6,6),c=new ht({color:t,transparent:!0});a=new J(o,c),this.scene.add(a),this.particlePool.push(a)}a.visible=!0,a.material.color.setHex(t),a.material.opacity=1,a.position.copy(e),this.particles.push({mesh:a,velocity:new L(n,i,(Math.random()-.5)*1.5),life:0,maxLife:s,scaleDecay:!0})}spawnProjectile(e,t,n,i,s=3718648,a="fire_strike"){const o=new je;o.position.copy(t),o.position.z=0;const c=new st(.32,12,12),l=new ht({color:16777215}),h=new J(c,l);o.add(h);const u=new st(.54,12,12),d=new ht({color:s,transparent:!0,opacity:.8,wireframe:!0}),f=new J(u,d);o.add(f);const g=new xs(s,2.2,7);o.add(g),this.scene.add(o);const _=15,m={mesh:o,position:o.position,velocity:new L(n*_,0,0),ownerId:e,damage:i,knockback:8.5,radius:.52,lifeTime:0,maxLife:2.2,specialType:a};this.projectiles.push(m)}getProjectiles(){return this.projectiles}removeProjectile(e){const t=this.projectiles.indexOf(e);t!==-1&&(this.projectiles.splice(t,1),this.scene.remove(e.mesh))}update(e,t){this.hitStopTimer>0&&(this.hitStopTimer-=e),this.slowMoTimer>0&&(this.slowMoTimer-=e,this.slowMoTimer<=0&&(this.slowMoFactor=1));const n=this.getEffectiveDt(e);for(let i=this.projectiles.length-1;i>=0;i--){const s=this.projectiles[i];s.lifeTime+=n,s.position.addScaledVector(s.velocity,n),s.mesh.position.copy(s.position),s.mesh.rotation.z+=n*12,Math.random()<.45&&this.spawnHitSparks(s.position,54015,1),s.lifeTime>=s.maxLife&&this.removeProjectile(s)}for(let i=this.particles.length-1;i>=0;i--){const s=this.particles[i];if(s.life+=e,s.life>=s.maxLife){s.mesh.visible=!1,this.particles.splice(i,1);continue}s.velocity.y-=14*e,s.mesh.position.addScaledVector(s.velocity,e);const a=1-s.life/s.maxLife;s.mesh.material.opacity=a,s.scaleDecay&&s.mesh.scale.setScalar(a)}this.shakeIntensity>.005?(this.shakeOffset.x=(Math.random()*2-1)*this.shakeIntensity,this.shakeOffset.y=(Math.random()*2-1)*this.shakeIntensity,this.shakeIntensity*=this.shakeDecay,this.container&&(this.container.style.transform=`translate(${this.shakeOffset.x*28}px, ${this.shakeOffset.y*28}px)`)):(this.shakeIntensity=0,this.shakeOffset.set(0,0),this.container&&this.container.style.transform!==""&&(this.container.style.transform="translate(0px, 0px)"))}clearAll(){for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles=[];for(const e of this.particles)e.mesh.visible=!1;this.particles=[],this.slowMoTimer=0,this.slowMoFactor=1,this.hitStopTimer=0}}class Nc{static resolveFighterOverlap(e,t,n){if(e.isKnockedOut||t.isKnockedOut||Math.abs(e.position.y-t.position.y)>1.35)return;const a=e.hurtboxRadius+t.hurtboxRadius+.1,o=t.position.x-e.position.x,c=Math.abs(o);if(c<a){const l=a-c,h=o>=0?1:-1,u=l*.5,d=n-e.hurtboxRadius;let f=e.position.x-h*u,g=t.position.x+h*u;if(f<-d){const _=-d-f;f=-d,g+=_}else if(f>d){const _=f-d;f=d,g-=_}if(g<-d){const _=-d-g;g=-d,f+=_}else if(g>d){const _=g-d;g=d,f-=_}e.position.x=Math.max(-d,Math.min(d,f)),t.position.x=Math.max(-d,Math.min(d,g)),e.root.position.x=e.position.x,t.root.position.x=t.position.x}}static checkMeleeHit(e,t){if(!e.isAttacking||!e.currentAttack||e.hasHit||t.isKnockedOut)return!1;const n=e.currentAttack;if(e.attackTimer<n.activeStart||e.attackTimer>n.activeEnd)return!1;const i=t.position.x-e.position.x;if(!(e.facing===1&&i>-.25||e.facing===-1&&i<.25))return!1;const a=e.position.y,o=t.position.y,c=Math.abs(o-a);return n.height==="low"&&o>.9||n.height==="overhead"&&o>a+1.2?!1:Math.abs(i)<=n.range&&c<=1.6?(e.hasHit=!0,!0):!1}}const Bg=[{id:"triple_strike",name:"TRIPLE STRIKE",sequence:["PUNCH","PUNCH","KICK"],bonusDamage:4},{id:"power_combo",name:"POWER COMBO",sequence:["KICK","PUNCH","KICK"],bonusDamage:5},{id:"rising_attack",name:"RISING ATTACK",sequence:["CROUCH_PUNCH","KICK"],bonusDamage:6}];class Hg{p1State;p2State;comboTimeout=.85;onComboUpdate;onComboComplete;constructor(){this.p1State=this.createEmptyState(1),this.p2State=this.createEmptyState(2)}createEmptyState(e){return{playerId:e,currentHits:0,totalDamage:0,inputHistory:[],lastHitTime:0,matchedCombo:null}}registerInput(e,t){const n=e===1?this.p1State:this.p2State,i=performance.now()*.001;n.inputHistory=n.inputHistory.filter(s=>i-s.time<=1.2),n.inputHistory.push({action:t,time:i})}registerHit(e,t,n){const i=e===1?this.p1State:this.p2State,s=performance.now()*.001;i.currentHits>0&&s-i.lastHitTime>this.comboTimeout&&(i.currentHits=0,i.totalDamage=0,i.matchedCombo=null),i.currentHits++,i.lastHitTime=s;let a=1;i.currentHits===2?a=.9:i.currentHits===3?a=.8:i.currentHits>=4&&(a=.7);let o=Math.round(n*a*10)/10;const c=this.checkComboMatch(i.inputHistory.map(h=>h.action));let l=null;return c&&c!==i.matchedCombo&&(i.matchedCombo=c,l=c,o+=c.bonusDamage,this.onComboComplete?.(e,c,i.totalDamage+o)),i.totalDamage+=o,i.currentHits>=2&&this.onComboUpdate?.(e,i.currentHits,i.matchedCombo?i.matchedCombo.name:null),{scaledDamage:o,comboCount:i.currentHits,completedCombo:l}}checkComboMatch(e){if(e.length<2)return null;for(const t of Bg){const n=t.sequence.length;if(e.length>=n){const i=e.slice(-n);if(t.sequence.every((a,o)=>a==="PUNCH"?i[o].includes("PUNCH")&&!i[o].includes("CROUCH"):a==="KICK"?i[o].includes("KICK"):a==="CROUCH_PUNCH"?i[o]==="CROUCH_PUNCH":i[o]===a))return t}}return null}reset(e){(!e||e===1)&&(this.p1State=this.createEmptyState(1),this.onComboUpdate?.(1,0,null)),(!e||e===2)&&(this.p2State=this.createEmptyState(2),this.onComboUpdate?.(2,0,null))}update(){const e=performance.now()*.001;this.p1State.currentHits>0&&e-this.p1State.lastHitTime>this.comboTimeout&&this.reset(1),this.p2State.currentHits>0&&e-this.p2State.lastHitTime>this.comboTimeout&&this.reset(2)}}class Gg{vfx;audio;comboManager;onCombatEvent;constructor(e,t,n){this.vfx=e,this.audio=t,this.comboManager=new Hg,this.onCombatEvent=n}update(e,t,n,i){this.comboManager.update(),Nc.resolveFighterOverlap(t,n,i),this.processMelee(t,n),this.processMelee(n,t),this.processProjectiles(t,n)}processMelee(e,t){if(Nc.checkMeleeHit(e,t)){const n=e.currentAttack,i=e.facing,s=this.comboManager.registerHit(e.playerId,n.type,n.damage),a=s.scaledDamage,o=t.takeDamage(a,i,n.knockback,n.height),c=new L((e.position.x+t.position.x)*.5,Math.max(e.position.y,t.position.y)+1.2,0);if(o.wasBlocked)this.comboManager.reset(e.playerId),this.audio.playBlock(),this.vfx.spawnBlockEffect(c),this.vfx.triggerScreenShake(.12),this.onCombatEvent?.({type:"block",attackerId:e.playerId,defenderId:t.playerId,damage:o.damageDealt,attackType:n.type});else{const l=n.type.includes("heavy")||n.type==="special";if(this.vfx.triggerHitStop(l?.08:.04),n.type==="special"){const h=e.config.specialAttack?.type||"fire_strike";this.audio.playSpecialByCharacter(h),this.vfx.spawnSpecialEffect(h,c,e.facing)}else n.type.startsWith("kick")?this.audio.playKickImpact(n.type==="kick_heavy"):this.audio.playPunchImpact(n.type==="punch_heavy");s.completedCombo?(this.audio.playComboComplete(),this.vfx.spawnHitSparks(c,16766720,24)):s.comboCount>=2&&this.audio.playComboHit(s.comboCount),n.type.includes("heavy")?(this.vfx.spawnHitSparks(c,16724736,20),this.vfx.triggerImpactFlash("rgba(255, 100, 50, 0.6)",50),this.vfx.triggerScreenShake(.38)):n.type==="special"?(this.vfx.spawnHitSparks(c,54015,28),this.vfx.triggerImpactFlash("rgba(255, 255, 255, 0.8)",70),this.vfx.triggerScreenShake(.45)):(this.vfx.spawnHitSparks(c,16770560,12),this.vfx.triggerImpactFlash("rgba(255, 240, 200, 0.4)",35),this.vfx.triggerScreenShake(.18)),o.isKO?(this.audio.playKO(),this.vfx.triggerSlowMotion(.2,.7),this.vfx.triggerScreenShake(.85),this.vfx.triggerImpactFlash("#ff0033",140),this.onCombatEvent?.({type:"ko",attackerId:e.playerId,defenderId:t.playerId,damage:o.damageDealt,attackType:n.type})):this.onCombatEvent?.({type:"hit",attackerId:e.playerId,defenderId:t.playerId,damage:o.damageDealt,attackType:n.type})}}}processProjectiles(e,t){const n=this.vfx.getProjectiles();for(const i of n){const s=i.ownerId===1?t:e;if(s.isKnockedOut)continue;const a=s.position.y+.95,o=Math.abs(i.position.x-s.position.x),c=Math.abs(i.position.y-a);if(o<i.radius+s.hurtboxRadius&&c<1.1){const l=i.velocity.x>0?1:-1,h=s.takeDamage(i.damage,l,i.knockback,"special");this.vfx.removeProjectile(i),this.audio.playSpecialExplosion();const u=i.position.clone();h.wasBlocked?(this.audio.playBlock(),this.vfx.spawnBlockEffect(u),this.vfx.triggerScreenShake(.25),this.onCombatEvent?.({type:"block",attackerId:i.ownerId,defenderId:s.playerId,damage:h.damageDealt,attackType:"special"})):(this.vfx.spawnHitSparks(u,54015,25),this.vfx.triggerScreenShake(.6),this.vfx.triggerImpactFlash("rgba(0, 210, 255, 0.7)",90),h.isKO?(this.audio.playKO(),this.vfx.triggerSlowMotion(.2,.7),this.vfx.triggerScreenShake(.9),this.vfx.triggerImpactFlash("#ff0033",120),this.onCombatEvent?.({type:"ko",attackerId:i.ownerId,defenderId:s.playerId,damage:h.damageDealt,attackType:"special"})):this.onCombatEvent?.({type:"hit",attackerId:i.ownerId,defenderId:s.playerId,damage:h.damageDealt,attackType:"special"}))}}}}class zg{ui;audio;p1Wins=0;p2Wins=0;currentRound=1;roundTimer=90;phase="countdown";countdownStep=0;countdownTimer=0;roundOverDelayTimer=0;onMatchEnded;constructor(e,t,n){this.ui=e,this.audio=t,this.onMatchEnded=n}startNewMatch(e,t){this.p1Wins=0,this.p2Wins=0,this.currentRound=1,this.startRound(e,t)}restartSameMatch(e,t){this.p1Wins=0,this.p2Wins=0,this.currentRound=1,this.startRound(e,t)}startRound(e,t){this.phase="countdown",this.roundTimer=90,this.countdownStep=0,this.countdownTimer=0,this.roundOverDelayTimer=0,e.resetForRound(-4.2,1),t.resetForRound(4.2,-1),this.ui.showAnnounce(`ROUND ${this.currentRound}`,"READY",1e3),this.audio.playRoundStart()}update(e,t,n){this.phase==="countdown"?this.updateCountdown(e,t,n):this.phase==="fighting"?this.updateFighting(e,t,n):this.phase==="round_over"&&this.updateRoundOver(e,t,n)}updateCountdown(e,t,n){this.countdownTimer+=e,this.countdownStep===0&&this.countdownTimer>=1?(this.countdownStep=1,this.ui.showAnnounce("3","",800),this.audio.playMenuSelect()):this.countdownStep===1&&this.countdownTimer>=1.8?(this.countdownStep=2,this.ui.showAnnounce("2","",800),this.audio.playMenuSelect()):this.countdownStep===2&&this.countdownTimer>=2.6?(this.countdownStep=3,this.ui.showAnnounce("1","",800),this.audio.playMenuSelect()):this.countdownStep===3&&this.countdownTimer>=3.4&&(this.countdownStep=4,this.phase="fighting",this.ui.showAnnounce("FIGHT!","",1e3),this.audio.playRoundStart())}updateFighting(e,t,n){if(this.roundTimer=Math.max(0,this.roundTimer-e),t.health<=0||n.health<=0){this.endRoundWithKO(t,n);return}this.roundTimer<=0&&this.endRoundWithTimeOut(t,n)}endRoundWithKO(e,t){if(this.phase="round_over",this.roundOverDelayTimer=0,e.health<=0&&t.health<=0){this.ui.showAnnounce("DOUBLE K.O.!","DRAW GAME",2500);return}e.health<=0?(this.p2Wins++,t.triggerVictory(),this.ui.showAnnounce("K.O.!","PLAYER 2 WINS ROUND",2500)):(this.p1Wins++,e.triggerVictory(),this.ui.showAnnounce("K.O.!","PLAYER 1 WINS ROUND",2500))}endRoundWithTimeOut(e,t){this.phase="round_over",this.roundOverDelayTimer=0,Math.abs(e.health-t.health)<.1?this.ui.showAnnounce("TIME UP!","DRAW ROUND",2500):e.health>t.health?(this.p1Wins++,e.triggerVictory(),this.ui.showAnnounce("TIME UP!","PLAYER 1 WINS ROUND",2500)):(this.p2Wins++,t.triggerVictory(),this.ui.showAnnounce("TIME UP!","PLAYER 2 WINS ROUND",2500))}updateRoundOver(e,t,n){if(this.roundOverDelayTimer+=e,this.roundOverDelayTimer>=3)if(this.p1Wins>=2||this.p2Wins>=2){this.phase="match_over";const i=this.p1Wins>=2?1:2;this.audio.playVictory(),this.onMatchEnded?.(i)}else this.currentRound++,this.startRound(t,n)}}const nt={fighter_01:{id:"tacir",name:"TACIR",displayName:"Tacir",gender:"male",title:"THE STREET BRAWLER",archetype:"Balanced Striker",bio:"A resilient, battle-hardened street brawler in tailored black attire with rolled sleeves, delivering disciplined boxing combos and fiery strikes.",avatarIcon:"🥊",portraitPath:"/assets/characters/tacir/preview.webp",previewImagePath:"/assets/characters/tacir/preview.webp",modelPath:"/assets/characters/tacir/model.glb",positionOffset:{x:0,y:0,z:0},scale:{x:.96,y:1,z:.96},visualNotes:"Stylized muscular male fighter with slicked-back dark hair, prominent eyebrows, full dark beard and mustache, and an intense guarded stance.",outfitNotes:"Tailored black button-down shirt with sleeves rolled past the forearms, matching black trousers with a silver-buckled leather belt, and heavy black boots.",outfit:{styleName:"Tailored Black Brawler Attire",topDescription:"Tailored black button-down collared shirt with rolled sleeves",bottomDescription:"Black tailored trousers with silver-buckled leather belt",footwear:"Heavy-duty black combat boots",gloves:"Bare-knuckle disciplined boxing stance"},appearance:{skinTone:13935475,hairColor:1841431,eyeColor:2824208,hairStyle:"short",primaryColor:1579035,secondaryColor:2565930,accentColor:14870768,gender:"male",scale:{x:.96,y:1,z:.96}},specialAttack:{name:"FIRE STRIKE",type:"fire_strike",damage:20,cooldown:6,color:16347926,secondaryColor:16772565,description:"Performs a powerful forward lunging punch surrounded by blazing orange fire energy."},stats:{maxHealth:100,moveSpeed:7.2,jumpVelocity:14.5,punchLightDamage:6,punchHeavyDamage:12,punchJumpDamage:9,punchCrouchDamage:7,kickLightDamage:9,kickHeavyDamage:15,kickJumpDamage:12,kickCrouchDamage:8,punchDamage:8,kickDamage:12,specialDamage:20,specialCooldown:6}},fighter_02:{id:"farhad",name:"FARHAD",displayName:"Farhad",gender:"male",title:"SHADOW BRAWLER",archetype:"Heavy Boxer",bio:"A focused powerhouse striker in stealth black streetwear and cargo trousers, delivering heavy knockout punches and counter-strikes.",avatarIcon:"🥊",portraitPath:"/assets/characters/farhad/preview.webp",previewImagePath:"/assets/characters/farhad/preview.webp",modelPath:"/assets/characters/farhad/model.glb",positionOffset:{x:0,y:0,z:0},scale:{x:.96,y:1,z:.96},visualNotes:"Stylized 3D male fighter with dark curly hair faded on the sides, defined dark eyebrows, focused eyes, and a neat dark beard and mustache.",outfitNotes:"Matte black ribbed long-sleeve crewneck sweatshirt, black cargo pants with thigh utility flap pockets and cuffed ankles, and crisp white low-top sneakers.",outfit:{styleName:"All-Black Crewneck & Cargo Streetwear",topDescription:"Matte black long-sleeved ribbed crewneck pullover sweatshirt",bottomDescription:"Relaxed black cargo trousers with outer thigh flap pockets and elastic ankle cuffs",footwear:"Crisp white low-top court sneakers",gloves:"Bare-knuckle power boxing stance"},appearance:{skinTone:15844e3,hairColor:1513239,eyeColor:3900150,hairStyle:"short",primaryColor:1579035,secondaryColor:2565930,accentColor:16317180,gender:"male",scale:{x:.96,y:1,z:.96}},specialAttack:{name:"THUNDER KICK",type:"thunder_kick",damage:20,cooldown:6,color:54015,secondaryColor:3718648,description:"Performs a powerful spinning 360-degree kick charged with crackling blue lightning."},stats:{maxHealth:100,moveSpeed:7.2,jumpVelocity:14.5,punchLightDamage:6,punchHeavyDamage:12,punchJumpDamage:9,punchCrouchDamage:7,kickLightDamage:9,kickHeavyDamage:15,kickJumpDamage:12,kickCrouchDamage:8,punchDamage:8,kickDamage:12,specialDamage:20,specialCooldown:6}},fighter_03:{id:"rufat",name:"RUFAT",displayName:"Rufat",gender:"male",title:"WILD COMPANION",archetype:"Urban Martial Artist",bio:"An agile street fighter accompanied by his loyal shoulder monkey, wearing a crisp crewneck sweater, black backpack, and dark cargo pants.",avatarIcon:"🐒",portraitPath:"/assets/characters/rufat/preview.webp",previewImagePath:"/assets/characters/rufat/preview.webp",modelPath:"/assets/characters/rufat/model.glb",positionOffset:{x:0,y:0,z:0},scale:{x:.96,y:1,z:.96},visualNotes:"Stylized 3D male fighter with a short dark fade haircut, trimmed beard, confident smile, and an orange monkey companion perched on his right shoulder.",outfitNotes:"Light off-white ribbed crewneck sweater with black backpack shoulder straps, dark charcoal cargo pants with side flap pockets, and crisp white sneakers.",outfit:{styleName:"Backpack & Shoulder Monkey Street Style",topDescription:"Light off-white ribbed crewneck sweatshirt with black backpack straps and shoulder monkey companion",bottomDescription:"Dark charcoal-black cargo trousers with thigh flap pockets and tapered cuffs",footwear:"Chunky crisp white low-top athletic sneakers",gloves:"Bare-knuckle street fighting stance"},appearance:{skinTone:16041640,hairColor:1841431,eyeColor:3875353,hairStyle:"short",primaryColor:14870768,secondaryColor:2565930,accentColor:14251782,gender:"male",scale:{x:.96,y:1,z:.96}},specialAttack:{name:"SHADOW RUSH",type:"shadow_rush",damage:20,cooldown:6,color:9133302,secondaryColor:3223169,description:"Executes a hyper-fast forward shadow dash leaving motion trails followed by an impactful strike."},stats:{maxHealth:100,moveSpeed:7.2,jumpVelocity:14.5,punchLightDamage:6,punchHeavyDamage:12,punchJumpDamage:9,punchCrouchDamage:7,kickLightDamage:9,kickHeavyDamage:15,kickJumpDamage:12,kickCrouchDamage:8,punchDamage:8,kickDamage:12,specialDamage:20,specialCooldown:6}},fighter_04:{id:"aynur",name:"AYNUR",displayName:"Aynur",gender:"female",title:"CRIMSON ROSE",archetype:"Elegant Precision Striker",bio:"A confident, poised, and stylish street fighter in her signature crimson puffer jacket and crossbody bag, delivering fast precision combos.",avatarIcon:"🌸",portraitPath:"/assets/characters/aynur/preview.webp",previewImagePath:"/assets/characters/aynur/preview.webp",modelPath:"/assets/characters/aynur/model.glb",positionOffset:{x:0,y:0,z:0},scale:{x:.96,y:1,z:.96},visualNotes:"Stylized 3D character matching the Tripo3D model: fair warm skin tone with rosy cheeks, large expressive dark brown eyes, defined dark eyebrows, friendly confident smile, and voluminous dark wavy hair parted slightly off-center cascading over both shoulders.",outfitNotes:"Bright crimson/red quilted puffer jacket worn open with white trim and snap button cuffs over an off-white ribbed cable-knit sweater, matching red quilted crescent crossbody bag slung from right shoulder to left hip, charcoal-slate jogger pants with silver side-seam studs, and chunky crisp white sneakers.",outfit:{styleName:"Red Puffer & Crossbody Street Style",topDescription:"Bright crimson quilted puffer jacket worn open over cream cable-knit sweater with red crescent crossbody bag",bottomDescription:"Charcoal-gray relaxed joggers with silver side-seam rivet studs and ankle cuffs",footwear:"Chunky crisp white platform athletic sneakers",gloves:"Bare-knuckle street fighting stance with silver-buttoned red jacket cuffs"},appearance:{skinTone:16041640,hairColor:2496276,eyeColor:2824208,lipColor:13715785,hairStyle:"half_up_wavy",primaryColor:13111342,secondaryColor:5395035,accentColor:16317180,gender:"female",scale:{x:.96,y:1,z:.96}},specialAttack:{name:"PHOENIX KICK",type:"phoenix_kick",damage:20,cooldown:6,color:13111342,secondaryColor:16622767,description:"Launches a soaring rising martial kick enveloped in crimson-red and radiant rose energy trails."},stats:{maxHealth:100,moveSpeed:7.2,jumpVelocity:14.5,punchLightDamage:6,punchHeavyDamage:12,punchJumpDamage:9,punchCrouchDamage:7,kickLightDamage:9,kickHeavyDamage:15,kickJumpDamage:12,kickCrouchDamage:8,punchDamage:8,kickDamage:12,specialDamage:20,specialCooldown:6}},fighter_05:{id:"sevil",name:"SEVIL",displayName:"Sevil",gender:"female",title:"BOHO BLOSSOM",archetype:"Floral Boho Striker",bio:"A vibrant bohemian martial artist adorned with a daisy flower crown, floral bell-sleeve tunic, and flared embroidered trousers, striking with fluid precision.",avatarIcon:"🌼",portraitPath:"/assets/characters/sevil/preview.webp",previewImagePath:"/assets/characters/sevil/preview.webp",modelPath:"/assets/characters/sevil/model.glb",positionOffset:{x:0,y:0,z:0},scale:{x:.96,y:1,z:.96},visualNotes:"Stylized 3D female martial artist with center-parted dark brown bob hair, white daisy flower crown, warm smile, turquoise choker, and medallion necklace.",outfitNotes:"Floral bell-sleeved boho tunic in golden yellow, pink, and brown with mandala medallion belt, fingerless brown combat wraps, floral-embroidered flared brown pants, and rugged lace-up boots.",outfit:{styleName:"Floral Boho & Daisy Crown",topDescription:"Off-shoulder floral bohemian bell-sleeve tunic with turquoise choker and mandala medallion belt",bottomDescription:"Flared brown bell-bottom trousers with vibrant floral hem embroidery",footwear:"Chunky brown lace-up combat boots",gloves:"Fingerless brown leather combat wraps with red wrist bands"},appearance:{skinTone:15844e3,hairColor:3875353,eyeColor:3875353,lipColor:12131356,hairStyle:"half_up_wavy",primaryColor:14251782,secondaryColor:6044214,accentColor:16707722,gender:"female",scale:{x:.96,y:1,z:.96}},specialAttack:{name:"DRAGON SPIN",type:"dragon_spin",damage:20,cooldown:6,color:14239471,secondaryColor:9647082,description:"Executes a high-speed spinning sweep attack with purple dragon energy ribbons and expanding circular shockwaves."},stats:{maxHealth:100,moveSpeed:7.2,jumpVelocity:14.5,punchLightDamage:6,punchHeavyDamage:12,punchJumpDamage:9,punchCrouchDamage:7,kickLightDamage:9,kickHeavyDamage:15,kickJumpDamage:12,kickCrouchDamage:8,punchDamage:8,kickDamage:12,specialDamage:20,specialCooldown:6}}};nt.tacir=nt.fighter_01;nt.alex=nt.fighter_01;nt.farhad=nt.fighter_02;nt.max=nt.fighter_02;nt.rufat=nt.fighter_03;nt.ryan=nt.fighter_03;nt.aynur=nt.fighter_04;nt.luna=nt.fighter_04;nt.sevil=nt.fighter_05;nt.maya=nt.fighter_05;const Kt=[nt.fighter_01,nt.fighter_02,nt.fighter_03,nt.fighter_04,nt.fighter_05];class ln{static avatarTextureCache=new Map;static create(e){const t=new je;t.name=`fighter_${e.id}`;const n=e.appearance,i=n.gender==="female",s=new ft({color:n.skinTone,roughness:.68,metalness:.05}),a=new ft({color:n.lipColor||ln.blendColor(n.skinTone,12131356,.25),roughness:.55,metalness:.05}),o=new ft({color:n.hairColor,roughness:.55,metalness:.12}),c=new ft({color:n.primaryColor,roughness:.72,metalness:.15}),l=new ft({color:n.secondaryColor,roughness:.78,metalness:.1}),h=new ft({color:n.accentColor,roughness:.35,metalness:.45}),u=new ft({color:16317180,roughness:.2}),d=new ft({color:n.eyeColor||1976635,roughness:.15}),f=i?.44:.54,g=i?.26:.34,_=i?.42:.46,m=i?.11:.135,p=i?.08:.105,T=new je;T.position.y=.95,t.add(T);const E=new xt(_*.5,_*.44,.24,14),y=new J(E,l);y.castShadow=!0,y.receiveShadow=!0,T.add(y);const C=new xt(_*.52,_*.52,.08,14),b=new J(C,h);b.position.y=.09,T.add(b);const A=new je;A.position.y=.12,T.add(A);const P=new xt(f*.48,_*.46,.32,14),S=new J(P,c);S.position.y=.16,S.castShadow=!0,S.receiveShadow=!0,A.add(S);const v=new je;v.position.y=.32,A.add(v);const R=new _t(f,.34,g),F=new J(R,c);F.position.y=.17,F.castShadow=!0,F.receiveShadow=!0,v.add(F);const O=new _t(f*.9,.14,.04),X=new J(O,h);X.position.set(0,.22,g*.5+.015),v.add(X);const V=new je;V.position.y=.4,v.add(V);const W=new xt(.09,.115,.14,12),Z=new J(W,s);Z.position.y=.07,Z.castShadow=!0,V.add(Z);const z=new st(.185,18,16);z.scale(1,1.22,1.05);const ie=new J(z,s);ie.position.y=.28,ie.castShadow=!0,V.add(ie);const fe=new Pi(.13,.18,5);fe.rotateY(Math.PI);const ve=new J(fe,s);ve.position.set(0,.21,.07),V.add(ve);const Ue=new Pi(.032,.08,4);Ue.rotateX(Math.PI*.4);const Ze=new J(Ue,s);Ze.position.set(0,.27,.2),V.add(Ze);const q=new _t(.07,.022,.03),ee=new J(q,a);ee.position.set(0,.21,.18),V.add(ee);const pe=new st(.04,8,8);pe.scale(.5,1.4,1);const ae=new J(pe,s);ae.position.set(.19,.28,-.02);const Te=new J(pe,s);Te.position.set(-.19,.28,-.02),V.add(ae,Te);const be=.032,Ne=new st(be,10,10),at=new st(be*.65,8,8),ze=new J(Ne,u);ze.position.set(.065,.285,.165);const dt=new J(at,d);dt.position.set(.065,.285,.19);const U=new J(Ne,u);U.position.set(-.065,.285,.165);const Pt=new J(at,d);Pt.position.set(-.065,.285,.19),V.add(ze,dt,U,Pt);const Oe=new _t(.065,.022,.03),ke=new J(Oe,o);ke.position.set(.065,.325,.18),ke.rotation.z=-.12;const Me=new J(Oe,o);Me.position.set(-.065,.325,.18),Me.rotation.z=.12,V.add(ke,Me),ln.createHairStyle(V,n.hairStyle,o,h);const Xe=new je;Xe.position.set(f*.55,.26,0),v.add(Xe);const Se=new st(p*1.3,12,12),w=new J(Se,c);Xe.add(w);const x=new xt(p*.98,p*.86,.32,12);x.translate(0,-.16,0);const k=new J(x,c);k.castShadow=!0,Xe.add(k);const Y=new je;Y.position.set(0,-.32,0),Xe.add(Y);const $=new xt(p*.88,p*.76,.3,12);$.translate(0,-.15,0);const K=new J($,s);K.castShadow=!0,Y.add(K);const me=new xt(p*.92,p*.82,.18,12);me.translate(0,-.18,0);const ce=new J(me,h);Y.add(ce);const de=new je;de.position.set(0,-.3,0),Y.add(de);const Ve=new _t(p*1.8,p*2.2,p*2),Q=new J(Ve,h);Q.castShadow=!0,de.add(Q);const le=new je;le.position.set(-f*.55,.26,0),v.add(le);const Ee=new J(Se,c);le.add(Ee);const Ae=new J(x,c);Ae.castShadow=!0,le.add(Ae);const he=new je;he.position.set(0,-.32,0),le.add(he);const Be=new J($,s);Be.castShadow=!0,he.add(Be);const Pe=new J(me,h);he.add(Pe);const Ke=new je;Ke.position.set(0,-.3,0),he.add(Ke);const I=new J(Ve,h);I.castShadow=!0,Ke.add(I);const ne=new je;ne.position.set(_*.3,-.06,0),T.add(ne);const G=new xt(m*1.12,m*.92,.44,12);G.translate(0,-.22,0);const j=new J(G,l);j.castShadow=!0,ne.add(j);const se=new je;se.position.set(0,-.44,0),ne.add(se);const oe=new xt(m*.9,m*.8,.44,12);oe.translate(0,-.22,0);const Re=new J(oe,l);Re.castShadow=!0,se.add(Re);const rt=new je;rt.position.set(0,-.44,0),se.add(rt);const mt=new _t(m*1.6,.11,.32);mt.translate(0,-.055,.08);const qe=new J(mt,h);qe.castShadow=!0,rt.add(qe);const wt=new je;wt.position.set(-_*.3,-.06,0),T.add(wt);const Vt=new J(G,l);Vt.castShadow=!0,wt.add(Vt);const Pn=new je;Pn.position.set(0,-.44,0),wt.add(Pn);const Yi=new J(oe,l);Yi.castShadow=!0,Pn.add(Yi);const Ot=new je;Ot.position.set(0,-.44,0),Pn.add(Ot);const oi=new J(mt,h);oi.castShadow=!0,Ot.add(oi),t.scale.set(n.scale.x,n.scale.y,n.scale.z),(e.previewImagePath||e.id==="aynur"||e.id==="sevil")&&(T.traverse(ws=>{ws.isMesh&&(ws.visible=!1)}),ln.attachAynurAvatarPlane(t,e.previewImagePath||e.portraitPath));const Ss=new st(.35,8,8),Ts=new ht({visible:!1,wireframe:!0,color:16711680}),qn=new J(Ss,Ts);Ke.add(qn);const Es=new st(.42,8,8),ci=new ht({visible:!1,wireframe:!0,color:16755200}),ji=new J(Es,ci);Ot.add(ji);const li=new ut;return li.position.set(.2,.1,.4),v.add(li),{root:t,bones:{root:t,hips:T,torso:A,chest:v,head:V,leftUpperArm:Xe,leftForearm:Y,leftHand:de,rightUpperArm:le,rightForearm:he,rightHand:Ke,leftThigh:ne,leftShin:se,leftFoot:rt,rightThigh:wt,rightShin:Pn,rightFoot:Ot},punchHitboxMesh:qn,kickHitboxMesh:ji,specialOrigin:li}}static blendColor(e,t,n){const i=new we(e),s=new we(t);return i.lerp(s,n),i.getHex()}static createHairStyle(e,t,n,i){if(t==="short"){const s=new st(.19,16,14,0,Math.PI*2,0,Math.PI*.62);s.scale(1.04,1.22,1.08);const a=new J(s,n);a.position.y=.3,e.add(a);const o=new _t(.18,.08,.08),c=new J(o,n);c.position.set(.04,.4,.16),c.rotation.z=-.2,e.add(c)}else if(t==="spiky"){const s=new st(.19,14,12,0,Math.PI*2,0,Math.PI*.58),a=new J(s,n);a.position.y=.3,e.add(a);for(let o=-2;o<=2;o++){const c=new Pi(.055,.18,6);c.rotateX(Math.PI*.15),c.rotateZ(o*.22);const l=new J(c,n);l.position.set(o*.065,.46,.02-Math.abs(o)*.02),e.add(l)}}else if(t==="hoodie"){const s=new st(.24,16,16,0,Math.PI*2,0,Math.PI*.78),a=new J(s,n);a.position.y=.28,e.add(a);const o=new _s(.19,.035,8,16);o.rotateX(Math.PI*.5);const c=new J(o,i);c.position.y=.31,e.add(c)}else if(t==="ponytail"){const s=new st(.19,16,14,0,Math.PI*2,0,Math.PI*.65),a=new J(s,n);a.position.y=.29,e.add(a);const o=new je;o.position.set(0,.4,-.16);const c=new xt(.04,.04,.05,8),l=new J(c,i);l.rotation.x=Math.PI*.5,o.add(l);const h=new xt(.045,.015,.48,8);h.translate(0,-.24,0);const u=new J(h,n);u.rotation.x=-.35,o.add(u),e.add(o);const d=new xt(.14,.12,.14,10,1,!1,0,Math.PI),f=new J(d,i);f.position.set(0,.2,.05),e.add(f)}else if(t==="braids"){const s=new st(.12,12,12),a=new J(s,n);a.position.set(0,.46,-.05),e.add(a);const o=new _s(.195,.038,8,16);o.rotateX(Math.PI*.5);const c=new J(o,i);c.position.y=.32,e.add(c);const l=new xt(.025,.015,.38,6);l.translate(0,-.19,0);const h=new J(l,n);h.position.set(.16,.28,-.05);const u=new J(l,n);u.position.set(-.16,.28,-.05),e.add(h,u)}else if(t==="half_up_wavy"){const s=new st(.205,22,18,0,Math.PI*2,0,Math.PI*.68);s.scale(1.12,1.18,1.14);const a=new J(s,n);a.position.set(0,.3,-.01),e.add(a);const o=new st(.115,16,14);o.scale(1.35,.72,1.15);const c=new J(o,n);c.position.set(.085,.425,.085),c.rotation.z=-.28;const l=new st(.105,16,14);l.scale(1.25,.68,1.12);const h=new J(l,n);h.position.set(-.085,.415,.08),h.rotation.z=.25,e.add(c,h);const u=[{x:.185,y:.32,z:.05,r:.072,rotZ:.14,rotX:-.05},{x:.205,y:.22,z:.06,r:.068,rotZ:-.1,rotX:.08},{x:.175,y:.12,z:.07,r:.06,rotZ:.12,rotX:-.04},{x:.195,y:.28,z:-.06,r:.078,rotZ:.08,rotX:.1},{x:.18,y:.16,z:-.07,r:.07,rotZ:-.06,rotX:.12},{x:-.185,y:.32,z:.05,r:.072,rotZ:-.14,rotX:-.05},{x:-.205,y:.22,z:.06,r:.068,rotZ:.1,rotX:.08},{x:-.175,y:.12,z:.07,r:.06,rotZ:-.12,rotX:-.04},{x:-.195,y:.28,z:-.06,r:.078,rotZ:-.08,rotX:.1},{x:-.18,y:.16,z:-.07,r:.07,rotZ:.06,rotX:.12}];for(const g of u){const _=new st(g.r,12,10);_.scale(.95,1.65,.92);const m=new J(_,n);m.position.set(g.x,g.y,g.z),m.rotation.set(g.rotX,0,g.rotZ),m.castShadow=!0,e.add(m)}const d=new st(.21,16,14);d.scale(1.15,1.55,.72);const f=new J(d,n);f.position.set(0,.2,-.12),f.rotation.x=.14,f.castShadow=!0,e.add(f)}}static attachAynurAvatarPlane(e,t){const n=new je;n.name="aynur_avatar_group",n.position.set(0,0,0);const i=2.32,s=i*(600/778),a=new cn(s,i);a.translate(0,i*.5-.25,0);const o=new ht({color:16777215,transparent:!0,alphaTest:.02,side:Yt,toneMapped:!1});if(typeof document<"u"&&typeof document.createElementNS=="function"){const l=ln.avatarTextureCache.get(t);if(l)o.map=l,o.needsUpdate=!0;else{const u=new Cl().load(t,d=>{d.colorSpace=pt,d.minFilter=Tt,d.magFilter=Tt,d.generateMipmaps=!1,d.needsUpdate=!0,o.map=d,o.needsUpdate=!0});u.colorSpace=pt,u.minFilter=Tt,u.magFilter=Tt,u.generateMipmaps=!1,ln.avatarTextureCache.set(t,u),o.map=u}}const c=new J(a,o);c.name="aynur_avatar_plane",n.add(c),e.add(n)}}class Ll{bones;currentState="idle";previousState="idle";stateTime=0;transitionAlpha=1;transitionDuration=.1;defaultHipsY=.95;constructor(e){this.bones=e,this.defaultHipsY=e.hips.position.y}play(e,t=!1){this.currentState===e&&!t||(this.previousState=this.currentState,this.currentState=e,this.stateTime=0,this.transitionAlpha=0)}getState(){return this.currentState}getStateTime(){return this.stateTime}update(e){this.stateTime+=e,this.transitionAlpha<1&&(this.transitionAlpha=Math.min(1,this.transitionAlpha+e/this.transitionDuration));const t=this.samplePose(this.currentState,this.stateTime),n=this.samplePose(this.previousState,this.stateTime);this.applyBlendedPose(n,t,this.transitionAlpha),this.updateAvatarSprite(this.stateTime)}updateAvatarSprite(e){const t=this.bones.root?.getObjectByName("aynur_avatar_group");if(!t)return;const n=t.scale.x<0?-1:1;let i=0,s=0,a=0,o=1,c=1;switch(this.currentState){case"idle":{const l=Math.sin(e*3.2)*.012;c=1+l,o=1-l*.35;break}case"walk_forward":case"walk_backward":{const l=this.currentState==="walk_forward"?1:-.8,h=Math.sin(e*9);s=Math.abs(h)*.06,a=-.045*l*n+h*.02;break}case"jump":{c=1.03,o=.98,a=-.04*n;break}case"crouch":case"block_low":{c=.76,o=1.04,a=-.04*n;break}case"block":{c=.96,i=-.06*n,a=.05*n;break}case"punch":case"punch_light":case"punch_heavy":case"punch_jump":case"punch_crouch":{const l=this.currentState==="punch_heavy",u=Math.min(1,e/(l?.36:.2)),d=u<.38?u/.38:1-(u-.38)/.62;i=(l?.36:.22)*d*n,a=-(l?.12:.07)*d*n,c=this.currentState==="punch_crouch"?.78:1,o=1+.04*d;break}case"kick":case"kick_light":case"kick_heavy":case"kick_jump":case"kick_crouch":{const l=this.currentState==="kick_heavy",u=Math.min(1,e/(l?.42:.26)),d=u<.4?u/.4:1-(u-.4)/.6;i=(l?.42:.28)*d*n,s=(l?.1:.04)*d,a=-(l?.14:.09)*d*n,c=this.currentState==="kick_crouch"?.76:1,o=1+.05*d;break}case"special":case"special_alex":case"special_max":case"special_ryan":case"special_luna":case"special_maya":{const h=Math.min(1,e/.5),u=Math.sin(h*Math.PI);i=.48*u*n,s=.2*u,a=-.16*u*n,o=1+.06*u,c=1+.04*u;break}case"hurt":case"hurt_high":case"hurt_low":case"hurt_heavy":{const h=Math.min(1,e/.28),u=Math.sin(h*Math.PI);i=-.18*u*n,a=.15*u*n;break}case"ko":{const l=Math.min(1,e/.55);a=1.48*(1-Math.pow(1-l,3))*n,s=.12*Math.sin(l*Math.PI);break}case"victory":case"victory_alex":case"victory_max":case"victory_ryan":case"victory_luna":case"victory_maya":{s=Math.abs(Math.sin(e*5))*.12;break}}t.position.set(i,s,0),t.rotation.set(0,0,a),t.scale.set(n*o,c,1)}applyBlendedPose(e,t,n){const i=["hips","torso","chest","head","leftUpperArm","leftForearm","leftHand","rightUpperArm","rightForearm","rightHand","leftThigh","leftShin","leftFoot","rightThigh","rightShin","rightFoot"];for(const s of i){const a=this.bones[s];if(!a)continue;const o=e[s]||{rot:[0,0,0]},c=t[s]||{rot:[0,0,0]};if(a.rotation.x=o.rot[0]+(c.rot[0]-o.rot[0])*n,a.rotation.y=o.rot[1]+(c.rot[1]-o.rot[1])*n,a.rotation.z=o.rot[2]+(c.rot[2]-o.rot[2])*n,o.pos||c.pos){const l=s==="hips"?this.defaultHipsY:0,h=o.pos?o.pos[0]:0,u=o.pos?o.pos[1]:l,d=o.pos?o.pos[2]:0,f=c.pos?c.pos[0]:0,g=c.pos?c.pos[1]:l,_=c.pos?c.pos[2]:0;a.position.x=h+(f-h)*n,a.position.y=u+(g-u)*n,a.position.z=d+(_-d)*n}}}samplePose(e,t){switch(e){case"idle":return this.getPoseIdle(t);case"walk_forward":return this.getPoseWalk(t,1);case"walk_backward":return this.getPoseWalk(t,-.8);case"jump":return this.getPoseJump(t);case"crouch":return this.getPoseCrouch(t);case"punch":case"punch_light":return this.getPosePunchLight(t);case"punch_heavy":return this.getPosePunchHeavy(t);case"punch_jump":return this.getPosePunchJump(t);case"punch_crouch":return this.getPosePunchCrouch(t);case"kick":case"kick_light":return this.getPoseKickLight(t);case"kick_heavy":return this.getPoseKickHeavy(t);case"kick_jump":return this.getPoseKickJump(t);case"kick_crouch":return this.getPoseKickCrouch(t);case"special":case"special_alex":return this.getPoseSpecialAlex(t);case"special_max":return this.getPoseSpecialMax(t);case"special_ryan":return this.getPoseSpecialRyan(t);case"special_luna":return this.getPoseSpecialLuna(t);case"special_maya":return this.getPoseSpecialMaya(t);case"block":return this.getPoseBlock(t);case"block_low":return this.getPoseBlockLow(t);case"hurt":case"hurt_high":return this.getPoseHurtHigh(t);case"hurt_low":return this.getPoseHurtLow(t);case"hurt_heavy":return this.getPoseHurtHeavy(t);case"ko":return this.getPoseKO(t);case"victory":case"victory_alex":return this.getPoseVictoryAlex(t);case"victory_max":return this.getPoseVictoryMax(t);case"victory_ryan":return this.getPoseVictoryRyan(t);case"victory_luna":return this.getPoseVictoryLuna(t);case"victory_maya":return this.getPoseVictoryMaya(t);default:return this.getPoseIdle(t)}}getPoseIdle(e){const t=Math.sin(e*3.2),n=Math.sin(e*2)*.04;return{hips:{pos:[0,this.defaultHipsY-Math.abs(t)*.03,0],rot:[0,.35,0]},torso:{rot:[.05,.1,0]},chest:{rot:[n,.15,0]},head:{rot:[-.05,-.4,0]},leftUpperArm:{rot:[-.75+t*.05,.3,.4]},leftForearm:{rot:[-1.4,.4,-.3]},rightUpperArm:{rot:[-.6+t*.04,-.2,-.5]},rightForearm:{rot:[-1.6,-.5,.4]},leftThigh:{rot:[-.25,.2,.1]},leftShin:{rot:[.35,0,0]},rightThigh:{rot:[.25,-.1,-.1]},rightShin:{rot:[.3,0,0]}}}getPoseWalk(e,t){const n=6.5*Math.abs(t),i=Math.sin(e*n),s=Math.sign(t);return{hips:{pos:[0,this.defaultHipsY-Math.abs(i)*.04,0],rot:[.08*s,.25+i*.1,0]},torso:{rot:[.06*s,0,-i*.08]},chest:{rot:[.05*s,-i*.12,0]},head:{rot:[0,-.2,0]},leftUpperArm:{rot:[-.7-i*.4*s,.3,.4]},leftForearm:{rot:[-1.3-i*.2,.3,-.2]},rightUpperArm:{rot:[-.6+i*.4*s,-.2,-.5]},rightForearm:{rot:[-1.5+i*.2,-.4,.3]},leftThigh:{rot:[i*.65*s,.1,0]},leftShin:{rot:[Math.max(0,-i*.7*s),0,0]},rightThigh:{rot:[-i*.65*s,-.1,0]},rightShin:{rot:[Math.max(0,i*.7*s),0,0]}}}getPoseJump(e){return{hips:{pos:[0,this.defaultHipsY+.1,0],rot:[.15,.2,0]},torso:{rot:[.1,0,0]},chest:{rot:[.1,.1,0]},head:{rot:[-.2,-.3,0]},leftUpperArm:{rot:[-1.8,.4,.5]},leftForearm:{rot:[-1.1,.2,-.2]},rightUpperArm:{rot:[-1.6,-.3,-.6]},rightForearm:{rot:[-1.2,-.3,.3]},leftThigh:{rot:[-1,.2,.2]},leftShin:{rot:[1.2,0,0]},rightThigh:{rot:[-.7,-.2,-.2]},rightShin:{rot:[1.3,0,0]}}}getPoseCrouch(e){return{hips:{pos:[0,this.defaultHipsY-.42,0],rot:[.2,.35,0]},torso:{rot:[.35,.1,0]},chest:{rot:[.2,.1,0]},head:{rot:[-.35,-.4,0]},leftUpperArm:{rot:[-1.1,.4,.3]},leftForearm:{rot:[-1.5,.4,-.3]},rightUpperArm:{rot:[-.9,-.3,-.4]},rightForearm:{rot:[-1.6,-.5,.4]},leftThigh:{rot:[-1.4,.3,.2]},leftShin:{rot:[1.7,0,0]},rightThigh:{rot:[-1.2,-.3,-.2]},rightShin:{rot:[1.8,0,0]}}}getPosePunchLight(e){const n=Math.min(1,e/.2),i=n<.35?n/.35:1-(n-.35)/.65;return{hips:{pos:[0,this.defaultHipsY,.1*i],rot:[0,.45*i,0]},torso:{rot:[.05,.4*i,0]},chest:{rot:[.08,.5*i,0]},head:{rot:[0,-.45*i,0]},leftUpperArm:{rot:[-.9,.4,.4]},leftForearm:{rot:[-1.6,.5,-.3]},rightUpperArm:{rot:[-1.5*i-.3*(1-i),-.1,-.1]},rightForearm:{rot:[-.15*i-1.4*(1-i),0,0]},leftThigh:{rot:[-.35*i-.2*(1-i),.2,.1]},leftShin:{rot:[.35,0,0]},rightThigh:{rot:[.3,-.1,-.1]},rightShin:{rot:[.2,0,0]}}}getPosePunchHeavy(e){const n=Math.min(1,e/.36),i=n<.4?n/.4:1-(n-.4)/.6;return{hips:{pos:[0,this.defaultHipsY-.08*i,.25*i],rot:[.1*i,.85*i,0]},torso:{rot:[.15*i,.7*i,0]},chest:{rot:[.15*i,.8*i,0]},head:{rot:[-.05,-.7*i,0]},leftUpperArm:{rot:[-.6*i-.9*(1-i),.3,.6]},leftForearm:{rot:[-1.3,.3,-.2]},rightUpperArm:{rot:[-1.65*i-.2*(1-i),0,-.3*i]},rightForearm:{rot:[-.05*i-1.5*(1-i),0,0]},leftThigh:{rot:[-.6*i-.2*(1-i),.3,.2]},leftShin:{rot:[.7*i+.3*(1-i),0,0]},rightThigh:{rot:[.5*i+.2*(1-i),-.2,-.2]},rightShin:{rot:[.3,0,0]}}}getPosePunchJump(e){const n=Math.min(1,e/.3),i=n<.4?n/.4:1-(n-.4)/.6;return{hips:{pos:[0,this.defaultHipsY+.1,0],rot:[.2,.3*i,0]},torso:{rot:[.25*i,.2*i,0]},chest:{rot:[.3*i,.3*i,0]},head:{rot:[-.25,-.3*i,0]},leftUpperArm:{rot:[-1.5,.3,.5]},leftForearm:{rot:[-1.2,.2,-.2]},rightUpperArm:{rot:[-1.2*i-.4*(1-i),0,-.4*i]},rightForearm:{rot:[-.5*i-1.4*(1-i),0,0]},leftThigh:{rot:[-1.1,.2,.2]},leftShin:{rot:[1.3,0,0]},rightThigh:{rot:[-.8,-.2,-.2]},rightShin:{rot:[1.2,0,0]}}}getPosePunchCrouch(e){const n=Math.min(1,e/.22),i=n<.35?n/.35:1-(n-.35)/.65;return{hips:{pos:[0,this.defaultHipsY-.42,.15*i],rot:[.2,.45*i,0]},torso:{rot:[.35,.3*i,0]},chest:{rot:[.25,.4*i,0]},head:{rot:[-.3,-.35*i,0]},leftUpperArm:{rot:[-1.2,.4,.3]},leftForearm:{rot:[-1.6,.4,-.3]},rightUpperArm:{rot:[-1.1*i-.5*(1-i),0,-.2]},rightForearm:{rot:[-.1*i-1.5*(1-i),0,0]},leftThigh:{rot:[-1.4,.3,.2]},leftShin:{rot:[1.7,0,0]},rightThigh:{rot:[-1.2,-.3,-.2]},rightShin:{rot:[1.8,0,0]}}}getPoseKickLight(e){const n=Math.min(1,e/.26),i=n<.38?n/.38:1-(n-.38)/.62;return{hips:{pos:[0,this.defaultHipsY+.05*i,0],rot:[-.15*i,-.35*i,0]},torso:{rot:[-.15*i,.15*i,0]},chest:{rot:[-.1*i,.2*i,0]},head:{rot:[.1*i,-.25*i,0]},leftUpperArm:{rot:[-1.1*i-.6,.4,.5]},leftForearm:{rot:[-1.4,.2,-.2]},rightUpperArm:{rot:[.3*i-.5,-.4,-.7]},rightForearm:{rot:[-.9,-.3,.2]},leftThigh:{rot:[.1*i-.1,.1,0]},leftShin:{rot:[.2,0,0]},rightThigh:{rot:[-1.45*i+.2*(1-i),-.2*i,-.1]},rightShin:{rot:[.15*i+.7*(1-i),0,0]},rightFoot:{rot:[-.25*i,0,0]}}}getPoseKickHeavy(e){const n=Math.min(1,e/.42),i=n<.42?n/.42:1-(n-.42)/.58;return{hips:{pos:[0,this.defaultHipsY+.12*i,0],rot:[-.35*i,-.7*i,.2*i]},torso:{rot:[-.3*i,.35*i,-.15*i]},chest:{rot:[-.25*i,.45*i,0]},head:{rot:[.2*i,-.45*i,0]},leftUpperArm:{rot:[-1.4*i-.5,.4,.7]},leftForearm:{rot:[-1.3,.2,-.2]},rightUpperArm:{rot:[.8*i-.4,-.5,-1]},rightForearm:{rot:[-.7,-.4,.2]},leftThigh:{rot:[.3*i-.1,.1,0]},leftShin:{rot:[.3,0,0]},rightThigh:{rot:[-1.85*i+.2*(1-i),-.45*i,-.25*i]},rightShin:{rot:[.05*i+.9*(1-i),0,0]},rightFoot:{rot:[-.4*i,0,0]}}}getPoseKickJump(e){const n=Math.min(1,e/.34),i=n<.4?n/.4:1-(n-.4)/.6;return{hips:{pos:[0,this.defaultHipsY+.15,0],rot:[-.2*i,-.4*i,0]},torso:{rot:[-.15*i,.2*i,0]},chest:{rot:[-.1*i,.25*i,0]},head:{rot:[.1*i,-.3*i,0]},leftUpperArm:{rot:[-1.6,.3,.6]},leftForearm:{rot:[-1.1,.2,-.2]},rightUpperArm:{rot:[.4*i-.6,-.4,-.8]},rightForearm:{rot:[-.8,-.3,.2]},leftThigh:{rot:[-1.1,.2,.2]},leftShin:{rot:[1.3,0,0]},rightThigh:{rot:[-1.55*i-.2*(1-i),-.25*i,-.2]},rightShin:{rot:[.1*i+1.1*(1-i),0,0]},rightFoot:{rot:[-.35*i,0,0]}}}getPoseKickCrouch(e){const n=Math.min(1,e/.28),i=n<.38?n/.38:1-(n-.38)/.62;return{hips:{pos:[0,this.defaultHipsY-.52,.1*i],rot:[-.15*i,-.5*i,0]},torso:{rot:[.4*i+.2,.3*i,0]},chest:{rot:[.3*i+.1,.35*i,0]},head:{rot:[-.25,-.4*i,0]},leftUpperArm:{rot:[-1.3,.4,.3]},leftForearm:{rot:[-1.5,.4,-.3]},rightUpperArm:{rot:[.2*i-.8,-.3,-.6]},rightForearm:{rot:[-1.2,-.4,.3]},leftThigh:{rot:[-1.5,.4,.3]},leftShin:{rot:[1.8,0,0]},rightThigh:{rot:[-1.25*i-.5*(1-i),-.2*i,-.15]},rightShin:{rot:[.1*i+1.2*(1-i),0,0]},rightFoot:{rot:[-.2*i,0,0]}}}getPoseSpecialAlex(e){const n=Math.min(1,e/.5),i=n<.42?n/.42:1-(n-.42)/.58;return{hips:{pos:[0,this.defaultHipsY-.12*i,.35*i],rot:[.15*i,.9*i,0]},torso:{rot:[.2*i,.75*i,0]},chest:{rot:[.2*i,.85*i,0]},head:{rot:[-.1,-.8*i,0]},leftUpperArm:{rot:[.4*i-.8*(1-i),.3,.8]},leftForearm:{rot:[-1.1,.3,-.2]},rightUpperArm:{rot:[-1.7*i-.3*(1-i),0,-.3]},rightForearm:{rot:[-.05*i-1.5*(1-i),0,0]},leftThigh:{rot:[-.7*i-.2*(1-i),.3,.2]},leftShin:{rot:[.8*i+.3*(1-i),0,0]},rightThigh:{rot:[.6*i+.2*(1-i),-.2,-.2]},rightShin:{rot:[.3,0,0]}}}getPoseSpecialMax(e){const n=Math.min(1,e/.52),i=n*Math.PI*2,s=Math.sin(n*Math.PI);return{hips:{pos:[0,this.defaultHipsY+.2*s,0],rot:[0,i,0]},torso:{rot:[-.2*s,0,0]},chest:{rot:[-.15*s,0,0]},head:{rot:[.1*s,0,0]},leftUpperArm:{rot:[-1.4,.4,.6]},leftForearm:{rot:[-1.2,.2,-.2]},rightUpperArm:{rot:[.6*s-.5,-.5,-.8]},rightForearm:{rot:[-.8,-.3,.2]},leftThigh:{rot:[.2*s-.1,.1,0]},leftShin:{rot:[.3,0,0]},rightThigh:{rot:[-1.8*s+.2*(1-s),-.3*s,-.2]},rightShin:{rot:[.1*s+.8*(1-s),0,0]},rightFoot:{rot:[-.3*s,0,0]}}}getPoseSpecialRyan(e){const n=Math.min(1,e/.48),i=n<.45?n/.45:1-(n-.45)/.55;return{hips:{pos:[0,this.defaultHipsY-.25*i,.45*i],rot:[.4*i,.4*i,0]},torso:{rot:[.45*i,.3*i,0]},chest:{rot:[.35*i,.4*i,0]},head:{rot:[-.4*i,-.35*i,0]},leftUpperArm:{rot:[.8*i-.8,.3,.6]},leftForearm:{rot:[-.6*i-1.2*(1-i),.2,0]},rightUpperArm:{rot:[-1.6*i-.3*(1-i),0,-.2]},rightForearm:{rot:[-.1*i-1.4*(1-i),0,0]},leftThigh:{rot:[-.9*i-.2*(1-i),.3,.2]},leftShin:{rot:[1.1*i+.3*(1-i),0,0]},rightThigh:{rot:[.8*i+.2*(1-i),-.2,-.2]},rightShin:{rot:[.4,0,0]}}}getPoseSpecialLuna(e){const n=Math.min(1,e/.54),i=Math.sin(n*Math.PI);return{hips:{pos:[0,this.defaultHipsY+.45*i,0],rot:[-.4*i,-.5*i,0]},torso:{rot:[-.35*i,.3*i,0]},chest:{rot:[-.3*i,.4*i,0]},head:{rot:[.3*i,-.4*i,0]},leftUpperArm:{rot:[-2.2*i-.6*(1-i),.3,.4]},leftForearm:{rot:[-.5*i-1.2*(1-i),.2,0]},rightUpperArm:{rot:[.8*i-.5,-.4,-.8]},rightForearm:{rot:[-.7,-.3,.2]},leftThigh:{rot:[.3*i-.1,.1,0]},leftShin:{rot:[.2,0,0]},rightThigh:{rot:[-2.2*i+.2*(1-i),-.3*i,-.2]},rightShin:{rot:[.05*i+.8*(1-i),0,0]},rightFoot:{rot:[-.45*i,0,0]}}}getPoseSpecialMaya(e){const n=Math.min(1,e/.52),i=n*Math.PI*2,s=Math.sin(n*Math.PI);return{hips:{pos:[0,this.defaultHipsY-.35*s,0],rot:[.2*s,i,0]},torso:{rot:[.25*s,0,0]},chest:{rot:[.2*s,0,0]},head:{rot:[-.2*s,0,0]},leftUpperArm:{rot:[-1.2,.5,.5]},leftForearm:{rot:[-1.4,.3,-.2]},rightUpperArm:{rot:[-1.2,-.5,-.5]},rightForearm:{rot:[-1.4,-.3,.2]},leftThigh:{rot:[-1.3*s-.2*(1-s),.3,.2]},leftShin:{rot:[1.6*s+.3*(1-s),0,0]},rightThigh:{rot:[-1.4*s+.2*(1-s),-.3*s,-.2]},rightShin:{rot:[.1*s+.7*(1-s),0,0]},rightFoot:{rot:[-.3*s,0,0]}}}getPoseBlock(e){return{hips:{pos:[0,this.defaultHipsY-.1,0],rot:[.08,.4,0]},torso:{rot:[.12,.1,0]},chest:{rot:[.15,.15,0]},head:{rot:[-.15,-.4,0]},leftUpperArm:{rot:[-1.2,.5,.4]},leftForearm:{rot:[-1.8,.6,-.4]},rightUpperArm:{rot:[-1.1,-.4,-.3]},rightForearm:{rot:[-1.9,-.5,.4]},leftThigh:{rot:[-.4,.2,.1]},leftShin:{rot:[.5,0,0]},rightThigh:{rot:[.3,-.1,-.1]},rightShin:{rot:[.4,0,0]}}}getPoseBlockLow(e){return{hips:{pos:[0,this.defaultHipsY-.44,0],rot:[.2,.4,0]},torso:{rot:[.35,.1,0]},chest:{rot:[.25,.15,0]},head:{rot:[-.35,-.4,0]},leftUpperArm:{rot:[-1.3,.5,.3]},leftForearm:{rot:[-1.8,.6,-.3]},rightUpperArm:{rot:[-1.2,-.4,-.3]},rightForearm:{rot:[-1.9,-.5,.3]},leftThigh:{rot:[-1.4,.3,.2]},leftShin:{rot:[1.7,0,0]},rightThigh:{rot:[-1.2,-.3,-.2]},rightShin:{rot:[1.8,0,0]}}}getPoseHurtHigh(e){const t=Math.sin(e*32)*.08;return{hips:{pos:[0,this.defaultHipsY-.08,-.1],rot:[-.25,.1+t,0]},torso:{rot:[-.3,0,t]},chest:{rot:[-.35,0,0]},head:{rot:[.45,0,t*1.5]},leftUpperArm:{rot:[-.4,.4,.8]},leftForearm:{rot:[-.8,.2,0]},rightUpperArm:{rot:[-.3,-.4,-.8]},rightForearm:{rot:[-.7,-.2,0]},leftThigh:{rot:[-.2,.2,.1]},leftShin:{rot:[.4,0,0]},rightThigh:{rot:[.3,-.1,-.1]},rightShin:{rot:[.5,0,0]}}}getPoseHurtLow(e){const t=Math.sin(e*28)*.06;return{hips:{pos:[0,this.defaultHipsY-.15,-.05],rot:[.35,.1+t,0]},torso:{rot:[.4,0,t]},chest:{rot:[.3,0,0]},head:{rot:[-.2,0,t]},leftUpperArm:{rot:[-.8,.3,.5]},leftForearm:{rot:[-1.1,.2,0]},rightUpperArm:{rot:[-.7,-.3,-.5]},rightForearm:{rot:[-1,-.2,0]},leftThigh:{rot:[-.7,.3,.2]},leftShin:{rot:[.8,0,0]},rightThigh:{rot:[-.5,-.2,-.1]},rightShin:{rot:[.7,0,0]}}}getPoseHurtHeavy(e){const t=Math.sin(e*36)*.12;return{hips:{pos:[0,this.defaultHipsY-.12,-.2],rot:[-.45,.15+t,0]},torso:{rot:[-.5,0,t*1.5]},chest:{rot:[-.55,0,0]},head:{rot:[.6,0,t*2]},leftUpperArm:{rot:[-.2,.5,1.1]},leftForearm:{rot:[-.5,.2,0]},rightUpperArm:{rot:[-.1,-.5,-1.1]},rightForearm:{rot:[-.4,-.2,0]},leftThigh:{rot:[-.3,.3,.2]},leftShin:{rot:[.5,0,0]},rightThigh:{rot:[.4,-.2,-.2]},rightShin:{rot:[.6,0,0]}}}getPoseKO(e){const t=Math.min(1,e/.55);return{hips:{pos:[0,this.defaultHipsY*(1-t*.88),-t*.65],rot:[-Math.PI*.48*t,0,0]},torso:{rot:[0,0,0]},chest:{rot:[0,0,0]},head:{rot:[.2*(1-t),.3*t,0]},leftUpperArm:{rot:[0,0,1.2*t]},leftForearm:{rot:[0,0,0]},rightUpperArm:{rot:[0,0,-1.2*t]},rightForearm:{rot:[0,0,0]},leftThigh:{rot:[0,0,.3*t]},leftShin:{rot:[0,0,0]},rightThigh:{rot:[0,0,-.3*t]},rightShin:{rot:[0,0,0]}}}getPoseVictoryAlex(e){const t=Math.sin(e*3.5)*.06;return{hips:{pos:[0,this.defaultHipsY,0],rot:[0,-.2,0]},torso:{rot:[-.08,0,0]},chest:{rot:[-.12,.1,0]},head:{rot:[-.15,.1,0]},leftUpperArm:{rot:[.3,.4,.8]},leftForearm:{rot:[-1.4,.4,-.3]},rightUpperArm:{rot:[-2.9+t,-.15,-.25]},rightForearm:{rot:[-.25,-.1,0]},leftThigh:{rot:[0,0,.2]},leftShin:{rot:[.1,0,0]},rightThigh:{rot:[0,0,-.2]},rightShin:{rot:[.1,0,0]}}}getPoseVictoryMax(e){const t=Math.sin(e*4)*.08;return{hips:{pos:[0,this.defaultHipsY-.05,0],rot:[0,0,0]},torso:{rot:[.05,0,0]},chest:{rot:[.1+t,0,0]},head:{rot:[-.1,0,0]},leftUpperArm:{rot:[-1.5,.4,1.4]},leftForearm:{rot:[-1.9+t,.4,0]},rightUpperArm:{rot:[-1.5,-.4,-1.4]},rightForearm:{rot:[-1.9+t,-.4,0]},leftThigh:{rot:[0,0,.3]},leftShin:{rot:[.2,0,0]},rightThigh:{rot:[0,0,-.3]},rightShin:{rot:[.2,0,0]}}}getPoseVictoryRyan(e){const t=Math.sin(e*2.2)*.03;return{hips:{pos:[0,this.defaultHipsY,0],rot:[0,.25,0]},torso:{rot:[-.05,0,0]},chest:{rot:[-.08+t,-.1,0]},head:{rot:[-.08,-.25,0]},leftUpperArm:{rot:[-1.1,.7,.6]},leftForearm:{rot:[-1.6,.8,-.5]},rightUpperArm:{rot:[-1,-.7,-.6]},rightForearm:{rot:[-1.6,-.8,.5]},leftThigh:{rot:[.1,.1,.15]},leftShin:{rot:[.1,0,0]},rightThigh:{rot:[-.1,-.1,-.15]},rightShin:{rot:[.1,0,0]}}}getPoseVictoryLuna(e){const t=Math.sin(e*2.5)*.04;return{hips:{pos:[0,this.defaultHipsY,0],rot:[0,0,0]},torso:{rot:[.1+t,0,0]},chest:{rot:[.08+t,0,0]},head:{rot:[.15,0,0]},leftUpperArm:{rot:[-1.1,.5,.4]},leftForearm:{rot:[-1.6,.6,-.5]},rightUpperArm:{rot:[-1.1,-.5,-.4]},rightForearm:{rot:[-1.6,-.6,.5]},leftThigh:{rot:[0,0,.1]},leftShin:{rot:[.05,0,0]},rightThigh:{rot:[0,0,-.1]},rightShin:{rot:[.05,0,0]}}}getPoseVictoryMaya(e){const t=Math.sin(e*3)*.05;return{hips:{pos:[0,this.defaultHipsY,0],rot:[0,.4,0]},torso:{rot:[-.05,.1,0]},chest:{rot:[-.1+t,.15,0]},head:{rot:[-.05,-.35,0]},leftUpperArm:{rot:[-2.6+t,.2,.3]},leftForearm:{rot:[-.4,.3,0]},rightUpperArm:{rot:[-.9,-.3,-.4]},rightForearm:{rot:[-1.5,-.4,.3]},leftThigh:{rot:[-.3,.2,.1]},leftShin:{rot:[.4,0,0]},rightThigh:{rot:[.2,-.1,-.1]},rightShin:{rot:[.2,0,0]}}}}class Fc{canvas;renderer;scene;camera;currentModelResult=null;animController=null;rotationAngle=0;baseFacingAngle=0;accentColor;constructor(e,t=54015,n=.2){this.canvas=document.getElementById(e),this.accentColor=t,this.baseFacingAngle=n,this.renderer=new yl({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(280,380),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ya,this.scene=new Ml,this.camera=new Ct(38,280/380,.1,50),this.camera.position.set(0,1.05,3.6),this.camera.lookAt(0,.95,0),this.setupLighting(),this.setupPedestal()}setupLighting(){const e=new Pl(16777215,1.1);this.scene.add(e);const t=new vs(16777215,2);t.position.set(2,4,3),t.castShadow=!0,this.scene.add(t);const n=new vs(this.accentColor,2.5);n.position.set(-2.5,3,-2),this.scene.add(n);const i=new xs(this.accentColor,1.2,5);i.position.set(0,.2,1.5),this.scene.add(i)}setupPedestal(){const e=new xt(1.1,1.2,.12,28),t=new ft({color:988970,roughness:.6,metalness:.8}),n=new J(e,t);n.position.y=-.06,n.receiveShadow=!0,this.scene.add(n);const i=new _s(1.12,.02,8,32);i.rotateX(Math.PI*.5);const s=new ht({color:this.accentColor}),a=new J(i,s);a.position.y=.005,this.scene.add(a)}setCharacter(e){this.currentModelResult&&this.scene.remove(this.currentModelResult.root),this.currentModelResult=ln.create(e),this.currentModelResult.root.position.set(0,0,0);const t=!!this.currentModelResult.root.getObjectByName("aynur_avatar_group");this.currentModelResult.root.rotation.y=t?0:this.baseFacingAngle,this.scene.add(this.currentModelResult.root),this.animController=new Ll(this.currentModelResult.bones),this.animController.play("idle",!0)}update(e){if(!this.currentModelResult||!this.animController)return;if(this.animController.update(e),!!this.currentModelResult.root.getObjectByName("aynur_avatar_group"))this.currentModelResult.root.rotation.y=0;else{this.rotationAngle+=e*.6;const n=Math.sin(this.rotationAngle)*.22;this.currentModelResult.root.rotation.y=this.baseFacingAngle+n}this.renderer.render(this.scene,this.camera)}}class Vg{audio;listeners;mainMenuEl=document.getElementById("main-menu");controlsModalEl=document.getElementById("controls-modal");howModalEl=document.getElementById("how-to-play-modal");charSelectEl=document.getElementById("char-select-screen");vsScreenEl=document.getElementById("vs-screen");gameHudEl=document.getElementById("game-hud");victoryEl=document.getElementById("victory-screen");audioBtn=document.getElementById("audio-toggle-btn");audioIcon=document.getElementById("audio-icon");p1Preview=null;p2Preview=null;p1SelectIndex=0;p2SelectIndex=3;arenaSelectIndex=0;p1Locked=!1;p2Locked=!1;isCharSelectActive=!1;p1PrevNameEl=document.getElementById("p1-preview-name");p1PrevTitleEl=document.getElementById("p1-preview-title");p1PrevOutfitEl=document.getElementById("p1-preview-outfit");p2PrevNameEl=document.getElementById("p2-preview-name");p2PrevTitleEl=document.getElementById("p2-preview-title");p2PrevOutfitEl=document.getElementById("p2-preview-outfit");p1NameEl=document.getElementById("hud-p1-name");p1HpFillEl=document.getElementById("hud-p1-hp");p1HpDamageEl=document.getElementById("hud-p1-damage");p1HpTextEl=document.getElementById("hud-p1-hp-text");p1CdEl=document.getElementById("hud-p1-cd");p1CdLabelEl=document.getElementById("hud-p1-cd-label");p1Dot0=document.getElementById("p1-dot-0");p1Dot1=document.getElementById("p1-dot-1");p2NameEl=document.getElementById("hud-p2-name");p2HpFillEl=document.getElementById("hud-p2-hp");p2HpDamageEl=document.getElementById("hud-p2-damage");p2HpTextEl=document.getElementById("hud-p2-hp-text");p2CdEl=document.getElementById("hud-p2-cd");p2CdLabelEl=document.getElementById("hud-p2-cd-label");p2Dot0=document.getElementById("p2-dot-0");p2Dot1=document.getElementById("p2-dot-1");roundLabelEl=document.getElementById("hud-round-label");timerEl=document.getElementById("hud-timer");p1ComboEl=document.getElementById("hud-p1-combo");p1ComboCountEl=document.getElementById("hud-p1-combo-count");p1ComboNameEl=document.getElementById("hud-p1-combo-name");p2ComboEl=document.getElementById("hud-p2-combo");p2ComboCountEl=document.getElementById("hud-p2-combo-count");p2ComboNameEl=document.getElementById("hud-p2-combo-name");announcerBanner=document.getElementById("announcer-banner");announcerText=document.getElementById("announcer-text");announcerSub=document.getElementById("announcer-sub");vicWinnerEl=document.getElementById("vic-winner-text");vicCharNameEl=document.getElementById("vic-character-name");vicRoundsCountEl=document.getElementById("vic-rounds-count");constructor(e,t){this.audio=e,this.listeners=t,this.initEventListeners(),this.init3DPreviews(),this.renderCharacterCards(),this.renderArenaCards(),this.updateCharacterSelectionUI()}init3DPreviews(){try{document.getElementById("p1-preview-canvas")&&typeof WebGLRenderingContext<"u"&&(this.p1Preview=new Fc("p1-preview-canvas",54015,.25),this.p2Preview=new Fc("p2-preview-canvas",16724838,-.25))}catch(e){console.warn("[UIManager] 3D Character Preview renderers skipped (headless or unsupported environment):",e)}}initEventListeners(){this.audioBtn.addEventListener("click",()=>{const i=this.audio.toggleMute();this.audioIcon.textContent=i?"🔇":"🔊"}),document.getElementById("btn-start").addEventListener("click",()=>{this.audio.playMenuSelect(),this.listeners.onStartClicked()}),document.getElementById("btn-controls").addEventListener("click",()=>{this.audio.playMenuSelect(),this.controlsModalEl.classList.remove("hidden")}),document.getElementById("btn-how-to-play").addEventListener("click",()=>{this.audio.playMenuSelect(),this.howModalEl.classList.remove("hidden")}),document.getElementById("controls-close-btn").addEventListener("click",()=>{this.audio.playMenuSelect(),this.controlsModalEl.classList.add("hidden")}),document.getElementById("controls-back-btn").addEventListener("click",()=>{this.audio.playMenuSelect(),this.controlsModalEl.classList.add("hidden")}),document.getElementById("how-close-btn").addEventListener("click",()=>{this.audio.playMenuSelect(),this.howModalEl.classList.add("hidden")}),document.getElementById("how-back-btn").addEventListener("click",()=>{this.audio.playMenuSelect(),this.howModalEl.classList.add("hidden")}),document.getElementById("btn-select-back").addEventListener("click",()=>{this.audio.playMenuSelect(),this.listeners.onSelectBackClicked()}),document.getElementById("btn-rematch").addEventListener("click",()=>{this.audio.playMenuSelect(),this.listeners.onRematchClicked()}),document.getElementById("btn-char-select").addEventListener("click",()=>{this.audio.playMenuSelect(),this.listeners.onCharSelectClicked()}),document.getElementById("btn-vic-main-menu").addEventListener("click",()=>{this.audio.playMenuSelect(),this.listeners.onMainMenuClicked()})}renderCharacterCards(){const e=document.getElementById("characters-carousel");e.innerHTML="",Kt.forEach((t,n)=>{const i=document.createElement("div");i.className="character-card",i.id=`char-card-${n}`;const a=t.id==="aynur"||!!t.previewImagePath?`<img src="${t.portraitPath}" alt="${t.name}" class="card-portrait-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="card-avatar-graphic" style="display:none;">${t.avatarIcon}</div>`:`<div class="card-avatar-graphic">${t.avatarIcon}</div>`;i.innerHTML=`
        <div class="card-portrait-wrap">
          <div class="card-player-indicators">
            <span class="p-tag tag-p1">P1</span>
            <span class="p-tag tag-p2">P2</span>
          </div>
          ${a}
        </div>
        <div class="card-details">
          <div class="card-name">${t.name}</div>
          <div class="card-meta">
            <span>${t.gender}</span>
            <span>${t.archetype}</span>
          </div>
        </div>
      `,i.addEventListener("click",()=>{this.p1Locked?this.p2Locked||(this.p2SelectIndex=n,this.audio.playMenuHover(),this.updateCharacterSelectionUI()):(this.p1SelectIndex=n,this.audio.playMenuHover(),this.updateCharacterSelectionUI())}),e.appendChild(i)})}renderArenaCards(){const e=document.getElementById("arenas-carousel");e&&(e.innerHTML="",en.forEach((t,n)=>{const i=document.createElement("div");i.className="arena-card",i.id=`arena-card-${n}`;const s=t.imagePath?`<img src="${t.imagePath}" alt="${t.name}" class="arena-thumb-img" />`:'<div class="arena-thumb-default">🌃 3D STREET</div>';i.innerHTML=`
        <div class="arena-thumb-wrap">
          ${s}
        </div>
        <div class="arena-card-info">
          <div class="arena-card-name">${t.name}</div>
          <div class="arena-card-sub">${t.subtitle}</div>
        </div>
      `,i.addEventListener("click",()=>{this.arenaSelectIndex=n,this.audio.playMenuSelect(),this.updateCharacterSelectionUI(),this.listeners.onArenaSelected?.(t.id)}),e.appendChild(i)}))}updateCharacterSelectionUI(){en.forEach((s,a)=>{const o=document.getElementById(`arena-card-${a}`);o&&o.classList.toggle("selected",this.arenaSelectIndex===a)}),Kt.forEach((s,a)=>{const o=document.getElementById(`char-card-${a}`);if(!o)return;const c=this.p1SelectIndex===a,l=this.p2SelectIndex===a;o.classList.remove("p1-selected","p2-selected","both-selected"),c&&l?o.classList.add("both-selected"):c?o.classList.add("p1-selected"):l&&o.classList.add("p2-selected")});const e=Kt[this.p1SelectIndex],t=Kt[this.p2SelectIndex];document.getElementById("p1-selected-name").textContent=e.name,document.getElementById("p1-selected-style").textContent=e.title;const n=document.getElementById("p1-lock-status");n.textContent=this.p1Locked?"LOCKED IN!":"CHOOSING... (F TO LOCK)",n.className=`slot-status ${this.p1Locked?"locked":""}`,document.getElementById("p2-selected-name").textContent=t.name,document.getElementById("p2-selected-style").textContent=t.title;const i=document.getElementById("p2-lock-status");i.textContent=this.p2Locked?"LOCKED IN!":"CHOOSING... (K TO LOCK)",i.className=`slot-status ${this.p2Locked?"locked":""}`,this.p1PrevNameEl&&(this.p1PrevNameEl.textContent=e.name),this.p1PrevTitleEl&&(this.p1PrevTitleEl.textContent=e.title),this.p1PrevOutfitEl&&(this.p1PrevOutfitEl.textContent=e.outfit?e.outfit.styleName:e.archetype),this.p1Preview?.setCharacter(e),this.p2PrevNameEl&&(this.p2PrevNameEl.textContent=t.name),this.p2PrevTitleEl&&(this.p2PrevTitleEl.textContent=t.title),this.p2PrevOutfitEl&&(this.p2PrevOutfitEl.textContent=t.outfit?t.outfit.styleName:t.archetype),this.p2Preview?.setCharacter(t)}handleCharSelectInput(e){let t=!1;if(e.arenaPrev?(this.arenaSelectIndex=(this.arenaSelectIndex-1+en.length)%en.length,this.audio.playMenuHover(),this.listeners.onArenaSelected?.(en[this.arenaSelectIndex].id),t=!0):e.arenaNext&&(this.arenaSelectIndex=(this.arenaSelectIndex+1)%en.length,this.audio.playMenuHover(),this.listeners.onArenaSelected?.(en[this.arenaSelectIndex].id),t=!0),this.p1Locked||(e.p1Left&&(this.p1SelectIndex=(this.p1SelectIndex-1+Kt.length)%Kt.length,this.audio.playMenuHover(),t=!0),e.p1Right&&(this.p1SelectIndex=(this.p1SelectIndex+1)%Kt.length,this.audio.playMenuHover(),t=!0),e.p1Confirm&&(this.p1Locked=!0,this.audio.playMenuSelect(),t=!0)),this.p2Locked||(e.p2Left&&(this.p2SelectIndex=(this.p2SelectIndex-1+Kt.length)%Kt.length,this.audio.playMenuHover(),t=!0),e.p2Right&&(this.p2SelectIndex=(this.p2SelectIndex+1)%Kt.length,this.audio.playMenuHover(),t=!0),e.p2Confirm&&(this.p2Locked=!0,this.audio.playMenuSelect(),t=!0)),t&&this.updateCharacterSelectionUI(),this.p1Locked&&this.p2Locked){this.p1Locked=!1,this.p2Locked=!1;const n=Kt[this.p1SelectIndex],i=Kt[this.p2SelectIndex],s=en[this.arenaSelectIndex]||en[0];this.listeners.onBothFightersLocked(n,i,s.id)}}showMainMenu(){this.isCharSelectActive=!1,this.hideAllScreens(),this.mainMenuEl.classList.remove("hidden"),this.mainMenuEl.classList.add("active")}showCharSelect(){this.hideAllScreens(),this.isCharSelectActive=!0,this.p1Locked=!1,this.p2Locked=!1,this.updateCharacterSelectionUI(),this.charSelectEl.classList.remove("hidden"),this.charSelectEl.classList.add("active")}showVSScreen(e,t,n){this.isCharSelectActive=!1,this.hideAllScreens(),this.vsScreenEl.classList.remove("hidden"),this.vsScreenEl.classList.add("active");const i=document.getElementById("vs-p1-img");e.id==="aynur"||e.previewImagePath?i.innerHTML=`<img src="${e.portraitPath}" alt="${e.name}" class="vs-portrait-img" onerror="this.parentElement.textContent='${e.avatarIcon}';" />`:i.textContent=e.avatarIcon,document.getElementById("vs-p1-name").textContent=e.name,document.getElementById("vs-p1-title").textContent=e.title;const s=document.getElementById("vs-p1-outfit");s&&(s.textContent=e.outfit?.styleName||e.archetype);const a=document.getElementById("vs-p2-img");t.id==="aynur"||t.previewImagePath?a.innerHTML=`<img src="${t.portraitPath}" alt="${t.name}" class="vs-portrait-img" onerror="this.parentElement.textContent='${t.avatarIcon}';" />`:a.textContent=t.avatarIcon,document.getElementById("vs-p2-name").textContent=t.name,document.getElementById("vs-p2-title").textContent=t.title;const o=document.getElementById("vs-p2-outfit");o&&(o.textContent=t.outfit?.styleName||t.archetype),this.audio.playRoundStart(),setTimeout(()=>{n()},2200)}showGameHUD(e,t){this.isCharSelectActive=!1,this.hideAllScreens(),this.p1NameEl.textContent=e,this.p2NameEl.textContent=t,this.gameHudEl.classList.remove("hidden"),this.gameHudEl.classList.add("active")}showVictoryScreen(e,t,n,i){this.isCharSelectActive=!1,this.hideAllScreens(),this.victoryEl.classList.remove("hidden"),this.victoryEl.classList.add("active"),this.vicWinnerEl.textContent=`PLAYER ${e} WINS!`,this.vicWinnerEl.style.color=e===1?"var(--p1-blue)":"var(--p2-red)",this.vicCharNameEl.textContent=t,this.vicRoundsCountEl.textContent=`${n} - ${i}`}hideAllScreens(){this.mainMenuEl.classList.add("hidden"),this.mainMenuEl.classList.remove("active"),this.charSelectEl.classList.add("hidden"),this.charSelectEl.classList.remove("active"),this.vsScreenEl.classList.add("hidden"),this.vsScreenEl.classList.remove("active"),this.gameHudEl.classList.add("hidden"),this.gameHudEl.classList.remove("active"),this.victoryEl.classList.add("hidden"),this.victoryEl.classList.remove("active"),this.controlsModalEl.classList.add("hidden"),this.howModalEl.classList.add("hidden")}updateHUD(e,t,n,i,s,a,o,c,l,h,u){const d=Math.max(0,Math.min(100,e/n*100)),f=Math.max(0,Math.min(100,t/i*100));this.p1HpFillEl.style.width=`${d}%`,this.p1HpDamageEl.style.width=`${d}%`,this.p1HpTextEl.textContent=`${Math.ceil(e)} / ${n}`,this.p2HpFillEl.style.width=`${f}%`,this.p2HpDamageEl.style.width=`${f}%`,this.p2HpTextEl.textContent=`${Math.ceil(t)} / ${i}`,e<=20?this.p1HpFillEl.classList.add("hp-critical"):this.p1HpFillEl.classList.remove("hp-critical"),t<=20?this.p2HpFillEl.classList.add("hp-critical"):this.p2HpFillEl.classList.remove("hp-critical"),this.p1Dot0.classList.toggle("won",c>=1),this.p1Dot1.classList.toggle("won",c>=2),this.p2Dot0.classList.toggle("won",l>=1),this.p2Dot1.classList.toggle("won",l>=2);const g=s<=0?100:(1-s/o)*100,_=a<=0?100:(1-a/o)*100;this.p1CdEl.style.width=`${g}%`,this.p1CdEl.classList.toggle("cooling",s>0),this.p1CdLabelEl&&(s<=0?(this.p1CdLabelEl.textContent="SPECIAL READY",this.p1CdLabelEl.classList.add("ready")):(this.p1CdLabelEl.textContent=`SPECIAL: ${s.toFixed(1)}s`,this.p1CdLabelEl.classList.remove("ready"))),this.p2CdEl.style.width=`${_}%`,this.p2CdEl.classList.toggle("cooling",a>0),this.p2CdLabelEl&&(a<=0?(this.p2CdLabelEl.textContent="SPECIAL READY",this.p2CdLabelEl.classList.add("ready")):(this.p2CdLabelEl.textContent=`SPECIAL: ${a.toFixed(1)}s`,this.p2CdLabelEl.classList.remove("ready"))),this.roundLabelEl.textContent=`ROUND ${h}`;const m=Math.ceil(u);this.timerEl.textContent=m.toString(),m<=10?this.timerEl.classList.add("low-time"):this.timerEl.classList.remove("low-time")}showCombo(e,t,n){const i=e===1?this.p1ComboEl:this.p2ComboEl,s=e===1?this.p1ComboCountEl:this.p2ComboCountEl,a=e===1?this.p1ComboNameEl:this.p2ComboNameEl;!i||!s||(t>=2?(s.textContent=`${t} HITS`,a&&(a.textContent=n||"",a.style.display=n?"block":"none"),i.classList.remove("hidden")):i.classList.add("hidden"))}showAnnounce(e,t="",n=1e3){this.announcerText.textContent=e,this.announcerSub.textContent=t,this.announcerBanner.classList.remove("hidden"),this.announcerText.style.animation="none",this.announcerText.offsetWidth,this.announcerText.style.animation="",setTimeout(()=>{this.announcerBanner.classList.add("hidden")},n)}hideAnnounce(){this.announcerBanner.classList.add("hidden")}update(e){this.isCharSelectActive&&(this.p1Preview?.update(e),this.p2Preview?.update(e))}}class Zr{playerId;config;root;meshResult;anim;position=new L;velocity=new Ge;facing=1;isGrounded=!0;gravity=-38;health=100;isCrouching=!1;isBlocking=!1;isAttacking=!1;currentAttack=null;attackTimer=0;hasHit=!1;specialCooldown=0;isHitStunned=!1;hitStunTimer=0;isKnockedOut=!1;isVictorious=!1;hitStopTimer=0;hurtboxRadius=.45;hurtboxHeight=1.85;constructor(e,t,n){this.playerId=e,this.config=t,this.meshResult=n||ln.create(t),this.root=this.meshResult.root,this.anim=new Ll(this.meshResult.bones),this.resetForRound(e===1?-4:4,e===1?1:-1)}resetForRound(e,t){this.health=this.config.stats.maxHealth,this.position.set(e,0,0),this.velocity.set(0,0),this.facing=t,this.isGrounded=!0,this.isCrouching=!1,this.isBlocking=!1,this.isAttacking=!1,this.currentAttack=null,this.attackTimer=0,this.hasHit=!1,this.specialCooldown=0,this.isHitStunned=!1,this.hitStunTimer=0,this.hitStopTimer=0,this.isKnockedOut=!1,this.isVictorious=!1,this.root.position.copy(this.position),this.updateFacing(),this.anim.play("idle",!0)}updateFacing(){const e=this.root.getObjectByName("aynur_avatar_group");if(e){this.root.rotation.y=0;const t=Math.abs(e.scale.x)||1;e.scale.x=this.facing===1?t:-t;return}this.root.rotation.y=this.facing===1?Math.PI*.38:-Math.PI*.38}autoFaceOpponent(e){if(this.isKnockedOut||this.isVictorious||this.isAttacking||this.isHitStunned)return;const t=e>this.position.x?1:-1;this.facing!==t&&(this.facing=t,this.updateFacing())}move(e){if(!(this.isHitStunned||this.isKnockedOut||this.isVictorious||this.isAttacking||this.isBlocking)){if(this.isCrouching){this.velocity.x=0;return}this.velocity.x=e*this.config.stats.moveSpeed,this.isGrounded&&(this.facing===1&&e>0||this.facing===-1&&e<0?this.anim.play("walk_forward"):this.anim.play("walk_backward"))}}stopMoving(){this.velocity.x=0,this.isGrounded&&!this.isAttacking&&!this.isCrouching&&!this.isBlocking&&!this.isHitStunned&&!this.isKnockedOut&&!this.isVictorious&&this.anim.play("idle")}jump(){!this.isGrounded||this.isHitStunned||this.isKnockedOut||this.isVictorious||this.isAttacking||this.isBlocking||(this.isGrounded=!1,this.isCrouching=!1,this.velocity.y=this.config.stats.jumpVelocity,this.anim.play("jump"))}crouch(e){!this.isGrounded||this.isHitStunned||this.isKnockedOut||this.isVictorious||(this.isCrouching=e,e?(this.velocity.x=0,this.isAttacking||this.anim.play(this.isBlocking?"block_low":"crouch")):this.isAttacking||this.anim.play(this.isBlocking?"block":"idle"))}block(e){this.isKnockedOut||this.isVictorious||this.isHitStunned||e&&this.isAttacking||(this.isBlocking=e,e?(this.velocity.x=0,this.anim.play(this.isCrouching?"block_low":"block")):this.isGrounded&&!this.isAttacking&&this.anim.play(this.isCrouching?"crouch":"idle"))}punch(e=!1){if(!this.isGrounded)return this.punchJump();if(this.isCrouching)return this.punchCrouch();if(e)return this.punchHeavy();const t={type:"punch",name:"Punch",damage:this.config.stats.punchDamage||8,height:"mid",activeStart:.05,activeEnd:.13,duration:.2,range:1.3,knockback:2.5,hitStun:.18};return this.startAttack(t,"punch"),!0}kick(e=!1){if(!this.isGrounded)return this.kickJump();if(this.isCrouching)return this.kickCrouch();if(e)return this.kickHeavy();const t={type:"kick",name:"Kick",damage:this.config.stats.kickDamage||12,height:"mid",activeStart:.07,activeEnd:.15,duration:.25,range:1.4,knockback:3,hitStun:.2};return this.startAttack(t,"kick"),!0}punchLight(){if(this.cannotAttack())return!1;const e={type:"punch_light",name:"Light Punch",damage:this.config.stats.punchLightDamage||6,height:"mid",activeStart:.05,activeEnd:.13,duration:.2,range:1.3,knockback:2.5,hitStun:.18};return this.startAttack(e,"punch_light"),!0}punchHeavy(){if(this.cannotAttack())return!1;const e={type:"punch_heavy",name:"Heavy Punch",damage:this.config.stats.punchHeavyDamage||12,height:"high",activeStart:.1,activeEnd:.23,duration:.36,range:1.55,knockback:5.8,hitStun:.32};return this.startAttack(e,"punch_heavy"),!0}punchJump(){if(this.cannotAttack())return!1;const e={type:"punch_jump",name:"Jump Punch",damage:this.config.stats.punchJumpDamage||9,height:"overhead",activeStart:.08,activeEnd:.21,duration:.3,range:1.4,knockback:4,hitStun:.25};return this.startAttack(e,"punch_jump"),!0}punchCrouch(){if(this.cannotAttack())return!1;const e={type:"punch_crouch",name:"Crouch Punch",damage:this.config.stats.punchCrouchDamage||7,height:"low",activeStart:.06,activeEnd:.15,duration:.22,range:1.25,knockback:3,hitStun:.22};return this.startAttack(e,"punch_crouch"),!0}kickLight(){if(this.cannotAttack())return!1;const e={type:"kick_light",name:"Light Kick",damage:this.config.stats.kickLightDamage||9,height:"mid",activeStart:.08,activeEnd:.18,duration:.26,range:1.7,knockback:4,hitStun:.22};return this.startAttack(e,"kick_light"),!0}kickHeavy(){if(this.cannotAttack())return!1;const e={type:"kick_heavy",name:"Heavy Kick",damage:this.config.stats.kickHeavyDamage||15,height:"high",activeStart:.12,activeEnd:.28,duration:.42,range:1.95,knockback:7.2,hitStun:.38};return this.startAttack(e,"kick_heavy"),!0}kickJump(){if(this.cannotAttack())return!1;const e={type:"kick_jump",name:"Jump Kick",damage:this.config.stats.kickJumpDamage||12,height:"overhead",activeStart:.1,activeEnd:.25,duration:.34,range:1.75,knockback:5.5,hitStun:.28};return this.startAttack(e,"kick_jump"),!0}kickCrouch(){if(this.cannotAttack())return!1;const e={type:"kick_crouch",name:"Crouch Kick",damage:this.config.stats.kickCrouchDamage||8,height:"low",activeStart:.08,activeEnd:.21,duration:.28,range:1.65,knockback:4.2,hitStun:.25};return this.startAttack(e,"kick_crouch"),!0}specialAttack(){if(this.cannotAttack()||this.specialCooldown>0)return!1;const e=this.config.specialAttack?this.config.specialAttack.name:"FIRE STRIKE",t=this.config.specialAttack?this.config.specialAttack.type:"fire_strike",n={type:"special",name:e,damage:this.config.stats.specialDamage||20,height:"special",activeStart:.18,activeEnd:.45,duration:.5,range:2.4,knockback:8.5,hitStun:.45};this.specialCooldown=5;let i="special";return t==="fire_strike"?i="special_alex":t==="thunder_kick"?i="special_max":t==="shadow_rush"?i="special_ryan":t==="phoenix_kick"?i="special_luna":t==="dragon_spin"&&(i="special_maya"),this.startAttack(n,i),!0}cannotAttack(){return this.isAttacking||this.isBlocking||this.isHitStunned||this.isKnockedOut||this.isVictorious}startAttack(e,t){this.isAttacking=!0,this.currentAttack=e,this.attackTimer=0,this.hasHit=!1,this.isGrounded&&(e.type==="punch_heavy"?this.velocity.x=this.facing*1.5:e.type==="special"?this.velocity.x=this.facing*3:this.velocity.x*=.3),this.anim.play(t,!0)}takeDamage(e,t,n,i="mid"){if(this.isKnockedOut)return{damageDealt:0,wasBlocked:!1,isKO:!0};let s=e,a=!1;this.isBlocking&&(this.isCrouching?i==="overhead"?(s=e,a=!1):(s=Math.round(e*.2*10)/10,a=!0):i==="low"?(s=Math.round(e*.85*10)/10,a=!1):(s=Math.round(e*.2*10)/10,a=!0)),this.health=Math.max(0,this.health-s);const o=a?n*.35:n;if(this.velocity.x=t*o,this.health<=0)return this.isKnockedOut=!0,this.isAttacking=!1,this.currentAttack=null,this.anim.play("ko",!0),{damageDealt:s,wasBlocked:a,isKO:!0};if(!a){this.isHitStunned=!0;const c=e>=12?.32:.2;this.hitStunTimer=c,this.isAttacking=!1,this.currentAttack=null,i==="low"?this.anim.play("hurt_low",!0):e>=12?this.anim.play("hurt_heavy",!0):this.anim.play("hurt_high",!0)}return{damageDealt:s,wasBlocked:a,isKO:!1}}triggerVictory(){this.isVictorious=!0,this.isAttacking=!1,this.currentAttack=null,this.isBlocking=!1;const e=this.config.id.toLowerCase();let t="victory";e.includes("01")||e.includes("alex")||e.includes("tacir")?t="victory_alex":e.includes("02")||e.includes("max")||e.includes("farhad")?t="victory_max":e.includes("03")||e.includes("ryan")||e.includes("rufat")?t="victory_ryan":e.includes("04")||e.includes("luna")||e.includes("aynur")?t="victory_luna":(e.includes("05")||e.includes("maya")||e.includes("sevil"))&&(t="victory_maya"),this.anim.play(t,!0)}update(e,t){this.specialCooldown>0&&(this.specialCooldown=Math.max(0,this.specialCooldown-e)),this.isHitStunned&&(this.hitStunTimer-=e,this.hitStunTimer<=0&&(this.isHitStunned=!1,!this.isKnockedOut&&!this.isVictorious&&this.anim.play(this.isCrouching?"crouch":"idle"))),this.isAttacking&&this.currentAttack&&(this.attackTimer+=e,this.attackTimer>=this.currentAttack.duration&&(this.isAttacking=!1,this.currentAttack=null,!this.isKnockedOut&&!this.isVictorious&&(this.isBlocking?this.anim.play(this.isCrouching?"block_low":"block"):this.isCrouching?this.anim.play("crouch"):this.anim.play(this.isGrounded?"idle":"jump")))),this.isGrounded||(this.velocity.y+=this.gravity*e,this.position.y+=this.velocity.y*e,this.position.y<=0&&(this.position.y=0,this.velocity.y=0,this.isGrounded=!0,!this.isAttacking&&!this.isHitStunned&&!this.isKnockedOut&&!this.isVictorious&&(this.isCrouching?this.anim.play(this.isBlocking?"block_low":"crouch"):Math.abs(this.velocity.x)>.5?this.anim.play("walk_forward"):this.anim.play(this.isBlocking?"block":"idle")))),this.position.x+=this.velocity.x*e,this.isGrounded&&Math.abs(this.velocity.x)>.01&&(this.velocity.x*=.88,Math.abs(this.velocity.x)<.05&&(this.velocity.x=0));const n=t-this.hurtboxRadius;this.position.x<-n?(this.position.x=-n,this.velocity.x=0):this.position.x>n&&(this.position.x=n,this.velocity.x=0),this.position.z=0,this.root.position.copy(this.position),this.anim.update(e)}getProjectileSpawnPosition(){const e=new L;return this.meshResult.specialOrigin.getWorldPosition(e),e.z=0,e}}function kc(r,e){if(e===dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ba||e===tl){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ba)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Wg extends qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jg(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new l0(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ds.extractUrlBase(e);a=ds.resolveURL(l,this.path)}else a=ds.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Rl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Il){try{a[He.KHR_BINARY_GLTF]=new h0(e)}catch(u){i&&i(u);return}s=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new T0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:a[u]=new qg;break;case He.KHR_DRACO_MESH_COMPRESSION:a[u]=new u0(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[u]=new d0;break;case He.KHR_MESH_QUANTIZATION:a[u]=new f0;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Xg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kg{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xs(h),l.distance=u;break;case"spot":l=new Mg(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class qg{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,pt))}return Promise.all(i)}}class Yg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class jg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(o,o)}return Promise.all(s)}}class $g{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Zg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Jg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,pt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Qg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class e0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],Nt),Promise.all(s)}}class t0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class n0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,pt)),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class s0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class r0{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class a0{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class o0{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class c0{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class l0{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==qt.TRIANGLES&&l.mode!==qt.TRIANGLE_STRIP&&l.mode!==qt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new De,m=new L,p=new Kn,T=new L(1,1,1),E=new ig(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&T.fromBufferAttribute(c.SCALE,y),E.setMatrixAt(y,_.compose(m,p,T));for(const y in c)if(y==="_COLOR_0"){const C=c[y];E.instanceColor=new Va(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);ut.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Il="glTF",as=12,Oc={JSON:1313821514,BIN:5130562};class h0{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,as),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Il)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-as,s=new DataView(e,as);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Oc.JSON){const l=new Uint8Array(e,as+a,o);this.content=n.decode(l)}else if(c===Oc.BIN){const l=as+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Xa[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Xa[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Li[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Nt,d)})})}}class d0{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class f0{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Dl extends Ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,T=1-m,E=p-d+u;for(let y=0;y!==o;y++){const C=a[_+y+o],b=a[_+y+c]*h,A=a[g+y+o],P=a[g+y]*h;s[y]=T*C+E*b+m*A+p*P}return s}}const p0=new Kn;class m0 extends Dl{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return p0.fromArray(s).normalize().toArray(s),s}}const qt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Li={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bc={9728:Dt,9729:Tt,9984:Xc,9985:er,9986:os,9987:hn},Hc={33071:Gn,33648:or,10497:Ni},Jr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g0={CUBICSPLINE:void 0,LINEAR:ms,STEP:ps},Qr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),r.DefaultMaterial}function ei(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function x0(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function v0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function y0(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ea(t.attributes):e=r.indices+":"+ea(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ea(r.targets[n]);return e}function ea(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ka(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function M0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const S0=new De;class T0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Cl(this.options.manager):this.textureLoader=new Eg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ei(s,o,i),En(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ds.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Jr[i.type],o=Li[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ut(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Jr[i.type],l=Li[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let E=t.cache.get(T);E||(_=new l(o,p*f,i.count*f/h),E=new Jm(_,f/h),t.cache.add(T,E)),m=new ao(E,c,d%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new Ut(_,c,g);if(i.sparse!==void 0){const p=Jr.SCALAR,T=Li[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new T(a[1],E,i.sparse.count*p),b=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=C.length;A<P;A++){const S=C[A];if(m.setX(S,b[A*c]),c>=2&&m.setY(S,b[A*c+1]),c>=3&&m.setZ(S,b[A*c+2]),c>=4&&m.setW(S,b[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Bc[d.magFilter]||Tt,h.minFilter=Bc[d.minFilter]||hn,h.wrapS=Hc[d.wrapS]||Ni,h.wrapT=Hc[d.wrapT]||Ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dt&&h.minFilter!==Tt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new vt(_);m.needsUpdate=!0,d(m)}),t.load(ds.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),En(u,a),u.userData.mimeType=a.mimeType||M0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wl,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new El,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ft}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){const u=i[He.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Yt);const h=s.alphaMode||Qr.OPAQUE;if(h===Qr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Qr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ht&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==ht&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ht){const u=s.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],Nt)}return s.emissiveTexture!==void 0&&a!==ht&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,pt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),En(u,s),t.associations.set(u,{materials:e}),s.extensions&&ei(i,u,s),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Gc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=y0(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Gc(new zt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?_0(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const T=l[f];if(m.mode===qt.TRIANGLES||m.mode===qt.TRIANGLE_STRIP||m.mode===qt.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new eg(_,T):new J(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===qt.TRIANGLE_STRIP?p.geometry=kc(p.geometry,tl):m.mode===qt.TRIANGLE_FAN&&(p.geometry=kc(p.geometry,Ba));else if(m.mode===qt.LINES)p=new sg(_,T);else if(m.mode===qt.LINE_STRIP)p=new co(_,T);else if(m.mode===qt.LINE_LOOP)p=new rg(_,T);else if(m.mode===qt.POINTS)p=new ag(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&v0(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),En(p,s),m.extensions&&ei(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&ei(i,u[0],s),u[0];const d=new je;s.extensions&&ei(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(Ga.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new so(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new De;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oo(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let T=0,E=d.length;T<E;T++){const y=d[T],C=f[T],b=g[T],A=_[T],P=m[T];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,C,b,A,P);if(S)for(let v=0;v<S.length;v++)p.push(S[v])}return new fg(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,S0)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Sl:l.length>1?h=new je:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),En(h,s),s.extensions&&ei(n,h,s),s.matrix!==void 0){const u=new De;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new je;n.name&&(s.name=i.createUniqueName(n.name)),En(s,n),n.extensions&&ei(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof un||d instanceof vt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];Bn[s.path]===Bn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Bn[s.path]){case Bn.weights:l=Hi;break;case Bn.rotation:l=Gi;break;case Bn.position:case Bn.scale:l=zi;break;default:switch(n.itemSize){case 1:l=Hi;break;case 2:case 3:default:l=zi;break}break}const h=i.interpolation!==void 0?g0[i.interpolation]:ms,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Bn[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ka(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Gi?m0:Dl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function E0(r,e,t){const n=e.attributes,i=new Cn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const h=Ka(Li[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ka(Li[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Gc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Xa[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return We.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),En(r,e),E0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?x0(r,e.targets,t):r})}class dr{static loader=new Wg;static cache=new Map;static async loadCharacterModel(e){if(!e.modelPath||e.previewImagePath||e.id==="aynur"||e.id==="sevil")return ln.create(e);try{const t=await new Promise((d,f)=>{dr.loader.load(e.modelPath,g=>d(g),void 0,g=>f(g))});console.log(`[CharacterModelLoader] Successfully loaded custom 3D model for ${e.name}: ${e.modelPath}`);const n=t.scene;n.name=`custom_fighter_${e.id}`,n.scale.set(e.scale.x,e.scale.y,e.scale.z),e.positionOffset&&n.position.set(e.positionOffset.x,e.positionOffset.y,e.positionOffset.z),n.traverse(d=>{if(d.isMesh){const f=d;if(f.castShadow=!0,f.receiveShadow=!0,f.material){const g=f.material;g.roughness!==void 0&&(g.roughness=Math.max(.3,g.roughness))}}});const i=dr.mapOrSynthesizeBones(n),s=new st(.35,8,8),a=new ht({visible:!1,wireframe:!0}),o=new J(s,a);i.rightHand.add(o);const c=new st(.42,8,8),l=new ht({visible:!1,wireframe:!0}),h=new J(c,l);i.rightFoot.add(h);const u=new ut;return u.position.set(.2,.1,.4),i.chest.add(u),{root:n,bones:i,punchHitboxMesh:o,kickHitboxMesh:h,specialOrigin:u}}catch{return console.warn(`[CharacterModelLoader] Notice: Custom model "${e.modelPath}" for ${e.name} not found or failed to load. Using procedural articulated humanoid fallback.`),ln.create(e)}}static mapOrSynthesizeBones(e){const t={},n={root:["root"],hips:["hips","pelvis"],torso:["spine","abdomen","torso"],chest:["chest","spine1","spine2"],head:["head"],leftUpperArm:["leftupperarm","leftarm","upperarm_l","arm_l"],leftForearm:["leftforearm","lowerarm_l","forearm_l"],leftHand:["lefthand","hand_l","wrist_l"],rightUpperArm:["rightupperarm","rightarm","upperarm_r","arm_r"],rightForearm:["rightforearm","lowerarm_r","forearm_r"],rightHand:["righthand","hand_r","wrist_r"],leftThigh:["leftupleg","thigh_l","upperleg_l","leftthigh"],leftShin:["leftleg","shin_l","lowerleg_l","calf_l"],leftFoot:["leftfoot","foot_l","ankle_l"],rightThigh:["rightupleg","thigh_r","upperleg_r","rightthigh"],rightShin:["rightleg","shin_r","lowerleg_r","calf_r"],rightFoot:["rightfoot","foot_r","ankle_r"]};e.traverse(b=>{const A=b.name.toLowerCase().replace(/[-_.:]/g,"");for(const[P,S]of Object.entries(n)){const v=P;!t[v]&&S.some(R=>A.includes(R.replace(/[-_.:]/g,"")))&&(t[v]=b)}});const i=(b,A,P=0)=>{if(!t[b]){const S=new je;S.name=`synth_${b}`,S.position.y=P,A?A.add(S):e.add(S),t[b]=S}return t[b]},s=i("root",void 0,0),a=i("hips",s,.95),o=i("torso",a,.12),c=i("chest",o,.32),l=i("head",c,.38),h=i("leftUpperArm",c,.26),u=i("leftForearm",h,-.32),d=i("leftHand",u,-.3),f=i("rightUpperArm",c,.26),g=i("rightForearm",f,-.32),_=i("rightHand",g,-.3),m=i("leftThigh",a,-.06),p=i("leftShin",m,-.44),T=i("leftFoot",p,-.44),E=i("rightThigh",a,-.06),y=i("rightShin",E,-.44),C=i("rightFoot",y,-.44);return{root:s,hips:a,torso:o,chest:c,head:l,leftUpperArm:h,leftForearm:u,leftHand:d,rightUpperArm:f,rightForearm:g,rightHand:_,leftThigh:m,leftShin:p,leftFoot:T,rightThigh:E,rightShin:y,rightFoot:C}}}class Qs{static createFighter(e,t){const n=nt[t]||nt.fighter_01;return new Zr(e,n)}static createFromConfig(e,t){return new Zr(e,t)}static async createFighterAsync(e,t){const n=await dr.loadCharacterModel(t);return new Zr(e,t,n)}}class w0{renderer;canvas;arena;cameraCtrl;input;audio;vfx;combat;match;ui;state="MENU";lastTime=0;fighter1;fighter2;p1Config;p2Config;constructor(){this.canvas=document.getElementById("game-canvas"),this.renderer=new yl({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ya,this.renderer.outputColorSpace=pt,this.arena=new Ug,this.cameraCtrl=new Ng(45,window.innerWidth/window.innerHeight),this.input=new Fg,this.audio=new kg,this.vfx=new Og(this.arena.scene),this.p1Config=nt.alex,this.p2Config=nt.aynur,this.fighter1=Qs.createFromConfig(1,this.p1Config),this.fighter2=Qs.createFromConfig(2,this.p2Config),this.arena.scene.add(this.fighter1.root),this.arena.scene.add(this.fighter2.root),this.combat=new Gg(this.vfx,this.audio),this.ui=new Vg(this.audio,{onStartClicked:()=>this.handleStartClicked(),onSelectBackClicked:()=>this.handleSelectBackClicked(),onBothFightersLocked:(e,t,n)=>this.handleFightersLocked(e,t,n),onArenaSelected:e=>this.arena.setArena(e),onRematchClicked:()=>this.handleRematchClicked(),onCharSelectClicked:()=>this.handleCharSelectClicked(),onMainMenuClicked:()=>this.handleMainMenuClicked()}),this.match=new zg(this.ui,this.audio,e=>this.handleMatchEnded(e)),window.addEventListener("resize",()=>this.handleResize()),this.lastTime=performance.now(),requestAnimationFrame(e=>this.loop(e))}handleResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.cameraCtrl.onResize(e,t)}handleStartClicked(){this.audio.ensureContext(),this.state="CHAR_SELECT",this.ui.showCharSelect()}handleSelectBackClicked(){this.state="MENU",this.ui.showMainMenu()}async handleFightersLocked(e,t,n="khirdalan"){this.p1Config=e,this.p2Config=t,this.arena.setArena(n),this.arena.scene.remove(this.fighter1.root),this.arena.scene.remove(this.fighter2.root),this.fighter1=await Qs.createFighterAsync(1,this.p1Config),this.fighter2=await Qs.createFighterAsync(2,this.p2Config),this.arena.scene.add(this.fighter1.root),this.arena.scene.add(this.fighter2.root),this.state="VS",this.ui.showVSScreen(e,t,()=>{this.startCombatMatch()})}startCombatMatch(){this.state="BATTLE",this.vfx.clearAll(),this.ui.showGameHUD(this.p1Config.name,this.p2Config.name),this.match.startNewMatch(this.fighter1,this.fighter2),this.audio.startBattleMusic()}handleRematchClicked(){this.vfx.clearAll(),this.state="BATTLE",this.ui.showGameHUD(this.p1Config.name,this.p2Config.name),this.match.restartSameMatch(this.fighter1,this.fighter2),this.audio.startBattleMusic()}handleCharSelectClicked(){this.vfx.clearAll(),this.audio.stopBattleMusic(),this.state="CHAR_SELECT",this.ui.showCharSelect()}handleMainMenuClicked(){this.vfx.clearAll(),this.audio.stopBattleMusic(),this.state="MENU",this.ui.showMainMenu()}handleMatchEnded(e){this.state="VICTORY",this.audio.stopBattleMusic();const t=e===1?this.p1Config.name:this.p2Config.name;this.ui.showVictoryScreen(e,t,this.match.p1Wins,this.match.p2Wins)}loop(e){const t=(e-this.lastTime)*.001;this.lastTime=e;const n=Math.min(t,.05);this.state==="CHAR_SELECT"?this.updateCharSelectInput():this.state==="BATTLE"&&this.updateBattle(n),this.ui.update(n),this.arena.update(n,this.cameraCtrl.camera.position.x),this.cameraCtrl.update(n,this.fighter1,this.fighter2,this.arena.arenaHalfWidth),this.vfx.update(n,this.cameraCtrl.camera),this.renderer.render(this.arena.scene,this.cameraCtrl.camera),this.input.update(),requestAnimationFrame(i=>this.loop(i))}updateCharSelectInput(){const e=this.input.isKeyJustPressed("KeyA"),t=this.input.isKeyJustPressed("KeyD"),n=this.input.isKeyJustPressed("KeyF"),i=this.input.isKeyJustPressed("ArrowLeft"),s=this.input.isKeyJustPressed("ArrowRight"),a=this.input.isKeyJustPressed("KeyK"),o=this.input.isKeyJustPressed("KeyW")||this.input.isKeyJustPressed("ArrowUp"),c=this.input.isKeyJustPressed("KeyS")||this.input.isKeyJustPressed("ArrowDown");this.ui.handleCharSelectInput({p1Left:e,p1Right:t,p1Confirm:n,p2Left:i,p2Right:s,p2Confirm:a,arenaPrev:o,arenaNext:c})}updateBattle(e){this.match.phase==="fighting"?this.processCombatInputs():(!this.fighter1.isVictorious&&!this.fighter1.isKnockedOut&&this.fighter1.stopMoving(),!this.fighter2.isVictorious&&!this.fighter2.isKnockedOut&&this.fighter2.stopMoving()),this.fighter1.autoFaceOpponent(this.fighter2.position.x),this.fighter2.autoFaceOpponent(this.fighter1.position.x),this.fighter1.update(e,this.arena.arenaHalfWidth),this.fighter2.update(e,this.arena.arenaHalfWidth),this.combat.update(e,this.fighter1,this.fighter2,this.arena.arenaHalfWidth),this.match.update(e,this.fighter1,this.fighter2),this.ui.updateHUD(this.fighter1.health,this.fighter2.health,this.fighter1.config.stats.maxHealth,this.fighter2.config.stats.maxHealth,this.fighter1.specialCooldown,this.fighter2.specialCooldown,this.fighter1.config.stats.specialCooldown,this.match.p1Wins,this.match.p2Wins,this.match.currentRound,this.match.roundTimer)}processCombatInputs(){const e=this.input.getPlayer1Actions(),t=this.input.getPlayer2Actions();if(e.block?this.fighter1.block(!0):this.fighter1.isBlocking&&this.fighter1.block(!1),!this.fighter1.isBlocking)if(e.crouch?this.fighter1.crouch(!0):(this.fighter1.isCrouching&&this.fighter1.crouch(!1),e.jumpTriggered?(this.fighter1.jump(),this.audio.playJump()):e.moveLeft?this.fighter1.move(-1):e.moveRight?this.fighter1.move(1):this.fighter1.stopMoving()),e.specialTriggered){if(this.fighter1.specialAttack()){this.audio.playSpecialAttack();const n=this.fighter1.getProjectileSpawnPosition();this.vfx.spawnProjectile(1,n,this.fighter1.facing,this.fighter1.config.stats.specialDamage,54015)}}else e.kickTriggered?this.fighter1.kick():e.punchTriggered&&this.fighter1.punch();if(t.block?this.fighter2.block(!0):this.fighter2.isBlocking&&this.fighter2.block(!1),!this.fighter2.isBlocking)if(t.crouch?this.fighter2.crouch(!0):(this.fighter2.isCrouching&&this.fighter2.crouch(!1),t.jumpTriggered?(this.fighter2.jump(),this.audio.playJump()):t.moveLeft?this.fighter2.move(-1):t.moveRight?this.fighter2.move(1):this.fighter2.stopMoving()),t.specialTriggered){if(this.fighter2.specialAttack()){this.audio.playSpecialAttack();const n=this.fighter2.getProjectileSpawnPosition();this.vfx.spawnProjectile(2,n,this.fighter2.facing,this.fighter2.config.stats.specialDamage,16724838)}}else t.kickTriggered?this.fighter2.kick():t.punchTriggered&&this.fighter2.punch()}}window.addEventListener("DOMContentLoaded",()=>{new w0});
