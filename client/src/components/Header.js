import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  const socialLinks = [{ name: "github" }, { name: "linkedin" }];
  const pageLinks = [{ name: "home" }, { name: "projects" }];

  return (
    <>
      <Navbar socialLinks={socialLinks} />
      <MobileNav socialLinks={socialLinks} pageLinks={pageLinks} />
    </>
  );
};

export default Header;
