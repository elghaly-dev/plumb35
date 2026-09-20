/* Plumb — header, logos, boards */
(function(){
'use strict';

var s=document.createElement('script'); s.src='themes.js?v=bar2'; document.head.appendChild(s);

var style = document.createElement('style');
style.textContent = [
  'header{display:flex;align-items:center;gap:8px;flex-wrap:nowrap}',
  '.brand{flex:0 0 auto}',
  '.brand-p{height:52px !important;width:52px !important;border-radius:12px !important;object-fit:cover}',
  '.bl-35,.bl-stack,.marks-owner,.site-nav{display:none !important}',
  '.header-right{display:flex;align-items:center;gap:8px;flex:1;min-width:0;flex-wrap:nowrap;justify-content:flex-end}',
  '.lang-switch{display:flex;flex-wrap:nowrap;gap:4px;max-width:none;overflow-x:auto}',
  '.lang-btn{flex:0 0 auto;padding:6px 8px;font-size:11px}',
  '.partner img,.partner-logo{width:36px;height:36px;object-fit:contain;display:block}',
  '.ai-row{display:flex;flex-wrap:wrap;justify-content:center;gap:18px;margin-top:18px}',
  '.ai-tile{width:72px;height:72px;border-radius:16px;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#111}',
  '.ai-tile img{width:40px;height:40px;object-fit:contain}',
  '.ai-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:88px;text-align:center}',
  '.ai-wrap span{font-size:13px;color:var(--ink)}',
  '.desk-live{display:grid;gap:20px;margin:28px 0;grid-template-columns:1fr}',
  '@media(min-width:860px){.desk-live{grid-template-columns:repeat(3,1fr)}}',
  '.desk-live img,.gallery img.board-shot,.seat-preview img{width:100%;height:auto;min-height:220px;display:block;border-radius:20px;border:1px solid var(--line);background:#111;object-fit:contain}',
  '.desk-live figcaption,.gallery figcaption{padding-top:12px;font-size:16px;line-height:1.55;color:var(--muted)}',
  '.desk-live figcaption strong,.gallery figcaption strong{display:block;font-size:22px;color:var(--ink);font-family:var(--serif);margin-bottom:4px}',
  '.timeline-step p{font-size:15px;line-height:1.5}',
  '.timeline-step .num{font-size:28px}',
  '.gallery,.flash-gallery{grid-template-columns:1fr !important}',
  '@media(min-width:860px){.gallery,.flash-gallery{grid-template-columns:repeat(2,1fr) !important}}',
  '.gallery img,.flash-gallery img{width:100%;height:auto;display:block}'
].join('\n');
document.head.appendChild(style);

var mark = document.querySelector('.brand-p');
if(mark){ mark.src='logo-plumb-35.png'; mark.alt='Plumb 35'; mark.width=52; mark.height=52; }

var steps=document.querySelectorAll('.timeline-step');
if(steps[1] && !steps[1].querySelector('.more')){
  var extra=document.createElement('p');
  extra.className='more';
  extra.textContent='We wire your pairs, Jupiter rail, and Telegram control on your machine.';
  steps[1].appendChild(extra);
}
if(steps[2] && !steps[2].querySelector('.more')){
  var extra2=document.createElement('p');
  extra2.className='more';
  extra2.textContent='Live walkthrough: you tap, we stay on the line until the desk answers.';
  steps[2].appendChild(extra2);
}

function tile(href, src, bg, name){
  return '<a class="ai-wrap" href="'+href+'" target="_blank" rel="noopener noreferrer">'+
    '<span class="ai-tile" style="background:'+bg+'"><img src="'+src+'" alt="'+name+'"/></span>'+
    '<span>'+name+'</span></a>';
}
var rec=document.querySelector('.recommend-tools .rail-partners-row');
if(rec){
  rec.innerHTML =
    tile('https://claude.ai/','assets/claude-logomark.svg','#d97757','Claude') +
    tile('https://chatgpt.com/','assets/grok-logomark.svg','#111','ChatGPT') +
    tile('https://gemini.google.com/','assets/grants-logomark.svg','#4f6bed','Gemini') +
    tile('https://grok.com/','assets/grok-logomark.svg','#111','Grok') +
    tile('https://www.deepseek.com/','assets/cursor-logomark.svg','#4d6bfe','DeepSeek') +
    tile('https://cursor.com/','assets/cursor-logomark.svg','#111','Cursor');
}

var partners=document.querySelectorAll('.rail-partners-row .partner');
partners.forEach(function(p){
  var name=(p.querySelector('.partner-name')||{}).textContent||'';
  var map={Triton:'assets/triton-logomark.svg',Titan:'assets/grants-logomark.svg',Helius:'assets/cursor-logomark.svg',CoinStuck:'assets/claude-logomark.svg'};
  if(map[name] && !p.querySelector('img')){
    var img=document.createElement('img');
    img.src=map[name]; img.alt=name; img.className='partner-logo';
    var svg=p.querySelector('svg');
    if(svg) svg.replaceWith(img); else p.insertBefore(img, p.firstChild);
  }
});

var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var header = document.querySelector('header');
var toTop  = document.getElementById('toTop');
var bar    = document.getElementById('mobileCta');
var seats  = document.getElementById('seats');
function onScroll(){
  var y = window.pageYOffset || document.documentElement.scrollTop;
  if(header) header.classList.toggle('is-stuck', y > 8);
  if(toTop)  toTop.classList.toggle('is-visible', y > 600);
  if(bar){
    var past = y > 700, atSeats=false;
    if(seats){ var r=seats.getBoundingClientRect(); atSeats=r.top<window.innerHeight && r.bottom>0; }
    bar.hidden=false; bar.classList.toggle('is-visible', past && !atSeats);
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', onScroll, {passive:true});
onScroll();
if(toTop){ toTop.addEventListener('click', function(){ window.scrollTo({top:0, behavior: reduceMotion?'auto':'smooth'}); }); }
var revealables=document.querySelectorAll('.reveal');
Array.prototype.forEach.call(revealables, function(el){ el.classList.add('is-in'); });
})();
