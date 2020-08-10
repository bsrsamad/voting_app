import React from 'react';
import home from './components/home';
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import './App.css';

const App= ( ) => {

  return (
    <div>
      <BrowserRouter>
    <Switch>
      <Route path='/' exact component={home} />
      
    </Switch>
      </BrowserRouter>
    </div>

  )
}

export default App;
