import styles from "../styles/Projects.module.css";
import Project from "../components/Project";

const Projects = () => {
  const projects = [
    {
      name: "Sandy-X Inc.",
      description: "Parking management application",
      stack: ["logos:react", "vscode-icons:file-type-styled"],
      href: "https://sandy-x.com",
      image: "/sandy-x.com.png",
    },
    {
      name: "Super Delta HVAC",
      description: "HVAC company landing page",
      stack: ["logos:react", "vscode-icons:file-type-styled"],
      href: "https://superdeltahvac.ca",
      image: "/superdeltahvac.ca.png",
    },
    {
      name: "Trivial Trivia",
      description: "Simple trivia game",
      stack: ["logos:react", "vscode-icons:file-type-styled"],
      href: "https://sandy-x.com",
      image: "/sandy-x.com.png",
    },
    {
      name: "Trivial Trivia",
      description: "Simple trivia game",
      stack: ["logos:react", "vscode-icons:file-type-styled"],
      href: "https://sandy-x.com",
      image: "/sandy-x.com.png",
    },
    {
      name: "Trivial Trivia",
      description: "Simple trivia game",
      stack: ["logos:react", "vscode-icons:file-type-styled"],
      href: "https://sandy-x.com",
      image: "/sandy-x.com.png",
    },
    {
      name: "Trivial Trivia",
      description: "Simple trivia game",
      stack: ["logos:react", "vscode-icons:file-type-styled"],
      href: "https://sandy-x.com",
      image: "/sandy-x.com.png",
    },
  ];

  return (
    <div className={styles.grid}>
      {projects.map(project => (
        <Project
          key={projects.indexOf(project)}
          name={project.name}
          description={project.description}
          stack={project.stack}
          href={project.href}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
