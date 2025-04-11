import React from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 1,
        name: "About",
        link: "/#",
    },
    {
        id: 1,
        name: "Contact",
        link: "/#",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetables",
        link: "/#"
    },
    {
        id: 2,
        name: "Fruits",
        link: "/#"
    },
    {
        id: 3,
        name: "Grains",
        link: "/#"
    },
];

const Navbar = ({ HandlePopup}) => {
    return (
        <>
            <div className='bg-white shadow-md'>
                <div data-aos="fade" className='container flex justify-between py-4 sm:py-3'>
                    {/* {logo section} */}
                    <div className='font-bold text-3xl'>Logo</div>
                    {/* {Navlinks section} */}
                    <div>
                        <ul className='flex items-center gap-10' >
                            {
                                NavLinks.map(({ id, name, link }) => (
                                    <li key={id}>

                                        <a href={link} className=' hidden sm:inline-block hover:text-pink-500
                                text-xl font-semibold'>{name}</a>
                                    </li>
                                ))
                            }
                            {/* simple dropdown and links */}
                            <li className='hidden sm:block cursor-pointer group '>
                                <a href="/#" className='inline-block hover:text-pink-500
                        text-xl font-semibold'>
                                    <div className='flex items-center gap-[2px] py-2'>
                                        Dropdown
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180
                                duration-300' />
                                        </span>
                                    </div>
                                </a>
                                {/* Dropdown section */}
                                <div className='absolute z-[9999] hidden group-hover:block
                        w-[200px] bg-white text-black shadow-md p-2'>
                                    <ul>
                                        {
                                            DropdownLinks.map(({ id, name, link }) => (
                                                <li key={id}>
                                                    <a href={link} className='text-xl inline-block w-full rounded-md p-2
                                            hover:bg-pink-200'>
                                                        {name}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li> 
                            {/* {Login button section} */}
                            <li>
                                <button onClick={HandlePopup} className='flex justify-center items-center gap-2
                              bg-blue-400 text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                                    <FaUser />
                                    My Account
                                </button>
                            </li> 

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar