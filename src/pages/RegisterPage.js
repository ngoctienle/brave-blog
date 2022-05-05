import "./LoginPage/login.css";

import React from "react";
import { Link } from "react-router-dom";

import Input from "../components/shared/Input";
import Button from "../components/shared/Button";

const RegisterPage = () => {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <div className="form-login-register">
              <form action>
                <Input label="Full Name" placeholder="Enter your full name" />
                <Input label="Username" placeholder="Enter your username" />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <Input
                  type="password"
                  label="Confirm Password"
                  placeholder="Enter again your password"
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    Register
                  </Button>
                  <Link to="/login">Already have an account?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
