import React from 'react';
import DefaultButton from "../Button/Default";

function Add(props) {
  const {
    task, setTodo, todos,
  } = props;
  const handleAddTask = () =>{
    console.log(props)
    const newTodos = [...todos];
    const inputData = {
      task: task,
      isCompleted: false,
    };

    newTodos.push(inputData);
    console.log(newTodos)
    setTodo(newTodos);
  }
  return (
    <>
        <DefaultButton         
        buttonTitle={"追加"}
        // ボタンは押すからclick changeは値に変更あった時（フォームとか）
        handleAddTask={handleAddTask}
        />
    </>
  );
}

export default Add;