import React from 'react';

const seaWatch = {
  title: 'Sea Watch', 
  github: 'https://github.com/sea-watchers/sea-watch-app', 
  image: '', 
  technologies: 'HTML, CSS, JavaScript  |  EJS  |  Express.js  |  Postgres',
  contributions: 'Retrieving data from multiple APIs, selectively accessing the relevant details, rendering the results to the site. Paired programming Navigator.',
  description: 'Synthesizing data from multiple APIs, Sea Watch offers up-to-date weather conditions to the marine community. Search a coastal location and view the weather and tide data for the week.', 
};
const nim = {
  title: 'Nim', 
  github: 'https://github.com/401-advanced-javascript-nimble', 
  image: '', 
  technologies: 'JavaScript  |  CLI: Commander  |  Game Server/Client: Socket.io  |  MongoDB',
  contributions: 'Socket.io game server, including 100% jest test coverage.',
  description: 'Turn-based strategy game. Two-player integration via downloadable CLI/game client (download from npm).'
};
const awsomScheduler = {
  title: 'Awsom Scheduler', 
  github: 'https://github.com/cf-awsom-scheduler', 
  image: '', 
  technologies: 'JavaScript, JSX, CSS  |  C# .NET Core  |  Next Framework  |  SQL Server',
  contributions: '.NET Core backend API, complete with SQL database interaction and roles-based authorization using JWT. Learned the basics of C# and .NET Core APIs in 1½ - 2 weeks. Team Lead.',
  description: 'Teacher Portal and scheduling aid for the Awsom Music school. Integrates with their existing system to help reduce the load on their scheduler. Uses their provided Awsom email addresses to restrict sign up access.'
};

export default class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        seaWatch,
        nim,
        awsomScheduler,
      ],
    }
  }
  render() {
    return (
      <article id="projects">
        <h2>Projects</h2>
        { this.state.projects.map( project => (
          <section key={ project.title }>
            <h3>{ project.title }</h3>
            <a href={ project.github }>view code on GitHub</a>
            <p>{ project.description }</p>
            <ul>
              <li>Technologies Used: { project.technologies }</li>
              <li>Personal Contributions: { project.contributions }</li>
            </ul>
            <img src={ project.image }></img>
          </section>
        ))}
      </article>
    );
  }
}

//Map stored project objects (links, images, description)
//Change layout based on screen size
//Select projects carefully