import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main";
import Blogs from "../components/Shared/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleBlog from "../components/SingleBlog/SingleBlog";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/Profile";

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
                path:'/about',
                element:<About></About>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
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