/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

//--------------------------------
//-----------Content1-------------
// Stateless functional component
// always return JSX
//--------------------------------
//---JSX Rules---
// * Returns single element
// * div / section / article or Fragment
// * use camelCase for html attribute
// * className instead of class
// * close every element
// * formatting
//-------------------------------------
//-----------Content2------------------
//----Nested Components, React tools----
//-------------------------------------
//-----------Content3------------------
//--------State & Props----------------
//-------------------------------------

//---------content1 example code-----------
// function App() {
//   return (
//     <div>
//       <div>
//         <h1>
//           "Hello, Guys!", welcome to <b>ReactJs</b>
//         </h1>
//         <h1> * ReactJS is Javascript Library.</h1>
//         <h4>This is Dharan and This is my first component</h4>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <a href="#">Hello</a>
//             <br />
//             <img
//               src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
//               alt=""
//               width="450"
//               height="350"
//             />
//             <br />
//             <label>Enter Laptop Name:</label>
//             <input type="text" name="laptopName" id="laptop" />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return React.createElement('h1', {}, 'Hello World!');
// }

//-----Content2 Example code------------------
// function App() {
//   return (
//     <div>
//       <Person />
//       <Msg />
//     </div>
//   );
// }

// Person = () => <h2>John Doe</h2>
// Msg = () => {
//   return (
//     <p>This is my message</p>
//   )

// }

//-------content3 Example code--------

//set up vars
// author = "Robert T.Kiyosaki";
// title = 'Rich DAD Poor DAD';
// img = "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UY218_.jpg";

// firstBook = {
//   img: "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY218_.jpg",
//   title: "The Book Thief",
//   author: "Marcus Zusak",
// };
// secondBook = {
//   img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY218_.jpg",
//   title: "Attitude is Everything",
//   author: "Jeff Keller",
// };
// thirdBook = {
//   img: "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg",
//   title: "The Power of your Subconscious Mind",
//   author: "Joseph Murphy",
// };
// function App() {
//   return (
//     <section className='booklist'>
//       <Book img={firstBook.img} title={firstBook.title} author={firstBook.author }/>
//       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author }/>
//       <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author }/>
//       {/* <Book category1="developer" RY2={1998 }/>
//       <Book category2="influencer" RY2={2001 }/> */}

//     </section>
//   )
// };

// Book = (props) => {
//   // console.log(props);
//   {img,title,author} = props
//   return (
//     <article className='book'>
//       {/* <img src={img} /> */}
//       {/* <h1>{title}</h1> */}
//       {/* <h4>{author.toUpperCase()}</h4> */}
//       {/* <p>{props.category1 }</p> */}
//       {/* <p>{props.RY1 }</p> */}
//       {/* <p>{props.category2 }</p> */}
//       {/* <p>{props.RY2 }</p> */}
//       {/* <img src={props.img}/>
//       <h1>{props.title }</h1>
//       <h4>{props.author}</h4> */}
//       <img src={img} />
//       <h1>{title}</h1>
//       <h4>{author }</h4>
//     </article>
//   )
// }
//----------------------------------------------------
//-----------children props----------------------
const books = [

  {
    id:1,
    img: "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY218_.jpg",
    title: "The Book Thief",
    author: "Marcus Zusak",
  },
  {
    id:2,
    img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY218_.jpg",
    title: "Attitude is Everything",
    author: "Jeff Keller",
  },
  {
    id:3,
    img: "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg",
    title: "The Power of your Subconscious Mind",
    author: "Joseph Murphy",
  },
]
// const newBooks = books.map((book) => {
//   // return <h1>{book.title+ " - "+book.author}</h1>
//   const { img, title, author } = book;
//   return (
//     <Book book={book}></Book>
//   )
// })

// const names = ['John', "David", "Stefen"]
// const newName = names.map((name) => {
//   // console.log(name)
//   return <h1>{name }</h1>
// })
// console.log(newName)
function App() {
  return (
    <section className='booklist'>
      {/* <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}> */}
        {/* //Children props */}
        {/* <p>lorem20 is a demo emmet abbrevation it is not working now!</p>
        <p>Rating: 3.5</p> */}
      {/* </Book> */}
      {/* <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}> */}
        {/* <p>lorem20 is a demo emmet abbrevation it is not working now!</p>
        <p>Rating: 3.5</p> */}
      {/* </Book> */}
      {/* <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}> */}
        {/* <p>lorem20 is a demo emmet abbrevation it is not working now!</p>
        <p>Rating: 4.5</p> */}
      {/* </Book> */}

      {/* {books} */}
      {/* {newName} */}

      {books.map((book,index) => {
        // const { img, title, author } = book;
        return <Book key={index} book={book}></Book>;
      })}

    </section>
  )
};

const Book = (props) => {

  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} />
       <h1>{title}</h1>
       <h4>{author}</h4>
    </article>
  )
}

export default App;


