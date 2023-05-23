import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';
import {  FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const {user,logOut}=useContext(Authcontext);

    const handleLogout=()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-amber-600">
                <div className="flex-1">
                    <p className=" text-xl text-white italic font-semibold">Banglar Khabar</p>
                </div>
                <div className="flex grow-1">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white ml-6'> <Link to='/'>Home</Link> </li>
                        <li className='text-white ml-6'> <Link to='/blog'>blog</Link> </li>
                        <li className='text-white ml-6'> <Link>chef</Link></li>
                        {
                          user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                        }
                        { user?  
                         <li className='text-white ml-6'> <Link onClick={handleLogout} to='/login'> Logout</Link></li> :
                         <li className='text-white ml-6'> <Link to='/login'> Login</Link></li> 

                        
                        }
                        <li className='text-white ml-6'><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;