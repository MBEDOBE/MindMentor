import React, { useEffect, useState, useRef } from "react";
import "./Chatbody.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Picker from "emoji-picker-react";
import axios from "axios";
import { addMessageRoute, getMessageRoute } from "../api-routes/APIRoutes";
import { v4 as uuidv4 } from "uuid";

function Chatbody({ currentChat, userId, socket }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [messageArrival, setMessageArrival] = useState(null);
  const scrollRef = useRef();
  const [lastReceivedMessage, setLastReceivedMessage] = useState(null);

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
    const timeStamp = new Date(); // Get the current timestamp
    await axios.post(addMessageRoute, {
      from: userId,
      to: currentChat._id,
      message: msg,
      timeStamp: timeStamp, // Add the timeStamp property to the message
    });
    socket.current.emit("send-msg", {
      from: userId,
      to: currentChat._id,
      message: msg,
      timeStamp: timeStamp, // Add the timeStamp property to the socket message
    });

    const msgs = [...messages];
    const newMessage = { fromSelf: true, message: msg, timeStamp };
    msgs.push(newMessage); // Add fromSelf, message and timeStamp to the new message
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      const timeStamp = new Date();
      socket.current.on("msg-recieve", (msg) => {
        setMessageArrival({
          fromSelf: false,
          message: msg,
          timeStamp: timeStamp,
        });
      });
    }
  }, []);

  useEffect(() => {
    messageArrival && setMessages((prev) => [...prev, messageArrival]);

    // Check if the message was received from the other user (not self)
    if (currentChat._id !== userId) {
      setLastReceivedMessage(messageArrival);
    }
  }, [messageArrival]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (currentChat) {
      const fetchData = async () => {
        try {
          const response = await axios.post(getMessageRoute, {
            to: currentChat._id,
            from: userId,
          });
          setMessages(response.data);
          // Find the last message sent by the other user
          for (let i = response.data.length - 1; i >= 0; i--) {
            if (
              response.data[i].from !== userId &&
              response.data[i].fromSelf == false
            ) {
              setLastReceivedMessage(response.data[i]);
              break;
            }
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error); // Set error state in case of an error
        }
      };

      fetchData();
    }
  }, [currentChat]);

  return (
    <div className="chatbody">
      <div className="chatbody_header">
        <Avatar />
        <div className="chatbody_headerInfo">
          <h3>{currentChat.username}</h3>
          {lastReceivedMessage ? (
            <p>
              Last seen {new Date(lastReceivedMessage.timeStamp).toUTCString()}
            </p>
          ) : (
            <p>No received messages</p>
          )}
        </div>
      </div>
      <div className="chatbody_body">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content">
                  <p>
                    {message.message}
                    <span className="chat_timestamp">
                      <span>{new Date(message.timeStamp).toUTCString()}</span>
                    </span>
                  </p>
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
          <span className="chat_name">{currentChat.username}</span>Hi friend
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

export default Chatbody;
