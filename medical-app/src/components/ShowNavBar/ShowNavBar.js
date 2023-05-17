import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

export const ShowNavBar = ({children}) => {

const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        console.log('location changed', location);
        if (location.pathname === '/login' || location.pathname === '/contact' || location.pathname === '/home' || location.pathname === '/about' ||  location.pathname === '/register') {
            setShowNavBar(true);
        } else {
            setShowNavBar(false);
        }
    }, [location]);



  return (
    <div>
        {showNavBar && children}
    </div>
  );
}