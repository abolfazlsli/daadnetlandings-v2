"use client";

import { Image } from "antd";
import { ArrowUpIcon, ScaleLogo } from "../icons";
import styles from "./Footer.module.css";
import Logo from "../../../public/images/logo.png"

// Links are display-only for now; fill in the real hrefs later.
const COLUMNS = [
  { title: "دادخرد", links: ["درباره ما", "خدمات دادخرد", "تماس با ما", "سوالات متداول", "راهنمای پژوهش "] },
  {
    title: "برای کاربران",
    links: ["شروع پژوهش", "طرح مسئله فلسفی", "بررسی و نقد استدلال", "راهنمای هوشمند", "حساب کاربری"],
  },
  {
    title: "برای همکاران",
    links: ["ورود همکار", "ثبت نام پژوهشگر", "تکمیل پروفایل", "درخواست های پژوهشی", "راهنمای همکاری"],
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
              <div className="w-15 h-15 rounded-2xl bg-[#465C49] flex justify-center items-center">
                <Image preview={false} src={Logo.src} />
              </div>
              <span className="text-[#005034]">دادخرد</span>
            </div>
            <p className={styles.tagline}>
              دادخرد فقط یک سامانه فلسفی نیست
            </p>
            <p className={styles.about}>
              فضایی برای اندیشیدن، پرسشگری، نقد و گفت‌وگو در دنیای منطق، فلسفه و عرفان است. اینجا می‌توانی با کمک هوش مصنوعی، مسائل فلسفی را تحلیل کنی، استدلال‌ها را بررسی کنی، دیدگاه فیلسوفان و مکاتب مختلف را مقایسه کنی و با دسترسی به منابع معتبر، مسیر پژوهش و تفکر خود را گسترش دهی.
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
            ©1405 دادخرد
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
