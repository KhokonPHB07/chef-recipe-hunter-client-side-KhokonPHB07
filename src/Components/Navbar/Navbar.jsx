import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-amber-600">
                <div className="flex-1">
                    <p className=" text-xl text-white italic font-semibold">Banglar Khabar</p>
                </div>
                <div className="flex grow-1">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white ml-6'>Home</li>
                        <li className='text-white ml-6'>chef</li>
                        <li className='text-white ml-6'>Login</li>
                        <li className='text-white ml-6'>Register</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;