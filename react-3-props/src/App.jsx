import React from 'react'
import Card from './components/Card'
import DrillEx1 from './components/DrillEx1'
const App = () => {
    const users = [
        {
            "name": "Alice Johnson",
            "city": "New York",
            "profession": "Web Developer",
            "profilephoto": "https://randomuser.me/api/portraits/women/21.jpg",
            "age": 28
        },
        {
            "name": "Michael Smith",
            "city": "San Francisco",
            "profession": "Data Scientist",
            "profilephoto": "https://randomuser.me/api/portraits/men/32.jpg",
            "age": 34
        },
        {
            "name": "Sophie Turner",
            "city": "Chicago",
            "profession": "Graphic Designer",
            "profilephoto": "https://randomuser.me/api/portraits/women/45.jpg",
            "age": 26
        },
        {
            "name": "James Brown",
            "city": "Los Angeles",
            "profession": "Software Engineer",
            "profilephoto": "https://randomuser.me/api/portraits/men/67.jpg",
            "age": 30
        },
        {
            "name": "Emily Davis",
            "city": "Seattle",
            "profession": "UX/UI Designer",
            "profilephoto": "https://randomuser.me/api/portraits/women/33.jpg",
            "age": 29
        }
    ]

    return (
        <>
            <div className='m-2 '>
                {users.map((elem, index) => {
                    return <Card key={index} name={elem.name} city={elem.city} age={elem.age} profession={elem.profession} imgLink={elem.profilephoto} />
                })}
            </div>
            <DrillEx1 username="Krish" />
        </>
    )
}

export default App