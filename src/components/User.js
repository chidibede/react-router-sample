import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function User() {
    useEffect(() => {
        const fetchItems = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await result.json()
            setUsers(users)
        }
        fetchItems()
    }, [])
    const [users, setUsers] = useState([])


    return (
        <div>
            {users.map(user => {
                return <h4 key={user.id}>
                    <Link to={`/user/${user.id}`}>
                        {user.name}
                    </Link>
                </h4>
            })}
        </div>

    )
}

export default User;