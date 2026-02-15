import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { findProductBySlug, getProductSlugFromHref, products, type Product } from "@/data/products";
import styles from "./page.module.css";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

const priceFormatter = new Intl.NumberFormat("ru-RU");
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: getProductSlugFromHref(product.href).split("/"),
  }));
}

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

export default function ProductPage({ params }: ProductPageProps) {
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : "";

  if (!slug) {
    notFound();
  }

  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <Container>
        <ProductInfo product={product} />
      </Container>
    </main>
  );
}
