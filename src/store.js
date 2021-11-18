import { exp } from "prelude-ls";
import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (Text) => {
    return {
        type: ADD,
        Text
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

const reducer = (state =[] , action)=>{
    switch(action.type){
        case ADD:
        return [{text: action.text , id: Date.now()}, ...state];
        
        case DELETE:
        return state.filter(el => el.id !== action.id);
        
        default:
            return state
    }
}
const store = createStore(reducer)

export const actionCreators = {
    addToDo,
    deleteToDo
  };

export default store