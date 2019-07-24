import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <article>
        <section>
          <h2>About</h2>
          <p>I am a Full-stack software developer with a background in Theatrical Costuming and a passion for creating and building interesting things. I thrive on tackling and solving complex problems in deadline-oriented environments and am deeply motivated by the pursuit of growth and excellence.</p>
          <p>If you're intersted in my pursuits outside of coding <a href="http://morganaspake.weebly.com/">click here</a> to view my arts portfolio.</p>
        </section>
        <aside>
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <strong>Languages</strong>
              <p>JavaScript, HTML5, CSS, SQL, C#</p>
            </li>
            <li>
              <strong>Runtimes/Frameworks</strong>
              <p>Node.js, React, .NET Core</p>
            </li>
            <li>
              <strong>Tools</strong>
              <p>Git/GitHub, Terminal (Bash), VS Code, Postgres, MongoDB, SQL Server, RESTful APIs, Socket.io</p>
            </li>
            <li>
              <strong>OS</strong>
              <p>Windows, Linux</p>
            </li>
            <li>
              <strong>Deployment</strong>
              <p>AWS, Azure, Heroku, Netlify</p>
            </li>
          </ul>
        </aside>
      </article>
    );
  }
}