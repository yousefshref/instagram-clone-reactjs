import { Avatar } from "@mui/material";
import React from "react";
import './css/SuggestsItem.css'
const SuggestsItem = () => {
  return (
    <div className="widget__down__item">
      <div className="widget__down__item__avatar">
        <i>
          <Avatar />
        </i>
      </div>
      <div className="widget__down__item__name">
        <h4>name of suggets</h4>
        <p>Follows you</p>
      </div>
      <div className="widget__down__item__Follow">
        <h4>Follow</h4>
      </div>
    </div>
  );
};

export default SuggestsItem;
