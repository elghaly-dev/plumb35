/* Plumb */
(function(){
'use strict';
var s=document.createElement('script'); s.src='themes.js?v=menu13'; document.head.appendChild(s);
var PAY350='https://buy.stripe.com/dRm9ANc357GB6DS0EB3Ru03';

var style=document.createElement('style');
style.textContent=[
  'header{display:flex;align-items:center;flex-wrap:nowrap;gap:8px}',
  '.brand{display:flex;align-items:center;gap:8px}',
  '.brand-p{display:none !important}',
  '.bl-35,.bl-stack,.marks-owner,.site-nav{display:none !important}',
  '.brand-35-letter,.brand-p-letter{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:12px;background:#2ee6c7;color:#04110a !important;font:800 16px ui-sans-serif,system-ui;line-height:1}',
  '.header-right{display:flex;align-items:center;gap:6px;flex:1;justify-content:flex-end}',
  '.lang-switch{display:flex!important;flex-wrap:nowrap!important;gap:3px!important}',
  '.lang-btn{padding:5px 7px!important;font-size:10px!important}',
  '.theme-wrap{display:block!important}',
  '.board-shot,.gallery img.board-shot{display:none !important}',
  '.rail-partners-row{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:22px 28px!important}',
  '.ai-wrap,.rpc-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:92px;text-align:center;text-decoration:none;color:inherit}',
  '.ai-tile,.rpc-tile{width:72px;height:72px;border-radius:18px;overflow:hidden;background:transparent;display:flex;align-items:center;justify-content:center}',
  '.ai-tile img,.rpc-tile img{width:64px;height:64px;object-fit:contain;display:block}',
  '.ai-name,.rpc-name{font-size:13px;line-height:1.2;color:var(--ink,#e8fbf6)}',
  '.ai-note{font-size:11px;color:#2ee6c7;letter-spacing:.04em}',
  '.partner svg,.partner .partner-logo{display:none !important}',
  '.rail-partners-label{margin-top:10px}',
  '.tg-menu{margin:14px 0 0;border-radius:18px;overflow:hidden;border:1px solid var(--line,#1e2a28)}',
  '.tg-menu img{width:100%;height:auto;max-height:none !important;object-fit:contain !important;display:block}',
  '.tg-menu figcaption{padding:8px 4px 0;font-size:13px;color:var(--dim)}',
  '.seat-preview img,.gallery img:not(.board-shot),.desk-live img{width:100% !important;height:auto !important;max-height:280px !important;object-fit:cover !important;object-position:center 78% !important;display:block}'
].join('\n');
document.head.appendChild(style);

var brand=document.querySelector('.brand');
if(brand && !brand.querySelector('.brand-35-letter')){
  var t=document.createElement('span');
  t.className='brand-35-letter';
  t.textContent='35';
  brand.insertBefore(t, brand.firstChild);
}
if(brand && !brand.querySelector('.brand-p-letter')){
  var p=document.createElement('span');
  p.className='brand-p-letter';
  p.textContent='P';
  brand.appendChild(p);
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
}
money();
setTimeout(money,300); setTimeout(money,1200);

function tile(href,src,name,note){
  if(!src) return '';
  return '<a class="ai-wrap" href="'+href+'" target="_blank" rel="noopener noreferrer">'
    +'<span class="ai-tile"><img src="'+src+'" alt="'+name+'"/></span>'
    +'<span class="ai-name">'+name+'</span>'
    +(note?'<span class="ai-note">'+note+'</span>':'')
    +'</a>';
}

function paint(){
  var L=window.PLUMB_LOGOS||{};
  var rec=document.querySelector('.recommend-tools .rail-partners-row');
  if(rec){
    rec.innerHTML=
      tile('https://grok.com/',L.grok,'Grok Bot','We recommend')+
      tile('https://cursor.com/','assets/cursor-logomark.svg','Cursor','')+
      tile('https://grok.com/',L.grok,'Grok','')+
      tile('https://claude.ai/',L.claude,'Claude','');
  }
  var rpcBox=null;
  document.querySelectorAll('.rail-partners').forEach(function(box){
    if(!box.classList.contains('recommend-tools')) rpcBox=box;
  });
  if(rpcBox){
    rpcBox.innerHTML=
      '<p class="rail-partners-label">RPC</p>'+
      '<div class="rail-partners-row">'+
        tile('https://solana.com/',L.solana,'Solana','')+
        tile('https://triton.one/',L.triton,'Triton','')+
        tile('https://www.helius.dev/',L.helius,'Helius','')+
        tile('https://www.quicknode.com/',L.quicknode,'QuickNode','')+
      '</div>'+
      '<p class="rail-partners-label">Routing</p>'+
      '<div class="rail-partners-row">'+
        tile('https://www.jito.wtf/',L.jito,'Jito','')+
        tile('https://jup.ag/',L.jupiter,'Jupiter','')+
        tile('https://www.titan.exchange/',L.titan,'Titan','')+
        tile('https://phantom.com/',L.phantom,'Phantom','')+
        tile('https://squads.so/',L.squads,'Squads','')+
      '</div>';
  }
}

function loadLogos(){
  if(window.PLUMB_LOGOS){ paint(); return; }
  var l=document.createElement('script');
  l.src='logos.js?v=real96';
  l.onload=paint;
  l.onerror=paint;
  document.head.appendChild(l);
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
})();
