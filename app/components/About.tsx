//external import
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// internal import
import Skills from './Skills'
import Links from './Links'
import Spacer from './Spacer'
import { about } from '@/data/profiles'
import '@/styles/About.css'

const { greeting, name, description } = about

function About() {
  return (
    <CardContent className="card-content">
      <Typography variant="h1" align="center" className="greeting">
        {greeting}
        {" I'm "}
        {name}
      </Typography>
      {Spacer(1)}

      <Typography variant="h2" align="center" color="primary" className="title">
        {description[0]}
      </Typography>
      {Spacer(1)}

      <Skills />
      {Spacer(2)}
      <Links />
    </CardContent>
  )
}

export default About
