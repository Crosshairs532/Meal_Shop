/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Categorie = ({ categorie }) => {

    const { strCategory, strCategoryThumb, strCategoryDescription } = categorie;
    return (
        <div className='flex flex-col p-4 w-[300px] h-[400px] truncate shadow-lg rounded-lg'>
            <img className='basis-1/2' src={strCategoryThumb} alt="" />
            <h1 className='text-2xl font-semibold'>{strCategory}</h1>
            <p className='basis-1/2'><small>{strCategoryDescription}</small></p>
            <Link to={`/categories/${strCategory}`}> <button className=' p-4 rounded-xl font-bold text-lg bg-gradient-to-r  from-teal-800 to-teal-600' >Show Items</button></Link>
        </div >

    );
};

export default Categorie;
Categorie.propTypes = {
    categorie: PropTypes.object
}