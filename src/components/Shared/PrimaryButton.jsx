import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
    return (
        <>
            <div className='flex items-center group'>
                <button className='bg-pink-800 h-[40px]
                text-white px-3 py-2'>Choose Your Meal Plan</button>
                <FaArrowRight className='inline-block group-hover:!translate-x-2 duration-200 
                p-2 text-base h-[40px] w-[40px] bg-pink-950 text-white' />
            </div>
        </>
    )
}

export default PrimaryButton