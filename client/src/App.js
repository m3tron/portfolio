import GlobalStyle from "./GlobalSyle";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
