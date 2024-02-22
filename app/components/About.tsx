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
        <h1 className="about__role">
          A student in {course} from {university}.
        </h1>
      )}

      <div className="">
        {description && (
          <div className="about__desc paragraph__list">
            {description.map((item) => (
              <p key={uniqid()}>{item}</p>
            ))}
          </div>
        )}
      </div>

      <div className="about__pseudo-padding" />
    </div>
  )
}

export default About
