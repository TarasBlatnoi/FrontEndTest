import React from "react";
import styles from "./rating.module.css";
import Typography from "@mui/material/Typography";

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
    <div className={styles.ratingContainer}>
      <Typography color="primary">Reviews {rating}</Typography>

      <div className={styles.starsOuter}>
        <div className={styles.starsInner} style={divStarsInner}></div>
      </div>
    </div>
  );
};

export default ProductRating;
