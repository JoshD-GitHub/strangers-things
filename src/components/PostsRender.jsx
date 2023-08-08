import { useEffect, useState } from "react";




const PostsRender = ({ token }) => {
  const [posts, setPosts] = useState(null);
  const API = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/posts';
  

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setPosts(data.data.posts);
    };
    fetchAPI();
  }, [posts]);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    posts ?
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
          <button onClick={() => console.log(post._id)}>View Post</button>
          <button onClick={() => deletePost(post._id)}>Delete Post</button>
        </>
      );
    }) : <h1>...</h1>
  )
};

export default PostsRender;
