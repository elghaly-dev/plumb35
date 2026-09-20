/* Plumb */
(function(){
'use strict';
var s=document.createElement('script'); s.src='themes.js?v=menu6'; document.head.appendChild(s);
var PAY350='https://buy.stripe.com/dRm9ANc357GB6DS0EB3Ru03';

var style=document.createElement('style');
style.textContent=[
  'header{display:flex;align-items:center;flex-wrap:nowrap;gap:8px}',
  '.brand{display:flex;align-items:center;gap:10px}',
  '.brand-p{height:44px !important;width:44px !important;border-radius:12px !important}',
  '.bl-35,.bl-stack,.marks-owner,.site-nav{display:none !important}',
  '.brand-p-letter{font:800 20px ui-sans-serif,system-ui;color:#2ee6c7 !important;margin-left:10px;letter-spacing:.06em;line-height:1}',
  '.header-right{display:flex;align-items:center;gap:6px;flex:1;justify-content:flex-end;flex-wrap:nowrap}',
  '.lang-switch{display:flex!important;flex-wrap:nowrap!important;gap:3px!important;max-width:none!important}',
  '.lang-btn{padding:5px 7px!important;font-size:10px!important}',
  '.theme-wrap{display:block!important}',
  '.partner-logo,.partner img{width:42px;height:42px;object-fit:contain}',
  '.ai-tile{width:72px;height:72px;border-radius:18px;overflow:hidden;display:block}',
  '.ai-tile img{width:72px;height:72px;display:block}',
  '.ai-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:88px;text-align:center}',
  '.recommend-tools .rail-partners-row{display:flex;flex-wrap:wrap;justify-content:center;gap:16px}',
  '.seat-preview,.gallery figure,.desk-live figure{padding:0 !important;overflow:hidden}',
  '.seat-preview img,.gallery img,.desk-live img,.board-shot{width:100% !important;height:auto !important;max-height:280px !important;object-fit:cover !important;object-position:center 78% !important;display:block;background:transparent}',
  '.tg-menu{margin:14px 0 0;border-radius:18px;overflow:hidden;border:1px solid var(--line,#1e2a28)}',
  '.tg-menu img{width:100%;height:auto;max-height:none !important;object-fit:contain !important;object-position:top center !important;display:block}',
  '.tg-menu figcaption{padding:8px 4px 0;font-size:13px;color:var(--dim)}'
].join('\n');
document.head.appendChild(style);

var mark=document.querySelector('.brand-p');
if(mark){ mark.src='mark-35.svg'; mark.alt='35'; }
var brand=document.querySelector('.brand');
if(brand && !brand.querySelector('.brand-p-letter')){
  var p=document.createElement('span');
  p.className='brand-p-letter';
  p.textContent='P';
  mark ? mark.after(p) : brand.appendChild(p);
}

function money(){
  function walk(n){
    if(n.nodeType===3){
      if(n.nodeValue && n.nodeValue.indexOf('299')!==-1){
        n.nodeValue=n.nodeValue.replace(/\$299/g,'$350').replace(/\b299\b/g,'350');
      }
      return;
    }
    var kids=n.childNodes||[];
    for(var i=0;i<kids.length;i++) walk(kids[i]);
  }
  walk(document.body);
  var btn=document.getElementById('s1btn');
  if(btn){ btn.textContent='Pay $350'; btn.href=PAY350; }
  var tier=document.getElementById('s1tier');
  if(tier) tier.textContent=tier.textContent.replace(/\$299/g,'$350').replace(/\b299\b/g,'350');
  var tag=document.getElementById('g2t');
  if(tag) tag.textContent=tag.textContent.replace(/\$299/g,'$350').replace(/\b299\b/g,'350');
  document.querySelectorAll('a[href*="14A6oB4AD7GBd2g3QN3Ru00"]').forEach(function(a){ a.href=PAY350; });
  var bar=document.getElementById('mobileCta');
  if(bar && bar.textContent.indexOf('299')!==-1) walk(bar);
}
money();
setTimeout(money, 200);
setTimeout(money, 800);
setTimeout(money, 1600);
document.addEventListener('click', function(e){
  if(e.target && (e.target.classList.contains('lang-btn') || (e.target.closest && e.target.closest('.lang-btn')))) setTimeout(money, 50);
});

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

function addMenu(seatSel, src, cap){
  var seat=document.querySelector(seatSel);
  if(!seat || seat.querySelector('.tg-menu')) return;
  var fig=document.createElement('figure');
  fig.className='tg-menu';
  fig.innerHTML='<img src="'+src+'" alt="'+cap+'"/><figcaption>'+cap+'</figcaption>';
  var preview=seat.querySelector('.seat-preview');
  if(preview && preview.parentNode) preview.parentNode.insertBefore(fig, preview.nextSibling);
  else seat.appendChild(fig);
}
addMenu('.seat:not(.featured)', 'tg-starter.jpg', 'Starter Telegram menu');
addMenu('.seat.featured', 'tg-pro.jpg', 'Pro Telegram menu — full desk');
var seatsAll=document.querySelectorAll('.seat');
if(seatsAll[2]) addMenu && (function(){
  if(seatsAll[2].querySelector('.tg-menu')) return;
  var fig=document.createElement('figure');
  fig.className='tg-menu';
  fig.innerHTML='<img src="tg-source.jpg" alt="Source Telegram menu"/><figcaption>Source Telegram menu</figcaption>';
  var preview=seatsAll[2].querySelector('.seat-preview');
  if(preview && preview.parentNode) preview.parentNode.insertBefore(fig, preview.nextSibling);
  else seatsAll[2].appendChild(fig);
})();

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
