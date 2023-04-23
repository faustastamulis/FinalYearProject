import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

export const ShowNavBar = ({children}) => {

const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        console.log('location changed', location);
        if (location.pathname === '/' || location.pathname === '/appointments' || location.pathname === '/profile' 
        || location.pathname === '/apply-doctor' || location.pathname === '/admin/doctors' || location.pathname === '/admin/users' || location.pathname === '/doctor/book-appointment/:doctorId' || location.pathname === '/doctor/profile/:id' || location.pathname === '/notification') {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
    }, [location]);



  return (
    <div>
        {showNavBar && children}
    </div>
  );
}