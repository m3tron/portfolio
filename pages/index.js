import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sunny Heyar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Landing />
      </main>
    </div>
  );
}
