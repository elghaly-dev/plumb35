/* Plumb — progressive enhancement. Every feature here is optional:
   the page is fully readable and purchasable with JS disabled. */
(function(){
'use strict';

var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Sticky header shadow ───────────────────────────────── */
var header = document.querySelector('header');
var toTop  = document.getElementById('toTop');
var bar    = document.getElementById('mobileCta');
var seats  = document.getElementById('seats');

function onScroll(){
  var y = window.pageYOffset || document.documentElement.scrollTop;
  if(header) header.classList.toggle('is-stuck', y > 8);
  if(toTop)  toTop.classList.toggle('is-visible', y > 600);
  if(bar){
    /* Show the seat bar once the reader is invested, hide it over the seats
       themselves so it never covers the buttons it points at. */
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

/* ── Back to top ────────────────────────────────────────── */
if(toTop){
  toTop.addEventListener('click', function(){
    window.scrollTo({top:0, behavior: reduceMotion ? 'auto' : 'smooth'});
    var skip = document.querySelector('.skip-link');
    if(skip) skip.focus();
  });
}

/* ── Scroll reveal ──────────────────────────────────────── */
var revealables = document.querySelectorAll('.reveal');
if(reduceMotion || !('IntersectionObserver' in window)){
  Array.prototype.forEach.call(revealables, function(el){ el.classList.add('is-in'); });
}else{
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
    /* threshold 0: sections here are often taller than the viewport, so a
       ratio-based threshold can never be met on a fast scroll. */
  }, {rootMargin:'0px 0px -10% 0px', threshold:0});
  Array.prototype.forEach.call(revealables, function(el){ io.observe(el); });
  /* Backstop: never let an observer miss leave content invisible. */
  window.setTimeout(function(){
    Array.prototype.forEach.call(revealables, function(el){ el.classList.add('is-in'); });
  }, 2500);
}

/* ── FAQ: one panel open at a time ──────────────────────── */
var faqItems = document.querySelectorAll('.faq details');
Array.prototype.forEach.call(faqItems, function(d){
  d.addEventListener('toggle', function(){
    if(!d.open) return;
    Array.prototype.forEach.call(faqItems, function(other){
      if(other !== d) other.open = false;
    });
  });
});

/* ── Deep links land below the sticky header ────────────── */
document.addEventListener('click', function(e){
  var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
  if(!a) return;
  var id = a.getAttribute('href').slice(1);
  if(!id) return;
  var target = document.getElementById(id);
  if(!target) return;
  e.preventDefault();
  target.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'start'});
  /* Keep keyboard focus with the reader, not back at the top of the document. */
  target.setAttribute('tabindex','-1');
  target.focus({preventScroll:true});
  if(history.replaceState) history.replaceState(null,'','#'+id);
});

})();
