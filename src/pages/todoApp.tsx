import React from 'react';
import './todoApp.css';
import AddtodoForm from '../components/addTodoForm/addTodoForm';
import TodoList from '../components/todoList/todoList';
import {connect} from 'react-redux'
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material//Typography'
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";


const TodoAppPage=()=> {
  const todoListData = useSelector((state: RootState) => state.todo);
  
  const [dataList,setDataList]=useState(todoListData)

 useEffect(()=>{
 
  setDataList(todoListData)
  
 },[todoListData])

  return( 
    // <Grid container>
    <Container maxWidth="xl" >
    <Box sx={{ bgcolor: '#cfe8fc',textAlign:"center"}} >

  
  <Typography component="h1" pt={4} variant='h3' >ToDo list</Typography>
 <AddtodoForm></AddtodoForm> 


 {dataList.length?<TodoList />:<CircularProgress/> }

 </Box>
   </Container>

 )
}

// const mapStateToProps = reduxState => {
//   return {
//   todoListData:reduxState.todo
   
//   };
// };
// export default connect(mapStateToProps)(TodoAppPage);
export default TodoAppPage;
