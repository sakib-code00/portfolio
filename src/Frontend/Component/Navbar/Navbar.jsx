import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-700 w-11/12 max-h-23 flex items-center justify-between border rounded-2xl mt-5'>
        <div className='p-3'>
            <h1 className='font-bold text-3xl text-white'>Coreik</h1>
        </div>
        <div>
            <ul className='flex items-center justify-between gap-5 text-gray-300'>
                <li>Home</li>
                <li>History</li>
                <li>Portfolio</li>
                <li>About Me</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <button className='text-white border rounded-lg bg-orange-500 py-2 px-3 mr-4'>Hire Me</button>
        </div>
    </div>
  )
}

export default Navbar