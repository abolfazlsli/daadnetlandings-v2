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
  { title: "تحلیل متناسب با پرسش تو", description: "اندیشه فیلسوفان و مکاتب مختلف را بدون پیش‌داوری مقایسه کن.", Icon: LayersIcon },
  { title: "راهنمایی مرحله ای", description: "از طرح پرسش تا تحلیل و یافتن منابع، قدم‌به‌قدم پیش برو.", Icon: BookIcon, lowered: true },
  { title: "بررسی دیدگاه‌های گوناگون", description: "پرسش‌هایت را مطرح کن و استدلال‌ها را با نگاهی منطقی بررسی کن.", Icon: BoltIcon },
];

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className="shell">
        <div className={styles.wrap}>
          <span className={styles.sand} aria-hidden />
          <div className={styles.panel}>
            <h2 className={styles.heading}>چرا دادخرد ؟</h2>
            <p className={styles.lead}>
                دادخرد فضایی برای اندیشیدن، نقد و گفت‌وگو در دنیای منطق، فلسفه و عرفان است. اینجا می‌توانی با کمک هوش مصنوعی، استدلال‌ها را بررسی کنی، دیدگاه فیلسوفان را مقایسه کنی و با دسترسی به منابع معتبر، عمیق‌تر بیندیشی.
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
