import "./App.css";
import Login from "./Pages/Login/Login";
import Users from "./Pages/Users/Users";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("FreJun_task_userInfo")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const loginStatusHandler = (loginStatus) => {
    setIsLoggedIn(loginStatus);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login loginStatusHandler={loginStatusHandler} />
            )
          }
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Users loginStatusHandler={loginStatusHandler} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
