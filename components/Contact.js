import styles from "../styles/Contact.module.css";

const Contact = () => {
  const onSubmit = event => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.title}>Contact</div>
      <div>Use the form or email me at sunny.heyar@gmail.com</div>
      <form onSubmit={onSubmit} className={styles.form}>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Please enter your name..." />

        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your e-mail..."
        />

        <label for="message">Message</label>
        <textarea id="message" placeholder="Leave me a message..." />

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
