"use client";

import { Image } from "antd";
import { ArrowUpIcon, ScaleLogo } from "../icons";
import styles from "./Footer.module.css";
import Logo from "../../../public/images/logo.png"

// Links are display-only for now; fill in the real hrefs later.
const COLUMNS = [
  { title: "دادرای", links: ["درباره ما", "خدمات دادرای", "تماس با ما", "سوالات متداول", "راهنمای مسیر حقوقی"] },
  {
    title: "برای کاربران",
    links: ["شروع مسیر حقوقی", "دریافت متن حقوقی", "درخواست وکیل", "مشاوره حقوقی", "حساب کاربری"],
  },
  {
    title: "برای همکاران",
    links: ["ورود همکار", "ثبت نام وکلا", "تکمیل پروفایل", "درخواست های کاربران", "راهنمای همکاری"],
  },
  { title: "پشتیبانی", links: ["سوالات متداول", "راهنمای استفاده", "شرایط و قوانین", "حریم خصوصی", "تماس با پشتیبانی"] },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <button
        type="button"
        className={styles.toTop}
        aria-label="بازگشت به بالا"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpIcon size={40} strokeWidth={1.4} />
      </button>

      <div className="shell">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image preview={false} src={Logo.src} />
              <span className="text-[#E6A80B]!">دادوطن</span>
            </div>
            <p className={styles.tagline}>دادوطن فقط یک سامانه آگاهی‌بخشی نیست</p>
            <p className={styles.about}>
              اینجا می‌توانی دغدغه‌هایی مثل گرانی، بیکاری، عدالت و مشکلات اجتماعی را مطرح کنی، دلایل آن‌ها را با اطلاعات مستند بشناسی و دیدگاه‌های مختلف را بررسی کنی. دادوطن با راهنمایی هوشمند، پاسخ‌های قابل‌فهم و معرفی راهکارهای قانونی و عملی، کمکت می‌کند از شناخت مشکل به اقدام برای حل آن برسی.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.col}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            ©1405 دادرای
            <br />
            تمامی حقوق محفوظ است.
          </p>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeLabel}>eNAMAD</span>
            </div>
            <div className={styles.badge}>
              <span className={`${styles.badgeLabel} ${styles.zarin}`}>ZarinPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
