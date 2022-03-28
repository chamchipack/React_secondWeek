import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { collection, getDoc, getDocs, addDoc} from 'firebase/firestore';
import {db} from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import {addDictionary} from './modules/widget'
import styled from 'styled-components';


function Register(){
    const data = useSelector((state)=> state.widget.list)
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(data.length)

    const [getInputs, setInputs] = useState({
        word : '',
        pinyin : '',    
        mean : '',
        example : '',
        exammean : '',
        num : data.length +1
    });
    const {word, pinyin, mean, example, exammean, num} = getInputs;
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
        <Background>
            <InnerBox>
                <h2>단어 추가하기</h2>
                    <InputDiv>
                        <h3>단어</h3>
                        <InputValue name='word' onChange={onChange} value={word} />
                    </InputDiv>
                    <InputDiv>
                        <h3>병음</h3>
                        <InputValue name='pinyin' onChange={onChange} value={pinyin} />
                    </InputDiv>
                    <InputDiv>
                        <h3>의미</h3>
                        <InputValue name='mean' onChange={onChange} value={mean} />
                    </InputDiv>
                    <InputDiv>
                        <h3>예문</h3>
                        <InputValue name='example' onChange={onChange} value={example} />
                    </InputDiv>
                    <InputDiv>
                        <h3>예문의미</h3>
                        <InputValue name='exammean' onChange={onChange} value={exammean} />
                    </InputDiv>
                    <button onClick={()=> { history.goBack(); createDictionary()}} className='submit-btn' type='submit'>저장하기</button>
            </InnerBox>
        </Background>
    )
}
export const InputDiv = styled.div`
    text-align: center;
    width: 100%;
    height: 80px;
`
export const InputValue = styled.input`
    border: none;
    border-bottom: 3px solid rgb(158, 223, 158);
    border-radius: 2px;
    width: 400px;
    height: 25px;
`
export const Background = styled.div`
    margin: 0 auto;
      width: 30%;
      height: 70%;
      padding: 50px;
`
export const InnerBox = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 80%;
    text-align: center;
`
export default Register
