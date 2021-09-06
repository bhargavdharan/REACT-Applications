/* eslint-disable jsx-a11y/alt-text */
import React from "react";


import {books} from "./books";
import Book from "./Book";
import { greeting } from './testing/testing';

function Event() {
    console.log(greeting);
  return (
    <div>
      <h1>Welcome! Events Content</h1>
      <section className="booklist">
        {books.map((book, index) => {
          // const { img, title, author } = book;
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
  );
}


export default Event;
