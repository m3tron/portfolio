import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  const socialLinks = [
    { name: "github", icon: "fab fa-github" },
    { name: "linkedin", icon: "fab fa-linkedin" },
  ];
  const pageLinks = [
    { name: "home", href: "#home", icon: "fas fa-home" },
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects", icon: "fas fa-code" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <>
      <Navbar socialLinks={socialLinks} />
      <MobileNav socialLinks={socialLinks} pageLinks={pageLinks} />
    </>
  );
};

export default Header;
