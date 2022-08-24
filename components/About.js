import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.title}>About Me</div>
      <div className={styles.information}>
        <img src="me.png" alt="My face" className={styles.image} />
        <div className={styles.description}>
          <p>
            I'm a full stack web developer currently based in Toronto with
            experience working remotely.
          </p>
          <p>
            I mostly develop using the MERN stack, but I'm highly adaptable to
            any tool or technology a project requires.
          </p>
          <p>
            When I'm not coding, I like to workout, play volleyball, and ride or
            work on my motorcycle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
