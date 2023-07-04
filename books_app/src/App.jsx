import {LandingPage} from "./pages/LandingPage";
import {Navbar} from "./components/Navbar"
import {BooksMain} from "./pages/BooksMain";
import {SidebarAdmin} from "./pages/SidebarAdmin";
import {BookDetails} from "./pages/BookDetails";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          {/* <Route path="/" element={<ShowBooks/>}/> */}
          {/* <Route path="/create" element={<CreateBook/>}/>
          <Route path="/edit/:id" element={<EditBook/>}/> */}
          <Route path="/admin" element={<SidebarAdmin/>}/>
          <Route path="/books" element={<BooksMain/>}/>
          <Route path="/book/:bookId" element={<BookDetails/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
