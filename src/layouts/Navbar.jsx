import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarLink from '../components/ui/NavbarLink';

const Navbar = () => {  
    const location = useLocation();

    useEffect(() => {
        // This logs the current path whenever the location changes
        const path = location.pathname.replace('/', ''); // Remove the leading slash
        console.log("Current path:", path); // Debugging
    }, [location]);

    return (                      
        <nav className='flex items-center w-[94%] max-w-full h-[50px] bg-[#ff00d2] fixed top-16 left-[3.5rem] py-7 z-50 
            rounded-full border-2  border-zinc-900'> 
            <div className="flex w-full justify-between items-center">
                <div className="flex w-[14%] items-center bg-zinc-900  pl-3 pr-5 py-2 ml-1 rounded-full">
                    <div className="flex w-2 h-4 bg-zinc-300 mx-3"></div>
                    <p className='text-zinc-200 font-ibm text-[1.5rem] font-[500] uppercase tracking-widest'>
                        <Link to="/">trish ramos</Link>
                    </p>
                </div>

                <div className="relative w-[45%]">
                    <div className='flex w-full justify-between center items-center'>           
                        <ul className='w-full flex justify-between items-center bg-transparent pr-6'>
                            {['about', 'projects', 'resume', 'contact'].map((item, index) => (
                                <li className='text-zinc-200 font-ibm text-[2.3rem] font-[400] 
                                        px-2 uppercase tracking-widest' key={index}>
                                    <NavbarLink to={`/${item}`}>
                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                    </NavbarLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>  
            </div>
        </nav>      
    );
}

export default Navbar;
