import React from "react";
import SmallNav from "./components/SmallNav/SmallNav";
import "./components/reset.css";
import Navbar from "./components/Navbar/Navbar";
import GetMinecraft from "./components/GetMinecraft/GetMinecraft";
import SwiperBackground from "./components/SwiperBackground/SwiperBackground";
import FirstSwiper from "./components/FirstSwiper/FirstSwiper";
import RedeemPage from "./components/RedeemPage/RedeemPage";

function App() {
   return (
      <div className="app">
         <SmallNav />
         <Navbar />
         <GetMinecraft />
         <SwiperBackground />
         <FirstSwiper />
         <RedeemPage />
      </div>
   );
}

export default App;
