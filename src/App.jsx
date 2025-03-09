import { useState } from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'
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
      </div>
    </>
  )
}

export default App
