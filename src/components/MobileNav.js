import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Bars = styled.div`
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

const Bar = styled.span`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.text};
  transition: 650ms;
  border-radius: 0.8rem;
`;

const Bar1 = styled(Bar)`
  transform: ${({ open }) =>
    open && "rotate(-405deg) translate(-0.0rem,0.5rem)"};
`;

const Bar2 = styled(Bar)`
  width: 75%;
  margin-left: auto;
  transition: 800ms;

  opacity: ${({ open }) => open && "0"};
  transform: ${({ open }) => open && "translateX(2rem)"};
`;

const Bar3 = styled(Bar)`
  width: ${({ open }) => (open ? "100%" : "50%")};
  margin-left: auto;
  transform: ${({ open }) => open && "rotate(405deg) translate(0rem,-0.5rem)"};
`;

const MenuContainer = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  background: #00000010;
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
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
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem;
  padding: 1rem;
  font-size: 36px;
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem;
  padding: 1rem;
  font-size: 2rem;
`;

const SocialIcon = styled.i``;

const MobileNav = ({ socialLinks, pageLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Bars onClick={() => setOpen(!open)}>
        <Bar1 open={open} />
        <Bar2 open={open} />
        <Bar3 open={open} />
      </Bars>

      <MenuContainer open={open}>
        <Menu>
          {pageLinks.map(pageLink => (
            <PageLink
              key={pageLink.name}
              href={pageLink.href}
              onClick={() => setOpen(false)}
            >
              <SocialIcon className={pageLink.icon} />
              {pageLink.name}
            </PageLink>
          ))}
          <SocialLinks>
            {socialLinks.map(socialLink => (
              <SocialLink
                key={socialLink.name}
                href={socialLink.href}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
              >
                <SocialIcon className={socialLink.icon} />
              </SocialLink>
            ))}
          </SocialLinks>
        </Menu>
      </MenuContainer>
    </Container>
  );
};

export default MobileNav;
