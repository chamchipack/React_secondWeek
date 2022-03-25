import React from 'react';
import { useHistory } from 'react-router-dom';

function Edit(props){
    let data = props.data
    let idx = props.idx
    let history = useHistory();
    console.log(data, idx)
    return(
        <div className='reg-background'>
        <div className='reg-inner'>
            <h2>단어 수정하기</h2>
                <div className='input-div'>
                    <h3>단어</h3>
                    <input className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>병음</h3>
                    <input className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>의미</h3>
                    <input className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>예문</h3>
                    <input className='input-value' />
                </div>
                <div className='input-div'>
                    <h3>예문의미</h3>
                    <input className='input-value' />
                </div>
                <button onClick={()=> { history.goBack(); }} className='submit-btn' type='submit'>저장하기</button>
        </div>
    </div>
    )
}
export default Edit