import React from 'react'
import Navbar from './Components/Navbar'
import {useLocation,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Allrooms from './pages/Allrooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './Components/HotelReg'
import Layout from './pages/HotelOwner/Layout'
import Dashboard from './pages/HotelOwner/Dashboard'
import ListRoom from './pages/HotelOwner/ListRoom'
import Addroom from './pages/HotelOwner/Addroom'
import Contact from './Components/Contact'
import About from './Components/About'
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
    {!isOwnerPath && <Navbar/>}
    { false && <HotelReg/>}
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Allrooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/mybookings' element={<MyBookings/>}/>
        <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='addroom' element={<Addroom/>}/>
            <Route path='Listrooms' element={<ListRoom/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
    { !isOwnerPath  && <Footer/>}

    </>
  )
}

export default App