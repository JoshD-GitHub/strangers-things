import PostsRender from "./components/PostsRender";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AddPost from "./components/AddPost";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';


const API = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/posts';


const App = () => {
	const [token, setToken] = useState('');
  console.log('app token', token)

  return (
    <>
      <h1>Posts</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login token={token} setToken={setToken} />} />
        <Route path="/home" element={<PostsRender token={token} />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>

    </>
  );
};

export default App;
