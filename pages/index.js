import Head from "next/head";
import styles from "../styles/Home.module.css";

import Landing from "../components/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunny Heyar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  );
}