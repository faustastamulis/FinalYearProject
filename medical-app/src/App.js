import "./App.css";
import React, { useState } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import { Routes, Route } from "react-router-dom";
import  Register  from "./components/pages/Register";
import  Login  from "./components/pages/Login";
import {Layout} from "./components/pages/Layout";
import { ShowNavBar } from "./components/ShowNavBar/ShowNavBar";
import ProtectedRoute from "./components/Other/ProtectedRoute";
import ApplyDoctor from "./components/pages/ApplyDoctor";
import Users from "../src/components/pages/admin/Users";
import Doctors from "../src/components/pages/admin/Doctors";
import NotificationPage from "../src/components/pages/NotificationPage";
import Profile from "../src/components/pages/doctor/Profile";
import BookingPage from "./components/pages/BookingPage";
import Appointments from "./components/pages/Appointments";
import DoctorAppointments from "../src/components/pages/doctor/DoctorAppointments";
import PublicRoute from "./components/Other/PublicRoute";
import HomePage from "./components/pages/HomePage";


function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
        <ShowNavBar>
          <Navbar/>
        </ShowNavBar>
          <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoute>
                  <DoctorAppointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
    </>
  );
}

export default App;
