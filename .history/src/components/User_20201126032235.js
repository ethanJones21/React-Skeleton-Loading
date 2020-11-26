import React, { useState, useEffect } from "react";
import "./User.css";
import { photos } from "../photos";
import UserSkeleton from "../skeleton/UserSkeleton";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchUser = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUser(data[0]);
      };
      fetchUser();
    }, 5000);
  }, []);

  return (
    <div className="user">
      {user !== null ? (
        <>
          <div className="userPhoto">
            <img className="userPhotoImg" src={photos[9]} alt="avatar" />
          </div>
          <div className="userInfo">
            <span className="userInfoText">
              <b>{user.name}</b>
            </span>
            <span className="userInfoText">{user.email}</span>
            <span className="userInfoText">{user.address.street}</span>
          </div>
          <button className="writeButton">Write a Story</button>
        </>
      ) : (
        <UserSkeleton />
      )}
    </div>
  );
};

export default User;
