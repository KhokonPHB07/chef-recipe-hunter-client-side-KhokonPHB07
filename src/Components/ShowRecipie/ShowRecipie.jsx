import React from 'react';

const ShowRecipie = ({ recipie }) => {
    const { id, recipeName, ingredients, cookingMethod, rating, favorite } = recipie;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/GVCxjwN/3106411-what-is-red-meat.jpg" alt="Shoes" className="rounded-xl" />
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
                    <p>Favourite : {favorite}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowRecipie;