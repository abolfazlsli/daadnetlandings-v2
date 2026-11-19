"use client";

import { Collapse, type CollapseProps } from "antd";
import { PlusCircleIcon } from "./icons";

const FAQ = [
  {
    q: "دادپیام چگونه باعث دیده‌شدن محتوا می‌شود؟",
    a: "پست‌ها بر اساس کیفیت، ارتباط با موضوع انجمن و رتبه توانایی نویسنده توزیع می‌شوند؛ بنابراین محتوای مفید و تخصصی شانس بیشتری برای دیده‌شدن دارد.",
  },
  {
    q: "توانایی کاربران چگونه ارزیابی می‌شود؟",
    a: "دانش و مهارت هر کاربر در حوزه فعالیتش، از روی کیفیت مشارکت‌ها، بازخورد دیگران و سنجش‌های تخصصی ارزیابی می‌شود.",
  },
  {
    q: "رتبه در دادپیام به معنی رقابت با دیگران است؟",
    a: "خیر؛ رتبه فقط بازتاب توانایی‌های خود توست و در سازوکار نمایش محتوا نقش دارد، نه مقایسه یا رقابت با کاربران دیگر.",
  },
  {
    q: "چطور افراد و انجمن‌های مرتبط با تخصصم را پیدا کنم؟",
    a: "از بخش جست‌وجو یا دسته‌بندی انجمن‌ها استفاده کن؛ دادپیام بر اساس علایق و توانایی‌هایت هم انجمن‌ها و افراد مرتبط را پیشنهاد می‌دهد.",
  },
];

const items: CollapseProps["items"] = FAQ.map((item, i) => ({
  key: String(i),
  label: item.q,
  children: <p className="text-base leading-loose text-muted md:text-lg">{item.a}</p>,
  className: "!rounded-[30px] !border !border-[#dedede] bg-white overflow-hidden",
  classNames: {
    header: "!items-center min-h-[96px] md:min-h-[124px] !px-5 md:!px-[34px] text-lg md:!text-[28px] !font-medium",
    body: "!px-5 md:!px-[34px] !pb-8 !pt-0",
  },
}));

export default function Faq() {
  return (
    <section className="shell mt-28">
      <h2 className="text-center text-3xl font-black md:text-[40px]">سوالات متداول</h2>
      <p className="mt-8 text-center text-2xl font-medium md:text-[32px]">پاسخ به سوالات رایج شما</p>
      <Collapse
        accordion
        ghost
        items={items}
        expandIconPlacement="end"
        expandIcon={({ isActive }) => (
          <span className={`inline-grid text-brand transition-transform ${isActive ? "rotate-45" : ""}`}>
            <PlusCircleIcon size={58} className="max-md:size-10" />
          </span>
        )}
        className="!mt-[60px] flex flex-col gap-[26px]"
      />
    </section>
  );
}
