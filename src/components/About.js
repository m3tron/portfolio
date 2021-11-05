import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 1rem 0 1rem;
`;

const About = () => {
  return (
    <Container id="about">
      I'm a MERN stack developer and a motorcycle enthusiast. I love the
      challenge that learning new things brings on.
    </Container>
  );
};

export default About;
