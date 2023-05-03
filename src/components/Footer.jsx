/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-md-5'>
            <div className='bg-dark py-md-2 d-md-flex justify-content-center'>
            <div className='text-white p-2'>
              <p className='fw-semibold'>We also provide:</p>
              <p>Cooking Courses</p>
              <p>Free trial</p>
              <p>Cooking exhibition</p>
            </div>
            <div className='text-white p-2'>
                <p className='fw-semibold'>THE RANNAGHOR</p>
                <p>adress: gulshan, road-2a, Dhaka</p>
            </div>
            <div className='text-white p-2'>
               <p className='fw-semibold'>Contact us:</p>
               <p>email: rannaghor@gmail.com</p>
            </div>
            
        </div>
        <p className='fw-bold text-center text-secondary'>Copyright &copy; RANNAGHOR</p>
        <div className='d-flex justify-content-center gap-2 align-items-center'>
            <FaFacebook className='text-primary' style={{width:'40px', height:'40px'}}></FaFacebook>
            <FaYoutube className='text-danger' style={{width:'40px', height:'40px'}}></FaYoutube>
        </div>
        </div>
    );
};

export default Footer;