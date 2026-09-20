/* Plumb — header, logos, boards */
(function(){
'use strict';

var style = document.createElement('style');
style.textContent = [
  'header{display:flex;align-items:center;flex-wrap:nowrap;gap:8px}',
  '.brand{flex:0 0 auto}',
  '.brand-p{height:48px !important;width:48px !important;border-radius:12px !important;object-fit:cover;background:#07080a}',
  '.bl-35,.bl-stack,.marks-owner,.site-nav,.theme-wrap,#themeMenu,.theme-btn{display:none !important}',
  '.header-right{display:flex;align-items:center;gap:8px;flex:1;min-width:0;justify-content:flex-end}',
  '.lang-switch{display:flex!important;flex-wrap:nowrap!important;gap:4px!important;max-width:none!important}',
  '.lang-btn{flex:0 0 auto;padding:6px 8px;font-size:11px}',
  '.partner img,.partner-logo{width:40px;height:40px;object-fit:contain;display:block}',
  '.ai-tile{width:76px;height:76px;border-radius:18px;overflow:hidden;display:block}',
  '.ai-tile img{width:76px;height:76px;object-fit:cover;display:block}',
  '.ai-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:92px;text-align:center}',
  '.recommend-tools .rail-partners-row{display:flex;flex-wrap:wrap;justify-content:center;gap:18px}'
].join('\n');
document.head.appendChild(style);

var mark = document.querySelector('.brand-p');
if(mark){ mark.src='mark-35.svg'; mark.alt='35'; }

document.querySelectorAll('body *').forEach(function(el){
  if(el.children.length) return;
  var t=el.textContent||'';
  if(t.indexOf('$299')===-1 && t.indexOf('Pay $299')===-1) return;
  el.textContent=t.replace(/\$299/g,'$350');
});

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
