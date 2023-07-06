/* import peliculas from "./peliculas.json" */
import {get} from "../../utils/httpClient"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"; // 11 importamos useLocation
import { BooksCard } from "./BooksCard"
import { Spinner } from "./Spinner.jsx";
import "./BooksGrid.css"

export const BooksGrid=()=>{

/*     13 utilizamos este hook para tomar lo que viene por params del buscador */
const useQuery = ()=>{
  return  new URLSearchParams(useLocation().search)
}
//14 es guardar en la variable search lo que se está buscando
 const query = useQuery()
 const search = query.get("search")
/*  console.log(search); */


    //12 mostrar uso de useLocation()
/*     const location = useLocation() */
   /*  console.log(location);  */// vemos en el navegador
 /*   console.log(location.search) */
const [cargando,setCargando]= useState(true);
const [books,setBooks] = useState([])
   
useEffect(()=>{
    //15 realizamos un ternario , si hay busqueda, hace un llamado al enpoint de busqueda, sino al de peliculas
    const searchUrl = search 
    ? "/libraries/search/book?query="+search 
    :"/libraries/book"

    setCargando(true)
get(searchUrl).then((data)=>{  // 16 agrego searchUrl
    setBooks(data.data.books);
    setCargando(false)
})
},[search]) // 17 agrego search

if(cargando){
    return <Spinner/>
  }

return(
    <ul className="moviesGrid">
        {books.map((book)=>(
        <BooksCard key={book.id} book={book}/>
        ))}
    </ul>
)
}