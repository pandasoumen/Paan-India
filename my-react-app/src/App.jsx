import { useState } from 'react';
import './App.css';
import Home from './HomeSection/Home';
import OrderPage from './components/OrderPage';
import AccountPage from './components/AccountPage';
import ContactPage from './components/ContactPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './HomeSection/Navbar';
import LoginPage from './Pages/LoginPage';
import SignPage from './Pages/SignPage';
import Footer from './HomeSection/Footer';
import AboutusPage from './components/AboutusPage';
import { useNavigate } from 'react-router-dom';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // function changeHandler() {
  //   if (<ContactPage />) {
  //     return <ContactPage />;
  //   }
  // }


  // isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orderpage' element={<OrderPage />} />
        <Route path='/aboutuspage' element={<AboutusPage />} />
        <Route path='/contactpage' element={<ContactPage />} />
        <Route path='/accountpage' element={<AccountPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignPage setIsLoggedIn={setIsLoggedIn}  />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}
