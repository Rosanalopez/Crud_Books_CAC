import axios from "axios";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

const url = "http://localhost:3000/api/v1/libraries/book";

 
const ShowBooks = () => {

        const [books, setBooks] = useState([]);
      
        useEffect(()=>{
          getBooks()
        },[])
      
        // procedimiento para mostrar los posts
        const getBooks = async () => {
          const res = await axios.get(url);
          setBooks(res.data);
       
        };

  return (
    <div className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-sm">
                {/* <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >

                </Typography> */}
                Titulo
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-sm">
                {/* <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >

                </Typography> */}
                Autor
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-sm">
                {/* <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >

                </Typography> */}
                Descripcion
              </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
 
              <tr key={book.id}>
                <td>
                  {/* <Typography variant="small" color="blue-gray" className="font-normal">
                  
                  </Typography> */}
                  {book.title}
                </td>
                <td>
                  {/* <Typography variant="small" color="blue-gray" className="font-normal">
                    
                  </Typography> */}
                  {book.id}
                </td>
                <td>
                  {/* <Typography variant="small" color="blue-gray" className="font-normal">
                   
                  </Typography> */}
                  {book.description}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowBooks;