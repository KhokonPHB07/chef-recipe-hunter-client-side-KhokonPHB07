import React from 'react';
import { FaHeart } from "react-icons/fa";

const ChefsBio = ({ chef }) => {
    console.log(chef);
    
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
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefsBio;