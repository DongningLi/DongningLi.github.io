'use client'

import uniqid from 'uniqid'
import Image from 'next/image'
import Modal from 'react-modal'
import { useSearchParams } from 'next/navigation'
import { projects } from '@/data/profiles'
import '@/styles/ProjectDetail.css'
import { useRouter } from 'next/navigation'
import CloseIcon from '@mui/icons-material/Close'

interface projectType {
  thumbnail: string
  name: string
  description: string[]
  stack: string[]
  sourceCode: string
}

function ProjectDetail() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const projectName = searchParams ? searchParams.get('name') : ''

  const project = projects.filter((obj) => obj.name === projectName)[0]

  return (
    <>
      <Modal
        isOpen={!!projectName}
        onRequestClose={() => router.push('/Projects')}
        contentLabel="Post modal"
      >
        <CloseIcon
          className="project__detail_closeIcon"
          onClick={() => {
            router.push('/Projects')
          }}
        />
        <div className="project__detail">
          <div>
            {project.thumbnail && (
              <Image
                className="project__detail__thumbnail"
                src={project.thumbnail}
                alt="thumbnail"
                width={500}
                height={500}
              />
            )}

            {project.name && (
              <h1 className="project__detail__name">{project.name}</h1>
            )}

            {project.description && (
              <div className="project__detail__description">
                {project.description.map((item: string) => (
                  <p key={uniqid()}>{item}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProjectDetail
