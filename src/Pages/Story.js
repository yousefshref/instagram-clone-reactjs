import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import StoryItem from "../components/StoryItem";
import "../css/Story.css";
import { UserAuth } from "../utlits/AuthContext";

const Story = () => {
  const {user} = UserAuth()
  return (
    <div className="story">
      <button
        id="left"
        onClick={() => {
          document.getElementById("content").scrollLeft -= 200;
        }}
      >
        Left
      </button>
      <div id="content" className="story__container">
        <i>
          <div className="create__story">
            <i>
              <Avatar src={user.photoURL}/>
            </i>
            <p>create your story</p>
          </div>
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
        <i>
          <StoryItem />
        </i>
      </div>
      <button
        id="right"
        onClick={() => {
          document.getElementById("content").scrollLeft += 200;
        }}
      >
        Ritgh
      </button>
    </div>
  );
};

export default Story;
