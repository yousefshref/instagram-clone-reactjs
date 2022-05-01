import { Avatar } from "@mui/material";
import React from "react";
import SuggestsItem from "../components/SuggestsItem";
import "../css/Widget.css";
import { UserAuth } from "../utlits/AuthContext";

const Widget = () => {
  const {user} = UserAuth()
  return (
    <div className="all__widget">
      <div className="widget">
        <div className="widget__up">
          <div className="widget__up__avatar">
            <i>
              <Avatar src={user.photoURL}/>
            </i>
          </div>
          <div className="widget__up__name">
            <h4>{user.displayName}</h4>
            <p>{user.email}</p>
          </div>
          <div className="widget__up__switch">
            <p>Switch</p>
          </div>
        </div>
        <div className="widget__suggest">
          <div className="widget__suggest__left">
            <h4>Suggestions For You</h4>
          </div>
          <div className="widget__suggest__right">
            <h4>See All</h4>
          </div>
        </div>
        <div className="widget__down">
          <i>
            <SuggestsItem />
          </i>
          <i>
            <SuggestsItem />
          </i>
          <i>
            <SuggestsItem />
          </i>
        </div>
      </div>
      <br />
      <p className="p__widget">
        About Help Press API Jobs Privacy Terms Locations Top Accounts Hashtags Language
        <br /><br />© 2022 INSTAGRAM FROM META
      </p>
    </div>
  );
};

export default Widget;
