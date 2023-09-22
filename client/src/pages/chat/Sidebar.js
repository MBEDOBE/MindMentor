import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";
<<<<<<< HEAD
//import axios from "./axios";

const sidebar = ({ contacts, currentUser }) => {
  //const [users, setUsers] = useState([]);

  /*useEffect(() => {
    axios.get("./users/sync").then((response) => {
      setUsers(response.data);
    });
  }, []);*/

=======
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d
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
<<<<<<< HEAD
        <SidebarChat />
=======
>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default sidebar;
=======
export default Sidebar;
>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d
