import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { ReactElement } from "react";

type Product = {
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
  product: Product;
};

const ProductCard = ({ product }: PropsType): ReactElement => {
  return (
    <div className={styles.container}>
      <div className="product-card">
        <Image
          className="thumbnail"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="product-details">
          <h2 className="title">{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          {product.discountPercentage && (
            <p className="discount">{product.discountPercentage}% off</p>
          )}
          {product.rating && <p className="rating">Rating: {product.rating}</p>}
          <p className="stock">Stock: {product.stock}</p>
          <p className="brand">Brand: {product.brand}</p>
          <p className="category">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
