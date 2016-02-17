import uuid from 'node-uuid';
import alt from '../lib/alt';
import TutorialActions from '../actions/TutorialActions';

class TutorialStore {
  constructor() {
    this.bindActions(TutorialActions);

    this.tutorials = [];
  }

  create(tutorial) {
    const tutorials = this.tutorials;

    tutorial.id = uuid.v4();

    this.setState({
      tutorials: tutorials.concat(tutorial)
    });
  }

  update(updatedTutorial) {
    const tutorials = this.tutorials.map(tutorial => {
      if(tutorial.id === updatedTutorial.id) {
        // Object.assign is used to patch the note data here. It
        // mutates target (first parameter). In order to avoid that,
        // I use {} as its target and apply data on it.
        //
        // Example: {}, {a: 5, b: 3}, {a: 17} -> {a: 17, b: 3}
        //
        // You can pass as many objects to the method as you want.
        return Object.assign({}, tutorial, updatedTutorial);
      }
      return tutorial;
    });

    // This is same as `this.setState({notes: notes})`
    this.setState({tutorials});

  }
  delete(id) {
    this.setState({
      tutorials: this.tutorials.filter(tutorial => tutorial.id !== id)
    });
  }
}

export default alt.createStore(TutorialStore, 'TutorialStore');
