import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(Authcontext);
    console.log('this is looged user from login', user);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',

        }
    }

    return (
        <div>
            <div className="navbar bg-amber-600 mt-2">
                <div className="flex-1">
                    <p className=" text-xl text-white italic font-semibold">Banglar Khabar</p>
                </div>
                <div className="flex grow-1 px-24">
                    <ul className="menu menu-horizontal px-1">


                        <li className='text-white ml-6'> <NavLink style={navLinkStyle} to='/'>Home</NavLink></li>

                        {user && (
                            <li className="text-white ml-6">
                                <div className="relative group">
                                    <img className="rounded-full w-1/2 max-w-[72px]" src={user?.photoURL} alt={user?.email}></img>
                                    <span className="ml-2 absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 text-gray-800 opacity-0 group-hover:opacity-100">
                                        {user?.displayName || user?.email}
                                    </span>
                                </div>
                            </li>
                        )}



                        {user ? (
                            <li className="text-white ml-6">
                                <NavLink style={navLinkStyle} onClick={handleLogout} to="/login" >Logout</NavLink></li>) : (<li className="text-white ml-6"><NavLink style={navLinkStyle} to="/login">Login</NavLink>
                                </li>
                        )}
                        <li className='text-white ml-6'><NavLink style={navLinkStyle} to='/register' >Register</NavLink></li>
                        <li className='text-white ml-6'> <NavLink style={navLinkStyle} to='/blog' >blog</NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;