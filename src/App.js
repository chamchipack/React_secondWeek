import { useState } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Main from './Main';
import Register from './Register'
import Edit from './Edit'
import styled from 'styled-components';

function App() {
  let [getCount, setCount] = useState();
  let [getNowid, setNowid] = useState();

  return (
    <Background>
      <TitleBox>
        <h2 style={{textAlign : 'center'}}>중국어 단어장</h2>
      </TitleBox>
          <Route exact path='/'>
            <Main setCount={setCount} getNowid={getNowid}></Main>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/edit/:num'>
            <Edit getCount={getCount} setNowid={setNowid}></Edit>
          </Route>
    </Background>
  );
}

const Background = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 1020px;
`;

const TitleBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 70px;
  border-bottom: 3px solid rgb(192, 237, 192);
`;

export default App;
