import React from 'react'
import Message from './Message'

const MessageHandler = ({messageSent}) => {
  return (
    <>
      {messageSent.map((message, index) => (
          <h2 key={index} >
            <Message message={message}/>
          </h2>
        ))}
      
    </>
  )
}

export default MessageHandler
