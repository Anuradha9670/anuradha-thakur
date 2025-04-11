import React from 'react';
import { ImOpt } from 'react-icons/im';
import BgPolygon from "../../assets/poly1.jpg"
import { FaUser } from 'react-icons/fa';

const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
};
const About = ({ HandlePopup}) => {
    return (
        <>
            <div style={bgStyle} className='py-4'>
                <div className='container min-h-[400px] relative z-10 mx-auto'>
                    <h1 data-aos="fade"
                 className='pt-10 tracking-wider text-4xl
                      font-semibold text-white text-center'>
                        About Us
                    </h1>
                    {/* card section */}
                    <div data-aos="fade"
                    data-aos-delay="300" className='bg-white/80 p-10 my-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quo excepturi libero minima, asperiores dolore fugit voluptates! Modi blanditiis provident unde porro ab animi voluptate sunt voluptas magni repellat ducimus consequuntur quibusdam harum, adipisci fuga deleniti! Perferendis nam iure aperiam enim, odit accusamus nesciunt alias ipsum, suscipit doloribus saepe quibusdam!
                        <div className='pt-10 flex justify-center'>
                            <button onClick={HandlePopup} className='flex justify-center items-center gap-2
                                     bg-blue-400 text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                                <FaUser />
                                My Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About