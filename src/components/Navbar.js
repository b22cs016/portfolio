import React, { useState } from 'react'
import {Link} from "react-scroll"
import {FaBars,FaTimes} from 'react-icons/fa';
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const changeState = () =>{
        setNav(!nav);
    }
    
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'techstack'
        },
        {
            id:5,
            link:'contact'
        },
        {
            id:6,
            link:'achievements'
        }
    ]
  return (
    <div className='px-4 bg-black flex justify-between items-center w-full h-20 text-white sticky'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>
                Siddhesh Ayyathan
            </h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(({id,link}) =>(
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link 
                      to={link} 
                      spy={true}
                      smooth={true} 
                      duration={300}>
                        {link}
                        </Link></li>
          
                )
                )
            }
           
          
        </ul>
        <div onClick={changeState} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/> :<FaBars size={30}/> }
        </div>

        {nav && 
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b
        from-black to-gray-800 text-gray-500'>
            {
                links.map(({id,link}) =>(
                    <Link 
                      to={link} 
                      spy={true}
                      smooth={true} 
                      duration={300}>
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl' onClick={changeState}>
                      
                      {link}
                     
                        </li>
                        </Link>  
          
                )
                )
            }
           
        
        </ul>
        }
    </div>
  )
}

export default Navbar
