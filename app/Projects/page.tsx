import Navbar_mui from '../components/Navbar'
import Spacer from '../components/Spacer'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

import '@/styles/Projects.css'
import '@/styles/index.css'
import '@/styles/App.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <div id="top" className="app">
      <Navbar_mui />
      {Spacer(1)}
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
