import { react, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {updateDictionary} from './modules/widget'

function Edit(props){
    let setNowid = props.setNowid;
    let dispatch = useDispatch();
    let history = useHistory();
    const data = useSelector((state)=> state.widget.list)
    const dic_data = data[props.getCount]

    const [getInputs, setInputs] = useState({
        id : dic_data.id,
        word : dic_data.word,
        pinyin : dic_data.pinyin,
        mean : dic_data.mean,
        example : dic_data.example,
        exammean : dic_data.exammean,
        num : dic_data.num
    });
    const {word, pinyin, mean, example, exammean, num, id} = getInputs;
    const onChange = (e)=>{
        const {name, value} = e.target;
        setInputs({
            ...getInputs,
            [name]: value
        })
        setNowid(dic_data.id)
    }
    const updateDic = ()=>{
        dispatch(updateDictionary(getInputs))
    }
    return(
        <div className='reg-background'>
        <div className='reg-inner'>
            <h2>단어 수정하기</h2>
                <div className='input-div'>
                    <h3>단어</h3>
                    <input onChange={onChange} name='word' value={getInputs.word} className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>병음</h3>
                    <input onChange={onChange} name='pinyin' value={getInputs.pinyin} className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>의미</h3>
                    <input onChange={onChange} name='mean' value={getInputs.mean} className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>예문</h3>
                    <input onChange={onChange} name='example' value={getInputs.example} className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>예문의미</h3>
                    <input onChange={onChange} name='exammean' value={getInputs.exammean} className='input-value' />
                </div>
                <button onClick={()=> { history.goBack(); updateDic() }} className='submit-btn' type='submit'>저장하기</button>
        </div>
    </div>
    )
}
export default Edit