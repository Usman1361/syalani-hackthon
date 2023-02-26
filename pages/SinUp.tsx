import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "./firebase";
import Router from "next/router";

export default function SinUp() {
  const [user, SetUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const OnSubmitHandler = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Router.push("/SignIn");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    SetUserInfo({ username: "", email: "", password: "" });
  };
  return (
    <>
      <br />
      <br />
      <div className="login-form">
        <h2>SignUp</h2>
        <form onSubmit={OnSubmitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              value={user.username}
              type="text"
              id="username"
              name="username"
              required
              onChange={(e) =>
                SetUserInfo({ ...user, username: e.target.value })
              }
            />
          </div>
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
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  );
}
