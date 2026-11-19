import Image, { type StaticImageData } from "next/image";
import { Button } from "antd";
import unknownJob from "../../public/images/unknown-job.png";
import findJob from "../../public/images/find-job.png";
import findTalent from "../../public/images/find-talent.png";

type Service = { title: string; description: string; cta: string; href: string; image: StaticImageData };

const SERVICES: Service[] = [
  {
    title: "شغل مناسبم را نمی‌شناسم؟",
    description: "از استعدادیابی شروع کن",
    cta: "شروع استعدادیابی",
    href: "#talent",
    image: unknownJob,
  },
  {
    title: "دنبال کار هستم",
    description: "فرصت های شغلی را ببین",
    cta: "مشاهده فرصت های شغلی",
    href: "#jobs",
    image: findJob,
  },
  {
    title: "دنبال نیرو هستم",
    description: "آگهی نیاز به مهارت را ثبت کن",
    cta: "ثبت درخواست نیرو",
    href: "#",
    image: findTalent,
  },
];

export default function Services() {
  return (
    <section id="services" className="shell mt-[54px] grid gap-6 md:grid-cols-3 lg:gap-[53px]">
      {SERVICES.map((s) => (
        <article
          key={s.title}
          className="flex flex-col items-center rounded-[20px] border border-[#dde6f3] bg-ice px-[26px] pt-6 pb-[26px] text-center transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(86,3,173,0.12)]"
        >
          <Image src={s.image} alt="" className="h-[92px] w-auto object-contain" />
          <h3 className="mt-5 text-[22px] font-extrabold lg:text-2xl">{s.title}</h3>
          <p className="mt-2 text-[15px] text-muted">{s.description}</p>
          <Button
            type="primary"
            href={s.href}
            block
            className="mt-6 !h-[58px] !rounded-[10px] !bg-brand !text-base !font-medium !shadow-none hover:!bg-brand-600"
          >
            {s.cta}
          </Button>
        </article>
      ))}
    </section>
  );
}
