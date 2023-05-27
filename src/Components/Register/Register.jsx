import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {

    const{createUser}=useContext(Authcontext)
    const navigate=useNavigate();
    const handleRegister =(event)=>{
          event.preventDefault();
          const form=event.target;
          const name=form.name.value;
          const photo=form.photo.value;
          const email=form.email.value;
          const password=form.password.value;
          console.log(name,photo,email,password);

        createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
            Swal.fire('Congrats !!!User created successfully.')
            form.reset();
        })
        .catch(error=>{
            console.log(error);
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
                
              })
        })

    }

    const userRouteToHomePage=()=>{
        navigate('/');
    }


    return (
        <div>
            <Navbar></Navbar>
            {/* ---------------------------------this is Register start-------------------------  */}

            <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 className="mt-10 text-center text-2xl font-bold italic  leading-9 tracking-tight text-gray-900">
                            Banglar Khabar
                        </h2>

                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Please Register your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleRegister} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Your Name</label>
                                <div className="mt-2">
                                    <input id="name" name="name" type="text" required placeholder='your name please'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            
                            
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Photo URL</label>
                                <div className="mt-2">
                                    <input id="photo" name="photo" type="photo" required placeholder='your photo url please'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email"  required placeholder='your email address'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            
                            
                            
                            
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"> Password</label>
                                    
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password"  required placeholder='your password please'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" onClick={userRouteToHomePage}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                > Register </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account? <Link to='/login' className='text-violet-600'>Login Please</Link>
                        </p>
                    </div>
                </div>
            </div>


            {/*----------------------------------this is Register end----------------------------  */}
            <Footer></Footer>
        </div>
    );
};

export default Register;