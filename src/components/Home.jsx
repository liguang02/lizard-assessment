// the home component which houses the CategoryList and PostList components
import { useState,useEffect } from "react";
import PostList from "./PostList";
import CategoryList from "./CategoryList";

const Home = () => {
    const [posts,setPosts] = useState([])


    // utilizing useEffect hook to fetch the posts from the API and update the posts state
    useEffect(()=> {
        fetch("http://localhost:3000/api/posts")
        .then((res)=>          
            res.json())
        .then((json)=> {
            setPosts(json.posts)
            console.log(posts)
        })
        .catch((error)=>
            console.log(error.message))

    },[])

    return (
        <div className="home">
            <CategoryList posts={posts} setPosts={setPosts} />
            <PostList posts={posts}/>

        </div>
    );
}

export default Home;