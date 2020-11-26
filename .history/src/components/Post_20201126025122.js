import React from "react";
import "./Post.css";

const Post = ({post}) => {
    console.log(post)
  return (
    <div className="post">
      <div className="postPhoto">
        <img
          className="postPhotoImg"
          src={post.photo}
          alt="avatar"
        />
      </div>
      <div className="postInfo">
        <span className="postTitle">Nulla laborum dolore magna adipisicing</span>
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
