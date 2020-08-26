import React from 'react';
import Checkout from './Checkout'
import Home from './Home'
import LoginPage from './LoginPage'
import Header from './Header'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
  <div>
    
    <BrowserRouter>
    <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/checkout' exact component={Checkout}/>
      <Route path='/login' exact component={LoginPage}/>
    </BrowserRouter>
  </div>
  );
}

export default App;
