import { Link } from "react-router-dom";
import "./../Navbar/Navbar.css";
import Logo from "./Logo.png";

function Navbar() {
   return (
      <div className="navbar">
         <div></div>
         <Link to="/" className="games">
            GAMES
         </Link>
         <Link to="/" className="community">
            COMMUNITY
         </Link>
         <Link to="/" className="merch">
            MERCH
         </Link>
         <Link to="/" className="support">
            SUPPORT
         </Link>
         <img src={Logo} className="logo" alt="logo" to="/" />
         <button className="navbar_btn">GET MINECRAFT</button>
      </div>
   );
}

export default Navbar;
