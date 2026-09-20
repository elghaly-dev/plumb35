/* Plumb — progressive enhancement. Every feature here is optional:
   the page is fully readable and purchasable with JS disabled. */
(function(){
'use strict';

var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

var style = document.createElement('style');
style.textContent = [
  '.brand-p{height:72px !important;width:72px !important;border-radius:16px !important}',
  '.bl-35{font-size:34px !important}',
  '.bl-name{font-size:15px !important}',
  '.partner-logo,.partner svg{width:52px !important;height:52px !important}',
  '.gallery,.flash-gallery{grid-template-columns:1fr !important}',
  '@media(min-width:860px){.gallery,.flash-gallery,.desk-live{grid-template-columns:repeat(2,1fr) !important}}',
  '@media(min-width:1100px){.desk-live{grid-template-columns:repeat(3,1fr) !important}}',
  '.gallery img,.flash-gallery img,.desk-live img{width:100%;min-height:280px;height:auto;display:block}',
  '.gallery figcaption strong,.desk-live figcaption strong{font-size:22px}',
  '.gallery figcaption,.desk-live figcaption{font-size:16px}',
  '.desk-live{display:grid;gap:20px;margin:28px 0}',
  '.desk-live img{border-radius:20px;border:1px solid rgba(255,255,255,.12);background:#140c1c}'
].join('\n');
document.head.appendChild(style);

var mark = document.querySelector('.brand-p');
if(mark){
  mark.src = 'logo-plumb-35.png';
  mark.alt = 'Plumb 35 mark';
  mark.width = 88;
  mark.height = 88;
}

var gallery = document.getElementById('gallery');
if(gallery && !document.querySelector('.desk-live')){
  var box = document.createElement('div');
  box.className = 'desk-live';
  box.innerHTML =
    '<figure><img src="desk-glance.svg" width="390" height="520" alt="Telegram Glance board" loading="lazy"/><figcaption><strong>Glance</strong> Quote · Talent · Money · Land. Buttons you can read on a phone.</figcaption></figure>' +
    '<figure><img src="desk-grid.svg" width="390" height="560" alt="Telegram full command grid" loading="lazy"/><figcaption><strong>Full board</strong> arb · 350 · Jito · Hunt · Pairs · Sweep.</figcaption></figure>' +
    '<figure><img src="desk-menu.svg" width="390" height="560" alt="Telegram hunt menu" loading="lazy"/><figcaption><strong>Hunt menu</strong> Titan · gRPC · Pulse · Glance. Same house, your keys.</figcaption></figure>';
  gallery.appendChild(box);
}

var header = document.querySelector('header');
var toTop  = document.getElementById('toTop');
var bar    = document.getElementById('mobileCta');
var seats  = document.getElementById('seats');

function onScroll(){
  var y = window.pageYOffset || document.documentElement.scrollTop;
  if(header) header.classList.toggle('is-stuck', y > 8);
  if(toTop)  toTop.classList.toggle('is-visible', y > 600);
  if(bar){
    var past = y > 700;
    var atSeats = false;
    if(seats){
      var r = seats.getBoundingClientRect();
      atSeats = r.top < window.innerHeight && r.bottom > 0;
    }
    bar.hidden = false;
    bar.classList.toggle('is-visible', past && !atSeats);
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', onScroll, {passive:true});
onScroll();

if(toTop){
  toTop.addEventListener('click', function(){
    window.scrollTo({top:0, behavior: reduceMotion ? 'auto' : 'smooth'});
    var skip = document.querySelector('.skip-link');
    if(skip) skip.focus();
  });
}

var revealables = document.querySelectorAll('.reveal');
if(reduceMotion || !('IntersectionObserver' in window)){
  Array.prototype.forEach.call(revealables, function(el){ el.classList.add('is-in'); });
}else{
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, {rootMargin:'0px 0px -10% 0px', threshold:0});
  Array.prototype.forEach.call(revealables, function(el){ io.observe(el); });
  window.setTimeout(function(){
    Array.prototype.forEach.call(revealables, function(el){ el.classList.add('is-in'); });
  }, 2500);
}

var faqItems = document.querySelectorAll('.faq details');
Array.prototype.forEach.call(faqItems, function(d){
  d.addEventListener('toggle', function(){
    if(!d.open) return;
    Array.prototype.forEach.call(faqItems, function(other){
      if(other !== d) other.open = false;
    });
  });
});

document.addEventListener('click', function(e){
  var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
  if(!a) return;
  var id = a.getAttribute('href').slice(1);
  if(!id) return;
  var target = document.getElementById(id);
  if(!target) return;
  e.preventDefault();
  target.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'start'});
  target.setAttribute('tabindex','-1');
  target.focus({preventScroll:true});
  if(history.replaceState) history.replaceState(null,'','#'+id);
});

})();
