import uniqid from "uniqid";
import Spacer from "./Spacer";
import { skills } from "../../data/profiles";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
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
  );
};

export default Skills;
