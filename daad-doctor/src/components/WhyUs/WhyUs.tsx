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
  { title: "تمام خدمات حقوقی در یک بستر", description: "متن، وکیل و مشاوره", Icon: LayersIcon },
  { title: "راهنمایی مرحله ای", description: "با کمک هوش مصنوعی مراحل را رد کنید", Icon: BookIcon, lowered: true },
  { title: "مسیر ساده تر", description: "بدون پیچیدگی و اصطلاحات دشوار", Icon: BoltIcon },
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
