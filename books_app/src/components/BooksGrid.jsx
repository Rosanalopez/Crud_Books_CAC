import { get } from "../../utils/httpClient.js"
import { useState, useEffect } from "react"
import { BookCard } from "./BookCard.jsx"
import "./BooksGrid.css"

export const BooksGrid = () => {

    const [books,setBooks] = useState([])
   
    useEffect(()=>{
        get("/libraries/book").then((data)=>{
            setBooks(data.data.books);
        })
    },[])

    return(
        <div>
            {/* <h3 class="flex items-center my-8">
                <span aria-hidden="true" class="flex-grow bg-gray-200 rounded h-0.5"></span>
                <span class="mx-3 text-lg font-medium">Libros Premiados</span>
                <span aria-hidden="true" class="flex-grow bg-gray-200 rounded h-0.5"></span>
            </h3> */}
            <ul className="BooksGrid">
                {books.map(book =>(
                    <BookCard key={book.id} book={book}/>
                ))}
            </ul>
        </div>
    )
}