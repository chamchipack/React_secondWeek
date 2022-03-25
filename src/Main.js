import {react, useEffect} from 'react';
import Word from './Word'
import './Main.css'
import {Route, Link} from 'react-router-dom';
import { loadDictionary } from './modules/widget';

import { collection, getDoc, getDocs, addDoc} from 'firebase/firestore';
import {db} from './firebase';
import { useDispatch, useSelector } from 'react-redux';

function Main(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadDictionary());
      })
    
      const data = useSelector((state)=> state.widget.list)

      
      
    return(
        <div className='main-background'>
            <div className='main-inner'>
                { // 단어 컴포넌트들을 n개로 반복 시키는 구간
                    data.map((e,idx)=>{
                        return(
                            <Word data={data} idx={idx}></Word>
                        )
                    })
                }
            </div>
            <Link to='/register'><div className='reg-circle'></div></Link>
        </div>
    )
}
export default Main

