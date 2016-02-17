import AltContainer from 'alt-container';
import React from 'react';

import Menu from '../Menu.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

import Tutorials from './Tutorials.jsx';

import TutorialActions from '../../actions/TutorialActions';
import TutorialStore from '../../stores/TutorialStore';


export default class App extends React.Component {

/*
    this.state = {
      tutorials: [
        {
          id: uuid.v4(),
          lank: 'https://survivejs.com/'
        },
        {
          id: uuid.v4(),
          lank: 'http://www.hackingwithreact.com/'
        },
        {
          id: uuid.v4(),
          lank: 'https://html5hive.org/how-to-submit-forms-and-save-data-with-react-js-and-node-js/'
        }
      ]
    };
*/
  render() {

    return (
      <div className="content">
        <Header />
        <Menu />
        <center>
          <h2>Tutorials</h2>
          <hr />
        </center>

        <br />
        <button className="add-note" onClick={this.addTutorial}>+ ADD TUTORIAL</button>

        <AltContainer
          stores={[TutorialStore]}
          inject={{
            tutorials: () => TutorialStore.getState().tutorials
          }}
        >
          <Tutorials onEdit={this.editTutorial} onDelete={this.deleteTutorial} />
        </AltContainer>
        <br />
        <Footer />
      </div>
    );

  }

  addTutorial = () => {
    TutorialActions.create({lank: 'Ny tutorial länk'});
  };

  editTutorial = (id, lank) => {
    // Don't modify if trying set an empty value
    if(!lank.trim()) {
      return;
    }

    TutorialActions.update({id, lank});
  };

  deleteTutorial = (id) => {
    TutorialActions.delete(id);
  };

}
