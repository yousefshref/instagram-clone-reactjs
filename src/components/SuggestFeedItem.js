import { Avatar } from "@mui/material";
import React from "react";
import "./css/SuggestFeedItem.css";

const SuggestFeedItem = () => {
  return (
    <div className="all__suggestfeeditem">
      <div className="suggestfeeditem">
        <div className="suggestfeeditem__avatar">
          <i>
            <Avatar sx={{ width: "55px", height: "55px" }} />
          </i>
        </div>
        <div className="suggestfeeditem__name">
          <h4>someone name</h4>
        </div>
        <div className="suggestfeeditem__follow__button">
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default SuggestFeedItem;
