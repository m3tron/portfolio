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
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects", icon: "fas fa-code" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div onClick={scrollToTop} className={styles.home}>
          Sunny Heyar
        </div>

        <div>
          {pageLinks.map(pageLink => (
            <a key={pageLink.name} href={pageLink.href} className={styles.link}>
              {pageLink.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
