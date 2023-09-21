/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom';
import Categorie from '../categorie/categorie';
const Categories = ({ handleCart }) => {
    const { categories } = useLoaderData();

    return (
        <div className='grid md:grid-cols-2 gap-5 grid-cols-1 lg:grid-cols-4 place-items-center'>
            {
                categories.map(categorie => <Categorie handleCart={handleCart} key={categorie.idCategory} categorie={categorie}></Categorie>)
            }
        </div>
    );
};

export default Categories;
Categories.propTypes = {
    handleCart: PropTypes.func
}