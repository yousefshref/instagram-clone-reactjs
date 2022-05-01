import React from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCompass,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./css/Hidding__Footer.css";

const Hidding__Footer = () => {
  return (
    <div className="hiddien__footer">
      <div id="hiddien__footter" className="hidden__upDiv">
        <p>Use the App</p>
        <span
          onClick={() => {
            document.getElementById("hiddien__footter").style.display = "none";
          }}
        >
          close
        </span>
      </div>
      <div className="hidden__downDiv">
        <i>
          <AiOutlineHome />
        </i>
        <i>
          <AiOutlineMessage />
        </i>
        <i>
          <Link to={"/post"}>
            <AiOutlinePlusSquare />
          </Link>
        </i>
        <i>
          <AiOutlineCompass />
        </i>
        <i>
          <AiOutlineHeart />
        </i>
      </div>
    </div>
  );
};

export default Hidding__Footer;
