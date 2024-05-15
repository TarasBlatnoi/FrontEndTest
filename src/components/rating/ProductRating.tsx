import React from "react";
import styles from "./rating.module.css";

type PropsType = {
  rating: number;
};

export const ProductRating = ({ rating }: PropsType) => {
  const divStarsInner = {
    position: "absolute",
    top: "0",
    left: "0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: `${rating * 20}%`,
  } as React.CSSProperties;

  return (
    <div className={styles.rating}>
      Reviews
      <div className={styles.starsOuter}>
        <div className={styles.starsInner} style={divStarsInner}></div>
      </div>
    </div>
  );
};

export default ProductRating;
