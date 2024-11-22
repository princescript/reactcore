import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {
    const data = useContext(DataContext)
    return (
        <div>Section :{data}</div>
    )
}

export default Section