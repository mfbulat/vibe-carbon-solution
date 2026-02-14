import Image from "next/image";
import { deliverySection } from "@/data/sections";
import styles from "./DeliverySection.module.css";

export function DeliverySection() {
  return (
    <section className={styles.section} id="delivery">
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.title}>
            {deliverySection.title.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>

          <a className={styles.ctaCircle} href={deliverySection.ctaHref}>
            <span>{deliverySection.ctaLabel}</span>
          </a>
        </div>

        <div className={styles.tableWrap}>
          {deliverySection.rows.map((row) => (
            <div className={styles.row} key={row.label}>
              <h3>{row.label}</h3>
              <p>{row.value || ""}</p>
            </div>
          ))}
        </div>

        <div className={styles.mediaAnchor} id="media" />

        <div className={styles.imageWrap}>
          <Image
            src={deliverySection.imageUrl}
            alt="Доставка и оплата"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
