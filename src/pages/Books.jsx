import { useState } from "react";
import React from "react";
import Book from "../Components/ul/Book";

const Books = ({ books: intialBooks }) => {
  const [books, setBooks] = useState(intialBooks);

  function filterbooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBooks(books.slice().sort(
        (a, b) =>
          (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
      ))
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(books.slice().sort(
        (a, b) =>
          (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
      ))
    }
    if (filter === "RATING") {
        setBooks(books.slice().sort(
          (a, b) =>
            (b.rating) - (a.rating)
        ))
      }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterbooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price Low to high</option>
                  <option value="HIGH_TO_LOW">Price High to Low</option>
                  <option value="RATING">Book Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
