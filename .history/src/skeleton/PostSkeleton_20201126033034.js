import React from "react";
import "./PostSkeleton.css";
import Skeleton from "./Skeleton";

const PostSkeleton = () => {
  return (
    <div className="postSkeleton">
      <div className="postSkeletonLeft">
        <Skeleton type="avatar" />
      </div>
      <div className="postSkeletonRight">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
};

export default PostSkeleton;
