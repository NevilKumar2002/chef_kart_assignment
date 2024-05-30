import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import Refrigerator from "../../assets/Group 508.svg";
import healthy from "../../assets/Group359.svg";


const DishCard = ({ dish }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="dishcard-container">
            <div className="dishcard-left-container">
                <div className="dishcard-name">
                    <h3 className="dishcard-heading">{dish.name}</h3>
                    <img src={healthy} alt="" />
                    <button className="dishcard-rating">
                        {dish.rating}
                        <img src={process.env.PUBLIC_URL + "/assets/Star.svg"} alt="" />
                    </button>
                </div>
                <div className="dish-contents">
                    <div className="dish-equipments">
                        {dish.equipments.map((equipment, index) => (
                            <div className="dish-equipment" key={index}>
                                <img src={Refrigerator} alt=""  style={{width:'30px', height:'30px'}}/>
                                <p>{equipment}</p>
                            </div>
                        ))}
                    </div>
                    <div className="dishcard-ingredients-button">
                        <strong>Ingredients</strong>
                        <Link to={`ingredients/${dish.id}`}>View List</Link>
                    </div>
                </div>
                <div className="dishcard-description">{dish.description}</div>
            </div>
            <div className="dishcard-right-container">
                <div className="dishcard-image-container">
                    <img src={`${dish.image}`} alt="dish-image" className="dishcard-image" />
                    <div className="image-overlay">
                    <button className="decrement-button" onClick={handleDecrement}>-</button>
                      Add
                        <div className="count">{count}</div>
                        <button className="increment-button" onClick={handleIncrement}>+</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
