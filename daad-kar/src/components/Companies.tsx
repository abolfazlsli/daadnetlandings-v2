import Image from "next/image";
import companies from "../../public/images/companies.png";

export default function Companies() {
  return (
    <section className="shell mt-[60px]">
      <h2 className="text-2xl font-black md:text-[30px]">لیست شرکت ها</h2>
      <Image
        src={companies}
        alt="مایکت، همراه اول، ایران شرق، داکلاس، هدویگ، دیدار"
        className="mx-auto mt-[52px] h-auto w-full max-w-[1051px]"
      />
    </section>
  );
}
