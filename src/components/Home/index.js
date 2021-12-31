import styled, { keyframes } from "styled-components";

const nameGradient = keyframes`
from {background-position: 0 0;}
  to {background-position: 100% 100%}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Name = styled.div`
  font-family: Autography, cursive;
  font-size: 4rem;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.bgSecondary} 100%
  );
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
  text-align: center;
  padding-bottom: 1rem;
  animation: ${nameGradient} 5s ease-in-out infinite alternate;
  background-size: 200% 200%;
`;

const Title = styled.div`
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.bgSecondary} 100%
  );
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
  animation: ${nameGradient} 5s ease-in-out infinite alternate;
  background-size: 200% 200%;
`;

const Home = () => {
  return (
    <Container id="home">
      <div>
        <Name>Sunny Heyar</Name>
        <Title>Full Stack Web Developer</Title>
      </div>
    </Container>
  );
};

export default Home;
