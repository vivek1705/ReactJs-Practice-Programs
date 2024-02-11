import React from 'react';

function Lists3() {
    const books = [
        { id: 1, title: 'Be Powerful', author: 'Tata', year: 2000 },
        { id: 2, title: 'How to Live Rich', author: 'Ambani', year: 2001},
        { id: 3, title: 'Allu se sona nikale', author: 'Pappu INC', year: 2023 },
        { id: 4, title: 'BJP ka Dost', author: 'Adani', year: 2024 }
    ];

    const bookList = books.map((book) => (
        <div key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Publication Year: {book.year}</p>
            <hr />
        </div>
    ));

    return (
        <div className='List3'>
            <h1>List of Books</h1>
            {bookList}
        </div>
    );
}

export default Lists3;
