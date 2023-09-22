import "./chat.css";
import Sidebar from "./Sidebar";
import Chatbody from "./Chatbody";
import React, { useEffect, useState } from "react";
import { useNavigate, userDetails } from "react-router-dom";
//import Pusher from "pusher-js";
import axios from "axios";
import { UserRoute, allUsersRoute } from "../api-routes/APIRoutes";

const Chat = () => {
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
