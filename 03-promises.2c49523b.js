function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function s(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}const a=document.querySelector(".form");a.addEventListener("submit",(t=>{t.preventDefault();const o=new FormData(a),n=parseInt(o.get("delay")),r=parseInt(o.get("step")),l=parseInt(o.get("amount")),d=[];for(let e=0;e<l;e++){const t=e+1,o=n+e*r;d.push(s(t,o))}Promise.all(d).then((t=>{t.forEach((t=>{e(i).Notify.success(`✅ Fulfilled promise ${t.position} in ${t.delay}ms`)}))})).catch((t=>{t.forEach((t=>{e(i).Notify.failure(`❌ Rejected promise ${t.position} in ${t.delay}ms`)}))}))}));
//# sourceMappingURL=03-promises.2c49523b.js.map