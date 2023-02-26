import React, { useState } from "react";
import { app, auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignedDsiplay from "./SignedDsiplay";
import Router from "next/router";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setLogout } from "../Store/UserSlice";

export default function SinUp() {
  var signin = 0;
  var SignedIn;
  const [user, SetUserInfo] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState("Checked");
  const OnSubmitHandler = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Sign In Succcessfully!");
        console.log(user);

        Router.push("/SignedDsiplay");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Error!");
      });

    SetUserInfo({ email: "", password: "" });
  };
  return (
    <>
      <br />
      <br />
      <div className="login-form">
        <h2>SignIn</h2>
        <form onSubmit={OnSubmitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              value={user.email}
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => SetUserInfo({ ...user, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              value={user.password}
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) =>
                SetUserInfo({ ...user, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkbox">Remeber Me</label>
            <input
              value={rememberMe}
              type="checkbox"
              id="checkbox"
              name="checkbox"
              required
            />
          </div>
          <button type="submit">SignIn</button>
        </form>
      </div>
    </>
  );
}
