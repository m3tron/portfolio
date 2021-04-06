import "normalize.css";
import "@styles/global.css";
import Head from "next/head";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sunny Heyar</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default AppComponent;
