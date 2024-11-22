import React from 'react'
import DrillEx2 from './DrillEx2'

const DrillEx1 = (props) => {
    return (
        <>
            <div className='text-3xl'>Example-1 of Props Drill :{props.username}</div>
            <DrillEx2 data={props.username} />
        </>

    )
}

export default DrillEx1