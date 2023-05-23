import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";


const ChefsBio = ({ chef }) => {
    const [isLoading, setIsLoading] = useState(true);

    if (!chef || !chef.chefName) {
        // Handle the case when chef data is missing or undefined
        return <div>No chef data available</div>; // Replace with your custom error message or component
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      if (isLoading) {
        return <div>Loading...</div>; // Replace with your custom loader component or message
      }
    
    const { chefName,chefPicture,likes,numberOfRecipes,yearsOfExperience } = chef;

    return (
        <div >
            
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chef Name : {chefName}</h2>
                    <p>Number Of Recipie:{numberOfRecipes}</p>
                    <p>Years of Experience:{yearsOfExperience}</p>
                    <p><FaHeart></FaHeart> Total Likes: {likes} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default ChefsBio;