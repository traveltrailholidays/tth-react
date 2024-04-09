import "../App.css";
import { Bars, LocationSolid,  DialerSolid } from "../assets/svgs/uiSvg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const PHONE_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 z-40 shadow_allSides">
        <div className="w-full hidden text-sm bg-[#FF5956] lg:flex">
          <div className="w-full bg-[#2D2330] text-gray-400  flex justify-center">
            <div className="max-w-[1800px] w-[90%] flex justify-between py-1">
              <div className="flex gap-10">
                <div className="flex items-center gap-1">
                  <LocationSolid height="1rem" width="1rem" fillColor="#FF5956" strokeWidth="0" strokeColor="currentColor"/>
                  <span>New Delhi, India</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <MessageSolid height="1rem" width="1rem" fillColor="#FF5956" strokeWidth="0" strokeColor="currentColor"/>
                  <span>24/7</span>
                </div> */}
              </div>
              <div className="flex items-center gap-1">
                <DialerSolid height="1rem" width="1rem" fillColor="#FF5956" strokeWidth="0" strokeColor="currentColor"/>
                <span>+91 9625992025</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex header_bg justify-center">
          <div className="w-[90%] max-w-[1800px] flex justify-between items-center h-16">
            <Link to="/" className="select-none">
              <span className="text-xl sm:text-2xl font-bold">Travel Trail Holidays</span>
            </Link>
            <div className="nav_links hidden gap-5 font-semibold items-center lg:flex">
              {/* <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-600"} hover:text-[#FF5956]`}>
                <span className="hover:underline">Home</span>
              </NavLink>
              <NavLink to="packages" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-600"} hover:text-[#FF5956]`}>
                <span className="hover:underline">Packages</span>
              </NavLink>
              <NavLink to="blog" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-600"} hover:text-[#FF5956]`}>
                <span className="hover:underline">Blog</span>
              </NavLink>
              <NavLink to="about" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-600"} hover:text-[#FF5956]`}>
                <span className="hover:underline">About</span>
              </NavLink>
              <NavLink to="contact" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-600"} hover:text-[#FF5956]`}>
                <span className="hover:underline">Contact</span>
              </NavLink> */}
            </div>
            <div>
              <div className="lg:hidden flex gap-4 items-center" onClick={toggleMobileMenu}>
                <Bars height="1.5rem" width="1.5rem" fillColor="#000" strokeWidth="0.5" strokeColor="currentColor" />
              </div>
              
            </div>
            <div className="hidden lg:flex text-white justify-center">
              <div className="flex justify-center items-center gap-10">
                <a href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span className="font-semibold hover:underline">Book Now</span>
                </a>
                <a href="/" className="flex items-center justify-center">
                  <span className="font-semibold hover:underline">Login</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}