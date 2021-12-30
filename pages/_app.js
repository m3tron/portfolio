import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
