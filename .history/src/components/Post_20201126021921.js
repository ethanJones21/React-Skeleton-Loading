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
        <span>Author: Safak</span>
        <p className="postDesc">
          quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
          sunt rem eveniet architecto
        </p>
      </div>
    </div>
  );
};

export default Post;
