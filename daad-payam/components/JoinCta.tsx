import { Button } from "antd";
import { Swash, UserCircleIcon } from "./icons";

export default function JoinCta() {
  return (
    <section className="shell mt-24 flex flex-col items-center text-center">
      <h2 className="text-3xl font-black md:text-[40px]">به گفت وگو بپیوندید</h2>
      <p className="mt-4 text-xl font-medium text-muted md:text-[30px]">دیدگاهت را بنویس و موضوعات مورد علاقه ات را دنبال کن</p>
      <Swash className="mt-3 w-[300px] md:w-[480px]" />
      <Button
        type="primary"
        className="mt-10 !h-[72px] !w-full !max-w-[519px] !gap-3 !rounded-2xl !bg-brand !text-2xl !font-extrabold !shadow-none hover:!bg-[#d80200] md:!h-[82px] md:!text-[30px]"
      >
        ساخت حساب کاربری
        <UserCircleIcon size={40} strokeWidth={1.3} />
      </Button>
    </section>
  );
}
