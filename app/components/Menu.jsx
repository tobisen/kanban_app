import React from 'react';
import { Link } from 'react-router';

export default () => <div className="menu">
  <span className="menu-links">
    <Link to="/">START</Link> |
    <Link to="/app"> KANBAN APP</Link> |
    <Link to="/links"> LÄNKAR</Link>
  </span>
</div>;
