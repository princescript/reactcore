import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
    const data = useContext(DataContext)
    return (
        <div>Footer :{data}</div>
    )
}

export default Footer