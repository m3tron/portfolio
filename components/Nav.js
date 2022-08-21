import styles from "../styles/Nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const link = (href, link) => (
    <a href={href} className={styles.navLink} onClick={() => setOpen(false)}>
      {link}
    </a>
  );

  return (
    <header>
      <div
        className={!open ? styles.hamburger : styles.hamburgerOpen}
        onClick={() => setOpen(!open)}
      >
        <div className={!open ? styles.top : styles.topOpen}></div>
        <div className={!open ? styles.middle : styles.middleOpen}></div>
        <div className={!open ? styles.bottom : styles.bottomOpen}></div>
      </div>

      <nav className={!open ? styles.nav : styles.navOpen}>
        {link("#home", "Home")}
        {link("#projects", "Projects")}
        {link("#contact", "Contact")}
      </nav>
    </header>
  );
};

export default Nav;
