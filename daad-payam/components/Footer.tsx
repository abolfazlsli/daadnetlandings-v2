"use client";

import { ArrowUpIcon, ChatLogo } from "./icons";

// Links are display-only for now; fill in the real hrefs later.
const COLUMNS = [
  { title: "دادپیام", links: ["درباره ما", "انجمن ها", "موضوعات محبوب", "قوانین محتوا", "تماس با ما"] },
  {
    title: "برای کاربران",
    links: ["ساخت پروفایل", "انتشار نوشته", "دنبال کردن موضوعات", "رتبه و توانایی کاربر", "راهنمای کاربر"],
  },
  { title: "برای انجمن ها", links: ["ایجاد انجمن", "مدیریت انجمن", "جذب اعضا", "قوانین انجمن", "راهنمای انجمن"] },
  { title: "پشتیبانی", links: ["سوالات متداول", "راهنمای استفاده", "شرایط و قوانین", "حریم خصوصی", "تماس با پشتیبانی"] },
];

export default function Footer() {
  return (
    <footer className="relative mt-[170px] bg-white pt-[52px]">
      {/* notch holding the back-to-top button */}
      <span className="absolute -top-px left-1/2 h-[48px] w-[96px] -translate-x-1/2 rounded-b-full bg-surface" />
      <button
        type="button"
        aria-label="بازگشت به بالا"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute -top-8 left-1/2 grid size-[62px] -translate-x-1/2 cursor-pointer place-items-center rounded-full bg-blush text-brand transition-transform hover:-translate-y-1"
      >
        <ArrowUpIcon size={40} strokeWidth={1.6} />
      </button>

      <div className="shell">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-line pb-12 md:grid-cols-4 xl:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div className="col-span-full xl:col-span-1">
            <div className="flex items-center gap-1 text-[34px] font-black text-brand">
              <ChatLogo className="h-[48px] w-[64px]" />
              دادپیام
            </div>
            <p className="mt-5 text-lg font-extrabold md:text-xl">دادپیام فقط یک سامانه اجتماعی نیست</p>
            <p className="mt-2 text-lg leading-[1.85] font-medium text-[#444] md:text-xl">
              فضایی برای گفت‌وگو، اشتراک دانش و دیده‌شدن بر پایه توانایی‌هاست. در دادپیام، کیفیت مشارکت و تخصص کاربران در
              کشف محتوا و گسترش گفت‌وگوها نقش دارد.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="pt-2">
              <h4 className="text-lg font-extrabold md:text-[22px]">{col.title}</h4>
              <ul className="mt-6 flex flex-col gap-6">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-[#555] transition-colors hover:text-brand md:text-[22px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 py-12 text-center md:flex-row md:gap-[52px] md:text-right">
          <p className="text-xl leading-[1.9] text-[#444]">
            ©1405 دادپیام
            <br />
            تمامی حقوق محفوظ است.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-[26px]">
            <div className="flex h-[68px] w-[224px] items-center justify-end rounded-xl bg-badge px-3 text-[11px] font-extrabold text-[#1a4c9c]">
              eNAMAD
            </div>
            <div className="flex h-[68px] w-[224px] items-center justify-end rounded-xl bg-badge px-2">
              <span className="rounded-md bg-[#ffd800] px-1.5 py-4 text-[11px] font-extrabold">ZarinPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
