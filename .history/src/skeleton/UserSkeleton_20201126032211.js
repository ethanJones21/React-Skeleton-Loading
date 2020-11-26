import React from "react";
import Skeleton from "./Skeleton";

const UserSkeleton = () => {
  return (
    <div className="postSkeleton">
      <Skeleton type="userAvatar" />
      <div className="postSkeletonRight">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
};

export default UserSkeleton;
