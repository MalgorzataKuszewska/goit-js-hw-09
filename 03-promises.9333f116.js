function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function s(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}const l=document.querySelector(".form");l.addEventListener("submit",(t=>{t.preventDefault();const n=new FormData(l),o=parseInt(n.get("delay")),r=parseInt(n.get("step")),a=parseInt(n.get("amount"));for(let t=0;t<a;t++){s(t+1,o+t*r).then((t=>{e(i).Notify.success(`✅ Fulfilled promise ${t.position} in ${t.delay}ms`)})).catch((t=>{e(i).Notify.failure(`❌ Rejected promise ${t.position} in ${t.delay}ms`)}))}}));
//# sourceMappingURL=03-promises.9333f116.js.map
