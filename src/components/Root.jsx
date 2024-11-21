import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DynamicTitle from "./DynamicTitle"; 

const Root = () => {
  return (
    <div>
      <DynamicTitle /> 
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
