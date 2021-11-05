import GlobalStyle from "../GlobalStyle";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
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

export default HomePage;
