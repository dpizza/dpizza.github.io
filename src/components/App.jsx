import React from 'react';
import HomePage from './HomePage';
import MenuPage from './MenuPage';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


const App = () => (
   <Router>
     <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={MenuPage} />
      </div>
   </Router>
);

export default App;
