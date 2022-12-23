import React from "react";
import LoginImg from "../../assets/LoginPageLeft.avif";
import Facebook from "../../assets/facebook.svg";
import Google from "../../assets/google.svg";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <div>
        <img className="signUpImg" src={LoginImg} alt="Sign Up image" />
      </div>
      <div className="signContainer">
        <div className="signCard">
          <div>
            <h1>Sign up</h1>
            Already have an account?
            <a id="loginLink" href="">
              {"\u00A0"} Log in
            </a>
          </div>

          <form>
            <label>Name</label>

            <div className="input-fields">
              <input id="input-left" type="text" placeholder="First Name" />
              <input id="input-right" type="text" placeholder="Last Name" />
            </div>

            <label id="email-label">Email</label>
            <div className="input-fields">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="myname@gmail.com"
              />
            </div>

            <label id="password-label">Password</label>
            <div className="input-fields">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
              />
            </div>

            <div id="legals">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <span className="legal-text">
                I agree to the
                <a className="legal-links" href="#">
                  {"\u00A0"}Platform's Terms{"\u00A0"}
                </a>
                of service and
                <a className="legal-links" href="#">
                  {"\u00A0"}Privacy Policy.
                </a>
              </span>
            </div>
            {/* Sign up button */}
            <div className="sign-up">
              <button id="sign-up-btn">Create Account</button>
              <div>
                {"\u00A0"}
                {"\u00A0"}or{"\u00A0"}
                {"\u00A0"}
              </div>
              {/* Alternate sign up options */}
              <div id="alternate-sign-ups">
                <div id="google-sign-up" className="sign-up-link">
                  <a href="#">
                    <img src={Google} alt="google logo" />
                  </a>
                  <span className="sign-up-text">Sign up with Google</span>
                </div>
                <div id="facebook-sign-up" className="sign-up-link">
                  <a href="#">
                    <img src={Facebook} alt="facebook logo" />
                  </a>
                  <span className="sign-up-text">Sign up with Facebook</span>
                </div>
              </div>
            </div>

            {/*🟡 Add create account button🟡 */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
