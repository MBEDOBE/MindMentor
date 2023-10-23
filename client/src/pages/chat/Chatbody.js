import React, { useEffect, useState } from "react";
import "./Chatbody.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";

function Chat({ currentChat }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    navigate("/");
  };

  return (
    <div className="chatbody">
      <div className="chatbody_header">
        <Avatar />
        <div className="chatbody_headerInfo">
          <h3>{currentChat.username}</h3>
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
          <IconButton onClick={(e) => handleClick(e)}>
            <HomeIcon />
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
