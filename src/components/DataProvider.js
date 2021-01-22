import React, {useState,useEffect,createContext} from 'react'

export const DataContext=createContext();

export const DataProvider=(props)=>{

    const [todos,setTodos]=useState([])

    //the below code is to retain the todolist even after the page refresh
    useEffect(()=>{
        const todoLocalstorage=JSON.parse(localStorage.getItem('todoLocalstorage'))//The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
        if(todoLocalstorage) setTodos(todoLocalstorage)
    },[])
     useEffect(() =>{
     localStorage.setItem('todoLocalstorage',JSON.stringify(todos))//The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
    },[todos])
 
    
    
    return (
    
        <DataContext.Provider value={[todos,setTodos]}>
            {props.children}
        </DataContext.Provider>
            
      
    )
}
