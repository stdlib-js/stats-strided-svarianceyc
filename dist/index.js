"use strict";var y=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var f=y(function(B,l){
var a=require('@stdlib/number-float64-base-to-float32/dist');function F(r,e,i,v,d){var t,s,u,c,o,q,n;if(q=r-e,r<=0||q<=0)return NaN;if(r===1||v===0)return 0;for(t=i[d],s=d+v,u=0,n=2;n<=r;n++)c=i[s],t=a(t+c),o=a(a(n*c)-t),u=a(u+a(a(a(1/(n*(n-1)))*o)*o)),s+=v;return a(u/q)}l.exports=F
});var x=y(function(C,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),S=f();function T(r,e,i,v){return S(r,e,i,v,O(r,v))}m.exports=T
});var _=y(function(D,R){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),g=f();b(j,"ndarray",g);R.exports=j
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=_(),p,E=k(h(__dirname,"./native.js"));w(E)?p=z:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
