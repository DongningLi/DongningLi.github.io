import About from './components/About'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { StyledEngineProvider } from '@mui/material/styles'
import Navbar_mui from './components/Navbar_MUI'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Skills.css'
import '../styles/Contact.css'
import '../styles/Footer.css'

function Home() {
  return (
    <div id="top" className="app">
      <StyledEngineProvider injectFirst>
        <Navbar_mui />
      </StyledEngineProvider>
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
