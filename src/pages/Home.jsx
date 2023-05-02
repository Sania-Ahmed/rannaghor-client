/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Chefs from '../components/chefs';
import Review from '../components/review';

const Home = () => {
    return (
        <div>
            {/* the banner  */}
            <div style={{
                backgroundImage: "url(" + "https://img.freepik.com/premium-photo/fresh-herbs-spices-peppers-dill-parsley-black-background-place-text-culinary-concept-background-menu-recipe_114106-2324.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=robertav1_2_sidr" + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '80vh'
            }}

                className='d-flex justify-content-center align-items-center py-3'
            >
                <div className='w-75 my-3 border border-3 border-white rounded p-4'>
                    <div className='bg-white text-center py-2'>
                        <h2 className='fs-2 lh-base'>WELCOME TO <br />
                            <span className='text-success fw-bold text-decoration-underline'>RANNAGHOR</span>
                        </h2>
                        <p><small className='text-secondary'>Meet the best chefs and get to know their secret recipies here . <br></br>We are revealing the hidden kitchen secrets. </small></p>
                    </div>
                </div>
            </div>
            {/* the about section. this is the first extra section */}
             <div>
                <Container className='my-5'>
                    <div className='my-5'>
                        <div className='border border-3 border-success rounded w-full mx-auto p-4'>
                            <div style={{
                                backgroundImage: "url(" + "https://img.freepik.com/free-photo/meal-planning-food-arrangement_23-2149099846.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=robertav1_2_sidr" + ")",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: "50vh",
                                position:'relative'
                            }}
                            className='d-flex align-items-center'>
                                <div className='bg-white text-center position-absolute z-1 px-2'>
                                    <h3 className='text-success'>ABOUT US</h3>
                                    <p><small className='text-secondary text-center'>
                                        In this platform you will get to know about many chefs and their recipies . we have great reviews and we can help you with every type of assistence related to cooking. so enjoy the dishes and happy cooking ^-^.
                                    </small></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div> 
            {/* the chefs section */}
            <Chefs></Chefs>
            <Review></Review>

        </div>
    );
};

export default Home;