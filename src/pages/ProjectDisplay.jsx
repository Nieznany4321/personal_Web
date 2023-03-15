import React from "react";
import { useParams } from "react-router-dom";
import   ProjectList   from "../common/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

export function ProjectDisplay() {
  const { id  } = useParams();
  const project = ProjectList[ id ];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img alt="Image of specific project"src={project.image}/>
      <p>Technologies: {project.skills}</p>
      <a href={project.link}>
        <GitHubIcon />
      </a>
      <p className="desc">Description: {project.description}</p>
      
    </div>
  );
}
