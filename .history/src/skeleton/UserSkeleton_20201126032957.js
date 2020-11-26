import React from "react";
import "./UserSkeleton.css";
import Skeleton from "./Skeleton";

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
    </div>
  );
};

export default UserSkeleton;
