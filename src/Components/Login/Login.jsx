import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';





const Login = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const { signIn} = useContext(Authcontext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            
            Swal.fire('Password must be at least 6 characters long');
            return;
          }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire('Login Successfully')
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                    
                  })
            })

    }

    const googleLogIn =()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log('error',error.message);
        })
    }

    const gitHubLogin =()=>{
        signInWithPopup(auth,gitHubProvider)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log('error',error.message);
        })

    }


    return (
        <div>
            <Navbar></Navbar>
            {/* ---------------------------------this is login start-------------------------  */}

            <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 className="mt-10 text-center text-2xl font-bold italic  leading-9 tracking-tight text-gray-900">
                            Banglar Khabar
                        </h2>

                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleLogin} className="space-y-6" >
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" required placeholder='email address'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" required placeholder='password'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>

                                <button type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                   Login</button>


                            </div>
                        </form>
                        <p className="flex w-full justify-center mt-10 mb-10">----------   or Continue with   ----------</p>

                        <button type="submit" onClick={googleLogIn}
                            className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4">
                            <FaGoogle className='mx-3'></FaGoogle> google</button>
                        <button type="submit" onClick={gitHubLogin}
                            className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <FaGithub className='mx-3'></FaGithub> Github </button>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member? <Link to='/register' className='text-violet-600'>Register Please</Link>
                        </p>
                    </div>
                </div>
            </div>


            {/*----------------------------------this is login end----------------------------  */}
            <Footer></Footer>
        </div>
    );
};

export default Login;