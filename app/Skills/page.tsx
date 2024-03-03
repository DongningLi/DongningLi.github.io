import '@/styles/Skills.css'
import Spacer from '../components/Spacer'
import Navbar_mui from '../components/Navbar_MUI'
import { skills } from '@/data/profiles'

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <Navbar_mui />
      {Spacer(1)}
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li className="skills__list-item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
