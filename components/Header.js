import styles from "../styles/Header.module.css";

const Header = () => {
  const socialLinks = [
    {
      name: "github",
      icon: "fab fa-github",
      href: "https://github.com/m3tron",
      colorCode: "black",
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      href: "https://linkedin.com/in/sunny-heyar-264158181",
      colorCode: "blue",
    },
  ];

  const pageLinks = [
    { name: "Home", href: "#home", icon: "fas fa-home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects", icon: "fas fa-code" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {pageLinks.map(pageLink => (
          <a className={styles.link} key={pageLink.name}>
            {pageLink.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
