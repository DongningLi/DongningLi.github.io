import { StyledEngineProvider } from '@mui/material/styles'

import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './Projects/page'

import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Footer.css'

function Home() {
  return (
    <div id="top" className="app">
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
      <About />
      <Footer />
    </div>
  )
}

export default Home
