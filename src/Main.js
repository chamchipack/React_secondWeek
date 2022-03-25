import {react} from 'react';
import Word from './Word'
import './Main.css'
import {Route, Link} from 'react-router-dom';

function Main(){
    return(
        <div className='main-background'>
            <div className='main-inner'>
                {
                    Array.from({length:5},(e,i)=>{
                        return(
                            <Word></Word>
                        )
                    })
                }
            </div>
            <Link to='/register'><div className='reg-circle'></div></Link>
        </div>
    )
}
export default Main