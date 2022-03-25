import {react} from 'react';
import {FaCheckDouble} from 'react-icons/fa'
import {FaPenSquare} from 'react-icons/fa'
import {FaRegWindowClose} from 'react-icons/fa'

function Word(){
    return(
        <div className='wordCom'>
            <div className='word-title'>
                <p className='title left'>Hello</p>
                <div className='left icons'>
                    <FaCheckDouble className='icon' />
                    <FaPenSquare className='icon' />
                    <FaRegWindowClose className='icon' />
                </div>
            </div>
            <div className='others'>
                <p className='pinyin'>hello</p>
                <p className='meaning'>안녕</p>
                <p className='example'>Hello world</p>
                <p className='exam-meaning'>안녕 월드</p>
            </div>
        </div>
    )
}
export default Word