import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

 
  const routeTitles = {
    "/": "Home - Adventure Awaits",
    "/update": "Update Profile",
    "/user": "User Profile",
    "/login": "Login - Adventure Awaits",
    "/register": "Register - Adventure Awaits",
    "/reset": "Reset Password",
    "/mountain/:id": "Adventure Details", 
  };

  useEffect(() => {
    const path = location.pathname;

   
    if (path.startsWith("/mountain/")) {
      const id = path.split("/")[2]; 
      document.title = `Adventure Details - ${id}`;
    } else {
      document.title = routeTitles[path] || "Adventure Awaits";
    }
  }, [location]);

  return null; 
};

export default DynamicTitle;
