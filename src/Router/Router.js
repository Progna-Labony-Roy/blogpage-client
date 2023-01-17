import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main";
import Blogs from "../components/Shared/Blogs/Blogs";
import AddBlog from "../Pages/AddBlog/AddBlog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PriveteRoute from "./PriveteRoute";
import SingleBlog from "../components/SingleBlog/SingleBlog";

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
                path:'/',
                element:<Blogs></Blogs>,
                loader: ()=> fetch("https://blogpage-server.vercel.app/blogs")
            },
            {
                path:'/blog/:id',
                element:<SingleBlog></SingleBlog>,
                loader: ({params})=> fetch(`https://blogpage-server.vercel.app/blog/${params.id}`)
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