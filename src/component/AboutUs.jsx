import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import img from '../Images/aboutUsImg.jpg'

import '../app.css'

const AboutUs = () => {
  const resumeLink =
    'https://drive.google.com/file/d/105HXETZIdZ1X20nG1tzgSRBnlrucbc3S/view'

  const Linkedin = 'https://www.linkedin.com/in/sumanth-hegde-g-60b51410b/'
  const github = 'https://github.com/SumanthHegdeG'
  return (
    <section id='aboutUs'>
      <Row className='justify-content-between align-items-center'>
        <Col md={6} sm={7} xs={9} lg={5}>
          <Image src={img} fluid />
        </Col>
        <Col md={12} lg={6}>
          <h1 className='heading mb-5'>About</h1>
          <p className='fs-5 m-0'>
            I'm a <span className='fw-bold'>Full stack</span> developer
          </p>
          <p className='fs-5 m-0'>
            An enthusiastic, sincere and excited programmer who likes to involve
            in the projects all in.I really love to learn new technologies and
            implement them.I'm Goal oriented and will focus on completing the
            work given to me on time. Don't beleive me ? Hire me, so that you
            could see this in action.
          </p>
          <div className='mt-3 d-flex gap-4 buttons'>
            <a href={resumeLink} target='_Blank'>
              <Button size='lg' className='mt-3'>
                Resume
              </Button>
            </a>
            <a href={Linkedin} target='_Blank'>
              <Button size='lg' className='mt-3'>
                Linkedin
              </Button>
            </a>
            <a href={github} target='_Blank'>
              <Button size='lg' className='mt-3'>
                Github
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default AboutUs
