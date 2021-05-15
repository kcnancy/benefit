import React from "react";
import logo from "../img/benefit-darkgray.png"
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center bg-turquoise">
        <Link to="/"><img src={logo} alt="benefit logo" className="p-2"></img></Link>
        <div>
          <ul className="flex flex-row">
            <li className="pr-5 text-2xl text-darkgray">
              <Link
                to="/login"
                className={location.pathname === "/login"}
              >
                Login
            </Link>
            </li>
            <li className="pr-5 text-2xl text-darkgray">
              <Link
                to="/logfood"
                className={location.pathname === "/logfood"}
              >
                Log Food
            </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
