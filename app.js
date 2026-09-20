/* Plumb — progressive enhancement. */
(function(){
'use strict';

var s=document.createElement('script'); s.src='themes.js'; document.head.appendChild(s);

var style = document.createElement('style');
style.textContent = [
  '.brand-p{height:72px !important;width:72px !important;border-radius:16px !important}',
  '.ai-row{display:flex;flex-wrap:wrap;justify-content:center;gap:18px;margin-top:18px}',
  '.ai-tile{width:72px;height:72px;border-radius:16px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none}',
  '.ai-wrap{display:flex;flex-direction:column;align-items:center;gap:8px;width:88px;text-align:center}',
  '.ai-wrap span{font-size:12px;color:var(--ink)}',
  '.desk-live{display:grid;gap:20px;margin:28px 0;grid-template-columns:1fr}',
  '@media(min-width:860px){.desk-live{grid-template-columns:repeat(3,1fr)}}',
  '.desk-live img{width:100%;height:auto;display:block;border-radius:20px;border:1px solid var(--line);background:#111}',
  '.desk-live figcaption{padding-top:12px;font-size:16px;color:var(--muted)}',
  '.desk-live figcaption strong{display:block;font-size:22px;color:var(--ink);font-family:var(--serif);margin-bottom:4px}',
  '.gallery,.flash-gallery{grid-template-columns:1fr !important}',
  '@media(min-width:860px){.gallery,.flash-gallery{grid-template-columns:repeat(2,1fr) !important}}',
  '.gallery img,.flash-gallery img{width:100%;height:auto;display:block}'
].join('\n');
document.head.appendChild(style);

var mark = document.querySelector('.brand-p');
if(mark){ mark.src='logo-plumb-35.png'; mark.alt='Plumb 35 mark'; mark.width=88; mark.height=88; }

var gallery = document.getElementById('gallery');
if(gallery){
  var old=gallery.querySelector('.desk-live'); if(old) old.remove();
  var box=document.createElement('div'); box.className='desk-live';
  box.innerHTML =
    '<figure><img src="desk-glance.svg?v=orig" alt="Telegram Glance — original board" loading="lazy"/><figcaption><strong>Glance</strong> Original Telegram board.</figcaption></figure>' +
    '<figure><img src="desk-grid.svg?v=orig" alt="Telegram full command grid — original board" loading="lazy"/><figcaption><strong>Full board</strong> Original Telegram grid.</figcaption></figure>' +
    '<figure><img src="desk-menu.svg?v=orig" alt="Telegram hunt menu — original board" loading="lazy"/><figcaption><strong>Hunt menu</strong> Original Telegram menu.</figcaption></figure>';
  gallery.appendChild(box);
}

var rec=document.querySelector('.recommend-tools .rail-partners-row');
if(rec){
  rec.innerHTML =
    '<a class="ai-wrap" href="https://claude.ai/" target="_blank" rel="noopener noreferrer"><span class="ai-tile" style="background:#d97757">✶</span><span>Claude</span></a>' +
    '<a class="ai-wrap" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer"><span class="ai-tile" style="background:#111">◉</span><span>ChatGPT</span></a>' +
    '<a class="ai-wrap" href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer"><span class="ai-tile" style="background:#4f6bed">✦</span><span>Gemini</span></a>' +
    '<a class="ai-wrap" href="https://grok.com/" target="_blank" rel="noopener noreferrer"><span class="ai-tile" style="background:#111">xAI</span><span>Grok</span></a>' +
    '<a class="ai-wrap" href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer"><span class="ai-tile" style="background:#4d6bfe">◐</span><span>DeepSeek</span></a>' +
    '<a class="ai-wrap" href="https://cursor.com/" target="_blank" rel="noopener noreferrer"><span class="ai-tile" style="background:#111">▲</span><span>Cursor</span></a>';
}

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
