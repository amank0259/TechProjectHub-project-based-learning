import React, { useState } from 'react';

const Navbar = () => {


    return (
        <nav className='bg-slate-800 h-20 items-center flex justify-between text-white px-10 md:px-20 lg:px-40'>
            <div className="left">
                <a href="#home">
                    <img src="/logo.png" alt="logo" width={122} />
                </a>
            </div>
            <div className="right">
                <ul className='flex items-center justify-between gap-10'>
                    <li className='relative'><a href="">Web development</a>
                        <ul onMouseEnter={() => showdropdown} className='absolute min-w-[200px] top-12 bg-slate-700 rounded flex flex-col'>
                            <li className='border-b border-black px-4 py-2'><a href="">FrontEnd Development</a></li>
                            <li className='border-b border-black px-4 py-2'><a href="">Backend Development</a></li>
                            <li className=' px-4 py-2'><a href="">FullStack Development</a></li>
                        </ul>
                    </li>
                    <li><a href="">Mobile App Development</a></li>
                    <li><a href="">AI/ML Project</a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar