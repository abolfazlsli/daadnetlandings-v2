import Image, { type StaticImageData } from "next/image";
import { Button } from "antd";
import skillTest from "../../public/images/skill-test.png";
import resume from "../../public/images/resume.png";

type Card = { title: string; description: string; cta: string; image: StaticImageData };

const CARDS: Card[] = [
  {
    title: "مهارتت را بسنج",
    description: "سطح مهارتت را بشناس و ببین کجا به پیشرفت نیاز داری.",
    cta: "شروع ارزیابی مهارت",
    image: skillTest,
  },
  {
    title: "روزمه حرفه ای بساز",
    description: "مهارت‌ها و سوابقت را در یک رزومه منظم و حرفه‌ای معرفی کن.",
    cta: "ساخت روزمه",
    image: resume,
  },
];

const STEPS = [
  {
    title: "شغل دلخواهت را انتخاب کن",
    description: "شغل دلخواهت را مشخص کن؛ اگر هنوز نمی‌دانی، از استعدادیابی شروع کن.",
  },
  { title: "مهارت‌های موردنیاز را بشناس", description: "ببین این شغل به چه مهارت‌هایی و در چه سطحی نیاز دارد." },
  { title: "مسیر یادگیری‌ات را دنبال کن", description: "براساس ارزیابی، اولویت‌های یادگیری و تمرینت را مشخص کن." },
];

export default function SkillCards() {
  return (
    <section id="skills" className="shell mt-[92px]">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-11">
        {CARDS.map((c) => (
          <article
            key={c.title}
            className="flex flex-col-reverse items-center gap-6 rounded-[30px] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.12)] sm:flex-row sm:items-stretch sm:gap-9 sm:py-[34px] sm:pr-9 sm:pl-[30px]"
          >
            <div className="flex flex-1 flex-col text-center sm:text-right">
              <h3 className="text-[26px] font-extrabold md:text-[28px]">{c.title}</h3>
              <p className="mt-5 max-w-[290px] text-lg leading-[1.8] text-[#333] sm:max-w-none">{c.description}</p>
              <Button
                type="primary"
                className="mt-auto !h-[57px] !w-full !rounded-[10px] !bg-brand !text-lg !font-medium !shadow-none hover:!bg-brand-600 sm:!w-[290px] max-sm:mt-6"
              >
                {c.cta}
              </Button>
            </div>
            <div className="grid h-[210px] w-[225px] shrink-0 place-items-center rounded-2xl border border-[#c9efd5] bg-mint-soft">
              <Image src={c.image} alt="" className="h-[170px] w-auto object-contain" />
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-12 text-white">
        <svg
          viewBox="0 0 1280 375"
          preserveAspectRatio="none"
          className="absolute inset-0 hidden size-full lg:block"
          aria-hidden
        >
          <defs>
            <linearGradient id="skill-path" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#420075" />
              <stop offset="1" stopColor="#1C005B" />
            </linearGradient>
          </defs>
          <path
            fill="url(#skill-path)"
            d="M40 0H1130Q1170 0 1170 40V57Q1170 97 1210 97H1240Q1280 97 1280 137V335Q1280 375 1240 375H188Q148 375 148 335V282Q148 242 108 242H40Q0 242 0 202V40Q0 0 40 0Z"
          />
        </svg>
        <div className="relative flex flex-col gap-10 rounded-[40px] bg-gradient-to-br from-brand-deep to-brand-night px-6 py-10 lg:min-h-[375px] lg:flex-row lg:items-stretch lg:gap-10 lg:rounded-none lg:bg-none lg:py-0 lg:pr-8 lg:pl-[124px]">
          <div className="lg:mt-[140px] lg:w-[548px]">
            <h3 className="text-[22px] font-extrabold md:text-[26px]">برای شغل دلخواهت، چه مهارت‌هایی لازم داری؟</h3>
            <p className="mt-6 text-base leading-[1.9] md:text-lg">
              با انتخاب شغل مورد نظرت، میتوانی مهارت های لازم را بشناسی و برای رسیدن به آن برنامه ریزی کنی.
            </p>
          </div>
          <span className="hidden w-px self-stretch bg-white/90 lg:my-[42px] lg:block" />
          <ol className="flex flex-col gap-8 lg:mt-[30px] lg:mb-[40px] lg:gap-[30px]">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <h4 className="flex items-baseline gap-3 text-xl font-extrabold md:text-[22px]">
                  <span className="text-[32px] font-normal md:text-4xl">{i + 1}</span>
                  {s.title}
                </h4>
                <p className="mt-2 text-sm md:text-[15px]">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
