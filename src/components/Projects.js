import styled from "styled-components";
import Project from "./Project";

const Container = styled.div`
  display: grid;
  place-items: center;
  margin-top: 4rem;
  padding-top: 4rem;
`;

const Projects = () => {
  const projects = [
    {
      name: "Sandy-X Inc.",
      description: "Web app to help manage parking lot",
      images: {
        desktop: "/images/sandy-x.com.png",
        mobile: "/images/sandy-x.com_mobile.png",
      },
      url: "https://sandy-x.com",
    },
    {
      name: "Super Delta HVAC",
      description: "Landing page for HVAC company",
      images: {
        desktop: "/images/superdeltahvac.ca.png",
        mobile: "/images/superdeltahvac.ca_mobile.png",
      },
      url: "https://superdeltahvac.ca",
    },
  ];

  return (
    <Container id="projects">
      {projects.map(project => (
        <Project
          key={projects.indexOf(project)}
          name={project.name}
          url={project.url}
          description={project.description}
          desktopImage={project.images.desktop}
          mobileImage={project.images.mobile}
        />
      ))}
    </Container>
  );
};

export default Projects;
