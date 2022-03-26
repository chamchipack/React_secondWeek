import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Main from './Main';
import Register from './Register'
import Edit from './Edit'
import { useEffect, useState } from 'react';



function App() {
  let [getCount, setCount] = useState();
  let [getNowid, setNowid] = useState();

  return (
    <div className="background">
      <div className='background-title'>
        <h3 className='head-title'>중국어 단어장</h3>
      </div>
          <Route exact path='/'>
            <Main setCount={setCount} getNowid={getNowid}></Main>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/edit/:num'>
            <Edit getCount={getCount} setNowid={setNowid}></Edit>
          </Route>
    </div>
  );
}

export default App;
