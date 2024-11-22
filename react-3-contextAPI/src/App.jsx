import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {
    const data = useContext(DataContext)
    console.log(data)
    return (
        <div>
            <h1>This is App.Js</h1>
            <Header />
            <Section />
            <Footer />

        </div>
    )
}

export default App