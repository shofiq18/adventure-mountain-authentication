// ;

// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "./Provider/AuthProvider";
// import { FaUserCircle } from "react-icons/fa";


// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);

//     const handleLogOut = () => {
//         logOut()
//             .then(() => {
//             })
//             .catch((error) => {
//             });
//     };

//     const links = (
//         <>
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/update">Update Profile</NavLink></li>
//             <li><NavLink to="/user">User Profile</NavLink></li>
//         </>
//     );

//     return (
//         <div className="bg-white">
//             <div className="navbar max-w-7xl mx-auto">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             {links}
//                         </ul>
//                     </div>

//                     <img className="w-72 h-24 object-cover rounded-full" src="https://i.ibb.co.com/c8ps488/sunset-and-mountain-logo-design-landscape-sunset-logo-adventure-vector.jpg" alt="" />
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal gap-3 text-base text-gray-500 px-1">
//                         {links}
//                     </ul>
//                 </div>
//                 <div className="navbar-end text-base">
//                     <p className="mr-6">{user && user.email}</p>
                    
//                     {user?.photoURL ? (
//                         <div className="relative group mr-6">
//                             {/* User photo */}
//                             <img
//                                 src={user.photoURL}
//                                 alt="User"
//                                 className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover cursor-pointer"
//                             />
                           
//                             <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-lg">
//                                 {user.displayName}
//                             </span>
//                         </div>
//                     ) : (
//                         <span className="text-4xl mr-8">
//                             <FaUserCircle />
//                         </span>
//                     )}

//                     {user?.email ? (
//                         <button onClick={handleLogOut} className="btn">Log Out</button>
//                     ) : (
//                         <Link to="/login">
//                             <button className="btn">Log in</button>
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully logged out!");
            })
            .catch((error) => {
                toast.error("Error logging out. Please try again!");
            });
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/update">Update Profile</NavLink></li>
            <li><NavLink to="/user">User Profile</NavLink></li>
        </>
    );

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
                    <p className="mr-6">{user && user.email}</p>
                    
                    {user?.photoURL ? (
                        <div className="relative group mr-6">
                            {/* User photo */}
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover cursor-pointer"
                            />
                           
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-lg">
                                {user.displayName}
                            </span>
                        </div>
                    ) : (
                        <span className="text-4xl mr-8">
                            <FaUserCircle />
                        </span>
                    )}

                    {user?.email ? (
                        <button onClick={handleLogOut} className="btn">Log Out</button>
                    ) : (
                        <Link to="/login">
                            <button className="btn">Log in</button>
                        </Link>
                    )}
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Navbar;

