import "./../GetMinecraft/GetMinecraft.css";
import BgImg from "./bg-GetMinecraft.png";

function GetMinecraft() {
   return (
      <div className="getminecraft">
         <h1 className="text1">Unite the</h1>
         <span className="text2">Overworld</span>
         <p className="text3">
            <span className="text4">
               Raise your banner high and inspire your allies
            </span>
            <span className="text5">
               to defeat the ravenous piglins and save the
            </span>
            <span className="text6">
               Overworld! Minecraft Legends is coming
            </span>
            <span className="text7">April 18, 2023.</span>
         </p>
         <img src={BgImg} className="bg" alt="backgroungimg" />
         <button className="preorderbtn">PRE-ORDER NOW</button>
      </div>
   );
}

export default GetMinecraft;
