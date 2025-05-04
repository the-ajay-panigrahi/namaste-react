import { useState } from "react"

const User = ({ name, location, contactInfo }) => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(23)
    return <div>
        <h1>Count: {count}</h1>
        <h1>Count1: {count1}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contactInfo}</h4>
    </div>
}

export default User