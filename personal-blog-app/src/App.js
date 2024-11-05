// src/App.js
import React, { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  // Add a new blog post
  const addPost = (title, content) => {
    const newPost = { id: Date.now(), title, content };
    setPosts([newPost, ...posts]); // Add new post to the beginning
  };

  // Delete a blog post by ID
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <h1>Personal Blog</h1>
      <BlogForm addPost={addPost} />
      <BlogList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
