import Script from "next/script";
import "../styles/globals.css";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></Script>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
