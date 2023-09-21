/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
const Detail = ({ handleCart }) => {
    const { meals } = useLoaderData();
    console.log(meals, "meeee")
    const navigate = useNavigate()
    const handlenav = () => {
        navigate(-1)
    }
    console.log(meals, "arr")
    const { strMeal, strCategory, strMealThumb, strArea, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = meals[0]
    return (
        <div className=' container mx-auto '>
            <h1 className='text-5xl mb-10 mt-10 text-center'>Category: {strCategory}</h1>
            <div className='flex items-center justify-center flex-col gap-6 lg:flex-row'>
                <div className='image w-1/2 lg:w-1/3'>
                    <img className='w-full object-fill rounded-md' src={strMealThumb} alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className=' lg:text-4xl text-3xl font-extrabold'>{strMeal}</h1>
                    <h1 className='text-xl font-bold text-justify'>{strArea}</h1>
                    <p className='overflow-scroll h-[200px]'><small>{strInstructions}</small></p>
                    <div className='flex justify-between mt-4'>
                        <button onClick={handlenav} className=' bg-violet-400 p-4 text-stone-50 font-extrabold rounded-md'>Back</button>
                        <button onClick={() => handleCart(meals[0])} className=' bg-green-500 text-emerald-950 font-extrabold p-4 rounded-md'>Order</button>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Detail;
Detail.propTypes = {
    handleCart: PropTypes.func,
}