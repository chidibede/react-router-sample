import React, { useEffect, useState } from 'react';

function UserDetail({ match }) {
    const id = match.params.id
    useEffect(() => {
        const fetchItem = async () => {
            const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const user = await result.json()
            setUser(user)
        }
        fetchItem()
    }, [])
    const [user, setUser] = useState({})


    return (
        <div>
            <p>{user.name}</p>
        </div>

    )
}

export default UserDetail;