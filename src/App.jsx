import PostsRender from "./components/PostsRender";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';


const API = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/posts';


const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setPosts(data.data.posts);
    };
    fetchAPI();
  }, []);

  console.log('posts', posts);

  return (
    <>
      <h1>Posts</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={posts ? <PostsRender posts={posts} /> : <h1>...</h1> } />
        <Route path="/login" element={<Login />} />
      </Routes>

      
    </>
  );
};

export default App;


