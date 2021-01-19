import React,{useState,useContext} from 'react'
import {DataContext} from './DataProvider'
import {PlusCircleOutlined} from '@ant-design/icons';
import { Tooltip,message } from 'antd';



function FormInput() {
    const [todos,setTodos]=useContext(DataContext);
    const [todoName,setTodoName]=useState('');
    const addTodo=e=>{
        e.preventDefault();
        setTodos([...todos,{name:todoName,complete:false}])
        setTodoName('');
    }
    const info = () => {
    message.success({
    content: 'Yay!You added a task',
    style: {
    fontSize:'18px',
    fontFamily:'Oleo Script',
    color:''
    },
  });
};

   
    return (
       
             <form autoComplete="off" onSubmit={addTodo} >
      <input type="text" name="todos" id="todos" required placeholder="Type a todo and press Enter" value={todoName}
      onChange={e=>setTodoName(e.target.value)} />
      <button type="submit"  onClick={info}><Tooltip title="Click here to add the task"><PlusCircleOutlined  style={{ fontSize: '25px', color: 'white' }}/> </Tooltip></button>
      
      </form>
      
    )
}

export default FormInput
