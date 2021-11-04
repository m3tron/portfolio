import styled from "styled-components";

const Container = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: end;
    background: none;
    color: white;
    height: 3rem;
    align-items: center;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: var(--text);
  font-size: 2rem;
  margin: 1rem;
  padding: 1rem;
`;

const SocialIcon = styled.i``;

const Navbar = ({ socialLinks }) => {
  return (
    <Container>
      {socialLinks.map(socialLink => (
        <SocialLink
          key={socialLink.name}
          href={socialLink.href}
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
