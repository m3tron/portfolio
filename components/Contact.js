import styles from "../styles/Contact.module.css";
import { useState } from "react";

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
      <div className={styles.contact}>
        <div className={styles.title}>Contact</div>
        <div>You can get in touch with me at sunny.heyar@gmail.com</div>
        <button className={styles.emailButton}>
          <a href="mailto:sunny.heyar@gmail.com">E-mail me</a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
