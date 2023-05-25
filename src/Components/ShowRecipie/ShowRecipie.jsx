import React from 'react';
import { FaStar } from "react-icons/fa";

const ShowRecipie = ({ recipie }) => {
    const { id, recipeName, ingredients, cookingMethod, rating,imageUrl } = recipie;

    return (
        <div>
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

        </div>
    );
};

export default ShowRecipie;