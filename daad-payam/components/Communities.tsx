"use client";

import Image from "next/image";
import { useEffect, useState, type ComponentType } from "react";
import { Button, Empty, Skeleton } from "antd";
import { useCommunityStore } from "@/store/communityStore";
import type { CategoryKey, Community } from "@/lib/api";
import { ArrowLeftIcon, ChipIcon, MindIcon, OpenBookIcon, PresentationIcon } from "./icons";

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "همه" },
  { key: "business", label: "کسب کار" },
  { key: "legal", label: "حقوقی" },
  { key: "more", label: "بیشتر" },
];

const ICONS: Record<Community["icon"], ComponentType<{ size?: number; className?: string }>> = {
  tech: ChipIcon,
  culture: OpenBookIcon,
  psychology: MindIcon,
  economy: PresentationIcon,
};

// the design highlights this card; the rest light up on hover
const FEATURED = "culture";

function CommunityCard({ community }: { community: Community }) {
  const Icon = ICONS[community.icon];
  const [featured , setFeatured] = useState<boolean>(false)

  return (
    <article
      onMouseMove={() => setFeatured(true)}
      onMouseLeave={() => setFeatured(false)}
      className={`group flex flex-col rounded-[20px] border border-[#d9d9d9] bg-white p-1 pb-4 text-center transition-shadow hover:shadow-[0_14px_34px_rgba(0,0,0,0.1)] ${
        featured ? "is-featured" : ""
      }`}
    >
      <div className="relative">
        <div className="h-[110px] overflow-hidden rounded-t-[16px] bg-gradient-to-br from-[#bdbdbd] to-[#6f6f6f]">
          {community.image && (
            <Image
              src={community.image}
              alt=""
              width={292}
              height={108}
              className={`size-full object-cover transition-[filter] duration-300 ${
                featured ? "" : "blur-[3px] grayscale group-hover:blur-none group-hover:grayscale-0"
              }`}
            />
          )}
        </div>
        <span
          className={`absolute -bottom-4 left-1/2 grid size-[74px] -translate-x-1/2 place-items-center rounded-xl ${
            featured ? "bg-white text-[#508200]" : "bg-tile text-[#333]"
          }`}
        >
          <Icon size={38} />
        </span>
      </div>
      <h3 className="mt-8 text-[26px] font-black md:text-[28px]">{community.title}</h3>
      <p className="mx-auto mt-3 max-w-[220px] text-base leading-[1.7] md:text-[17px]">{community.description}</p>
      <Button
        className={`mx-3.5 mt-5 !h-[55px] !gap-3 !rounded-lg !border-0 !text-base !text-white ${
          featured ? "!bg-brand" : "!bg-charcoal group-hover:!bg-brand"
        }`}
      >
        مشاهده انجمن
        <ArrowLeftIcon size={22} className={featured ? "text-white" : "text-brand group-hover:text-white"} />
      </Button>
    </article>
  );
}

export default function Communities() {
  const { category, communities, loading, error, setCategory, load } = useCommunityStore();

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section id="communities" className="shell mt-12 lg:mt-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-black md:text-[32px]">انجمن مرتبط با توانایی ات را پیدا کن</h2>
        <a href="#" className="flex shrink-0 items-center gap-2 text-[17px] font-bold text-brand">
          مشاهده همه
          <ArrowLeftIcon size={22} />
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setCategory(c.key)}
            className={`h-[42px] cursor-pointer rounded-full px-8 text-xl transition-colors md:min-w-[145px] md:text-2xl ${
              category === c.key ? "bg-brand font-extrabold text-white md:min-w-[122px]" : "bg-chip text-[#333] hover:bg-[#e2e2e2]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
        {loading && !communities.length
          ? Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="rounded-[20px] bg-white p-5">
                <Skeleton active />
              </div>
            ))
          : communities.map((c) => <CommunityCard key={c.id} community={c} />)}
      </div>
      {!loading && !communities.length && (
        <Empty className="!my-10" description={error ?? "انجمنی در این دسته پیدا نشد"} />
      )}
    </section>
  );
}
