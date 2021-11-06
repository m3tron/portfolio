import Head from "next/head";
import Header from "../components/Header";
import "../../node_modules/normalize.css/normalize.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bgone: #21222c;
    --bgtwo: #954827;
    --text:#ffb86c;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(to bottom right, var(--bgone) 0%, var(--bgtwo) 100%);
    background-size: 200% 200%;
    animation: movingGradient 5s ease-in-out infinite alternate;
    color:var(--text)
  }
  
  @keyframes movingGradient{
  from {background-position: 0 0;}
  to {background-position: 100% 100%}
}
`;

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Head>
      <meta charSet="utf-8" />
      {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossOrigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <title>Sunny's Portfolio</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
