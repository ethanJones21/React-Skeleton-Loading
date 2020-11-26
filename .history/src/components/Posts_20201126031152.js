import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Posts.css";
import { photos } from "../photos";
import Skeleton from "../skeleton/Skeleton";

const Posts = () => {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPostArray(data.slice(0, 10));
      };
      fetchPosts();
    }, 1000);
  }, []);

  return (
    <div className="posts">
      {postArray.length > 0
        ? postArray.map((post) => (
            <Post
              key={post.id}
              post={{ ...post, photo: photos[post.id - 1] }}
            />
          ))
        : [1, 2, 3, 4, 5].map((item) => <Skeleton type="text" />)}
    </div>
  );
};

export default Posts;
