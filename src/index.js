import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import {createStore} from "redux";


const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");

const countModifier = (count = 0, action ) =>{
  if (action.type === "ADD"){
    return count++
  }
  else if(action.type === "MINUS"){
    return count--
  } 
  else return count
 
}

const countStore = createStore(countModifier)


const handleAdd = () => {
  console.log('num')
  countStore.dispatch({type:"ADD"})
};

const handleMinus = () => {
  countStore.dispatch({type:"MINUS"})
};

add.addEventListener("click",()=>handleAdd)
minus.addEventListener('click',()=>handleMinus)


// const updateText = () => {
//   number.innerText = count;
// };


// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);