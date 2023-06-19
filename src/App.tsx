

import React, { useEffect } from 'react';
// import { connect } from "react-redux";
 import TodoAppPage from './pages/todoApp';

 import { useDispatch } from 'react-redux';
 import { AppDispatch } from "./redux/reduxStore";
import {getAllTodos}from './redux/actions/todosActions';

function App() {


const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
  dispatch(getAllTodos())
  },[dispatch])
  
  return (
    
     <TodoAppPage/>
    
  );
}


 export default App;
