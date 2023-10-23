import React from "react";
import "./Welcome.css";

export default function Welcome({ username }) {
  return (
    <div className="welcome">
      <img
        src="./animated-chipmunk-hello-hi-dndswigdqztb8vxo.gif"
        alt="Hello"
      />
      <h1>
        Welcome, <span>{username}</span>
      </h1>
      <h2>Please select a chat to start your messaging</h2>
    </div>
  );
}
