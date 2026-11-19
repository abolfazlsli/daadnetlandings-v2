"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { Button, Input } from "antd";
import { useCommunityStore } from "@/store/communityStore";
import avatar1 from "@/public/images/avatar-1.png";
import avatar2 from "@/public/images/avatar-2.png";
import avatar3 from "@/public/images/avatar-3.png";
import avatar4 from "@/public/images/avatar-4.png";
import {
  ArrowLeftIcon,
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  RepostIcon,
  SearchIcon,
  UserCircleIcon,
  VerifiedIcon,
} from "./icons";

const SUGGESTED: { id: string; name: string; members: string; avatar: StaticImageData }[] = [
  { id: "ai", name: "هوش مصنوعی", members: "12 هزار عضو", avatar: avatar1 },
  { id: "business", name: "کسب کار", members: "22 هزار عضو", avatar: avatar2 },
  { id: "economy", name: "اقتصاد و بازار", members: "22 هزار عضو", avatar: avatar3 },
  { id: "psychology", name: "روان شناسی", members: "22 هزار عضو", avatar: avatar4 },
];

const TOPICS = ["هوش مصنوعی", "توسعه فردی", "آینده کار", "آینده کار"];

const TABS = [
  { key: "communities", label: "انجمن ها" },
  { key: "people", label: "افراد" },
] as const;

function SeeAll() {
  return (
    <a href="#" className="flex items-center gap-1 text-xs text-brand hover:underline">
      <ArrowLeftIcon size={12} strokeWidth={2} className="order-last" />
      مشاهده همه
    </a>
  );
}

function PostCard() {
  const actions = [
    { Icon: CommentIcon, value: "۵۶۰" },
    { Icon: HeartIcon, value: "۱.۲K" },
    { Icon: RepostIcon, value: "۲K" },
  ];

  return (
    <div className="relative mt-8 md:mt-[50px]">
      {/* red offset blocks peeking out behind the post */}
      <span className="absolute -top-5 -right-8 hidden h-[180px] w-[417px] rounded-[30px] bg-brand md:block" />
      <span className="absolute -bottom-5 left-[-17px] hidden h-[180px] w-[240px] rounded-[30px] bg-brand md:block" />
      <article className="relative rounded-[30px] border border-[#e1e1e1] bg-white px-6 pt-5 pb-6 md:px-6">
        <header className="flex items-center gap-3">
          <span className="grid size-[54px] shrink-0 place-items-center rounded-full bg-[#d9d9d9] text-[#8a8a8a]">
            <UserCircleIcon size={40} strokeWidth={1.2} />
          </span>
          <div>
            <p className="flex flex-wrap items-center gap-1.5">
              <b className="text-[17px] font-extrabold">دکتر حسین چرخکار</b>
              <VerifiedIcon size={18} />
              <span className="text-xs text-muted">وکیل ارشد بین المللی</span>
            </p>
            <p className="text-xs text-brand" dir="ltr">
              @dr.hoseein
            </p>
          </div>
        </header>
        <h3 className="mt-4 text-lg leading-[1.7] font-extrabold md:text-[22px]">
          آیا توافق شفاهی می‌تواند به‌اندازه قرارداد کتبی اعتبار داشته باشد؟
        </h3>
        <p className="mt-3 text-[15px] leading-[1.9] md:text-base">
          در بسیاری از روابط حقوقی، اصل بر این است که توافق طرفین می‌تواند منشأ تعهد باشد؛ اما در عمل، اثبات مفاد یک توافق
          شفاهی ممکن است دشوار شود. به نظر شما در چه مواردی باید حتماً قرارداد مکتوب تنظیم شود و چه ادله‌ای می‌تواند وجود
          یک توافق شفاهی را اثبات کند؟
        </p>
        <footer className="mt-10 flex items-center gap-6 text-brand">
          {actions.map(({ Icon, value }) => (
            <button
              key={value}
              type="button"
              className="flex cursor-pointer items-center gap-1 text-xs text-muted transition-transform hover:scale-110"
            >
              <Icon size={28} className="text-brand" />
              {value}
            </button>
          ))}
          <button type="button" aria-label="ذخیره" className="cursor-pointer transition-transform hover:scale-110">
            <BookmarkIcon size={26} />
          </button>
        </footer>
      </article>
    </div>
  );
}

export default function Explore() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("communities");
  const [query, setQuery] = useState("");
  const { followed, toggleFollow } = useCommunityStore();

  return (
    <section id="explore" className="shell mt-[54px] flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
      <div className="lg:w-[775px]">
        <h2 className="text-2xl font-black md:text-[32px]">گفت وگو از یک موضوع شروع می شود</h2>
        <p className="mt-4 text-lg text-muted md:text-[22px]">
          انجمن مورد علاقه ات را پیدا کن، دیدگاه ها را بخوان و به بحث بپیوند.
        </p>

        <div className="mt-8 flex gap-10 md:pr-0" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={`cursor-pointer border-b-[3px] px-3 pb-2 text-[22px] md:text-2xl ${
                tab === t.key ? "border-brand font-extrabold text-ink" : "border-transparent text-[#8a8a8a]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={tab === "communities" ? "جست وجوی انجمن ها، موضوع یا افراد" : "جست وجوی افراد"}
          prefix={<SearchIcon size={36} className="ml-3 text-brand" strokeWidth={1.8} />}
          className="!mt-10 !h-[72px] !rounded-[20px] !border-[#d9d9d9] !px-5 lg:!w-[707px] [&_input]:!text-lg md:[&_input]:!text-[22px]"
        />

        <PostCard />
      </div>

      <aside className="flex flex-col gap-3 lg:w-[363px]">
        <div className="rounded-3xl border border-[#d9d9d9] bg-white px-3.5 pt-6 pb-4">
          <div className="flex items-center justify-between px-1.5">
            <h3 className="text-[19px] font-extrabold">انجمن های پیشنهادی</h3>
            <SeeAll />
          </div>
          <ul className="mt-5 flex flex-col gap-5">
            {SUGGESTED.map((c) => {
              const isFollowed = followed.includes(c.id);
              return (
                <li key={c.id} className="flex items-center gap-3">
                  <Image src={c.avatar} alt="" className="size-[57px] rounded-full" />
                  <div className="flex-1">
                    <p className="text-[17px] font-extrabold">{c.name}</p>
                    <p className="mt-1 text-xs text-muted">{c.members}</p>
                  </div>
                  <Button
                    type={isFollowed ? "default" : "primary"}
                    onClick={() => toggleFollow(c.id)}
                    className={`!h-8 !w-[104px] !rounded-lg !text-xs !shadow-none ${
                      isFollowed ? "!border-brand !text-brand" : "!bg-brand"
                    }`}
                  >
                    {isFollowed ? "دنبال می‌کنید" : "دنبال کردن"}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-3xl border border-[#d9d9d9] bg-white px-3.5 pt-6 pb-5">
          <div className="flex items-center justify-between px-1.5">
            <h3 className="text-[19px] font-extrabold">موضوعات محبوب</h3>
            <SeeAll />
          </div>
          <ul className="mt-6 flex flex-col gap-7 pr-6">
            {TOPICS.map((t, i) => (
              <li key={i}>
                <a href="#" className="flex items-center gap-8">
                  <span className="text-[40px] leading-none font-black text-hash">#</span>
                  <span>
                    <span className="block text-base font-extrabold">{t}</span>
                    <span className="block text-xs text-muted">12.6 هزار پست</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
