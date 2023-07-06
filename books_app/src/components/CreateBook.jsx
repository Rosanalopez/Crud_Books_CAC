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
                <div>
                <h1>Crear Libro</h1>
                <form onSubmit={editar}>
                  <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitulo(e.target.value)}
                      type="text"
                    />
                  </div>
          
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescripcion(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el autor de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Autor</label>
                    <input
                      className="form-control"
                      value={authorId}
                      onChange={(e) => setAutor(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el género de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Genero</label>
                    <input
                      className="form-control"
                      value={genreId}
                      onChange={(e) => setGenero(e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">url de la imagen</label>
                    <input
                      className="form-control"
                      value={image}
                      onChange={(e) => setImagen(e.target.value)}
                      type="text"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    CREAR
                  </button>
                </form>
              </div>
            )
        }
    

export default CreateBook;