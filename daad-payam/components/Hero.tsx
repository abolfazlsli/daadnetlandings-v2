import Image from "next/image";
import { Button } from "antd";
import chat from "@/public/images/hero-chat.png";
import { ArrowLeftIcon, BellIcon, ChatLogo } from "./icons";

const NAV = [
  { label: "کاوش", href: "#explore" },
  { label: "انجمن ها", href: "#communities" },
  { label: "شیوه رتبه بندی", href: "#ranking" },
];

export default function Hero() {
  return (
    <header className="bg-coral pb-10 text-white">
      <div className="shell">
        <nav className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-6 lg:gap-[90px]">
            <a href="#" className="text-[26px] font-black md:text-[32px] text-white">
              دادپیام
            </a>
            <ul className="hidden items-center gap-[50px] md:flex">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-xl transition-opacity hover:opacity-75">
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
              className="grid size-[46px] cursor-pointer place-items-center rounded-full bg-white text-ink"
            >
              <BellIcon size={24} />
            </button>
            <Button className="!h-[46px] !rounded-[10px] !border-0 !px-4 !text-[15px] !text-ink md:!w-[167px] md:!text-[17px]">
              ورود / ثبت نام
            </Button>
          </div>
        </nav>

        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-right">
            <h1 className="text-[32px] leading-[1.55] font-black md:text-[46px]">
              بنویس، گفت‌وگو کن،
              <br />
              بر پایه توانایی‌هایت
              <br />
              دیده شو.
            </h1>
            <p className="mt-6 max-w-[515px] text-lg leading-[1.6] md:text-[21px]">
              دادپیام، پیام رسان و شبکه ای اجتماعی برای گفت وگو و <b className="font-extrabold">اشتراک دیدگاه</b> هاست.
              اینجا توانایی تو در دیده شدن پست هایت نقش دارد
            </p>
            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:gap-16">
              <Button className="!h-[58px] !w-[217px] !rounded-[14px] !border-0 !text-[17px] !font-extrabold !text-ink">
                پیوستن به دادپیام
              </Button>
              <a
                href="#explore"
                className="flex items-center gap-3 text-[17px] font-extrabold transition-[gap] hover:gap-5"
              >
                مشاهده گفت وگو
                <ArrowLeftIcon size={24} />
              </a>
            </div>
          </div>
          <Image
            src={chat}
            alt="حباب گفت‌وگو"
            priority
            className="order-first h-auto w-[300px] drop-shadow-[0_40px_30px_rgba(120,20,20,0.25)] md:order-none md:mt-6 md:ml-[60px] md:w-[470px]"
          />
        </div>
      </div>
    </header>
  );
}
