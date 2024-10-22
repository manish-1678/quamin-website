import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Blog from "./Pages/Blog/Hero/Blog";
import JobApplication from "./Pages/JobApplication";
import ServiceBooking from "./Pages/ServiceBooking";
import NotFound404 from "./Pages/NotFound404";
import BlogDetail from "./Pages/Blog/BlogDetail/BlogDetail";
import Admin from "./Pages/Admin/Admin";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/service-booking" element={<ServiceBooking />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/*" element={<NotFound404 />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
