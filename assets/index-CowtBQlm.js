(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const d={x:0,y:0};let f=[];const r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];let u=!1;const h=()=>{const e=document.querySelector("#app");e.innerHTML="",p();for(let t of r)for(let o of t){const c=document.createElement("div");c.classList.add("block",`block-${o}`),c.innerHTML=`${o}`,e.appendChild(c)}},m=()=>{f.length=0;for(let e in r)for(let t in r[e])r[e][t]===0&&f.push({[+e]:+t})},p=()=>{m();const e=f[Math.floor(Math.random()*f.length)],t=+Object.keys(e)[0];r[t][e[t]]=Math.floor(Math.random()*4)===3?4:2},l=()=>{for(let e in r)for(let t=1;t<r[e].length;t+=1){let o=t;for(;o>0&&r[e][o-1]===0;)r[e][o-1]=r[e][o],r[e][o]=0,o-=1;o>0&&r[e][o-1]===r[e][o]&&(r[e][o-1]*=2,r[e][o]=0)}},n=()=>{for(let t=0;t<4/2;t+=1)for(let o=t;o<4-t-1;o+=1){const c=r[t][o];r[t][o]=r[o][3-t],r[o][3-t]=r[3-t][3-o],r[3-t][3-o]=r[3-o][t],r[3-o][t]=c}};h();document.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")l();else if(e.key==="ArrowUp")n(),l(),n(),n(),n();else if(e.key==="ArrowRight")n(),n(),l(),n(),n();else if(e.key==="ArrowDown")n(),n(),n(),l(),n();else return;h()});document.addEventListener("touchstart",e=>{d.x=e.touches[0].clientX,d.y=e.touches[0].clientY,u=!0});document.addEventListener("touchmove",e=>{const t={x:e.touches[0].clientX,y:e.touches[0].clientY},o=t.x-d.x,c=t.y-d.y;(Math.abs(o)>50||Math.abs(c)>50)&&u&&(Math.abs(o)>Math.abs(c)?o>0?(n(),n(),l(),n(),n()):l():c>0?(n(),n(),n(),l(),n()):(n(),l(),n(),n(),n()),u=!1,h())});