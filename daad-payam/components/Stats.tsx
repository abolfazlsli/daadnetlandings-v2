import { Button } from "antd";
import type { ComponentType } from "react";
import { CommunityIcon, DocIcon, GridIcon, StarIcon, UsersFrameIcon } from "./icons";

const STATS: { value: string; label: string; Icon: ComponentType<{ size?: number; strokeWidth?: number }> }[] = [
  { value: "۹۰%", label: "محتوای مفید و با کیفیت", Icon: StarIcon },
  { value: "۱۰۰+", label: "موضوع مختلف", Icon: GridIcon },
  { value: "۱۲۰K+", label: "کاربر فعال", Icon: UsersFrameIcon },
  { value: "۵۰K+", label: "پست تخصصی", Icon: DocIcon },
];

export default function Stats() {
  return (
    <section className="shell mt-24">
      <div className="flex flex-col gap-3.5 text-white lg:flex-row">
        <div className="relative flex-1 rounded-3xl bg-graphite px-6 py-6 lg:px-12">
          {/* ticket notches facing the join box */}
          <span className="absolute top-6 -left-2 hidden h-[26px] w-4 rounded-full bg-surface lg:block" />
          <span className="absolute bottom-6 -left-2 hidden h-[26px] w-4 rounded-full bg-surface lg:block" />
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(({ value, label, Icon }) => (
              <li key={label} className="flex flex-col items-center text-center">
                <span className="grid size-[120px] place-items-center rounded-[20px] bg-white text-brand md:size-[141px]">
                  <Icon size={78} strokeWidth={1.1} />
                </span>
                <b className="mt-3 text-xl font-extrabold" dir="ltr">
                  {value}
                </b>
                <span className="mt-2 text-base">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl bg-graphite px-7 py-6 lg:w-[338px]">
          <CommunityIcon size={84} strokeWidth={1.1} />
          <p className="mt-2 text-[15px]">به جامعه دادپیام بپیوندید</p>
          <Button className="mt-8 !h-12 !w-full !rounded-lg !border-0 !text-[15px] !font-extrabold !text-brand">
            عضویت رایگان
          </Button>
        </div>
      </div>
    </section>
  );
}
