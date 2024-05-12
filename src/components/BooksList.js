import React from 'react';

function BooksList() {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      <h2>Books List</h2>
      <div className="books-list">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.image} alt={book.title} />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
