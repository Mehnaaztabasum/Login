import React from "react";
import Login from "./Login";
var islogin = true;
function rendercodition() {
  islogin ? <h1>mehnnaaz</h1> : <Login />;
}

function App() {
  return <div className="container">{rendercodition()}</div>;
}

export default App;
