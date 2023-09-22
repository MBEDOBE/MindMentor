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
<<<<<<< HEAD
        <h2>User Name</h2>
=======
        <h2>Other Users</h2>
>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d
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
