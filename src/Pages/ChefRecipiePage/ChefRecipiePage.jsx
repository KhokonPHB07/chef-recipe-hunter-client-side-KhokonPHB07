import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ShowRecipie from '../../Components/ShowRecipie/ShowRecipie';

const ChefRecipiePage = () => {
    const recipieDetails = useLoaderData();
    const { chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, description} = recipieDetails;
    
    
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
                        <p className="py-6 font-semibold text-lg"> Number of Recipies : {numberOfRecipes}</p>
                        <p className="py-6 font-semibold text-lg"> Years Of Experience : {yearsOfExperience}</p>
                        <p className="py-6 font-semibold text-lg"> Total likes : {likes}</p>
                        <button className="btn btn-primary font-semibold text-lg"> <Link to='/BestChefRecipie'>show recipie</Link></button>
                    </div>
                </div>
            </div>

            {/* this is chef bio details single form */}

            
            
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipiePage;