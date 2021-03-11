import React from 'react';
import DefaultButton from "../Button/Default";

function Delete(props) {
  const {
    task, setTodo, todos,
  } = props;


  const handleDeleteTask = () => {
    console.log('---props---')
    console.log(props)
    const deleteTodos = [...todos]
    deleteTodos.shift();
    setTodo(deleteTodos)
  }
  return (
    <>
        <DefaultButton 
        buttonTitle={"削除"}
        //2つ以上イベントが重なるときはclickFuncで共通化する
        clickFunc={handleDeleteTask}
        />
    </>
  );
}

export default Delete;
//1 配列の中身を一つずつ消す関数handleDeleteTaskを定義
//2 先頭を消すからshift(); かな？
//3