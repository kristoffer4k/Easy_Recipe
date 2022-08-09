import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);