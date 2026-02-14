import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProductBySlug, type Product } from "@/data/products";
import styles from "./page.module.css";

type ProductPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const priceFormatter = new Intl.NumberFormat("ru-RU");

function ProductInfo({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={product.imageUrl} alt={product.title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>{priceFormatter.format(product.price)} руб.</p>
        <Link className={`${styles.backButton} btn-angled`} href="/">
          Назад
        </Link>
      </div>
    </article>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join("/");
  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <ProductInfo product={product} />
      </div>
    </main>
  );
}
