import React, { useState, useEffect } from "react";
import "./User.css";

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
              src="https://images-na.ssl-images-amazon.com/images/I/8144w5nn9-L._AC_SL1500_.jpg"
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
