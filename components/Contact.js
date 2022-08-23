import styles from "../styles/Contact.module.css";
import { useState } from "react";
import { Github, Linkedin, Maildotru } from "@icons-pack/react-simple-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    console.log(success);
  };

  return (
    <section id="contact">
      <div className={styles.title}>Contact Me</div>
      <div className={styles.contact}>
        <div>
          Interested in collaborating? Please send me an e-mail and I'll be
          happy to connect.
        </div>
        {/* <button className={styles.emailButton}>
          <a href="mailto:sunny.heyar@gmail.com">E-mail me</a>
        </button> */}
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
