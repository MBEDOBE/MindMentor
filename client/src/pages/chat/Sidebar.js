import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userChatRoute, allUsersRoute } from "../api-routes/APIRoutes";

const Sidebar = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chats, setChats] = useState([]);

  //Current User details
  const [userName, setUsername] = useState("");
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [userId, setUserId] = useState(undefined);

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
        setfullName(getFullname);
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
        const response = await axios.get(`${allUsersRoute}/${userId}`);
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

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://th.bing.com/th/id/OIP.M6W6kdu53XZ356qV8lNQvQHaE7?w=288&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {contacts.map((contact) => (
          <SidebarChat
            contacts={contacts}
            key={contact._id}
            id={contact._id}
            username={contact.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
