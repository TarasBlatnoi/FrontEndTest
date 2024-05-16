"use client";
import { useEffect, useState } from "react";
import api from "@/api/products";
import { ProductType } from "@/components/productCard/ProductCard";

export const useFetchData = (url: string): ProductType[] => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProduct = async (): Promise<void> => {
      try {
        const res = await api.get(url);
        setData(res.data.products.slice(0, 10));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [url]);
  return data;
};
