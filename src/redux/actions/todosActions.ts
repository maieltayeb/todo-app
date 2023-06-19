
import axios from "axios";
import { Todo } from "../../models/Todo";
import {GET_All_Todos, Delete_Todo, Add_Todo,Update_Todo_isDone} from"../reducers/todoReducer";


export const getAllTodos=function(){
    return function(dispatch: (arg0: { payload: Todo[]; type: "todo/GET_All_Todos"; }) => void){
        return (
        axios.get<Todo[]>('https://todo-app-bf986-default-rtdb.firebaseio.com/todos.json')

        .then((res:any)=>{
                   if(res.status==200){
            const todos=res.data;
            console.log(todos);
            const newTodos=[];
          for (const key in todos) {
            
             newTodos.push({id:key,...todos[key]})
            }
           dispatch(getAllTodosSucsess(newTodos))
        }
    
        })
        .catch((err:any)=>{
          console.log(err);
        })
    
        )
    
    }
}



export const getAllTodosSucsess=(todos:Todo[])=>{
    // console.log("from get all sucsses",todos);
    return GET_All_Todos(todos)
}
/************************************************************************ */
export const addTodo=function(newTodo:Todo){
    return function(dispatch: (arg0: { payload: Todo; type: "todo/Add_Todo"; }) => void){
        return(
            axios.post('https://todo-app-bf986-default-rtdb.firebaseio.com/todos.json',newTodo)
            .then((res:any)=>{
           
              const id=res.data.name;
           if(res.status===200){
            dispatch(addTodoSuccess({...newTodo,id}))
             
           }
  
            })
            .catch((err:any)=>{
                console.log(err);
            })
           
        )
    }
}


export const addTodoSuccess=(todo:Todo)=>{
    return    Add_Todo(todo)
}


/****************************************************** */
export const DeleteTodo=function(id: any){
    return function(dispatch: (arg0: { payload: any; type: "todo/Delete_Todo"; }) => void){
        return (
            axios.delete(`https://todo-app-bf986-default-rtdb.firebaseio.com/todos/${id}.json`)
            .then((res:any)=>{
              if(res.status === 200) 
              
              dispatch( Delete_Todo(id))
            })
            .catch((err:any)=>console.log(err))
        )
    }
}

// export const DeleteTodoSuccess=id=>{
//     return    Delete_Todo(id)
// }

/******************************************************************** */

export const updateTodo=function(TodoUpdated: { title: any; isDone: boolean; },id: any){
    return function(dispatch: (arg0: { payload: any; type: "todo/Update_Todo_isDone"; }) => void){

    return(

        axios.patch(`https://todo-app-bf986-default-rtdb.firebaseio.com/todos/${id}.json`,TodoUpdated)
        .then((res:any)=>{
          if(res.status === 200) 
          dispatch(Update_Todo_isDone(id));
        })
    )
    }
}
