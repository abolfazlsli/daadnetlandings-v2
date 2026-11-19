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
                دادمهاجر
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
            <Button className={styles.authBtn}>ورود / ثبت نام</Button>
          </div>
        </nav>

        <div className={styles.body}>
          <div className={styles.copy}>
            <p className={`${styles.kicker} text-[#B8F500]!`}>
              حمایت برای همه
            </p>
            <h1 className={styles.title}>
              مسئلهاز ثبت‌نام مدرسه تا بیمه، درمان و حمایت معیشتی، همراه شما هستیم
            </h1>
            <p className={styles.lead}>
              دادمهاجر، سامانه‌ای برای راهنمایی و تسهیل دسترسی اتباع خارجی به خدمات ضروری زندگی است. از ثبت‌نام فرزندان در مدرسه و دریافت بیمه سلامت تا پیگیری خدمات درمانی، تأمین دارو و درخواست حمایت غذایی و معیشتی، مسیر مناسب خود را به‌آسانی پیدا کنید.
            </p>
            <div className={styles.actions}>
              <Button className={`${styles.primaryBtn} bg-[#B8F500]!`}>ورود کاربر</Button>
              <a href="#" className={styles.ghostLink}>
                ورود کارشناسان
                <ArrowLeftIcon size={26} />
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
