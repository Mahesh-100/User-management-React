import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Book = () => {
  const [books, setBooks] = useState([]);  // Initialize as an array

  useEffect(() => {
    handleBooks();
  }, []);

  const handleBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8083/books');
      setBooks(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Book List</h1>
      <ol>
        {books.map(book => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title} <br />
            <strong>Pages:</strong> {book.pages} <br />
            <strong>Publish Date:</strong> {new Date(book.publishedDate).toLocaleDateString()} <br />
            <strong>Author:</strong> {book.author.firstName} {book.author.lastName} <br />
          </li>
        ))}
      </ol>
    </>
  );
};

export default Book;
