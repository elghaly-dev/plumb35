/* Plumb */
(function(){
'use strict';
var s=document.createElement('script'); s.src='themes.js?v=menu4'; document.head.appendChild(s);

var style=document.createElement('style');
style.textContent=[
  'header{display:flex;align-items:center;flex-wrap:nowrap;gap:8px}',
  '.brand-p{height:44px !important;width:44px !important;border-radius:12px !important}',
  '.bl-35,.bl-stack,.marks-owner,.site-nav{display:none !important}',
  '.header-right{display:flex;align-items:center;gap:6px;flex:1;justify-content:flex-end;flex-wrap:nowrap}',
  '.lang-switch{display:flex!important;flex-wrap:nowrap!important;gap:3px!important;max-width:none!important}',
  '.lang-btn{padding:5px 7px!important;font-size:10px!important}',
  '.theme-wrap{display:block!important}',
  '.partner-logo,.partner img{width:42px;height:42px;object-fit:contain}',
  '.ai-tile{width:72px;height:72px;border-radius:18px;overflow:hidden;display:block}',
  '.ai-tile img{width:72px;height:72px;display:block}',
  '.ai-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:88px;text-align:center}',
  '.recommend-tools .rail-partners-row{display:flex;flex-wrap:wrap;justify-content:center;gap:16px}'
].join('\n');
document.head.appendChild(style);

var mark=document.querySelector('.brand-p');
if(mark){ mark.src='mark-35.svg'; mark.alt='35'; }

function money(n){
  if(n.nodeType===3){
    if(n.nodeValue && n.nodeValue.indexOf('299')!==-1){
      n.nodeValue=n.nodeValue.replace(/\$299/g,'$350').replace(/\b299\b/g,'350');
    }
    return;
  }
  var kids=n.childNodes||[];
  for(var i=0;i<kids.length;i++) money(kids[i]);
}
money(document.body);

function tile(href,src,name){
  return '<a class="ai-wrap" href="'+href+'" target="_blank" rel="noopener noreferrer"><span class="ai-tile"><img src="'+src+'?v=2" alt="'+name+'"/></span><span>'+name+'</span></a>';
}
var rec=document.querySelector('.recommend-tools .rail-partners-row');
if(rec){
  rec.innerHTML=
    tile('https://grok.com/','assets/logo-grok.svg','Grok Bot')+
    tile('https://cursor.com/','assets/logo-cursor.svg','Cursor')+
    tile('https://grok.com/','assets/logo-grok.svg','Grok')+
    tile('https://claude.ai/','assets/logo-claude.svg','Claude');
}
var map={Triton:'assets/logo-triton.svg',Titan:'assets/logo-titan.svg',Helius:'assets/logo-helius.svg',CoinStuck:'assets/logo-coinstuck.svg'};
document.querySelectorAll('.partner').forEach(function(p){
  var name=((p.querySelector('.partner-name')||{}).textContent||'').trim();
  if(!map[name]) return;
  var img=document.createElement('img');
  img.src=map[name]+'?v=2'; img.alt=name; img.className='partner-logo';
  var old=p.querySelector('svg, img');
  if(old) old.replaceWith(img); else p.insertBefore(img,p.firstChild);
});

var header=document.querySelector('header');
var toTop=document.getElementById('toTop');
var bar=document.getElementById('mobileCta');
var seats=document.getElementById('seats');
function onScroll(){
  var y=window.pageYOffset||document.documentElement.scrollTop;
  if(header) header.classList.toggle('is-stuck', y>8);
  if(toTop) toTop.classList.toggle('is-visible', y>600);
  if(bar){
    var past=y>700, at=false;
    if(seats){ var r=seats.getBoundingClientRect(); at=r.top<window.innerHeight && r.bottom>0; }
    bar.hidden=false; bar.classList.toggle('is-visible', past && !at);
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', onScroll, {passive:true});
onScroll();
if(toTop) toTop.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-in'); });
})();
