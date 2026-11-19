import Image from "next/image";
import manImg from "../../../public/images/promo-man.png";
import pathImg from "../../../public/images/promo-path.png";
import styles from "./Promo.module.css";

export default function Promo() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <div className={styles.wrap}>
          <article className={`${styles.card} ${styles.yellow}`}>
            <svg className={styles.shape} viewBox="0 0 661 350" preserveAspectRatio="none" aria-hidden>
              <path d="M0 40Q0 0 40 0H621Q661 0 661 40V195Q661 235 622 242L42 343Q0 350 0 310Z" />
            </svg>
            <div className={styles.content}>
              <h3 className={styles.title}>مسیر خدمات مناسب</h3>
              <p className={styles.text}>
               با پاسخ به چند سؤال ساده، خدمات متناسب با نیازت را پیدا کن. دادمهاجر قدم‌به‌قدم تا ثبت درخواست همراه توست.
              </p>
            </div>
            <Image src={pathImg} alt="" className={styles.pathImg} />
          </article>

          <article className={`${styles.card} ${styles.blue}`}>
            <svg className={styles.shape} viewBox="0 0 662 349" preserveAspectRatio="none" aria-hidden>
              <path d="M0 157Q0 117 40 110L622 7Q662 0 662 40V309Q662 349 622 349H40Q0 349 0 309Z" />
            </svg>
            <div className={styles.content}>
              <h3 className={styles.title}>ثبت درخواست سریع</h3>
              <p className={styles.text}>
               درخواست خدمات آموزشی، بیمه سلامت، درمان و حمایت معیشتی خود را به‌آسانی ثبت و پیگیری کنید.
              </p>
            </div>
            <Image src={manImg} alt="" className={styles.manImg} />
          </article>
        </div>
      </div>
    </section>
  );
}
