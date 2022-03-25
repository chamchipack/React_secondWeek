import {react, useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom'
import { collection, getDoc, getDocs, addDoc} from 'firebase/firestore';
import {db} from './firebase';
import {useDispatch} from 'react-redux';
import {addDictionary} from './modules/widget'

function Register(){
    const dispatch = useDispatch();
    const history = useHistory();

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
    
    const createDictionary = () =>{
        dispatch(addDictionary(getInputs));
    }

    return(
        <div className='reg-background'>
            <div className='reg-inner'>
                <h2>단어 추가하기</h2>
                    <div className='input-div'>
                        <h3>단어</h3>
                        <input name='word' onChange={onChange} value={word}  className='input-value' />
                    </div>
                    <div className='input-div'>
                        <h3>병음</h3>
                        <input name='pinyin' onChange={onChange} value={pinyin} className='input-value' />
                    </div>
                    <div className='input-div'>
                        <h3>의미</h3>
                        <input name='mean' onChange={onChange} value={mean}  className='input-value' />
                    </div>
                    <div className='input-div'>
                        <h3>예문</h3>
                        <input name='example' onChange={onChange} value={example}  className='input-value' />
                    </div>
                    <div className='input-div'>
                        <h3>예문의미</h3>
                        <input name='exammean' onChange={onChange} value={exammean}  className='input-value' />
                    </div>
                    <button onClick={()=> { history.goBack(); createDictionary()}} className='submit-btn' type='submit'>저장하기</button>
            </div>
        </div>
    )
}
export default Register
