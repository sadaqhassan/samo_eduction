import React from 'react'
import { CircleCheck, CircleCheckIcon  } from 'lucide-react'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row mt-20 gap-5'>
            <img className='w-66 h-66 rounded-2xl' src="./CEOO.jpeg" alt="" />
            <div>
            <p className='text-xl font-medium md:text-3xl'>Samo Education</p>
            <div className='flex flex-col space-y-4 mt-4'>
                <div className='flex gap-4 items-center'>
                    <span className='text-green-400'><CircleCheckIcon size={18}/> </span>
                    Students Management
                </div>

                 <div className='flex gap-4 items-center'>
                    <span className='text-green-400'><CircleCheckIcon size={18}/> </span>
                    Teachers Management
                </div>

                 <div className='flex gap-4 items-center'>
                    <span className='text-green-400'><CircleCheckIcon size={18}/> </span>
                    Attendence Management
                </div>

                <div className='flex gap-4 items-center '>
                    <span className='text-green-400'><CircleCheckIcon size={18}/> </span>
                    Finance Management
                </div>
            </div>
            <button className='bg-primary text-white mt-4 rounded text-black px-2 py-1 roundd'>Get_Started</button>

            </div>
        </div>
    </div>
  )
}

export default Landing