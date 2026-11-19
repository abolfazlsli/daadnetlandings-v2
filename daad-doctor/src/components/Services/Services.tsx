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
    title: "بررسی علائم و راهنمای سلامت",
    description: "علائمت را بگو، به چند سؤال پاسخ بده و راهنمای اقدام بعدی را دریافت کن.",
    cta: "بررسی علائم",
    image: documentImg,
    Icon: DocumentIcon,
  },
  {
    title: "درخواست مشاوره پزشک",
    description: "برای بررسی مشکلت، دریافت مشاوره یا پیگیری درمان از پزشک کمک بگیر.",
    cta: "درخواست پزشک",
    image: lawyerImg,
    Icon: LawyerIcon,
    featured: true,
  },
  {
    title: "راهنمای سلامت رایگان",
    description: "سؤالات پزشکی‌ات را مطرح کن و راهنمایی اولیه درباره سلامتی دریافت کن.",
    cta: "طرح پرسش رایگان",
    image: consultImg,
    Icon: ChatIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="shell">
        <h2 className={styles.heading}>خدمات داددکتر</h2>
        <div className={styles.grid}>
          {SERVICES.map((items , key) => (
              <ServicesCarts {...items} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}


