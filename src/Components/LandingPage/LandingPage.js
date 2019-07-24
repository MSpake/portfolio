import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Morgana Spake</h1>
        <h2>Software Developer</h2>
        <button>View portfolio</button>
        <FontAwesomeIcon icon={ faGithub } />
        <FontAwesomeIcon icon={ faLinkedin } />
        <FontAwesomeIcon icon={ faEnvelope } />
      </div>
    );
  }
}

//Background of some kind. Image? Video?
//Full page, at any size