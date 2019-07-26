import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './landingPage.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div id="landingPage">
        <section id="mainInfo">
          <h1>Morgana Spake</h1>
          <h2>Software Developer</h2>
          <FontAwesomeIcon icon={ faGithub } />
          <FontAwesomeIcon icon={ faLinkedin } />
          <FontAwesomeIcon icon={ faEnvelope } />
          <button>View portfolio</button>
        </section>
        <p id="copyright">Image Copyright © 2015 Morgana Spake</p>
      </div>
    );
  }
}

//Background of some kind. Image? Video?
//Full page, at any size