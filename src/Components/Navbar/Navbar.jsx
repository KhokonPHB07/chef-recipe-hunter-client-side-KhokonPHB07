import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';
import { FaBtc, FaUserAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    

    const { user, logOut } = useContext(Authcontext);
    console.log('this is looged user from login', user);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

   

    return (
        <div>
            <div className="navbar bg-amber-600 mt-2">
                <div className="flex-1">
                    <p className=" text-xl text-white italic font-semibold">Banglar Khabar</p>
                </div>
                <div className="flex grow-1 px-24">
                    <ul className="menu menu-horizontal px-1">


                        <li className='text-white ml-6'> <Link to='/'>Home</Link></li>

                        {user && (
                            <li className="text-white ml-6">
                                <div className="relative">
                                    <img
                                        className="rounded-full w-1/2"
                                        // style={{ borderRadius: '50%', width: '64px', height: '64px' }}
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                    <span className="ml-2 absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 text-gray-800 opacity-0 group-hover:opacity-100">
                                        {user?.displayName}
                                    </span>
                                </div>
                            </li>
                        )}



                        {user ? (
                            <li className="text-white ml-6">
                                <Link onClick={handleLogout} to="/login" >Logout</Link></li>) : (<li className="text-white ml-6"><Link to="/login">Login</Link>
                                </li>
                        )}
                        <li className='text-white ml-6'><Link to='/register' >Register</Link></li>
                        <li className='text-white ml-6'> <Link to='/blog' >blog</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;