import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../firebase';
// Actions
const LOAD = 'widget/LOAD';
const CREATE = 'widget/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// 맨 처음에 가지고 있는 값, object로
const initialState = {
    list : ['first', 'second', 'third']
}

// Action Creators 액션생성함수
export function loadWidgets(dictionary) {
    return { type: LOAD, dictionary };
}

export function createWidget(widget) {
    console.log(widget)
    return { type: CREATE, widget : widget };
}

export function updateWidget(widget) {
    return { type: UPDATE, widget };
}

export function removeWidget(widget) {
    return { type: REMOVE, widget };
}

//middlewares

export const loadDictionary = () =>{
    return async function (dispatch){
        const dic_data = await getDocs(collection(db, 'dictionary'));
        let dic_list = [];
        dic_data.forEach((e)=>{
            // dic_list = [...dic_list, {...e.data()}] or dic_list.push({...e.data()})
            dic_list.push({...e.data()})
        });
        dispatch(loadWidgets(dic_list))
    }
}

export const addDictionary = (dic) =>{
    return async function(dispatch){
        const docRef = await addDoc(collection(db, 'dictionary'),dic);
        console.log(docRef)
    }
}
// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//     return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

// Reducer
export default function reducer(state = initialState, action = {}) { // state = {} : 디폴트값
    switch (action.type) {
        case "widget/LOAD" : {
            return {
                list : action.dictionary
            }
        }
        default: return state;
    }
}