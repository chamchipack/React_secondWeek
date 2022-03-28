import {react, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {deleteDictionary} from './modules/widget'
import {FaCheckDouble} from 'react-icons/fa'
import {FaPenSquare} from 'react-icons/fa'
import {FaRegWindowClose} from 'react-icons/fa'

function Word(props){
    let dispatch = useDispatch();
    let history = useHistory();
    let [getCheck, setCheck] = useState(true);
    let setCount = props.setCount
    let Dictionary_data = props.Dictionary_data
    let idx = props.idx

    let changeBool = ()=>{
        if(getCheck == true){
            setCheck(false)
        } else {
            setCheck(true)
        }
    }
    
    return(
        <div className='wordCom' style={{backgroundColor: getCheck == false ? 'green' : 'white'}}>
            <div style={{color: getCheck == false ? 'white' : 'black'}}>
                <div>
                    <p className='title left'>{Dictionary_data[idx].word}</p>
                    <div className='left icons'>
                        <FaCheckDouble onClick={()=>{changeBool()}} className='icon' />
                        <FaPenSquare onClick={()=>{history.push(`/edit/${idx}`); setCount(idx)}} className='icon'/>
                        <FaRegWindowClose className='icon' />
                    </div>
                </div>
                <div style={{width:'100%', height:'100%'}}>
                    <p>{Dictionary_data[idx].pinyin}</p>
                    <p>{Dictionary_data[idx].mean}</p>
                    <p>{Dictionary_data[idx].example}</p>
                    <p>{Dictionary_data[idx].exammean}</p>
                </div>
            </div>
        </div>
        
    )
}
export default Word