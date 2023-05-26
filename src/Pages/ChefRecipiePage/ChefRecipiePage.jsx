import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ShowRecipie from '../../Components/ShowRecipie/ShowRecipie';

const ChefRecipiePage = () => {
    // console.log('tryting ot getting recipie details',recipie);
    
    const recipieDetails = useLoaderData();
    
    const { chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, description} = recipieDetails;

    // const { id, recipeName, ingredients, cookingMethod, rating,imageUrl } = recipie;
    
    
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

            {/* <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imageUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{recipeName}</h2>
                    <p> Ingredients : 

                        <li>{ingredients[0]}</li>
                            <li>{ingredients[1]}</li>
                            <li>{ingredients[2]}</li>
                            <li>{ingredients[3]}</li>
                            <li>{ingredients[4]}</li>


                    </p>
                    <p> Cooking Method : {cookingMethod}</p>
                    <p>Rating : {rating}</p>
                    <p>Favourite 
                        <div className='flex'>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        </div>
                        </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </div> */}
            
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipiePage;