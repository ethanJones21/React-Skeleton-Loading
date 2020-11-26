import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = () => {
  const [postArray, setPostArray] = useState([]);
  const [photoArray, setPhotoArray] = useState([
    "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3772771/pexels-photo-3772771.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1071162/pexels-photo-1071162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3541389/pexels-photo-3541389.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ]);

  useEffect(() => {
    setTimeout(() => {
      const fetchPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPostArray(data.slice(0, 10));
      };
      //   const fetchPhotos = async () => {
      //     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      //     const data = await res.json();
      //     setPhotoArray(data.slice(0, 10));
      //   };
      fetchPosts();
      //   fetchPhotos();
    }, 1000);
  }, []);

  return (
    <div className="posts">
      {postArray.length > 0 ? (
        postArray.map((post) => (
          <Post key={post.id} post={{ ...post, photo: photoArray[post.id] }} />
        ))
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
};

export default Posts;
