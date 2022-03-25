import {react, useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom'
import { collection, getDoc, getDocs, addDoc} from 'firebase/firestore';
import {db} from './firebase';
import {useDispatch} from 'react-redux';
import {addDictionary} from './modules/widget'

function Register(){
    const [getInputs, setInputs] = useState({
        word : '',
        pinyin : '',
        mean : '',
        example : '',
        exammean : ''
    });
    const {word, pinyin, mean, example, exammean} = getInputs;
    const onChange = (e)=>{
        const {name, value} = e.target;
        setInputs({
            ...getInputs,
            [name]: value
        })
    }
    console.log(getInputs)
    
    const dispatch = useDispatch();
    const history = useHistory();
    const createDictionary = () =>{
        dispatch(addDictionary(getInputs));
    }
    

    return(
        <div className='reg-background'>
            <div className='reg-inner'>
                <h2>단어 추가하기</h2>
                    <div className='input-div'>
                        <label for="input-word"><p>단어</p></label>
                        <input name='word' onChange={onChange} value={word}  className='input-value' id='input-word'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-pinyin"><p>병음</p></label>
                        <input name='pinyin' onChange={onChange} value={pinyin} className='input-value' id='input-pinyin'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-mean"><p>의미</p></label>
                        <input name='mean' onChange={onChange} value={mean}  className='input-value' id='input-mean'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-exam"><p>예문</p></label>
                        <input name='example' onChange={onChange} value={example}  className='input-value' id='input-exam'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-exam-mean"><p>해석</p></label>
                        <input name='exammean' onChange={onChange} value={exammean}  className='input-value' id='input-exam-mean'></input>
                    </div>
                    <button onClick={()=> { history.goBack(); createDictionary()}} className='submit-btn' type='submit'>저장하기</button>
            </div>
        </div>
    )
}
export default Register
