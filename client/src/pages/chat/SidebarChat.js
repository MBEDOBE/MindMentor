import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat({ addNewChat }) {
  const createChat = () => {
    const userName = prompt("Please enter a user to chat with");

    if (userName) {
      //input database stuffs here
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>User Name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
