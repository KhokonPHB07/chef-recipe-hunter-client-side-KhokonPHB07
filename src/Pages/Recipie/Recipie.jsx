import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBio from '../ChefsBio/ChefsBio';

const Recipie = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <div>
                <h1>this is recipie details page : {chefDetails.length}</h1>
                {
                    chefDetails.map(chef=><ChefsBio
                        key={chef.id}
                        chef={chef}
                    
                    ></ChefsBio>)
                }
        </div>
    );
};

export default Recipie;