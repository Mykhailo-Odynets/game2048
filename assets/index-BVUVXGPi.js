(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();const d={x:0,y:0},l={current:0,best:0};let u=[];const n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];let y=!1,a=!1;const g=document.querySelector("#app"),E=document.querySelector("#score"),S=document.querySelector("#score__best"),L=()=>{m()},b=()=>{s(),m(),s(),s(),s()},M=()=>{s(),s(),m(),s(),s()},v=()=>{s(),s(),s(),m(),s()},f=()=>{g.innerHTML="",E.innerHTML=`${l.current}`,S.innerHTML=`${l.best}`,x();for(let e of n)for(let t of e){const o=document.createElement("div");o.classList.add("block",`block-${t}`),o.innerHTML=`${t}`,g.appendChild(o),t===2048&&(a=!0)}a&&w("You won!")},w=e=>{const t=document.getElementsByClassName("message"),o=document.querySelector("#message__score"),i=document.querySelector("#message__text");o.innerHTML=`${l.current}`,i.innerHTML=`${e}`,t[0].classList.remove("hidden")},p=()=>{u.length=0;for(let e in n)for(let t in n[e])n[e][t]===0&&u.push({[+e]:+t})},x=()=>{if(p(),u.length!==0){const e=u[Math.floor(Math.random()*u.length)],t=+Object.keys(e)[0];n[t][e[t]]=Math.floor(Math.random()*4)===3?4:2}p(),T()||w("Game over!")},T=()=>{if(u.length>0)return!0;for(let e=0;e<n.length;e+=1)for(let t=0;t<n[e].length;t+=1)if(t!==n[e].length-1&&n[e][t]===n[e][t+1]||e!==n.length-1&&n[e][t]===n[e+1][t])return!0;return!1},m=()=>{for(let e in n)for(let t=1;t<n[e].length;t+=1){let o=t;for(;o>0&&n[e][o-1]===0;)n[e][o-1]=n[e][o],n[e][o]=0,o-=1;o>0&&n[e][o-1]===n[e][o]&&(n[e][o-1]*=2,n[e][o]=0,l.current+=n[e][o-1],l.current>l.best&&(l.best=l.current))}},s=()=>{for(let t=0;t<4/2;t+=1)for(let o=t;o<4-t-1;o+=1){const i=n[t][o];n[t][o]=n[o][3-t],n[o][3-t]=n[3-t][3-o],n[3-t][3-o]=n[3-o][t],n[3-o][t]=i}};f();document.querySelector("#message__play-again").addEventListener("click",()=>{n.length=0,n.push([0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]),l.current=0,a=!1,f(),document.getElementsByClassName("message")[0].classList.add("hidden")});document.addEventListener("keydown",e=>{if(!a){if(e.key==="ArrowLeft")L();else if(e.key==="ArrowUp")b();else if(e.key==="ArrowRight")M();else if(e.key==="ArrowDown")v();else return;f()}});document.addEventListener("touchstart",e=>{a||(d.x=e.touches[0].clientX,d.y=e.touches[0].clientY,y=!0)});document.addEventListener("touchmove",e=>{const t={x:e.touches[0].clientX,y:e.touches[0].clientY},o=t.x-d.x,i=t.y-d.y;(Math.abs(o)>50||Math.abs(i)>50)&&y&&(Math.abs(o)>Math.abs(i)?o>0?M():L():i>0?v():b(),y=!1,f())});
