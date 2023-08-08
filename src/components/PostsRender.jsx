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
          <section>
            <h1>{post.title}</h1>
              <p><strong>Price: </strong>{post.price}</p>
              <p><strong>Author: </strong>{post.author.username}</p>
              <p><strong>Description: </strong>{post.description}</p>
              <p><strong>Location: </strong>{post.location}</p>
            <button onClick={() => deletePost(post._id)}>Delete Post</button>
          </section>
        </>
      );
    }) : <h1>...</h1>
  )
};

export default PostsRender;
