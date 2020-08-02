import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/checkup' component={Checkup} />
        <Route path='/rehab' component={RehabAdmin} />
        <Route path='/calculator' component={Calculator} />
      </Switch>
    </main>
  );
}

export default App;
