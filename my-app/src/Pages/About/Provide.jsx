import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Provide.css'; // Assuming Provide.css contains your component styles
import { AboutData } from '../../About'; // Assuming AboutData is imported correctly
import { useState } from 'react';

const Provide = () => {
    const [abt, setAbt] = useState(AboutData); // Assuming AboutData contains initial data

    const FilterAbt = (abts) => {
        // Correcting filter function to filter based on id === abts
        setAbt(abt.filter((x) => x.id === abts));
    };

    return (
        <div className="hast">
            <div className="context">
                <div className="group">
                    <div className="detail">
                        <p className='description'>Do not miss out Amazing Offers in Best Online Sale 2023</p>
                        <Link to='/product' className='sale'>
                            Shop <BsArrowRight/>
                        </Link>
                    </div>
                    {abt.map((x) => (
                        <div className="image" key={x.id}>
                            <img src={x.image} alt='Not Found' className="best" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Provide;
