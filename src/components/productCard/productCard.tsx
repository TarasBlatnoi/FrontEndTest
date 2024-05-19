import Image from "next/image";
import styles from "./productCard.module.css";
import Link from "next/link";
import { ReactElement } from "react";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type PropsType = {
  product: ProductType;
};

export const ProductCard = ({ product }: PropsType): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={product.thumbnail}
          alt={product.title}
          fill
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>

        <p className={styles.brand}>{product.brand}</p>
      </div>
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
    </div>
  );
};

export default ProductCard;
