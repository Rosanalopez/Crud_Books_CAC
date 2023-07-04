import {Link} from "react-router-dom"

export const BookCard = ({ book }) => {

  return (
    <li className="BookCard">
      <Link to={`/book/${book.id}`}>
        <img className="BookImage" src={book.image} alt={book.title} />
      </Link>
    </li>
  );
};