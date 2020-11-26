import React from "react";
import "./UserSkeleton.css";
import Skeleton from "./Skeleton";

const UserSkeleton = () => {
  return (
    <div className="userSkeleton">
      <Skeleton type="userAvatar" />
      <div className="userSkeletonRight">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
};

export default UserSkeleton;
