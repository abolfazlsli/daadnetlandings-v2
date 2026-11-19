import Image from "next/image";
import { Button } from "antd";
import thinking from "../../public/images/thinking.png";
import { QuestionDoodle } from "./icons";

export default function TalentBanner() {
  return (
    <section id="talent" className="relative mt-[74px] overflow-hidden bg-sun">
      <svg
        viewBox="0 0 1440 516"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden size-full lg:block"
        aria-hidden
      >
        <path fill="#5603AD" d="M0 0H585C680 60 700 160 695 260C690 360 760 400 880 420C960 436 992 474 985 516H0Z" />
      </svg>

      <div className="shell relative flex flex-col items-center gap-10 py-12 lg:min-h-[516px] lg:flex-row-reverse lg:items-end lg:justify-between lg:py-0">
        <div className="relative w-full max-w-[500px] shrink-0 lg:mt-10">
          <svg viewBox="0 0 400 430" className="absolute top-0 left-[9%] w-[82%]" aria-hidden>
            <path
              fill="#FFC3FE"
              d="M120 22C180-6 236 18 284 6c52-12 98 24 100 80 2 50-30 82-20 136 10 52 50 92 26 150-22 52-84 60-150 58-70-2-162 6-210-46C-12 334 14 272 26 214 38 156 10 120 30 82 46 50 82 40 120 22Z"
            />
          </svg>
          <QuestionDoodle className="absolute top-0 right-[10%] w-[70px]" />
          <Image src={thinking} alt="جوان در حال فکر کردن" className="relative h-auto w-full" />
        </div>

        <div className="text-center lg:mb-[138px] lg:text-right">
          <h2 className="text-[26px] font-black md:text-4xl">هنوز نمی دانی چه شغلی مناسبی توست ؟</h2>
          <p className="mt-8 text-xl leading-[1.75] md:text-[28px] lg:max-w-[560px]">
            علاقه و ویژگی هایت را بشناس و مسیر های پیشنهادی رابا دلیل بررسی کن
          </p>
          <Button className="mt-14 !h-[72px] !w-full !max-w-[487px] !rounded-3xl !border-0 !bg-white !text-2xl !font-extrabold !text-brand-bright md:!h-[95px] md:!text-[30px] lg:ml-auto lg:!flex">
            شروع استعدادیابی
          </Button>
        </div>
      </div>
    </section>
  );
}
