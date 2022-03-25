import {react} from 'react';
import {useHistory} from 'react-router-dom'

function Register(){
    const history = useHistory();
    return(
        <div className='reg-background'>
            <div className='reg-inner'>
                <h2>단어 추가하기</h2>
                <form>
                    <div className='input-div'>
                        <label for="input-word"><p>단어</p></label>
                        <input className='input-value' id='input-word'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-pinyin"><p>병음</p></label>
                        <input className='input-value' id='input-pinyin'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-mean"><p>의미</p></label>
                        <input className='input-value' id='input-mean'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-exam"><p>예문</p></label>
                        <input className='input-value' id='input-exam'></input>
                    </div>
                    <div className='input-div'>
                        <label for="input-exam-mean"><p>해석</p></label>
                        <input className='input-value' id='input-exam-mean'></input>
                    </div>
                    <button onClick={(e)=> {e.preventDefault(); history.goBack();}} className='submit-btn' type='submit'>저장하기</button>
                </form>
            </div>
        </div>
    )
}
export default Register