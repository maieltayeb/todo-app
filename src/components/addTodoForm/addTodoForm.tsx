import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./addTodoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/todosActions";
import { AppDispatch } from "../../redux/reduxStore";
import { Todo } from "../../models/Todo";
import { RootState } from "../../redux/reduxStore";
import { log } from "console";



 
const AddtodoForm = () => {
   const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [data,setData]=useState(todoList)
  // const [editIconIsclicked,setEditIconIsClicked]=useState(false)
  // useEffect(()=>{

  // },)
  // const todoTitle = "";
  // const todoDescription = "";
  // console.log(todoList);

  // const [lastEle,setLastEle]=useState({...data.slice(-1)}[0])


  // let newId:number=todoList.slice(-1).id+1
  const [todoTitleValue, setTodoTitle] = useState("");
  const [todoDescriptionValue, setTodoDescription] = useState("");
  ////input change
  const onChangeTitleHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  const onChangeDescriptionHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(e.target.value);
  };
  /*** when user  enter create***************** */
  const onCreateHandler = (e:React.MouseEvent<HTMLButtonElement>)=> {
   
    const newTodo = {
      
      title: todoTitleValue,
      description: todoDescriptionValue,
      isDone: false,
      // createdAtDate: new Date().toLocaleDateString(),
      // finishedAtDate: "",
    };

    setTodoTitle("");
    setTodoDescription("");
    dispatch(addTodo(newTodo));
  };
  useEffect(() => {
    if (todoTitleValue !== "") {
      setBtnDisabled(false);
    }
    
    else {
      setBtnDisabled(true);
    }
  }, [todoTitleValue]);
 
  return (
    <>
      <Box component="form" mt={4}>
        <TextField
          label="Todo Title..."
          variant="standard"
          required
          value={todoTitleValue}
          onChange={onChangeTitleHandler}
          multiline
        />
      </Box>
      <Box>
        <TextField
          label="Todo Description..."
          variant="standard"
          multiline
          // rows={4}

          value={todoDescriptionValue}
          onChange={onChangeDescriptionHandler}
        />
      </Box>
      <Box mt={2}>
        <Button
          disabled={btnDisabled}
          variant="contained"
          size="small"
          onClick={onCreateHandler}
        >
          create
        </Button>
       
      </Box>
    </>
  );
};

export default AddtodoForm;
