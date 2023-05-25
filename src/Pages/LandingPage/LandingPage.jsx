import React from 'react';

const LandingPage = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-10 mb-10 bg-amber-700" >
                <div className=" bg-opacity-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='font-semibold italic'>Banglar khabar</span></h1>
                        <p className="mb-5">Bangladeshi cuisine is a true delight for food enthusiasts around the world. Known for its rich flavors, vibrant colors, and unique culinary techniques, Bangladeshi cuisine offers a diverse range of dishes that cater to both vegetarian and non-vegetarian palates. </p>
                        <button className="btn btn-warning">Explore our Signatuer Dish</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;