import React from 'react'
import {useState,useContext} from 'react'
import {EditOutlined,SaveOutlined,DeleteOutlined} from '@ant-design/icons';
import { Tooltip } from 'antd';
import {DataContext} from './DataProvider'
import {Popconfirm} from 'antd';
import { Button} from 'react-bootstrap';


export default function ListItem({todo,id,checkComplete,handleEditTodos}) {
    const [onEdit,setOnEdit]=useState(false)
    const [editValue,setEditValue]=useState(todo.name)
    const [todos,setTodos]=useContext(DataContext)

    const handleOnEdit = ()=>{
        setOnEdit(true)
    } 
    const handleSave=id=>{
        setOnEdit(false)
        if(editValue){
            handleEditTodos(editValue,id)
        }else{
            setEditValue(todo.name)
        }
    }
    const deleteUser=(id)=>{
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  
  
}

  

    if(onEdit)
    {
        return(
         
      
      <li>
    
      <input type="text" id="editValue" value={editValue} name="editValue" onChange={e =>setEditValue(e.target.value)} />
   <Tooltip title="Click here to save the edited task"><SaveOutlined onClick={()=>handleSave(id)} style={{color:'purple',fontSize:'20px'}}/></Tooltip>
      </li>
        )
            

    }
    else{
    return (
        
    


 <li>
      <label htmlFor={id} className={todo.complete?"active":""}>
      <input type="checkbox" id={id} checked={todo.complete}
      onChange={() =>checkComplete(id)}
      />
   {todo.name}
      
      </label>
     
      <span><Tooltip title="Click here to edit the task">
      <EditOutlined disabled={todo.complete} onClick={handleOnEdit} style={{color:'dodgerblue',fontSize:'20px'}}/></Tooltip>{' '}
        <Popconfirm
                         title="Are you sure you want to delete this task?"
                        onConfirm={()=>deleteUser(id)}
                       
                    
                    
 

                       
                         // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                      >
      
   <DeleteOutlined  style={{color:'red',fontSize:'18px',cursor:'pointer'}}/>  </Popconfirm></span>
      </li>       
    )
      

    }

    
}

    
