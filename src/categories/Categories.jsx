/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom';
import Categorie from '../categorie/categorie';
import { motion } from 'framer-motion'
const Categories = ({ handleCart }) => {
    const { categories } = useLoaderData();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.87, ease: 'easeOut' }} >

            <div className='grid md:grid-cols-2 gap- grid-cols-1 lg:grid-cols-4 place-items-center'>
                {
                    categories.map(categorie => <Categorie handleCart={handleCart} key={categorie.idCategory} categorie={categorie}></Categorie>)
                }
            </div>
        </motion.div>
    );
};

export default Categories;
Categories.propTypes = {
    handleCart: PropTypes.func
}