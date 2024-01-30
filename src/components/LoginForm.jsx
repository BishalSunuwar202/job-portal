import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="h-screen flex justify-center border-2 bg-slate-500">
      <div className="m-4 w-5/12">
        <form className="m-10 p-10 flex flex-col border bg-slate-100 max-h-45">
          <p className="text-slate-400">
            Login with your registered Email & Password.
          </p>
          <input
            className="border-2 h-10 m-4 p-4"
            type="email"
            placeholder="Email Addresss"
            id="email"
            name="email"
            required
          />

          <input
            className="border-2 h-10 m-4 p-4"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
          />
          <div className="flex justify-around">
            <div>
              <input type="checkbox" id="1" />
              <label htmlFor="1"> Remember Me </label>
            </div>

            <p>Forgot Password?</p>
          </div>
          <Link to={"/profile"}>
            <button className="m-10 bg-sky-400 p-4 w-5/6 rounded-lg hover:bg-sky-200 text-white font-extralight">
              Log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
