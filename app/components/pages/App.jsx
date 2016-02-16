import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

import Menu from '../Menu.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;

    return (
      <div className="content">
      <Header />
      <Menu />

        <br />
        <button className="add-note" onClick={this.addNote}>+</button>

        <Notes notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />

      <Footer />
      </div>
    );

  }

  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  };

  editNote = (id, task) => {
    // Don't modify if trying set an empty value
    if(!task.trim()) {
      return;
    }

    const notes = this.state.notes.map(note => {
      if(note.id === id && task) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  };

}
