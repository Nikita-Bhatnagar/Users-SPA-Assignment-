import { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const credentials = {
    username: "admin@frejun",
    password: "12345678",
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (
      !username ||
      username.trim().length === 0 ||
      !password ||
      password.trim().length === 0
    ) {
      return;
    }
    if (
      username !== credentials.username ||
      password !== credentials.password
    ) {
      setError("Invalid username or password");
      return;
    }
    setError();
    localStorage.setItem("FreJun_task_userInfo", JSON.stringify(username));
    props.loginStatusHandler(true);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="••••••••"
        />
        {error && <p className="error">{error}</p>}
        <button
          type="submit"
          disabled={
            !username ||
            !password ||
            username.trim().length === 0 ||
            password.trim().length === 0
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
