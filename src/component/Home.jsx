import React from 'react'
import img from '../Images/homeImg.png'
import { Image, Row, Col, Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Home = () => {
  const Linkedin = 'https://www.linkedin.com/in/sumanth-hegde-g-60b51410b/'
  const github = 'https://github.com/SumanthHegdeG'
  return (
    <section id='home'>
      <Row className='justify-content-center align-items-center'>
        <Col lg={{ order: 'last' }} md={6} sm={7} xs={9}>
          <Image src={img} fluid />
        </Col>
        <Col md={12} lg={6}>
          <h4>Hello there, I'm</h4>
          <h1 style={{ color: '#413c58', fontSize: '50px' }}>Sumanth Hegde</h1>
          <p className='fs-3 m-0'>
            <span className='fw-bold'>Full stack</span> developer
          </p>
          <p className='fs-3 m-0'>
            Sincere and goal oriented, love to involve in projects that I work,
            all in
          </p>
          <div className='fs-3 d-flex gap-4 mt-3'>
            <a href={github} target='_Blank'>
              <FaGithub />
            </a>
            <a href={Linkedin} target='_Blank'>
              <FaLinkedin />
            </a>
          </div>
          <div className='mt-3 d-flex gap-4 buttons'>
            <a href='#project'>
              <Button size='lg' className='mt-3'>
                Projects
              </Button>
            </a>
            <a href='#contact'>
              <Button size='lg' className='mt-3'>
                Contact Me
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Home
