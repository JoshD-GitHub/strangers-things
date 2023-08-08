import PostsRender from "./components/PostsRender";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AddPost from "./components/AddPost";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

const App = () => {
	const [token, setToken] = useState('');

  return (
    <>
      <h1>Posts</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login token={token} setToken={setToken} />} />
        <Route path="/home" element={<PostsRender token={token} />} />
        <Route path="/addpost" element={<AddPost token={token} />} />
      </Routes>
    </>
  );
};

export default App;
