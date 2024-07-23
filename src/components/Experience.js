import React from 'react'
import javascript from "./images/javascript.png"
import py from "./images/py.png"
import pytorch from "./images/pytorch.png"
import tensorflow from "./images/tensorflow.png"
import cpp from "./images/cpp.png"
import html from "./images/html.png"
import sql from "./images/sql.png"
const Experience = () => {
    const experiences = [
        
        {
         id:1,
         src:cpp,
         title:'C++',
         style:'shadow-blue-600'
      },
        
         {
            id:2,
            src:py,
            title:'Python',
            style:'shadow-blue-500'
         },
         
         // {
         //    id:3,
         //    src:sql,
         //    title:'MySQL',
         //    style:'shadow-gray-600'
         // },
         {
            id:4,
            src:pytorch,
            title:'PyTorch',
            style:'shadow-yellow-300'
         },
         
         {
            id:5,
            src:tensorflow,
            title:'TensorFlow',
            style:'shadow-orange-300'
         },
         {
            id:6,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
         },
    
         {
            id:7,
            src:html,
            title:'HTML',
            style:'shadow-orange-300'
         }
         
    ]
  return (
    <div id="techstack" name="techstack" className='bg-gradient-to-b from-gray-800 to-black
    w-full h-full'>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
       w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
               Tech Stack
            </p>
            <p className='py-6'></p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {experiences.map(({id,src,title,style}) => (
              <div key ={id} className={`flex justify-center items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img className='w-auto mx-auto h-30' src={src} alt=""/>
              
            </div>
            ))}
          
        </div>
        </div> 
    </div>
  )
}

export default Experience
