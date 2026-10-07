/* Plumb lockup350 + crypto */
(function(){
'use strict';
var s=document.createElement('script'); s.src='themes.js?v=menu16'; document.head.appendChild(s);
// Seat buttons pay with PayPal directly; the href lives in index.html so it
// works without JavaScript. Stripe stays wired but switched off: keep
// STRIPE_ENABLED false or it replaces the PayPal links.
var STRIPE_ENABLED=false;
var STRIPE_PAY={
  s1btn:['https://buy.stripe.com/dRm9ANc357GB6DS0EB3Ru03','Pay $350'],
  s2btn:['https://buy.stripe.com/4gM00d4AD2mhfao1IF3Ru01','Pay $699'],
  s3btn:['https://buy.stripe.com/5kQ5kx4AD2mh2nC0EB3Ru02','Pay $1,999']
};
var ETH_PAY='0x379F62A4EFFDAE688c5963B44667501f481CFE6D';
var SOL_PAY='4vsXfhPXgwmP2cDdypGf9QrmdpMUhxCxRJ5aDDPxfsYo';
var BTC_PAY='bc1qgtc26k0vuu8j3uhpvpsevgladug5n6en4jzm00';
var BASE_PAY='0x379F62A4EFFDAE688c5963B44667501f481CFE6D';
// The page and header rules this used to add after first paint live in
// index.html (<style id="app-css">), so the page paints with them.
function srcOf(key, fallback){
  var L=window.PLUMB_LOGOS||{};
  return L[key] || fallback || '';
}
function tile(href,src,name,note){
  // The name is printed beside the logo, so the logo itself is decorative.
  var img=src?'<img src="'+src+'" alt=""/>':'';
  return '<a class="ai-wrap" href="'+href+'" target="_blank" rel="noopener noreferrer"><span class="ai-tile">'+img+'</span><span class="ai-name">'+name+'</span>'+(note?'<span class="ai-note">'+note+'</span>':'')+'</a>';
}
function stamp(sel, src, name){
  var h=document.querySelector(sel);
  if(!h || !src) return;
  if(h.querySelector('.rail-brand')){ h.querySelector('.rail-brand').src=src; return; }
  var img=document.createElement('img');
  img.className='rail-brand'; img.src=src; img.alt=name; img.width=40; img.height=40;
  h.insertBefore(img, h.firstChild);
}
function hideTitan(){
  ['#r3h','#r3'].forEach(function(sel){
    var el=document.querySelector(sel);
    if(!el) return;
    var card=el.closest('.rail')||el.closest('article')||el.closest('section')||el.parentElement;
    if(card) card.style.display='none';
  });
}
function paint(){
  var recBox=document.querySelector('.recommend-tools');
  if(recBox){
    recBox.innerHTML='<p class="rail-partners-label" id="toolsRecLabel">We recommend</p><div class="rec-frames"><div class="rec-frame"><p class="rail-partners-label">The AI</p><div class="rail-partners-row">'+tile('https://claude.ai/',srcOf('claude','assets/claude-logomark.svg'),'Claude','')+tile('https://grok.com/',srcOf('grok','assets/mark-grok.svg'),'Grok','')+'</div></div><div class="rec-frame"><p class="rail-partners-label">Grok Bot \u00b7 Cursor</p><div class="rec-stack">'+tile('https://grok.com/',srcOf('grokbot'),'Grok Bot','We recommend')+tile('https://cursor.com/','assets/mark-cursor.svg','Cursor','We recommend')+'</div></div></div>';
  }
  var rpcBox=null;
  document.querySelectorAll('.rail-partners').forEach(function(box){ if(!box.classList.contains('recommend-tools')) rpcBox=box; });
  if(rpcBox){
    rpcBox.innerHTML='<p class="rail-partners-label">Infrastructure we run on</p><div class="rail-partners-row">'+tile('https://triton.one/',srcOf('triton','assets/triton-logomark.svg'),'Triton','RPC dependency')+tile('https://www.helius.dev/',srcOf('helius','assets/logo-helius.svg'),'Helius','RPC dependency')+tile('https://www.quicknode.com/',srcOf('quicknode',''),'QuickNode','RPC option')+tile('https://orbitflare.com/','assets/mark-orbitflare.svg','OrbitFlare','RPC option')+tile('https://chainstack.com/',srcOf('chainstack','assets/mark-chainstack.svg'),'Chainstack','RPC option')+tile('https://rpcfast.com/',srcOf('fastrpc'),'FastRPC','RPC option')+'</div>';
  }
  stamp('#r1h', srcOf('jupiter'), 'Jupiter');
  stamp('#r2h', srcOf('jito'), 'Jito');
  stamp('#p2h', srcOf('telegram'), 'Telegram');
  hideTitan();
}
function loadLogos(){
  var keys=['claude','helius','triton','quicknode','jupiter','jito','telegram','chainstack','fastrpc','grok','grokbot'];
  paint();
  keys.forEach(function(k){
    var l=document.createElement('script');
    l.src='assets/real-'+k+'.js?v=brands12';
    l.onload=l.onerror=function(){ paint(); };
    document.head.appendChild(l);
  });
}
loadLogos();
function paintNets(){
  var row=document.querySelector('.networks-row');
  if(!row) return;
  var N=window.PLUMB_NETS||{};
  function net(cls,id,title,key,label){
    var src=N[key]||'';
    return '<span class="net '+cls+'" id="'+id+'" title="'+title+'"><span class="net-tile">'+(src?'<img src="'+src+'" alt=""/>':'')+'</span><span>'+label+'</span></span>';
  }
  row.innerHTML=net('net-live','netSolTitle','Solana \u2014 supported network','sol','SOL')+net('','netEthTitle','Ethereum \u2014 expansion path','eth','ETH')+net('','netBtcTitle','Bitcoin \u2014 expansion path','btc','BTC')+net('','netArbTitle','Arbitrum \u2014 expansion path','arb','ARB')+net('monad','netMonadTitle','Monad \u2014 expansion path','monad','MONAD');
}
window.PLUMB_NETS={
  sol:'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png',
  eth:'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  btc:'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png',
  arb:'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
  monad:'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/monad/info/logo.png'
};
paintNets();
function addMenus(seat, items){
  if(!seat) return;
  items.forEach(function(it){
    if(seat.querySelector('img[src*="'+it.src+'"]')) return;
    var fig=document.createElement('figure');
    fig.className='tg-menu';
    // width/height reserve the box before the photo arrives (no layout jump);
    // the CSS above keeps width:100%;height:auto, so they set the ratio only.
    fig.innerHTML='<img src="'+it.src+'" width="'+it.w+'" height="'+it.h+'" loading="lazy" decoding="async" alt="'+it.cap+'"/><figcaption>'+it.cap+'</figcaption>';
    seat.appendChild(fig);
  });
}
var seatsAll=document.querySelectorAll('.seat');
addMenus(seatsAll[0], [{src:'IMG_6723.jpeg', w:720, h:362, cap:'Starter Telegram menu'}]);
addMenus(seatsAll[1], [{src:'IMG_6724.jpeg', w:720, h:574, cap:'Pro Telegram menu'}]);
addMenus(seatsAll[2], [{src:'IMG_6727.jpeg', w:720, h:743, cap:'Source menu 1'},{src:'IMG_6726.jpeg', w:720, h:1288, cap:'Source menu 2'},{src:'IMG_6728.jpeg', w:720, h:1268, cap:'Source menu 3'}]);
function row(chain,addr,btnId,btnLabel,href,linkLabel){
  return '<div class="cp-row"><div class="cp-chain">'+chain+'</div><div class="cp-addr">'+addr+'</div><div class="cp-actions"><button type="button" id="'+btnId+'">'+btnLabel+'</button><a href="'+href+'" target="_blank" rel="noopener">'+linkLabel+'</a></div></div>';
}
function cryptoBox(){
  if(document.getElementById('cryptoPay')) return;
  var seats=document.getElementById('seats');
  if(!seats) return;
  var box=document.createElement('section');
  box.id='cryptoPay';
  box.className='reveal is-in';
  box.innerHTML='<p class="section-label">Pay by crypto</p><h2>SOL \u00b7 ETH \u00b7 BTC \u00b7 Base</h2><p class="cp-note">Same seat price. Send, then mail the transaction hash to 35@elghaly.dev so the desk can match it.</p>'+row('Solana',SOL_PAY,'copySol','Copy SOL','https://solscan.io/account/'+SOL_PAY,'Solscan')+row('ETH \u00b7 Ethereum',ETH_PAY,'copyEth','Copy ETH','https://etherscan.io/address/'+ETH_PAY,'Etherscan')+row('BTC \u00b7 Bitcoin',BTC_PAY,'copyBtc','Copy BTC','https://mempool.space/address/'+BTC_PAY,'Mempool')+row('Base',BASE_PAY,'copyBase','Copy Base','https://basescan.org/address/'+BASE_PAY,'Basescan');
  seats.parentNode.insertBefore(box, seats.nextSibling);
  function bindCopy(id, addr, label){
    var c=document.getElementById(id);
    if(!c) return;
    c.onclick=function(){
      function ok(){ c.textContent='Copied'; setTimeout(function(){ c.textContent=label; },1200); }
      if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(addr).then(ok).catch(function(){ window.prompt(label, addr); }); }
      else window.prompt(label, addr);
    };
  }
  bindCopy('copySol', SOL_PAY, 'Copy SOL');
  bindCopy('copyEth', ETH_PAY, 'Copy ETH');
  bindCopy('copyBtc', BTC_PAY, 'Copy BTC');
  bindCopy('copyBase', BASE_PAY, 'Copy Base');
}
cryptoBox();
function wireSeats(){
  if(!STRIPE_ENABLED) return;
  Object.keys(STRIPE_PAY).forEach(function(id){
    var btn=document.getElementById(id);
    if(btn){ btn.href=STRIPE_PAY[id][0]; btn.textContent=STRIPE_PAY[id][1]; }
  });
}
wireSeats();
var _setLang=window.plumbSetLang;
window.plumbSetLang=function(lang){ if(_setLang) _setLang(lang); wireSeats(); };
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
