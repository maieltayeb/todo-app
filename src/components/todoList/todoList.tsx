import React from "react";
import { connect } from "react-redux";
import './todoList.css';
import TodoItem from "../todoItem/todoItem";
import {Typography} from '@mui/material'
import {Box} from "@mui/material"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";


const TodoList=()=>{
  const todoList = useSelector((state: RootState) => state.todo);

return(
<Box  sx={{ "& > *":{justifyContent:"center"}}} mt={2} pb={2}>
<Typography component="h6"  pb={2} variant='h6' >My List</Typography>
{todoList.map((todo)=>

 <TodoItem key={todo.id} todo={todo} ></TodoItem>
)}
</Box>



)



}
// const mapStateToProps = (reduxState: { todo: any; }) => {
//     return {
//     todoList:reduxState.todo
     
//     };
//   };
// export default connect(mapStateToProps)(TodoList);
export default TodoList