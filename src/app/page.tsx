import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.linkProducts}>
        <Link href="/products">Check out our products</Link>
      </div>
    </div>
  );
}
