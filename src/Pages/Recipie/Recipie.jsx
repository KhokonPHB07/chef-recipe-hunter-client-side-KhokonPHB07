import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBio from '../ChefsBio/ChefsBio';


const Recipie = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <div>

            <h1 className='text-lg font-semibold italic text-center mt-10'>-------------------- Here is our all Famous Chef --------------------</h1>
            <div className='grid grid-cols-3 mx-8 my-20 gap-8 '>
                {
                    chefDetails.map(chef => <ChefsBio
                        key={chef.id}
                        chef={chef}

                    ></ChefsBio>)
                }
            </div>

            {/* this is 2nd section start */}

            <div>
                <div className="hero  bg-base-200 mt-10 mb-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/55n9TC5/02.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='ms-20'>
                            <h1 className="text-5xl font-bold italic">Customize and order your food</h1>
                            <p className="py-6">If you are spicy lover choose our all lovely spice item</p>
                            <li>Hot rice with chili chicken</li>
                            <li>Hot beef seezling</li>
                            <li>Mashroom with Onion</li>
                            <li>Ilish fish with onion fry</li>
                            <li>Dry fish with chili fleaks</li>
                            <div className='my-5'>
                                <button className="btn btn-warning px-5 hover:bg-orange-600 ">Customize food</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is 2nd section end */}

            {/* this is 3rd section start */}

            <div>
                <div className="hero  bg-base-200 mb-10 py-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/YRPjGw2/03.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='ms-20'>
                            <h1 className="text-5xl font-bold italic">Choose your Menu</h1>
                            <p className="py-6">From our 100+ Item select your love one</p>
                            <button className="btn btn-warning px-5 hover:bg-orange-600 ">Select Menu</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is 3rd section end */}

        </div>
    );
};

export default Recipie;