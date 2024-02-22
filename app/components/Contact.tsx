import Spacer from './Spacer'
import { contact } from '../../data/profiles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { about } from '@/data/profiles'

const Contact = () => {
  const { social } = about
  if (!contact.email) return null

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>

      <div className="about__contact center">
        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <EmailIcon fontSize="large" />
        </a>

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
                <GitHubIcon fontSize="large" />
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
                <LinkedInIcon fontSize="large" />
              </a>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Contact
