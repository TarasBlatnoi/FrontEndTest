import styles from "./footer.module.css";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Typography color="primary">© All rights reserved.</Typography>
      </div>
    </div>
  );
};

export default Footer;
