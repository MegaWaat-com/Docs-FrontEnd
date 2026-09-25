import React from "react";

export const AutoContent: React.FC = () => {
  return (
    <div dir="rtl" style={{ whiteSpace: "pre-wrap", direction: "rtl", textAlign: "right" }}>
      {`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>منوی کاربری – MegaWaat</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            50:  'oklch(96% 0.03 237)',
            100: 'oklch(91% 0.07 237)',
            200: 'oklch(83% 0.12 237)',
            400: 'oklch(60% 0.19 237)',
            500: 'oklch(52% 0.20 237)',
            600: 'oklch(45% 0.19 237)',
            700: 'oklch(38% 0.17 237)',
          },
          surface: {
            DEFAULT: 'oklch(99% 0 0)',
            raised:  'oklch(97% 0.005 237)',
          },
          ink: {
            DEFAULT: 'oklch(16% 0 0)',
            muted:   'oklch(50% 0 0)',
          },
          line: 'oklch(91% 0 0)',
        },
        fontFamily: {
          fa: ['Vazirmatn', 'Tahoma', 'sans-serif'],
        },
      },
    },
  }
</script>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  .submenu { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 220ms ease; }
  .submenu.open { grid-template-rows: 1fr; }
  .submenu > div { overflow: hidden; }

  .sub-list { position: relative; }
  .sub-list::before {
    content: '';
    position: absolute;
    right: 1.625rem;
    top: 0; bottom: 1.1rem;
    width: 2px;
    border-radius: 2px;
    background: oklch(83% 0.12 237);
    transition: background 180ms;
  }
  .active-group .sub-list::before { background: oklch(52% 0.20 237); }

  .sub-item- .sub-list::before { background: oklch(52% 0.20 237); }

  .sub-item-row { position: relative; }
  .sub-item-row::before {
    content: '';
    position: absolute;
    right: 1.625rem; top: 50(83% 0.12 237);
    transform: translateY(-50%);
    transition: background 180ms;
  }
  .active-group .sub-item-row::before { background: oklch(52% 0.20 237); }
  .sub-item-row.active::before        { background: oklch(45% 0.19 237); }

  .sub-dot {
    width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
    margin-left: 0.45rem;
    background: oklch(78% 0 0);
    transition: background 140ms;
  }
  .sub-item-row.active .sub-dot { background: oklch(45% 0.19 237); }
  .sub-item-row:hover  .sub-dot { background: oklch(52% 0.20 237); }

  .chevron { transition: transform 220ms ease; }
  .chevron.up { transform: rotate(180deg); }

  .nav-top:not(.is-active):hover { background-color: oklch(97% 0.005 237); }
  .nav-top.is-active { background-color: oklch(52% 0.20 237); color: white; }
  .nav-top.is-active:hover { background-color: oklch(45% 0.19 237); }
  .nav-top.is-active svg { stroke: white; }

  /* badge */
  .badge {
    display: inline-flex; align-items: center; justify-content: center;
    min-width: 18px; height: 18px; padding: 0 5px;
    border-radius: 9px; font-size: 11px; font-weight: 600;
    background: oklch(60% 0.22 27); color: #fff;
    margin-right: auto; line-height: 1;
  }
  .nav-top.is-active .badge { background: oklch(96% 0.03 237); color: oklch(45% 0.19 237); }
</style>
</head>
<body class="bg-[oklch(94%_0_0)] font-fa flex justify-center items-start p-8 min-h-screen">

<nav class="w-64 bg-surface border border-line overflow-hidden select-none shadow-sm"
     aria-label="منوی کاربری">

  <!-- ══ داشبورد ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="activateTop(this)">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
    داشبورد
  </button>

  <div class="h-px bg-line mx-3"></div>

  <!-- ══ پیام‌های من ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="activateTop(this)">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    پیام‌های من
    <span class="badge">۳</span>
  </button>

  <div class="h-px bg-line mx-3"></div>

  <!-- ══ تنظیمات کاربری ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="toggleGroup(this,'g-settings')">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
    تنظیمات کاربری
    <svg class="chevron w-4 h-4 mr-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>
  <div class="submenu" id="g-settings">
    <div><ul class="sub-list pb-1 pt-0.5">
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>اطلاعات عمومی</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>اطلاعات خصوصی</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>Email / SMS</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-red-400 hover:text-red-500 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot" style="background:oklch(65% 0.20 27)"></span>حذف کاربری</li>
    </ul></div>
  </div>

  <div class="h-px bg-line mx-3"></div>

  <!-- ══ کالا و تجهیزات ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="toggleGroup(this,'g-products')">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
    کالا و تجهیزات
    <svg class="chevron w-4 h-4 mr-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>
  <div class="submenu" id="g-products">
    <div><ul class="sub-list pb-1 pt-0.5">
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>داشبورد</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>فروش</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>خرید</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>اجاره‌دهی‌ها</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>اجاره‌گیری‌ها</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>استعلام‌ها</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>سرویس‌های من</li>
    </ul></div>
  </div>

  <div class="h-px bg-line mx-3"></div>

  <!-- ══ حساب مالی ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="toggleGroup(this,'g-finance')">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
    </svg>
    حساب مالی
    <svg class="chevron w-4 h-4 mr-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>
  <div class="submenu" id="g-finance">
    <div><ul class="sub-list pb-1 pt-0.5">
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>داشبورد مالی</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>تراکنش‌ها</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>وجوه امانی (بلوکه)</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>واریز وجه</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>برداشت وجه</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>همکاری در فروش</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>سبد پرداخت</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>فاکتورها</li>
    </ul></div>
  </div>

  <div class="h-px bg-line mx-3"></div>

  <!-- ══ پروژه‌های من ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="toggleGroup(this,'g-projects')">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
    پروژه‌های من
    <svg class="chevron w-4 h-4 mr-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>
  <div class="submenu" id="g-projects">
    <div><ul class="sub-list pb-1 pt-0.5">
      <!-- placeholder — آیتم‌ها بعداً اضافه می‌شن -->
      <li class="pr-10 pl-4 py-2 text-[12px] text-ink-muted italic opacity-60">به‌زودی …</li>
    </ul></div>
  </div>

  <div class="h-px bg-line mx-3"></div>

  <!-- ══ آکادمی من ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="toggleGroup(this,'g-academy')">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
    آکادمی من
    <svg class="chevron w-4 h-4 mr-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>
  <div class="submenu" id="g-academy">
    <div><ul class="sub-list pb-1 pt-0.5">
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>داشبورد</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>مقاله</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>تجربه فنی</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>پرسش و پاسخ</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>دوره آموزشی</li>
      <li class="sub-item-row flex items-center gap-1.5 pr-10 pl-4 py-[7px] text-[13px] text-ink-muted hover:text-brand-600 cursor-pointer transition-colors" onclick="activateSub(this)"><span class="sub-dot"></span>شهرفایل</li>
    </ul></div>
  </div>

  <div class="h-px bg-line mx-3"></div>

  <!-- ══ نشان‌شده‌ها ══ -->
  <button class="nav-top w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ink transition-colors"
          onclick="activateTop(this)">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
    نشان‌شده‌ها
  </button>

  <!-- ══ خروج ══ -->
  <div class="h-px bg-line mx-3 mt-1"></div>
  <button class="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
          onclick="handleLogout()">
    <svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
    خروج از حساب
  </button>

</nav>

<script>
  function clearAllTop() {
    document.querySelectorAll('.nav-top').forEach(b => {
      b.classList.remove('is-active','text-white','font-semibold');
      b.classList.add('text-ink');
    });
    document.querySelectorAll('[id^="g-"]').forEach(sm => {
      sm.parentElement.classList.remove('active-group');
    });
  }

  function setTopActive(btn) {
    btn.classList.add('is-active','text-white','font-semibold');
    btn.classList.remove('text-ink');
  }

  function closeAll(exceptId) {
    document.querySelectorAll('.submenu.open').forEach(sm => {
      if (sm.id === exceptId) return;
      sm.classList.remove('open');
      const btn = sm.previousElementSibling;
      btn?.querySelector('.chevron')?.classList.remove('up');
    });
  }

  function activateTop(btn) {
    clearAllTop();
    closeAll(null);
    setTopActive(btn);
  }

  function toggleGroup(btn, id) {
    const sm   = document.getElementById(id);
    const open = sm.classList.contains('open');
    clearAllTop();
    closeAll(null);
    if (!open) {
      sm.classList.add('open');
      btn.querySelector('.chevron')?.classList.add('up');
      setTopActive(btn);
      sm.parentElement.classList.add('active-group');
    }
  }

  function activateSub(li) {
    document.querySelectorAll('.sub-item-row.active').forEach(el => {
      el.classList.remove('active','text-brand-600','font-medium');
      el.classList.add('text-ink-muted');
    });
    li.classList.add('active','text-brand-600','font-medium');
    li.classList.remove('text-ink-muted');
  }

  function handleLogout() {
    if (confirm('آیا از حساب کاربری خود خارج می‌شوید؟')) alert('خروج موفق');
  }

  document.querySelectorAll('.nav-top, .sub-item-row').forEach(el => {
    el.setAttribute('tabindex','0');
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });
</script>
</body>
</html>
`}
    </div>
  );
};

export default AutoContent;
