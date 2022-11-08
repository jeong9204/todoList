import React, { useState } from "react";
import styled from "styled-components";
import { MdFingerprint } from "react-icons/md";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "pwd") {
      setPassword(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newAccount) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user.displayName = username;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
      await updateProfile(auth.currentUser, { displayName: username });
      alert("회원가입 성공!");
      setNewAccount(false);
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
      alert("로그인 성공!");
    }

    setEmail("");
    setPassword("");
    setUsername("");
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <LoginWrap>
      {newAccount ? (
        <LoginContent>
          <LoginTitle>
            <MdFingerprint /> <LoginTit>회원가입</LoginTit>
          </LoginTitle>
          <LoginForm onSubmit={onSubmit}>
            <LoginInput
              type="text"
              name="email"
              placeholder="Email을 입력 해주세요."
              value={email}
              onChange={onChange}
            />
            <LoginInput
              type="text"
              name="username"
              placeholder="이름을 입력해주세요"
              value={username}
              onChange={onChange}
            />
            <LoginInput
              type="password"
              name="pwd"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={onChange}
            />
            <NonLogin onClick={toggleAccount}>로그인</NonLogin>
            <LoginBtn type="submit" disabled={!email || !password}>
              회원가입
            </LoginBtn>
          </LoginForm>
        </LoginContent>
      ) : (
        <LoginContent>
          <LoginTitle>
            <MdFingerprint /> <LoginTit>로그인</LoginTit>
          </LoginTitle>
          <LoginForm onSubmit={onSubmit}>
            <LoginInput
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={onChange}
            />
            <LoginInput
              type="password"
              name="pwd"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={onChange}
            />
            <NonLogin onClick={toggleAccount}>회원가입</NonLogin>
            <LoginBtn type="submit" disabled={!email || !password}>
              로그인
            </LoginBtn>
          </LoginForm>
        </LoginContent>
      )}
    </LoginWrap>
  );
}

export default Auth;

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

const NonLogin = styled.div`
  text-align: center;
  font-size: 0.938rem;
  color: #222;
  line-height: 1.3em;
  margin-bottom: 10px;
  padding: 8px 0;
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
