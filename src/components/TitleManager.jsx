import { useEffect } from "react";
import { useLocation } from "react-router";

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const pageTitles = {
      "/": "Home | React Router",
      "/about": "About Us | React Router",
      "/contact": "Contact | React Router",
      "/jobs": "Jobs | React Router",
      "/product": "Products | React Router",
    };

    document.title = pageTitles[path] || "React Router App";
  }, [location.pathname]);

  return null; // no UI
};

export default TitleManager;
