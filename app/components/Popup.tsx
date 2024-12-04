'use client';

import { useState, useEffect } from 'react';

interface PopupProps {
  duration: number;
}

export default function Popup({ duration }: PopupProps) {
  const [showPopup, setShowPopup] = useState(true);
  const [timeLeft, setTimeLeft] = useState(duration / 1000); // Duration in seconds

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setShowPopup(false); // Hide pop-up when countdown ends
        }
        return prev - 1;
      });
    }, 1000); // Decrease every second

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [duration]);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('popupClosed', 'true'); // Remember user choice
  };
  // Check if the pop-up has been closed previously
  useEffect(() => {
    const popupClosed = localStorage.getItem('popupClosed');
    if (popupClosed === 'true') {
      setShowPopup(false); // Don't show the pop-up if closed previously
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 animate__animated animate__fadeIn animate__faster">
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 p-8 rounded-xl shadow-lg max-w-md mx-auto transform transition-all duration-500 ease-in-out scale-100 opacity-100">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Data Inaccuracy Warning
          </h2>
          <button
            onClick={handleClose}
            className="text-white text-xl hover:text-gray-200 focus:outline-none"
            aria-label="Close popup"
          >
            &times;
          </button>
        </div>
        <p className="mt-4 text-white text-lg">
          Please note that the data displayed may not be fully accurate or up-to-date. We are actively working to improve the quality and ensure the information is correct. Thank you for your understanding.
        </p>
        <p className="mt-2 text-white text-sm">This pop-up will close in {timeLeft} seconds...</p>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handleClose}
            className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}