import React from 'react'
import { Button, Row } from 'react-bootstrap'
import {
  FaGithub,
  FaLinkedin,
  FaPortrait,
  FaPhone,
  FaMailBulk,
} from 'react-icons/fa'

const contacts = [
  {
    name: 'github',
    link: 'https://github.com/SumanthHegdeG',
    img: <FaGithub />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/sumanth-hegde-g-60b51410b/',
    img: <FaLinkedin />,
  },
  {
    name: 'resume',
    link: 'https://drive.google.com/file/d/105HXETZIdZ1X20nG1tzgSRBnlrucbc3S/view?usp=sharing',
    img: <FaPortrait />,
  },
  {
    name: 'phone',
    link: 'tel:9845384200',
    img: <FaPhone />,
  },
  {
    name: 'email',
    link: 'mailto:sumanthyashu@gmail.com',
    img: <FaMailBulk />,
  },
]

const Project = () => {
  return (
    <section id='contact'>
      <Row className=' align-items-center justify-content-center flex-column gap-3 '>
        <h1 className='text-center heading mb-5'>Contact Me</h1>
        {contacts.map((contact, index) => (
          <a
            key={index}
            className='col-lg-4 col-md-6 col-sm-9'
            href={contact.link}
            target='_Blank'
          >
            <Button className='col-12'>
              {contact.img}
              {`  ${contact.name}`}
            </Button>
          </a>
        ))}
      </Row>
    </section>
  )
}

export default Project
