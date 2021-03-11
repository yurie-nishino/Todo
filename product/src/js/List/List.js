import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Add from './Add';
import Delete from './Delete'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const initialState = []
  
//出力値（リスト追加）
//左辺：
//左はstateの変数名（初期値はuseState()の引数）
//右（setTodo)はstateを変更するための関数名
const [todos, setTodo] = useState(initialState);

//入力値
const [task, setTask] = useState('')

//削除
// const [delTodos,deleteTodo] = useState('')


//入力値を受け付けるイベント
const handleNewTask = (event) => {
  setTask( event.target.value )
  console.log(event.target.value)
}
  console.log(todos)
  return (
    <div className={classes.root}>
      
      <div>
        <TextField
          id="outlined-full-width"
          label="TODO"
          style={{ margin: 8 }}
          placeholder="やること"
          margin="normal"
          input value={ task } 
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          autocomplete="off"
          onChange={handleNewTask}
        />

        {/* リストを出力 */}
        <ul>
        { todos.map((todo, index) => (
        <li key={ index }>{ todo.task }</li>
        ))}
      </ul>
      
  {/* setTaskは入力の履歴を消す（あってもなくてもいい） */}
      <Add task={task} todos={todos} setTodo={setTodo} setTask={setTask}/> 
      <Delete task={task} todos={todos} setTodo={setTodo}/>
      </div>
    </div>
  );
}
