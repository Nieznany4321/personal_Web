import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from "@mui/icons-material/GitHub";
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.facebook.com/dawid.wilgucki.52'>
          <FacebookIcon/>
        </a>
        <a href='https://github.com/Nieznany4321'>
          <GithubIcon/>
        </a>
        
      </div>
      <p>&copy; 2023 Dawid Wilgucki</p>
    </div>
  )
}

export default Footer
