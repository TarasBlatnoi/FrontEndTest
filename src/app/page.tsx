import Link from "next/link";
import styles from "./home.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div className={styles.container}>
      <Button
        className={styles.linkProducts}
        variant="contained"
        sx={{
          fontSize: "1rem",
          whiteSpace: "nowrap",
        }}
        color="primary"
      >
        <Typography color="secondary" variant="h6">
          <Link href="/products">Check out our products</Link>
        </Typography>
      </Button>
    </div>
  );
}
