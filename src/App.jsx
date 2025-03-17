import { useState } from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentNav, setCurrentNav] = useState('Me')

  return (
    <>
      <Nav currentNav={currentNav} setCurrentNav={setCurrentNav}/>
      <div className="body">
        <Intro/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
