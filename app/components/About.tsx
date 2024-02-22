import { about } from '@/data/profiles'
import uniqid from 'uniqid'

const { name, university, course, description } = about

function About() {
  return (
    <div className="about">
      <div className="about__pseudo-padding about__pseudo-padding-top" />

      {name && (
        <h1 className="about__greeting">
          <span className="text--strong">{name}</span>
        </h1>
      )}

      {course && (
        <h2 className="about__role">
          {course} from {university}
        </h2>
      )}

      <div className="about__pseudo-padding" />
    </div>
  )
}

export default About
