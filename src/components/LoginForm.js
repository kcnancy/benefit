import React from "react";
import logo from "../img/benefit-halfmoon.png"

function Login() {
    return (
        <section className="w-full flex justify-center items-center bg-darkgray">
            <div className="w-full max-w-md m-20" >
                <form action="" className="bg-offwhite shadow-md rounded px-8 py-8 pt-8">
                    <div className="flex justify-center">
                        <img src={logo} alt="benefit logo" className="py-2"></img>
                    </div>
                    <h2 className="text-center text-4xl">Welcome back!</h2>
                    <div className="px-4 py-4">
                        <label htmlFor="email" className="text-sm block font-bold  pb-2">Email Address</label>
                        <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com" />
                    </div>
                    <div className="px-4 pb-5">
                        <label htmlFor="password" className="text-sm block font-bold pb-2">Password</label>
                        <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" />
                    </div>
                    <div className="px-4">
                        <button className="bg-turquoise hover:bg-tangerine text-darkgray font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="button">Log In</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
