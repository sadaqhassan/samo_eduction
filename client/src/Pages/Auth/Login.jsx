import React, { useState } from 'react'

const Login = ({role,title}) => {
    const [inputData,setInputData] = useState({});

    const handleChange = async (e) => {
        setInputData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
return (
    <div>
        <div className='flex flex-col md:flex-row'>
        {/* side */}
        <div className='customBack h-screen flex flex-col justify-center items-center text-center w-full md:w-1/2'>
            <div className='flex flex-col space-y-3 text-white'>
                <h1 className='text-2xl md:text-4xl font-medium'>
                    School Management System
                </h1>
                <p className='text-sm font-light text-start text-gray-300'>
                    Streamline your workforce operations, track<br/>
                    attendance, manage payroll, and empower your team<br/>
                    securely.
                </p>
            </div>
        </div>
        {/* login */}
        <div className='h-screen flex flex-col justify-center items-center text-center w-full md:w-1/2'>
            <div className='flex flex-col space-y-2 border rounded p-10'>
                <p className='mt-4 text-start text-md text-gray-900 text-2xl font-medium p-2 rounded mb-3'>Login</p>
                <input  className='bg-secondary/40 p-2 my-5' type="email" name='email' placeholder='Email'   />
                <input  className='bg-secondary/40 p-2' onChange={handleChange} type="password"  name='password' placeholder='Password'/>
                <input className='bg-primary rounded text-white p-2' onChange={handleChange} type="button"  value="Login" />
                <p className='mt-4 text-start text-xs text-gray-700'> &#169; { new Date().getFullYear() } Developed by sadak_Dev</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login