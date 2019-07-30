import React from 'react';
import './nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="#landingPage">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Expereince</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}