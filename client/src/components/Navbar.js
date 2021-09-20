import styled from "styled-components";

const Container = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    background: black;
    color: white;
  }
`;

const Navbar = ({ socialLinks }) => {
  return (
    <Container>
      {socialLinks.map(socialLink => (
        <div key={socialLink.name}>{socialLink.name}</div>
      ))}
    </Container>
  );
};

export default Navbar;
