import '@/styles/Skills.css'
import { skills } from '@/data/profiles'
import uniqid from 'uniqid'

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <ul className="skills__list" key={uniqid()}>
        {skills.map((skill) => (
          <li className="skills__list-item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
