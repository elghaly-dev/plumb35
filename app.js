/* Plumb — header, logos, boards */
(function(){
'use strict';

var s=document.createElement('script'); s.src='themes.js?v=menu3'; document.head.appendChild(s);

var style = document.createElement('style');
style.textContent = [
  'header{display:flex;align-items:center;flex-wrap:wrap;gap:8px}',
  '.brand{flex:0 0 auto}',
  '.brand-p{height:48px !important;width:48px !important;border-radius:12px !important;object-fit:cover}',
  '.bl-35,.bl-stack,.marks-owner,.site-nav{display:none !important}',
  '.header-right{display:flex;align-items:center;gap:8px;flex:1;min-width:0;flex-wrap:nowrap;justify-content:flex-end}',
  '.lang-switch{order:5;width:100%;display:flex!important;flex-wrap:nowrap!important;gap:4px!important;max-width:none!important;justify-content:flex-start;overflow:visible}',
  '.lang-btn{flex:0 0 auto;padding:6px 8px;font-size:11px}',
  '.partner img,.partner-logo{width:40px;height:40px;object-fit:contain;display:block}',
  '.ai-row,.recommend-tools .rail-partners-row{display:flex;flex-wrap:wrap;justify-content:center;gap:18px;margin-top:18px}',
  '.ai-tile{width:76px;height:76px;border-radius:18px;display:flex;align-items:center;justify-content:center;overflow:hidden}',
  '.ai-tile img{width:76px;height:76px;object-fit:cover;display:block}',
  '.ai-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:92px;text-align:center}',
  '.ai-wrap span{font-size:13px;color:var(--ink)}',
  '.desk-live img,.gallery img.board-shot,.seat-preview img{width:100%;height:auto;min-height:220px;display:block;border-radius:20px;border:1px solid var(--line);background:#111;object-fit:contain}',
  '.gallery,.flash-gallery{grid-template-columns:1fr !important}',
  '@media(min-width:860px){.gallery,.flash-gallery{grid-template-columns:repeat(2,1fr) !important}}'
].join('\n');
document.head.appendChild(style);

var mark = document.querySelector('.brand-p');
if(mark){ mark.src='logo-plumb-35.png'; mark.alt='Plumb 35'; }

function tile(href, src, name){
  return '<a class="ai-wrap" href="'+href+'" target="_blank" rel="noopener noreferrer">'+
    '<span class="ai-tile"><img src="'+src+'" alt="'+name+'"/></span>'+
    '<span>'+name+'</span></a>';
}
var rec=document.querySelector('.recommend-tools .rail-partners-row');
if(rec){
  rec.innerHTML =
    tile('https://grok.com/','assets/logo-grok.svg','Grok Bot') +
    tile('https://cursor.com/','assets/logo-cursor.svg','Cursor') +
    tile('https://grok.com/','assets/logo-grok.svg','Grok') +
    tile('https://claude.ai/','assets/logo-claude.svg','Claude');
}

var map={Triton:'assets/logo-triton.svg',Titan:'assets/logo-titan.svg',Helius:'assets/logo-helius.svg',CoinStuck:'assets/logo-coinstuck.svg'};
document.querySelectorAll('.partner').forEach(function(p){
  var name=((p.querySelector('.partner-name')||{}).textContent||'').trim();
  if(!map[name]) return;
  var img=document.createElement('img');
  img.src=map[name]; img.alt=name; img.className='partner-logo';
  var old=p.querySelector('svg, img');
  if(old) old.replaceWith(img); else p.insertBefore(img, p.firstChild);
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
document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-in'); });
})();
