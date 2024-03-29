/* eslint-disable react/jsx-no-undef */
import './App.css';
import {ContactPage} from "./pages/contact/ContactPage"
import {DashboardPage} from "./pages/dashboard/DashboardPage"
import { BookingDetailPage } from './pages/details/BookingDetailPage';
import { BookingPage } from './pages/booking/BookingPage';
import {LoginPage} from "./pages/login/LoginPage"
import { EditUserPage } from './pages/user/EditUserPage';
import { NewUserPage } from './pages/user/NewUserPage';
import {NewRoomPage} from "./pages/rooms/NewRoomPage"
import {RoomsListPage} from "./pages/rooms/RoomsListPage"
import { Root } from './pages/root/Root';
import {UserPage} from "./pages/user/UserPage";
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import users from "./data/users.json"
import { EditRoomsPage } from './pages/rooms/EditRoomsPage';
import AuthContext from './AuthContext';
import { NewBookingPage } from './pages/booking/NewBookingPage';


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

    
        <Routes>
        <Route path='/login' element={<LoginPage  handleOnSubmit={handleOnSubmit} checkLogin={checkLogin} userLogin={userLogin}/>}/>
        <Route path="/createUser" element={<NewUserPage />} />
        <Route path="/createUser/:id" element={<EditUserPage />} />
        <Route path="/createRoom" element={<NewRoomPage />} />
        <Route path="/createRoom/:id" element={<EditRoomsPage />} />
        <Route path="/createBooking/" element={<NewBookingPage />} />
            <Route path="/" element={<Root />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="booking" element={<BookingPage />} />
              <Route path="booking/:id" element={<BookingDetailPage />} />
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
