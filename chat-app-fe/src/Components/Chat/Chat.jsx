import React from "react";
import styles from "./Chat.module.css";
import { Form } from "react-bootstrap";
import MessageHandler from "../Messages/MessageHandler";
const Chat = ({
  username,
  handleChange,
  handleSubmit,
  messageSent,
  message,
}) => {
  return (
    <div className={styles["chatContainer"]}>
      <header className={`${styles["chatContainer__chatHeader"]}`}>
        <h3>Hello-World</h3>
        <h5>{username}</h5>
      </header>
      <div className={styles["chatContainer__chatBody"]}>
        <div className={styles["chatContainer__chatBody__messages"]}>
          <MessageHandler messageSent={messageSent}/>
        </div>
        <div>
          <Form
            className={styles["chatContainer__chatBody__form"]}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Type your message here"
              onChange={handleChange}
              value={message}
            />
            <button type="submit">Send</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
