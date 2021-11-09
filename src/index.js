// //덧셈 뺄셈 
// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
// import { createStore } from "redux";

// const add = document.querySelector(".add")
// const minus = document.querySelector(".minus");
// const number = document.querySelector(".number");

// number.innerText = 0

// const ADD ="ADD"
// const MINUS ="MINUS"

// const countModifier = (count = 0, action) => {
//   // if (action.type === "ADD"){
//   //   return count+1
//   // }
//   // else if(action.type === "MINUS"){
//   //   return count-1
//   // } 
//   // else return count
//   switch (action.type) {
//     case (ADD):
//       return count + 1
//     case (MINUS):
//       return count - 1
//     default:
//       return count
//   }

// }


// const countStore = createStore(countModifier)

// const onChange = () => {
//   number.innerText = countStore.getState()
// }

// countStore.subscribe(onChange)

// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// };

// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// // const updateText = () => {
// //   number.innerText = count;
// // };


// // add.addEventListener("click", handleAdd);
// // minus.addEventListener("click", handleMinus);

// --------------------------

import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);