import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Main from './Main';
import Register from './Register'
import Edit from './Edit'
import { useEffect } from 'react';



function App() {
  
  return (
    <div className="background">
      <div className='background-title'>
        <h3 className='head-title'>중국어 단어장</h3>
      </div>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/edit/:num'>
            <Edit></Edit>
          </Route>
    </div>
  );
}

export default App;
