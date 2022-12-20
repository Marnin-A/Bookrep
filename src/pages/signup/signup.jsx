import React from "react";
import LoginImg from "../../assets/LoginPageLeft.jpeg";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="login">
      <div>
        <img className="loginImg" src={LoginImg} alt="" />
      </div>
      <div className="loginContainer">
        <form className="loginCard">
          <h1>Sign up</h1>
          <div>
            Already have an account? <a href="">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
