import React from "react";
import './todoItem.css';
import {useDispatch } from "react-redux";
import {DeleteTodo,updateTodo} from '../../redux/actions/todosActions';
import  ToDoInfoDialog from "../infoDialog/infoDialog";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Box, Typography,Divider} from '@mui/material'
import HistoryIcon from '@mui/icons-material/History';
import DoneIcon from '@mui/icons-material/Done';

import { AppDispatch } from "../../redux/reduxStore";
import { Todo } from "../../models/Todo";



const TodoItem: React.FC<{todo:Todo}>=({todo})=>{
  const dispatch = useDispatch<AppDispatch>();



const deleteTodoHandler=(item:Todo)=>{

  dispatch(DeleteTodo(item.id))
 
}


const onDoneHandler=(todo:Todo)=>{
 
  let id=todo.id;
 const TodoUpdated = {
  title:todo.title,
  isDone:!todo.isDone,
  // createdAtdate:todo.createdAtdate
}
dispatch(updateTodo(TodoUpdated,id))
}

// let icon=todo.isDone ? "fa fa-check icon":"fa fa-history icon";
let delClass=todo.isDone ?"del":"";
return(
  <>

<Box  sx={{display:"flex",mt:2,"& > *":{paddingLeft:"5px",paddingRight:"5px"}}}>
{todo.isDone?<DoneIcon onClick={()=>onDoneHandler(todo)} />:<HistoryIcon  onClick={()=>onDoneHandler(todo)}/>}

<Typography component="h1" className={delClass} sx={{width:"10%",overflow:"hidden"}}>{todo.title}</Typography>
<Divider orientation="vertical" flexItem />

 <ToDoInfoDialog selectedTodo={todo} /> 
{/* <EditIcon  onClick={()=>deleteTodoHandler(todo)}/> */}
<DeleteForeverIcon  color="error" fontSize="large" onClick={()=>deleteTodoHandler(todo)} />
  
</Box>

 </>
  
  
)



}




export default TodoItem;
