
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./components/Navbar"
import { BooksMain } from "./pages/BooksMain";
import { SidebarAdmin } from "./pages/SidebarAdmin";
import { BookDetails } from "./pages/BookDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  LoginForm from "./components/LoginForm";
import EditBook from "./components/EditBook";
import CreateBook from "./components/CreateBook";
import { PrestamoLibro } from "./components/prestamoLibro";

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="/admin" element={<SidebarAdmin/>}/> */
          
          <Route path="/books" element={<BooksMain/>}/>
          <Route path="/book/:bookId" element={<BookDetails/>}/>
          <Route path="/book/edit/:bookId" element={<EditBook/>}/> 
          <Route path="/book/create" element={<CreateBook/>}/> 
          <Route path="/book/prestamoLibro" element={<PrestamoLibro/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
