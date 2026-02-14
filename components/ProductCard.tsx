import Image from "next/image";
import Link from "next/link";
import { getLocalProductPath, type Product } from "@/data/products";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("ru-RU");

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <Link className={styles.imageWrap} href={getLocalProductPath(product.href)}>
        <Image src={product.imageUrl} alt={product.title} fill className={styles.image} />
      </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{priceFormatter.format(product.price)} руб.</p>
        <Link className={`${styles.link} btn-angled`} href={getLocalProductPath(product.href)}>
          Подробнее
        </Link>
      </div>
    </article>
  );
}
