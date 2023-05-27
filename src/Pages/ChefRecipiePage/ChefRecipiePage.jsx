import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ShowRecipie from '../../Components/ShowRecipie/ShowRecipie';
import { FaStar } from 'react-icons/fa';

const ChefRecipiePage = () => {
    
    
    const chefDetails = useLoaderData();
    
    const {id,chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, description} = chefDetails;

   
    
    const [recipies,setRecipies]=useState([])
    useEffect(()=>{
        fetch('https://chef-recipie-server-pi.vercel.app/recipie')
        .then(res=>res.json())
        .then(data=>{
            const chefsRecipie = data.filter(recipie=>recipie.chefId===id);
            setRecipies(chefsRecipie);
        })
    },[id])
    
    
    console.log('this is recipie details', chefDetails);
    return (
        <div>
            <Navbar></Navbar>
            {/* this is chef bio details single form */}

            <div className="hero bg-orange-100 mb-10 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{description}</p>
                        <p className="py-1 font-semibold text-lg"> Number of Recipies : {numberOfRecipes}</p>
                        <p className="py-1 font-semibold text-lg"> Years Of Experience : {yearsOfExperience}</p>
                        <p className="py-1 font-semibold text-lg"> Total likes : {likes}</p>
                        
                    </div>
                </div>
            </div>

            {/* this is chef bio details single form */}

            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 mb-10 md:mx-48 lg:mx-96'>
            {
                recipies.map(recipie=><ShowRecipie
                    key={recipie.id}
                    recipie={recipie}
                ></ShowRecipie>)
            }
            </div>
            <div className='flex  justify-center items-center mb-10' >
            <button className=" rounded-md bg-orange-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"> <Link className='px-32 py-8' to="/">Back to Home</Link> </button>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipiePage;