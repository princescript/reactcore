import React, { useState } from 'react'

const App = () => {
    const [username, setusername] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(username);
        setusername('')
    }

    return (
        <>
            <form onSubmit={(e) => {
                submitHandler(e);
            }}>
                <input onChange={(e) => {
                    setusername(e.target.value);
                }}
                    value={username}
                    type="text" placeholder="Enter your name:"
                    className="outline-none border rounded block text-white bg-blue-600 border-black m-5" />
                <input className='bg-blue-600 rounded  text-xs m-5 p-1 text-white' type="submit" value="Click Me" />
            </form>
        </>
    )
}

export default App
