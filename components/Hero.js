import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.typingContainer}>
        <div className={styles.typed1}>Hello World!</div>
      </div>
      <div className={styles.typingContainer}>
        <div className={styles.typed2}>
          My name is <span className={styles.name}>Sunny Heyar</span>.
        </div>
      </div>
      <div className={styles.typingContainer}>
        <div className={styles.typed3}>I'm a Full Stack Web Developer.</div>
      </div>
    </section>
  );
};

export default Hero;
