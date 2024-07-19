import { FaTruckMoving } from "react-icons/fa";
import './Nav.css'
const Nav = () => {
    return (<div className="cover"><div className="container">
        <div className="truck">
        <FaTruckMoving size={32}/>
        </div>
        <div className="heads">
            FREE Shipping when shopping upto $1000
        </div>
    </div>
    </div>);
}
 
export default Nav;

