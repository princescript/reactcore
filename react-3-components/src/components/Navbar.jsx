import React from 'react'
import Navpart2 from './Navpart2'

const Navbar = () => {
    return (
        <>
            <nav className='flex  justify-between items-center py-5 px-10 bg-blue-600' >
                <h2 className='text-2xl'>travelX</h2>
                <Navpart2 />
            </nav >

        </>
    )
}

export default Navbar