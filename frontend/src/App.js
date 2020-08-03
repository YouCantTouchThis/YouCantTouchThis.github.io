import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Calculator from './calculator/calculator';
import Checkup from './checkup/checkup';
import Contact from './contact/contact';
import Dashboard from './dashboard/dashboard';
import Landing from './landing/Landing';
import Login from './login/login';
import RehabAdmin from './rehabAdmin/rehabAdmin';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/checkup' component={Checkup} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/login' component={Login} />
        <Route path = '/admin' component={RehabAdmin} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
