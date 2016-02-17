import React from 'react';
import Tutorial from './Tutorial.jsx';

export default ({tutorials, onEdit, onDelete}) => {
  return (
        <ul className="notes">{tutorials.map(tutorial =>
          <li className="note" key={tutorial.id}>
            <strong>
              <Tutorial
                lank={tutorial.lank}
                onEdit={onEdit.bind(null, tutorial.id)}
                onDelete={onDelete.bind(null, tutorial.id)} />
                <a href={tutorial.lank} target="_blank">Gå till sidan</a>
            </strong>
          </li>
        )}</ul>
  );
}
