// src/BlogList.js
import React from "react";
import "./App.css";

function BlogList({ posts, deletePost }) {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
