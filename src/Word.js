import {react, useState} from 'react';
import {FaCheckDouble} from 'react-icons/fa'
import {FaPenSquare} from 'react-icons/fa'
import {FaRegWindowClose} from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {deleteDictionary} from './modules/widget'

function Word(props){
    let dispatch = useDispatch();
    let history = useHistory();
    let [getCheck, setCheck] = useState(true);
    let setCount = props.setCount
    let data = props.data
    let idx = props.idx
    let changeBool = ()=>{
        if(getCheck == true){
            setCheck(false)
        } else {
            setCheck(true)
        }
    }
    const deleteWord = ()=>{
        prompt()
        dispatch(deleteDictionary())
    }
    return(
        <div className='wordCom' style={{backgroundColor: getCheck == false ? 'green' : 'white'}}>
            <div style={{color: getCheck == false ? 'white' : 'black'}}>
                <div className='word-title'>
                    <p className='title left'>{data[idx].word}</p>
                    <div className='left icons'>
                        <FaCheckDouble onClick={()=>{changeBool()}} className='icon' />
                        <FaPenSquare onClick={()=>{history.push(`/edit/${idx}`); setCount(idx)}} className='icon'/>
                        <FaRegWindowClose onClick={()=>{deleteWord()}} className='icon' />
                    </div>
                </div>
                <div className='others'>
                    <p className='pinyin'>{data[idx].pinyin}</p>
                    <p className='meaning'>{data[idx].mean}</p>
                    <p className='example'>{data[idx].example}</p>
                    <p className='exam-meaning'>{data[idx].exammean}</p>
                </div>
            </div>
        </div>
        
    )
}
export default Word