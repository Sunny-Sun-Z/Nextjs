import { link } from 'fs';
import Link from 'next/link'
import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}
const UsersPage = async () => {
    const users: User[] = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        //{ next: { revalidate: 10 } } 
        { cache: 'no-store' }
    )
        .then(response => response.json())
    // .then(json => console.log(json));
    //const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //const users : User[] = await res.json();


    return (
        <div>
            <h1>UsersPage</h1>
            {/* <Link href="/users/new">New User Page</Link> */}            
            <p>{new Date().toLocaleTimeString()}</p>
            {/* <ul>
                
            </ul> */}
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{users.map(user =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}</tbody>
            </table>
        </div>

    )
}

export default UsersPage