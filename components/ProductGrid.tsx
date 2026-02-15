import { type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Container } from "@/components/ui";
import styles from "./ProductGrid.module.css";

type ProductGridProps = {
  id?: string;
  title: string;
  products: Product[];
};

export function ProductGrid({ id, title, products }: ProductGridProps) {
  return (
    <section className={styles.section} id={id}>
      <Container>
        <h2 className={styles.title}>
          {title.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
