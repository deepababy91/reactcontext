import React, {useContext,useState} from 'react'
import {DataContext} from './DataProvider'
import {Popconfirm,Tooltip,Empty,Button, notification,Tabs } from 'antd';


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
   

     const deleteTodo = (id)=>{
        const newTodos=[...todos]
        newTodos.splice(id, todos.length);
        setTodos(newTodos)
    }
    
   const openNotification = () => {
        
  notification.open({
     
    message: <h4 style={{fontFamily: 'Oleo Script'}}>Hey,your task status</h4>,
    description:
      <p>You have {newTodosComplete().length} active tasks and {completed().length} completed tasks</p>,
  
     });
  
    }
    

 
      const { TabPane } = Tabs;
 
    const Demo = () => (
  <Tabs defaultActiveKey="1" type="card">
    <TabPane tab="All" key="1" >
        <div style={{paddingBottom:'25px'}}>
      {todos.map((filteredTodo,id) => (
        <li key={id} style={{listStyle:'circle',textTransform:'capitalize'}}>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
    <TabPane tab="Active" key="2" >
     <div style={{paddingBottom:'25px'}}>
      {todos.filter(todo => todo.complete===false).map((filteredTodo,id) => (
        <li key={id}style={{color:'darkblue',listStyle:'circle',textTransform:'capitalize'}}>
          {filteredTodo.name}
        </li>
      ))}
    </div>
    </TabPane>
    <TabPane tab="Completed" key="3" >
       <div style={{paddingBottom:'25px'}}>
      {todos.filter(todo => todo.complete===true).map((filteredTodo,id) => (
        <li key={id} style={{color:'green',listStyle:'circle',textTransform:'capitalize'}}>
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
    <Demo/>
     <Button type="primary" onClick={openNotification} style={{width:'96%',marginBottom:'20px'}}>
  click to know about the task status
  </Button>
    
     
    {/* <label htmlFor="all" className="allinput">
      <Tooltip placement="left" title="Check to complete all tasks and uncheck to make it active again"><input type="checkbox" name="all" id="all"
        onChange={handleCheckAll} checked={checkAll} /></Tooltip>Mark all complete 
     
      
        </label>*/}
           <Popconfirm
                         title="Are you sure you want to delete all tasks?"
                        onConfirm={deleteTodo}
                       
                    
                    
 

                       
                         // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                      >
     
      <button id="delete" style={{width:'96%'}}>Clear all</button>
     </Popconfirm>
      </div>
        }   
         <label htmlFor="all" className="allinput">
      <Tooltip placement="left" title="Check to complete all tasks and uncheck to make it active again"><input type="checkbox" name="all" id="all"
      onChange={handleCheckAll} checked={checkAll} /></Tooltip>Mark all complete 
     
      
       </label>
        </div>
    )
}

export default Footer

