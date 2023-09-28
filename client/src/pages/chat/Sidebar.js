import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { userChatRoute, userRoute } from "../api-routes/APIRoutes";

const Sidebar = () => {
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState("");
  const [user_id, setUser_id] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("mindmentor-user");

    if (currentUser) {
      // currentUser is a string in this case; you may want to parse it if it's stored as JSON
      // Example parsing JSON:
      const currentUserObjects = JSON.parse(currentUser);

      // Accessing the username property
      const getUserDetails = currentUserObjects;
      const getUser_id = currentUserObjects._id;

      // Seting the username in the component's state
      setUser(getUserDetails);
      setUser_id(getUser_id);
    }
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await Axios.get(`${userChatRoute}/${user_id}`);
        setChats(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getChats();
  }, [user]);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://th.bing.com/th/id/OIP.M6W6kdu53XZ356qV8lNQvQHaE7?w=288&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
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
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
