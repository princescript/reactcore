import React from 'react'

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-screen overflow-hidden"
            style={{
                backgroundImage: "url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg)"
            }}>
            <div className="h-screen flex flex-col justify-center items-center">
                <h3 className="text-center text-7xl font-bold">Hello,</h3>
                <h1 className="text-center text-9xl font-bold">This is Our India</h1>
            </div>

        </div >
    )
}

export default Hero