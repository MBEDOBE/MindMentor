import React, { useState } from "react";
import "./Chatbody.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
//import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  /*const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input, 
      name: "DEMO",
      timestamp: "Just now",
      recieved: false,
    });

    setInput("");
  };*/

  return (
    <div className="chatbody">
      <div className="chatbody_header">
        <Avatar />
        <div className="chatbody_headerInfo">
          <h3>User name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chatbody_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatbody_body">
        <div className={`chat_reciever ${true && "chat_message"}`}>
          <span className="chat_name">Taiwo</span>Hello there
          <span className="chat_timestamp">8:00pm</span>
        </div>
        <div className="chat_message">
          <span className="chat_name">Daniel</span>Hi friend
          <span className="chat_timestamp">8:42pm</span>
        </div>
      </div>
      <div className="chatbody_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button /*onClick={sendMessage}*/ type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
