// App.js
import React from 'react';
import './index.css'; // Assurez-vous d'avoir un fichier CSS pour vos styles personnalisés
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainBanner from './components/MainBanner';
import BrandsSection from './components/BrandsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import SignIn from './Pages/SignIn/SignIn';
import Error from './Pages/error';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header />}>
          <Route index element={<MainBanner />} />
          <Route path='about' element={<AboutSection />} />
          <Route path='signin' element={<SignIn></SignIn>} />
          <Route path='signup' element={<SignUp></SignUp>} />
          <Route path='*' element={<Error />} />
        </Route>
   </Routes>
   <Footer />
    </BrowserRouter></>
  );
}

export default App;
