/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, useNavigation, Link, useNavigate, Navigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { GiTireIronCross } from 'react-icons/gi'
import './Header.css'


const Header = ({ count, arr }) => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(true)
    console.log(count, arr.length)
    const toggle = () => {
        setOpen(!open)

    }
    const navigate = useNavigate();
    const Nav = () => {
        navigate('/')
    }
    return (
        <div className=' container mx-auto p-6 flex  gap-7 shadow-lg rounded-full  justify-between items-center'>
            <button>   <h1 onClick={Nav} className='text-4xl m-0 '>Fork & Knife</h1></button>
            <h1 onClick={toggle} className='text-4xl transition-all lg:hidden'>{open ? <HiOutlineMenuAlt1></HiOutlineMenuAlt1> : <GiTireIronCross></GiTireIronCross>}</h1>
            <nav className={` nav static ${open ? 'hidden' : 'visible flex flex-col absolute right-[50px] bg-teal-200 w-[100px] rounded-3xl top-[100px]'} lg:flex  gap-7  items-center`}>
                <NavLink className=' text-sm text-center' to='/'>Home</NavLink>
                <NavLink className=' text-sm text-center' to='/about'>About Us</NavLink>
                <NavLink className=' text-sm text-center' to='/contact'>Contact</NavLink>
                <NavLink className=' text-sm text-center' to='/categories'>Categories</NavLink>
                <h1 className='text-2xl text-center'><AiFillGithub /></h1>

                <div className="">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <Link to='/order'> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
                            <span className="badge badge-sm indicator-item">{count}</span>
                        </div>
                    </label>

                </div>
            </nav>

        </div>
    );
};

export default Header;