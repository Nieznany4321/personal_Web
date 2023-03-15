import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Contact.css';
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ad92tul",
        "template_3z5sz07",
        form.current,
        "FtVeBf7IVsplzp-HG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
        
      );
      e.target.reset()
  };

  return (
    <div className="container">
        <ul className="personalList">
          <h1>Contact data</h1>
          <li><a href='https://www.facebook.com/dawid.wilgucki.52'><FacebookIcon/></a><span>Dawid Wilgucki</span></li>
          <li><a href="mailto: dawid123wilgucki@wp.pl"><EmailIcon/></a><span>dawid123wilgucki@wp.pl</span></li>
          <li><a href="https://github.com/Nieznany4321"><GithubIcon/></a><span>Nieznany4321</span></li>
        </ul>
      <div className="styledForm">
        <StyledContactForm  style={{margin: "auto"}}>
          <h1 className="title">Contact form</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Subject</label>
            <input type="text" name="subject" required/>
            <label>Name</label>
            <input type="text" name="user_name" required/>
            <label>Email</label>
            <input type="email" name="user_email" required/>
            <label>Message</label>
            <textarea name="message" required/>
            <input type="submit" value="Send"/>
          </form>
        </StyledContactForm>
      </div>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 250px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
    input[type="submit"]:hover {
      background: rgb(250,164,96);
    }
  }
`;
