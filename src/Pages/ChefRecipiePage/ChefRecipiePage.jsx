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
        fetch('http://localhost:5000/recipie')
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

            <div className="hero  bg-base-200 mb-10 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{description}</p>
                        <p className="py-1 font-semibold text-lg"> Number of Recipies : {numberOfRecipes}</p>
                        <p className="py-1 font-semibold text-lg"> Years Of Experience : {yearsOfExperience}</p>
                        <p className="py-1 font-semibold text-lg"> Total likes : {likes}</p>
                        <button className="btn btn-primary font-semibold text-lg"> <Link to='/BestChefRecipie'>show recipie</Link></button>
                    </div>
                </div>
            </div>

            {/* this is chef bio details single form */}

            <div className='grid grid-cols-3 mx-8 my-20 gap-8'>
            {
                recipies.map(recipie=><ShowRecipie
                    key={recipie.id}
                    recipie={recipie}
                ></ShowRecipie>)
            }
            </div>
            
            
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipiePage;