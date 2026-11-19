const STEPS = [
  {
    title: "شناخت علایق و استعداد ها",
    description: "مسیرهای شغلی سازگار با علایق و توانایی‌هایت را پیدا کن.",
  },
  {
    title: "مهارتت را بسنج، روزمه ات را بساز",
    description: "مهارت‌هایت را ارزیابی کن و توانایی‌ها و سوابقت را در یک رزومه حرفه‌ای نشان بده.",
  },
  {
    title: "دسترسی آسان به نیرو متخصص",
    description: "با توجه به آزمون ها و مهارت سنجی هایی که سیستم انجام میدهد،نیروهای متخصص را پیدا کنید",
  },
];

export default function HowItHelps() {
  return (
    <section className="shell mt-14">
      <div className="relative flex flex-col overflow-hidden rounded-[40px] border border-mint-line bg-mint-soft lg:min-h-[220px] lg:flex-row">
        {/* purple tab with a wavy inner edge */}
        <div className="relative flex shrink-0 items-center justify-center bg-brand px-6 py-6 lg:w-[200px] lg:bg-transparent lg:p-0">
          <svg
            viewBox="0 0 200 220"
            preserveAspectRatio="none"
            className="absolute inset-0 hidden size-full lg:block"
            aria-hidden
          >
            <path
              fill="#5603AD"
              d="M47 0H200V220H75C66 214 62 205 50 200C30 192 16 180 18 160C20 138 38 128 38 112C38 96 6 90 0 66C-4 46 14 36 30 34C44 32 48 22 47 0Z"
            />
          </svg>
          <h2 className="relative text-center text-[26px] leading-[1.6] font-black text-white lg:pr-10 lg:text-right">
            دادکار
            <br className="hidden lg:block" /> چطور
            <br className="hidden lg:block" /> کمکت
            <br className="hidden lg:block" /> میکنه ؟
          </h2>
        </div>

        <div className="grid flex-1 divide-y divide-mint-line py-2 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:py-[30px]">
          {STEPS.map((step) => (
            <div key={step.title} className="flex flex-col items-center justify-center px-6 py-6 text-center lg:px-3 lg:py-0">
              <h3 className="text-xl font-extrabold lg:text-[23px] lg:whitespace-nowrap">{step.title}</h3>
              <p className="mt-4 max-w-[290px] text-[13px] leading-[1.8] text-ink">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
