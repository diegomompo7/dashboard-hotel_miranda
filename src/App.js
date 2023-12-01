/* eslint-disable react/jsx-no-undef */
import './App.css';
import {ContactPage} from "./components/contact/ContactPage"
import {DashboardPage} from "./components/dashboard/DashboardPage"
import {GuestDetailPage} from "./components/details/GuestDetailPage"
import { GuestsPage } from "./components/guest/GuestsPage"
import {LoginPage} from "./components/login/LoginPage"
import { EditUserPage } from './components/user/EditUserPage';
import { NewUserPage } from './components/user/NewUserPage';
import {NewRoomPage} from "./components/rooms/NewRoomPage"
import {RoomsListPage} from "./components/rooms/RoomsListPage"
import { Root } from './components/root/Root';
import {UserPage} from "./components/user/UserPage";
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import users from "./data/users.json"
import { EditRoomsPage } from './components/rooms/EditRoomsPage';
import AuthContext from './AuthContext';


function App() {



  let checkLogin = false
  const[userLogin , setUserLogin] = useState ("");


  useEffect (() => {
    const userLogged = localStorage.getItem("email")
    userLogged && setUserLogin(userLogged), checkLogin=true
  }, [])


  const handleOnSubmit = (e) => {
    users.forEach(user => {

      if(user.email === e.target[0].value && user.password === e.target[1].value){
        localStorage.setItem("email", user.email)
        return checkLogin = true

      }else{
        checkLogin = false
      }
    })

}



  return (
    <div className="app">
      
      <AuthContext.Provider value={{userLogin}}>
      <BrowserRouter>

      {(!checkLogin) && <Navigate to="/login"/>}
    
        <Routes>
        <Route path='/login' element={<LoginPage  handleOnSubmit={handleOnSubmit} checkLogin={checkLogin} userLogin={userLogin}/>}/>
        <Route path="/createUser" element={<NewUserPage />} />
        <Route path="/createUser/:id" element={<EditUserPage />} />
        <Route path="/createRoom" element={<NewRoomPage />} />
        <Route path="/createRoom/:id" element={<EditRoomsPage />} />
            <Route path="/" element={<Root />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="booking" element={<GuestsPage />} />
              <Route path="booking/:id" element={<GuestDetailPage />} />
              <Route path="rooms" element={<RoomsListPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="users" element={<UserPage />} />
            </Route>
        </Routes>

      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

;
export default App ;
