import { React, useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { SignUp } from './pages/Signup';
import { Login } from './pages/Login';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Topbar } from '@/components/Topbar';
import { WhatsAppButton } from './components/Whatsapp';



const client = new QueryClient();
function App() {

  
  return (
    <QueryClientProvider client={client}>
    <BrowserRouter>
    <Topbar/>
    <Navbar />
    <WhatsAppButton/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
