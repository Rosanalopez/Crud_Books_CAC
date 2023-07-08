
import { BookDetails } from "./pages/BookDetails";
import { BooksMain } from "./pages/BooksMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";
import { LandingPage } from "./pages/LandingPage";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import { Navbar } from "./components/Navbar"
import { PrestamoLibro } from "./components/prestamoLibro";
import ProtectedRoute from '../utils/protectedRoute';
import { SidebarAdmin } from "./pages/SidebarAdmin";

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/logout" element={<LogoutForm/>}/>
          <Route path="/admin" element={<SidebarAdmin/>}/> */
          
          <Route path="/book" element={
            <ProtectedRoute>
              <BooksMain/>
            </ProtectedRoute>
          }/>
          <Route path="/book/:bookId" element={
            <ProtectedRoute>
              <BookDetails/>
            </ProtectedRoute>
          }/>
          <Route path="/book/edit/:bookId" element={
            <ProtectedRoute>
              <EditBook/>
            </ProtectedRoute>
          }/> 
          <Route path="/book/create" element={
            <ProtectedRoute>
              <CreateBook/>
            </ProtectedRoute>
          }/> 
          <Route path="/book/prestamoLibro" element={
            <ProtectedRoute>
              <PrestamoLibro/>
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
