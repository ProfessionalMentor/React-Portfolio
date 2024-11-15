import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Services from "./components/Services";

const router = createBrowserRouter(
    [
    {
      path: "/",  
      element: <> <Navbar/>
      <Home/> </>
    },
    { path: "/contact",  
      element: <> <Navbar/>
      <Contact/> </>
    },
    {
      path: "/project",  
      element: <> <Navbar/>
      <Project/> </>
    },
    {
      path: "/services",  
      element: <> <Navbar/>
      <Services/> </>
    },
    {path: "/about",  
      element: <> <Navbar/>
      <About/> </>}
  ]
) 

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App