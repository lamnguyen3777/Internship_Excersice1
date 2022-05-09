import React, { useState } from "react";
import {
  PlusCircleFilled,
  EditFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => (item.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="list-box">
        <div className="list-box-item">
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="editTodo"
            />
          ) : todo.isDone ? (
            <h2>{todo.todo}</h2>
          ) : (
            <h2>{todo.todo}</h2>
          )}
        </div>
        <div className="list-box-actions">
          <EditFilled
            style={{ color: "#000099", fontSize: "2rem" }}
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
          <CloseCircleFilled
            style={{ color: "#660033", fontSize: "2rem" }}
            onClick={(e) => handleDelete(e, todo.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
