import { useState, useEffect } from "react";

/**
 * Custom hook to manage webinar popup display
 * Shows popup after 20 seconds of page visit
 * Shows only once per day (uses localStorage with date check)
 */
export function useWebinarPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was shown today
    const checkIfShownToday = () => {
      const today = new Date().toDateString();
      const lastShownDate = localStorage.getItem("webinar-popup-date");
      
      // If popup was shown today, don't show again
      if (lastShownDate === today) {
        console.log("Webinar popup already shown today - skipping");
        return false;
      }
      
      return true;
    };

    // Show popup after 20 seconds if not shown today
    if (checkIfShownToday()) {
      const timer = setTimeout(() => {
        console.log("Showing webinar popup after 20 seconds");
        
        setShowPopup(true);
        setHasShown(true);
        
        // Mark as shown today in localStorage
        const today = new Date().toDateString();
        localStorage.setItem("webinar-popup-date", today);
      }, 20000); // 20 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  return {
    showPopup,
    closePopup,
    openPopup,
    hasShown,
  };
}

