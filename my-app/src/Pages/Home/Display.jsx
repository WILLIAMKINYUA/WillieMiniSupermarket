import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Display.css'; // Assuming Display.css contains your component styles
import { AboutData } from '../../About'; // Assuming AboutData is imported correctly
import { useState } from 'react';

const Display = () => {
    const [dis, setDis] = useState(AboutData); // Assuming AboutData contains initial data

    const FilterDis = (disc) => {
        // Correcting filter function to filter based on id === image
        setDis(dis.filter((x) => x.id === x.image));
    };

    return (
        <div className="hast">
            <div className="context">
                <div className="group">
                    <div className="detail">
                        <p className='description'>The Best Note Book Collection 2023</p>
                        <Link to='/product' className='sale'>
                            <div className="btncontent">Shop <BsArrowRight/></div>
                        </Link>
                    </div>
                    {dis.map((x) => (
                        <div className="image" key={x.id}>
                            <img src={x.image} alt='Not Found' className="best" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Display;
