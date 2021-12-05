import styled from "styled-components";
import Project from "./Project";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding-top: 4rem;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Project />
    </Container>
  );
};

export default Projects;
