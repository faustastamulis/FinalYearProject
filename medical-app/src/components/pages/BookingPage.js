import React, { useState, useEffect } from "react";
import {Layout} from "./Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Input, message} from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import {Calendar} from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from 'react-bootstrap-time-picker';


  const BookingPage = () => {
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    const [doctors, setDoctors] = useState([]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState();
    const [isAvailable, setIsAvailable] = useState(false);
    const dispatch = useDispatch();
    // login user data
    const getUserData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/doctor/getDoctorById",
          { doctorId: params.doctorId },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (res.data.success) {
          setDoctors(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // ============ handle availiblity
    const handleAvailability = async () => {
      try {
        dispatch(showLoading());
        const res = await axios.post(
          "http://localhost:8080/api/v1/user/booking-availbility",
          { doctorId: params.doctorId, date, time },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
        if (res.data.success) {
          setIsAvailable(true);
          console.log(isAvailable);
          message.success(res.data.message);
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };
    // =============== booking func
    const handleBooking = async () => {
      try {
        setIsAvailable(true);
        if (!date && !time) {
          return alert("Date & Time Required");
        }
        dispatch(showLoading());
        const res = await axios.post(
          "http://localhost:8080/api/v1/user/book-appointment",
          {
            doctorId: params.doctorId,
            userId: user._id,
            doctorInfo: doctors,
            userInfo: user,
            date: date,
            time: time,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
        if (res.data.success) {
          message.success(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUserData();
      //eslint-disable-next-line
    }, []);
    return (
      <Layout>
        <h3>Booking Page</h3>
        <div className="container m-2">
          {doctors && (
            <div>
              <h4>
                Dr.{doctors.firstName} {doctors.lastName}
              </h4>
              <h4>Fees : {doctors.feesPerCunsaltation}</h4>
              <h4>
                Timings : {doctors.timings && doctors.timings[0]} -{" "}
                {doctors.timings && doctors.timings[1]}{" "}
              </h4>
              <div className="d-flex flex-column w-50">
                <Calendar  
                  aria-required={"true"}
                  format="YYYY-MM-DD"
                  className="mt-3"
                  onChange={(value) => {
                    setIsAvailable(false);
                    setDate(moment(value).format("YYYY-MM-DD"));
                  }}
                  />
                <TimePicker
                start="06:00" 
                end="21:00" 
                step={30}
                value = "null"
                 aria-required={"true"}
                 format="HH:mm"
                 className="mt-3"
                 onChange={(value) => {
                   setIsAvailable(false);
                   setTime(moment(value).format("HH:mm"));
                 }}
                />
  
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleAvailability}
                >
                  Check Availability
                </button>
  
                {isAvailable && (<button className="btn btn-dark mt-2" onClick={handleBooking}> Book Now </button>) }
                 
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  };
  
  export default BookingPage;