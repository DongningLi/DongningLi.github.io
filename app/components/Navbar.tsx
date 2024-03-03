'use client'

//external import
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/navigation'

//internal import
import { projects, experience, contact } from '@/data/profiles'

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dongning Li
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                onClick={() => {
                  router.push('/')
                }}
              >
                <Typography textAlign="center">About Me</Typography>
              </MenuItem>

              {projects.length && (
                <MenuItem
                  onClick={() => {
                    router.push('/Projects')
                  }}
                >
                  <Typography textAlign="center">Projects</Typography>
                </MenuItem>
              )}

              {experience.length && (
                <MenuItem
                  onClick={() => {
                    router.push('/Experience')
                  }}
                >
                  <Typography textAlign="center">Experience</Typography>
                </MenuItem>
              )}

              {contact && (
                <MenuItem
                  onClick={() => {
                    router.push('/Contact')
                  }}
                >
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dongning Li
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => {
                router.push('/')
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About Me
            </Button>

            {projects.length && (
              <Button
                onClick={() => {
                  router.push('/Projects')
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Projects
              </Button>
            )}

            {experience.length && (
              <Button
                onClick={() => {
                  router.push('/Experience')
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Experience
              </Button>
            )}

            {contact && (
              <Button
                onClick={() => {
                  router.push('/Contact')
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
