import LandingPage from "./pages/LandingPage";
import {Navbar} from "./components/Navbar"
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
        </Routes>
      </BrowserRouter>
  )
}

export default App
