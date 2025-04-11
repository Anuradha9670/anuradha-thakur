import React from 'react';
import Apple from "../../assets/apple1.jpg";
import Kiwi from "../../assets/kiwi1.jpg";
import lemon from "../../assets/lemon1.jpg";
import leaf from "../../assets/leaf.jpg";
import tamator from "../../assets/tamator.webp";
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <>
            <div className='container py-24 relative  mx-auto'>
                <div className='relative z-20'>
                    <h1
                    data-aos="fade-up"
                    data-aos-delay="300" 
                    className='py-8 tracking-wider text-2xl
            font-semibold text-dark text-center'>
                        Taste the Healthy Difference

                    </h1>
                    {/* content section */}
                    <div className='space-y-10'>
                        <div  data-aos="fade-up"
                    data-aos-delay="500"  className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                            <div>
                                <p>
                                    {" "}
                                    We Know that <span className='text-pink-600'> time</span> is the
                                    greatest value in the modern world. Our Healthy meal plan
                                    delivery services Good Food in Miami is the answer for those
                                    who want to eat healthily, saving time for buying food and
                                    preparing delicious, healthy meals.
                                </p>
                            </div>
                            <div></div>

                        </div>
                        <div data-aos="fade-up"
                    data-aos-delay="300"  className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                            <div></div>
                            <div>
                                <p>
                                    {" "}
                                    We Know that <span className='text-pink-600'> time</span> is the
                                    greatest value in the modern world. Our Healthy meal plan
                                    delivery services Good Food in Miami is the answer for those
                                    who want to eat healthily, saving time for buying food and
                                    preparing delicious, healthy meals.
                                </p>
                            </div>

                        </div>
                    </div>
                    {/* button section */}
                    <div  data-aos="fade-up"
                    data-aos-delay="500" data-aos-offset='0'
                     className='flex justify-center mt-10 sm:mt-14'>
                        <PrimaryButton />
                    </div>
                </div>
                {/* bg fruits pngs */}
                <div data-aos="fade-right" className='absolute top-6 left-16 sm:button-0 sm:left-0
                 opacity-50 sm:opacity-100'>
                    <img data-aos="fade-right" src={leaf} alt="" className='max-w-[160px]' />
                </div>
                <div data-aos="fade-right" className='absolute bottom-16 left-16
                  sm:bottom-0 sm:left-0 opcity-50 sm:opacity-100'>
                    <img src={tamator} alt="" className='max-w-[280px]' />
                </div>
                <div data-aos="fade-left" className='absolute top-10 right-16 sm:right-20
                opacity-50 sm:opacity-100'>
                    <img src={lemon} alt="" className='max-w-[200px]' />
                </div>
                <div data-aos="fade-left" className='hidden sm:block absolute bottom-0 right-0'>
                    <img src={Apple} alt="" className='max-w-[200px]' />
                </div>
                <div data-aos="fade" className='absolute top-1/2 translate-y-1/5 left-1/4 
                translate-x-1/2 opacity-50 sm:opacity-100'>
                    <img src={Kiwi} alt="" className='max-w-[180px]' />
                </div>
            </div>
        </>
    )
}

export default Banner;