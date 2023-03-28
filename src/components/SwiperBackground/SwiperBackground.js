import "./SwiperBackground.css";
import bg1 from "./BG-IMAGES/bg-1.png";
import bg2 from "./BG-IMAGES/bg-2.png";
import bg3 from "./BG-IMAGES/bg-3.png";
import bg4 from "./BG-IMAGES/bg-4.png";
import bg5 from "./BG-IMAGES/bg-5.png";
import bg6 from "./BG-IMAGES/bg-6.png";
import bg7 from "./BG-IMAGES/bg-7.png";
import bg8 from "./BG-IMAGES/bg-8.png";

function SwiperBackground() {
   return (
      <div className="swiperBody">
         <img src={bg1} className="bg_1" alt="background 1" />
         <img src={bg2} className="bg_2" alt="background 2" />
         <img src={bg3} className="bg_3" alt="background 3" />
         <img src={bg4} className="bg_4" alt="background 4" />
         <img src={bg5} className="bg_5" alt="background 5" />
         <img src={bg6} className="bg_6" alt="background 6" />
      </div>
   );
}

export default SwiperBackground;
