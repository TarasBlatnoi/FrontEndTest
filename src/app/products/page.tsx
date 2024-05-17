"use client";
import { ProductCard } from "@/components/productCard/ProductCard";
import styles from "./products.module.css";
import Link from "next/link";
import { useFetchData } from "@/hooks/useFetchData";

const ProductsPage = () => {
  const data = useFetchData("/products");
  return (
    <div className={styles.container}>
      {data.map((product) => {
        return (
          <div key={product.id} className={styles.productCard}>
            <Link className={styles.link} href={`/products/${product.id}`}>
              <ProductCard product={product}></ProductCard>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
