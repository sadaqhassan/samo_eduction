import React from "react";
import { CircleCheck, CircleCheckIcon  } from 'lucide-react'
import Nav from "../Components/Nav";

const About = () => {
        const features = [
        {feature:"Students Management"},
        {feature:"Teachers Management"},
        {feature:"Finance Management"},
        {feature:"Attendence Management"}
    ]
  return (
    <>
    <div className="mx-50">
        <Nav/>
        </div>  
<div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row mt-20 gap-5'>
            <img className='w-66 h-66 rounded-2xl' src="./CEOO.jpeg" alt="" />
            <div>
            <p className='text-xl font-medium md:text-3xl'>Samo Education</p>
            <p className='text-md font-medium mt-5 mb-2'>Features:</p>
            <div className='flex flex-col space-y-4'>
            {
                features.map((feature)=>(
                    <div className='flex gap-4 items-center'>
                    <span className='text-green-400'><CircleCheckIcon size={18}/> </span>
                    <p className='text-primary'>{feature.feature}</p>
                </div>
                ))
            }
            <button className='bg-primary text-white mt-4 rounded text-black px-2 py-1 roundd'>Get_Started</button>
            </div>

        </div>
        </div>
    </div>
    </>
  );
};

export default About;