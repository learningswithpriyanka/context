import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import UserContextProvider from "./context/UserContext";
import Login from "./Login";
import Profile from "./Profile";
import Logout from "./Logout";
import RefDemo from "./RefDemo";
import ReducerDemo from "./ReducerDemo";
import TicTacToe from "./TicTacToe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <UserContextProvider>
        <App />
        <Login/>
        <Profile/>
        <Logout/>
        <RefDemo/>
      </UserContextProvider>
    </BrowserRouter> */}

    {/* <RefDemo/> */}

    {/* <ReducerDemo/> */}

    <TicTacToe/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
