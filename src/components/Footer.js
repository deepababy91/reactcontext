import React, {useContext,useState} from 'react'
import {DataContext} from './DataProvider'
import {Popconfirm, message,Tooltip,Empty,Button, notification,Tabs } from 'antd';


function Footer() {
    const [checkAll,setCheckAll]=useState(false)
    const [todos,setTodos]=useContext(DataContext)
  
   
      const handleCheckAll = () =>{
        const newTodos=[...todos]
        newTodos.forEach(todo=>{
        todo.complete= !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

     const newTodosComplete=()=>{
        return todos.filter(todo=>todo.complete===false)
    }
    const completed=()=>{
       return todos.filter(todo=>todo.complete===true) 
    }

    const deleteTodo=() =>{
       
        setTodos(newTodosComplete())
        setCheckAll(false)
    }
   const openNotification = () => {
  notification.open({
    message: 'Notification',
    description:
      <p>You have {newTodosComplete().length} active tasks and {completed().length} completed tasks</p>,
  
     });
    }

 const { TabPane } = Tabs;
 
    const Demo = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="All" key="1" >
        <div>
      {todos.filter(todo => todo.complete===false|| todo.complete===true).map(filteredTodo => (
        <li>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
    <TabPane tab="Active" key="2" >
     <div>
      {todos.filter(todo => todo.complete===false).map(filteredTodo => (
        <li>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
    <TabPane tab="Completed" key="3">
       <div>
      {todos.filter(todo => todo.complete===true).map(filteredTodo => (
        <li>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
  </Tabs>
);

    return (    
        <div>
         
        {todos.length===0? 
      <h2><Empty /></h2>:
    
     <div className="row">
      <Demo />
     
     <label htmlFor="all">
      <input type="checkbox" name="all" id="all"
      onChange={handleCheckAll} checked={checkAll}/>All &nbsp;&nbsp;&nbsp;
     
      
  <Button type="primary" onClick={openNotification}>
  click to know about the task status
  </Button>
      </label>
           <Popconfirm
                         title="Are you sure?"
                        onConfirm={deleteTodo}
                       
                    
                    
 

                       
                         // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                      >
      <button id="delete"><Tooltip title="Select a task or all to delete one or all tasks">Clear all</Tooltip></button>
     </Popconfirm>
      </div>
        }   
        </div>
    )
}

export default Footer

