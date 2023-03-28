import { Link } from "react-router-dom";
import RedeemPage from "../RedeemPage/RedeemPage";
import "./../SmallNav/SmallNav.css";

function SmallNav() {
   return (
      <div className="smallnav">
         <div className="_nav">
            <Link to="#" className="login">
               LOG IN
            </Link>
            <Link to={RedeemPage} className="reedem">
               REDEEM
            </Link>
         </div>
      </div>
   );
}

export default SmallNav;
