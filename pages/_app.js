import "normalize.css";
import "../styles/globals.css";
import { useEffect } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const pingBackend = async () => {
    await axios.get("https://calm-caverns-97054.herokuapp.com/ping");
  };

  useEffect(() => {
    pingBackend();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
