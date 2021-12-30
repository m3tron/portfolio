import styles from "../styles/Projects.module.css";
import Project from "./Project";
import { projectList } from "../lib/links";

const Projects = () => {
  return (
    <section id="projects" className={styles.grid}>
      {projectList.map(project => (
        <Project
          key={project.name}
          name={project.name}
          description={project.description}
          stack={project.stack}
          href={project.href}
          image={project.image}
        />
      ))}
    </section>
  );
};

export default Projects;
