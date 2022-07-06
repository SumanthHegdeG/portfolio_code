import Header from './component/Header'
import Home from './component/Home'
import { Container } from 'react-bootstrap'
import AboutUs from './component/AboutUs'
import './app.css'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Project from './component/Project'
import Footer from './component/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <AboutUs />
        <Skills />
        <Project />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App
