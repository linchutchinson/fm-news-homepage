import{k as s}from"./entry.1b510019.js";function p(n,i){return s()._useHead(n,i)}function e(n){return n!==null&&typeof n=="object"}function c(n,i,o=".",f){if(!e(i))return c(n,{},o,f);const u=Object.assign({},i);for(const t in n){if(t==="__proto__"||t==="constructor")continue;const r=n[t];r!=null&&(f&&f(u,t,r,o)||(Array.isArray(r)&&Array.isArray(u[t])?u[t]=[...r,...u[t]]:e(r)&&e(u[t])?u[t]=c(r,u[t],(o?`${o}.`:"")+t.toString(),f):u[t]=r))}return u}function d(n){return(...i)=>i.reduce((o,f)=>c(o,f,"",n),{})}const y=d((n,i,o)=>{if(typeof n[i]<"u"&&typeof o=="function")return n[i]=o(n[i]),!0}),_={};y(_);export{p as u};
