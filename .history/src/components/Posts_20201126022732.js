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

  return (
    <div className="posts">
      {postArray ? (
        postArray.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <span>Do excepteur minim laboris ad enim.Labore enim ea sit dolore elit ea sit reprehenderit cupidatat voluptate esse esse velit.Fugiat reprehenderit irure amet sint irure.Laboris dolor nostrud ea non dolore labore.Est qui sit officia tempor laborum ipsum elit.Aute ut id tempor aute deserunt voluptate id mollit elit.Id et consequat et nulla.</span>
      )}
    </div>
  );
};

export default Posts;
