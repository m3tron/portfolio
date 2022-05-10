import Image from "next/image";
import styles from "../styles/Projects.module.css";

import sandyx from "../public/sandy-x.com.png";

const Projects = () => {
  return (
    <section style={{ height: "100vh" }} id="projects">
      <div className={styles.title}>Projects</div>
      <div className={styles.project}>
        <div className={styles.image}>
          <Image src={sandyx} layout="responsive" />
        </div>
        <div className={styles.information}>
          <div className={styles.name}>Sandy-X Inc.</div>
          <div className={styles.description}></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
