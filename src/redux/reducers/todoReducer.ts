
import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../reduxStore";
import { Todo } from "../../models/Todo";

  

// const initialState :Todo[]=[];
const initialState = [] as Todo[];
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        GET_All_Todos:(state,action:PayloadAction<Todo[]>)=>{
           
            state=action.payload    
          return  state
        },
        Add_Todo:(state,action: PayloadAction<Todo>)=>{
         
            state.push(action.payload)
        },  
        Delete_Todo:(state,action)=>{
            let deletedTodoIndex= state.findIndex((todo)=>todo.id===action.payload);
                state.splice(deletedTodoIndex,1)
        },
        Update_Todo_isDone:(state,action)=>{
                let updatedTodoIndex= state.findIndex((todo)=>todo.id==action.payload);
                state[updatedTodoIndex].isDone=!state[updatedTodoIndex].isDone;
        },
   
    }
})

export const {GET_All_Todos, Add_Todo, Delete_Todo,Update_Todo_isDone}=todoSlice.actions;
export default todoSlice.reducer;
