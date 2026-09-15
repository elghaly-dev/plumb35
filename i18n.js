(function(){
const LINK35='<a href="https://35.elghaly.dev">35</a>';
const LINKIRIS='<a href="https://iris-35.elghaly.dev">IRIS</a>';
const LINKMAIL='<a href="mailto:support@elghaly.dev">support@elghaly.dev</a>';

const T={
en:{
  metaTitle:"Plumb — Ready Desk Software",
  brandTag:"Ready desk software",
  heroEyebrow:"Lifetime seats · Solana today",
  heroH1:"Your desk.<br/>Your keys.<br/>Telegram control.",
  heroLede:"After you pay, we will help — we will guide. Desk ready in <strong>3.35 hours</strong> → live walkthrough → you continue on Telegram. Same house as "+LINK35+" and "+LINKIRIS+". You host the bot, you hold the keys.",
  heroPitch:"We build, you continue.",
  heroDelivery:"After pay, ready bot delivered within <time>3.35</time> hours",
  heroHelp:"Walkthrough & setup help included",
  heroImgAlt:"Desk — same house as 35 and IRIS",
  tlLabel:"From pay to live",tlTitle:"After you pay, we will help — we will guide.",tlNote:"Ready in 3.35 hours. Live walkthrough and setup help on the wire — then you continue on Telegram. We build, you continue.",
  tl1:"Pay seat + mail brief",tl2:"We build your desk",tl3:"We guide · walkthrough & setup",tl4:"You continue on Telegram",
  howLabel:"How it works",howTitle:"Built for operators.",howNote:"After you pay, we will help — we will guide. Walkthrough and setup help included with every seat.",
  p1h:"We help, we guide",p1:"After you pay, we will help — we will guide. Your desk is ready in 3.35 hours, then a live walkthrough on the wire. We build, you continue on Telegram.",
  p2h:"Telegram control",p2:"Start, pause, size, and read status from Telegram. No browser dashboard required — the desk talks to you where you already are.",
  p3h:"Solana desk hunt",p3:"Watches your named pairs on Solana, surfaces spreads, and fires when your rules pass. Built for operators who want a machine on the book.",
  p4h:"Jupiter routes",p4:"Routes through Jupiter for swap execution. You see the path the bot took and what landed on chain.",
  p5h:"Pair board",p5:"<strong>Starter</strong> ships a <em>partial board</em> — 350-style slice, 1–2 pairs. <strong>Pro / Source</strong> ships the <em>full board</em> — arb / KEEP-style multi-pair desk.",
  p6h:"Slip / tip & reports",p6:"Starter runs fixed defaults. Pro and Source give you slippage and tip knobs. Session summaries and fill notes ping back to Telegram.",
  p7h:"35 is a separate door",p7:"35 credits are earned-only and never sold here. This page is Plumb desk software only.",p7n:"Not a token sale. Not an investment.",
  railsLabel:"Execution rails",railsTitle:"Your path, your stack.",
  r1t:"Included · Solana",r1h:"Jupiter rail",r1:"Default execution path on Solana through Jupiter. This is what ships and what we walk you through on day one.",
  r2t:"Optional · not default",r2h:"Jito / operator bundle",r2:"Jito and operator-style bundles are available on request — not turned on for every seat by default.",
  r3t:"Extra · quote",r3h:"Titan / gRPC",r3:"Private pipe for lower latency. Not bundled in any seat — quote from $400 after the brief.",
  r4t:"Expansion · brief",r4h:"BTC / ETH paths",r4:"Solana is live today. Bitcoin and Ethereum routes are expansion work — discuss on Source or custom brief. We do <em>not</em> claim live BTC/ETH execution on standard seats.",
  galLabel:"Same house · different boards",galTitle:"Three doors. One desk.",galNote:"Real desk UI. <strong>35</strong> is the brand door (not sold here). <strong>Starter</strong> is a partial board. <strong>Pro / Source</strong> is the full arb board.",
  g1t:"Not for sale on Plumb",g1h:"35 · brand / desk",g1:"Same-house mark at "+LINK35+". Earned-credits door — not a paid Plumb seat.",
  g2t:"Starter $299",g2h:"350 · partial board",g2:"Pair slice — 1–2 pairs, capped, fixed defaults. A limited slice, not the full desk.",
  g3t:"Pro $699 · Source $1,999",g3h:"Arb / KEEP · full board",g3:"Multi-pair desk — you set slip/tip, no size cap from us. Titan + Jupiter routes on the wire.",
  flashLabel:"Flash path · 15k USDC",flashTitle:"On-chain proof.",flashNote:"Kamino flash borrow and Jupiter swap path. Wallet and profit figures redacted — path only.",
  f1h:"Borrow · Kamino",f1:"Flash loan 15,000 USDC from the Kamino lending vault.",f2h:"Loop · Jupiter path",f2:"Borrow → Jupiter swaps → repay. Full round-trip in one transaction.",
  flashSub:"flash loan 15,000 USDC (Kamino) · Jupiter path",
  seatsLabel:"Lifetime seats",seatsTitle:"Choose your board.",
  s1cap:"350 · partial board · 1–2 pairs · more pairs locked",s1tier:"Starter · 350 partial · $299",s1for:"First machine — learn the path",s1del:"Ready in <time>3.35</time> hours after pay",s1help:"After pay — we will help, we will guide",s1btn:"Pay $299",
  s1f:["Partial pair board — limited slice, not full desk","1–2 pairs you name in the brief","Telegram control + Jupiter rail","Fixed slippage & tip defaults","3 months of updates","Capped seat"],
  s2cap:"Arb / KEEP · full board · multi-pair · you set slip/tip",s2tier:"Pro · arb full · $699",s2for:"Operator who already trades",s2del:"Ready in <time>3.35</time> hours after pay",s2help:"After pay — we will help, we will guide",s2btn:"Pay $699",
  s2f:["Full multi-pair arb board — KEEP-style desk","You set slippage & tip","Optional Jito / operator bundle","Telegram control","6 months of updates","No size cap from us · Private RPC hooks"],
  s3cap:"Arb / KEEP · full board + source code",s3tier:"Source · arb full + code · $1,999",s3for:"Desk that wants the code",s3del:"Ready in <time>3.35</time> hours after pay",s3help:"After pay — we will help, we will guide",s3btn:"Pay $1,999",
  s3f:["Everything in Pro, plus the source","Full board + pair workshop","BTC/ETH expansion discussed here — not fake live claims","You own the changes after handoff","6 months of updates + workshop","No size cap from us"],
  seatAll:"<strong>Every seat:</strong> Keys stay with you. We build, you continue. Titan / gRPC not included — quoted extra after brief. Optional follow-up $149/mo after the update window.",
  cmpLabel:"Compare seats",cmpFeature:"Feature",cmpS:"Starter $299",cmpP:"Pro $699",cmpSo:"Source $1,999",
  cmpRows:[["Board shape","Partial · 350-style slice","Full arb board","Full arb board + source"],["Who it is for","First machine, learn the path","Operator who already trades","Desk that wants the code"],["Pairs","1–2 on partial board","Multi-pair full board","Workshop + you edit"],["What you receive","Ready binary + walkthrough","Ready binary + controls","Source + seat"],["Telegram control","Yes","Yes","Yes"],["Ready after pay","3.35 hours","3.35 hours","3.35 hours"],["Network today","Solana live · BTC/ETH expansion via Source / custom brief only","",""],["Updates included","3 months","6 months","6 months + workshop"],["Trade size cap","Capped seat","No cap from us","No cap from us"],["Slippage & tip","Fixed defaults","You set","You change the code"],["Jito / operator","—","Optional · ask in brief","Yours to edit"],["Private RPC","—","Hook points","Yours to edit"],["Workshop","—","—","Included"],["Keys","Stay with you — always","",""],["Handoff","We build → walkthrough → you continue on Telegram","",""],["Titan / gRPC","Not included in any seat — extra after brief","",""]],
  footContact:"Ask us on mail — "+LINKMAIL+" · We are 24",
  netLabel:"Networks",netNote:"Solana is the live desk today · ETH · BTC · ARB · MONAD shown as network family / expansion",
  foot35:"· separate door · not sold here",
  fine:"Plumb is desk software sold as-is, without warranty or guarantee. We make no claims about profit, returns, CLEAR, land, or any outcome. You host it, you hold the keys, you accept the risk. 35 credits are earned elsewhere and are never sold on this page. Not a token sale. Not an investment.",
  once:"once",netSol:"Solana — live desk today",netEth:"Ethereum — expansion path",netBtc:"Bitcoin — expansion path",netArb:"Arbitrum — expansion path",netMonad:"Monad — expansion path"
},
ar:{
  metaTitle:"Plumb — برمجيات مكتب جاهزة",
  brandTag:"برمجيات مكتب جاهزة",
  heroEyebrow:"مقاعد مدى الحياة · سولana اليوم",
  heroH1:"مكتبك.<br/>مفاتيحك.<br/>تحكم عبر Telegram.",
  heroLede:"بعد الدفع، سنساعد — سنرشد. المكتب جاهز خلال <strong>3.35 ساعة</strong> → جولة مباشرة → تستمر على Telegram. نفس البيت مع "+LINK35+" و"+LINKIRIS+". أنت تستضيف البوت، أنت تحتفظ بالمفاتيح.",
  heroPitch:"نحن نبني، أنت تستمر.",
  heroDelivery:"بعد الدفع، البوت جاهز خلال <time>3.35</time> ساعة",
  heroHelp:"جولة ومساعدة إعداد مشمولة",
  heroImgAlt:"مكتب — نفس البيت مع 35 و IRIS",
  tlLabel:"من الدفع إلى التشغيل",tlTitle:"بعد الدفع، سنساعد — سنرشد.",tlNote:"جاهز خلال 3.35 ساعة. جولة مباشرة ومساعدة إعداد — ثم تستمر على Telegram. نحن نبني، أنت تستمر.",
  tl1:"ادفع + أرسل الموجز",tl2:"نبني مكتبك",tl3:"نرشد · جولة وإعداد",tl4:"تستمر على Telegram",
  howLabel:"كيف يعمل",howTitle:"مصمم للمشغّلين.",howNote:"بعد الدفع، سنساعد — سنرشد. جولة ومساعدة إعداد مع كل مقعد.",
  p1h:"نساعد، نرشد",p1:"بعد الدفع، سنساعد — سنرشد. مكتبك جاهز خلال 3.35 ساعة، ثم جولة مباشرة. نحن نبني، أنت تستمر على Telegram.",
  p2h:"تحكم Telegram",p2:"ابدأ، أوقف، حدّد الحجم، واقرأ الحالة من Telegram. لا حاجة للوحة متصفح.",
  p3h:"صيد مكتب Solana",p3:"يراقب أزواجك على Solana، يعرض الفروقات، وينفّذ عند تحقق قواعدك.",
  p4h:"مسارات Jupiter",p4:"التوجيه عبر Jupiter للتنفيذ. ترى المسار وما هبط على السلسلة.",
  p5h:"لوحة الأزواج",p5:"<strong>Starter</strong> يشحن <em>لوحة جزئية</em> — شريحة 350، 1–2 زوج. <strong>Pro / Source</strong> يشحن <em>اللوحة الكاملة</em>.",
  p6h:"Slip / tip والتقارير",p6:"Starter بإعدادات ثابتة. Pro و Source يمنحانك تحكم الانزلاق والبقشيش.",
  p7h:"35 باب منفصل",p7:"رصيد 35 يُكتسب فقط ولا يُباع هنا. هذه الصفحة لبرمجيات Plumb فقط.",p7n:"ليس بيع رمز. ليس استثمار.",
  railsLabel:"قنوات التنفيذ",railsTitle:"مسارك، مكدسك.",
  r1t:"مشمول · Solana",r1h:"قناة Jupiter",r1:"مسار التنفيذ الافتراضي على Solana عبر Jupiter.",
  r2t:"اختياري",r2h:"حزمة Jito / operator",r2:"متاحة عند الطلب — غير مفعّلة افتراضياً.",
  r3t:"إضافي · عرض سعر",r3h:"Titan / gRPC",r3:"أنبوب خاص لزمن أقل. غير مشمول — عرض من $400.",
  r4t:"توسع · موجز",r4h:"مسارات BTC / ETH",r4:"Solana نشط اليوم. BTC و ETH توسع — نناقش على Source. <em>لا</em> ندّعي تنفيذ BTC/ETH مباشر على المقاعد القياسية.",
  galLabel:"نفس البيت · لوحات مختلفة",galTitle:"ثلاثة أبواب. مكتب واحد.",galNote:"واجهة حقيقية. <strong>35</strong> باب العلامة (لا يُباع). <strong>Starter</strong> لوحة جزئية. <strong>Pro / Source</strong> لوحة arb كاملة.",
  g1t:"لا يُباع على Plumb",g1h:"35 · علامة / مكتب",g1:"علامة نفس البيت عند "+LINK35+". باب رصيد مكتسب — ليس مقعد Plumb مدفوع.",
  g2t:"Starter $299",g2h:"350 · لوحة جزئية",g2:"شريحة 1–2 زوج، محدودة، إعدادات ثابتة.",
  g3t:"Pro $699 · Source $1,999",g3h:"Arb / KEEP · لوحة كاملة",g3:"مكتب متعدد الأزواج — أنت تضبط slip/tip.",
  flashLabel:"Flash path · 15k USDC",flashTitle:"إثبات على السلسلة.",flashNote:"اقتراض Kamino flash ومسار Jupiter. المحفظة والأرباح محذوفة — المسار فقط.",
  f1h:"اقتراض · Kamino",f1:"قرض flash 15,000 USDC من خزنة Kamino.",f2h:"حلقة · مسار Jupiter",f2:"اقتراض → مبادلات Jupiter → سداد. جولة كاملة في معاملة واحدة.",
  flashSub:"flash loan 15,000 USDC (Kamino) · Jupiter path",
  seatsLabel:"مقاعد مدى الحياة",seatsTitle:"اختر لوحتك.",
  s1cap:"350 · جزئية · 1–2 زوج",s1tier:"Starter · 350 جزئية · $299",s1for:"أول آلة — تعلّم المسار",s1del:"جاهز خلال <time>3.35</time> ساعة بعد الدفع",s1help:"بعد الدفع — سنساعد، سنرشد",s1btn:"ادفع $299",
  s1f:["لوحة جزئية — شريحة محدودة","1–2 زوج في الموجز","تحكم Telegram + Jupiter","انزلاق وبقشيش ثابت","3 أشهر تحديثات","مقعد محدود"],
  s2cap:"Arb / KEEP · لوحة كاملة",s2tier:"Pro · arb كامل · $699",s2for:"مشغّل يتداول بالفعل",s2del:"جاهز خلال <time>3.35</time> ساعة",s2help:"بعد الدفع — سنساعد، سنرشد",s2btn:"ادفع $699",
  s2f:["لوحة arb متعددة الأزواج","أنت تضبط الانزلاق والبقشيش","Jito / operator اختياري","تحكم Telegram","6 أشهر تحديثات","بدون حد حجم · Private RPC"],
  s3cap:"Arb / KEEP · لوحة + كود",s3tier:"Source · arb + كود · $1,999",s3for:"مكتب يريد الكود",s3del:"جاهز خلال <time>3.35</time> ساعة",s3help:"بعد الدفع — سنساعد، سنرشد",s3btn:"ادفع $1,999",
  s3f:["كل Pro + المصدر","لوحة كاملة + ورشة","توسع BTC/ETH — بدون ادعاءات وهمية","أنت تملك التغييرات","6 أشهر + ورشة","بدون حد حجم"],
  seatAll:"<strong>كل مقعد:</strong> المفاتيح معك. نحن نبني، أنت تستمر. Titan / gRPC إضافي. متابعة $149/شهر اختيارية.",
  cmpLabel:"قارن المقاعد",cmpFeature:"الميزة",cmpS:"Starter $299",cmpP:"Pro $699",cmpSo:"Source $1,999",
  cmpRows:[["شكل اللوحة","جزئية · 350","لوحة arb كاملة","لوحة + مصدر"],["لمن","أول آلة","مشغّل","مكتب يريد الكود"],["الأزواج","1–2","متعدد","ورشة + تحرير"],["ما تستلم","ثنائي + جولة","ثنائي + تحكم","مصدر + مقعد"],["Telegram","نعم","نعم","نعم"],["جاهز بعد الدفع","3.35 ساعة","3.35 ساعة","3.35 ساعة"],["الشبكة اليوم","Solana نشط · BTC/ETH توسع","",""],["التحديثات","3 أشهر","6 أشهر","6 + ورشة"],["حد الحجم","محدود","بدون حد","بدون حد"],["Slip & tip","ثابت","أنت","في الكود"],["Jito","—","اختياري","تحرير"],["Private RPC","—","خطافات","تحرير"],["ورشة","—","—","مشمولة"],["المفاتيح","معك دائماً","",""],["التسليم","نبني → جولة → Telegram","",""],["Titan / gRPC","إضافي","",""]],
  footContact:"راسلنا — "+LINKMAIL+" · We are 24",
  netLabel:"Networks",netNote:"Solana نشط اليوم · ETH · BTC · ARB · MONAD — عائلة شبكات / توسع",
  foot35:"· باب منفصل · لا يُباع هنا",
  fine:"Plumb برمجيات مكتب تُباع كما هي، بدون ضمان. لا ادعاءات بأرباح أو عوائد. أنت تستضيف، أنت تحمل المفاتيح، أنت تقبل المخاطر. رصيد 35 يُكتسب elsewhere. ليس بيع رمز. ليس استثمار.",
  once:"مرة",netSol:"Solana — نشط اليوم",netEth:"Ethereum — توسع",netBtc:"Bitcoin — توسع",netArb:"Arbitrum — توسع",netMonad:"Monad — توسع"
},
ru:{
  metaTitle:"Plumb — Готовое ПО для деска",
  brandTag:"Готовое ПО для деска",
  heroEyebrow:"Пожизненные места · Solana сегодня",
  heroH1:"Ваш дesk.<br/>Ваши ключи.<br/>Управление в Telegram.",
  heroLede:"После оплаты мы поможем — мы проведём. Дesk готов за <strong>3.35 часа</strong> → живой разбор → вы продолжаете в Telegram. Один дом с "+LINK35+" и "+LINKIRIS+". Вы хостите бота, ключи у вас.",
  heroPitch:"Мы строим, вы продолжаете.",
  heroDelivery:"После оплаты бот готов за <time>3.35</time> часа",
  heroHelp:"Разбор и помощь с настройкой включены",
  heroImgAlt:"Desk — один дом с 35 и IRIS",
  tlLabel:"От оплаты до работы",tlTitle:"После оплаты мы поможем — мы проведём.",tlNote:"Готово за 3.35 часа. Живой разбор и настройка — затем вы в Telegram. Мы строим, вы продолжаете.",
  tl1:"Оплата + бриф",tl2:"Строим ваш desk",tl3:"Ведём · разбор и setup",tl4:"Вы в Telegram",
  howLabel:"Как это работает",howTitle:"Для операторов.",howNote:"После оплаты мы поможем — мы проведём. Разбор включён в каждое место.",
  p1h:"Помогаем, ведём",p1:"После оплаты мы поможем — мы проведём. Desk за 3.35 часа, затем живой разбор. Мы строим, вы в Telegram.",
  p2h:"Telegram-управление",p2:"Старт, пауза, размер и статус из Telegram. Без браузерной панели.",
  p3h:"Solana desk hunt",p3:"Следит за парами, показывает спреды, исполняет по вашим правилам.",
  p4h:"Маршруты Jupiter",p4:"Исполнение через Jupiter. Видите путь и результат on-chain.",
  p5h:"Pair board",p5:"<strong>Starter</strong> — <em>частичная доска</em> 350, 1–2 пары. <strong>Pro / Source</strong> — <em>полная</em> arb / KEEP.",
  p6h:"Slip / tip и отчёты",p6:"Starter — фикс. Pro и Source — настройка slippage и tip.",
  p7h:"35 — отдельная дверь",p7:"Кредиты 35 только earned, здесь не продаются.",p7n:"Не продажа токена. Не инвестиция.",
  railsLabel:"Рails исполнения",railsTitle:"Ваш путь, ваш стек.",
  r1t:"Включено · Solana",r1h:"Jupiter rail",r1:"Путь по умолчанию через Jupiter на Solana.",
  r2t:"Опционально",r2h:"Jito / operator bundle",r2:"По запросу — не по умолчанию.",
  r3t:"Доп. · quote",r3h:"Titan / gRPC",r3:"Приватный канал. Не в seat — от $400 после брифа.",
  r4t:"Expansion · brief",r4h:"BTC / ETH",r4:"Solana live сегодня. BTC/ETH — expansion. <em>Не</em> заявляем live BTC/ETH на стандартных seats.",
  galLabel:"Один дом · разные доски",galTitle:"Три двери. Один desk.",galNote:"Реальный UI. <strong>35</strong> — brand door. <strong>Starter</strong> — partial. <strong>Pro / Source</strong> — full arb.",
  g1t:"Не продаётся на Plumb",g1h:"35 · brand / desk",g1:"Mark того же дома на "+LINK35+". Earned credits — не paid seat.",
  g2t:"Starter $299",g2h:"350 · partial",g2:"Срез 1–2 пары, capped, fixed defaults.",
  g3t:"Pro $699 · Source $1,999",g3h:"Arb / KEEP · full",g3:"Multi-pair — вы slip/tip, без cap от нас.",
  flashLabel:"Flash path · 15k USDC",flashTitle:"On-chain proof.",flashNote:"Kamino flash + Jupiter. Кошелёк и profit скрыты — только path.",
  f1h:"Borrow · Kamino",f1:"Flash loan 15,000 USDC из vault Kamino.",f2h:"Loop · Jupiter",f2:"Borrow → swaps → repay. Один tx.",
  flashSub:"flash loan 15,000 USDC (Kamino) · Jupiter path",
  seatsLabel:"Пожизненные места",seatsTitle:"Выберите доску.",
  s1cap:"350 · partial · 1–2 пары",s1tier:"Starter · 350 · $299",s1for:"Первая машина — learn the path",s1del:"Готово за <time>3.35</time> ч после оплаты",s1help:"После оплаты — поможем, проведём",s1btn:"Pay $299",
  s1f:["Partial board — slice","1–2 пары в брифе","Telegram + Jupiter","Fixed slip/tip","3 мес. updates","Capped"],
  s2cap:"Arb / KEEP · full",s2tier:"Pro · arb · $699",s2for:"Оператор с опытом",s2del:"Готово за <time>3.35</time> ч",s2help:"После оплаты — поможем, проведём",s2btn:"Pay $699",
  s2f:["Full arb board KEEP","Slip/tip вы","Jito optional","Telegram","6 мес.","No cap · RPC hooks"],
  s3cap:"Arb + source",s3tier:"Source · $1,999",s3for:"Desk хочет код",s3del:"Готово за <time>3.35</time> ч",s3help:"После оплаты — поможем, проведём",s3btn:"Pay $1,999",
  s3f:["Pro + source","Workshop pairs","BTC/ETH expansion","Вы владеете изменениями","6 мес. + workshop","No cap"],
  seatAll:"<strong>Каждый seat:</strong> Ключи у вас. Мы строим, вы продолжаете. Titan/gRPC extra. Follow-up $149/mo.",
  cmpLabel:"Сравнение",cmpFeature:"Feature",cmpS:"Starter $299",cmpP:"Pro $699",cmpSo:"Source $1,999",
  cmpRows:[["Board","Partial 350","Full arb","Full + source"],["Для кого","First machine","Operator","Desk + code"],["Pairs","1–2","Multi","Workshop"],["Получаете","Binary + walkthrough","Binary + controls","Source"],["Telegram","Yes","Yes","Yes"],["После оплаты","3.35 h","3.35 h","3.35 h"],["Network","Solana live · BTC/ETH expansion","",""],["Updates","3 mo","6 mo","6 + workshop"],["Cap","Capped","No cap","No cap"],["Slip/tip","Fixed","You set","You code"],["Jito","—","Optional","Edit"],["RPC","—","Hooks","Edit"],["Workshop","—","—","Yes"],["Keys","Yours always","",""],["Handoff","Build → walkthrough → Telegram","",""],["Titan","Extra","",""]],
  footContact:"Пишите — "+LINKMAIL+" · We are 24",
  netLabel:"Networks",netNote:"Solana live сегодня · ETH · BTC · ARB · MONAD — family / expansion",
  foot35:"· отдельная дверь · не продаётся",
  fine:"Plumb — ПО as-is, без гарантий. Нет claims о profit. Вы host, вы keys, вы risk. 35 earned elsewhere. Не token sale.",
  once:"раз",netSol:"Solana — live",netEth:"Ethereum — expansion",netBtc:"Bitcoin — expansion",netArb:"Arbitrum — expansion",netMonad:"Monad — expansion"
},
zh:{
  metaTitle:"Plumb — 就绪桌面软件",
  brandTag:"就绪桌面软件",
  heroEyebrow:"终身席位 · Solana 今日可用",
  heroH1:"你的 desk。<br/>你的密钥。<br/>Telegram 控制。",
  heroLede:"付款后，我们将帮助 — 我们将引导。Desk <strong>3.35 小时</strong>就绪 →  live  walkthrough → 你在 Telegram 继续。与 "+LINK35+" 和 "+LINKIRIS+" 同一体系。你托管 bot，你持有密钥。",
  heroPitch:"我们构建，你继续。",
  heroDelivery:"付款后 <time>3.35</time> 小时内交付就绪 bot",
  heroHelp:"含 walkthrough 与 setup 帮助",
  heroImgAlt:"Desk — 与 35 和 IRIS 同一体系",
  tlLabel:"从付款到上线",tlTitle:"付款后，我们将帮助 — 我们将引导。",tlNote:"3.35 小时就绪。Live walkthrough 与 setup — 然后 Telegram 继续。我们构建，你继续。",
  tl1:"付款 + 发送 brief",tl2:"我们构建 desk",tl3:"我们引导 · walkthrough",tl4:"Telegram 继续",
  howLabel:"如何运作",howTitle:"为操作者打造。",howNote:"付款后，我们将帮助 — 我们将引导。每个席位含 walkthrough。",
  p1h:"我们帮助，我们引导",p1:"付款后帮助与引导。3.35 小时就绪，live walkthrough。我们构建，Telegram 继续。",
  p2h:"Telegram 控制",p2:"从 Telegram 启动、暂停、 sizing、读状态。无需浏览器面板。",
  p3h:"Solana desk hunt",p3:"监控命名交易对，显示 spread，规则通过时执行。",
  p4h:"Jupiter 路由",p4:"通过 Jupiter 执行 swap。可见路径与链上结果。",
  p5h:"Pair board",p5:"<strong>Starter</strong> <em>部分 board</em> 350，1–2 对。<strong>Pro / Source</strong> <em>完整</em> arb board。",
  p6h:"Slip / tip 与报告",p6:"Starter 固定默认。Pro / Source 可调 slippage 与 tip。",
  p7h:"35 独立入口",p7:"35 积分仅 earned，此处不售。",p7n:"非 token 销售。非投资。",
  railsLabel:"执行 rails",railsTitle:"你的路径，你的栈。",
  r1t:"含 · Solana",r1h:"Jupiter rail",r1:"Solana 上通过 Jupiter 的默认执行路径。",
  r2t:"可选",r2h:"Jito / operator",r2:"按需 — 非默认开启。",
  r3t:"额外 · 报价",r3h:"Titan / gRPC",r3:"低延迟私有管道。不含于席位 — brief 后 $400 起。",
  r4t:"扩展 · brief",r4h:"BTC / ETH",r4:"Solana 今日 live。BTC/ETH 为扩展。<em>不</em>声称标准席位 live BTC/ETH。",
  galLabel:"同一体系 · 不同 board",galTitle:"三扇门。一个 desk。",galNote:"真实 UI。<strong>35</strong> brand door。<strong>Starter</strong> partial。<strong>Pro / Source</strong> full arb。",
  g1t:"Plumb 不售",g1h:"35 · brand / desk",g1:"同体系 mark："+LINK35+"。Earned credits — 非 paid seat。",
  g2t:"Starter $299",g2h:"350 · partial",g2:"1–2 对 slice，capped，固定默认。",
  g3t:"Pro $699 · Source $1,999",g3h:"Arb / KEEP · full",g3:"Multi-pair — 你设 slip/tip，无 cap。",
  flashLabel:"Flash path · 15k USDC",flashTitle:"链上证明。",flashNote:"Kamino flash 与 Jupiter 路径。钱包与 profit 已打码 — 仅路径。",
  f1h:"Borrow · Kamino",f1:"从 Kamino vault flash loan 15,000 USDC。",f2h:"Loop · Jupiter",f2:"借 → swap → 还。单笔 tx 闭环。",
  flashSub:"flash loan 15,000 USDC (Kamino) · Jupiter path",
  seatsLabel:"终身席位",seatsTitle:"选择 board。",
  s1cap:"350 · partial · 1–2 对",s1tier:"Starter · 350 · $299",s1for:"第一台机器 — 学路径",s1del:"付款后 <time>3.35</time> 小时就绪",s1help:"付款后 — 我们帮助，我们引导",s1btn:"Pay $299",
  s1f:["Partial board slice","brief 中 1–2 对","Telegram + Jupiter","固定 slip/tip","3 个月更新","Capped"],
  s2cap:"Arb / KEEP · full",s2tier:"Pro · $699",s2for:"已有交易经验",s2del:"<time>3.35</time> 小时",s2help:"付款后 — 我们帮助，我们引导",s2btn:"Pay $699",
  s2f:["Full arb KEEP board","自设 slip/tip","可选 Jito","Telegram","6 个月","无 cap · RPC"],
  s3cap:"Arb + 源码",s3tier:"Source · $1,999",s3for:"要代码的 desk",s3del:"<time>3.35</time> 小时",s3help:"付款后 — 我们帮助，我们引导",s3btn:"Pay $1,999",
  s3f:["Pro + source","Pair workshop","BTC/ETH 扩展讨论","交接后归你","6 个月 + workshop","无 cap"],
  seatAll:"<strong>每席位：</strong>密钥在你处。我们构建，你继续。Titan/gRPC 另计。可选 $149/月 follow-up。",
  cmpLabel:"对比席位",cmpFeature:"功能",cmpS:"Starter $299",cmpP:"Pro $699",cmpSo:"Source $1,999",
  cmpRows:[["Board","Partial 350","Full arb","Full + source"],["适合","首台","Operator","要代码"],["Pairs","1–2","Multi","Workshop"],["交付","Binary + walkthrough","Binary + controls","Source"],["Telegram","是","是","是"],["付款后","3.35 小时","3.35 小时","3.35 小时"],["网络","Solana live · BTC/ETH 扩展","",""],["更新","3 月","6 月","6 月 + workshop"],["Cap","Capped","无 cap","无 cap"],["Slip/tip","固定","你设","改代码"],["Jito","—","可选","可改"],["RPC","—","Hooks","可改"],["Workshop","—","—","含"],["Keys","始终在你","",""],["Handoff","构建 → walkthrough → Telegram","",""],["Titan","不含","",""]],
  footContact:"邮件联系 — "+LINKMAIL+" · We are 24",
  netLabel:"Networks",netNote:"Solana 今日 live · ETH · BTC · ARB · MONAD — 网络族 / 扩展",
  foot35:"· 独立入口 · 此处不售",
  fine:"Plumb 软件按原样出售，无保证。不承诺 profit 或回报。你 host、你 keys、你承担风险。35 earned elsewhere。非 token 销售。",
  once:"一次",netSol:"Solana — live",netEth:"Ethereum — 扩展",netBtc:"Bitcoin — 扩展",netArb:"Arbitrum — 扩展",netMonad:"Monad — 扩展"
},
de:{
  metaTitle:"Plumb — Fertige Desk-Software",
  brandTag:"Fertige Desk-Software",
  heroEyebrow:"Lifetime-Seats · Solana heute",
  heroH1:"Dein Desk.<br/>Deine Keys.<br/>Telegram-Steuerung.",
  heroLede:"Nach der Zahlung helfen wir — wir führen. Desk in <strong>3,35 Stunden</strong> → Live-Walkthrough → du machst auf Telegram weiter. Gleiches Haus wie "+LINK35+" und "+LINKIRIS+". Du hostest den Bot, du hältst die Keys.",
  heroPitch:"Wir bauen, du machst weiter.",
  heroDelivery:"Nach Zahlung Bot innerhalb von <time>3.35</time> Stunden bereit",
  heroHelp:"Walkthrough & Setup-Hilfe inklusive",
  heroImgAlt:"Desk — gleiches Haus wie 35 und IRIS",
  tlLabel:"Von Zahlung bis live",tlTitle:"Nach der Zahlung helfen wir — wir führen.",tlNote:"In 3,35 Stunden bereit. Live-Walkthrough und Setup — dann Telegram. Wir bauen, du machst weiter.",
  tl1:"Seat zahlen + Brief",tl2:"Wir bauen deinen Desk",tl3:"Wir führen · Walkthrough",tl4:"Du auf Telegram",
  howLabel:"So funktioniert's",howTitle:"Für Operatoren.",howNote:"Nach der Zahlung helfen wir — wir führen. Walkthrough bei jedem Seat.",
  p1h:"Wir helfen, wir führen",p1:"Nach Zahlung helfen und führen. Desk in 3,35 h, dann Live-Walkthrough. Wir bauen, du auf Telegram.",
  p2h:"Telegram-Steuerung",p2:"Start, Pause, Größe, Status aus Telegram. Kein Browser-Dashboard nötig.",
  p3h:"Solana Desk Hunt",p3:"Beobachtet deine Pairs, zeigt Spreads, feuert bei deinen Regeln.",
  p4h:"Jupiter-Routen",p4:"Ausführung über Jupiter. Du siehst Pfad und On-Chain-Ergebnis.",
  p5h:"Pair Board",p5:"<strong>Starter</strong> liefert <em>Partial Board</em> 350, 1–2 Pairs. <strong>Pro / Source</strong> das <em>volle</em> Arb-Board.",
  p6h:"Slip / Tip & Reports",p6:"Starter: feste Defaults. Pro/Source: Slippage- und Tip-Regler.",
  p7h:"35 ist separate Tür",p7:"35-Credits nur earned, hier nicht verkauft.",p7n:"Kein Token-Verkauf. Keine Anlage.",
  railsLabel:"Execution Rails",railsTitle:"Dein Pfad, dein Stack.",
  r1t:"Inkl. · Solana",r1h:"Jupiter Rail",r1:"Standardweg auf Solana über Jupiter.",
  r2t:"Optional",r2h:"Jito / Operator Bundle",r2:"Auf Anfrage — nicht Standard.",
  r3t:"Extra · Angebot",r3h:"Titan / gRPC",r3:"Private Pipe. Nicht im Seat — ab $400 nach Brief.",
  r4t:"Expansion · Brief",r4h:"BTC / ETH",r4:"Solana live heute. BTC/ETH Expansion. <em>Kein</em> live BTC/ETH auf Standard-Seats.",
  galLabel:"Gleiches Haus · andere Boards",galTitle:"Drei Türen. Ein Desk.",galNote:"Echtes UI. <strong>35</strong> Brand-Tür. <strong>Starter</strong> partial. <strong>Pro / Source</strong> full arb.",
  g1t:"Nicht auf Plumb",g1h:"35 · Brand / Desk",g1:"Mark gleichen Hauses bei "+LINK35+". Earned credits — kein paid Seat.",
  g2t:"Starter $299",g2h:"350 · partial",g2:"Slice 1–2 Pairs, capped, feste Defaults.",
  g3t:"Pro $699 · Source $1,999",g3h:"Arb / KEEP · full",g3:"Multi-Pair — du slip/tip, kein Cap von uns.",
  flashLabel:"Flash path · 15k USDC",flashTitle:"On-Chain Proof.",flashNote:"Kamino Flash + Jupiter. Wallet/Profit geschwärzt — nur Pfad.",
  f1h:"Borrow · Kamino",f1:"Flash Loan 15.000 USDC aus Kamino Vault.",f2h:"Loop · Jupiter",f2:"Borrow → Swaps → Repay. Ein Tx.",
  flashSub:"flash loan 15,000 USDC (Kamino) · Jupiter path",
  seatsLabel:"Lifetime-Seats",seatsTitle:"Wähle dein Board.",
  s1cap:"350 · partial · 1–2 Pairs",s1tier:"Starter · 350 · $299",s1for:"Erste Maschine — Pfad lernen",s1del:"In <time>3.35</time> h nach Zahlung",s1help:"Nach Zahlung — wir helfen, wir führen",s1btn:"Pay $299",
  s1f:["Partial Board — Slice","1–2 Pairs im Brief","Telegram + Jupiter","Feste Slip/Tip","3 Mon. Updates","Capped"],
  s2cap:"Arb / KEEP · full",s2tier:"Pro · $699",s2for:"Operator mit Erfahrung",s2del:"<time>3.35</time> h",s2help:"Nach Zahlung — wir helfen, wir führen",s2btn:"Pay $699",
  s2f:["Full Arb KEEP Board","Slip/Tip du","Jito optional","Telegram","6 Mon.","Kein Cap · RPC"],
  s3cap:"Arb + Source",s3tier:"Source · $1,999",s3for:"Desk will Code",s3del:"<time>3.35</time> h",s3help:"Nach Zahlung — wir helfen, wir führen",s3btn:"Pay $1,999",
  s3f:["Alles in Pro + Source","Pair Workshop","BTC/ETH Expansion","Du besitzt Änderungen","6 Mon. + Workshop","Kein Cap"],
  seatAll:"<strong>Jeder Seat:</strong> Keys bei dir. Wir bauen, du machst weiter. Titan/gRPC extra. Follow-up $149/Mo.",
  cmpLabel:"Vergleich",cmpFeature:"Feature",cmpS:"Starter $299",cmpP:"Pro $699",cmpSo:"Source $1,999",
  cmpRows:[["Board","Partial 350","Full arb","Full + Source"],["Für wen","Erste Maschine","Operator","Desk + Code"],["Pairs","1–2","Multi","Workshop"],["Erhalten","Binary + Walkthrough","Binary + Controls","Source"],["Telegram","Ja","Ja","Ja"],["Nach Zahlung","3,35 h","3,35 h","3,35 h"],["Netzwerk","Solana live · BTC/ETH Expansion","",""],["Updates","3 Mon.","6 Mon.","6 + Workshop"],["Cap","Capped","Kein Cap","Kein Cap"],["Slip/Tip","Fest","Du setzt","Im Code"],["Jito","—","Optional","Edit"],["RPC","—","Hooks","Edit"],["Workshop","—","—","Inkl."],["Keys","Immer bei dir","",""],["Handoff","Build → Walkthrough → Telegram","",""],["Titan","Extra","",""]],
  footContact:"Mail uns — "+LINKMAIL+" · We are 24",
  netLabel:"Networks",netNote:"Solana live heute · ETH · BTC · ARB · MONAD — Familie / Expansion",
  foot35:"· separate Tür · nicht hier verkauft",
  fine:"Plumb Software as-is, ohne Garantie. Keine Profit-Claims. Du hostest, du keys, du Risiko. 35 earned elsewhere. Kein Token-Verkauf.",
  once:"einmal",netSol:"Solana — live",netEth:"Ethereum — Expansion",netBtc:"Bitcoin — Expansion",netArb:"Arbitrum — Expansion",netMonad:"Monad — Expansion"
},
es:{
  metaTitle:"Plumb — Software de desk lista",
  brandTag:"Software de desk lista",
  heroEyebrow:"Asientos de por vida · Solana hoy",
  heroH1:"Tu desk.<br/>Tus keys.<br/>Control en Telegram.",
  heroLede:"Tras pagar, ayudaremos — guiaremos. Desk listo en <strong>3,35 horas</strong> → walkthrough en vivo → sigues en Telegram. Misma casa que "+LINK35+" e "+LINKIRIS+". Tú alojas el bot, tú tienes las keys.",
  heroPitch:"Nosotros construimos, tú continúas.",
  heroDelivery:"Tras pagar, bot listo en <time>3.35</time> horas",
  heroHelp:"Walkthrough y ayuda de setup incluidos",
  heroImgAlt:"Desk — misma casa que 35 e IRIS",
  tlLabel:"De pago a live",tlTitle:"Tras pagar, ayudaremos — guiaremos.",tlNote:"Listo en 3,35 h. Walkthrough y setup — luego Telegram. Construimos, tú continúas.",
  tl1:"Paga + envía brief",tl2:"Construimos tu desk",tl3:"Guiamos · walkthrough",tl4:"Continúas en Telegram",
  howLabel:"Cómo funciona",howTitle:"Para operadores.",howNote:"Tras pagar, ayudaremos — guiaremos. Walkthrough en cada asiento.",
  p1h:"Ayudamos, guiamos",p1:"Tras pagar, ayudamos y guiamos. Desk en 3,35 h, walkthrough en vivo. Construimos, tú en Telegram.",
  p2h:"Control Telegram",p2:"Inicia, pausa, tamaño y estado desde Telegram. Sin panel web.",
  p3h:"Solana desk hunt",p3:"Observa tus pares, muestra spreads, ejecuta cuando pasan tus reglas.",
  p4h:"Rutas Jupiter",p4:"Ejecución vía Jupiter. Ves el path y lo on-chain.",
  p5h:"Pair board",p5:"<strong>Starter</strong> envía <em>board parcial</em> 350, 1–2 pares. <strong>Pro / Source</strong> el <em>board completo</em> arb.",
  p6h:"Slip / tip e informes",p6:"Starter defaults fijos. Pro/Source ajustan slippage y tip.",
  p7h:"35 puerta aparte",p7:"Créditos 35 solo earned, no se venden aquí.",p7n:"No venta de token. No inversión.",
  railsLabel:"Rails de ejecución",railsTitle:"Tu path, tu stack.",
  r1t:"Incl. · Solana",r1h:"Rail Jupiter",r1:"Path por defecto en Solana vía Jupiter.",
  r2t:"Opcional",r2h:"Bundle Jito / operator",r2:"Bajo pedido — no por defecto.",
  r3t:"Extra · cotización",r3h:"Titan / gRPC",r3:"Tubería privada. No en seat — desde $400 tras brief.",
  r4t:"Expansión · brief",r4h:"BTC / ETH",r4:"Solana live hoy. BTC/ETH expansión. <em>No</em> afirmamos BTC/ETH live en seats estándar.",
  galLabel:"Misma casa · distintos boards",galTitle:"Tres puertas. Un desk.",galNote:"UI real. <strong>35</strong> brand door. <strong>Starter</strong> partial. <strong>Pro / Source</strong> arb full.",
  g1t:"No a la venta en Plumb",g1h:"35 · brand / desk",g1:"Mark misma casa en "+LINK35+". Earned credits — no paid seat.",
  g2t:"Starter $299",g2h:"350 · partial",g2:"Slice 1–2 pares, capped, defaults fijos.",
  g3t:"Pro $699 · Source $1,999",g3h:"Arb / KEEP · full",g3:"Multi-par — tú slip/tip, sin cap nuestro.",
  flashLabel:"Flash path · 15k USDC",flashTitle:"Prueba on-chain.",flashNote:"Kamino flash + Jupiter. Wallet/profit ocultos — solo path.",
  f1h:"Borrow · Kamino",f1:"Flash loan 15.000 USDC del vault Kamino.",f2h:"Loop · Jupiter",f2:"Borrow → swaps → repay. Un tx.",
  flashSub:"flash loan 15,000 USDC (Kamino) · Jupiter path",
  seatsLabel:"Asientos de por vida",seatsTitle:"Elige tu board.",
  s1cap:"350 · partial · 1–2 pares",s1tier:"Starter · 350 · $299",s1for:"Primera máquina — aprende el path",s1del:"Listo en <time>3.35</time> h tras pagar",s1help:"Tras pagar — ayudamos, guiamos",s1btn:"Pay $299",
  s1f:["Board parcial — slice","1–2 pares en brief","Telegram + Jupiter","Slip/tip fijos","3 meses updates","Capped"],
  s2cap:"Arb / KEEP · full",s2tier:"Pro · $699",s2for:"Operador con experiencia",s2del:"<time>3.35</time> h",s2help:"Tras pagar — ayudamos, guiamos",s2btn:"Pay $699",
  s2f:["Board arb KEEP full","Tú slip/tip","Jito opcional","Telegram","6 meses","Sin cap · RPC"],
  s3cap:"Arb + source",s3tier:"Source · $1,999",s3for:"Desk quiere código",s3del:"<time>3.35</time> h",s3help:"Tras pagar — ayudamos, guiamos",s3btn:"Pay $1,999",
  s3f:["Pro + source","Workshop pairs","Expansión BTC/ETH","Tú posees cambios","6 meses + workshop","Sin cap"],
  seatAll:"<strong>Cada seat:</strong> Keys contigo. Construimos, tú continúas. Titan/gRPC extra. Follow-up $149/mo.",
  cmpLabel:"Comparar",cmpFeature:"Feature",cmpS:"Starter $299",cmpP:"Pro $699",cmpSo:"Source $1,999",
  cmpRows:[["Board","Partial 350","Full arb","Full + source"],["Para quién","Primera máquina","Operador","Desk + código"],["Pairs","1–2","Multi","Workshop"],["Recibes","Binary + walkthrough","Binary + controls","Source"],["Telegram","Sí","Sí","Sí"],["Tras pagar","3,35 h","3,35 h","3,35 h"],["Red","Solana live · BTC/ETH expansión","",""],["Updates","3 meses","6 meses","6 + workshop"],["Cap","Capped","Sin cap","Sin cap"],["Slip/tip","Fijos","Tú","En código"],["Jito","—","Opcional","Edit"],["RPC","—","Hooks","Edit"],["Workshop","—","—","Incl."],["Keys","Siempre tuyas","",""],["Handoff","Build → walkthrough → Telegram","",""],["Titan","Extra","",""]],
  footContact:"Escríbenos — "+LINKMAIL+" · We are 24",
  netLabel:"Networks",netNote:"Solana live hoy · ETH · BTC · ARB · MONAD — familia / expansión",
  foot35:"· puerta aparte · no se vende aquí",
  fine:"Plumb software as-is, sin garantía. Sin claims de profit. Tú host, tú keys, tú riesgo. 35 earned elsewhere. No token sale.",
  once:"una vez",netSol:"Solana — live",netEth:"Ethereum — expansión",netBtc:"Bitcoin — expansión",netArb:"Arbitrum — expansión",netMonad:"Monad — expansión"
}
};

const LANGS=['en','ar','ru','zh','de','es'];
const KEYS=[
  ['brandTag','.brand-text .tag'],
  ['heroEyebrow','#heroEyebrow'],['heroH1','#heroH1','html'],['heroLede','#heroLede','html'],
  ['heroPitch','#heroPitch'],['heroDelivery','#heroDelivery','html'],['heroHelp','#heroHelp'],
  ['heroImgAlt','#heroImg','alt','attr'],
  ['tlLabel','#tlLabel'],['tlTitle','#tlTitle'],['tlNote','#tlNote','html'],
  ['tl1','#tl1'],['tl2','#tl2'],['tl3','#tl3'],['tl4','#tl4'],
  ['howLabel','#howLabel'],['howTitle','#howTitle'],['howNote','#howNote','html'],
  ['p1h','#p1h'],['p1','#p1','html'],['p2h','#p2h'],['p2','#p2'],['p3h','#p3h'],['p3','#p3'],
  ['p4h','#p4h'],['p4','#p4'],['p5h','#p5h'],['p5','#p5','html'],['p6h','#p6h'],['p6','#p6'],
  ['p7h','#p7h'],['p7','#p7'],['p7n','#p7n'],
  ['railsLabel','#railsLabel'],['railsTitle','#railsTitle'],
  ['r1t','#r1t'],['r1h','#r1h'],['r1','#r1'],['r2t','#r2t'],['r2h','#r2h'],['r2','#r2'],
  ['r3t','#r3t'],['r3h','#r3h'],['r3','#r3'],['r4t','#r4t'],['r4h','#r4h'],['r4','#r4','html'],
  ['galLabel','#galLabel'],['galTitle','#galTitle'],['galNote','#galNote','html'],
  ['g1t','#g1t'],['g1h','#g1h'],['g1','#g1','html'],['g2t','#g2t'],['g2h','#g2h'],['g2','#g2'],
  ['g3t','#g3t'],['g3h','#g3h'],['g3','#g3'],
  ['flashLabel','#flashLabel'],['flashTitle','#flashTitle'],['flashNote','#flashNote'],
  ['f1h','#f1h'],['f1','#f1'],['f2h','#f2h'],['f2','#f2'],['flashSub','#flashSub'],
  ['seatsLabel','#seatsLabel'],['seatsTitle','#seatsTitle'],
  ['s1cap','#s1cap'],['s1tier','#s1tier'],['s1for','#s1for'],['s1del','#s1del','html'],['s1help','#s1help'],['s1btn','#s1btn'],
  ['s2cap','#s2cap'],['s2tier','#s2tier'],['s2for','#s2for'],['s2del','#s2del','html'],['s2help','#s2help'],['s2btn','#s2btn'],
  ['s3cap','#s3cap'],['s3tier','#s3tier'],['s3for','#s3for'],['s3del','#s3del','html'],['s3help','#s3help'],['s3btn','#s3btn'],
  ['seatAll','#seatAll','html'],['cmpLabel','#cmpLabel'],['cmpFeature','#cmpFeature'],
  ['cmpS','#cmpS'],['cmpP','#cmpP'],['cmpSo','#cmpSo'],
  ['footContact','#footContact','html'],['netLabel','#netLabel'],['netNote','#netNote'],
  ['foot35','#foot35Suffix'],['fine','#fine']
];

function setLang(lang){
  if(!T[lang])lang='en';
  const d=T[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.title=d.metaTitle;
  KEYS.forEach(([k,sel,mode,type])=>{
    const el=document.querySelector(sel);
    if(!el||!d[k])return;
    if(type==='attr'){el.setAttribute(mode,d[k]);return;}
    if(mode==='html')el.innerHTML=d[k];else el.textContent=d[k];
  });
  ['s1','s2','s3'].forEach((p,i)=>{
    const ul=document.querySelector('#'+p+'f');
    if(ul&&d[p+'f'])ul.innerHTML=d[p+'f'].map(li=>'<li>'+li+'</li>').join('');
  });
  document.querySelectorAll('.seat-price span').forEach(s=>{s.textContent=d.once;});
  const rows=document.querySelectorAll('#cmpBody tr');
  if(d.cmpRows&&rows.length){
    d.cmpRows.forEach((row,i)=>{
      const tr=rows[i];
      if(!tr)return;
      const cells=tr.children;
      cells[0].textContent=row[0];
      if(row[2]===''&&row[3]===''){
        if(cells[1]){cells[1].textContent=row[1];cells[1].className='yes';}
      }else{
        if(cells[1]){cells[1].textContent=row[1];cells[1].className=row[1]==='—'?'no':'yes';}
        if(cells[2]){cells[2].textContent=row[2];cells[2].className=row[2]==='—'?'no':'yes';}
        if(cells[3]){cells[3].textContent=row[3];cells[3].className=row[3]==='—'?'no':'yes';}
      }
    });
  }
  ['netSol','netEth','netBtc','netArb','netMonad'].forEach(k=>{
    const el=document.getElementById(k+'Title');
    if(el&&d[k])el.setAttribute('title',d[k]);
  });
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active',b.dataset.lang===lang);
    b.setAttribute('aria-pressed',b.dataset.lang===lang);
  });
  try{localStorage.setItem('plumb-lang',lang);}catch(e){}
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
  let lang='en';
  try{lang=localStorage.getItem('plumb-lang')||'en';}catch(e){}
  if(!LANGS.includes(lang))lang='en';
  setLang(lang);
});
window.plumbSetLang=setLang;
})();
