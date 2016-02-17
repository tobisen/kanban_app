
import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';

import NoteActions from '../../actions/NoteActions';
import NoteStore from '../../stores/NoteStore';

import Menu from '../Menu.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

export default class App extends React.Component {
  render() {

    return (
      <div className="content">
      <Header />
      <Menu />

        <br />
        <button className="add-note" onClick={this.addNote}>+ ADD NOTE</button>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getState().notes
          }}
        >
          <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>


      <Footer />
      </div>
    );

  }

  deleteNote(id) {
    NoteActions.delete(id);
  }

  addNote() {
    NoteActions.create({task: 'New task'});
  }

  editNote(id, task) {
    // Don't modify if trying set an empty value
    if(!task.trim()) {
      return;
    }

    NoteActions.update({id, task});
  }
}
