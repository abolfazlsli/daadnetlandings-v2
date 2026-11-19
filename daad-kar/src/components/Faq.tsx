"use client";

import { Collapse, type CollapseProps } from "antd";
import { PlusCircleIcon } from "./icons";

const FAQ = [
  {
    q: "اگر ندانم چه شغلی برای من مناسب است، دادکار چطور کمک می‌کند؟",
    a: "با آزمون استعدادیابی دادکار علایق، ویژگی‌ها و توانایی‌هایت را می‌شناسی و چند مسیر شغلی پیشنهادی را همراه با دلیل انتخابشان می‌بینی.",
  },
  {
    q: "ارزیابی مهارت در دادکار چگونه انجام می‌شود؟",
    a: "برای هر مهارت آزمون‌های کوتاه و کاربردی طراحی شده است؛ پس از پایان آزمون، سطح فعلی و نقاطی که نیاز به تقویت دارند را می‌بینی.",
  },
  {
    q: "فرصت‌های شغلی چگونه به کارجو پیشنهاد می‌شوند؟",
    a: "بر اساس نتیجه استعدادیابی، مهارت‌های ارزیابی‌شده و اطلاعات رزومه‌ات، آگهی‌هایی که بیشترین تطابق را با تو دارند پیشنهاد می‌شوند.",
  },
  {
    q: "کارفرما چگونه می‌تواند نیروی مناسب پیدا کند؟",
    a: "کارفرما درخواست نیرو را با مهارت‌های موردنیاز ثبت می‌کند و دادکار کارجویانی را که این مهارت‌ها را در آزمون‌ها نشان داده‌اند معرفی می‌کند.",
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
    <section className="shell mt-[150px]">
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
