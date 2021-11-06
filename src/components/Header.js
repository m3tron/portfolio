import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

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
    <>
      <Navbar socialLinks={socialLinks} pageLinks={pageLinks} />
      <MobileNav socialLinks={socialLinks} pageLinks={pageLinks} />
    </>
  );
};

export default Header;
