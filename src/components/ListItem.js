import React from 'react'
import {useState,useContext} from 'react'
import {EditOutlined,SaveOutlined,DeleteOutlined} from '@ant-design/icons';
import {DataContext} from './DataProvider'
import {Popconfirm} from 'antd';



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
   <SaveOutlined onClick={()=>handleSave(id)} style={{color:'purple',fontSize:'20px'}} className={todo.complete?"disabled1":""} />
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
     
      <span>
      <EditOutlined  className={todo.complete?"disabled1":""} onClick={handleOnEdit} style={{color:'dodgerblue',fontSize:'20px'}}/>{' '}
        <Popconfirm
                         title="Are you sure you want to delete this task?"
                        onConfirm={()=>deleteUser(id)}
                       
                    
                    
 

                       
                         // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                      >
      
   <DeleteOutlined className={todo.complete?"disabled1":""} style={{color:'red',fontSize:'18px',cursor:'pointer'}}/>  </Popconfirm></span>
      </li>       
    )
      

    }

    
}

    
