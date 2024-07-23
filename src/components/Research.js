import React from 'react'
import worldquant from "./images/worldquant.jpeg"
const Research = () => {
  return (
    <div id="research" name="research" className='w-full h-full bg-gradient-to-b from-gray-800 to-gray-800
    text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                 Experience 
                </p>
            </div>
            <p className='text-xl mt-15'>
              <div className='w-2/3 md:w-1/2 h-full mx-auto text-center'>
               <img className="w-100 h-100 rounded-full  m-auto" src={worldquant} alt="World Quant Logo"/><br/>
               {/* <b className='text-center text-gray-400 '>Nexus Info</b><br/><br/> */}
               <b className='text-center text-3xl'>Consultant at World Quant</b>
               
              </div>
              <br/>
            
            I participated in World Quant Hackathon and crossed 10,000 points in the alphathon competition. I reviewed existing alphas in production and tried to incorporate sentimental data analysis to make them more robust. I improved the existing price, volume, equity alphas by reducing their turnover. I experimented alphas on different regions such as China, with varying hyper-parameters.
            </p>
            
        </div>
    </div>
  )
}

export default Research
