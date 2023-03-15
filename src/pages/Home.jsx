import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import { Icon } from '@iconify/react';
import "../styles/Home.css";
export function Home() {
  return (
    
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Dawid</h2>
        <div className="prompt">
          <p>A student of Applied Computer Science with passion for learning and creating</p>
          <a href="mailto: dawid123wilgucki@wp.pl">
            <EmailIcon/> 
          </a>
          <a href="https://github.com/Nieznany4321">
          <GithubIcon/>
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>ReactJS, HTML, CSS, SASS, LESS, TailwindCSS</span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>C#, ASP .NET, EF, MS SQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
}