import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";



const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/update">Update Profile</NavLink></li>
        <li><NavLink to="/user">User Profile</NavLink></li>
    

    </>
    return (
       <div className="bg-white">
         <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                
                <img className="w-72 h-24 object-cover rounded-full" src="https://i.ibb.co.com/c8ps488/sunset-and-mountain-logo-design-landscape-sunset-logo-adventure-vector.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 text-base text-gray-500 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end text-base">
                <p className="mr-6">{ user && user.email}</p>
                <span className="text-4xl mr-8 "><FaUserCircle />
                </span>
                {
                    user && user?. email ? (<button onClick={logOut} className="btn">Log Out</button>) : (<Link to="/login"><a className="btn">Log in</a></Link>)
                }
                
            </div>
        </div>
       </div>
    );
};

export default Navbar;