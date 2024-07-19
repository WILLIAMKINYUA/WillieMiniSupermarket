import { FaFacebookSquare} from 'react-icons/fa';
import { IoLogoWhatsapp} from 'react-icons/io';
import { AiFillInstagram} from 'react-icons/ai';
import { BiLogoTwitter} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import"./Social.css"
const Social = () => {
    return ( <div className="become"><h3 className="be">Reach us in our Social Media Platform</h3><div className="social">
        
        <div className="platform">
        <FaFacebookSquare size={32}className="eberf"/>
     <Link to={"https://www.facebook.com/"} className="mak">Facebook</Link>
        </div>
        <div className="platform"><IoLogoWhatsapp size={32} className="eberw" />
        <Link to={"https://web.whatsapp.com/"} className="mak" >Whatsup</Link>
      
        </div>
        <div className="platform">
        <AiFillInstagram size={32}className="eberi"/>
        <Link to={"https://www.instagram.com/"} className="mak" >Instagram</Link>
      
        </div>
        <div className="platform"><BiLogoTwitter size={32}className="eber"/>
        <Link to={"https://twitter.com/"}className="mak" >Twitter</Link>
      
        </div>
    </div></div> );
}
 
export default Social;