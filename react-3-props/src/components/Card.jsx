import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-black text-white inline-flex flex-col items-center justify-center h-80 w-72 m-1'>
            <img src={props.imgLink} alt='#'
                className='h-36 w-36 rounded-full' />
            <h1 className='text-2xl mt-1'>{props.name}</h1>
            <h3 className='text-1xl mt-1'>Age: {props.age}</h3>
            <h3 className='text-1x1 mt-1'>City:{props.city}</h3>
            <h3 className='text-1xl mt-1'>{props.profession}</h3>
        </div>
    )
}

export default Card