import {react, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadDictionary } from './modules/widget';
import {db} from './firebase';
import { collection, getDoc, getDocs, addDoc} from 'firebase/firestore';
import './Main.css'
import Word from './Word'


function Main(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadDictionary());
    },[])
    const Dictionary_data = useSelector((state)=> state.widget.list)
      
    return(
        <div className='main-background'>
            <div className='main-inner'>
                { // 단어 컴포넌트들을 n개로 반복 시키는 구간
                    Dictionary_data.map((e,idx)=>{
                        return(
                            <Word Dictionary_data={Dictionary_data} idx={idx} setCount={props.setCount} getNowid={props.getNowid}></Word>
                        )
                    })
                }
            </div>
            <Link to='/register'><div className='reg-circle'></div></Link>
        </div>
    )
}
export default Main

