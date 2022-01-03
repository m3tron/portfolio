import styled from "styled-components";
import Project from "./Project";
import { projectList } from "../../lib/lists";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
`;

const Projects = () => {
  return (
    <Container id="projects">
      {projectList.map(project => (
        <Project
          key={projectList.indexOf(project)}
          name={project.name}
          href={project.href}
          description={project.description}
          image={project.image}
          stack={project.stack}
        />
      ))}
    </Container>
  );
};

export default Projects;
