import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Contact } from './pages/Contact';
import HomePage from './pages/HomePage';
import { Login } from './pages/login';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
