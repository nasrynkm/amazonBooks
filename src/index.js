import React from "react";

/*  React 17
 import ReactDOM from "react-dom";
*/

/* Updated for React 18 */
import ReactDOM from "react-dom/client";

// importing the whole List
import SingleBook from "./components/bookList";

function BookListings() {
  return <SingleBook />;
}

/* UPDATED FOR REACT 18 */
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <BookListings />
  </React.StrictMode>
);


/* 
// OLD SYNTAX OF REACT 17

ReactDOM.render(
   <React.StrictMode>
     <BookListings />
   </React.StrictMode>,
   document.getElementById("root")
 );

 */

