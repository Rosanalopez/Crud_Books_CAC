import { Link } from "react-router-dom";
import { get } from "../../utils/httpClient.js"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiArrowCircleLeft } from "react-icons/hi";

export const BookDetail = () => {

  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    get(`/libraries/book/${bookId}`).then((data) => {
        setBook(data.data.book);
    });
  }, [bookId]);

  if (!book) {
    return null;
  }

  return (
  <>
    <section key={book.id}
    className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 place-items-center pt-10 sm:pt-20 gap-4 
    ${
      book? "overflow-hidden" : ""
    }`}
  >
    {/* seccion imagen  */}
    <div className="h-[25rem] md:h-[35rem]">
    <img
        src={
          book.image
            ? book.image
            : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        }
        alt={book.title}
        className="rounded-xl object-cover w-full h-5/6"
      />
    </div>

    {/* seccion resumen  */}
    
    <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
      <Link
        to="/books" className="no-underline text-para_text transition duration-200 ease-in hover:text-blue hover:tracking-wider">
      <HiArrowCircleLeft className="text-3xl"></HiArrowCircleLeft></Link>
      <h1 className="text-6xl md:text-3xl font-bold text-center py-2">{book.title}</h1>
      <div className="px-2">
        <h1 className="font-bold text-xl mb-1">RESUMEN:</h1>
      </div>
      <div className="text-para_text px-2 pb-10">
        <p><strong>Autor:</strong> {book.authorId || "Desconocido"}</p>
        <p><strong>Genero:</strong> {book.genreId}</p>
      </div>
    </div>

  </section>
    </>
  );
};

