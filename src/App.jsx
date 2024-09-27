import { React, useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';
import { About } from './pages/About';




const client = new QueryClient();
function App() {

  
  return (
    <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
