import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postPhoto">
        <img
        className="postPhotoImg"
          src="https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg"
          alt="avatar"
        />
      </div>
      <div className="postInfo">
        <h3 className="postTitle">Nulla laborum dolore magna adipisicing</h3>
        <p className="postDesc">
          Magna irure ea ex eiusmod sint minim sunt laborum sunt dolor nulla
          ullamco deserunt exercitation. Nisi enim Lorem ipsum amet minim labore
          minim ex voluptate. Amet voluptate mollit adipisicing cillum enim.
        </p>
      </div>
    </div>
  );
};

export default Post;
