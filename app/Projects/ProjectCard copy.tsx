'use client'

//external import
import uniqid from 'uniqid'
import { Button, Stack, CardMedia, CardContent, Card } from '@mui/material'

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
    <Card
      className="projectCard-card"
      variant="outlined"
      sx={{
        backgroundImage: project.thumbnail[0],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 200,
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        image={project.thumbnail[0]}
        className="projectCardMedia"
      />
      <CardContent className="projectCardText">
        <Stack direction="row" spacing={2} className="project-title-stack">
          <h2>{project.name}</h2>
          <span className="project-tag-stack">
            {project.stack.map((item: string) => (
              <p key={uniqid()} className="project__stack-item">
                <Button variant="outlined" color="secondary">
                  {item}
                </Button>
              </p>
            ))}
          </span>
        </Stack>

        {project.description && (
          <div className="project__description paragraph__list">
            {project.description.map((item: string) => (
              <h5 key={uniqid()}>{item}</h5>
            ))}
          </div>
        )}

        <div className="projectCardButtons">
          <Button
            size="large"
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
            size="large"
            color="primary"
            className="viewCode"
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
          >
            VIEW CODE
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
