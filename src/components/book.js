import React from "react";

//Importing CSS file
import "./index.css";

const Book = (props) => {
  // console.log(props)
  const {img, title, author, rank} = props;
  return (
    <>
      <article className="book">
        <img src={img} alt={'Image of ' + title}/>
        <h1>{title}</h1>
        <h4 className="author">{author}</h4>
        <h6 className="author">Rank: {rank}</h6>
      </article>
    </>
  );
};

export default Book;
