import axios from "axios"
import {useState,useEffect} from  "react"
import {useNavigate,useParams} from "react-router-dom"

const url = "http://team5.com.ar/api/v1/libraries/book/";


const CreateBook = () =>{

    const [title, setTitulo] = useState("");
    const [description, setDescripcion] = useState("");
    const [authorId, setAutor] = useState("");
    const [genreId, setGenero] = useState("");
    const [image, setImagen] = useState("");
  
    const navigate = useNavigate();

    // procedimiento para editar un post
    const editar = async (e) => {
        e.preventDefault();
        const thisBook = await axios.post(url, {
          title,
          description,
          authorId,
          genreId,
          image,
        });
        const thisBookId = thisBook.data.data.book.id
        
        navigate("/book/"+thisBookId);
      };

      useEffect(()=>{},[])

            return(
              <div className="w-full max-w-xs pt-12">
                <form onSubmit={editar} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1><strong>Crear Libro</strong></h1>
                  <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={title}
                      onChange={(e) => setTitulo(e.target.value)}
                      type="text"
                    />
                  </div>
          
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={description}
                      onChange={(e) => setDescripcion(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el autor de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3 block text-gray-700 text-sm font-bold mb-2">
                    <label className="form-label">Id Autor</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={authorId}
                      onChange={(e) => setAutor(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el género de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Genero</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={genreId}
                      onChange={(e) => setGenero(e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">URL de la imagen</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={image}
                      onChange={(e) => setImagen(e.target.value)}
                      type="text"
                    />
                  </div>

                  <button type="submit" className="btn items-center px-3 py-2 text-sm font-medium text-center text-white bg-grey bg-grey-700 rounded-lg hover:bg-grey-800 focus:ring-none focus:outline-none focus:ring-grey-300 dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-blak-800">
                    CREAR
                  </button>
                </form>
              </div>
            )
        }
    

export default CreateBook;