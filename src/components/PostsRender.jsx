const PostsRender = ({ posts }) => {
  return (
    posts.map((post) => {
      return (
        <>
          <h1>{post.title}</h1>
          <ul>
            <li>{post.price}</li>
            <li>{post.author.username}</li>
            <li>{post.description}</li>
            <li>{post.location}</li>
          </ul>
        </>
      );
    })
  )
};

export default PostsRender;
