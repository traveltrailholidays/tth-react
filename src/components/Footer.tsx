
import { FacebookSolid, XRegular, InstagramRegular, LinkedinSolid } from "../assets/svgs/socialSvg";
import { Link, NavLink } from "react-router-dom"
import { ArrowRightSolid,LocationSolid, MessageSolid, DialerSolid } from "../assets/svgs/uiSvg";

export default function Footer() {
  return (
    <>
      <div className="footer_section flex flex-col">
        <div className="bg-[#382B3C] w-full flex justify-center items-center">
          <div className="max-w-[1800px] w-[90%] py-5 text-white">
            <div className="py-5 flex flex-col gap-5 justify-center items-center sm:flex-row sm:gap-0 sm:items-center sm:justify-between w-full">
              <Link to="/">
                <span className="text-3xl font-semibold select-none">Travel Trail Holidays</span>
              </Link>
              <div className="Social_links flex gap-5 flex-wrap">
                <Link to="https://www.facebook.com/profile.php?id=61557426376541" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                  <FacebookSolid height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
                </Link>
                <Link to="https://www.linkedin.com/company/102316821/admin/feed/posts/?feedType=following" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                  <LinkedinSolid height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
                </Link>
                <Link to="https://twitter.com/TTrailHolidays" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                  <XRegular height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
                </Link>
                <Link to="https://www.instagram.com/traveltrailholidays/" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                  <InstagramRegular height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
                </Link>
              </div>
            </div>
            <div className="w-full h-[0.1px] bg-gray-600"></div>
            <div className="flex flex-wrap gap-5 justify-between  py-5">
              <div className="about_company">
                <div className="heading">
                  <span className="text-xl font-semibold">About Company</span>
                </div>
                <div className="sm:p-3 flex flex-col gap-2 px-3 py-2">
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Home</span>
                    </NavLink>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Packages</span>
                    </NavLink>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Blog</span>
                    </NavLink>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>About</span>
                    </NavLink>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Contact</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="tour_destinations">
                <div className="heading">
                  <span className="text-xl font-semibold">Tour Destinations</span>
                </div>
                <div className="sm:p-3 flex flex-col gap-2 px-3 py-2">
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    {/* <NavLink to="/" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Home</span>
                    </NavLink> */}
                    <span className="text-gray-400">Dehradun</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    {/* <NavLink to="packages" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Packages</span>
                    </NavLink> */}
                    <span className="text-gray-400">Mussoorie</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    {/* <NavLink to="blog" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Blog</span>
                    </NavLink> */}
                    <span className="text-gray-400">Rishikesh</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    {/* <NavLink to="about" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>About</span>
                    </NavLink> */}
                    <span className="text-gray-400">Haridwar</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    {/* <NavLink to="contact" className={({isActive}) => `${isActive ? "text-[#FF5956]" : "text-gray-400"} hover:text-[#FF5956]`}>
                      <span>Contact</span>
                    </NavLink> */}
                    <span className="text-gray-400">Almora</span>
                  </div>
                </div>
              </div>
              <div className="contact_info">
                <div className="heading">
                  <span className="text-xl font-semibold">Contact Info</span>
                </div>
                <div className="sm:p-3 flex flex-col gap-2 px-3 py-2">
                  <div className="flex items-center gap-1 ">
                    <LocationSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <div className="text-gray-400">A-317 Jaitpur Badarpur New Delhi 110044</div>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <MessageSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <div className="text-gray-400">info@traveltrailholidays.com</div>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <DialerSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <div className="text-gray-400">+91 9625992025</div>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <DialerSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                    <div className="text-gray-400">+91 9953276022</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="copyright_section bg-[#241C26] flex justify-center items-center py-5">
          <span className="text-gray-400 text-sm text-center w-[90%]">
            Copyright © 2024 Travel Trail Holidays Pvt Ltd. All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  )
}