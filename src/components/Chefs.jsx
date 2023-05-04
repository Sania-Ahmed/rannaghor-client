/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard/ChefCard';
import { Container, Spinner } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    const [spinner, setSpinner] = useState(true); 

    useEffect(() => {
        fetch( 'https://rannaghor-server-sania-ahmed.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            setSpinner(false)
    }, [])
    if(spinner){
        return <Spinner className='text-white'  animation='border' ></Spinner>
    }
    return (
        <div className='mt-5'>

            <div className='d-flex justify-content-center align-items-center py-5 mt-5 '>

                <div
                    style={{
                        backgroundImage: "url(" + "https://img.freepik.com/free-photo/frying-pan-empty-with-various-spices-black-table_1220-561.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=robertav1_2_sidr" + ")",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100%'
                    }}
                    className='row mx-0 border'>
                    <h2 className='text-center my-5 fs-1 py-2'><span className='text-white'>Meet the Masters of kitchen</span></h2>
                    {
                        chefs.map(chef => <ChefCard key={chef.id}
                            chef={chef}></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chefs;