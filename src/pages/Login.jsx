import React, { useState } from "react";
import styled from "styled-components";
import { MdFingerprint } from "react-icons/md";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const inputId = (e) => {
    setUserId(e.target.value);
  };

  const inputPw = (e) => {
    setUserPw(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUserId("");
    setUserPw("");
  };

  return (
    <LoginWrap>
      <LoginContent>
        <LoginTitle>
          <MdFingerprint /> <LoginTit>로그인</LoginTit>
        </LoginTitle>
        <LoginForm onSubmit={onSubmit}>
          <LoginInput
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요."
            value={userId}
            onChange={inputId}
          />
          <LoginInput
            type="password"
            name="pwd"
            placeholder="비밀번호를 입력해주세요."
            value={userPw}
            onChange={inputPw}
          />
          <LoginBtn type="submit" disabled={!userId || !userPw}>
            로그인
          </LoginBtn>
        </LoginForm>
      </LoginContent>
    </LoginWrap>
  );
}

const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #e9ecef;
`;

const LoginContent = styled.div`
  width: 500px;
  background: #fff;
  padding: 100px 30px;
  border-radius: 12px;
`;

const LoginTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  vertical-align: middle;
  margin-bottom: 25px;
`;

const LoginTit = styled.span`
  font-size: 1.125rem;
  line-height: 1.4em;
  vertical-align: top;
`;

const LoginForm = styled.form``;
const LoginInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 0.938rem;
  color: #222;
  margin-bottom: 10px;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 8px;
  font-size: 0.938rem;
  background: #d6336c;
  color: #fff;

  :disabled {
    background: #fafafa;
    color: rgba(0, 0, 0, 0.3);
  }
`;
