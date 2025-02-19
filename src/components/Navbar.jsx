import { KeySquare } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="navbar bg-base-100 mx-auto my-4 max-w-[90%] rounded-3xl shadow-md translate-y-1 fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] z-50">


      <div className="navbar-start">
        <span className="flex items-center gap-1 text-2xl ml-4 font-bold italic font-ox">
          <KeySquare strokeWidth={2.25} />
          carent.
        </span>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {["Home", "Collections", "About Us", "Contact"].map((item) => (
            <li key={item}>
              <a
                onClick={() => setActive(item)}
                className={`cursor-pointer ${active === item ? "font-bold text-primary" : ""
                  }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
            <li><a>Home</a></li>
            <li><a>Collections</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
            <li><button className="btn btn-outline btn-primary btn-sm mt-2">Rent Now!</button></li>
          </ul>
        </div>
        <button className="btn btn-outline btn-primary mr-4 btn-sm hidden md:flex">Rent Now!</button>
      </div>
    </div>
  )
}

export default Navbar
