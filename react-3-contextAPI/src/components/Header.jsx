import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
    const username = useContext(DataContext)
    return (
        <div>Header :{username}</div>
    )
}

export default Header