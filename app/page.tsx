import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "../styles/index.css";
import "../styles/App.css";
import "../styles/About.css";
import "../styles/Contact.css";
import "../styles/Footer.css";
import "../styles/Navbar.css";
import "../styles/ProjectCard.css";
import "../styles/Projects.css";
import "../styles/ScrollToTop.css";
import "../styles/Skills.css";

function Home() {
  return (
    <div id="top" className="app">
      <Navbar />

      <main>
        <About />
        <div className="">
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Home;
