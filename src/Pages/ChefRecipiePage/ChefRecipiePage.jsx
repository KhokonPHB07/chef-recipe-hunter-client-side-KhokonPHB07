import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ChefRecipiePage = () => {
    const recipieDetails = useLoaderData();
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, description, title, recipe } = recipieDetails;
    console.log('this is recipie details', recipieDetails);
    return (
        <div>
            <Navbar></Navbar>
            {/* this is chef bio details single form */}

            <div className="hero min-h-screen bg-base-200 mb-10 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{description}</p>
                        <p className="py-6"> Number of Recipies : {numberOfRecipes}</p>
                        <p className="py-6"> Years Of Experience : {yearsOfExperience}</p>
                        <p className="py-6"> Total likes : {likes}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* this is chef bio details single form */}

            {/* this is recipie details start */}
            <h1 className='font-semibold text-lg text-center'>Exclusive Recipie by : {chefName}</h1>
            <div className='grid grid-cols-3 mx-auto mb-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/GVCxjwN/3106411-what-is-red-meat.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/GVCxjwN/3106411-what-is-red-meat.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/GVCxjwN/3106411-what-is-red-meat.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is recipie details end */}
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipiePage;