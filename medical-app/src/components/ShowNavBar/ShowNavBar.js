import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

export const ShowNavBar = ({children}) => {

const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        console.log('location changed', location);
        if (location.pathname === '/main') {
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