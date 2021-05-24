import React, { useState } from "react";
import logo from "../images/benefit-halfmoon.png";
import axios from "axios";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSignup() {
    console.log(email, password);
   const obj = {
       email: email,
       password: password
   }
    axios.post("/api/signup", obj).then(res => {
        console.log (res)
    }).catch (error => console.log(error))
    
  }
  return (
    <section className="w-full flex justify-center items-center bg-darkgray">
      <div className="w-full max-w-md m-20">
        <form
          action=""
          className="bg-offwhite shadow-md rounded px-8 py-8 pt-8"
        >
          <div className="flex justify-center">
            <img src={logo} alt="benefit logo" className="py-2"></img>
          </div>
          <h2 className="text-xl">
            Provide the email address and password to be used for your account.
          </h2>
          <div className="px-4 py-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="NewYearNewMe@benefit.com"
            />
          </div>
          <div className="px-4 pb-5">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Provide a password"
            />
          </div>
          <div className="px-4">
            <button
              className="bg-tangerine hover:bg-turquoise text-darkgray font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
