'use client'

import uniqid from 'uniqid'
import Image from 'next/image'
import Modal from 'react-modal'
import { useSearchParams } from 'next/navigation'
import { projects } from '@/data/profiles'
import { useRouter } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import '@/styles/ProjectDetail.css'
import { Suspense } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface projectType {
  thumbnail: string
  name: string
  description: string[]
  stack: string[]
  sourceCode: string
}

function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const projectName = searchParams ? searchParams.get('name') : ''
  const project = projects.filter((obj) => obj.name === projectName)[0]

  return (
    <Modal
      isOpen={!!projectName}
      onRequestClose={() => router.push('/Projects')}
      contentLabel="Post modal"
    >
      <ArrowBackIcon
        className="project__detail_arrowBackIcon"
        onClick={() => {
          router.push('/Projects')
        }}
      />
      <div className="project__detail">
        <div>
          {project.thumbnail && (
            <Carousel>
              <div>
                <Image
                  className="project__detail__thumbnail"
                  src={project.thumbnail[0]}
                  alt="thumbnail"
                  width={500}
                  height={500}
                />
                <p className="legend">
                  {project.thumbnailDescription
                    ? project.thumbnailDescription[0]
                    : ''}
                </p>
              </div>
              <div>
                <Image
                  className="project__detail__thumbnail"
                  src={project.thumbnail[1]}
                  alt="thumbnail"
                  width={500}
                  height={500}
                />
                <p className="legend">
                  {project.thumbnailDescription
                    ? project.thumbnailDescription[1]
                    : ''}
                </p>
              </div>
              <div>
                <Image
                  className="project__detail__thumbnail"
                  src={project.thumbnail[2]}
                  alt="thumbnail"
                  width={500}
                  height={500}
                />
                <p className="legend">
                  {project.thumbnailDescription
                    ? project.thumbnailDescription[2]
                    : ''}
                </p>
              </div>
            </Carousel>
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
  )
}

function ProjectDetail() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  )
}

export default ProjectDetail
