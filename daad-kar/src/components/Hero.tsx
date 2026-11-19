import Image from "next/image";
import { Button } from "antd";
import people from "../../public/images/hero-people.png";
import logoMark from "../../public/images/logo-mark.png";
import { BellIcon, BriefcaseIcon, SkillIcon, UserIcon } from "./icons";

const NAV = [
  { label: "فرصت های شغلی", href: "#jobs" },
  { label: "استعدادیابی", href: "#talent" },
  { label: "سنجش مهارت", href: "#skills" },
  { label: "کارفرمایان", href: "#services" },
];

export default function Hero() {
  return (
    <header className="shell">
      <nav className="flex items-center justify-between pt-5">
        <div className="flex items-center gap-6 lg:gap-[72px]">
          <a href="#" className="flex items-center gap-1.5 text-[26px] leading-none font-black text-brand md:text-[34px]">
            <Image src={logoMark} alt="" className="h-9 w-auto md:h-[47px]" priority />
            دادکار
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-base font-medium text-ink transition-colors hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="اعلان‌ها"
            className="grid size-[42px] cursor-pointer place-items-center rounded-full bg-white text-ink"
          >
            <BellIcon size={22} />
          </button>
          <button
            type="button"
            className="flex h-[42px] cursor-pointer gap-2 md:w-[145px] items-center justify-between rounded-lg border-[1.5px] border-brand bg-white px-3 text-[13px] text-ink"
          >
            ورود / ثبت نام
            <UserIcon size={24} className="text-brand" />
          </button>
        </div>
      </nav>

      <div className="mt-6 flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="pt-0 text-center lg:pt-[52px] lg:text-right">
          <p className="text-[22px] font-extrabold text-brand">کار برای همه</p>
          <h1 className="mt-4 text-[30px] leading-[1.75] font-black md:text-[40px]">
            استعدادت را بشناس،
            <br />
            مسیر شغلی ات را بساز
          </h1>
          <p className="mt-8 text-lg md:text-xl">شغل مناسب پیداکن یا نیروی موردنیازت را جذب کن</p>
          <Button
            type="primary"
            href="#talent"
            className="mt-12 !h-[55px] !w-[212px] !rounded-[10px] !bg-brand !text-base !font-medium !shadow-none hover:!bg-brand-600"
          >
            شروع مسیر شغلی
          </Button>
        </div>

        <div className="relative w-full max-w-[690px] shrink-0">
          <svg viewBox="0 0 600 500" className="absolute inset-x-[5%] top-0 w-[90%]" aria-hidden>
            <path
              fill="#D4FFE5"
              d="M118 34C190-4 300 14 368 6c80-9 172 8 178 98 4 70-22 108 6 170 24 54 70 112 12 170-56 56-150 44-242 52-90 8-210 8-262-60-52-66-22-148 6-212 26-62-28-154 52-190Z"
            />
          </svg>
          <Image src={people} alt="کارجو و کارفرما" priority className="relative mx-auto mt-[60px] w-[78%] h-auto" />

          <div className="absolute top-[40%] right-auto left-0 flex size-[104px] flex-col items-center justify-center gap-1 rounded-[18px] bg-white text-sm font-bold shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
            <SkillIcon size={46} className="text-brand" strokeWidth={1.4} />
            مهارت
          </div>
          <div className="absolute bottom-[4%] right-0 md:right-auto md:left-[83%] flex size-[104px] flex-col items-center justify-center gap-1 rounded-[18px] bg-white text-sm font-bold shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
            <BriefcaseIcon size={46} className="text-[#16a34a]" strokeWidth={1.5} />
            فرصت شغلی
          </div>
        </div>
      </div>
    </header>
  );
}
