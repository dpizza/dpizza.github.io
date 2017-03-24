import React from 'react';
import HomePage from './HomePage';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


const App = () => (
   <Router>
     <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:selection" component={HomePage} />
      </div>
   </Router>
);

export default App;
