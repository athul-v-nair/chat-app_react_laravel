import React, { useContext, useEffect, useState } from "react";
import Chat from "./Chat";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import axios from "axios";
import { UserContext } from "../../Context/UserContext/UserContext";

const ChatHandler = () => {
  const { username } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState([]);
  useEffect(() => {
    // Set up Laravel Echo with Pusher
    window.Pusher = Pusher;
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "abcdefg",
      cluster: "mt1",
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
      disableStatus: true,
    });

    // Make a request to your Laravel endpoint
    axios
      .get("http://localhost:8000/api/testwebsockets")
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });

    // Listen for WebSocket events
    const channel = window.Echo.channel("test-channel");
    channel.listen(".websocket-test", (e) => {
      console.log("event: ", e);
    });
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessageSent((prevMessages) => [...prevMessages, message]);
      setMessage("");
    }
  };

  return (
    <>
      <Chat
        username={username}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        messageSent={messageSent}
        message={message}
      />
    </>
  );
};

export default ChatHandler;
