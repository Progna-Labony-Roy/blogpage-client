import React from 'react';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {

    const { data: blogs =[] ,isLoading ,refetch} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
          const result = await fetch("https://blogpage-server.vercel.app/blogs");
          const data = await result.json();
          return data;
        },
      });
      
      if(isLoading){
        return <>Loading...</>
      }
      
    return (
        <div className='blogs'>
            {
                blogs?.length && 
                blogs.map((blog)=> (<Blog blog={blog} key={blog._id} refetch={refetch}></Blog>))
            }
        </div>
    );
};

export default Blogs;