import React from 'react';
import DefaultButton from "../Button/Default";

function Add(props) {
  //propsを関数として使えるように変数にする？
  const {
    task, setTodo, todos, setTask
  } = props;

  
  const handleAddTask = () =>{
    console.log(props)

    //todosの中身をスプレッド構文で！
    const newTodos = [...todos];

    //stateを変更する関数setTodoにinputするデータ(入力値)
    const inputData = {
      task: task,
      isCompleted: false,
    };

    //配列todosに入力値(inputData)を格納
    newTodos.push(inputData);

    //setTodoにnewTodosを格納
    setTodo(newTodos);

    //入力値(setTask)を空白に（リセット）する
    setTask('');
  }
  return (
    <>
        <DefaultButton         
        buttonTitle={"追加"}
        //2つ以上イベントが重なるときはclickFuncで共通化する
        clickFunc={handleAddTask}
        />
    </>
  );
}

export default Add;