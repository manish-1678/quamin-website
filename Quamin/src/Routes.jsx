import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Blog from './Pages/Blog';
import JobApplication from './Pages/JobApplication';
import ServiceBooking from './Pages/ServiceBooking';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/service-booking" element={<ServiceBooking />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
