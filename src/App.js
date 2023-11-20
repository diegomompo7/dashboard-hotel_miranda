import './App.css';
import ContactPage from "./components/ContactPage"
import DashboardPage from "./components/DashboardPage"
import GuestDetailPage from "./components/GuestDetailPage"
import GuestsPage from "./components/GuestsPage"
import LoginPage from "./components/LoginPage"
import newUserPage from "./components/newUserPage"
import newRoomPage from "./components/newRoomPage"
import RoomsListPage from "./components/RoomsListPage"
import { Root } from './components/Root';
import UserPage from "./components/UserPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<LoginPage/>}/>
          <Route element={<Root />}>
            <Route path='/' element={<DashboardPage />}/>
            <Route path='/booking' element={<GuestsPage />}/>
            <Route path='/booking/:id' element={<GuestDetailPage />}/>
            <Route path='/rooms' element={<RoomsListPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/users' element={<UserPage />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
