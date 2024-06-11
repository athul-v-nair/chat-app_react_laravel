import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginHandler from '../Components/Login/LoginHandler';
import { UserProvider } from '../Context/UserContext/UserContext';
import ChatHandler from '../Components/Chat/ChatHandler';

const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <UserProvider>
        <Routes>
            <Route path='/' element={<LoginHandler />}></Route>
            <Route path='/chat' element={<ChatHandler />}></Route>
        </Routes>
    </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes
