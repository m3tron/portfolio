import styles from "../styles/Contact.module.css";

const Contact = () => {
  const onSubmit = event => {
    event.preventDefault();
    console.log("submitted");
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
