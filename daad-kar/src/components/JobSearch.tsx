"use client";

import { Button, Input, Select } from "antd";
import { useJobStore } from "@/store/jobStore";
import { ChevronDownIcon, PinIcon, SearchIcon } from "./icons";

const CITIES = [
  { value: "all", label: "همه شهر ها" },
  { value: "tehran", label: "تهران" },
  { value: "mashhad", label: "مشهد" },
  { value: "isfahan", label: "اصفهان" },
  { value: "shiraz", label: "شیراز" },
  { value: "tabriz", label: "تبریز" },
  { value: "karaj", label: "کرج" },
];

export default function JobSearch() {
  const { query, city, loading, setQuery, setCity, load } = useJobStore();

  const search = async () => {
    await load();
    document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="shell mt-6 lg:-mt-6">
      <h2 className="text-[26px] font-black md:text-[30px]">شغل موردنظرت چیه ؟</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
        className="mx-auto mt-12 flex max-w-[1222px] flex-col gap-3 rounded-[18px] bg-white p-3 shadow-[0_4px_14px_rgba(0,0,0,0.12)] md:flex-row-reverse md:gap-6 md:p-[13px]"
      >
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          className="!h-[64px] !rounded-[14px] !bg-brand !text-xl !font-medium !shadow-none hover:!bg-brand-600 md:!h-[87px] md:!w-[258px] md:!text-2xl"
        >
          جستجو کنید
        </Button>

        <div className="flex flex-1 flex-col rounded-2xl border border-[#ececf0] bg-field md:flex-row md:items-center">
          <label className="flex flex-1 items-center gap-4 px-4 py-3 md:py-0">
            <SearchIcon size={44} className="shrink-0 text-[#292D32]" strokeWidth={1.5} />
            <Input
              variant="borderless"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="عنوان شغل تون را وارد کنید"
              className="!px-0 !text-lg md:!text-[22px]"
            />
          </label>
          <span className="mx-4 h-px bg-[#d5d5d5] md:mx-0 md:h-[62px] md:w-px" />
          <div className="flex items-center gap-4 px-4 py-3 md:w-[400px] md:py-0">
            <PinIcon size={36} className="shrink-0 text-[#292D32]" strokeWidth={1.5} />
            <div className="flex-1">
              <span className="block text-xl font-bold md:text-[22px]">شهر</span>
              <Select
                variant="borderless"
                value={city}
                onChange={setCity}
                options={CITIES}
                suffixIcon={<ChevronDownIcon size={22} className="text-ink" />}
                className="!-mt-1 w-full [&_.ant-select-selection-item]:!text-lg [&_.ant-select-content]:!text-lg md:[&_.ant-select-selection-item]:!text-[22px] md:[&_.ant-select-content]:!text-[22px]"
                classNames={{ root: "!px-0" }}
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
