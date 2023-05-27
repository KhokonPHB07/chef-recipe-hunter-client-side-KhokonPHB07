import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ChefsBio = ({ chef }) => {
    const [isLoading, setIsLoading] = useState(true);

    if (!chef || !chef.chefName) {
        // Handle the case when chef data is missing or undefined
        return <div></div>;
    }

    setTimeout(() => {
        setIsLoading(false);
    }, 100);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience } = chef;

    return (
        <div >

            <div className="card card-side bg-base-100 shadow-xl ">
                <figure ><img className='rounded-lg' src={chefPicture} alt="chef" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold"> Chef Name :  {chefName}</h2>
                    <p>Number Of Recipie :{numberOfRecipes}</p>
                    <p>Years of Experience :{yearsOfExperience}</p>
                    <p>Total Likes : {likes} </p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline btn-warning">
                            <Link to={`/chefrecipiepage/${id}`}>View Recipes</Link>
                        </button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ChefsBio;