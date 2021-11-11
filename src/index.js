import { createStore } from "redux";
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const btn = document.querySelector(".add")

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// const addToDo = text => {
//   return {
//     type: ADD_TODO,
//     text
//   };
// };

// const deleteToDo = id => {
//   return {
//     type: DELETE_TODO,
//     id
//   };
// };

// const reducer = (state = [], action) => {
//   console.log(action)
//   switch (action.type) {
//     case ADD_TODO:
//       return [];
//     case DELETE_TODO:
//       return [];
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// const ADDTODO = text => {
//   store.dispatch(addToDo(text))
// }

// const dispatchDeleteToDo = e => {
//   // const id = e.target.parentNode.id;
//   store.dispatch(deleteToDo(e));
// };

// const drawToDo = () => {
//   const toDos = store.getState()
//   console.log(toDos)
  // ul.innerHTML = ''
  // for (let i = 0; i < toDos.length; i++) {
  //   const li = document.createElement('li')
  //   const btn = document.createElement('button')
  //   btn.innerHTML = 'DEL'
  //   btn.addEventListener('click', dispatchDeleteToDo(toDos.id))
  //   li.id = toDos.id;
  //   li.innerHTML = toDos.text
  //   li.append(btn)
  //   ul.append(li)
  // }
// }

// store.subscribe(drawToDo)

const onSubmit = (toDo) => {
  console.log('asdsa')
  input.value = "";
};


const toDo = input.value;

btn.addEventListener("click", onSubmit(toDo))