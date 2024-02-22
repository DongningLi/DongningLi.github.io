'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { projects, experience } from '@/data/profiles'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const toggleNavList = () => {
    if (showNavList) {
      document.body.classList.remove('disable-scroll')
      setScrolled(true)
    } else {
      document.body.classList.add('disable-scroll')
      setScrolled(false)
    }
    setShowNavList(!showNavList)
  }

  const hideNavList = () => {
    document.body.classList.remove('disable-scroll')
    setShowNavList(false)
  }

  return (
    <nav className="center nav">
      <div className="nav__content">
        <ul
          style={{ display: showNavList ? 'contents' : 'none' }}
          className="nav__list"
        >
          <li
            className="nav__list-item"
            onClick={() => {
              router.push('/')
            }}
          >
            <strong>About Me</strong>
          </li>

          {projects.length && (
            <li
              className="nav__list-item"
              onClick={() => {
                router.push('/Projects')
              }}
            >
              <strong>Projects</strong>
            </li>
          )}

          {experience.length && (
            <li
              className="nav__list-item"
              onClick={() => {
                router.push('/Experience')
              }}
            >
              <strong>Experience</strong>
            </li>
          )}
        </ul>

        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__button .nav.shadow"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon fontSize="large" />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
