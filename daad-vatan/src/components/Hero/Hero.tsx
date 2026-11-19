import Image from "next/image";
import { Button } from "antd";
import scale from "../../../public/images/scale.png";
import { ArrowLeftIcon, BellIcon } from "../icons";
import styles from "./Hero.module.css";
import Logo from "../../../public/images/logo.png"

const NAV = [
  { label: "خدمات", href: "#services" },
  { label: "درباره ما", href: "#why" },
  { label: "ارتباط با ما", href: "#contact" },
];

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="shell">
        <nav className={styles.nav}>
          <div className={styles.navRight}>
            <div className="w-fit flex justify-center items-center">
              <div className="">
                <Image src={Logo.src} alt="logo" width={50} height={50} />
              </div>
              <a href="#" className={styles.logo}>
                دادخرد
              </a>
            </div>
            <ul className={styles.links}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navLeft}>
            <button type="button" className={styles.bell} aria-label="اعلان‌ها">
              <BellIcon size={22} />
            </button>
            <Button className={`${styles.authBtn} bg-[#FFC300]`}>ورود / ثبت نام</Button>
          </div>
        </nav>

        <div className={styles.body}>
          <div className={styles.copy}>
            <p className={`${styles.kicker} text-[#F5D153]!`}>
              آگاهی برای آینده ایران
            </p>
            <h1 className={styles.title}>
              شناخت مسائل ایران  از آگاهی تا اقدام
            </h1>
            <p className={styles.lead}>
              سامانه تعاملی آگاهی سیاسی، اجتماعی و تاریخی درباره ایران
            </p>
            <p className={styles.lead}>
              از معیشت و اشتغال تا عدالت، حکمرانی و هویت ملی؛ دغدغه‌تان را انتخاب کنید، تحلیل مستند و دیدگاه‌های مختلف را بخوانید و راه‌های قانونی و عملی پیش روی خود را بشناسید.
            </p>
            <div className={styles.actions}>
              <Button className={`${styles.primaryBtn} bg-[#FFC300]! text-[#222222]!`}>
                شروع پرسشنامه
                <ArrowLeftIcon size={26} />
              </Button>
              <a href="#" className={styles.ghostLink}>
                ورود همکار خدمات
              </a>
            </div>
          </div>

          <div className={styles.visual}>
            <span className={styles.halo} />
            <Image src={scale} alt="ترازوی عدالت" priority className={styles.scale} />
          </div>
        </div>
      </div>
    </header>
  );
}
