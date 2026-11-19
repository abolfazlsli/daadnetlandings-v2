import Image from "next/image";
import { Button } from "antd";
import scale from "../../../public/images/scale.png";
import { ArrowLeftIcon, BellIcon } from "../icons";
import styles from "./Hero.module.css";

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
            <a href="#" className={styles.logo}>
              دادرای
            </a>
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
            <p className={styles.kicker}>عدالت برای همه</p>
            <h1 className={styles.title}>
              مسئله حقوقی داری؟ لازم نیست بدانی دقیقاً باید چه کار کنی؛ دادرای مسیر مناسب را بهت نشان
              می‌دهد
            </h1>
            <p className={styles.lead}>
              متن حقوقی بگیر، وکیل درخواست کن یا رایگان مشاوره بگیر؛ دادرای کمک می‌کند از همان قدم اول
              مسیر مناسب را انتخاب کنی.
            </p>
            <div className={styles.actions}>
              <Button className={styles.primaryBtn}>ورود کاربر</Button>
              <a href="#" className={styles.ghostLink}>
                ورود همکار
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
