import React from 'react';
import { FaBus } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <>
            <div className='py-14 md:py-28 bg-gray-50 '>
                <div className='container mx-auto'>
                    {/* heading section */}
                    <h1 data-aos="fade"
                     className='pb-16 tracking-wider text-2xl font-semibold
            text-dark text-center'>
                        {" "}
                        Why Choose Us</h1>
                    {/* card section */}
                    <div data-aos="fade">
                        <div className='grid grid-cols-2 md:grid-cols-4
                    gap-14 sm:gap-4'>
                            {/* 1st card */}
                            <div className='text-center flex justify-center
                            items-center flex-col gap-1 px-2'>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, itaque.
                                </p>
                                <p className='text-5xl rotate-90 text-blue-400 
                                text-center translate-x-5'>....</p>
                                <FaBus className='text-5xl text-blue-400'/>
                            </div>
                            {/* 2nd card */}
                            <div className='text-center flex justify-center
                            items-center flex-col gap-1 px-3'>
                                <FaBus className='text-5xl  text-pink-500 '/>
                                <p className='text-5xl rotate-90 text-pink-500 
                                text-center translate-x-5'>....</p>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, itaque.
                                </p>
                                
                                
                            </div>
                            {/* 1st card */}
                            <div className='text-center flex justify-center
                            items-center flex-col gap-1 px-2'>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, itaque.
                                </p>
                                <p className='text-5xl rotate-90 text-blue-400 
                                text-center translate-x-5'>....</p>
                                <FaBus className='text-5xl text-blue-400'/>
                            </div>
                            {/* 1st card */}
                            <div className='text-center flex justify-center
                            items-center flex-col gap-1 px-3'>
                                <FaBus className='text-5xl  text-pink-500 '/>
                                <p className='text-5xl rotate-90 text-pink-500 
                                text-center translate-x-5'>....</p>
                                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, itaque.
                                </p>
                                
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose