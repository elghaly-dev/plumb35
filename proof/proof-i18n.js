(function(){
const PROOF_T={
  en:{
    backHome:"← Plumb home",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:""
  },
  ar:{
    backHome:"← الصفحة الرئيسية",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"نص هذه الصفحة بالإنجليزية. العبارات القانونية والالتزامات لم تُترجم — لا تعامل أي ترجمة آلية على أنها التزام."
  },
  ru:{
    backHome:"← На главную",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"Текст страницы на английском. Юридически значимые формулировки не переводились — не считайте машинный перевод обязательством."
  },
  zh:{
    backHome:"← 返回首页",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"本页正文为英文。具有法律或承诺性质的句子未翻译——请勿将机器翻译视为同等承诺。"
  },
  de:{
    backHome:"← Startseite",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"Seiteninhalt auf Englisch. Rechtlich relevante Formulierungen sind nicht übersetzt — maschinelle Übersetzungen gelten nicht als Verpflichtung."
  },
  es:{
    backHome:"← Inicio",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"El cuerpo de esta página está en inglés. Las frases con peso legal o de compromiso no se tradujeron — no trate una traducción automática como el mismo compromiso."
  }
};

const PROOF_KEYS=[
  ['backHome','#proofBackHome'],
  ['navOnchain','#navOnchain'],
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
  PROOF_KEYS.forEach(([k,sel])=>{
    const el=document.querySelector(sel);
    if(!el)return;
    if(k==='localeNote'){
      el.hidden=!d.localeNote;
      el.textContent=d.localeNote||'';
      return;
    }
    if(d[k])el.textContent=d[k];
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
