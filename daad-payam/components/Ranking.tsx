import Image, { type StaticImageData } from "next/image";
import ability from "@/public/images/rank-ability.png";
import level from "@/public/images/rank-level.png";
import reach from "@/public/images/rank-reach.png";

type Row = { title: string; text: string; image: StaticImageData; flip?: boolean };

const ROWS: Row[] = [
  {
    title: "توانایی کاربر",
    text: "دانش و مهارت تو در حوزه‌ای که فعالیت می‌کنی ارزیابی می‌شود. این ارزیابی، پایه‌ای برای شناخت توانایی‌هایت و تعیین رتبه تو در دادپیام است.",
    image: ability,
  },
  {
    title: "رتبه کاربر",
    text: "نتیجه ارزیابی توانایی‌هایت در رتبه تو منعکس می‌شود. این رتبه در سازوکار نمایش محتوا نقش دارد و به معنای رقابت با دیگر کاربران نیست",
    image: level,
    flip: true,
  },
  {
    title: "میزان نمایش پست",
    text: "رتبه تو در میزان توزیع و نمایش پست‌هایت اثر می‌گذارد. به این ترتیب، توانایی‌هایت در فرصت دیده‌شدن نوشته‌ها و مشارکتت در گفت‌وگوها نقش دارند.",
    image: reach,
  },
];

export default function Ranking() {
  return (
    <section id="ranking" className="shell mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-black md:text-[32px]">توانایی تو در دیده شدنت نقش دارد</h2>
        <p className="mt-6 text-sm text-muted md:text-base">
          در دادپیام، کاربران بر اساس توانایی شان رتبه بندی می شوند. این رتبه بندی در میزان نمایش پست هاشان نقش دارد.
        </p>
        <a href="#" className="mt-4 inline-block text-xl text-link! underline underline-offset-4 md:text-2xl " style={{color : "#0066FF"}}>
          رتبه بندی چگونه کار میکند؟
        </a>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1067px] flex-col gap-14 md:gap-[84px]">
        {ROWS.map((row) => (
          <div
            key={row.title}
            className={`flex flex-col items-center gap-8 md:flex-row md:justify-between ${
              row.flip ? "md:flex-row-reverse md:pl-[164px]" : "md:pr-0"
            }`}
          >
            <div className={`max-w-[410px] text-center md:text-right ${row.flip ? "md:pt-0" : "md:-mt-6"}`}>
              <h3 className="text-[26px] font-black md:text-[32px]">{row.title}</h3>
              <p className={`text-lg leading-[1.7] text-[#444] md:text-[22px] ${row.flip ? "mt-12" : "mt-3"}`}>{row.text}</p>
            </div>
            <Image
              src={row.image}
              alt=""
              className={`h-auto w-full max-w-[480px] ${
                row.flip ? "md:-mr-[54px]" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
