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
  const initialState = [
    {
        task: 'ライティング',
        isCompleted: false
    },
]
//出力値かな？
const [todos, setTodo] = useState(initialState);

//入力値
const [task, setTask] = useState('')


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
          onChange={handleNewTask}
        />

        {/* todoの中身 */}
        <ul>
        { todos.map((todo, index) => (
        <li key={ index }>{ todo.task }</li>
        ))}
      </ul>
      <Add task={task} todos={todos} setTodo={setTodo} />
      <Delete />
      </div>
    </div>
  );
}
