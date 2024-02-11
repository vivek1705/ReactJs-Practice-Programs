import React from 'react';

function Lists2() {
    const details = [
        { name: 'ABC', age: '22', location: 'India' },
        { name: 'XYZ', age: '23', location: 'USA' }
    ];

    const userdetails = details.map((user, index) => (
        <li key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
        </li>
    ));

    return (
        <ul>
            {userdetails}
        </ul>
    );
}

export default Lists2;
