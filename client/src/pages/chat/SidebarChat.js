import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat({ addNewChat, contacts, changeChat }) {
  const [currentSelected, setCurrentSelected] = useState(undefined);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  const createChat = () => {
    const userName = prompt("Please enter a user to chat with");

    if (userName) {
      //input database stuffs here
    }
  };

  return !addNewChat ? (
    <div className="contacts">
      {contacts.map((contact, index) => {
        return (
          <div
            key={index}
            className={`contact ${index === currentSelected ? "selected" : ""}`}
            onClick={() => changeCurrentChat(index, contact)}
          >
            {contact.avatarImage ? (
              <img src={contact.avatarImage} alt="" />
            ) : (
              <Avatar />
            )}
            <div className="username">
              <h2>{contact.username}</h2>
              <p>This is the last message</p>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
