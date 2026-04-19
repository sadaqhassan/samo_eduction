import { MenuIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div>
        {/* desktop */}
        <div className='md:flex hidden justify-between px-4 rounded bg-primary text-white items-center py-4 mt-5'>
            <p>Logo</p>
            <div className='flex space-x-4'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
            <button onClick={()=>navigate('/login')} className='bg-secondary rounded text-black px-2 py-1 '>Get_Started</button>
        </div>

         {/* mobile */}
        <div className='md:hidden flex justify-between px-4 bg-primary text-white items-center py-4 '>
            <p>Logo</p>
            <button onClick={()=>setMenuOpen(!menuOpen)}><MenuIcon/></button>
        </div>

        {
            menuOpen &&
            <>
            <div className=' flex flex-col   bg-secondary p-5 md:hidden space-y-4'>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Contact</Link>
                <button  onClick={()=>navigate('/login')} className='bg-primary text-white rounded  px-2 py-1 roundd'>Get_Started</button>

            </div>
            </>
        }
    </div>
  )
}

export default Nav