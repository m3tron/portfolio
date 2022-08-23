import styles from "../styles/About.module.css";

import React from "react";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.title}>About Me</div>
      <div className={styles.information}>
        <img src="me.png" alt="My face" className={styles.image} />
        <div className={styles.description}> Description about me</div>
      </div>
    </section>
  );
};

export default About;
