import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sunny Heyar</title>
        <meta name="description" content="Sunny Heyar Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <Hero />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
