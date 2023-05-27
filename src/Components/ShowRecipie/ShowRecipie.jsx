import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ShowRecipie = ({ recipie }) => {
    console.log("aita ager recipier data",recipie);
    const { id, recipeName, ingredients, cookingMethod, rating,imageUrl } = recipie;

    return (
        <div className='flex justify-around'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={imageUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body   ">
                    <h2 className="card-title font-semibold italic text-xl">{recipeName}</h2>
                    <p> <span className='font-bold'></span> Ingredients : 

                        <li >{ingredients[0]}</li>
                            <li>{ingredients[1]}</li>
                            <li >{ingredients[2]}</li>
                            <li >{ingredients[3]}</li>
                            <li >{ingredients[4]}</li>


                    </p>
                    <p> <span className='font-bold'>Cooking Method :</span> {cookingMethod}</p>
                    <p className='font-bold'>Rating : {rating}</p>
                    <p className='font-bold'>Favourite 
                        <div className='flex'>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        </div>
                        </p>
                    <div className="card-actions">
                    <button className="btn btn-outline btn-warning">Order Now</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ShowRecipie;