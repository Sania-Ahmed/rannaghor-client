/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import './chefCard.css'

const ChefCard = ({chef}) => {
   console.log(chef)
   const {id, name, likes , years_of_experience,image,recipes_count } = chef
    return (
      <Card style={{ width: '18rem' }} className='col-4 m-2 p-2 bg-transparent border border-white'>
      <LazyLoad height={192}>
      <Card.Img variant="top" src={image} className='rounded' />
      </LazyLoad>
      <Card.Body>
        <Card.Title className='text-warning'>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush ">
        <ListGroup.Item className='bg-transparent text-white'>{years_of_experience} of experience</ListGroup.Item>
        <ListGroup.Item className='bg-transparent text-white'>{recipes_count} recipies available</ListGroup.Item>
        <ListGroup.Item className='bg-transparent text-white'>{likes} likes</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`recipies/${id}`} className='w-full'><Button style={{width:'100%'}} className='btn btn-success fw-semibold'>View recipies</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default ChefCard;