/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Review = () => {
    return (
        <div  className='my-5'>
            <h2 className='my-5'>WHAT WE GET TO HEAR <span className='fw-bold text-success fs-1'>?</span></h2>
            <Marquee className='mb-5'>
                <Card style={{ width: '300px', height: '300px' }} className='md:mx-4 bg-danger p-2 rounded-circle d-flex flex-column justify-content-center align-items-center '>
                    <div style={{ width: '90px', height: '90px' }} className='d-flex  justify-content-center align-items-center border border-3 border-light rounded-circle'>
                        <Image style={{ width: '70px', height: '70px' }} src="https://img.freepik.com/free-photo/close-up-portrait-handsome-confident-young-man-white-t-shirt-looking-away-blurry-outdoor-nature_176420-6306.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=robertav1_2_sidr" roundedCircle />
                    </div>
                    <Card.Body className='px-0'>
                        <Card.Title className="text-white fw-bold text-center">James bark</Card.Title>
                        <Card.Text className="text-center">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-white">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '300px', height: '300px' }} className='mx-4 bg-warning p-2 rounded-circle d-flex flex-column justify-content-center align-items-center '>
                    <div style={{ width: '90px', height: '90px' }} className='d-flex  justify-content-center align-items-center border border-3 border-light rounded-circle'>
                        <Image style={{ width: '70px', height: '70px' }} src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18655.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=robertav1_2_sidr" roundedCircle />
                    </div>
                    <Card.Body className='px-0'>
                        <Card.Title className="text-white fw-bold text-center">Sayem hassaan</Card.Title>
                        <Card.Text className="text-center">
                            Yummmmm! Looking forward for some more recipies from this master chefs.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-white">Last updated 4 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '300px', height: '300px' }} className='mx-4 bg-success p-2 rounded-circle d-flex flex-column justify-content-center align-items-center '>
                    <div style={{ width: '90px', height: '90px' }} className='d-flex  justify-content-center align-items-center border border-3 border-light rounded-circle'>
                        <Image style={{ width: '70px', height: '70px' }} src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18662.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=robertav1_2_sidr" roundedCircle />
                    </div>
                    <Card.Body className='px-0'>
                        <Card.Title className="text-white fw-bold text-center">Rohan ayan</Card.Title>
                        <Card.Text className="text-center">
                            It was an amazing experience. Loved the dishes. Highly prefer this platform .
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-white ">Last updated 6 mins ago</small>
                    </Card.Footer>
                </Card>
            </Marquee>
        </div>



    );
};

export default Review;