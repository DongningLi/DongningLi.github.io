'use client'

//external import
import uniqid from 'uniqid'
import { Button, Stack, CardContent, Card, Box } from '@mui/material'

//internal import
import { useRouter } from 'next/navigation'
import '@/styles/ProjectCard.css'

interface projectType {
  thumbnail: string[]
  videoThumbnail: string[]
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
      sx={{
        position: 'relative',
        borderRadius: '10px',
      }}
    >
      {project.thumbnail.length > 0 && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${project.thumbnail[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        />
      )}

      {project.videoThumbnail.length > 0 && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${project.videoThumbnail[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        />
      )}
      <CardContent
        className="projectCardText"
        sx={{
          backgroundColor: 'transparent',
        }}
      >
        <h2 className="projectCard-name">{project.name}</h2>
        <Stack direction="row" spacing={2} className="project-keyword-stack">
          <span className="project-tag-stack">
            {project.stack.map((item: string) => (
              <p key={uniqid()} className="project__stack-item">
                <Button
                  variant="outlined"
                  color="secondary"
                  className="projectCard-item-btn"
                >
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
