import Head from "next/head";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sunny Heyar</title>
        <meta name="description" content="Sunny Heyar Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className={styles.wrapper}>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
