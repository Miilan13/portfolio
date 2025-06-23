import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  ) 
}

export default App
