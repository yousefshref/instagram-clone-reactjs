import React from "react";
import SuggestFeedItem from "../components/SuggestFeedItem";
import '../css/SuggestFeed.css'

const SuggestsFeed = () => {

  return (
    <div className="all_suggestsfeed">
      <div className="suggestsfeed">
        <div className="suggestfeed__for__you">
          <h3>Suggest For You</h3>
          <p>See All</p>
        </div>
        <div className="buttons__left">
          <button  onClick={() => {document.getElementById('contennt').scrollLeft -= 200}} id="lefttt">left</button>
          <button  onClick={() => {document.getElementById('contennt').scrollLeft += 200}} id="righttt">right</button>
        </div>
        <div className="suggestfeeditems" id="contennt">
          <i><SuggestFeedItem /></i>
          <i><SuggestFeedItem /></i>
          <i><SuggestFeedItem /></i>
          <i><SuggestFeedItem /></i>
          <i><SuggestFeedItem /></i>
          <i><SuggestFeedItem /></i>
        </div>
      </div>
    </div>
  );
};

export default SuggestsFeed;
