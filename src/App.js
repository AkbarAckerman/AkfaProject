import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import AdminPage from './AdminPage';
import CustomerPage from './CustomerPage';
import AboutPage from './AboutPage';
import axios from "axios";
import './App.css';

const NavbarButton = ({ to, children }) => (
  <motion.li
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link to={to} className="nav-link">
      {children}
    </Link>
  </motion.li>
);

const LoginPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/admin');
  };

  const handleCustomerLogin = () => {
    navigate('/customer');
  };

  return (
    <div className="login-container">
      <motion.h1
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        Login Page
      </motion.h1>
      <div className="button-container">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdminLogin}
          className="login-btn"
        >
          Log in as Admin
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCustomerLogin}
          className="login-btn"
        >
          Log in as Customer
        </motion.button>
      </div>
    </div>
  );
};

const App = () => {
  const [history, setHistory] = useState([]);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleCloseOffCanvas = () => setShowOffCanvas(false);
  const handleShowOffCanvas = () => setShowOffCanvas(true);

  const getHistoryApi = () => {
    axios.get('https://db-project-btzw.onrender.com/history')
      .then(res => {
        console.log(res.data);
        setHistory(res.data);
      }).catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistoryApi();
  }, []);

  return (
    <Router>
      <div className="full-height">
        <nav className="navbar">
          <ul>
            <li className="logo"><div><img src="./images/train1.png" alt=""/></div></li>
            <NavbarButton to="/">Main Login</NavbarButton>
            <li>
              <Button className="history-btn" variant="primary" onClick={handleShowOffCanvas}>
                History
              </Button>
            </li>
            <li>
              <div className={`offcanvas ${showOffCanvas ? 'show' : ''}`}>
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Purchased Tickets</h5>
                  <button type="button" className="btn-close" onClick={handleCloseOffCanvas}></button>
                </div>
                <div className="offcanvas-body">
                  <table>
                    <thead>
                      <tr>
                        <th>Routes</th>
                        <th>Prices</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((historyItem, index) => (
                        <tr key={index}>
                          <td>{historyItem.history_name}</td>
                          <td>${historyItem.history_price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </li>
            <NavbarButton to="/about">About</NavbarButton>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
