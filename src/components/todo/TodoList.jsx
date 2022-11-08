import React from "react";
import styled from "styled-components";

function TodoList() {
  return <TodoListWrep></TodoListWrep>;
}

export default TodoList;

const TodoListWrep = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0;
`;
