import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main";
import About from "../Pages/About/About";
import AddBlog from "../Pages/AddBlog/AddBlog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PriveteRoute from "./PriveteRoute";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/addblog',
                element:<PriveteRoute><AddBlog></AddBlog></PriveteRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])