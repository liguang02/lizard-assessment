import { useEffect, useState } from "react";

function App() {
  let [posts,setPosts] = useState([])
  useEffect(()=> {
    fetch("/api/posts").then((res)=> res.json()).then((json)=> {
      setPosts(json.posts)
    })
  })
  return (
    <ul>
    {posts}
    "happy"

  </ul>)
}

export default App;
