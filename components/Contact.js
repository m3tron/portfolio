import styles from "../styles/Contact.module.css";
import { Github, Linkedin, Maildotru } from "@icons-pack/react-simple-icons";

const Contact = () => {
  return (
    <section id="contact">
      <div className={styles.title}>Contact Me</div>
      <div className={styles.contact}>
        <p>Interested in collaborating?</p>
        <p>Please send me an e-mail and I'll be happy to connect.</p>
        <div className={styles.socialIcons}>
          <a
            href="mailto:sunny.heyar@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Maildotru className={styles.icon} title="E-mail" color="#fff" />
          </a>
          <a
            href="https://github.com/m3tron"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Github className={styles.icon} title="Github" color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/sunny-heyar-264158181/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin className={styles.icon} title="Linkedin" color="#fff" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
