
import { PRODUCT } from "../../PRODUCT";
import { BsCartCheck } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import './HomeProduct.css'
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
const HomeProduct = () => {
    const{product,addToCart,view}=useContext(ProductContext)
    return (<div className="hm"> <div className="container">
        <div className="map"><h2 className="maptitle">Top Product</h2></div><div className="class">
        {PRODUCT.map((product)=>( 
        <div className="preview"key={product.id}>
            <img src={product.image} alt="Not Found"className="image"/>
            <div className="description">
                <p className="cate">{product.cat}</p>
                <p className="des"><b>{product.description}</b></p>
                <p className="price">${product.price}</p>
            </div><div className="headicon">
            <div className="icon"><ul>
                <li onClick={()=>addToCart(product)} className="linkz"><BsCartCheck size={15}/></li>
                <li onClick={()=>view(product)} className="linkz"><AiOutlineEye size={15}/></li>
                <li className="linkz"><AiOutlineHeart size={15}/></li>
                </ul> </div></div>
            </div>
       
            ))}
 </div>
    </div></div> );
}
 
export default HomeProduct;