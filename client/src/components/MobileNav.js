import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const BarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 100;
  width: 2rem;
  height: 1rem;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
`;

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: white;
  transition: 650ms;
  border-radius: 0.8rem;
`;

const Bar1 = styled(Bar)`
  transform: ${({ open }) =>
    open && "rotate(-405deg) translate(-0.0rem,0.5rem)"};
`;

const Bar2 = styled(Bar)`
  width: 60%;
  margin-left: auto;
  transition: 800ms;

  opacity: ${({ open }) => open && "0"};
  transform: ${({ open }) => open && "translateX(2rem)"};
`;

const Bar3 = styled(Bar)`
  transform: ${({ open }) => open && "rotate(405deg) translate(0rem,-0.5rem)"};
`;

const MenuContainer = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  background: #192227;
  color: white;
  transition: 650ms;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const PageLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 1rem;
  padding: 1rem;
  font-size: 36px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 1rem;
  padding: 1rem;
  font-size: 1rem;
`;

const SocialIcon = styled.i``;

const MobileNav = ({ socialLinks, pageLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <BarContainer onClick={() => setOpen(!open)}>
        <Bar1 open={open} />
        <Bar2 open={open} />
        <Bar3 open={open} />
      </BarContainer>

      <MenuContainer open={open}>
        <Menu>
          {pageLinks.map(pageLink => (
            <PageLink
              key={pageLink.name}
              href={pageLink.href}
              onClick={() => setOpen(false)}
            >
              {pageLink.name}
              <SocialIcon className={pageLink.icon} />
            </PageLink>
          ))}
          {socialLinks.map(socialLink => (
            <SocialLink key={socialLink.name} onClick={() => setOpen(false)}>
              {socialLink.name}
              <SocialIcon className={socialLink.icon} />
            </SocialLink>
          ))}
        </Menu>
      </MenuContainer>
    </Container>
  );
};

export default MobileNav;
