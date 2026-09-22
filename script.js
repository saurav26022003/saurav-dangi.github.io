const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),700));

const menu=document.querySelector('.menu'), nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const cursor=document.querySelector('.cursor'), dot=document.querySelector('.cursor-dot');
window.addEventListener('mousemove',e=>{
 if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}
 if(dot){dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'}
});
document.querySelectorAll('a,.btn,button').forEach(el=>{
 el.addEventListener('mouseenter',()=>{if(cursor){cursor.style.width='52px';cursor.style.height='52px'}});
 el.addEventListener('mouseleave',()=>{if(cursor){cursor.style.width='28px';cursor.style.height='28px'}});
});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('seen');observer.unobserve(entry.target)}})
},{threshold:.15});
document.querySelectorAll('.section,.project-card,.research-list article,.stats div,.education-card,.skill-matrix div').forEach(x=>observer.observe(x));
