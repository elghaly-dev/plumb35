(function(){
const PROOF_T={
  en:{
    backHome:"← Plumb home",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
    ocSectionLabel:"Transaction path",
    ocTitle:"On-chain: two Solana mainnet transactions",
    ocLead:"Each row is one transaction: a Kamino flash loan, a Jupiter SOL round-trip, and the repay to Kamino — all inside a single transaction. Both are signed by GrQX7F…oujqJS, the owner&#39;s own (older) wallet. Only the borrow size is shown.",
    ocDisclaimer:"Proof the code path runs on mainnet. Not a promise of results.",
    ocThBorrowed:"Borrowed",
    ocThCheck:"What happened · check it",
    ocBorrow1:"30,000 USDC",
    ocCheck1:"Flash loan executed and repaid in one transaction · <a href=\"https://solscan.io/tx/UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC</code>",
    ocBorrow2:"15,000 USDC",
    ocCheck2:"Flash loan executed and repaid in one transaction · <a href=\"https://solscan.io/tx/4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U</code>",
    ocHowTitle:"How to check one yourself",
    ocHowBody:"Open the Solscan link, or paste the signature into another explorer such as Solana Explorer. You should see: status Success, the signer GrQX7F…oujqJS, a borrow from Kamino Lend, swaps through Jupiter, and the repay to Kamino in the same transaction.",
    ocWhatTitle:"What these show, and what they do not",
    ocWhatBody:"They show that the flash-loan code path runs on Solana mainnet: borrow, route and repay land together or not at all. They show no result figures, nothing about fills at any price, and nothing about what your desk will do.",
    ocSeeAlso:"See also: <a href=\"../fixtures/\">Fixtures</a> (verifiable files), <a href=\"../claims/\">Claims ledger</a>, <a href=\"../limits/\">Limits</a>."
  },
  ar:{
    backHome:"← الصفحة الرئيسية",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
    ocSectionLabel:"مسار المعاملة",
    ocTitle:"On-chain: معاملتان على Solana mainnet",
    ocLead:"كل صف معاملة واحدة: قرض flash من Kamino، جولة SOL عبر Jupiter، والسداد إلى Kamino — كلها داخل معاملة واحدة. كلاهما موقّع من GrQX7F…oujqJS، محفظة المالك. يُعرض حجم الاقتراض فقط.",
    ocDisclaimer:"دليل أن مسار الكود يعمل على mainnet. ليس وعداً بنتائج.",
    ocThBorrowed:"المقترض",
    ocThCheck:"ما حدث · تحقق",
    ocBorrow1:"30,000 USDC",
    ocCheck1:"قرض flash نُفّذ وسُدّد في معاملة واحدة · <a href=\"https://solscan.io/tx/UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC</code>",
    ocBorrow2:"15,000 USDC",
    ocCheck2:"قرض flash نُفّذ وسُدّد في معاملة واحدة · <a href=\"https://solscan.io/tx/4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U</code>",
    ocHowTitle:"كيف تتحقق بنفسك",
    ocHowBody:"افتح رابط Solscan، أو الصق التوقيع في مستكشف آخر مثل Solana Explorer. يجب أن ترى: حالة Success، الموقّع GrQX7F…oujqJS، اقتراض من Kamino Lend، مبادلات عبر Jupiter، والسداد إلى Kamino في نفس المعاملة.",
    ocWhatTitle:"ما الذي تُظهره وما الذي لا تُظهره",
    ocWhatBody:"تُظهر أن مسار قرض flash يعمل على Solana mainnet: الاقتراض والمسار والسداد معاً أو لا شيء. لا أرقام نتائج، ولا ادعاءات عن fills أو ما سيفعله مكتبك.",
    ocSeeAlso:"انظر أيضاً: <a href=\"../fixtures/\">Fixtures</a> (ملفات قابلة للتحقق)، <a href=\"../claims/\">Claims ledger</a>، <a href=\"../limits/\">Limits</a>."
  },
  ru:{
    backHome:"← На главную",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
    ocSectionLabel:"Путь транзакции",
    ocTitle:"On-chain: две транзакции Solana mainnet",
    ocLead:"Каждая строка — одна транзакция: flash-заём Kamino, круг SOL через Jupiter и погашение Kamino — всё в одной транзакции. Обе подписаны GrQX7F…oujqJS, кошельком владельца. Показан только размер займа.",
    ocDisclaimer:"Доказательство, что кодовый путь работает в mainnet. Не обещание результатов.",
    ocThBorrowed:"Заём",
    ocThCheck:"Что произошло · проверка",
    ocBorrow1:"30 000 USDC",
    ocCheck1:"Flash loan выполнен и погашен в одной транзакции · <a href=\"https://solscan.io/tx/UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC</code>",
    ocBorrow2:"15 000 USDC",
    ocCheck2:"Flash loan выполнен и погашен в одной транзакции · <a href=\"https://solscan.io/tx/4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U</code>",
    ocHowTitle:"Как проверить самому",
    ocHowBody:"Откройте Solscan или вставьте подпись в Solana Explorer. Должны увидеть: Success, подписант GrQX7F…oujqJS, заём Kamino Lend, свопы Jupiter и погашение Kamino в той же транзакции.",
    ocWhatTitle:"Что это показывает и чего не показывает",
    ocWhatBody:"Показывает, что flash-путь работает в mainnet: заём, маршрут и погашение вместе или ничего. Без цифр результатов, без обещаний о fills и о том, что сделает ваш desk.",
    ocSeeAlso:"См. также: <a href=\"../fixtures/\">Fixtures</a>, <a href=\"../claims/\">Claims ledger</a>, <a href=\"../limits/\">Limits</a>."
  },
  zh:{
    backHome:"← 返回首页",
    navOnchain:"On-chain",
    navFixtures:"Fixtures",
    navClaims:"Claims",
    navLimits:"Limits",
    localeNote:"",
    ocSectionLabel:"交易路径",
    ocTitle:"On-chain：两笔 Solana mainnet 交易",
    ocLead:"每一行是一笔交易：Kamino 闪电贷、经 Jupiter 的 SOL 往返、以及在同一笔交易内归还 Kamino。两笔均由所有者钱包 GrQX7F…oujqJS 签名。仅显示借入规模。",
    ocDisclaimer:"证明代码路径在 mainnet 上运行。不承诺结果。",
    ocThBorrowed:"借入",
    ocThCheck:"发生了什么 · 自行核对",
    ocBorrow1:"30,000 USDC",
    ocCheck1:"闪电贷在同一笔交易内执行并归还 · <a href=\"https://solscan.io/tx/UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">UBDrxUXdSe2hYgaLMLPoVzbczgKexvH4fvvMrFDfZ4aCjQS148dsb5V1CCx2E4Cii4Sk7kngnERQoJT7KiPqUQC</code>",
    ocBorrow2:"15,000 USDC",
    ocCheck2:"闪电贷在同一笔交易内执行并归还 · <a href=\"https://solscan.io/tx/4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U\" rel=\"noopener\" target=\"_blank\">Solscan ↗</a><br><code style=\"font-size:11px;overflow-wrap:anywhere\">4VaChnq4qMnfRL221CAKqDmpC4Jqe3Agte9ga2Ehqdcfcyn21eHZHVTkFBcR7NMjY7e3EaxXmZcN8nv1bMuyxG2U</code>",
    ocHowTitle:"如何自行核对",
    ocHowBody:"打开 Solscan 链接，或将签名粘贴到 Solana Explorer。应看到：Success、签名者 GrQX7F…oujqJS、Kamino Lend 借入、经 Jupiter 的 swap、以及同一笔交易内的 Kamino 归还。",
    ocWhatTitle:"这些证明什么、不证明什么",
    ocWhatBody:"证明闪电贷代码路径在 Solana mainnet 上运行：借入、路由与归还在同一笔交易内同时发生或全部失败。不含结果数字，也不承诺成交价或你的 desk 将做什么。",
    ocSeeAlso:"另见：<a href=\"../fixtures/\">Fixtures</a>、<a href=\"../claims/\">Claims ledger</a>、<a href=\"../limits/\">Limits</a>。"
  }
};

const PROOF_KEYS=[
  ['backHome','#proofBackHome'],
  ['navOnchain','#navOnchain'],
  ['navFixtures','#navFixtures'],
  ['navClaims','#navClaims'],
  ['navLimits','#navLimits'],
  ['localeNote','#proofLocaleNote'],
  ['ocSectionLabel','#ocSectionLabel'],
  ['ocTitle','#ocTitle'],
  ['ocLead','#ocLead','html'],
  ['ocDisclaimer','#ocDisclaimer'],
  ['ocThBorrowed','#ocThBorrowed'],
  ['ocThCheck','#ocThCheck'],
  ['ocBorrow1','#ocBorrow1'],
  ['ocCheck1','#ocCheck1','html'],
  ['ocBorrow2','#ocBorrow2'],
  ['ocCheck2','#ocCheck2','html'],
  ['ocHowTitle','#ocHowTitle'],
  ['ocHowBody','#ocHowBody','html'],
  ['ocWhatTitle','#ocWhatTitle'],
  ['ocWhatBody','#ocWhatBody'],
  ['ocSeeAlso','#ocSeeAlso','html']
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
