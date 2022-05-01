import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../utlits/AuthContext";
import '../css/Login.css'

const Login = () => {

  const { createUser } = UserAuth();
  const {user} = UserAuth()

  const handelSignIn = async (e) => {
    e.preventDefault();
    try {
      await createUser();
    } catch {
      alert("error");
    }
  };

  return (
    <div className="login">
      <button onClick={handelSignIn}>Login With GOOGLE</button>
    </div>
  );
};

export default Login;
