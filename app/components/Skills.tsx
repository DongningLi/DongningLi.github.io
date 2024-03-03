import '@/styles/Skills.css'
import { skills } from '@/data/profiles'

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <ul className="skills__list">
        {skills.map((skill) => (
          <li className="skills__list-item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
