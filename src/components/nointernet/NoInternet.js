import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const NoInternet = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      console.log('Online status changed:', navigator.onLine);
      setIsOnline(navigator.onLine);
    };

    console.log('Adding event listeners');
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Check the initial status
    console.log('Initial online status:', navigator.onLine);

    return () => {
      console.log('Removing event listeners');
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);
    return (
        <div>
            {!isOnline && (
                <div style={{ color: 'gray', padding: '10px', backgroundColor: 'white', textAlign: 'center' }}>
                    No Internet Access
                </div>
            )}
        </div>
    );
};

export default NoInternet;