const PostList = ({posts, handleDelete}) => {
    // const posts = props.posts;
    return ( 
        <div className="post-list">
            {posts.map((post)=> (
                <div className="post-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Posted by {post.author.name}</p>
                    <button onClick={() => handleDelete(post.id)}>delete blog</button>
                </div>

            ))}
        </div>
     );
}
 
export default PostList;