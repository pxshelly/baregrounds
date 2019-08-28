import React from 'react';
import Routes from './Routes.jsx';
import { Link } from 'react-router-dom';

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">FrontPage</Link>
        </li>
        <li>
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to='/humanactivity'>Human Actvity</Link>
        </li>
        <li>
          <Link to="saveourworld">Save Our World</Link>
          </li>
      </ul>
      <Routes />
    </nav>
  );
}
 export default App;
