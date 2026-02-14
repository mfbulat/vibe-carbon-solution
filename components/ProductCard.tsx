import Image from "next/image";
import Link from "next/link";
import { getLocalProductPath, type Product } from "@/data/products";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("ru-RU");

export function ProductCard({ product }: ProductCardProps) {
  const specLine = product.category === "stocks" ? "6.1 кг  |  Prepreg Carbon" : "CNC  |  Тюнинг";

  return (
    <article className={styles.card}>
      <Link className={styles.imageWrap} href={getLocalProductPath(product.href)}>
        <Image src={product.imageUrl} alt={product.title} fill className={styles.image} />
      </Link>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.spec}>{specLine}</p>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.price}>{priceFormatter.format(product.price)} ₽</p>
          <Link className={`${styles.link} btn-angled`} href={getLocalProductPath(product.href)}>
            В корзину
          </Link>
        </div>
      </div>
    </article>
  );
}
