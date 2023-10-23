import "./Chat.css";
import Sidebar from "./Sidebar";
import Chatbody from "./Chatbody";
import Welcome from "./Welcome";
import React, { useEffect, useState } from "react";
import {
  useNavigate,
  userDetails,
  Router,
  Route,
  Routes,
} from "react-router-dom";
//import Pusher from "pusher-js";
import axios from "axios";
import { UserRoute, getAllUsersRoute } from "../api-routes/APIRoutes";

const Chat = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);

  //Current User details
  const [username, setUsername] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("mindmentor-user")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const currentUser = localStorage.getItem("mindmentor-user");

    if (currentUser) {
      try {
        // Parse the currentUser string as JSON
        const currentUserObjects = JSON.parse(currentUser);

        // Accessing the username property
        const getUsername = currentUserObjects.username;
        const getFullname = currentUserObjects.fullname;
        const getEmail = currentUserObjects.email;
        const getProfession = currentUserObjects.profession;
        const getLocation = currentUserObjects.state_country;
        const getId = currentUserObjects._id;

        // Setting the username in the component's state
        setUsername(getUsername);
        setfullname(getFullname);
        setEmail(getEmail);
        setProfession(getProfession);
        setLocation(getLocation);
        setUserId(getId);
      } catch (e) {
        // Handle any parsing errors if the data is not valid JSON
        console.e("Error parsing this data:", e);
      }
    }
  }, []);

  {
    /*useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await Axios.get(`${userChatRoute}/${user_id}`);
        setChats(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getChats();
  }, [user]);*/
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${getAllUsersRoute}/${userId}`);
        setContacts(response.data);
        setLoading(false); // Set loading to false on successful response
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Set error state in case of an error
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, [userId]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <div className="chat">
      <div className="chat_body">
        <Sidebar contacts={contacts} changeChat={handleChatChange} />
        {currentChat === undefined ? (
          <Welcome username={username} />
        ) : (
          <Chatbody currentChat={currentChat} />
        )}
      </div>
    </div>
  );
};

export default Chat;
