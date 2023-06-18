import React, { Component } from 'react';

function BookContainer(books) {

    return (
        <div>
            <h1>Book Container</h1>
            {books.books.map(book => (
                <div key={book.id}>
                    <h1>{book.name}</h1>
                    <h2>{book.description}</h2>
                    <span>{book.id}</span>
                </div>
            ))}

        </div>
    )
}

export default BookContainer;