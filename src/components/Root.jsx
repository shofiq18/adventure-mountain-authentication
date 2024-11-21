import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DynamicTitle from "./DynamicTitle";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        Aos.init({
            
             // offset (in px) from the original trigger point
            delay: 0,

        })
    }, [])
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
