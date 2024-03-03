import Navbar_mui from '../components/Navbar_MUI'
import { contact } from '../../data/profiles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { about } from '@/data/profiles'
import Spacer from '../components/Spacer'
import '@/styles/Contact.css'

const Contact = () => {
  const { social } = about
  if (!contact.email) return null

  return (
    <section className="section contact center" id="contact">
      <Navbar_mui />
      {Spacer(1)}
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
