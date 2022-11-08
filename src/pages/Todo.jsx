import React from "react";
import styled from "styled-components";
import TodoList from "../components/todo/TodoList";
import { auth } from "../Firebase";

function Todo() {
  const user = auth.currentUser;
  const onSignOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      alert("로그아웃에 문제가 있습니다! ", err.message);
    }
  };

  return (
    <TodoWrap>
      <TodoContant>
        <TodoTitle>
          <TodoTit>{user.displayName}</TodoTit>
          <LogoutBtn onClick={onSignOut}>Logout</LogoutBtn>
        </TodoTitle>
        <TodoList />
      </TodoContant>
    </TodoWrap>
  );
}

export default Todo;

const TodoWrap = styled.div`
  height: 100vh;
  background: #e9ecef;
  padding: 100px 0;
`;

const TodoContant = styled.div`
  width: 500px;
  padding: 0 15px 80px;
  margin: 0 auto;
  background: #fff;
`;

const TodoTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #ddd;
  margin: 0 -15px;
  padding: 0 15px;
`;

const TodoTit = styled.span`
  font-size: 0.938rem;
  line-height: 1.4em;
  color: #222;
  font-weight: 700;
`;

const LogoutBtn = styled.button`
  display: inline-block;
  padding: 0 10px;
  height: 35px;
  line-height: 35px;
  font-size: 0.875rem;
  text-align: center;
  background: #faa2c1;
  border: 0;
  border-radius: 8px;
  color: #fff;
`;
