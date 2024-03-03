import ProjectCard from './ProjectCard'
import Spacer from '../components/Spacer'
import { projects } from '@/data/profiles'
import Navbar_mui from '../components/Navbar_MUI'

import '@/styles/Projects.css'
import '@/styles/index.css'
import '@/styles/App.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <div id="top" className="app">
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
