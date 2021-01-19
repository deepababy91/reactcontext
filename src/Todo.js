import React from 'react'
import './App.css';
import FormInput from './components/FormInput'
import List from './components/List'
import Footer from './components/Footer'
import {DataProvider} from './components/DataProvider'
import { DatePicker} from 'antd';

function Todo() {
   return (
    <DataProvider>
    <div className="Todo">
     <h1>To Do List</h1><DatePicker style={{cursor:'pointer'}}/>
      <FormInput/>
      <List/>
      <Footer/>              
    </div>
    </DataProvider>
  );
}

export default Todo;
