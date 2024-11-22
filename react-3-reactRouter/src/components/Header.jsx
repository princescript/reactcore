import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <div className='p-2 bg-emerald-600 h-20 w-full flex justify-between items-center font-semibold'>
                <h2 className='text-3xl'>Prince</h2>
                <input type='text' className='text-black'></input>
                <div className='flex gap-10 underline text-2xl'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/product'>Product</Link>
                </div>


            </div>

        </>

    )
}

export default Header