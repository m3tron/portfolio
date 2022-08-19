import styles from "../styles/Contact.module.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    // https://calm-caverns-97054.herokuapp.com/ //

    const response = await axios.post(
      "https://calm-caverns-97054.herokuapp.com/sendmail",
      { name, email, message }
    );

    if (response.status === 200) {
      console.log(success);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.title}>Contact</div>
      <div>
        Use the form or email me at{" "}
        <a href="mailto:sunny.heyar@gmail.com">sunny.heyar@gmail.com</a>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.input}>
          <input type="text" id="name" />
          <label htmlFor="name">Your Name</label>
        </div>

        <div className={styles.input}>
          <input type="email" id="email" />
          <label htmlFor="email">E-mail Address</label>
        </div>

        <div className={styles.input}>
          <textarea id="message" />
          <label htmlFor="message">Leave me a message</label>
        </div>

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
