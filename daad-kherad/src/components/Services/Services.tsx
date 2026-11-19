'use client'
import Image, { type StaticImageData } from "next/image";
import { Button } from "antd";
import {type ComponentType } from "react";
import documentImg from "../../../public/images/service-document.png";
import lawyerImg from "../../../public/images/service-lawyer.png";
import consultImg from "../../../public/images/service-consult.png";
import { ArrowLeftIcon, ChatIcon, DocumentIcon, LawyerIcon } from "../icons";
import styles from "./Services.module.css";
import ServicesCarts  from "./services-cart";

type Service = {
  title: string;
  description: string;
  cta: string;
  image: StaticImageData;
  Icon: ComponentType<{ size?: number }>;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    title: "طرح و تحلیل مسئله",
    description: "پرسش خود را موضوعی طرح کنید و مسیر تحلیل آن را دنبال کنید",
    cta: "طرح مسئله",
    image: documentImg,
    Icon: DocumentIcon,
  },
  {
    title: "بررسی و نقد استدلال",
    description: "مقدمات، نتیجه و پیوندهای منطقی استدلال را بررسی کنید",
    cta: "بررسی استدلال",
    image: lawyerImg,
    Icon: LawyerIcon,
    featured: true,
  },
  {
    title: "مقایسه دیدگاه ها",
    description: "آرای فیلسوفان و مکاتب را در کنارهم و با رجوع به منابع بسنجید",
    cta: "مقایسه آرا",
    image: consultImg,
    Icon: ChatIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="shell">
        <h2 className={styles.heading}>خدمات دادخرد</h2>
        <div className={styles.grid}>
          {SERVICES.map((items , key) => (
              <ServicesCarts {...items} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}


