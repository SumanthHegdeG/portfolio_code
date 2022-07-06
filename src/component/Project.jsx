import React from 'react'
import { Button, Col, Image, Row, Table, Dropdown } from 'react-bootstrap'
import goalSetter from '../Images/goalSetter.png'
import ecommerce from '../Images/ecommerce.png'
import chatapp from '../Images/chatapp.png'
import foodapp from '../Images/foodapp.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const projects = [
  {
    heading: 'Goalsetter',
    img: goalSetter,
    desc: 'WebApplication Developed using MERN allows you to list out the todos , includes CRUD operation with Login- Register Functionality .',
    live: 'https://goalsetting-su.herokuapp.com/',
    backCode: 'https://github.com/SumanthHegdeG/GoalSetting/tree/main/backend',
    frontCode:
      'https://github.com/SumanthHegdeG/GoalSetting/tree/main/frontend',
    credentials: { username: 'admin@admin.com', password: 'admin' },
  },
  {
    heading: 'HMart',
    img: ecommerce,
    desc: 'Web Application Developed using MERN(MongoDB Express React Node)stack Allows you to order item , and with Admin CRUD functionality for item , order management with paypal payment interface .',
    live: 'https://sucommerce.herokuapp.com/',
    backCode:
      'https://github.com/SumanthHegdeG/EcommerceHMart/tree/main/backend',
    frontCode:
      'https://github.com/SumanthHegdeG/EcommerceHMart/tree/main/frontend',
    credentials: {
      username: 'admin@admin.com',
      password: 'admin',
      Euser: 'user@user.com',
      Epassword: 'user',
    },
  },
  {
    heading: 'Group-App',
    img: chatapp,
    desc: 'Web Application Developed using MERN(MongoDB Express React Node)stack, with socket.io allows you to Chat within the community.',
    live: 'https://sumanthgroupchat.netlify.app/',
    backCode: 'https://github.com/SumanthHegdeG/GroupChatFull/tree/main/server',
    frontCode:
      'https://github.com/SumanthHegdeG/GroupChatFull/tree/main/public',
    credentials: { username: 'admin1@admin.com', password: 'admin123' },
  },
  {
    heading: 'Pizza4you',
    img: foodapp,
    desc: 'Web Application Developed using MERN(MongoDB Express React Node)stack Allows you to order pizza , admin console to add-delete-modify pizzas , order managenent , includes stripe payment Interface.',
    backCode: 'https://github.com/SumanthHegdeG/pizzaApp',
    frontCode: 'https://github.com/SumanthHegdeG/pizzaApp/tree/main/client',
    live: 'https://pizzasu.herokuapp.com/',
    credentials: {
      username: 'admin@admin.com',
      password: 'admin',

      Euser: 'user@user.com',
      Epassword: 'user',
    },
  },
]

const Project = () => {
  return (
    <section id='project'>
      <Row className='justify-content-around align-items-center'>
        <h1 className='text-center heading pt-5 mt-5'>Projects</h1>

        <Dropdown className='text-center heading pt-1 mt-1'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Credentials
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>username</th>
                  <th>email</th>
                  <th>password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>UserExample</td>
                  <td>user@example.com</td>
                  <td>12345678</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>admin</td>
                  <td>admin@example.com</td>
                  <td>12345678</td>
                </tr>
              </tbody>
            </Table>
          </Dropdown.Menu>
        </Dropdown>

        <Row className='justify-content-center gap-5 pt-5'>
          {projects.map((project, index) => (
            <Col className='shadow p-0 pb-3' key={index} md={5} xs={10}>
              <div>
                <Image src={project.img} fluid />
              </div>
              <hr className='mx-3' />
              <div className='px-3'>
                <h3>{project.heading}</h3>

                <p>{project.desc}</p>
              </div>
              <hr className='mx-3' />
              <div className='d-flex justify-content-between px-3 mt-auto'>
                <a href={project.live} target='_Blank'>
                  <Button>Live</Button>
                </a>

                <div className='d-flex gap-3'>
                  <a href={project.backCode} target='_Blank'>
                    <Button>Backend</Button>
                  </a>
                  <a href={project.frontCode} target='_Blank'>
                    <Button>Frontend</Button>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </section>
  )
}

export default Project
