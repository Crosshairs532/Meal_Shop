/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import './Root.css'
const Root = ({ count, arr }) => {

    const navigate = useNavigation()
    return (
        <div className=''>
            <Header count={count} arr={arr} ></Header>
            <div className=' flex flex-col items-center root-container justify-center mx-auto min-h-screen'>
                {
                    navigate.state == 'loading' ? <div className=''><HashLoader color="#36d7b7" /></div> : <div className=' min-h-screen mt-10'><Outlet></Outlet></div>
                }
            </div>

        </div >
    );
};

export default Root;
