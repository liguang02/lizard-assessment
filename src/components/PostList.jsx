import AppPagination from "./AppPagination";
import { useState } from "react";

const PostList = ({posts}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    // calculate the total number of pages based on the number of posts and the items per page
    const total_pages = Math.ceil(posts.length / itemsPerPage);
    // get the first and last index of the posts to be displayed on the page
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    // slice the posts array to get the posts to be displayed on the page
    const data = posts.slice(firstIndex, lastIndex);
    return ( 
        <div className="post-list">
            {data.map((data)=> (
                <div className="post-preview" key={data.id}>
                    <h2>{data.title}</h2>
                    <p><b>Posted by </b>{data.author.name}</p>
                    <p><b>Summary: </b>{data.summary} </p>
                    <div className="category-view"><b>Categories: </b> {data.categories.map((category)=> (<div key={category.id}><u>{category.name}</u></div>))} </div>
                    
                </div>
            ))}
            <br></br>
            <footer>
                <AppPagination setCurrentPage = {setCurrentPage} total_pages= {total_pages}/>    

            </footer>

        </div>
        
     );
}
 
export default PostList;