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
import Picker from "emoji-picker-react";
import axios from "axios";
import { addMessageRoute, getMessageRoute } from "../api-routes/APIRoutes";

function Chat({ currentChat, userId }) {
  const navigate = useNavigate();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    navigate("/");
  };

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiCLick = (emoji) => {
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };

  const sendMsg = (e) => {
    e.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  const handleSendMsg = async (msg) => {
    await axios.post(addMessageRoute, {
      from: userId,
      to: currentChat._id,
      message: msg,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(getMessageRoute, {
          to: currentChat._id,
          from: userId,
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Set error state in case of an error
      }
    };

    fetchData();
  }, [currentChat]);

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
        {messages.map((message) => {
          return (
            <div>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
        {/*<div className={`chat_reciever ${true && "chat_message"}`}>
          <span className="chat_name">Taiwo</span>Hello there
          <span className="chat_timestamp">8:00pm</span>
        </div>
        <div className="chat_message">
          <span className="chat_name">Daniel</span>Hi friend
          <span className="chat_timestamp">8:42pm</span>
        </div>*/}
      </div>
      <div className="chatbody_footer">
        <InsertEmoticonIcon onClick={handleEmojiPickerHideShow} />
        {showEmojiPicker && <Picker onEmojiClick={handleEmojiCLick} />}
        <form>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMsg} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
