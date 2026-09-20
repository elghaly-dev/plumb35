/* Plumb */
(function(){
'use strict';
var s=document.createElement('script'); s.src='themes.js?v=menu15'; document.head.appendChild(s);
var PAY350='https://buy.stripe.com/dRm9ANc357GB6DS0EB3Ru03';

var style=document.createElement('style');
style.textContent=[
  'header{display:flex;align-items:center;flex-wrap:nowrap;gap:10px}',
  '.brand{display:flex;align-items:center;gap:10px;min-width:0}',
  '.brand-35-letter,.brand-p-letter{display:none !important}',
  '.brand-p{display:block !important;height:44px;width:44px;border-radius:12px;object-fit:cover;flex-shrink:0}',
  '.bl-35,.bl-stack{display:flex !important}',
  '.bl-stack{display:flex !important;flex-direction:column}',
  '.brand-logo{display:flex !important;align-items:center;gap:11px}',
  '.marks-owner{display:none !important}',
  '.site-nav{display:none !important}',
  '.header-right{display:flex;align-items:center;gap:6px;flex:1;justify-content:flex-end}',
  '.lang-switch{display:flex!important;flex-wrap:nowrap!important;gap:3px!important}',
  '.lang-btn{padding:5px 7px!important;font-size:10px!important}',
  '.theme-wrap{display:block!important}',
  '.board-shot,.gallery img.board-shot{display:none !important}',
  '.rail-partners-row{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:22px 26px!important}',
  '.ai-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:108px;text-align:center;text-decoration:none;color:inherit}',
  '.ai-tile{width:84px;height:84px;border-radius:20px;overflow:hidden;background:#0b0c0b;border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center}',
  '.ai-tile img{width:72px;height:72px;object-fit:contain;display:block}',
  '.ai-name{font-family:Instrument Serif,Georgia,serif;font-size:16px;line-height:1.2;color:var(--ink,#f5f5f7);letter-spacing:-.01em}',
  '.ai-note{font-size:11px;color:#2ee6c7;letter-spacing:.04em;font-weight:500}',
  '.partner svg,.partner .partner-logo{display:none !important}',
  '.rail-partners-label{margin-top:12px}',
  '.rec-frames{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:10px}',
  '.rec-frame{border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:18px 14px 20px;background:rgba(255,255,255,.02)}',
  '.rec-frame .rail-partners-label{margin:0 0 14px;text-align:center}',
  '.rail-brand{width:32px;height:32px;object-fit:contain;display:inline-block;vertical-align:middle;margin-right:10px;border-radius:8px;background:#0b0c0b}',
  '.principle h3,.rail h3{display:flex;align-items:center;gap:10px}',
  '.tg-menu{margin:14px 0 0;border-radius:18px;overflow:hidden;border:1px solid var(--line,#1e2a28)}',
  '.tg-menu img{width:100%;height:auto;object-fit:contain !important;display:block}',
  '.seat-preview img,.gallery img:not(.board-shot),.desk-live img{width:100% !important;height:auto !important;max-height:280px !important;object-fit:cover !important;object-position:center 78% !important;display:block}',
  '.brand-plate{margin-top:20px}',
  '@media (max-width:720px){.rec-frames{grid-template-columns:1fr}}'
].join('\n');
document.head.appendChild(style);

function money(){
  function walk(n){
    if(n.nodeType===3){
      if(n.nodeValue && n.nodeValue.indexOf('299')!==-1){
        n.nodeValue=n.nodeValue.replace(/\\$299/g,'$350').replace(/\\b299\\b/g,'350');
      }
      return;
    }
    var kids=n.childNodes||[];
    for(var i=0;i<kids.length;i++) walk(kids[i]);
  }
  walk(document.body);
  var btn=document.getElementById('s1btn');
  if(btn){ btn.textContent='Pay $350'; btn.href=PAY350; }
  var bar=document.getElementById('barTitle');
  if(bar) bar.textContent='Lifetime seat \u00b7 from $350';
}
money(); setTimeout(money,200); setTimeout(money,800); setTimeout(money,2000);

function srcOf(key, fallback){
  var L=window.PLUMB_LOGOS||{};
  return L[key] || fallback || '';
}
function tile(href,src,name,note){
  var img=src?'<img src="'+src+'" alt="'+name+'"/>':'';
  return '<a class="ai-wrap" href="'+href+'" target="_blank" rel="noopener noreferrer">'
    +'<span class="ai-tile">'+img+'</span>'
    +'<span class="ai-name">'+name+'</span>'
    +(note?'<span class="ai-note">'+note+'</span>':'')
    +'</a>';
}
function stamp(sel, src, name){
  var h=document.querySelector(sel);
  if(!h || !src) return;
  if(h.querySelector('.rail-brand')){
    h.querySelector('.rail-brand').src=src;
    return;
  }
  var img=document.createElement('img');
  img.className='rail-brand';
  img.src=src;
  img.alt=name;
  img.width=32;
  img.height=32;
  h.insertBefore(img, h.firstChild);
}
function paint(){
  var recBox=document.querySelector('.recommend-tools');
  if(recBox){
    recBox.innerHTML=
      '<p class="rail-partners-label" id="toolsRecLabel">We recommend</p>'+
      '<div class="rec-frames">'+
        '<div class="rec-frame" aria-label="Cursor">'+
          '<p class="rail-partners-label">Cursor</p>'+
          '<div class="rail-partners-row">'+
            tile('https://cursor.com/','assets/cursor-logomark.svg','Cursor','We recommend')+
          '</div>'+
        '</div>'+
        '<div class="rec-frame" aria-label="The AI">'+
          '<p class="rail-partners-label">The AI</p>'+
          '<div class="rail-partners-row">'+
            tile('https://claude.ai/',srcOf('claude','assets/claude-logomark.svg'),'Claude','We recommend')+
          '</div>'+
        '</div>'+
      '</div>';
  }
  var rpcBox=null;
  document.querySelectorAll('.rail-partners').forEach(function(box){
    if(!box.classList.contains('recommend-tools')) rpcBox=box;
  });
  if(rpcBox){
    rpcBox.innerHTML=
      '<p class="rail-partners-label">RPC</p>'+
      '<div class="rail-partners-row">'+
        tile('https://triton.one/',srcOf('triton','assets/triton-logomark.svg'),'Triton','We recommend')+
        tile('https://www.helius.dev/',srcOf('helius','assets/logo-helius.svg'),'Helius','')+
        tile('https://www.quicknode.com/',srcOf('quicknode',''),'QuickNode','')+
      '</div>'+
      '<p class="rail-partners-label">Routing</p>'+
      '<div class="rail-partners-row">'+
        tile('https://www.titan.exchange/',srcOf('titan','assets/logo-titan.svg'),'Titan','Quote rail')+
        tile('https://kamino.finance/',srcOf('kamino',''),'Kamino','Flash path')+
        tile('https://squads.so/',srcOf('squads','assets/logo-squads.svg'),'Squads','Multisig')+
        tile('https://chainstack.com/',srcOf('chainstack',''),'Chainstack','')+
      '</div>';
  }
  stamp('#r1h', srcOf('jupiter'), 'Jupiter');
  stamp('#r2h', srcOf('jito'), 'Jito');
  stamp('#p4h', srcOf('jupiter'), 'Jupiter');
  stamp('#p2h', srcOf('telegram'), 'Telegram');
}
function loadLogos(){
  var keys=['titan','claude','helius','triton','quicknode','jupiter','jito','kamino','squads','telegram','chainstack'];
  paint();
  keys.forEach(function(k){
    var l=document.createElement('script');
    l.src='assets/real-'+k+'.js?v=brands4';
    l.onload=l.onerror=function(){ paint(); };
    document.head.appendChild(l);
  });
}
loadLogos();

function addMenus(seat, items){
  if(!seat) return;
  items.forEach(function(it){
    if(seat.querySelector('img[src*="'+it.src+'"]')) return;
    var fig=document.createElement('figure');
    fig.className='tg-menu';
    fig.innerHTML='<img src="'+it.src+'" alt="'+it.cap+'"/><figcaption>'+it.cap+'</figcaption>';
    seat.appendChild(fig);
  });
}
var seatsAll=document.querySelectorAll('.seat');
addMenus(seatsAll[0], [{src:'IMG_6723.jpeg', cap:'Starter Telegram menu'}]);
addMenus(seatsAll[1], [{src:'IMG_6724.jpeg', cap:'Pro Telegram menu'}]);
addMenus(seatsAll[2], [
  {src:'IMG_6727.jpeg', cap:'Source menu 1'},
  {src:'IMG_6726.jpeg', cap:'Source menu 2'},
  {src:'IMG_6728.jpeg', cap:'Source menu 3'}
]);

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
onScroll();
document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-in'); });

var main=document.getElementById('main');
var hero=document.querySelector('.hero');
var plate=document.getElementById('brand');
if(main && hero && plate && hero.previousElementSibling!==plate){
  main.insertBefore(plate, hero);
}
})();
