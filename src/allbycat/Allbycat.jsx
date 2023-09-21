/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom';
const Allbycat = ({ item, Cname }) => {
    const { strMeal, strMealThumb, idMeal } = item


    return (
        <div className=' flex flex-col p-5 w-[300px] shadow-xl rounded-3xl'>
            <div className='basis-1/2'>
                <img className=' flex-1  w-full rounded-3xl object-fill' src={strMealThumb} alt="" />
            </div>
            <div className='basis-1/2'>
                <h1 className=' line-clamp-1 mt-5 text-2xl mb-1 font-bold'>{strMeal}</h1>
                <p className=''><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aliquid perferendis optio nam minus quaerat quidem at asperiores architecto voluptatibus!</small></p>
                <Link to={`/categories/${Cname.Cname}/${idMeal}`}><button className=' mx-auto bg-gradient-to-r from-cyan-800 to-teal-700 p-3 mt-4 rounded-lg text-neutral-50 font-bold'>See Details</button></Link>
            </div>

        </div >
    );
};

export default Allbycat;
Allbycat.propTypes = {
    handleCart: PropTypes.func,
    item: PropTypes.object,
    Cname: PropTypes.string
}