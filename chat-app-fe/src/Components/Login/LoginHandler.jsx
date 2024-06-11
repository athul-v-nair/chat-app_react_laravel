import React, { useContext, useState } from 'react'
import Login from './Login'
import { UserContext } from '../../Context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginHandler = () => {
  const [typedUsername, setTypedUsername] = useState('');
  const { username ,setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const loginSubmission=(e)=>{
    e.preventDefault();
    setUsername(typedUsername);
    navigate('/chat')
  }
  return (
    <>
     <Login typedUsername={typedUsername} setTypedUsername={setTypedUsername} loginSubmission={loginSubmission}/>
    </>
  )
}

export default LoginHandler
