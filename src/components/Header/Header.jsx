import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {

    const { logOutuser, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOutuser();
        console.log('User Logged Out')
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/orders">Order History</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        {user && <> <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li></>}
    </>

    return (
        <div className="navbar bg-base-100">
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
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Auth & Private Route</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <p className="mr-3">{user.email}</p>
                    <button onClick={handleLogout} className="btn">Logout</button>
                </> : <Link to="/login">Login</Link>}
            </div>
        </div>
    );
};

export default Header;