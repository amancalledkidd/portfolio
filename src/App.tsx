import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Nav from './components/Nav/Nav'
import ProjectsList from './components/ProjectsList/ProjectsList'
import SkillList from './components/SkillsList/SkillsList'

function App() {
  
  return (
    <>
      <Nav />
      <Intro />
      <AboutMe />
      <SkillList />
      <ProjectsList />
      <Footer />
    </>
  )
}

export default App
