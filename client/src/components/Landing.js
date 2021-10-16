import styled from "styled-components";

const Container = styled.div`
  background: var(--primary);
  color: #ffb86c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Landing = () => {
  return (
    <Container id="home">
      <div>
        <h1>Sunny Heyar</h1>
        <h4>Full Stack Web Developer</h4>
      </div>
    </Container>
  );
};

export default Landing;
