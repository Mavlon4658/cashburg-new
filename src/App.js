import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Auth from './layout/Auth.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>

        <Link to={'/auth/register'} className='text-white text-3xl'>Register</Link>
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
