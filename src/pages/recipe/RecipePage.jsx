/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const RecipePage = () => {
    const chefInfo = useLoaderData();
    const [recipe, setRecipe] = useState([]);
    const {id, name, years_of_experience, likes , description , image, recipes_count } = chefInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/recipies/${id}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])
 


    return (
        <div>
            {/* the banner section */}
            <div className='d-flex justify-content-center align-items-center bg-success bg-gradient p-4'>
                <div>
              <div style={{ width: '380px', height: '380px' }} className='d-flex  justify-content-center align-items-center border border-3 border-light rounded-circle'>
                <Image style={{ width: '350px', height: '350px' }} src={image} roundedCircle/>
              </div>
                </div>
                <div className='p-4'>
                 <h1 className='text-white'>{name}</h1>
                 <p>{description}</p>
                 <p>{years_of_experience} of experience</p>
                 <p>{likes} likes</p>
                 <p>{recipes_count} recipies in his bucket</p>
                </div>
            </div>

            {/* the recipies section */}
            <div className='mt-5'>
                <h3 className='text-center text-success'>Recepies</h3>

            {
                recipe.map(singleRecipe => <RecipeCard key={singleRecipe._id} recipe={singleRecipe} ></RecipeCard> )
            }
            </div>
        </div>
    );
};

export default RecipePage;