import React from 'react';
import sd from './images/profile.jpeg'; 
import {Link} from "react-scroll";
import Social from "./Social.js"

import Typewriter from "typewriter-effect";


const Home = () => {
  const styles = {
    backgroundColor : "inherit"
}
  return (
    <div id="home" name="home" className="h-full w-full clear-both box-border bg-gradient-to-b from-black via-black to-gray-800">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row box-border">

        <div className='flex flex-col justify-center h-full w-full md:w-1/2'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            <Typewriter
             options={{
            autoStart:true,
            loop:true,
            delay:300,
            strings:[
              "I'm a Coder",
              "I'm a Developer",
              "I'm a ML enthusiast.",
              "I'm a explorer"
            ]
          }}
             
           ></Typewriter>
               </h2>
            <p className='text-gray-500 py-4 max-w-md'>
            I am an aspiring developer dedicated to pushing the boundaries of innovation. Through this portfolio, I invite you to explore my journey, projects, and the fusion of creativity and code that drives my work.
            </p>
            <div>
            <button className='text-white w-fit px-6 py-3 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500
                to-blue-500 cursor-pointer mb-2'>
                   <Link 
                    to={"portfolio"}
                    smooth={true}
                    duration={500}
                    >
                    Portfolio 
                    </Link>
                    
                </button>
            </div>
        </div>

        <div className='w-2/3 md:w-1/2 h-full'>
            <img className="rounded-2xl mx-auto  md:mr-1 w-full md:w-2/3" src={sd} alt="This is Siddhesh"/>
            <Social style = {styles}/>
        </div>

      </div>
    </div>
    
  )
}

export default Home
