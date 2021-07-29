import './App.scss';
import {useReducer} from 'react';

import Todo from './component/Todo.js';

export const ACTION = {
  ADD: 'add',
  DELETE: 'delete',
  TOGGLESTATUS: 'togglestatus'
}

function reducer(todos, action) {
  switch (action.type) {
    case  ACTION.ADD:
      return [...todos, action.payload];
    case  ACTION.DELETE:
      return todos.filter(item => item.id !== action.payload.id);
    case  ACTION.TOGGLESTATUS:
      return todos.map(item => {
        if (item.id === action.payload.id) {
          return {...item, status: !item.status};
        }
        return  item;
      });  
    default:
      return todos;
  }
}

const data  = [
  {id:1, describe:'Việc số 1', deadline: '12/08/2021', status: false},
  {id:2, describe:'Việc số 2', deadline: '29/07/2021', status: false},
  {id:3, describe:'Việc số 3', deadline: '28/07/2021', status: true}
]

function App() {
  var [todos, dispatch] = useReducer(reducer, data);

  function add(e){
    e.preventDefault();
    var newDo = {};
    newDo.id        = document.getElementById("id").value;
    newDo.describe  = document.getElementById("describe").value;
    newDo.deadline  = document.getElementById("deadline").value;
    newDo.status    = false;
    if (![newDo.id, newDo.describe, newDo.deadline].every(i => i !== "")) {
      window.alert("Bạn chưa nhập đầy đủ thông tin");
      return;
    }
    dispatch({type:ACTION.ADD, payload:newDo});
    document.getElementById("id").value       = 0;
    document.getElementById("describe").value = "";
    document.getElementById("deadline").value = "";
  }

  return (
    <div className="App">
      <h3 className="title">Quản lý công việc</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Miêu tả</th>
            <th>Deadline</th>
            <th>Trạng thái</th>
            <th>Xóa</th>
            <th>Toggle status</th>
          </tr>
        </thead>  
        <tbody>
          {
            todos.map(item => <Todo item={item} key={item.id} dispatch={dispatch}/>)
          }
        </tbody>
      </table>
      <form className="add">
        <input id="id" type="number" placeholder="0" min="0"/>
        <input id="describe" type="text" placeholder="Miêu tả" />
        <input id="deadline" type="date" placeholder="Deadline" />
      </form>
      <button onClick={(e) => add(e)}>Thêm</button>
    </div>
  );
}

export default App;
