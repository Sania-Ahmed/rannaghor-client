/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
    const [favourite, setFavourite] = useState(false)
    const handleFavourite = () => {
        toast('Added to favourite recipies ^-^',
            {
                style: {
                    backgroundColor: '#198754',
                    color: 'white',
                    padding: '8px',
                    fontWeight: 'bold'
                }
            })
        setFavourite(true);
    }
    return (
        <Card className='mb-3'>
            <Card.Body>
                <Card.Title className='text-success fs-3 fw-bold'>{recipe.name}</Card.Title>
                <h5>Ingredients: <small className='text-secondary'>
                    {(recipe.ingredients).map((i, index) => <li key={index}>{i}</li>)}
                </small> </h5>
                <h5>How to cook?</h5>
                <p><small className='fw-bold text-secondary fs-5'>{recipe.cooking_method}</small></p>
                <p className='pb-0 mb-0'>{recipe.rating}</p>
                <Rating className='d-block mb-2'
                    placeholderRating={recipe.rating}
                    emptySymbol={<FaStar className='text-secondary'></FaStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar className='text-warning'></FaStar>}
                    readonly
                />

                <Button onClick={handleFavourite} disabled={favourite} variant="success">Add to favourite</Button>
                <Toaster />
            </Card.Body>
        </Card>

    );
};

export default RecipeCard;