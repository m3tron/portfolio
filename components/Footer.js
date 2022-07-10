import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop} onClick={() => scrollTo(top)}>
        &#8593;
      </div>
      &copy; 2022 Sunny Heyar
    </footer>
  );
};

export default Footer;
