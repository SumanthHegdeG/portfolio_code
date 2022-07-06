import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import javascript from '../Images/javascript-original.svg'
import bootstrap from '../Images/bootstrap-plain.svg'
import css from '../Images/css3-original.svg'
import html from '../Images/html5-original.svg'
import material from '../Images/materialui-original.svg'
import mongo from '../Images/mongodb-original.svg'
import node from '../Images/nodejs-original.svg'
import react from '../Images/react-original.svg'
import sql from '../Images/mysql-original.svg'
import git from '../Images/git-plain.svg'
const skills = [
  {
    heading: 'JavaScript',
    img: javascript,
    progress: 90,
  },
  {
    heading: 'Bootstrap',
    img: bootstrap,
    progress: 90,
  },
  {
    heading: 'CSS3',
    img: css,
    progress: 90,
  },
  {
    heading: 'HTML-5',
    img: html,
    progress: 90,
  },
  {
    heading: 'ReactJS',
    img: react,
    progress: 80,
  },
  {
    heading: 'MaterialUI',
    img: material,
    progress: 80,
  },
  {
    heading: 'Mongo-DB',
    img: mongo,
    progress: 80,
  },
  {
    heading: 'Nodejs',
    img: node,
    progress: 80,
  },
  {
    heading: 'mySQL',
    img: sql,
    progress: 80,
  },
  {
    heading: 'GIT',
    img: git,
    progress: 80,
  },
]

const Skills = () => {
  return (
    <section id='skills'>
      <Row className='justify-content-around align-items-center'>
        <h1 className='text-center heading pt-5 mt-5'>Skills</h1>
        <Row className='justify-content-center gap-3'>
          {skills.map((skill, index) => (
            <Col className='skill shadow py-4' key={index} lg={2} md={3} xs={5}>
              <div>
                <img src={skill.img} height='50px' width='80px'></img>
                <span>{skill.heading}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </section>
  )
}

export default Skills
