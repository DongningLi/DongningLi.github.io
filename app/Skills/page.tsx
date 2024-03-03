import uniqid from 'uniqid'
import Spacer from '../components/Spacer'
import { skills } from '@/data/profiles'
import Navbar_mui from '../components/Navbar_MUI'
import '@/styles/Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className="section skills" id="skills">
      <Navbar_mui />
      {Spacer(1)}
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={uniqid()} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
