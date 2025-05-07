import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Services from "./components/Services";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => { return import("./components/About") })

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading..........................</h1>}> <About /></Suspense>
            }
            ,
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)