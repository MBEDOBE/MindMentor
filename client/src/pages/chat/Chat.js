import "./chat.css";
import Sidebar from "./Sidebar";
import Chatbody from "./Chatbody";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import Pusher from "pusher-js";
//import axios from "./axios";

const Chat = () => {
  const navigate = useNavigate();

  /*  useEffect(() => {
    axios.get("./messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("4c53fdd4600ef0faace8", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
*/

  return (
    <div className="chat">
      <div className="chat_body">
        <Sidebar />
        <Chatbody />
      </div>
    </div>
  );
};

export default Chat;
