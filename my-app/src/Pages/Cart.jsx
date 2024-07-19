import { AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';

import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import"./Cart.css"
import Product from './Product/Product';
const Cart = () => {
 const{cart,close,setCart}=useContext(ProductContext) 
 const incqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      )
    );
  };
  
  const decqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      )
    );
  };
  
 const removeCart=(product)=>{
    const exsit=cart.find((x)=>{return x.id === product.id})
    if(exsit.qty > 0){
        setCart(cart.filter((x)=>{return x.id !== product.id}))
 }}
 const Totalprice= cart.reduce((price,item)=>price + item.qty*item.price,0)
     return(<div className="cart">
        {cart.length === 0 && <div className="emptybox">
            <h2 className="empty"> Cart is Empty </h2>
            <Link to="/product"className="ink">Shop Now</Link>
            </div>}
            <div className="border">
                
        <div className="contact">
{cart.map((product)=>(<div className="screen" key={product.id}>
    <button onClick={()=>removeCart(product)}className="close" ><AiOutlineClose/></button>
    <div className="photo"><img src={product.image} alt={product.description} /></div>
    <div className="descibe"><p className="take">{product.cat}</p>
    <p>Price:${product.price}</p><div className="calc">
    <button onClick={()=>incqty(product)}  className="increment">+</button>
    <input type="text"value={product.qty} className="input" autoComplete="off"/>
    <button onClick={()=>decqty(product)} className="decrement">-</button></div>
    <h4 className="subtitle">sub-title:${product.price*product.qty}</h4>
    
    </div>

</div>))}
<h3 className="totalprice">${Totalprice}</h3>
</div>
</div>
    </div>);

}
 
export default Cart;