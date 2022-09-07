// ejs Hint:version6
import React from "react";
import Login from "./Login";
var islogin = false;

// const time=new Date().getHours();
// console.log(time);

function rendercodition() {
  islogin ? <h1>mehnnaaz</h1> : <Login />;
}

function App() {
  return <div className="container">{rendercodition()}</div>;
}

export default App;
