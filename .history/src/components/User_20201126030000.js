import React, { useState, useEffect } from "react";
import "./User.css";
import {photos} from "../photos"

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
    }, 1000);
  }, []);

  return (
    <div className="user">
      {user !== null ? (
        <>
          <div className="userPhoto">
            <img
              className="userPhotoImg"
              src={photos[9]}
              alt="avatar"
            />
          </div>
          <div className="userInfo">
            <span className="userInfoText">
              <b>{user.name}</b>
            </span>
            <span className="userInfoText">{user.email}</span>
            <span className="userInfoText">{user.address.street}</span>
          </div>
        </>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
};

export default User;
