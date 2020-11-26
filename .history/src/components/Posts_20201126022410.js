import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = () => {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPostArray(data);
      };
      fetchPosts();
    }, 5000);
  }, []);

  console.log(postArray)

  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
