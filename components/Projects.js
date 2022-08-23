import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { projectList } from "../lib/lists";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.title}>My Projects</div>
      {projectList.map(proj => (
        <div key={proj.name} className={styles.project}>
          <div className={styles.mobileName}>{proj.name}</div>
          <div className={styles.image}>
            <Image src={proj.image} layout="responsive" priority />
          </div>
          <div className={styles.information}>
            <div className={styles.name}>{proj.name}</div>
            <div className={styles.description}>{proj.description}</div>
            <div className={styles.stackTitle}>Tech stack</div>
            <div className={styles.stack}>
              {proj.stack.map(tech => (
                <a
                  key={tech.href}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tech.icon}
                </a>
              ))}
            </div>
            <div className={styles.links}>
              <a
                className={styles.link}
                href={proj.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                VIEW SITE
              </a>
              {proj.github && (
                <a
                  className={styles.link}
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  VIEW CODE
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
