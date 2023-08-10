import { useState,useEffect } from "react";
import PostList from "./PostList";
import CategoryList from "./CategoryList";

const Home = () => {
    // utilizing useState hook to keep track of the posts state, initialize it with empty array
    const [posts,setPosts] = useState([])
    // utilizing useEffect hook to fetch the posts from the API and update the posts state
    useEffect(()=> {
        fetch("http://localhost:3000/api/posts").then((res)=> res.json()).then((json)=> {
        setPosts(json.posts)
        })
    },[])
    const handleDelete = (id) => {
        const newBlogs = posts.filter(blog => blog.id !== id);
        setPosts(newBlogs);
      }

    return (
        <div className="home">
            <CategoryList posts={posts}/>

            <PostList posts={posts} handleDelete={handleDelete} />

        </div>
    );
}

export default Home;