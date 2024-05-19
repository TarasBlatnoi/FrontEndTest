import Link from "next/link";
import styles from "./home.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.firstSection}>
        <Link href="/products">
          <Button
            className={styles.linkProducts}
            variant="contained"
            sx={{
              fontSize: "1rem",
              whiteSpace: "nowrap",
              height: "90px",
              width: "250px",
            }}
            color="primary"
          >
            <Typography color="secondary" variant="h4">
              View products
            </Typography>
          </Button>
        </Link>
        <div className={styles.mainImgContainer}>
          <Image
            src="/images/phones.png"
            alt="logo"
            className={styles.img}
            fill
          ></Image>
        </div>
      </section>
    </div>
  );
}
