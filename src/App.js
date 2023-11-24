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
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<LoginPage/>}/>
          <Route element={<Root />}>
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
