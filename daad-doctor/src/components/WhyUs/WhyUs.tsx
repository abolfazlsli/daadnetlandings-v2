import type { ComponentType } from "react";
import { BoltIcon, BookIcon, LayersIcon } from "../icons";
import styles from "./WhyUs.module.css";

type Feature = {
  title: string;
  description: string;
  Icon: ComponentType<{ size?: number }>;
  lowered?: boolean;
};

const FEATURES: Feature[] = [
  { title: "راهنمایی متناسب با علائم تو", description: "به‌جای جست‌وجو میان جواب‌های مختلف، با پاسخ به سؤال‌های مرتبط راهنمایی متناسب دریافت کن.", Icon: LayersIcon },
  { title: "قدم‌به‌قدم و قابل‌فهم", description: "از بیان علائم تا دریافت نتیجه بررسی، بدون نیاز به دانستن اصطلاحات پزشکی پیش برو.", Icon: BookIcon, lowered: true },
  { title: "همراهی هوش مصنوعی و پزشک", description: "از راهنمایی هوشمند استفاده کن و در صورت نیاز، بررسی تخصصی را با پزشک ادامه بده.", Icon: BoltIcon },
];

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className="shell">
        <div className={styles.wrap}>
          <span className={styles.sand} aria-hidden />
          <div className={styles.panel}>
            <h2 className={styles.heading}>چرا داددکتر؟</h2>
            <p className={styles.lead}>
             داددکتر کمک می‌کند بدون سردرگمی و نیاز به دانش پزشکی، علائمت را بهتر بشناسی و وضعیت سلامتی‌ات را بررسی کنی. کافی است به چند سؤال ساده و هدفمند پاسخ بدهی تا با کمک هوش مصنوعی و راهنمایی پزشکان، بدانی مشکلت چقدر به رسیدگی نیاز دارد و چه اقدامی برای پیگیری آن مناسب‌تر است.
            </p>
          </div>
          <div className={styles.cards}>
            {FEATURES.map(({ title, description, Icon, lowered }) => (
              <article key={title} className={`${styles.card} ${lowered ? styles.lowered : ""}`}>
                <span className={styles.icon}>
                  <Icon size={48} />
                </span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
