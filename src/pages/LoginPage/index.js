import "./login.css";

import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";

const LoginPage = () => {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form action>
                <Input label="Username" placeholder="Enter Username ..." />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter Password ..."
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    Login
                  </Button>
                  <Link to="/register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
