import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SidebarChat from "./SidebarChat";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ contacts, changeChat }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://th.bing.com/th/id/OIP.M6W6kdu53XZ356qV8lNQvQHaE7?w=288&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <div className="sidebar_headerRight">
          <IconButton onClick={(e) => handleClick(e)}>
            <HomeIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        <SidebarChat contacts={contacts} changeChat={changeChat} />
      </div>
    </div>
  );
};

export default Sidebar;
