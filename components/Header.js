import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();

  const currentPath = router.pathname;

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
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects", icon: "fas fa-code" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={currentPath !== "/" ? styles.home : styles.hide}>
          Sunny Heyar
        </a>
      </Link>
      <nav className={styles.nav}>
        {pageLinks.map(pageLink => (
          <Link href={pageLink.href} key={pageLink.name}>
            <a
              className={
                currentPath === pageLink.href ? styles.selected : styles.link
              }
            >
              {pageLink.name}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
