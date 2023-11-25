import './App.css';
import {ContactPage} from "./contact/ContactPage"
import {DashboardPage} from "./dashboard/DashboardPage"
import {GuestDetailPage} from "./details/GuestDetailPage"
import { GuestsPage } from "./guest/GuestsPage"
import {LoginPage} from "./login/LoginPage"
import newUserPage from "./user/newUserPage"
import newRoomPage from "./rooms/newRoomPage"
import {RoomsListPage} from "./rooms/RoomsListPage"
import { Root } from './root/Root';
import {UserPage} from "./user/UserPage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import users from "./data/users.json"


function App() {

  let checkLogin = false
  const[userLogin , setUserLogin] = useState ("");

  useEffect (() => {
    const userLogged = localStorage.getItem("email")
    userLogged && setUserLogin(userLogged)
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
      <BrowserRouter>
      
      {
        (checkLogin || userLogin !== "") ? <Navigate to="/"></Navigate> : <Navigate to="/login"></Navigate>
      }


        <Routes>
        <Route path='/login' element={<LoginPage  handleOnSubmit={handleOnSubmit}/>}/>
          <Route path="/" element={<Root />}>
            <Route path='/' element={<DashboardPage />}/>
            <Route path='booking' element={<GuestsPage />}/>
            <Route path='booking/:id' element={<GuestDetailPage />}/>
            <Route path='rooms' element={<RoomsListPage />}/>
            <Route path='contact' element={<ContactPage />}/>
            <Route path='users' element={<UserPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
