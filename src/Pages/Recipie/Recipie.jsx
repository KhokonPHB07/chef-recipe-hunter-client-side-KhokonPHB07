import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsBio from '../ChefsBio/ChefsBio';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Recipie = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
        <h1 className='text-lg font-semibold italic text-center'>Here is our all Famous Chef</h1>
            <div className='grid grid-cols-3 mx-8 my-20 gap-8'>
                {
                    chefDetails.map(chef => <ChefsBio
                        key={chef.id}
                        chef={chef}

                    ></ChefsBio>)
                }
            </div>
            {/* this is 2nd section start */}
            <h1 className='text-lg font-semibold italic text-center'>Customize and order your food</h1>
            <div>
                <div className="hero min-h-screen bg-base-200 mt-10 mb-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is 2nd section end */}
            
            {/* this is 3rd section start */}
            <h1 className='text-lg font-semibold italic text-center'>Choose your Menu</h1>
            <div>
                <div className="hero min-h-screen bg-base-200 mb-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is 3rd section end */}
            <Footer></Footer>
        </div>
    );
};

export default Recipie;