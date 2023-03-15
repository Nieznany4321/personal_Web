import React from 'react'
import { ProjectItem }from "../components/ProjectItem"
import   ProjectList   from "../common/ProjectList"
import "../styles/Projects.css"

export function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className='projectList'>
            {ProjectList.map((project, index)=>{
              
              return <ProjectItem id={index} key={project} name={project.name} image={project.image}/>
            })} 
            
        </div>
    </div>
  )
}


