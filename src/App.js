import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Contactus from "./components/ContactUs";
import Error from "./components/Error";

const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout/>,
  errorElement: <Error/>,
},
{
  path: "/about",
  element: <About/>,
},
{
  path: "/Contactus",
  element: <Contactus/>,
},
]);

const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout/>); //rendering react component
root.render(<RouterProvider router={appRouter}/>);