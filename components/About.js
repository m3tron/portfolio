import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.title}>About Me</div>
      <div className={styles.information}>
        <img src="me.png" alt="Profile picture" className={styles.image} />
        <div className={styles.description}>
          <p>
            I'm a full stack web developer currently based in Toronto with
            experience working remotely.
          </p>
          <p>
            I mostly develop using the MERN stack, but I'm highly adaptable to
            any tool or technology a project requires. I'm continuously learning
            about new web concepts and enjoy the technological challenges they
            present.
          </p>
          <p>
            When I'm not coding, you can find me in the gym, at the park playing
            volleyball, or riding my motorcycle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
