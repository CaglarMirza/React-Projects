import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./signUpForm";

function App() {
  return (
    <div className="container">
      <br />
      <SignUpForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
