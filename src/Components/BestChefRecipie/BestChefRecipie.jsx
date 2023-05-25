import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecipiePage from '../../Pages/ChefRecipiePage/ChefRecipiePage';
import ShowRecipie from '../ShowRecipie/ShowRecipie';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const BestChefRecipie = () => {
    const recipieDetails=useLoaderData();
    
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-2xl font-semibold italic text-center mt-10 mb-10'>---------- best chefrecipie ----------</h1>
           <div className='grid grid-cols-3 mx-8 my-20 gap-8'>
           {
                recipieDetails.map(recipie=><ShowRecipie
                    key={recipie.id}
                    recipie={recipie}
                ></ShowRecipie>)
            }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default BestChefRecipie;