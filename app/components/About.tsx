import { about } from "@/data/profiles";
import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const { name, university, course, description, resume, social } = about;

function About() {
  return (
    <div className="about">
      <div className="about__pseudo-padding about__pseudo-padding-top" />

      {name && (
        <h1 className="about__greeting">
          Hey, I&apos;m <span className="text--strong">{name}</span>.
        </h1>
      )}

      {course && (
        <h1 className="about__role">
          I&apos;m a student in {course}
          {university && (
            <span>
              {" "}
              at <span className="text--strong">{university}</span>
            </span>
          )}
          .
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

        <div className="about__contact center">
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                  className="link link--icon"
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>

      <div className="about__pseudo-padding" />
    </div>
  );
}

export default About;
