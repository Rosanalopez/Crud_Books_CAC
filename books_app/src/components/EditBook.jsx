import axios from "axios"
import {useState,useEffect} from  "react"
import {useNavigate,useParams} from "react-router-dom"

const url = "http://team5.com.ar/api/v1/libraries/book/";


const EditBook = () =>{

    const [title, setTitulo] = useState("");
    const [description, setDescripcion] = useState("");
    const [author, setAutor] = useState("");
    const [genre, setGenero] = useState("");
    const [image, setImagen] = useState("");
  
    const navigate = useNavigate();

    const {bookId} = useParams()

    // procedimiento para editar un post
    const editar = async (e) => {
        e.preventDefault();
        await axios.patch(url+bookId, {
          title,
          description,
          author,
          genre,
          image,
        });
        navigate("/book/"+bookId);
      };

      useEffect(()=>{
        //metodo para traer un post por su id
        getBookById()
              },[])

              const getBookById = async()=>{
                const res = await axios.get(url+bookId)
                setTitulo(res.data.data.book.title)
                setDescripcion(res.data.data.book.description)
                setAutor(res.data.data.book.authorId)
                setGenero(res.data.data.book.genreId)
                setImagen(res.data.data.book.image)
              }
            
            const thisTitle = !title ? "" : title
            const thisDescription = !description ? "" : description
            const thisAuthor = !author ? "" : author
            const thisGenre = !genre ? "" : genre
            const thisImage = !image ? "" : image

            return(
                <div>
                <h1>Editar Libro</h1>
                <form onSubmit={editar}>
                  <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input
                      className="form-control"
                      value={thisTitle}
                      onChange={(e) => setTitulo(e.target.value)}
                      type="text"
                    />
                  </div>
          
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input
                      className="form-control"
                      value={thisDescription}
                      onChange={(e) => setDescripcion(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el autor de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Autor</label>
                    <input
                      className="form-control"
                      value={thisAuthor}
                      onChange={(e) => setAutor(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el género de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Genero</label>
                    <input
                      className="form-control"
                      value={thisGenre}
                      onChange={(e) => setGenero(e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">url de la imagen</label>
                    <input
                      className="form-control"
                      value={thisImage}
                      onChange={(e) => setImagen(e.target.value)}
                      type="text"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                  EDITAR
                  </button>
                </form>
              </div>
            )
        }
    

export default EditBook;