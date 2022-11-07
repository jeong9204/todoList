import React from "react";
import { auth } from "../Firebase";

function Home() {
  const user = auth.currentUser;
  return <div>{user.displayName}</div>;
}

export default Home;
