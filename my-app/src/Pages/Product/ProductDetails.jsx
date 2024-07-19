
import { BsCartCheck } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegWindowClose } from 'react-icons/fa';
import "./ProductDetails.css"
import { useContext} from "react";
import { ProductContext } from "../../Context/ProductContext";
import { Link } from 'react-router-dom';

const ProductDetails = () => {

  const{product,filterProduct,AllProduct,addToCart,setClose,detail,view,close}=useContext(ProductContext)
    return ( <div className='pdpage'>{
      close ?
    <div className="imerge">
      
      <div className="detail">
        {detail.map((product)=>{

          return(<div className='scr'key={product.id}>
           <div className="imagery"><img src={product.image} alt={product.description} /></div> 
           <div className="describe">
            <h5>{product.cat}</h5>
            <p>{product.price}</p>
            <button>Add To Cart</button>
            <button onClick={()=>setClose(false)}><FaRegWindowClose/></button>
           </div>
        </div>)
        })}
      </div>
    </div>:null
    }
    <div className="product">
         <div className="page">
        <div className="section">
              
                <div className="filter">
                <div className="categories"><ul>

                <li  onClick={()=>AllProduct()}className="disk" >ALL PRODUCTS</li>
                    <li  onClick={()=>filterProduct("LAPTOP")}className="disk" >LAPTOP</li>
                    <li onClick={()=>filterProduct("WATCH")} className="disk">WATCH</li>
                    <li onClick={()=>filterProduct("PHONE")} className="disk">PHONE</li>
                    <li onClick={()=>filterProduct("HEADPHONE")} className="disk">HEADPHONES</li>
                    <li onClick={()=>filterProduct("OTHER")} className="disk"><div className="color">OTHERS</div></li>
                    </ul> </div></div>
                </div><div className="export">
          <div className="import">
            {product.map((product)=>(<div 
            key={product.id} className="onpoint">
                <img src={product.image} alt={product.description}className="pimage"/>
                <p className="pdes">{product.description}</p>
                <p className="pcat">{product.cat}</p>
                <p className="pprice">${product.price}</p>
                <div className="deflex">
            <div className="new">
              <Link onClick={()=>addToCart(product)} className="lin"><BsCartCheck size={20}/></Link>
              <Link onClick={()=>view(product)} className="lin"><AiOutlineEye size={20}/></Link>
              <Link  className="lin"><AiOutlineHeart size={20}/></Link>
            </div></div>
            </div>
            ))}
          </div></div>
        </div></div>
        </div> );
}
 
export default ProductDetails;