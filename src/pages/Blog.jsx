/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='my-5 p-4'>
            <h1 className=' text-center fw-bold text-dark '>BLOGS</h1>
            <h2 className='fw-bold  text-success '>Difference between controlled and uncontrolled component</h2>
            < p className='text-secondary mb-4'>
                controlled components mean that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.they does not depend on the parent components.
            </p>
            <h2 className='fw-bold  text-success '>How to validate React props using PropTypes?</h2>
            < p className='text-secondary mb-4'>
                At first one needs to install prop-types . using this command <small className='bg-secondary rounded text-white p-1 '>npm install prop-types --save</small> . We can use PropTypes to validate any data we are receiving from props. But before using it we will have to import it as always in our app.<small className='bg-secondary rounded text-white p-1'>import PropTypes from prop-types;</small>. they are  usually used in the end of the component .
            </p>
            <h2 className='fw-bold  text-success '>Difference between nodejs and express js</h2>
            < p className='text-secondary mb-4'>
                Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
            </p>
            <h2 className='fw-bold  text-success '>Difference between controlled and uncontrolled component</h2>
            < p className='text-secondary mb-4'>
                Custom hook is mainly created by the developer to organise the code also make reusability and light code which also helps the code run faster.
                Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
            </p>
        </div>
    );
};

export default Blog;