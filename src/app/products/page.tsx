"use client";
import api from "@/api/products";
import { ProductType, ProductCard } from "@/components/productCard/ProductCard";
import { useEffect, useState } from "react";
import styles from "./products.module.css";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const res = await api.get("/products");
        setProducts(res.data.products);
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
            <ProductCard product={product}></ProductCard>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
