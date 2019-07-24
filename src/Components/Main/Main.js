import React from 'react';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    );
  }
}