import { useEffect, useState } from "react";
import Router from "./Router";
import { auth } from "./Firebase";
import styled from "styled-components";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <Footer>&copy; {new Date().getFullYear()} TodoList</Footer>
    </>
  );
}

export default App;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65px;
  line-height: 65px;
  text-align: center;
  font-size: 0.938rem;
  color: #d6336c;
`;
