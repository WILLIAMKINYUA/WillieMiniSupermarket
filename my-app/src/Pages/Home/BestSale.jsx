import './BestSale.css';
import { FaTruckMoving } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { BestSaleData } from '../../BestSale'; // Assuming BestSaleData is imported correctly
import { useState } from 'react';

const BestSale = () => {
    const [best, setBest] = useState(BestSaleData); // Assuming BestSaleData contains initial data

    const FilterBest = (bests) => {
        setBest(best.filter((x) => x.id === bests)); // Fixing filter function
    };

    return ( 
        <div className="class">
            <div className="mask">
                {best.map((x) => (
                    <div className="display" key={x.id}>
                        <img src={x.image} alt="Not Found" className="imag" />
                        <h3>{x.name}</h3>
                        <p className="para">{x.available}</p>
                    </div>
                ))}
            </div>
            <div className="item">
                <div className="void">
                    <FaTruckMoving size={82} className="react" />
                    <div className="box">
                        <h3 className="title">Free Shipping</h3>
                        <p>Order above $1000</p>
                    </div>
                </div>
                <div className="void">
                    <BiDollar size={82} className="react" />
                    <div className="box">
                        <h3 className="title">Free Shipping</h3>
                        <p>Order above $1000</p>
                    </div>
                </div>
                <div className="void">
                    <CiPercent size={82} className="react" />
                    <div className="box">
                        <h3 className="title">Return & Refund</h3>
                        <p>Money Back Guarantee</p>
                    </div>
                </div>
                <div className="void">
                    <BiHeadphone size={82} className="react" />
                    <div className="box">
                        <h3 className="title">Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSale;
