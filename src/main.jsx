import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Study from './components/Study';
import MockInterview from './components/MockInterview';
import Header from './components/Header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study/:subject" element={<Study />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        {/* Add other routes if necessary */}
      </Routes>
    </Router>
  </StrictMode>
)
