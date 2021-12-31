import { createGlobalStyle, ThemeProvider } from "styled-components";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = {
  colors: {
    bgPrimary: "#21222c",
    bgSecondary: "#954827",
    text: "#ffb86c",
  },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Autography ;
    src: url(/Autography.otf);
  }
  
  html{
    scroll-behavior: smooth;
  }
  
  body{
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(to bottom right, ${
      theme.colors.bgPrimary
    } 0%, ${theme.colors.bgSecondary} 100%);
    background-size: 200% 200%;
    background-attachment: fixed;
    ${"" /* animation: movingGradient 5s ease-in-out infinite alternate; */}
    color:${theme.colors.text};
  }

  @keyframes movingGradient{
  from {background-position: 0 0;}
  to {background-position: 100% 100%}
}
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
