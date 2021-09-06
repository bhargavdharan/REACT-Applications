/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


const Book = (props) => {
  const { img, title, author } = props;
  //Attribute, event handler
  //onClick,onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello,World!");
  };
  const complexExample = () => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      {/* <h1 onClick={()=>console.log(title)}>{title}</h1> */}
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex
      </button>
    </article>
  );
};
export default Book;
