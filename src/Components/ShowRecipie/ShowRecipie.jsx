import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowRecipie = ({ recipie }) => {
    console.log("aita ager recipier data", recipie);
    const { id, recipeName, ingredients, cookingMethod, rating, imageUrl } = recipie;


    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const alertSweet = () => {

        Swal.fire(
            'Wow!!!!!!!',
            'Added in your Favourite list',
            'smily'
        )
        setButtonDisabled(true);
    }

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
                    <div className="card-actions">
                        <button onClick={alertSweet} className="btn btn-outline btn-warning" disabled={isButtonDisabled}>Favourite</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowRecipie;