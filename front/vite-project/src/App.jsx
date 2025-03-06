import './reset.css'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { Login } from './views/Login/Login'
import { Register } from './views/Register/Register'
import { Navbar } from './views/Navbar/Navbar'
import { MyAppointment } from './views/Appointment/MyAppointments'
import { useContext, useEffect } from 'react'
import { usersContex } from './Contex/UsersContex'
import { AppointmentForm } from './views/CreateAppointment/AppointmentForm'
import { NotFounds } from './views/NotFound/NotFound'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const {user} = useContext(usersContex)

  useEffect(() => {
    const paths = ["/","/login", "/register", "/home", "/my-appointments", "/reservation"];
    if(!paths.includes(location.pathname)) navigate("*");

    if (user && location.pathname === "/") {
      navigate("/home")
    };
    
    if(!user && location.pathname !== "/login" && location.pathname !== "/register"){
      navigate("/login")
    };

    if (user && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/home")
    };
  }, [location.pathname, navigate, user])


  return (
    <>
      {(location.pathname !== '/login' && <Navbar />) && (location.pathname !== '/register' && <Navbar />) && (location.pathname !== '/*' && <Navbar />)}
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/my-appointments' element={<MyAppointment />}/>
        <Route path='/reservation' element={<AppointmentForm />} />
        <Route  path='*' element={<NotFounds />}/>
      </Routes>
    </>
  )
}

export default App
