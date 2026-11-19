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
    title: "دریافت متن",
    description: "دادخواست، لایحه و شکوائیه متناسب با موضوع شما",
    cta: "دریافت متن",
    image: documentImg,
    Icon: DocumentIcon,
  },
  {
    title: "درخواست وکیل",
    description: "برای انجام یا پیگیری پرونده، درخواست وکیل ثبت کنید",
    cta: "درخواست وکیل",
    image: lawyerImg,
    Icon: LawyerIcon,
    featured: true,
  },
  {
    title: "مشاوره هوشمند",
    description: "پرسش حقوقی تان را مطرح کنید و راهنمایی کارشناس و یا هوشمند بگیرید",
    cta: "شروع مشاوره",
    image: consultImg,
    Icon: ChatIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="shell">
        <h2 className={`${styles.heading} text-[#4C0F12]!`}>خدمات دادمهاجر</h2>
        <div className={styles.grid}>
          {SERVICES.map((items , key) => (
              <ServicesCarts {...items} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}


