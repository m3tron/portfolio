import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
`;

const Footer = () => {
  const date = new Date();

  return <Container>&copy; {date.getFullYear()} Sunny Heyar</Container>;
};

export default Footer;
