(function(){
const PROOF_T={
  en:{
    backHome:"← Plumb home",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
  },
  ar:{
    backHome:"← الصفحة الرئيسية",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
  },
  ru:{
    backHome:"← На главную",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
  },
  zh:{
    backHome:"← 返回首页",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
  }
};

const PROOF_KEYS=[
  ['backHome','#proofBackHome'],
  ['navFixtures','#navFixtures'],
  ['navClaims','#navClaims'],
  ['navLimits','#navLimits'],
  ['localeNote','#proofLocaleNote']
];

function setProofLang(lang){
  if(!PROOF_T[lang])lang='en';
  const d=PROOF_T[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  PROOF_KEYS.forEach(([k,sel,mode])=>{
    const el=document.querySelector(sel);
    if(!el||d[k]===undefined)return;
    if(k==='localeNote'){
      el.hidden=!d.localeNote;
      el.textContent=d.localeNote||'';
      return;
    }
    if(mode==='html')el.innerHTML=d[k];
    else el.textContent=d[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active',b.dataset.lang===lang);
    b.setAttribute('aria-pressed',b.dataset.lang===lang);
  });
  try{localStorage.setItem('plumb-lang',lang);}catch(e){}
}

function initProofI18n(){
  document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setProofLang(b.dataset.lang)));
  let lang='en';
  try{lang=localStorage.getItem('plumb-lang')||'en';}catch(e){}
  if(!PROOF_T[lang])lang='en';
  setProofLang(lang);
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initProofI18n);
else initProofI18n();
})();
