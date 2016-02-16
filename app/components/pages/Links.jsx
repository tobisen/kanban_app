import uuid from 'node-uuid';
import React from 'react';

import Menu from '../Menu.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

export default class App extends React.Component {
  render() {

    const Tutorials = [
      {
        id: uuid.v4(),
        link: 'https://survivejs.com/',
        name: 'SurviveJS'
      },
      {
        id: uuid.v4(),
        link: 'http://www.hackingwithreact.com/',
        name: 'Hacking with React'
      }
    ];

    return (
      <div className="content">
        <Header />
        <Menu />
        <center>
          <h2>Externa länkar</h2>
          <hr />
        </center>
        <h3>Tutorials</h3>
        <ul>{Tutorials.map(tutorial =>
          <li key={tutorial.id}><a href={tutorial.link} target="_blank">{tutorial.name}</a></li>
        )}</ul>

        <Footer />
      </div>
    );

  }
}
