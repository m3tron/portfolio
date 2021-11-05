import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Name = styled.div`
  font-size: 2.5rem;
  background: linear-gradient(
    to bottom right,
    var(--bgtwo) 0%,
    var(--text) 100%
  );
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  text-align: center;
`;

const Landing = () => {
  return (
    <Container id="home">
      <div>
        <Name>Sunny Heyar</Name>
        <Title>Full Stack Web Developer</Title>
      </div>
    </Container>
  );
};

export default Landing;
