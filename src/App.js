import React from "react"
import NavBar from "./navbar/NavBar"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Movie from "./axios/Axios"
import Footer from "./footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
    <NavBar />
     <Routes>
       <Route path="/Home"
       element={<Home/>}>
          </Route>
          
          <Route path="/About"
       element={<About/>}>
          </Route>

          <Route path="/Movie"
       element={<Movie/>}>
          </Route>

          <Route path="/Register"
       element={user ? <Home/> :<Register/>}>
          </Route>

         <Route path="/Login"
         element={user ? <Home/> :<Login/>}>
       </Route>

      <Route path="/"
        element={<Login/>}>
      </Route>
         
  </Routes>
  <Footer/>
  </BrowserRouter> 
  );
}

export default App;
