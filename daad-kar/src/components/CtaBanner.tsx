import { Button } from "antd";
import banner from "../../public/images/cta-banner.png";
import { ChevronLeftIcon } from "./icons";

export default function CtaBanner() {
  return (
    <section className="shell mt-[100px]">
      <div
        className="flex min-h-[208px] flex-col items-center justify-center gap-6 rounded-[30px] bg-cover bg-left px-6 py-8 text-center md:flex-row md:justify-between md:pr-[330px] md:pl-[46px] md:text-right"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div>
          <h2 className="text-xl font-extrabold md:text-[28px]">
            آماده ای <span className="text-brand-bright">مسیر شغلی</span> مناسب خودت را پیدا کنی؟
          </h2>
          <p className="mt-3 text-sm text-[#444]">
            مهارت هایت را بسنج، استعدادت را بشناس و به فرصت های شغلی مناسب دسترسی پیدا کن
          </p>
        </div>
        <Button
          type="primary"
          href="#talent"
          className="!h-[68px] !w-[245px] shrink-0 !gap-3 !rounded-2xl !bg-brand !text-xl !font-medium !shadow-none hover:!bg-brand-600"
        >
          شروع مسیر شغلی
          <ChevronLeftIcon size={22} />
        </Button>
      </div>
    </section>
  );
}
