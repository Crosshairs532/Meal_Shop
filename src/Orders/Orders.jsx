/* eslint-disable no-unused-vars */
import React from 'react';
import './Order.css'
const Orders = ({ arr }) => {
    console.log(arr, "oooororor")
    return (
        <div className='grid lg:grid-cols-3 mt-10 grid-cols-1 md:grid-cols-2 place-items-center'>
            {
                arr.map((order, idx) =>

                    < div key={idx} className=' immm w-[300px] shadow-xl rounded-lg h-auto bg-white items-center p-5 gap-5'>
                        <img className='w-full rounded-xl' src={order.strMealThumb} alt="" />
                        < h3 className=' text-slate-800 font-extrabold mt-4' > {order.strMeal}</h3>
                        <button className=' p-3 rounded-lg text-white bg-red-400'>Remove</button>

                    </div >
                )
            }
        </div >
    );
};

export default Orders;