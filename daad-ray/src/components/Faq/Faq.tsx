"use client";

import { Collapse, type CollapseProps } from "antd";
import { PlusCircleIcon } from "../icons";
import styles from "./Faq.module.css";

const FAQ = [
  {
    q: "اگر ندانم برای مشکل حقوقی‌ام چه عنوانی مناسب است، چه کار کنم؟",
    a: "نگران نباشید؛ کافی است مشکل خود را به زبان ساده توضیح دهید. دادرای با چند سؤال کوتاه موضوع شما را دسته‌بندی می‌کند و مسیر مناسب را پیشنهاد می‌دهد.",
  },
  {
    q: "چطور می‌توانم متن دادخواست، لایحه یا شکواییه دریافت کنم؟",
    a: "از بخش «دریافت متن» نوع متن را انتخاب کنید، اطلاعات پرونده را وارد کنید و متن آماده و قابل ویرایش را تحویل بگیرید.",
  },
  {
    q: "چطور می‌توانم از دادرای وکیل درخواست کنم؟",
    a: "در بخش «درخواست وکیل» موضوع و شهر خود را ثبت کنید؛ درخواست شما برای وکلای همکار متناسب ارسال می‌شود و می‌توانید از بین پیشنهادها انتخاب کنید.",
  },
  {
    q: "مشاور هوشمند دادرای چه کاری انجام می‌دهد؟",
    a: "مشاور هوشمند به پرسش‌های حقوقی شما پاسخ اولیه می‌دهد، مراحل کار را توضیح می‌دهد و در صورت نیاز شما را به کارشناس یا وکیل ارجاع می‌دهد.",
  },
];

const items: CollapseProps["items"] = FAQ.map((item, i) => ({
  key: String(i),
  label: item.q,
  children: <p className={styles.answer}>{item.a}</p>,
  classNames: { header: styles.header, body: styles.body },
  className: styles.item,
}));

export default function Faq() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <h2 className={styles.heading}>سوالات متداول</h2>
        <p className={styles.sub}>پاسخ به سوالات رایج شما</p>
        <Collapse
          accordion
          bordered={false}
          ghost
          items={items}
          expandIconPlacement="end"
          expandIcon={({ isActive }) => (
            <span className={`${styles.plus} ${isActive ? styles.plusOpen : ""}`}>
              <PlusCircleIcon size={52} />
            </span>
          )}
          className={styles.list}
        />
      </div>
    </section>
  );
}
