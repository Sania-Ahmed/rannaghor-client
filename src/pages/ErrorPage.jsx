/* eslint-disable no-unused-vars */
import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
        <div style={{height:'100vh'}} className='d-flex align-items-center justify-content-center'>
            <h2 className='text-center my-auto fs-1'>Oops!Something went <small className='text-danger'>Wrong</small>. </h2>
            <Image style={{width:'250px' , height: '250px'}} src='https://img.freepik.com/free-vector/coloured-chefdesign_1152-73.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=robertav1_2_sidr' roundedCircle></Image>
        <Link to={'/'}><span className='text-decoration-underline mt-0 '>Go back to home</span></Link>
        </div>
        </div>
    );
};

export default ErrorPage;