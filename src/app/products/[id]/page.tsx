"use client";

import { ProductType } from "@/components/productCard/ProductCard";
import { useEffect, useState } from "react";
import api from "@/api/products";
import styles from "./singleProduct.module.css";
import Image from "next/image";
import ProductRating from "@/components/rating/ProductRating";
import { useFetchData } from "@/hooks/useFetchData";

type ParamsType = {
  params: { id: string };
  searchParams: {};
};

const SingleProductPage = ({ params }: ParamsType) => {
  const { id } = params;
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  const [displayedImage, setDisplayedImage] = useState<string | null>(null);
  const handleMouseEnter = (image: string) => {
    setDisplayedImage(image);
  };
  useEffect(() => {
    const fetchProduct = async (): Promise<void> => {
      try {
        const res = await api.get(`/products/${id}`);
        console.log(res.data);
        setProduct(res.data);
        setDisplayedImage(res.data.thumbnail);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className={styles.container}>
      {product.thumbnail && (
        <div className={styles.imagesContainer}>
          <div className={styles.additionalImages}>
            {product.images[0] && (
              <div
                className={styles.additionalImage}
                onMouseEnter={() => handleMouseEnter(product.images[0])}
              >
                <Image
                  className={styles.img}
                  src={product.images[0]}
                  alt={product.title}
                  fill
                ></Image>
              </div>
            )}
            {product.images[1] && (
              <div
                className={styles.additionalImage}
                onMouseEnter={() => handleMouseEnter(product.images[1])}
              >
                <Image
                  className={styles.img}
                  src={product.images[1]}
                  alt={product.title}
                  fill
                ></Image>
              </div>
            )}
            {product.images[2] && (
              <div
                className={styles.additionalImage}
                onMouseEnter={() => handleMouseEnter(product.images[2])}
              >
                <Image
                  className={styles.img}
                  src={product.images[2]}
                  alt={product.title}
                  fill
                ></Image>
              </div>
            )}

            {product.images[3] && (
              <div
                className={styles.additionalImage}
                onMouseEnter={() => handleMouseEnter(product.images[3])}
              >
                <Image
                  className={styles.img}
                  src={product.images[3]}
                  alt={product.title}
                  fill
                ></Image>
              </div>
            )}
          </div>
          {displayedImage && (
            <div className={styles.mainImgContainer}>
              <Image
                className={styles.img}
                src={displayedImage}
                alt={product.title}
                fill
              />
            </div>
          )}
        </div>
      )}
      {product.title && (
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>

          <p className={styles.brand}>{product.brand}</p>
          <div className={styles.wrapperPrice}>
            {product.discountPercentage ? (
              <p className={styles.discount}>
                $
                {Math.floor(
                  Number(product.price) - Number(product.discountPercentage)
                )}
              </p>
            ) : (
              <p className={styles.price}>${product.price}</p>
            )}
          </div>
          <p className={styles.rating}>
            {product.rating}
            {product.rating && (
              <ProductRating rating={product.rating}></ProductRating>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
