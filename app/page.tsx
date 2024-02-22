import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Skills.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'

function Home() {
  return (
    <div id="top" className="app">
      <Navbar />
      <main>
        <About />
        <div className="">
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
