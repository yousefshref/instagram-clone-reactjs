import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlinePlusSquare,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCompass,
  AiOutlineHeart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";
import { UserAuth } from "../utlits/AuthContext";

const Header = () => {
  const { user, logOut } = UserAuth();
  const nav = useNavigate();

  const handelLogOut = async () => {
    try {
      await logOut();
      window.location.pathname = "/login";
    } catch (e) {
      console.log(e.message);
    }
  };

  var avatar__displaying = document.getElementById("avatar__displaying");

  const handelAvatarClicked = (e) => {
    e.preventDefault()
    if (avatar__displaying.style.display === "none") {
      avatar__displaying.style.display = "block";
    } else {
      avatar__displaying.style.display = "none";
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        </div>
        <div className="header__center">
          <i>
            <AiOutlineSearch />
          </i>
          <input type={"search"} placeholder={"Search"} />
        </div>
        <div className="header__right">
          <i>
            <AiOutlineHome />
          </i>
          <i>
            <AiOutlineMessage />
          </i>
          <i>
            <Link to='/post'>
              <AiOutlinePlusSquare />
            </Link>
          </i>
          <i>
            <AiOutlineCompass />
          </i>
          <i>
            <AiOutlineHeart />
          </i>
          <span onClick={handelAvatarClicked} id="avatar__clicked">
            <Avatar
              src={user.photoURL}
              sx={{ width: "26px", height: "26px" }}
            />
          </span>
        </div>
        <div
          id="avatar__displaying"
          style={{ cursor: "pointer" }}
          className="header__i"
        >
          <i onClick={handelLogOut}>Logout</i>
        </div>
      </div>
      <hr />
      
    </>
  );
};

export default Header;
