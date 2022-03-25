import {react} from 'react';
import {FaCheckDouble} from 'react-icons/fa'
import {FaPenSquare} from 'react-icons/fa'
import {FaRegWindowClose} from 'react-icons/fa'

function Word(props){
    let data = props.data
    let idx = props.idx
    return(
        <div className='wordCom'>
            <div className='word-title'>
                <p className='title left'>{data[idx].word}</p>
                <div className='left icons'>
                    <FaCheckDouble className='icon' />
                    <FaPenSquare className='icon' />
                    <FaRegWindowClose className='icon' />
                </div>
            </div>
            <div className='others'>
                <p className='pinyin'>{data[idx].pinyin}</p>
                <p className='meaning'>{data[idx].mean}</p>
                <p className='example'>{data[idx].example}</p>
                <p className='exam-meaning'>{data[idx].exammean}</p>
            </div>
        </div>
        
    )
}
export default Word