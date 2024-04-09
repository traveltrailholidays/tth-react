
import Header from "./components/Header"
import Footer from "./components/Footer"

import { Outlet } from "react-router-dom"

import { WhatsAppSolid } from "./assets/svgs/socialSvg"
import ScrollToTop from "./components/ScrollToTop"


export default function App() {

  const PHONE_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <div className=" fixed bottom-10 right-3 cursor-pointer flex flex-col gap-3">
        <ScrollToTop/>
        <a href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="">
          <WhatsAppSolid height="2.5rem" width="2.5rem" fillColor="#FF5956" strokeWidth="0" strokeColor="currentColor"/>
        </a>
      </div>
    </>
  )
}