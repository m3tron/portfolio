import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop}>
        <a href="#home">&#8593;</a>
      </div>
      &copy; 2022 Sunny Heyar
    </footer>
  );
};

export default Footer;
