import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import KitchenTips from './components/KitchenTips';
import ContactUs from './components/ContactUs';

ReactDOM.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/tips' element={<KitchenTips/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);