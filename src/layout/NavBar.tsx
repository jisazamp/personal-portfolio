import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'

import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value)
    setIsExpanded(false)
  }

  return (
    <Router>
      <Navbar
        expanded={isExpanded}
        expand='md'
        className={scrolled ? 'scrolled' : ''}
      >
        <Container>
          <Navbar.Brand href='/'>
            <img src={logo} alt='Logo' />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <span
                style={{ color: 'white', fontSize: '2.7rem' }}
                className='close'
                aria-label='Close'
              >
                &times;
              </span>
            ) : (
              <span className='navbar-toggler-icon'></span>
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='#skills'
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href='#projects'
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/juan-pablo-isaza-mar%C3%ADn-891924220/'
                >
                  <img src={navIcon1} alt='' />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className='vvd' onClick={() => setIsExpanded(false)}>
                  <span>Let???s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar
