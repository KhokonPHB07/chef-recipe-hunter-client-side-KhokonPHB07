import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBio from '../ChefsBio/ChefsBio';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Recipie = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <div>
            
        <h1 className='text-lg font-semibold italic text-center mt-10'>-------------------- Here is our all Famous Chef --------------------</h1>
            <div className='grid grid-cols-3 mx-8 my-20 gap-8'>
                {
                    chefDetails.map(chef => <ChefsBio
                        key={chef.id}
                        chef={chef}

                    ></ChefsBio>)
                }
            </div>
            {/* this is 2nd section start */}
            <h1 className='text-lg font-semibold italic text-center'>-------------------- Customize and order your food --------------------</h1>
            <div>
                <div className="hero min-h-screen bg-base-200 mt-10 mb-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/55n9TC5/02.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Customize and order your food</h1>
                            <p className="py-6">If you are spicy lover choose our all lovely spice item</p>
                            <li>Hot rice with chili chicken</li>
                            <li>Hot beef seezling</li>
                            <li>Mashroom with Onion</li>
                            <li>Ilish fish with onion fry</li>
                            <li>Dry fish with chili fleaks</li>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is 2nd section end */}
            
            {/* this is 3rd section start */}
            <h1 className='text-lg font-semibold italic text-center mb-10'>-------------------- Choose your Menu --------------------</h1>
            <div>
                <div className="hero min-h-screen bg-base-200 mb-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/YRPjGw2/03.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Choose your Menu</h1>
                            <p className="py-6">From our 100+ Item select your love one</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is 3rd section end */}
            
        </div>
    );
};

export default Recipie;