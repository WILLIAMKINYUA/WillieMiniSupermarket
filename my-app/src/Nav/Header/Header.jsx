import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Header.css'; // Assuming Header.css contains your component styles
import { useContext, useState } from "react";
import { PRODUCT } from "../../PRODUCT"; // Assuming PRODUCT is imported correctly
import { ProductContext } from "../../Context/ProductContext"; // Assuming ProductContext is imported correctly
import { LogoData } from "../../logo"; // Assuming LogoData is imported correctly

const Header = () => {
  const { searchBtn, search, setSearch } = useContext(ProductContext);
  const [logo, setLogo] = useState(LogoData);

  const FilterLogo = (logos) => {
    setLogo(logo.filter((x) => x.id === logos));
  };

  return (
    <div className="navhome">
      <div className="merge">
        <div className="box">
          {logo.map((x) => (
            <div className="logo" key={x.id}>
              <img src={x.image} alt='Logo' className="logo-image"/>
            </div>
          ))}
        </div>
        <div className="search">
          <input
            type='text'
            value={search}
            placeholder='Search your Product....'
            autoComplete='off'
            onChange={(event) => { setSearch(event.target.value) }}
          />
          <button className="btn" onClick={searchBtn}>Search</button>
        </div>
        <div className="icon">
          <div className="user">
            <AiOutlineUser size={20} />
            <p>Hello, User</p>
          </div>
          <div className="second-icon">
            <Link to='/'>
              <AiOutlineHeart size={20} />
            </Link>
            <Link to='/cart'>
              <BsBagCheck size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="nav-link">
          <div className="nav">
            <Link to='/' className="link">HOME</Link>
            <Link to='/about' className="link">ABOUT</Link>
            <Link to='/product' className="link">PRODUCT</Link>
            <Link to='/contact' className="link">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
