import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className='text-4xl font-extrabold text-center mt-16 italic'>Oops! Why you are here ? </h1>
      <p className='text-lg font-medium text-center  italic'>We are very sorry for inconvenience. <br /> It looks like you are tryting to access a page that <br /> either has been deleted or never even existed</p>
      <p className='text-4xl font-extrabold text-center my-28 italic'>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className='grid place-items-center gap-10'>
        <img src="https://i.ibb.co/L030BLj/error-elemen-01.jpg" alt="" />
        <button className="btn hover:bg-violet-600"> <Link to="/">Back to Home</Link> </button>
      </div>

    </div>
  );
};

export default Error;