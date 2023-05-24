import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const BlogPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-10 mb-10'>
                <h1 className='text-lg font-semibold'> Q.1 : Tell us the differences between uncontrolled and controlled components.</h1>
                <p> Ans : controlled components provide more control and flexibility over form data, while uncontrolled components offer simplicity and are useful for straightforward form scenarios. The choice between them depends on the complexity of the form and the level of control and validation needed.</p> <br /><br /><br />
                <h1 className='text-lg font-semibold'> Q.2 : How to validate React props using PropTypes?</h1>
                <p> Ans : PropTypes provides a way to define the expected types and shapes of the props, helping catch potential errors and bugs during development.</p> <br /><br /><br />
                <h1 className='text-lg font-semibold'> Q.3 : Tell us the difference between nodejs and express js.</h1>
                <p> Ans : Node.js and Express.js are both popular frameworks used in web development, but they serve different purposes and have different functionalities.Node.js is a runtime environment that allows JavaScript code to be executed on the server-side.Express.js is a web application framework built on top of Node.js</p> <br /><br /><br />
                <h1 className='text-lg font-semibold'> Q.4 : What is a custom hook, and why will you create a custom hook?</h1>
                <p> Ans : A custom hook in React is a JavaScript function that allow us to reuse logic across multiple components. It's a way to extract common functionality into a separate function that can be easily shared and consumed by different components. I can create a custom hook in React to encapsulate and abstract complex logic or behavior that is used in multiple components.</p> <br /><br /><br />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogPages;