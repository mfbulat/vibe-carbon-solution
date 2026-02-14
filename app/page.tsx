import { ContactSection } from "@/components/ContactSection";
import { DeliverySection } from "@/components/DeliverySection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";
import { catalogSectionTitle } from "@/data/sections";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main>
        <Hero />
        <ProductGrid id="catalog" title={catalogSectionTitle} products={products} />
        <DeliverySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
