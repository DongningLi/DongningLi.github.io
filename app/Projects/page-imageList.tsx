import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import uniqid from 'uniqid'

import Navbar from '../components/Navbar'
import Spacer from '../components/Spacer'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/profiles'

import '@/styles/Projects.css'
import '@/styles/index.css'
import '@/styles/App.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <div id="top" className="app">
      <Navbar />
      {Spacer(1)}
      <ImageList>
        {projects.map((project) => (
          <ImageListItem key={uniqid()}>
            <img
              srcSet={`${project.thumbnail[0]}?fit=crop&auto=format&dpr=2 2x`}
              src={`${project.thumbnail[0]}?fit=crop&auto=format`}
              alt={project.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={project.name}
              subtitle={project.description}
              // actionIcon={
              //   <IconButton
              //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              //     aria-label={`info about ${project.name}`}
              //   >
              //     <InfoIcon />
              //   </IconButton>
              // }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Projects
