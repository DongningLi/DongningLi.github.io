import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TaskIcon from '@mui/icons-material/Task'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

import { experience } from '@/data/profiles'
import uniqid from 'uniqid'
import Spacer from '../components/Spacer'
import Navbar from '../components/Navbar'

import '@/styles/index.css'
import '@/styles/App.css'
import '@/styles/Navbar.css'
import '@/styles/Experience.css'

function Experience() {
  return (
    <div id="top" className="app">
      {Spacer(2)}
      <Navbar />
      <h2 className="section__title">Relevant Experience</h2>

      <div className="experience">
        {experience.map((item) => (
          <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 5 }}>
            <Paper
              sx={{
                my: 2,
                mx: 'auto',
                p: 2,
              }}
            >
              <Grid container>
                <Grid item xs>
                  <h3 className="experienceTitle" key={uniqid()}>
                    {item.position}
                  </h3>
                  <span className="experiencePeriod" key={uniqid()}>
                    {item.period}
                  </span>

                  {item.Tasks.map((itemTask) => (
                    <ListItem>
                      <ListItemAvatar>
                        <TaskIcon />
                      </ListItemAvatar>
                      <ListItemText
                        className="experienceTask"
                        primary={itemTask.task}
                        secondary={itemTask.result}
                      />
                    </ListItem>
                  ))}
                </Grid>
              </Grid>
            </Paper>
          </Box>
        ))}
      </div>
    </div>
  )
}

export default Experience
