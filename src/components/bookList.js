import React from 'react';

// importing the Data of the books
import { bookData } from "./data";

// Improting One Book after another
import Book from "./book";

//Importing CSS file
import "./index.css";

const BookList = () => {
  return (
    <>
      <div>
        <p className="title">The Best Amazon Selling Books in 2022</p>
        <section className="bookList">
          {bookData.map((book) => {
            // console.log(book);
            return <Book key={book.id} {...book} />;
          })}
        </section>
      </div>
    </>
  );
}

export default BookList;