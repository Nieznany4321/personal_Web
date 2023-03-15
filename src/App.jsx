import React from 'react'
import { HashRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import Contact from './pages/Contact';
import { Navbar } from './components/Navbar'
import "./App.css"
import Footer from './components/Footer';
import { ProjectDisplay } from './pages/ProjectDisplay';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/project/:id" element={<ProjectDisplay/>} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
function WrappedApp() {
  return(
    <HashRouter>
      <App/>
    </HashRouter>
  )
}
export default WrappedApp
