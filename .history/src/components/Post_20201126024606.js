import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postPhoto">
        <img
          className="postPhotoImg"
          src={postMessage.photo}
          alt="avatar"
        />
      </div>
      <div className="postInfo">
        <h4 className="postTitle">Nulla laborum dolore magna adipisicing</h4>
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
