import { useState,useEffect } from "react";
import PostList from "./PostList";
import CategoryList from "./CategoryList";
// using a Material UI library to create a pagination

const Home = () => {
    const [posts,setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);


    // utilizing useEffect hook to fetch the posts from the API and update the posts state
    useEffect(()=> {
        fetch("http://localhost:3000/api/posts").then((res)=> res.json()).then((json)=> {
        setPosts(json.posts)
        })
    },[])

    return (
        <div className="home">
            <CategoryList posts={posts} setPosts={setPosts} />

            <PostList posts={posts} currentPage = {currentPage} setCurrentPage= {setCurrentPage}/>

        </div>
    );
}

export default Home;