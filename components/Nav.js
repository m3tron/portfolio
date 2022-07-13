import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#projects" className={styles.navLink}>
          Projects
        </a>
        <a href="#" className={styles.navLink}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Nav;
