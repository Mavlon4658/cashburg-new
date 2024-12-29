import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Auth from './layout/Auth.jsx';

function App() {
  const [show, setShow] = useState(true);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/auth" element={<Auth setShow={setShow} />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>

        <Link 
          to={'/auth/register'} 
          className={`text-white text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${!show ? 'hidden' : ''}`}
        >Register / Login</Link>
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
