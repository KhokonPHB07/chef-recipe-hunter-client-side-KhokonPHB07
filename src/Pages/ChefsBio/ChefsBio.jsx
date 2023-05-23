import React from 'react';

const ChefsBio = ({ chef }) => {
    console.log(chef);
    
    const { chefName,chefPicture,likes,numberOfRecipes,yearsOfExperience } = chef;

    return (
        <div className='grid grid-cols-3 mx-8 my-20 gap-8'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chef Name : {chefName}</h2>
                    <p>Number Of Recipie:{numberOfRecipes}</p>
                    <p>Years of Experience:{yearsOfExperience}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefsBio;