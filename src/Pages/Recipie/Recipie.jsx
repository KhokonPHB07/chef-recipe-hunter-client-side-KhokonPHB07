import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBio from '../ChefsBio/ChefsBio';

const Recipie = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <div>
            <h1>this is recipie details page : {chefDetails.length}</h1>

            <div className='grid grid-cols-3 mx-8 my-20 gap-8'>
                {
                    chefDetails.map(chef => <ChefsBio
                        key={chef.id}
                        chef={chef}

                    ></ChefsBio>)
                }
            </div>
        </div>
    );
};

export default Recipie;