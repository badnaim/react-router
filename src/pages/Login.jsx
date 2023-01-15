import { useState } from "react"
import "../style/login.css"

export default function Login(prop) {
  const { LoginCheck } = prop;
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  function loginHandler(e) {
    e.preventDefault();
    setUserName(e.target.userName.value); 
    setPassword(e.target.password.value); 
  }
  console.log("password:", password);
  console.log("username:", userName);

  return (
    <div className="main">
      <form className="logInSection">
        <h1>LOGIN</h1>
        <input id="input" type="text" placeholder="username" name="userName" />
        <input id="input" type="text" placeholder="password" name="password" />
        <button type="submit">Log in</button>
        <input id="regInp" type="button" value="Register" />
      </form>
    </div>
  )
} 