import Link from "next/link";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <div className="container font-amiri grid place-items-center h-screen">
        <div className="login-content my-10 p-10 bg-[#ffffff67] backdrop-blur-sm border border-gray-100 shadow-sm ">
          <div className="login-logo">
            <Link className="font-bold text-3xl my-2 mb-5 block " href="/">
              Ashik <span className="text-green-500">Portfolio</span>
            </Link>
          </div>
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control w-full p-3 rounded my-1 outline-none border border-gray-100 focus:border-gray-300"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control w-full p-3 rounded my-1 outline-none border border-gray-100 focus:border-gray-300"
                  placeholder="Password"
                />
              </div>
              <div className="checkbox flex items-center justify-between my-2">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <label className="pull-right">
                  <a href="#">Forgotten Password?</a>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-success btn-flat m-b-30 m-t-30 p-3 px-5 w-full rounded text-white font-bold bg-green-500 hover:bg-green-600 mt-4"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.getLayout = (page: React.ReactNode) => <>{page}</>;

export default LoginPage;
