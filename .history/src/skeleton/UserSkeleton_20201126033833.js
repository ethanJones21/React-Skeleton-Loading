import React from "react";
import "./UserSkeleton.css";
import Skeleton from "./Skeleton";
import Shimmer from "./Shimmer";

const UserSkeleton = () => {
  return (
    <div className="userSkeleton">
      <div className="userSkeletonLeft">
        <Skeleton type="userAvatar" />
      </div>
      <div className="userSkeletonRight">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
      <Shimmer/>
    </div>
  );
};

export default UserSkeleton;
