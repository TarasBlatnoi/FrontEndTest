"use client";
import api from "@/api/products";
import { ProductType, ProductCard } from "@/components/productCard/ProductCard";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Link from "next/link";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const res = await api.get("/products");
        setProducts(res.data.products.slice(0, 10));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className={styles.container}>
      {products.map((product) => {
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
