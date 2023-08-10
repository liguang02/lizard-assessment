import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
 
  return (
    <div className="App">
      <h1>Lizard Assessment</h1>
      <Navbar />
      <div className="content">
        <Home />

        {/* <table>
          <tr>
            <th>Author name</th>
            <th>Post Title</th>
            <th>Publish date</th>
          </tr>
          <tr>
              <td>
                  {posts.map((post)=> (
                  <div key={post.id}>{post.author.name}</div>))}

              </td>
              <td>
                {posts.map(post=> <div key={post.id}>{post.title}</div>)}
              </td>
              <td>
                {posts.map(post=> <div key={post.id}>{post.publishDate}</div>)}
              </td>

            </tr>


        </table> */}
      </div>
      

    </div>)
    
}

export default App;
