import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-amber-600">
                <div className="flex-1">
                    <p className=" text-xl text-white italic font-semibold">Banglar Khabar</p>
                </div>
                <div className="flex grow-1">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white ml-6'> <Link to='/'>Home</Link> </li>
                        <li className='text-white ml-6'> <Link>chef</Link></li>
                        <li className='text-white ml-6'> <Link to='/login'> Login</Link></li>
                        <li className='text-white ml-6'><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;