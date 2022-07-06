import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar
      variant='dark'
      expand='lg'
      style={{ backgroundColor: '#413c58' }}
      sticky='top'
    >
      <Container className='fs-5'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Brand className='fs-3' href='#home'>
          Sumanth Hegde
        </Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#aboutUs'>About</Nav.Link>
            <Nav.Link href='#skills'>Skils</Nav.Link>
            <Nav.Link href='#project'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
