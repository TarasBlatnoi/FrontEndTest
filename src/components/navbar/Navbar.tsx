import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Typography, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image src="/images/random.png" alt="logo" fill></Image>
          </div>
          <Typography variant="h5" color="secondary">
            Homepage
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
