import React from "react";
//React 17
import ReactDOM from "react-dom";

/* Applied in React 18
import * as ReactDomClient from 'react-dom-client';
*/

// importing the whole List
import SingleBook from './components/bookList';

function BookListings() {
  return (
    <SingleBook />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BookListings />
  </React.StrictMode>,
  document.getElementById("root")
);

/*
---WILL BE APLIED IN REACT 18---

const rootElement = document.getElementById('root');
const root = ReactDomClient.creatRoot(rootElement);
root.render(<BookListings />);
*/

