'use client'

import type { StaticImageData } from "next/image";
import { ComponentType, useState } from "react"
import styles from "./Services.module.css"
import { Button, Image } from "antd";
import { ArrowLeftIcon } from "../icons";


type Service = {
  title: string;
  description: string;
  cta: string;
  image: StaticImageData;
  Icon: ComponentType<{ size?: number }>;
  featured?: boolean;
};


export default function ServicesCarts ({ title, description, cta, image, Icon } : Service) {
  const [featured , setFeatured] = useState<boolean>(false)
  return (
    <article key={title} className={`${styles.card} ${featured ? styles.featured : ""}`} onMouseMove={() => setFeatured(true)} onMouseLeave={() => setFeatured(false)}>
        <div className={styles.media}>
          <Image preview={false} src={image.src} alt={title} className={styles.image} sizes="(max-width: 860px) 100vw, 400px" />
          <span className={`${styles.iconBox} ${featured ? styles.iconBlue : ""}`}>
            <Icon size={44} />
          </span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <Button className={`${styles.cta} ${featured ? styles.ctaBlue : ""}`} block>
          {cta}
          <ArrowLeftIcon size={24} />
        </Button>
      </article>
  )
}
