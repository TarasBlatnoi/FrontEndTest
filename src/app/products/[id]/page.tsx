"use client";

import { ProductType } from "@/components/productCard/ProductCard";
import { useEffect, useState } from "react";
import api from "@/api/products";
import styles from "./singleProduct.module.css";
import Image from "next/image";
import ProductRating from "@/components/rating/ProductRating";
import Typography from "@mui/material/Typography";
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
  }, [id]);

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
          <Typography
            variant="h3"
            sx={{
              whiteSpace: "nowrap",
            }}
            color="primary"
          >
            {product.title}
          </Typography>

          <Typography variant="h5" color="primary">
            {product.brand}
          </Typography>
          <Typography variant="h6" color="primary">
            {product.category}
          </Typography>
          <Typography variant="h6" color="primary">
            {product.description}
          </Typography>
          <div className={styles.wrapperPrice}>
            {product.discountPercentage ? (
              <Typography variant="h6" color="primary">
                $
                {Math.floor(
                  Number(product.price) - Number(product.discountPercentage)
                )}
              </Typography>
            ) : (
              <Typography variant="h6" color="primary">
                ${product.price}
              </Typography>
            )}
          </div>
          <Typography variant="h6" color="primary">
            {product.rating && (
              <ProductRating rating={product.rating}></ProductRating>
            )}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
