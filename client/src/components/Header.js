import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  const socialLinks = [
    { name: "github", icon: "fab fa-github" },
    { name: "linkedin", icon: "fab fa-linkedin" },
  ];
  const pageLinks = [
    { name: "home", href: "!#", icon: "fas fa-home" },
    { name: "projects", href: "!#", icon: "fas fa-code" },
  ];

  return (
    <>
      <Navbar socialLinks={socialLinks} />
      <MobileNav socialLinks={socialLinks} pageLinks={pageLinks} />
    </>
  );
};

export default Header;
