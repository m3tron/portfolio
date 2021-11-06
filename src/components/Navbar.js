import styled from "styled-components";

const Container = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: end;
    background: #00000010;
    backdrop-filter: blur(15px);
    --webkit-backdrop-filter: blur(15px);
    height: 3rem;
    align-items: center;
    position: fixed;
    width: 100%;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: var(--text);
  font-size: 2rem;
  margin: 1rem;
  padding: 1rem;
  transition: 650ms;

  &:hover {
    color: ${props => props.colorCode};
  }
`;

const SocialIcon = styled.i``;

const Navbar = ({ socialLinks, pageLinks }) => {
  return (
    <Container>
      {pageLinks.map(pageLink => (
        <a key={pageLink.name} href={pageLink.href}>
          {pageLink.name}
        </a>
      ))}
      {socialLinks.map(socialLink => (
        <SocialLink
          key={socialLink.name}
          href={socialLink.href}
          colorCode={socialLink.colorCode}
          target="_blank"
          rel="noopener"
        >
          <SocialIcon className={socialLink.icon} key={socialLink.name} />
        </SocialLink>
      ))}
    </Container>
  );
};

export default Navbar;
