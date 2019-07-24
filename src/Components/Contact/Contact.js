import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="mailto:morgana.spake@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /></a> 
            <a href="mailto:morgana.spake@gmail.com">morgana.spake@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/MSpake"><FontAwesomeIcon icon={ faGithub } /></a> 
            <a href="https://github.com/MSpake">github.com/MSpake</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/morganaspake/"> <FontAwesomeIcon icon={ faLinkedin } /></a> 
            <a href="https://www.linkedin.com/in/morganaspake/">linkedin.com/in/morganaspake</a>
          </li>
        </ul>
      </section>
    );
  }
}

//Email, phone, linkedin, github
//Email contact form???