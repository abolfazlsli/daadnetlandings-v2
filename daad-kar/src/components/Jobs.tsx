"use client";

import { useEffect } from "react";
import { Button, Empty, Skeleton } from "antd";
import { useJobStore } from "@/store/jobStore";
import type { Job } from "@/lib/api";
import { ArrowLeftIcon, BriefcaseIcon, BuildingIcon, PinIcon } from "./icons";

const toman = (n: number) => `${n.toLocaleString("fa-IR")} تومان`;

function JobCard({ job }: { job: Job }) {
  const rows = [
    { Icon: BuildingIcon, text: job.company },
    { Icon: PinIcon, text: job.address },
    { Icon: BriefcaseIcon, text: job.cooperation },
  ];

  return (
    <article className="rounded-[20px] border border-[#e2e2e2] bg-white px-4 pt-[14px] pb-[18px]">
      <div className="flex justify-between gap-4">
        <div>
          <h3 className="text-[22px] font-extrabold">{job.title}</h3>
          <ul className="mt-2 flex flex-col gap-3">
            {rows.map(({ Icon, text }, i) => (
              <li key={i} className="flex items-center gap-2 text-base font-medium">
                <Icon size={24} className="text-[#9a9a9a]" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div className="size-[98px] rounded-xl bg-[#8e8e8e]" />
          <div>
            <p className="text-[13px] text-muted">حقوق پیشنهادی</p>
            <p className="mt-1 text-base font-extrabold text-money">{toman(job.salary)}</p>
          </div>
        </div>
      </div>
      <hr className="mx-3 mt-4 border-[#b8b8b8]" />
      <div className="mt-[18px] flex gap-[26px] px-2">
        <Button
          type="primary"
          className="!h-11 flex-1 !rounded-[10px] !bg-brand-600 !text-base !font-medium !shadow-none hover:!bg-brand"
        >
          ارسال روزمه
        </Button>
        <Button className="!h-11 flex-1 !rounded-[10px] !border-brand-600 !text-base !font-medium !text-brand-600">
          مشاهده جزئیات
        </Button>
      </div>
    </article>
  );
}

export default function Jobs() {
  const { jobs, loading, error, load } = useJobStore();

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section id="jobs" className="shell mt-[78px] scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black md:text-[30px]">آگهی های شغلی برای شما</h2>
        <a href="#" className="flex shrink-0 items-center gap-2 text-base font-bold whitespace-nowrap text-brand-600 md:gap-3 md:text-[22px]">
          مشاهده همه
          <ArrowLeftIcon size={40} strokeWidth={1.8} />
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[29px]">
        {loading && !jobs.length
          ? Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="rounded-[20px] bg-white p-5">
                <Skeleton active />
              </div>
            ))
          : jobs.map((job) => <JobCard key={job.id} job={job} />)}
      </div>

      {!loading && !jobs.length && (
        <Empty className="!my-10" description={error ?? "آگهی‌ای با این مشخصات پیدا نشد"} />
      )}
    </section>
  );
}
