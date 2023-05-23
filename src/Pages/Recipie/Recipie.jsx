import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipie = () => {
    const chefBio = useLoaderData();
    console.log(chefBio);
    return (
        <div>
                <h1>this is recipie details page : {chefBio.length}</h1>
        </div>
    );
};

export default Recipie;