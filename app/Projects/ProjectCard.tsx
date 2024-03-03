'use client'

//external import
import uniqid from 'uniqid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import GitHubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'
import { Button, CardActionArea, CardActions } from '@mui/material'

//internal import
import { useRouter } from 'next/navigation'
import '@/styles/ProjectCard.css'

interface projectType {
  thumbnail: string[]
  name: string
  description: string[]
  stack: string[]
  sourceCode: string
}

function ProjectCard(project: projectType) {
  const router = useRouter()

  const createQueryString = (name: string, nameValue: string) => {
    const params = new URLSearchParams()
    params.set(name, nameValue)

    return params.toString()
  }

  return (
    <Card className="projectCard-div">
      <CardMedia component="img" height="500vh" image={project.thumbnail[0]} />
      <CardContent>
        <h2>{project.name}</h2>

        {project.description && (
          <div className="project__description paragraph__list">
            {project.description.map((item: string) => (
              <p key={uniqid()}>{item}</p>
            ))}
          </div>
        )}

        {project.stack && (
          <ul className="project__stack">
            {project.stack.map((item: string) => (
              <li key={uniqid()} className="project__stack-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        <Button
          size="small"
          color="primary"
          className="viewMore"
          onClick={() => {
            router.push(
              '/ProjectDetail' + '?' + createQueryString('name', project.name)
            )
          }}
        >
          View More
        </Button>
        <Button
          size="small"
          color="primary"
          className="viewCode"
          href={project.sourceCode}
          target="_blank"
          rel="noreferrer"
        >
          VIEW CODE
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
