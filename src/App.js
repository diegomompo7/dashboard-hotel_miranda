import './App.css';
import {ContactPage} from "./pages/ContactPage"
import {DashboardPage} from "./pages/DashboardPage"
import {GuestDetailPage} from "./pages/GuestDetailPage"
import { GuestsPage } from "./pages/GuestsPage"
import {LoginPage} from "./pages/LoginPage"
import newUserPage from "./pages/newUserPage"
import newRoomPage from "./pages/newRoomPage"
import {RoomsListPage} from "./pages/RoomsListPage"
import { Root } from './pages/Root';
import {UserPage} from "./pages/UserPage";
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
